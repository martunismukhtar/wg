import React, { useState, useEffect, useRef } from 'react';
import { Map, View } from 'ol';
import TileLayer from 'ol/layer/Tile';
import TileWMS from "ol/source/TileWMS";
import VectorLayer from 'ol/layer/Vector';
import VectorSource from 'ol/source/Vector'
import GeoJSON from 'ol/format/GeoJSON';
import {Circle, Fill, Stroke, Style} from 'ol/style';
import OSM from 'ol/source/OSM';
import { transform } from "ol/proj";
import 'ol/ol.css';
import './App.css';
import Navbar from './components/inc/Navbar';
import { faBars, faHome, faAlignJustify } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Select from 'ol/interaction/Select';
import Modal from './components/inc/Modal';
// import { useTranslation } from 'react-i18next';
import i18next from 'i18next';
import LeftBar from './components/inc/LeftBar';
import RightBar from './components/inc/RightBar';
import Keramaian from './components/inc/Keramaian';

import useLocalStorage from 'use-local-storage';

let initialMap, view;
function App() {
	
	const [theme, setTheme] = useLocalStorage('theme' ? 'dark' : 'light')
	const [infolokasi, setInfoLokasi] = useState(true);
	const [center, setCenter] = useState([106.816666, -6.2]);
  	const [map, setMap] = useState();
  	const [right, showhideRight] = useState(false);
  	const [left, showhideLeft] = useState(false);
  	const [wilayah, setWilayah] = useState([]);
	const [keramaian, setKeramaian] = useState([]);  
	const [modalState, setModalState] = useState(false);
	const [infoState, setInfoState] = useState([]);
	
	const [lyrState, setLyrState] = useState([]);
	const mapElement = useRef();
	const mapRef = useRef();
	mapRef.current = map;

	useEffect(() => {
		view = new View({
			center: transform(
            	[parseFloat(center[0]), parseFloat(center[1])],
                "EPSG:4326",
                "EPSG:3857"
            ),
            zoom: 6,
            projection: "EPSG:3857",
		});
		setModalState(false)
     	initialMap = new Map({
        target: mapElement.current,
        layers: [
        	new TileLayer({
				source: new OSM(),
				title:'lyr-osm'
        	}),
			new TileLayer({
				source: new TileWMS({
					url: 'http://pupracehbarat.id:8080/geoserver/sitrab/wms',
					params: {
						LAYERS: "sitrab:pola_ruang",
						TRANSPARENT: "true",
						FORMAT: "image/png",
						TILED: true,
					},
					serverType: "geoserver",
					crossOrigin: "",
				}),
				title:'lyr-pupr'
			}),
    	],
        view: view,
    	});
    	setMap(initialMap);

		let lyrState = [];
		const fetchWilayah = async () => {
			await fetch("http://127.0.0.1:8000/api/wilayah")
			.then(res => res.json())
			.then(
				(result) => {
					setWilayah(result.data)
					for(let l=0;l<result.data.length;l++) {
						lyrState.push({
							select: true,
							id:result.data[l].id,
							name:'lyr-'+result.data[l].id,
							layername:result.data[l].name,
						});
						
						initialMap.addLayer(new VectorLayer({
							source: new VectorSource({
							  	features: new GeoJSON().readFeatures({
									'type': 'FeatureCollection',
									'crs': {
										'type': 'name','properties': { "name": "urn:ogc:def:crs:OGC:1.3:CRS84" },
									},
									'features': [{
										"type": "Feature",
										"geometry": {"type": "Point","coordinates": [parseFloat(result.data[l].longitude), parseFloat(result.data[l].latitude)]},
										'id':result.data[l].id,'properties':{'name': result.data[l].name, 'id':result.data[l].id}
									}]},{
								  	dataProjection: 'EPSG:4326',
								  	featureProjection: 'EPSG:3857'
							  	}),
						  	}),
							style:new Style({
							  	image: new Circle({
									radius: 14,
									fill: new Fill({ color: "rgba(3, 152, 252, 0.6)" }),
									stroke: new Stroke({
								  		color: [250, 251, 252],
								  		width: 2,
									}),
							  	}),
							}),
							title:'lyr-'+result.data[l].id
						}))
					}
					setLyrState(lyrState)
				}
			)
		};

		const fetchKeramaian = async () => {
			await fetch("http://127.0.0.1:8000/api/keramaian")
			.then(res => res.json())
			.then(
				(result) => {
					setKeramaian(result.data)
				}
			)
		};

        fetchWilayah();
		fetchKeramaian();
		const selected = new Style({
			image: new Circle({
				radius: 18,
				fill: new Fill({ color: "rgba(230, 11, 88, 0.6)" }),
				stroke: new Stroke({
					  color: [250, 251, 252],
					  width: 2,
				}),
			  })
		});

		var selectClick = new Select({style: selected});
		initialMap.addInteraction(selectClick);
		
		initialMap.on("singleclick", (evt) => {
			var feature = initialMap.forEachFeatureAtPixel(evt.pixel, function(feature, layer) {
				return feature
			})
			if(feature) {
				let koordinat = [];
				let transform_koordinat = transform(
					[parseFloat(evt.coordinate[0]), parseFloat(evt.coordinate[1])],
					"EPSG:3857",
					"EPSG:4326"
				);
				koordinat.push({
					name:feature.get('name'),
					lokasi:transform_koordinat[0]+', '+transform_koordinat[1]
				});
				setInfoState(koordinat);
				setModalState(true);
				setInfoLokasi(true);
			}
		});

		initialMap.on('pointermove', function (e) {
			const pixel = initialMap.getEventPixel(e.originalEvent);
			const hit = initialMap.hasFeatureAtPixel(pixel);
			initialMap.getTarget().style.cursor = hit ? 'pointer' : '';
		  });
		
  	},[]);

	function handleVisible(e, index) {
		let checked = e.target.checked;
		setLyrState(lyrState => {
			return lyrState.map((item, j) => {
		  		return item.name===e.target.value ? {
					select: checked,
					id: item.id,
					name: item.name,
					layername: item.layername
		  		} : item
			})
	  	})
	  	initialMap.getAllLayers().forEach(function(layer, index, array){
			if(layer.get('title')===e.target.value) {
				layer.setVisible(e.target.checked)
			}
	  	});
  	}
  	function handlePop(data) {
		const filteredx =  keramaian.filter(number => number.total_user == data);
		let info = [];

		for(let ll=0;ll<filteredx.length;ll++) {
			info.push({
				name:filteredx[ll].brand,
				total:filteredx[ll].user_per_brand,
				total_user:filteredx[ll].total_user,
				range:filteredx[ll].range,
			});
			
		}
		setInfoState(info);
		setInfoLokasi(false);
		setModalState(true);
  	}

	function handleTranslate(lang){
		i18next.changeLanguage(lang)
	}
  	function switchTheme(th) {
    	const newTheme = th === 'light' ? 'light' : 'dark';
    	setTheme(newTheme)
  	}
  	function zoomTo(data, zoomLevel=13) {
		let koordinat, point;
		if(Array.isArray(data)) {
			point = transform(
			[
				parseFloat(data[0]), 
				parseFloat(data[1])
			],
			"EPSG:4326",
			"EPSG:3857"
			);
		} else {
			koordinat = data.target.value.split('|');
	  		point = transform(
			[
				parseFloat(koordinat[0]), 
				parseFloat(koordinat[1])
			],
			"EPSG:4326",
			"EPSG:3857"
			);
		}
		initialMap.getView().setCenter(point);
    	initialMap.getView().setZoom(zoomLevel);
  	}
	return (
		<div data-theme={theme}>
			<Navbar handleTranslate={handleTranslate} switchTheme={switchTheme} theme={theme}/>
			<div style={{height:'93vh',width:'100%'}} ref={mapElement} className="map-container">
				<FontAwesomeIcon icon={faHome} style={{fontSize:"13px", backgroundColor: "rgba(0,60,136,0.5)", padding:"4px"}} 
					className='btn btn-secondary hbar' onClick={()=>{
						setModalState(false);
						
						zoomTo(center, 6);
					}}
				/>
				<FontAwesomeIcon icon={faBars} 
					style={{fontSize:"13px", backgroundColor: "rgba(0,60,136,0.5)", padding:"6px"}} 
					className='btn btn-secondary lbar' onClick={()=>{
						setModalState(false);
					showhideLeft(!left);
					}}
				/>
				<FontAwesomeIcon icon={faAlignJustify} 
						style={{fontSize:"13px", backgroundColor: "rgba(0,60,136,0.5)", padding:"6px"}} 
					className='btn btn-secondary rbar' onClick={()=>{
						setModalState(false);
						showhideRight(!right);
					}}
				/>
				{right && (<RightBar showhideRight={showhideRight} zoomTo={zoomTo} wilayah={wilayah} right={right}/>)}
				{
				left &&
				(<LeftBar lyrState={lyrState} showhideLeft={showhideLeft} left={left} handleVisible={handleVisible}/>)
				}
			</div>
			<Keramaian data={keramaian} handlePop={handlePop}/>
			{
				<Modal data={infoState} 
					show={modalState} hide={()=> setModalState(false)} infolokasi={infolokasi}/>
			}
			
		</div>
	);
}


export default App;

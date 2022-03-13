import React, { useState} from 'react';
import { useTranslation } from 'react-i18next';
import FaktaSingkat from '../data/FaktaSingkat';

function RightBar(props){
  const { t } = useTranslation();

  const [index, setIndex] = useState(0);

    return (
        <div className="card right-panel">
            <div className="card-body">
              <h5 className="card-title">{t('cari_lokasi.1')}
              <button type="button" className="btn-close float-end" onClick={()=>props.showhideRight(!props.right)} aria-label="Close"></button>
              </h5>
              <br></br>
              <select className="form-select" onChange={(e)=>{
                
                setIndex(e.target.value);
                props.zoomTo(e);
                }} aria-label="Default select example">
                <option >{t('pilih_lokasi.1')}</option>
                {
                  props.wilayah.map((item, index)=>
                    <option key={index} value={item.longitude+'|'+item.latitude}>{item.name}</option>
                  )
                }
               
              </select>
              <br></br>
              <h5>{t('fakta_singkat.1')}</h5>
              <FaktaSingkat index={index}/>
             
            </div>
          </div>
    );
}

export default RightBar;
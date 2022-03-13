import React, { useState } from 'react';

function FaktaSingkat(props){
    const [fakta, setFakta] = useState([{
        'koordinat':'97.318123|5.051701',
        'text':'Lhoksukon adalah sebuah kecamatan di Kabupaten Aceh Utara, Aceh, Indonesia. Lhoksukon juga berperan sebagai ibu kota Kabupaten Aceh Utara. Aceh Utara sangat berkembang di sektor pertanian dan perkebunan karna warga Aceh Utara sangat tertolong dengan pertanian dan perkebunan baik sawit kelapa maupun pinang. (Wiipedia)'
        },{
            'koordinat':'110.828316|-7.550676',
            'text':'Banjarsari adalah sebuah kecamatan di Kabupaten Ciamis, Jawa Barat, Indonesia. Sebutan yang pernah populer untuk kecamatan ini adalah "Kota Nyari" yang merupakan akronim dari; "nyaman", "asri", "rindang", dan "indah". Kini istilah tersebut tidak lagi terlalu menggema'
        },{
            'koordinat':'99.068169|2.970042',
            'text':'Kota Pematangsiantar adalah salah satu kota di provinsi Sumatra Utara, Indonesia. Karena letak Pematangsiantar yang strategis, kota ini dilalui oleh jalan Raya Lintas Sumatra'
        },{
            'koordinat':'101.445007|1.694394',
            'text':'Kota Dumai adalah sebuah kota di Provinsi Riau, Indonesia, sekitar 201 km dari Kota Pekanbaru. Kota Dumai adalah kota dengan wilayah administrasi terluas kedua di Indonesia berdasarkan statusnya sebagai kotamadya, setelah Kota Palangka Raya. Kota ini berawal dari sebuah dusun kecil di pesisir timur Provinsi Riau'
        },{
            'koordinat':'107.51976|-7.025253',
            'text':'Soreang adalah sebuah kecamatan di Tatar Pasundan, Kabupaten Bandung, provinsi Jawa Barat, Indonesia. Soreang juga adalah ibukota dari Kabupaten Bandung, setelah pemindahan dari Kota Bandung dan Baleendah'
        },{
            'koordinat':'120.195465|-2.994494',
            'text':'Soreang adalah sebuah kecamatan di Tatar Pasundan, Kabupaten Bandung, proWara adalah sebuah kecamatan di Kota Palopo, Sulawesi Selatan, Indonesia'
        },{
            'koordinat':'128.190643|-3.654703',
            'text':'Kota Ambon atau Ambong dalam bahasa setempat adalah ibu kota dan kota terbesar dari Provinsi Maluku. Kota yang berdiri di selatan Pulau Ambon ini berawal dari pendirian sebuah benteng yang senantiasa menjadi pusat pertumbuhan kota'
        },{
            'koordinat':'95.323753|5.54829',
            'text':'Banda Aceh merupakan kotamadya dan ibukota dari provinsi Aceh, provinsi paling Utara di pulau Pulau Sumatera, Indonesia. Sebagai pusat pemerintahan, Banda Aceh menjadi pusat kegiatan ekonomi, politik, sosial dan budaya'
        },{
            'koordinat':'113.482498|-7.161367',
            'text':'Pamekasan adalah sebuah kecamatan yang berada di Kabupaten Pamekasan, provinsi Jawa Timur, Indonesia. kecamatan ini juga menjadi ibukota dari kabupaten Pamekasan. Kecamatan Pamekasan terletak di tengah-tengah Pulau Madura'
        },{
            'koordinat':'106.816666|-6.2',
            'text':'Jakarta, atau secara resmi bernama Daerah Khusus Ibukota Jakarta atau Jakarta Raya adalah ibu kota negara dan kota terbesar di Indonesia. Jakarta merupakan satu-satunya kota di Indonesia yang memiliki status setingkat provinsi. Jakarta terletak di pesisir bagian barat laut Pulau Jaw'
        }
    ]);
    
    return (
        <p>{
            props.index ?
            fakta.map((item)=>{
                if(item.koordinat===props.index) {
                    return item.text;
                }
            }):''
        }</p>
    );
}

export default FaktaSingkat;
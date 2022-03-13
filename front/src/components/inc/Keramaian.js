import React, { useState, useEffect } from 'react';
import '../../App.css';

function Keramaian(props){
    const [color, setColor] = useState([
        'btn-primary', 'btn-warning', 'btn-secondary', 'btn-success', 'btn-danger',
        'btn-info', 'btn-dark', 'btn-light', 'btn-dark', 'btn-light'
    ]);
    let nm = 0;

    // const uniqueArray = obj.arr.filter((value, index) => {
    //     const _value = JSON.stringify(value);
    //     return index === obj.arr.findIndex(obj => {
    //       return JSON.stringify(obj) === _value;
    //     });
    //   });

    const ids = props.data.map(o => o.total_user)
    const filtered = props.data.filter(({total_user}, index) => !ids.includes(total_user, index + 1))

    // console.log(filtered)

    return (
        <div className='position-relative mx-auto clearfix'>        
            <div className='position-absolute bottom-0 start-50 translate-middle' style={{marginBottom:"10px"}}>
                {
                    
                    filtered.map((item, i)=>
                        (
                        <div key={i} className={`d-inline-block btn ${color[i]} dot`} 
                            style={{padding: '.75rem 0.75rem'}}
                            onClick={()=>props.handlePop(item.total_user)}
                            >
                            <span className='text-center'>{item.total_user}</span>
                        </div>
                        )
                    )
                }
            </div>
        </div>
    );
}

export default Keramaian;
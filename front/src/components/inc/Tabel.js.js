import { useState, useEffect, useRef } from 'react'


function Tabel(props){
    
    return(
        <div>
				  <table className="table">
            
          {
              props.infolokasi ? 
              <tbody>   
              <tr>
                <td><b>Name</b></td>
                <td>
                {
                  props.data.length>0 ?
                    props.data[0].name :''
                }</td>
              </tr>
              <tr>
                <td><b>Koordinat</b></td>
                <td>
                {
                  props.data.length>0 ?
                    props.data[0].lokasi :''
                }</td>
              </tr>

            </tbody>:
            <tbody>   
            <tr>
              <td className='text-center' colSpan={2}> 
                {
                  props.data.length>0 ? props.data[0].rentang:''
                }
                <b>(
                  {
                    props.data.length>0 ? props.data[0].total_user:''
                  })</b></td>
            </tr>
            <tr>
              <td className='text-center'><b>Name</b></td>
              <td className='text-center'><b>Total</b></td>
            </tr>
            {
              props.data.map((item, i) =>
                  <tr key={i}>
                  <td className='text-center'>{item['name']}</td>
                  <td className='text-center'>{item['total']}</td>
                </tr>
              )
            }
          </tbody>
          }

					
					</table>
                    
                  </div>
                 
    )
}

export default Tabel;
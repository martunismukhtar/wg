import React from 'react';
import Tabel from './Tabel.js.js';

function Modal(props){

    let modal_style, cls;    
    if(props.show) {
        modal_style = {
            display:'block',
            backgroundColor:'rgb(0,0,0,0.8)'
        }
        cls= 'show';
    } else {
        modal_style = {
            display:'none',
            backgroundColor:'rgb(0,0,0,0.8)'
        }
        cls= '';
    }
    
    return(
        <div className={`modal fade shadow-sm ${cls}`} style={modal_style}>
            <div className="modal-dialog">
                <div className="modal-content">
                  	<div className="modal-header text-center">
                    	<h5 className="modal-title">Informasi</h5>
                    	<button type="button" className="btn-close" data-bs-dismiss="modal" 
                      		onClick={() => props.hide()}
                      		aria-label="Close">
						</button>
                  	</div>
                  	<div className="modal-body">
                    	<Tabel data={props.data} infolokasi={props.infolokasi}/>
                  	</div>
                </div>
            </div>
        </div>
    )
}

export default Modal;
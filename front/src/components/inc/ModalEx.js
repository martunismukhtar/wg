import { useState, useEffect, useRef } from 'react'
import {Modal} from 'bootstrap';
import Tabel from './Tabel.js';

function ModalEx(props){
    const [modal, setModal] = useState([]);
    const [rentang, setRentang] = useState([]);
    const parseExceptionModal = useRef();
    useEffect(() => {
        const modal1 = new Modal(parseExceptionModal.current, {keyboard: false})
        setModal(modal1)
        
    },[])

	if(props.show) {
		modal.show()
	}
  // setRentang(props.data[0].rentang)
  // console.log(props.data[0].rentang)

  // props.data.map((item) =>
  // Object.keys(item).map(key => 
  //   console.log(key)
  // )
    console.log(props.data)
  // )
    
    return(
        <div className="modal" tabIndex="-1" ref={parseExceptionModal}>
              <div className="modal-dialog">
                <div className="modal-content">
                  <div className="modal-header">
                    <h5 className="modal-title text-center">Informasi</h5>
                    <button type="button" className="btn-close" data-bs-dismiss="modal" 
                      onClick={() => modal.hide()}
                      aria-label="Close"></button>
                  </div>
                  <div className="modal-body">

                    <Tabel data={props.data} infolokasi={props.infolokasi}/>
				  
                    
                  </div>
                  
                </div>
              </div>
            </div>
    )
}

export default ModalEx;
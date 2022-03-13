import React from 'react';
import Flag from 'react-flagkit';
import lhk from '../images/lhoksukon.png'
import '../../App.css';
function Navbar(props){
    let newtheme = "navbar-"+props.theme+" bg-"+props.theme;
    return (
        <div>
        
        <header className="p-3 border-bottom">
    <div className="container">
      <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
        

        <ul className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
        <li className='nav-item'>
                            <Flag country="ID" size={12} onClick={()=>props.handleTranslate('id')} style={{marginRight:'4px', cursor:'pointer'}}/>
                        </li>
                        <li className='nav-item'>
                            <Flag country="US" size={12} onClick={()=>props.handleTranslate('en')} style={{marginRight:'4px', cursor:'pointer'}}/>
                        </li>
          
        </ul>

        <div className="text-end">
          <a href="#" className="d-block link-dark text-decoration-none " id="dropdownUser1" aria-expanded="false">
            <img src={lhk} alt="mdo" className="rounded-circle" 
            width="32" height="32"/>
          </a>
          
        </div>

      </div>
    </div>
  </header>
  </div>
    );
}

export default Navbar;
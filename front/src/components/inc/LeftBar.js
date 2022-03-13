import React from 'react';
import { useTranslation } from 'react-i18next';

function LeftBar(props){
    const { t } = useTranslation();

    return (
        <div className="card left-panel">
            <div className="card-body header-left-panel">
              <div className="header-left-panel">
                <h6 className="card-title">{t('content.1')}
                  <button type="button" className="btn-close float-end" 
                    onClick={()=>props.showhideLeft(!props.left)} aria-label="Close"></button>
                </h6>
              </div>
            </div>
            <div className="card-body">
            <h6>
                {t('daftar_peta.1')}
              </h6>
              <ul className="list-group">
                { props.lyrState.length>0 ? 
                  props.lyrState.map((item, index)=>
                    <li key={item.id} className="list-group-item">
                      <div className="form-check">
                        <input className="form-check-input" 
							name={'lyr-'+item.id}  
							checked={item.select}
							type="checkbox" value={'lyr-'+item.id} 
                          	onChange={(e)=>props.handleVisible(e, index)}
                        />
                        <label className="form-check-label" htmlFor="flexCheckDefault">
                          {item.layername}
                        </label>
                      </div>  
                    </li>
                  )
                  :''
                }
                
              </ul>
			  <ul>
			 
			  </ul>
            </div>

          </div>
    );
}

export default LeftBar;
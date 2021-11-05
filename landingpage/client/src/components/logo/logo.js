import React from "react";
import "./logo.css"
import LocationOnIcon from '@mui/icons-material/LocationOn';


function Logo() {
    return(
        <div className="container">
            <div className="logoContainer">
                <ul className="nav nav-tabs" id="logoNav">
                 <li className="nav-item">
                     <p> <LocationOnIcon/> 2720 NJ-27 North Brunswick, NJ 08902</p>
                 </li>
                </ul>
                
            </div>

        </div>
    )
}

export default Logo

import React from "react";
import "./logo.css"
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PhoneIcon from '@mui/icons-material/Phone';


function Logo() {
    return(
        <div>
            {/* <div className="logoContainer"> */}
                <ul className="nav nav-tabs" id="logoNav">
                 <li className="nav-item logo">
                     <p> <LocationOnIcon/> 2720 NJ-27 North Brunswick, NJ 08902</p>
                 </li>
                 <li className="nav-item logo" id="Phone"> 
                 <p>
                     <PhoneIcon/> 732-422-7358
                 </p>
                 </li>
                </ul>
                
            {/* </div> */}

        </div>
    )
}

export default Logo

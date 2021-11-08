import React from "react";
import "./style.css";
import EDL from "../../edl2.png";
import { Link } from "react-router-dom";



function Jumbotron() {
    return (
        <div className="jumbotron text-center">
            <div className="jumbotron text-center">
                <div className="card logoCard" style={{ border: "none" }}>
                    <img src={EDL} alt="edl" />
                    <h1 className="container title">
                        Excelsior Diagnostic Laboratories
                    </h1>
                </div>

            </div>
            <div className="card navbarCard">
                <ul className="nav nav-tabs" id="navBar" style={{border:"none"}}>
                    <li className="nav-item" title="Home Page">
                        <Link to="/" >
                            Home
                        </Link>
                    </li>
                    <br/>
                    <li className="nav-item" title="About">
                        <Link to="/about" >
                            About
                        </Link>
                    </li>
                    <br/>
                    <li className="nav-item" title="Departments">
                        <Link to="/departments" >
                            Departments
                        </Link>
                    </li>
                    <br/>
                    <li className="nav-item" title="Portal">
                        <Link to="/portal" >
                            Portal
                        </Link>
                    </li>
                    <br/>
                    <li className="nav-item" title="Contact">
                        <Link to="/contact" >
                            Contact
                        </Link>
                    </li>
                </ul>

            </div>
        </div>
    );
}

export default Jumbotron
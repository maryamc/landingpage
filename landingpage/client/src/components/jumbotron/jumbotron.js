import React, { useState } from "react";
import "./style.css";
import EDL from "../../edl3.png";
import { Link } from "react-router-dom";
import { Offcanvas } from "react-bootstrap";
import { Button } from 'react-bootstrap';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';



function Jumbotron() {

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [status, setStatus] = useState("Submit");
    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus("Sending...");
        const { name, number, email, message } = e.target.elements;
        let details = {
            name: name.value,
            number: number.value,
            email: email.value,
            message: message.value,
        };
        let response = await fetch("http://localhost:3000/", {
            method: "POST",
            headers: {
                "Content-Type": "application/json;charset=utf-8",
            },
            body: JSON.stringify(details),
        });
        setStatus("Submit");
        let result = await response.json();
        alert(result.status);
    };


    return (
        <div className="jumbotron text-center">
            <div className="jumbotron text-center">
                <div className="card logoCard" style={{ border: "none" }}>
                    <img src={EDL} alt="edl" />
                </div>

            </div>
            <div className="card navbarCard">
                <ul className="nav nav-tabs" id="navBar" style={{ border: "none" }}>
                    <li className="nav-item" title="Home Page">
                        <Link to="/" >
                            Home
                        </Link>
                    </li>
                    <br />
                    <li className="nav-item" title="About">
                        <Link to="/about" >
                            About
                        </Link>
                    </li>
                    <br />
                    <li className="nav-item" title="Departments">
                        <Link to="/departments" >
                            Departments
                        </Link>
                    </li>
                    <br />
                    <li className="nav-item" title="Portal">
                        <Link to="/portal" >
                            Portal
                        </Link>
                    </li>
                    <br />
                    <li className="nav-item" title="Contact" onClick={handleShow}>
                        <Link to="/" >
                            Contact
                        </Link>
                    </li>
                    <Offcanvas show={show} onHide={handleClose} style={{ backgroundColor: "rgb(127, 216, 171)" }}>
                        <Offcanvas.Header closeButton>
                            <Offcanvas.Title>
                                <p>
                                    <PhoneIcon /> 732-422-7358
                                </p>
                                <p>
                                    <EmailIcon /> excelsiordiagnosticlab@gmail.com
                                </p>
                            </Offcanvas.Title>
                        </Offcanvas.Header>
                        <Offcanvas.Body>
                            <div>
                                <div className="contactDiv" >
                                    <div className="card contactCard border-0" style={{ backgroundColor: "rgb(127, 216, 171)" }} >
                                        <h1> Contact Us!</h1>
                                        <div className="card-body bodyCard">
                                            <form onSubmit={handleSubmit}>
                                                <div>
                                                    <label htmlFor="name">Name:</label>
                                                    <input className="inputLine" type="text" id="name" required />
                                                </div>
                                                <div>
                                                    <label htmlFor="number">Phone #:</label>
                                                    <input className="inputLine" type="text" id="number" required />
                                                </div>
                                                <div>
                                                    <label htmlFor="email">Email:</label>
                                                    <input className="inputLine" type="email" id="email" required />
                                                </div>
                                                <div>
                                                    <label htmlFor="message">Message:</label>
                                                    <textarea className="inputLine" style={{ boxSizing: "border-box" }} id="message" required />
                                                </div>
                                                <Button variant="danger" type="submit">{status}</Button>
                                                {/* <button type="submit">{status}</button> */}
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Offcanvas.Body>
                    </Offcanvas>
                </ul>

            </div>
        </div>
    );
}

export default Jumbotron
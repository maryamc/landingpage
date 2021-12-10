import React, { useState } from "react";
import "./contactForm.css"
import { Button } from "react-bootstrap";

const ContactForm = () => {
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
        <div className="contactDiv">
        <div className="card contactCard" style={{ backgroundColor: "rgb(127, 216, 171)", borderRadius: "20px" }}>
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
    );
};

export default ContactForm;
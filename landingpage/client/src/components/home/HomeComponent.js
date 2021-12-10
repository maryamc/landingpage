import React from "react";
import "./home.css";
import Pipette from "../../pipette.png";
import Blood from "../../bloodpath.jpeg";
import Covid from "../../covid2.jpeg";

import { Carousel } from 'react-bootstrap';
import { Card } from 'react-bootstrap';
import { Row } from 'react-bootstrap';
import { Col } from 'react-bootstrap';
import CheckCircleTwoToneIcon from '@mui/icons-material/CheckCircleTwoTone';
import AccountCircleTwoToneIcon from '@mui/icons-material/AccountCircleTwoTone';
import RecommendTwoToneIcon from '@mui/icons-material/RecommendTwoTone';
import { Link } from "@mui/material";

function HomeComponent() {
    return (
        <div className="homeDiv">
            <div className="container">
                <Carousel fade>
                    <Carousel.Item>
                        <img
                            className="d-block w-100 h-50"
                            src={Covid}
                            alt="First slide"
                        />
                        <Carousel.Caption>
                            <h3>First slide label</h3>
                            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100 h-50"
                            src={Blood}
                            alt="Second slide"
                        />

                        <Carousel.Caption>
                            <h3>Second slide label</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100 h-50"
                            src={Pipette}
                            alt="Third slide"
                        />

                        <Carousel.Caption>
                            <h3>Third slide label</h3>
                            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
                <br />
                <div>

                    <Row xs={1} md={3} className="g-4">
                        <Col>
                            <Card className="card infoCard border-0">
                                <Card.ImgOverlay>
                                    <Card.Title>
                                        <h1>
                                            <CheckCircleTwoToneIcon style={{ fill: "green", fontSize: "120px" }}></CheckCircleTwoToneIcon>
                                        </h1>
                                        <p className="underIcon">
                                            Accurate Results In 12-24 Hours
                                        </p>
                                    </Card.Title>
                                    <Card.Body>
                                        <p className="underTitle"><Link>
                                            Read More </Link>
                                        </p>
                                    </Card.Body>
                                </Card.ImgOverlay>
                            </Card>
                        </Col>
                        <Col>
                            <Card className="card infoCard border-0">
                                <Card.ImgOverlay>
                                    <Card.Title>
                                        <h1>
                                            <AccountCircleTwoToneIcon style={{ fill: "green", fontSize: "120px" }}></AccountCircleTwoToneIcon>
                                        </h1>
                                        <p className="underIcon">
                                            Patient Comes First
                                        </p>
                                    </Card.Title>
                                    <Card.Body>
                                        <p className="underTitle"><Link>
                                            Read More </Link>
                                        </p>
                                    </Card.Body>
                                </Card.ImgOverlay>
                            </Card>
                        </Col>
                        <Col>
                            <Card className="card infoCard border-0">
                                <Card.ImgOverlay>
                                    <Card.Title>
                                        <h1>
                                            <RecommendTwoToneIcon style={{ fill: "green", fontSize: "120px" }}></RecommendTwoToneIcon>
                                        </h1>
                                        <p className="underIcon">
                                           Health Plans We Accept
                                        </p>
                                    </Card.Title>
                                    <Card.Body>
                                        <p className="underTitle"><Link>
                                            Read More </Link>
                                        </p>
                                    </Card.Body>
                                </Card.ImgOverlay>
                            </Card>
                        </Col>

                    </Row>
                </div>

                <div className="container second">
                    <p className="hello">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.

                    </p>


                </div>
            </div>
        </div>
    )
}

export default HomeComponent
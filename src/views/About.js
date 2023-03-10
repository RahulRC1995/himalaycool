import React from 'react'
import { Alert, Col, Container, Row } from 'reactstrap'
import {
    GiArcheryTarget
} from "react-icons/gi"
import {
    MdVisibility
} from "react-icons/md"

export const About = () => {
    return (

        <Container className='mt-5 '>
            <Row >
                <Col md="12" className="justify-content-md-center"  >

                    <h3 className='mt-3'>About Us</h3>
                    <p className='mt-3'>Himalaya is a marketing and service providing company located in UAE, for solutions of cold rooms. Himalaya has over 10 years of experience and is committed to provide the highest standard of services for complete client satisfaction.</p><p> Himalaya consist of highly qualified engineers and technicians who can provide the most reliable services to the customers.</p>

                    <Row className='m-5 p-5 '>
                        <Col md="6" className='p-0' >       <Alert className='text-center cardBlocks' style={{ backgroundColor: "#4fc3f7", height: "350px", width: '100%', border: "0px", borderRadius: "0px" }} >
                            <MdVisibility size={70} color="#fff" style={{ height: 120 }} />
                            <h3 className="alert-heading  " style={{ color: "#fff" }}>
                                Our Vision
                            </h3>
                            <p style={{ color: "#fff" }}>
                                To become a respectable firm in
                                Refrigeration industry by providing value added
                                services with outstanding products which add
                                values to our reputation and generating
                                maximum virtues.
                            </p>
                        </Alert></Col>
                        <Col md="6" className='p-0 cardBlocks'>
                            <img src="MissionBanner.jpg" class="img-fluid" alt="im" style={{ height: "350px", width: '100%' }} />
                        </Col>
                    </Row>
                    <Row className='m-5 p-5'>
                        <Col md="6" className='p-0 cardBlocks'>
                            <img src="TargetBanner.jpg" class="img-fluid" alt="im" style={{ height: "350px", width: '100%' }} />
                        </Col>
                        <Col md="6" className='p-0' >       <Alert className='text-center cardBlocks ' style={{ backgroundColor: "#81C784", height: "350px", width: '100%', border: "0px", borderRadius: "0px" }} >
                            <GiArcheryTarget size={70} color="#fff" style={{ height: 120 }} />
                            <h3 className="alert-heading  " style={{ color: "#fff" }}>
                                Our Mission
                            </h3>
                            <p style={{ color: "#fff" }}>
                                Himalaya is committed to provide
                                customers in UAE, Oman, Qatar, and India
                                with all kinds of services in refrigeration
                                applications, with the most competitive
                                prices and the best quality, with a special
                                focus on projects that are difficult to do.
                            </p>
                        </Alert></Col>
                    </Row>
                </Col>
            </Row>
        </Container>


    )
}

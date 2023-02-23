import React from 'react'
import { Card, CardBody, CardFooter, CardHeader, Col, Container, Row } from 'reactstrap'
import {
    ImHome
} from "react-icons/im"
import {
    HiPhone
} from "react-icons/hi"
import {
    MdEmail
} from "react-icons/md"
import {
    FaFacebookF
} from "react-icons/fa"
import {
    FaLinkedinIn
} from "react-icons/fa"
const iconStyle = {
    cursor: 'pointer'
};

const Contact = () => {

    return (

        <Container className='mt-5 mb-5 '>
            <Row className=' h-100 justify-content-md-center '>
                <Col md="7"  >
                    <Card >
                        <CardHeader className='text-center'>
                            <h4 style={{ marginTop: '0.5rem' }}>Contact Us</h4>
                        </CardHeader>
                        <CardBody className='p-3'>
                            <Row >
                                <Col md="7" className='text-center'>

                                    <div className='mt-5'>

                                        <ImHome size={35} color="#4d4b4b94" className='mb-2' />

                                        <p> P.O Box 7890, Tower D # 301, Horizon Tower Rashidiya 1, <br />Ajman, UAE</p>
                                        <p></p>

                                        <HiPhone size={35} color="#4d4b4b94" className='mb-2' />

                                        <p>Qatar:&nbsp;&nbsp;+974 33 208 962</p>
                                        <p>Oman:&nbsp;&nbsp;+968 93 140 027</p>
                                        <p>India:&nbsp;&nbsp;+91 9360598320</p>

                                    </div>
                                </Col>
                                <Col md="5" id="Map">
                                    <iframe className='' title="Map"
                                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3604.3111109791403!2d55.45243611459582!3d25.394394629904394!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f5836c4c66a37%3A0x5875e9e7a1fd51c1!2sHimalaya%20A%2FC%20Systems%20Contracting%20LLC!5e0!3m2!1sen!2sin!4v1677049743537!5m2!1sen!2sin"
                                        width="100%"
                                        height="100%"
                                        // style="border:0;"
                                        allowfullscreen=""
                                        loading="lazy"
                                        referrerpolicy="no-referrer-when-downgrade">
                                    </iframe>
                                </Col>
                            </Row>


                        </CardBody>
                        <CardFooter>
                            <Row>
                                <Col md="4" className='text-center pt-3'>

                                    <div class="iconContact">
                                        <a href="mailto:info@himalayacool.com"
                                            target={"_blank"}
                                            rel="noreferrer">
                                            <MdEmail size={25} color="#fff" style={iconStyle} />
                                        </a>
                                    </div>

                                </Col>
                                <Col md="4" className='text-center pt-3'>

                                    <div class="iconContact">
                                        <a href='https://www.facebook.com/people/Himalaya-Cold-rooms-Refrigeration-Contractors/100090230333015'
                                            target={"_blank"}
                                            rel="noreferrer">
                                            <FaFacebookF size={25} color="#fff" style={iconStyle} />
                                        </a>

                                    </div>
                                </Col>
                                <Col md="4" className='text-center pt-3'>

                                    <div class="iconContact">
                                        <a href='http://linkedin.com/in/himalaya-coldrooms-refrigeration-contractors-158149131'
                                            target={"_blank"}
                                            rel="noreferrer">
                                            <FaLinkedinIn size={25} color="#fff" style={iconStyle} />
                                        </a>
                                    </div>

                                </Col>
                            </Row>
                        </CardFooter>

                    </Card>

                </Col>
            </Row>
        </Container>

    )
}

export default Contact
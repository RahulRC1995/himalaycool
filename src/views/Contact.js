import React from 'react'
import { Card, CardBody, CardHeader, Col, Container, Row } from 'reactstrap'
import {
    ImHome
} from "react-icons/im"
import {
    HiPhone
} from "react-icons/hi"
import {
    MdEmail
} from "react-icons/md"
const Contact = () => {

    return (

        <Container fluid className='mt-5 conactContainer '>
            <Row className='d-flex h-100 justify-content-md-center'>
                <Col md="7"  >
                    <Card>
                        <CardHeader className='text-center'>
                            <h4 style={{ marginTop: '0.5rem' }}>Contact Us</h4>
                        </CardHeader>
                        <CardBody className='p-0'>
                            <Row >
                                <Col md="7" className='text-center'>

                                    <div className='mt-5'>
                                        <div class="iconContact">
                                            <ImHome size={25} color="#fff" />
                                        </div>
                                        <p> P.O Box 7890, Tower D # 301, Horizon Tower Rashidiya 1, <br />Ajman, UAE</p>
                                        <p></p>
                                        <div class="iconContact">
                                            <HiPhone size={25} color="#fff" />
                                        </div>
                                        <p>+971 6 742 1561</p>
                                        <p>+971 52 848 4384</p>
                                        <div class="iconContact">
                                            <MdEmail size={25} color="#fff" />
                                        </div>
                                        <p>info@himalayacool.com</p>
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

                    </Card>

                </Col>
            </Row>
        </Container>

    )
}

export default Contact
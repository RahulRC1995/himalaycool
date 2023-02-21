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
                        <CardBody>
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
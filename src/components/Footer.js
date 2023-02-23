import React from 'react'
import { Col, Row } from 'reactstrap'
import {
    FaLinkedinIn
} from "react-icons/fa"
import {
    AiFillFacebook
} from "react-icons/ai"

const Footer = () => {
    return (
        <>

            <Row className="justify-content-center align-items-center  text-center  pt-3 pb-3 m-0 borderdata ">
                <Row >
                    <Col className='d-flex  text-center justify-content-center align-items-center pb-3'>
                        <a href='https://www.facebook.com/people/Himalaya-Cold-rooms-Refrigeration-Contractors/100090230333015'
                            target={"_blank"}
                            rel="noreferrer">
                            <AiFillFacebook size={25} color="black" />
                        </a>
                        <a href='http://linkedin.com/in/himalaya-coldrooms-refrigeration-contractors-158149131'
                            target={"_blank"}
                            rel="noreferrer">
                            <FaLinkedinIn size={25} color="black" />
                        </a>
                    </Col>
                </Row>
                <Row>
                    <Col className='d-flex  text-center justify-content-center align-items-center pb-2 phoneTxt'>

                        <h6>Uae:&nbsp;&nbsp;+971 52 848 4384,&nbsp;+971 67 42 1561&nbsp;</h6>
                        <h6>Qatar:&nbsp;&nbsp;+974 33 208 962 &nbsp;&nbsp;</h6>
                        <h6>Oman:&nbsp;&nbsp;+968 93 140 027&nbsp;&nbsp;</h6>
                        <h6>India:&nbsp;&nbsp;+91 9360598320&nbsp;&nbsp;</h6>

                    </Col>
                </Row>
                <Row>
                    <Col>
                        <h6>Copyright © 2023 Himalaya a/c system contracting</h6>
                    </Col>
                </Row>
            </Row>
        </>
    )
}

export default Footer
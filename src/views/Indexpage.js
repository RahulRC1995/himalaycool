import React from 'react'
import { Link } from 'react-router-dom'
import { Col, Row } from 'reactstrap'

const Indexpage = () => {
    return (
        <>
            <div className="HeadingBanner " >
                <div className='Headtxtbanner'>
                    <h1 className="bannerFont">HIMALAYA A/C SYSTEMS CONTRACTING</h1>
                    <section className="animation">
                        <div className="first animText" ><div>Cold storage specialist</div></div>
                    </section>
                </div>
            </div>
            <Row className="justify-content-center align-items-center d-flex text-center pt-5 pb-5 m-0" style={{ backgroundColor: "#d8d3d344" }}>
                <Col>
                    <h2 className="Head2" style={{ color: "#81c784" }}>Countries We Serve</h2>
                    <ul className='ullist mt-5'>
                        <li className='lilist'>UAE&nbsp;&nbsp;</li>
                        <li className='lilist'>INDIA&nbsp;&nbsp;</li>
                        <li className='lilist'>BAHRAIN&nbsp;&nbsp;</li>
                        <li className='lilist'>SULTANATE&nbsp;OF&nbsp;OMAN</li>
                        <li className='lilist'>QATAR&nbsp;&nbsp;</li>
                        <li className='lilist'>KSA&nbsp;&nbsp;</li>
                        <li className='lilist'>AFRICAN&nbsp;CONTINENT&nbsp;</li>

                    </ul>
                </Col>
            </Row>
            <Row className="justify-content-center align-items-center d-flex text-center  pt-5 m-0">
                <Col>
                    <h2 className="Head2" style={{ color: "#2196f3" }}>Brands We Deal</h2>
                    <img src="BrnadBanner.jpg" class="img-fluid" alt="im" />
                </Col>
            </Row>
            <Row className="justify-content-center align-items-center d-flex text-center  pt-5 m-0">
                <Col className=" pb-5">
                    <h2 className="Head2 pb-5" style={{ color: "#ffb74d" }}>Service Provided</h2>
                    <Row >
                        <Col className='p-0 m-0 serviceBgs' style={{ backgroundImage: `url(Services/serv1.jpg)` }}><Link to="Product"><div className="filterBg ">Project Design</div></Link></Col>
                        <Col className='p-0 m-0 serviceBgs' style={{ backgroundImage: `url(Services/serv2.jpg)` }}><Link to="Product"><div className="filterBg">Industrial Cold Rooms</div></Link></Col>
                        <Col className='p-0 m-0 serviceBgs' style={{ backgroundImage: `url(Services/serv3.jpg)` }}><Link to="Product"><div className="filterBg">Centralised Refrigeration System</div></Link></Col>
                        <Col className='p-0 m-0 serviceBgs' style={{ backgroundImage: `url(Services/serv4.jpg)` }}><Link to="Product"><div className="filterBg">Walk in Cold Rooms</div></Link></Col>
                    </Row>
                    <Row>
                        <Col className='p-0 m-0 serviceBgs' style={{ backgroundImage: `url(Services/serv5.jpg)` }}><Link to="Product"><div className="filterBg">Supermarket Refrigertaion System</div></Link></Col>
                        <Col className='p-0 m-0 serviceBgs' style={{ backgroundImage: `url(Services/serv6.jpg)` }}><Link to="Product"><div className="filterBg">Warehouse Cooling</div></Link></Col>
                        <Col className='p-0 m-0 serviceBgs' style={{ backgroundImage: `url(Services/serv7.jpg)` }}><Link to="Product"><div className="filterBg">Medical & lab Cold Rooms</div></Link></Col>
                        <Col className='p-0 m-0 serviceBgs' style={{ backgroundImage: `url(MissionBanner.jpg)` }}><Link to="Product"><div className="filterBg">Blast Freezers & Chillers</div></Link></Col>
                    </Row>
                    <Row>
                        <Col className='p-0 m-0 serviceBgs' style={{ backgroundImage: `url(Services/serv9.jpg)` }}><Link to="Product"><div className="filterBg">Warehouse Insulated Partitions</div></Link></Col>
                        <Col className='p-0 m-0 serviceBgs' style={{ backgroundImage: `url(Services/serv10.jpg)` }}><Link to="Product"><div className="filterBg">Automated Doors</div></Link></Col>
                        <Col className='p-0 m-0 serviceBgs' style={{ backgroundImage: `url(Services/serv11.jpg)` }}><Link to="Product"><div className="filterBg">Containerised Cold Room</div></Link></Col>
                        <Col className='p-0 m-0 serviceBgs' style={{ backgroundImage: `url(Services/serv12.jpg)` }}><Link to="Product"><div className="filterBg">Annual Maintaintenance Contract For Refrigeration Plants</div></Link></Col>
                    </Row>
                </Col>
            </Row>
        </>
    )
}

export default Indexpage
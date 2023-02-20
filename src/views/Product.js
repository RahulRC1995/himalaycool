import React, { useEffect } from 'react'
import { Col, Container, Row } from 'reactstrap'

export const Product = () => {
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])
    return (
        <div className='productBg' style={{ backgroundImage: `url(snowFlake.svg), url(snowFlake.svg)` }}>
            <Container className='mt-5 ' >
                <Row >
                    <h3 className="Head2 text-center" style={{ color: "#bc4d8e" }}> Service Provided</h3>
                    <Col md="12" className="justify-content-md-center " >

                        <h3 className='mt-5'>PROJECT DESIGN</h3>
                        <p className='mx-3 '>We design execute projects from walk in cold room to big ware house cold storage as per the requirements of the clients.</p>

                        <h3 className='mt-5'>INSUSTRIAL COLD ROOMS</h3>
                        <p className='mx-3'>We build industrial coldrooms for various purposes, maintianing the temperature range form 15C to 60C depending upon the use and products to be stored.</p>

                        <h3 className='mt-5'>CENTERALISED REFRIGERATION SYSTEM</h3>
                        <p className='mx-3'>Power pack system provide high efficiency and low maintenance cost.It is economial in terms of its low running cost and widely used in large scale food industries.</p>


                        <h3 className='mt-5'>ICE PLANTS</h3>
                        <p className='mx-3'>Supply and installation of flake ice machines of various capacity.</p>

                        <h3 className='mt-5'>WALK IN COLD ROOMS</h3>
                        <p className='mx-3'>We provide total solution in walk in chillers and walk in freezers. The temperature of the cold romm varied form +15C to -30C depending on the products to be stored in each room.The components used in cold rooms to be food safe as per HACCP requirements.</p>
                        <h3 className='mt-5'>BLAST FREEZERS & CHILLERS</h3>
                        <p className='mx-3'>The concept of blast freezers is to quickly reduce the temperature of food products as fresh produced, in order to reduce the metabolic process significantly.Ther are often used in the food industries such as ice cream, meat, fish and vegetable products.</p>
                        <h3 className='mt-5'>COLD STORAGE DOORS</h3>
                        <p className='mx-3'>We supply and install all kinds of insulated doors
                            <ul className='mt-2'><li>Automatic Sliding doors</li><li> Mannual sliding doors</li><li>Hinged doors</li><li>Swing doors</li><li>Antipanic doors</li><li>Rollup doors</li></ul>
                        </p>
                        <h3 className='mt-5'>COLD ROOM ACCESSORIES & Space PARTS</h3>
                        <p className='mx-3'>We supply and replace all kinds of accessories like ironmongaries doors, pressure relief valves, heaters, polar curtains and all componets of refrigeration system.</p>
                        <h3 className='mt-5'>SERVICE AND MAINTENANCE</h3>
                        <p className='mx-3 pb-3'>We have a very dedicated and quick 24/7 response team to attend on call maintenance issues. We provide very effective annual maintenance contract for all types of refrigeration unites.</p>


                    </Col>
                </Row>
            </Container>
        </div >

    )
}

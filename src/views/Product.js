import React, { useEffect } from 'react'
import { Col, Container, Row } from 'reactstrap'

export const Product = () => {
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])
    return (
        <div className='productBg' >
            <Container className='mt-5 ' >
                <Row >
                    <h3 className="Head2 text-center" style={{ color: "#bc4d8e" }}> Service Provided</h3>
                    <Col md="12" className="justify-content-md-center " >

                        <h3 className='mt-5'> <img src="snowFlake.svg" class="limg" alt="im" />PROJECT DESIGN</h3>
                        <p className='mx-3 '>We design and execute projects from walk in cold room to big warehouse cold storage as per the requirements of the clients.</p>

                        <h3 className='mt-5'> <img src="snowFlake.svg" class="limg" alt="im" /> INDUSTRIAL COLD ROOMS</h3>
                        <p className='mx-3'>We build industrial coldrooms for various purposes, maintaining the temperature range form +15° C to -60° C depending upon the use and products to be stored.</p>

                        <h3 className='mt-5'> <img src="snowFlake.svg" class="limg" alt="im" /> CENTRALISED REFRIGERATION SYSTEM</h3>
                        <p className='mx-3'>Power pack system provide high efficiency and low maintenance cost. It is economial in terms of its low running cost and widely used in large scale food industries.</p>

                        <h3 className='mt-5'> <img src="snowFlake.svg" class="limg" alt="im" />WALK IN COLD ROOMS</h3>
                        <p className='mx-3'>We provide total solution in walk in chillers and walk in freezers. The temperature of the cold room varies from +15° C to -30° C depending on the products to be stored in each room. The components used in cold rooms to be food safe as per HACCP requirements.</p>
                        <h3 className='mt-5'> <img src="snowFlake.svg" class="limg" alt="im" /> BLAST FREEZERS & CHILLERS</h3>
                        <p className='mx-3'>Blast freezers are used in food industries to bring down the temperature rapidly. They are widely used in the frozen industries like ice-cream, pre-prepared meals, vegetables , meat & fish . As they are very adoptable to the needs of frozen industry business, there is no limit to the frozen food industries that can benefit from this technology.</p>
                        <h3 className='mt-5'> <img src="snowFlake.svg" class="limg" alt="im" /> COLD STORAGE DOORS</h3>
                        <p className='mx-3'>We supply and install all kinds of insulated doors
                            <ul className='mt-2'><li>Automatic sliding doors</li><li> Mannual sliding doors</li><li>Hinged doors</li><li>Swing doors</li><li>Antipanic doors</li><li>Rollup doors</li><li>Speed curtains</li></ul>
                        </p>

                        <h3 className='mt-5'> <img src="snowFlake.svg" class="limg" alt="im" /> COLD ROOM ACCESSORIES & SPARE PARTS</h3>
                        <p className='mx-3'>We supply all kinds of accessories like ironmongaries doors, pressure relief valves, heaters, polar curtains and all componets of refrigeration system.</p>

                        <h3 className='mt-5'> <img src="snowFlake.svg" class="limg" alt="im" /> SERVICE AND MAINTENANCE</h3>
                        <p className='mx-3 pb-3'>We have a very dedicated and quick 24/7 response team to attend on call maintenance issues. We provide very effective annual maintenance contract for all types of refrigeration unites.</p>


                    </Col>
                </Row>
            </Container>
        </div >

    )
}

import React, { useState } from 'react'
import {
    Carousel,
    CarouselItem,
    CarouselControl,
    CarouselIndicators,
} from 'reactstrap';
import { Col, Container, Row } from 'reactstrap'
import img1 from "../Images/Fifth.JPG"
import img2 from "../Images/First.JPG"
import img3 from "../Images/Fourth.JPG"
import img4 from "../Images/Second.jpg"
import img5 from "../Images/Sixth.JPG"
import img6 from "../Images/Third.JPG"


const Gallery = () => {
    const items = [
        {
            altText: 'Slide 1',
            caption: 'Slide 1',
            key: 1,
            src: img1
        },
        {
            altText: 'Slide 2',
            caption: 'Slide 2',
            key: 2,
            src: img2
        },
        {
            altText: 'Slide 3',
            caption: 'Slide 3',
            key: 3,
            src: img3
        },
        {
            altText: 'Slide 3',
            caption: 'Slide 3',
            key: 4,
            src: img4
        },
        {
            altText: 'Slide 3',
            caption: 'Slide 3',
            key: 5,
            src: img5
        },
        {
            altText: 'Slide 3',
            caption: 'Slide 3',
            key: 6,
            src: img6
        }, {
            altText: 'Slide 3',
            caption: 'Slide 3',
            key: 6,
            src: 'Targetbanner.JPG'
        }, {
            altText: 'Slide 3',
            caption: 'Slide 3',
            key: 6,
            src: 'MissionBanner.JPG'
        }

    ]
    const [activeIndex, setActiveIndex] = useState(0);
    const [animating, setAnimating] = useState(false);

    const next = () => {
        if (animating) return;
        const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
        setActiveIndex(nextIndex);
    };

    const previous = () => {
        if (animating) return;
        const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
        setActiveIndex(nextIndex);
    };

    const goToIndex = (newIndex) => {
        if (animating) return;
        setActiveIndex(newIndex);
    };


    const slides = items.map((item) => {
        return (
            <CarouselItem
                className="custom-tag"
                tag="div"
                key={item.id}
                onExiting={() => setAnimating(true)}
                onExited={() => setAnimating(false)}
            >
                <img
                    className="d-block w-100 h-100"
                    src={item.src}
                    alt={item.altText}
                />
                {/* <CarouselCaption
                    className="text-danger"
                    captionText={item.caption}
                    captionHeader={item.caption}
                /> */}
            </CarouselItem>
        );
    });
    return (
        <Container fluid className='mt-5 conactContainer '>
            <Row className='d-flex h-100 justify-content-md-center'>
                <Col md="7" >
                    <style>
                        {`.custom-tag {
              max-width: 100%;
              height: 500px;
              background: black;
            }`}
                    </style>
                    <Carousel activeIndex={activeIndex} next={next} previous={previous} fade={true}>
                        <CarouselIndicators
                            items={items}
                            activeIndex={activeIndex}
                            onClickHandler={goToIndex}
                        />
                        {slides}
                        <CarouselControl
                            direction="prev"
                            directionText="Previous"
                            onClickHandler={previous}
                        />
                        <CarouselControl
                            direction="next"
                            directionText="Next"
                            onClickHandler={next}
                        />
                    </Carousel>
                </Col></Row></Container>
    )
}

export default Gallery
import React, { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel'

import '../App.css';

const ControlledCarousel = () => {
    const [index, setIndex] = useState(0);
    
    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };
    
    return (
        <Carousel activeIndex={index} onSelect={handleSelect} className="mx-auto">
            <Carousel.Item >
                <img
                className="d-block w-50 mx-auto"
                src="https://merriam-webster.com/assets/mw/images/article/art-wap-landing-mp-lg/family-of-four-7101-a234e9249b2c7223d4e4d8cd9432f9e9@1x.jpg"
                alt="First slide"
                id="carouselImg"
                />
                <Carousel.Caption>
                <h3>First slide label</h3>
                <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item >
                <img
                id="carouselImg"
                className="d-block w-50 mx-auto"
                src="https://cdn.shrm.org/image/upload/c_crop%2Ch_705%2Cw_1254%2Cx_0%2Cy_25/c_fit%2Cf_auto%2Cq_auto%2Cw_767/v1/Legal%20and%20Compliance/family_leave_multigen_gdgmvk?databtoa=eyIxNng5Ijp7IngiOjAsInkiOjI1LCJ4MiI6MTI1NCwieTIiOjczMCwidyI6MTI1NCwiaCI6NzA1fX0%3D"
                alt="Second slide"
                />

                <Carousel.Caption>
                <h3>Second slide label</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item >
                <img
                id="carouselImg"
                className="d-block w-50 mx-auto"
                src="https://www.verywellmind.com/thmb/z-mHv6NUGXNkxuqMD1s2nRe3LRQ=/2122x1194/smart/filters:no_upscale()/family-parents-grandparents-Morsa-Images-Taxi-56a906ad3df78cf772a2ef29.jpg"
                alt="Third slide"
                />

                <Carousel.Caption>
                <h3>Third slide label</h3>
                <p>
                    Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                </p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
} 

export default ControlledCarousel;
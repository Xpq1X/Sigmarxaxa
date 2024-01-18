// CarouselComponent.jsx
import React from 'react';
import { Carousel } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Carouselx.css';



const CarouselComponent = () => {
    return (
        <Carousel>
            <Carousel.Item>
                <img
                    className="d-block w-100 carousel-image"  // Add the custom class
                    src='img1.jpeg'
                    alt="First slide"
                />
                <Carousel.Caption>
                    <h3>Bloodbath</h3>
                    <p>Bloodbath is a notorious level in Geometry Dash, known for its extreme difficulty and intricate design. Created by an accomplished level designer named Riot, this level challenges players with intense wave sections, tight timings, and complex geometry. With a dark and intense aesthetic, Bloodbath stands as a testament to the skill and creativity within the Geometry Dash community, attracting skilled players eager to conquer its formidable challenges.</p>
                </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item>
                <img
                    className="d-block w-100 carousel-image"  // Add the custom class
                    src='img2.jpg'
                    alt="Second slide"
                />
                <Carousel.Caption>
                    <h3>Future Funk</h3>
                    <p>Future Funk is a captivating level in Geometry Dash that embraces a vibrant and upbeat atmosphere. Created by the talented designer JonathanGD, this level features colorful visuals, synchronized with an energetic soundtrack. Future Funk stands out for its creative use of moving objects and dynamic patterns, offering players a visually stimulating and rhythmically immersive experience within the Geometry Dash universe.</p>
                </Carousel.Caption>
            </Carousel.Item>

            {/* Add more Carousel.Items for additional slides */}
        </Carousel>
    );
};

export default CarouselComponent;

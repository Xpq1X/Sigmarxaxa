import logo from './logo.svg';
import React from 'react';
import CarouselComponent from './Carousel/Carouselx';
import './App.css';

function App() {
    return (
        <div>
            <header>
                <h1>Geometry Dash</h1>
            </header>
            <main>
                <p>
                    Geometry Dash is a popular rhythm-based platformer game that has captivated players with its simple yet challenging gameplay.
                    Developed by Robert Topala and released in 2013, the game tasks players with navigating a square-shaped icon through various obstacles set to rhythmic music.
                    The fast-paced nature of Geometry Dash, combined with its vibrant visuals and addictive soundtrack, provides an engaging gaming experience that has garnered a dedicated fan base worldwide.
                </p>
                <CarouselComponent />
                <div>
                    {/* Any other content you want to add */}
                </div>


            </main>
            <footer>
                © 2023 Your Website
            </footer>
        </div>
    );
}

export default App;

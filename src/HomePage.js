import React from 'react';
import { NavBarSection } from './NavBar.js';
import { NavLink } from 'react-router-dom';

export function HomePage(props) {
    return (
      <section className="home-page">
        <NavBarSection/>
        <div className="flex-container">
            <section className="flex-col-a" role="contentinfo" aria-label="left-sidebar">
            </section>

            <section className="flex-col-b" role="contentinfo" aria-label="main-content">
                {/* <img className="seattle-image" src="img/seattle.jpg" alt="seattle"/>
                <p> ok the picture above is not that great</p> */}
                <h2 className="header">Welcome!</h2>
                <p>Hello! My name is Simon. I am a senior studying informatics and biology at the University of Washington.
                    As I enjoy both discovering new interactions and functions within living systems as well as the journey from a raw dataset
                    to a stunning visualization, I love working within the bioinformatics field, where I can wrangle and present data that will
                    consequently improve the health and wellbeing of those in our communities. While bioinformatics combines the techniques
                    and concepts of my two favorite subjects, I would welcome the opportunity to take on a data scientist, web developer
                    or research biologist role as well! </p>

                <p>In my free time, I enjoy hanging out with my friends (usually eating). I also love playing tennis and ping pong to stay active,
                    and play piano when I want to relax at home.
                </p>

                <section className="hobby-images">
                    <img className="tennis" src="img/tennis.jpg" alt="tennis"/>
                    <img className="piano" src="img/piano.jpg" alt="piano"/>
                    <img className="pingpong" src="img/pingpong.jpg" alt="pingpong"/>
                </section>

                <p>Contact Info</p>
                <p>Email: simonc7@uw.edu</p>
                <p>&copy; 2021</p>
            </section>

            <section className="flex-col-c" role="contentinfo" aria-label="right-sidebar">
            </section>
        </div>
      </section>
    )
}
import React from 'react';
import { NavBarSection } from './NavBar.js';
import { NavLink } from 'react-router-dom';

export function ProjectsPage(props) {
    return (
        <section className="projects-page">
          <NavBarSection/>
          <div className="flex-container">
              <section class="flex-col-a" role="contentinfo" aria-label="left-sidebar">
              </section>
  
              <section class="flex-col-b" role="contentinfo" aria-label="main-content">
              <h2 className="header">Personal and Group Projects</h2>
                <div className="inner-flex-container">
                    <section class="inner-flex-col-a" role="contentinfo" aria-label="left-sidebar">
                        <img className="burger-icon" src="img/burger_icon.jpg" alt="burger"/>
                        <h1>Nutritional Information of McDonald's</h1>
                        <p>With so many food choices nowadays, it is important to analyze the nutritional information of the food we consume in order
                            to stay fit and healthy. In this group project, my peers and I took a look at the McDonald's menu, largely due to the popularity of
                            the fast food chain, meaning that the insights from this investigation would benefit many people around the world. Here is a
                        <a href="https://annie2980.shinyapps.io/final-annie2980/" aria-label="link to McDonald's nutritional information project"> link </a>
                        to the R Shiny website (the site may take up to a minute to load).
                        </p>
                        <img className="tree-icon" src="img/tree_icon.jpg" alt="tree"/>
                        <h1>Deforestation and the Avian Flu</h1>
                        <p>While global warming itself poses a huge threat to our world's biodiversity, there are many other factors that do so as well.
                            Additionally, a reduction in biodiversity is devastating not just for the endangered or near-extinct species, but for us humans too.
                            In this personal project, I explore the possible connection between deforestation, its effect on bird populations and
                            the spread of avian influenza to humans. Here is a
                        <a href="https://deforestationavianflu.weebly.com/" aria-label="link to deforestation and avian flue site"> link </a>
                        to my website (the site may take up to a minute to load).
                        </p>
                    </section>
                    <section class="inner-flex-col-b" role="contentinfo" aria-label="left-sidebar">
                        <img className="laptop-icon" src="img/laptop_icon.jpg" alt="gaming laptop"/>
                        <h1>Gaming During the COVID-19 Pandemic</h1>
                        <p>During the COVID-19 Pandemic, with many public places closed and strict social distancing guidelines in place,
                            people spent the vast majority of their time in their homes. This led to increased boredom and mental health issues such as depression
                            and loneliness. Consequently, many people turned to video games as a solution. With the rising popularity of gaming during the
                            pandemic, I worked with a couple other college students, using Javascript, HTML and CSS to create a 
                            <a href="https://project-2-340-ed58c.web.app/home" aria-label="link to gaming website"> prototype website </a>
                            displaying both descriptions and graph visualizations of the current most popular games across multiple genres.</p>
                        <img className="tennis-icon" src="img/tennis_icon.jpg" alt="tennis ball"/>
                        <h1>ATP and WTA Tennis Player Analyses</h1>
                        <p>In this project, I will wrangle and analyze match performance data on tennis professionals over the past decade. This project is still
                            in progress and I hope to finish it soon!
                        </p>
                    </section>    
                </div>
              </section>
  
              <section class="flex-col-c" role="contentinfo" aria-label="right-sidebar">    
              </section>
          </div>
        </section>
    )
}
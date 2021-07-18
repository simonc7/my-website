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
                    <br/>
                    <br/>

                 <h2 className="header">Notable Experiences</h2>
                  <div className="inner-flex-container">
                    <section className="inner-flex-col-a" role="contentinfo" aria-label="left-sidebar">
                        <img className="fredhutch-logo" src="img/fredhutch.png" alt="Fred Hutch logo"/>
                        <h1>Fred Hutchinson and UW Medicine Intern</h1>
                        <p>As a research student assistant, I had the opportunity to extract
                            and wrangle genomic data from multiple sources, including Genbank.
                            From there, I created phylogenetic trees that highlight the spread
                            of viruses such as HSV and COVID-19 within the US. I also performed
                            many wet lab duties in the COVID-19 labs in UW Medicine, ranging from cleaning dishes
                            to preparing ethanol and tris solutions. 
                        </p>
                        <br/>
                        <br/>
                        <img className="tantockseng-logo" src="img/tantockseng.jpg" alt="Tan Tock Seng Hospital logo"/>
                        <h1>Tan Tock Seng Hospital Intern</h1>
                        <p>Here, I performed a mix of wet lab duties and data science projects. In the laboratory,
                            I conducted polymerase chain reaction and gel electrophoresis procedures
                            to clone and examine patients' cancer-related genes. I also 
                            constructed heat map visualizations of the patients' pharmacogenetics
                            data to illustrate the exon coverage of possible cancer-related genes
                            across all patients of interest. This ultimately allows 
                            us to see which genes are connected to which forms of cancer.
                        </p>
                    </section>
                    <section className="inner-flex-col-b" role="contentinfo" aria-label="left-sidebar">
                        <img className="ischool-logo" src="img/ischool.jpg" alt="iSchool logo"/>
                        <h1>UW iSchool Teaching Assistant</h1>
                        <p>In this position, I had the honor of teaching my own INFO 201 course for two quarters.
                            In these classes, I taught students important data science and coding concepts, particularly
                            in the R language. I also gave my students step-by-step demonstrations as well as a
                            plethora of coding tips as additional means to help them learn the course material.
                            any specific questions they had. Lastly, I constructed grading templates in my own time
                            to help expedite the assignment grading that me along with other teaching assistants
                            did.
                        </p>
                        <br/>
                        <br/>
                        <img className="codingwithkids-logo" src="img/codingwithkids.jpg" alt="Coding With Kids logo"/>
                        <h1>Coding With Kids Coding Instructor</h1>
                        <p>Here, I worked with other coding instructors to organize Scratcha and Java courses for younger children.
                            Since the children ranged from ages 5 to around 12, I had to employ a variety of teaching methods
                            (explanations, examples, walkthroughs... etc) to make sure every student in my classes could learn the material.
                            Lastly, although I planned my courses ahead of time, I also realized the importance of 
                            slowing down when needed to ensure the kids actually retain the coding concepts rather than adhering
                            to a premade schedule.
                        </p>
                    </section>    
                  </div>

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


                <h2>Hobbies</h2>
                <p>I love playing tennis and ping pong to stay active,
                    and play piano when I want to relax at home. I also enjoy hanging out with my friends (usually eating).
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
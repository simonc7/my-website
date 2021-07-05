import React from 'react';
import { NavBarSection } from './NavBar.js';
import { NavLink } from 'react-router-dom';

export function ExperiencePage(props) {
    return (
        <section className="experience-page">
          <NavBarSection/>
          <div className="flex-container">
              <section className="flex-col-a" role="contentinfo" aria-label="left-sidebar">
              </section>
  
              <section className="flex-col-b" role="contentinfo" aria-label="main-content">
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
                </section>
  
                <section class="flex-col-c" role="contentinfo" aria-label="right-sidebar">
                </section>

              {/* <section class="flex-col-b" role="contentinfo" aria-label="main-content">
                  <h2>Notable Experiences</h2>
                  <h1>Fred Hutchinson and UW Medicine Intern</h1>
                  <p>As a research student assistant, I... </p>
                  <h1>UW iSchool Teaching Assistant</h1>
                  <p>In this position, I got to help...</p>
                  <h1>Tan Tock Seng Hospital Intern</h1>
                  <p>Here, I got to...</p>
                  <h1>Coding With Kids Coding Instructor</h1>
                  <p>Here, ...</p>
                  <h3></h3>
              </section> */}
          </div>
        </section>
    )
}
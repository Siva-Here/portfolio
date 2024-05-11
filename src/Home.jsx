import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import siva from './assets/siva.jpg'
import Projects from './Projects'
import Skills from './Skills'
const Intro = () => {
    return (
        <>
            <section id='intro'>
                <div className="container-lg">
                    <div className="row justify-content-evenly align-items-center">
                        <div className="col-md-5 text-center text-md-start 
                    ">
                            <h1>
                                <div className="display-2 text-light fst-italic fw-bold lead shadow ms-3">s1v4h3r3</div>
                                <div className='mt-5 ms-2 meow'>
                                    <ul className='ms-0.5 skill-list pe-1' style={{color: "white"}}>
                                        <li className="display-6 lead fst-italic
                                    ms-md-5
                                     ">Hacker</li>
                                        <li className="display-6 lead fst-italic
                                        ms-md-5">Editor</li>
                                        <li className="display-6 lead fst-italic
                                    ms-md-5
                                     ">Full Stack Web Developer</li>
                                        <li className="display-6 lead fst-italic
                                    ms-md-5">Web Pentester</li>
                                        <li className="display-6 lead fst-italic
                                        ms-md-5">UI/UX Designer</li>
                                        
                                    </ul>
                                </div>

                            </h1>
                        </div>
                        <div className="col-md-7 text-center text-md-end rounded-circle mt-sm-5">
                            <img className="img-fluid rounded-circle 
                            ms-md-5 imageHover
                            " src={siva} alt="" style={{boxShadow:"7px 7px 30px purple",marginTop:"80px"}}/>
                        </div>
                    </div>
                </div>
            </section>
            <Projects/>
            <Skills/>
           
        </>
    )
}
export default Intro
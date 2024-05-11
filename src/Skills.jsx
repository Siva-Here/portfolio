import { CircularProgress, CircularProgressLabel } from "@chakra-ui/progress"
import React from 'react'
import html from './assets/html.png'
import  css from './assets/css.png'
import js from './assets/js.png'
import bootstrap from './assets/bootstrap.png'
const Skills = () => {
    return (
        <>
            <div className="container-lg">
                <div className="row justify-content-evenly align-items-center">
                    <div className="col-lg-4 col-md-6 col-sm-12 col-xs-12 justify-content-evenly align-items-center d-flex mt-5">
                        <div className="meow justify-content-center align-items-center d-flex skillHover">
                            <img src={html} alt="" className="img-fluid mt-3 ms-3" style={{height:"100px",width:"100px"}}/>
                            <CircularProgress value={100} size='120px' thickness='7px' color='cyan' className="ms-5">
                            <CircularProgressLabel className="justify-content-center align-items-center pt-3  text-secondary">100%</CircularProgressLabel>
                            </CircularProgress>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-12 col-xs-12 justify-content-evenly align-items-center d-flex mt-5">
                        <div className="meow justify-content-center align-items-center d-flex skillHover">
                            <img src={css} alt="" className="img-fluid mt-3 ms-3" style={{height:"100px",width:"100px"}}/>
                            <CircularProgress value={80} size='120px' thickness='7px' color='cyan' className="ms-5">
                            <CircularProgressLabel className="justify-content-center align-items-center pt-3  text-secondary">80%</CircularProgressLabel>
                            </CircularProgress>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6 col-sm-12 col-xs-12 justify-content-evenly align-items-center d-flex mt-5">
                        <div className="meow justify-content-center align-items-center d-flex skillHover">
                            <img src={js} alt="" className="img-fluid mt-3 ms-3" style={{height:"100px",width:"100px"}}/>
                            <CircularProgress value={80} size='120px' thickness='7px' color='cyan' className="ms-5">
                            <CircularProgressLabel className="justify-content-center align-items-center pt-3  text-secondary">80%</CircularProgressLabel>
                            </CircularProgress>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6 col-sm-12 col-xs-12 justify-content-evenly align-items-center d-flex mt-5">
                        <div className="meow justify-content-center align-items-center d-flex skillHover">
                            <img src={bootstrap} alt="" className="img-fluid mt-3 ms-3" style={{height:"100px",width:"auto"}}/>
                            <CircularProgress value={80} size='120px' thickness='7px' color='cyan' className="ms-5">
                            <CircularProgressLabel className="justify-content-center align-items-center pt-3  text-secondary">80%</CircularProgressLabel>
                            </CircularProgress>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6 col-sm-12 col-xs-12 justify-content-evenly align-items-center d-flex mt-5">
                        <div className="meow justify-content-center align-items-center d-flex skillHover">
                            <img src={bootstrap} alt="" className="img-fluid mt-3 ms-3" style={{height:"100px",width:"auto"}}/>
                            <CircularProgress value={80} size='120px' thickness='7px' color='cyan' className="ms-5">
                            <CircularProgressLabel className="justify-content-center align-items-center pt-3  text-secondary">80%</CircularProgressLabel>
                            </CircularProgress>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6 col-sm-12 col-xs-12 justify-content-evenly align-items-center d-flex mt-5">
                        <div className="meow justify-content-center align-items-center d-flex skillHover">
                            <img src={bootstrap} alt="" className="img-fluid mt-3 ms-3" style={{height:"100px",width:"auto"}}/>
                            <CircularProgress value={80} size='120px' thickness='7px' color='cyan' className="ms-5">
                            <CircularProgressLabel className="justify-content-center align-items-center pt-3  text-secondary">80%</CircularProgressLabel>
                            </CircularProgress>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6 col-sm-12 col-xs-12 justify-content-evenly align-items-center d-flex mt-5">
                        <div className="meow justify-content-center align-items-center d-flex skillHover">
                            <img src={bootstrap} alt="" className="img-fluid mt-3 ms-3" style={{height:"100px",width:"auto"}}/>
                            <CircularProgress value={80} size='120px' thickness='7px' color='cyan' className="ms-5">
                            <CircularProgressLabel className="justify-content-center align-items-center pt-3  text-secondary">80%</CircularProgressLabel>
                            </CircularProgress>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6 col-sm-12 col-xs-12 justify-content-evenly align-items-center d-flex mt-5">
                        <div className="meow justify-content-center align-items-center d-flex skillHover">
                            <img src={bootstrap} alt="" className="img-fluid mt-3 ms-3" style={{height:"100px",width:"auto"}}/>
                            <CircularProgress value={80} size='120px' thickness='7px' color='cyan' className="ms-5">
                            <CircularProgressLabel className="justify-content-center align-items-center pt-3  text-secondary">80%</CircularProgressLabel>
                            </CircularProgress>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6 col-sm-12 col-xs-12 justify-content-evenly align-items-center d-flex mt-5">
                        <div className="meow justify-content-center align-items-center d-flex skillHover">
                            <img src={bootstrap} alt="" className="img-fluid mt-3 ms-3" style={{height:"100px",width:"auto"}}/>
                            <CircularProgress value={80} size='120px' thickness='7px' color='cyan' className="ms-5">
                            <CircularProgressLabel className="justify-content-center align-items-center pt-3  text-secondary">80%</CircularProgressLabel>
                            </CircularProgress>
                        </div>
                    </div>
                </div>
        </div>

        </>
    )
}

export default Skills
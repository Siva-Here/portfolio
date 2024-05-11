import React from 'react'
import Card from './Card'

const Projects = () => {
    const cardArray=new Array(10).fill(null);
  return (
    <>
        <section className="container-fluid">
                    <div className="row justify-content-evenly">
                        {cardArray.map((_, index) => (
                            <div className="col-md-6 col-lg-4 my-3 col-sm-12 col-xs-12 justify-content-center align-items-center d-flex">
                                <Card key={index}/>
                            </div>
                        ))}
                </div>
            </section>
    </>
  )
}

export default Projects
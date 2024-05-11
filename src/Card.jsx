import React from 'react'
import apple from './assets/apple.jpg'

const Card = (props) => {
    return (
        <section id="projectCards">

            <div className="card bg-black text-color meow" style={{ width: "18rem", height: "auto",boxShadow:"2px 2px 30px purple"}}>
                <img src={`${props.image||apple}`} className="card-img-top img-fluid" alt="..." />
                <div className="card-body">
                    <h5 className="card-title text-info">{`${props.title||'Card Title'}`}</h5>
                    <p className="card-text text-light ">{`${props.text|| 'Some quick example text to build on the card title and make up the bulk of the cards content.Some quick example text to build on the card title and make up the bulk of the cards content.'}`}</p>
                    <button className='visit' href={props.href||"https://www.google.com"} >Visit</button>
                </div>
            </div>
        </section>
                    
    )
}

export default Card
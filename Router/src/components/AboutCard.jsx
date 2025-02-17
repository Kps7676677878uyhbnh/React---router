import React from 'react'
import "./AboutCard.css"


const AboutCard = (props) => {
  return (
    <>
    <div className="user-grid">
     <div className='user-container'>
      <p id='user-name'>{props.name}</p>
      <img id='user-img' src={props.image} alt="user image" />
      <p id='user-desc'>{props.descp}</p>

    </div>
    </div>
    </>
  )
}

export default AboutCard
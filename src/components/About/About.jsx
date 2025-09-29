import React from 'react'
import './About.css'
import aboutsection from '../../assets/aboutsection.jpg'

const About = () => {
  return (
    <div className='about' id='aboutus'>
        <div className="aboutleft">
            <img src={aboutsection} alt="" />
        </div>
        <div className="aboutright">
            <h3>ABOUT UNIVERSITY</h3>
            <h2>Nurturing Tomorrow's Leaders Today</h2>
            <p>Today a more than two decades, since New Economic Policy 1991, liberalization the Indian Economy has grown rapidly at a very healthy rate and India has emerged as a hub for various Industries and demand for educated and skilled professionals, team leaders and managers has increased at a phenomenal rate.</p>
            <p>PKG College is one of the North India’s premier educational group with 3 state-of-the-art well known Campuses representing a cluster of vibrant educational establishments spread over 80 Acres of Land Area Campus in Delhi-NCR.</p>
            <p>PKG College of Engineering & Technology is well known for All India Excellence Award for Best Upcoming Institute in Haryana by the Indian Achievers Podium, Award of No. 1 Chemical Engineering college.</p>
        </div>
    </div>
  )
}

export default About
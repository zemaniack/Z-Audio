import reactLogo from '../assets/react.svg'
import viteLogo from '/vite.svg'
import firebase from '../assets/firebase.svg'
import '../styles/About.css'
import { CgProfile } from 'react-icons/cg'

export const About = () => {
  return (
    <div className="about-container">
        <div className='about-section'>
            <h1>About</h1>
            <p>Z-Audio is the result of two brothers passion's for sound, 
                technology, and excellence. It is our goal to create and produce
                the best sounding and quality audio equiptment for our customers, at
                the best value possible. No cheap components, no cutting corners,
                just the best quality for the best price.
            </p>
        </div>
        
        <div className='team-section'>
            <h2>Our Team</h2>
            <div className='members-container'>
                <div className='team-member'>
                    <CgProfile 
                        style={{
                            fontSize: '5vh'
                        }}
                    />
                    <figcaption>
                        <div className='member-name'>
                            Ethan Zemanick
                        </div>
                        <div>
                            Ethan is currently a student attending the University at Buffalo,
                            where he is pursuing a bachelors in Computer Science and a minor in Electrical
                            Engineering. He's worked in programming and robotics areas for the past
                            7 years, and has a passion for technology and innovation.
                        </div>
                    </figcaption>
                </div>
                <div className='team-member'>
                    <CgProfile 
                        style={{
                            fontSize: '5vh'
                        }}
                    />
                    <figcaption>
                        <div className='member-name'>
                            Drew Zemanick
                        </div>
                        <div>
                            Drew has loved speakers and audio equipment since he was a kid. He's
                            always been interested in how they work, and how to make them sound better. This love for 
                            audio and sound quality helped to produce Z- Audio, it has been a dream to collect speakers,
                            make them better and sell them for a fair price. As a student at Alfred State he is pursuing 
                            this passion with an associate in electrical Engineering as well as bachlors in buisiness. 
                        </div>
                    </figcaption>
                </div>
            </div>
        </div>

        <div className='tech-section'>
            <h2>Technologies</h2>
            <div className='tech-description'>
                This project was built with React, Vite, and Google Firebase.
            </div>
            <div className='tech-logos'>
                <div className='logo'>
                    <img src={reactLogo} alt="React Logo" />
                </div>
                <div className='logo'>
                    <img src={viteLogo} alt="Vite Logo" />
                </div>
                <div className='logo firebase'>
                    <img src={firebase} alt="Firebase Logo" />
                </div>
            </div>
            
        </div>
    </div>
  )
}

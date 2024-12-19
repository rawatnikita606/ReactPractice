import React from 'react'
import { Link } from 'react-router-dom'
import './NewWebsite.css'
import anaya from './Anaya.png'
import anaya1 from './Laptop.png'
import anaya2 from './Image2.png'

const NewWebsite = () => {
    return (
        <div>
            <nav>
                <ul>
                    <li><Link to="/" className='a'>Design.com</Link></li>
                    <span style={{ float: "right" }}>
                        <li><Link to="/" className='a'>Logos</Link></li>
                        <li><Link to="/business card" className='a'>Business card</Link></li>
                        <li><Link to="/hospital" className='a'>Hospital</Link></li>
                        <li><Link to="/website" className='a'>Website</Link></li>
                        <li><Link to="/more" className='a'>More</Link></li>
                    </span>
                </ul>
            </nav>
            <div>
                <h3 style={{textAlign:"center"}}>Home Page</h3>
                <marquee scrollamount="30">
                    <img src={anaya} alt="anaya" className="carousel-image" />
                    <img src={anaya1} alt="anaya1" className="carousel-image" />
                    <img src={anaya2} alt="anaya2" className="carousel-image" />
                </marquee>
            </div>
        </div>
    )
}

export default NewWebsite

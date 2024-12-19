import React from 'react'
 import { Outlet, Link } from "react-router-dom";
import  './Header.css';


const Header = () => {

 
  const name="NIKITA";
  const myStyle = {
    color: "white",
    backgroundColor: "DodgerBlue",
    padding: "10px",
    fontFamily: "Sans-Serif"
  };
  return (
    <div>
      <nav>
        <ul>
          <li><Link to="/" className='a'>LOGO</Link></li>
          <li><Link to="/about" className='a'>About</Link></li>
          <li><Link to="/blogs" className='a'>Blogs</Link></li>
          <li><Link to="/contact" className='a'>Contact</Link></li>
          <li><Link to="/resume" className='a'>Resume</Link></li>
          <li><Link to="/digitalclock" className='a'>DigitalClock</Link></li>
          <li><Link to="/loginform" className='a'>LoginForm</Link></li>
          <li><Link to="/singupform" className='a'>LoginForm</Link></li>
          <li><Link to="/fetch" className='a'>Fetch</Link></li>
          <li><Link to="/newwebsite" className='a'>NewWebsite</Link></li>
          <li><Link to="/hospital" className='a'>Hospital</Link></li>
          


        </ul>
      </nav>
      <Outlet/>


      <h3>{name}</h3>
      <p style={myStyle}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore animi explicabo facilis error nobis debitis, pariatur dolorem! Atque laborum facere debitis esse dolore eius vitae cumque vel consequuntur officia alias ipsum aut, inventore totam fugiat, asperiores natus reiciendis beatae eveniet! Eos voluptate facilis magnam, ipsum tenetur deleniti temporibus! Animi, eius enim, consectetur obcaecati aliquam distinctio vero commodi, asperiores voluptatem quae deleniti. Iste voluptas assumenda aliquam sint accusamus debitis nobis, obcaecati distinctio vitae natus eius voluptatibus, adipisci praesentium exercitationem repudiandae quia illum! Possimus quidem, praesentium reprehenderit laborum voluptatibus alias incidunt quia minima sit vero tenetur tempore magni provident voluptate ullam tempora!</p>
     
    </div>
  )
}


export default Header
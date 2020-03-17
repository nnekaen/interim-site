import React from 'react'
import logo from '../assets/images/logo.png'
import { ParallaxProvider } from 'react-scroll-parallax'


class Header extends React.Component {
    showSettings (event) {
    event.preventDefault();
   
  }

  render() {
    return (
    
      <ParallaxProvider>
        <section id="header">
          <div className="inner">
            <span className="image logo">
              <img src={logo} alt="" />
            </span>
            <h3>
              A World Made in Freedom &trade;
            </h3> 
          </div>
        </section>
     
        
      </ParallaxProvider>
       
    )
  }
}

export default Header

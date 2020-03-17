import React from 'react'
import Helmet from 'react-helmet'
import Layout from '../components/layout'
import { ParallaxProvider } from 'react-scroll-parallax'

class Homepage extends React.Component {
    showSettings (event) {
    event.preventDefault();
   
  }
  render() {
    const siteTitle = 'slavefreetrade - Made in freedom'

    return (
      <Layout>
     
        <ParallaxProvider>
          <Helmet title={siteTitle} />
          <section id="three" className="main style3 special">
            <div data-aos="zoom-in" data-aos-duration="1000">
              <div className="grid-wrapper">
                <div className="col-12">
                  <header className="">
                    <h1>Get in Touch</h1>
                  </header>
                  <p>
                    We know you have questions. We do too. Don't hesitate to get
                    in touch.
                  </p>
                </div>

                <div className="col-6">
                  <div className="box">
                    <i className="icon major fa-map-marker"></i>

                    <h3>Address</h3>
                    <p>
                      slavefreetrade <br />
                      115 rue de Lausanne <br />
                      Geneva, 1202 <br />
                      Switzerland{' '}
                    </p>
                  </div>
                </div>

                <div className="col-6">
                  <div className="box">
                    <i className="icon major fa-envelope"></i>
                    <h3>Email</h3>
                    <p>info@slavefreetrade.org</p>
                  </div>
                </div>       
              </div>
            </div>
          </section>
        </ParallaxProvider>
      </Layout>
    )
  }
}

export default Homepage

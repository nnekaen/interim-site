import React from 'react'
import pic01 from '../assets/images/pic01.png'
import pic02 from '../assets/images/pic02.jpg'
import pic03 from '../assets/images/pic03.png'
import pic04 from '../assets/images/pic04.png'
import pic05 from '../assets/images/zal.png'
import pic06 from '../assets/images/sourcewell.png'
import sample from '../assets/images/slavefreetrade-logo.mp4';
import hatchcolab from '../assets/images/Hatch.png'
import oracle from '../assets/images/oracle.png'
import Team from './team'
import Carousel from '@brainhubeu/react-carousel'
import '@brainhubeu/react-carousel/lib/style.css'

class Section extends React.Component {
  constructor() {
    super()
    this.state = {
      about: 'About Us',
    }
      
  }
    
    
    

  render() {
    return (
      <div id="parent">
        <section id="quotes" className="main style1">
          <Carousel
            autoPlay={7000}
            clickToChange
            arrows
            centered
            slidesPerPage={1}
            animationSpeed={1000}
            infinite
          >
        <div className="grid-wrapper">
              <div className="col-12">
                <div id="quote" className="s">
                  <div data-aos="fade-in" data-aos-duration="1200" className="blockquote">
                    <h3>
                      We put the Social into Environment, Social and Corporate
                      Governance (ESG) by helping organisations ensure they are
                      part of the new sustainable economy. We discover and map
                      their supply chains and assess and monitor workplace
                      conditions in real time.
                      <span>
                        {' '}
                        We help organisations be able to say to their customers,
                        shareholders, and investors that they are not just
                        paying lip service to human rights. We help them
                        implement a low-cost, high-volume human rights strategy
                        using advanced technology.
                      </span>{' '}
                      Clients include FMCG companies, banks, investment firms,
                      international organisations. In common, they understand
                      the risk they face, their role as a good citizen, and the
                      need for an effective strategy.
                    </h3>
                    <h4>
                      &mdash;Brian Iselin
                      <br />
                      <p><em>CEO, slavefreetrade.</em></p>
                    </h4>
                  </div>
                </div>
              </div>
            </div>
            <div className="grid-wrapper">
              <div className="quote col-7">
                <div className="imgalign">
                  <a
                    href="https://hatchcolab.ch/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {' '}
                    <img src={hatchcolab} alt="" />
                  </a>
                </div>
              </div>
              <div className="col-4">
                <div className="desc">
                  <h3>We are #hatchers! </h3>
                  <p className="info-text">
                    Hatch CoLab is pioneering a new approach to incubation and
                    acceleration programs for entrepreneurs looking to build and
                    scale impact ventures. Over 1000 projects applied to the
                    2019 programme and slavefreetrade was one of nine projects
                    accepted.{' '}
                  </p>
                </div>
              </div>
            </div>
      
      

            <div className="grid-wrapper">
              <div className="quote col-7">
                <div className="imgalign">
                  <a
                    href="https://www.oracle.com/startup"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {' '}
                    <img src={oracle} alt="" />
                  </a>
                </div>
              </div>
              <div className="col-4">
                <div className="desc">
                  <h3>We are an #OracleStartup organisation! </h3>
                  <p className="info-text">
                    slavefreetrade was accepted into Oracle’s global initiative
                    to support entrepreneurship with co-development &
                    co-innovation in October 2019.{' '}
                  </p>
                </div>
              </div>
            </div>
          </Carousel>
        </section>
       <div className="parallax"></div>
        <section id="explainer-video" className="main style1">
          <div className="grid-wrapper">
            <div className="para col-6">
              <span className="image fit">
                <span className="centerHelper"></span>
                <iframe width="560" height="315" className="embed-container" src="https://www.youtube.com/embed/MylbL1gF17A" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
              </span>
            </div>
            <div className="para col-6">
              <div className="info-text">
                <p>
                  We are a Swiss NGO out to make sure that the new norm is that things we buy have been made without harming anyone.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section id="about" className="main style3">
          <div className="grid-wrapper">
            <div className="col-12">
              <div>
                <header>
                  <h1 className="about-heading">{this.state.about}</h1>
                </header>
                <p className="sub-heading">
                  We bring together supply and demand for slavefree goods and services
                  together.
                </p>
              </div>
            </div>
            <div className="col-6">
              <div className="info-text column-first">
                <div className="para-box">
                 <p>
                  Never before in history has it been possible to render
                  transparent the entirety of a supply chain. And never before,
                  has anyone been able to bring the people making the things we
                  buy into the spotlight. Supply chains have, until now, been
                  about products, colours, sizes, prices, characteristics. Now,
                  for the first time, there is such a thing as the human supply
                  chain. Not only that, slavefreetrade&reg; is bringing to industry a
                  platform that enables assessment and monitoring of the human
                  supply chain, in real time, all the time. We call this the
                  Human Rights Compliance platform.
                 </p>
                </div>
                <div className="para-box">
                 <p>
                  The platform exists as a two-part framework, the first
                  an assessment we call our Values Alignment. Under the patronage
                  of the UN Special Rapporteur on Slavery, slavefreetrade&reg;
                  has worked with a team of legal experts in International Human
                  Rights to define 10 principles, an amalgamation of human
                  rights principles and supply chain transparency, that can be
                  applied to the workplace.
                </p>
               </div>
              </div>
            </div> 
            <div className="col-6">
              <div className="info-text column-second">
                <div className="para-box">

                <p>
                  The second part of the framework is a technology platform that
                  provides the tools any business requires to comprehend, assess
                  and, if necessary, change the conditions for its employees.
                  The platform collects data via an app that staff use to answer
                  questions that support the assessment of the 10 Values
                  Alignment principles.
                </p>
                </div>
                 <p>
                  {' '}
                  Originally founded in 2016, slavefreetrade&reg; is a Swiss non
                  profit association formed as a global, multidisciplinary task
                  force to identify the international standards and law that
                  make a workplace decent, and to build and implement technical
                  solutions that support the delivery of these organisational
                  goals.
                </p>
              </div>
            </div>  
          </div>
        </section>
      <section id="logo-video" className="style3"> 
      <video id= "background-video" className='videoTag' autoPlay loop muted>
      <source src={sample} type='video/mp4' />
        </video>
      </section>
        <Team />
        <div className="parallax"></div>
        <section id="Valuesalign" className="main style3">
          <div className="grid-wrapper">
            <div className="para col-6">
              <div data-aos="fade-in" data-aos-duration="1200">
                <h1 className="left">Values Alignment</h1>
                <div className="info-text">
                  <p>
                    slavefreetrade&reg;'s values alignment is the foundation for the
                    data we collect. The ten principles have emerged from the
                    UN’s Sustainable Development Goals (SDGs) alongside pre-
                    existing international law. The SDGs were created as targets
                    for 2030 and are described by the UN as ‘the blueprint to
                    achieve a better and more sustainable future for all’ (UN,
                    2016). From this framework we have isolated those aspects
                    more pertinent to modern slavery and human rights within the
                    workplace. slavefreetrade&reg; is continually assessing if our
                    clients meet our standards by checking their internal
                    policies and asking their staff about their awareness of the
                    existence of these policies and how well they function
                    within the workplace. This is done by asking all staff
                    questions via the staff app.
                  </p>
                  <p>
                    The legislation for modern slavery is relatively new and the
                    best example, of which our tenth principle: ‘supply chain
                    transparency’, is the UK’s Modern Slavery Act (2015). This
                    highlights a transparent supply chain to be the path to the
                    end of modern slavery. The rest of our principles are
                    derivations of human rights law and the UN’s SDG’s. A team
                    of lawyers have extracted aspects of the legislation and
                    documents as a multi disciplinary approach to create
                    slavefreetrade&reg;’s human rights framework.{' '}
                  </p>
                </div>
              </div>
            </div>
            <div className="para col-6">
              <div data-aos="fade-in" data-aos-duration="1600">
                <span className="image">
                  <span className="centerHelper"></span>
                  <img src={pic01} alt="" />
                </span>
              </div>
            </div>
          </div>
        </section>

        <section id="supply-chain-maping" className="main style1">
          <div className="grid-wrapper">
            <div className="para col-6">
              <span className="image fit">
                <span className="centerHelper"></span>
                <img src={pic02} alt="" />
              </span>
            </div>
            <div className="para col-6">
              <h1 className="left">Supply Chain Mapping</h1>
              <div className="info-text">
                <p>
                  In this world of new technologies such as blockchain, the
                  founders of slavefreetrade&reg; saw an opportunity to disrupt the
                  existing status quo and deliver a product that brings true
                  digital transformation to the existing supply chain model by
                  providing real time Human Rights Compliance data throughout
                  the entire supply chain, from every workplace and every
                  employee.
                </p>

                <p>
                  The Human Rights Compliance platform makes it simpler and more
                  systematic to manage and measure the human conditions in
                  workplaces and supply chains. Our platform provides the tools
                  all businesses need to see exactly what is happening in the
                  human supply chain, and bring decent work into the spotlight,
                  so that slavery retreats into an ever-shrinking world that
                  accepts their slave-made things. The platform works alongside
                  mobile app for smart phones and traditional text messaging for
                  non smart phones.
                </p>
                <p>
                  {' '}
                  We work with you to identify worksites and map your supply
                  chain.
                </p>
              </div>
            </div>
          </div>
        </section>
        <div className="parallax3">
          <div className="quote-box">
            <p className="firstpara">
              "Freedom is the open window through which pours the sunlight
            </p>
            <p className="secondpara">
              of the human spirit and human dignity."{' '}
            </p>
          </div>
          <div className="quote-title">
            <p className="text-right">- Herbert Hoover</p>
          </div>
        </div>
        <section id="staffapp" className="main style3">
          <div className="grid-wrapper">
            <div className="para col-6">
              <h1 className="left">Staff App</h1>
              <div className="info-text">
    
                <p>
                  Our staff app works in conjunction with the client platform
                  and is how we gather the working conditions data of our
                  clients’ and their suppliers’ workforce. Staff are asked a set
                  of baseline questions and this is followed up by periodic
                  questions about their conditions in the workplace. The
                  platform monitors the answers, detecting anomalies and
                  violation of our decent working conditions standards. These
                  are then flagged and reported to the clients and/or their
                  supply chain supervisors. Thus, we are able to constantly
                  detect any changes over time in the responses about working
                  conditions. The questions respect integrity as they allow
                  anonymity of the participants thanks to the use of a
                  cryptographic hash. This is how we deliver the assessment and
                  monitoring of the human supply chain, in{' '}
                  <b>real time, all the time.</b>{' '}
                </p>
        
              </div>
            </div>
      
            <div className="para col-6">
              <div data-aos="zoom-in" data-aos-duration="1200">
                <span className="image fit">
                  <span className="centerHelper"></span>
                  <img src={pic03} alt="" />
                </span>
              </div>
            </div>
          </div>
        </section>

        <section id="audit-programmE" className="main style1">
          <div className="grid-wrapper">
            <div className="para col-6">
              <span className="image fit">
                <span className="centerHelper"></span>
                <img src={pic04} alt="" />
              </span>
            </div>
            <div className="para col-6">
              <h1 className="left">Audit Programme</h1>
              <div className="info-text">
                <p>
                  Conducted by professional ethical sourcing advisors and
                  auditors chosen by us, and accredited by APSCA, programmed
                  audits are designed to help calibrate the platform. The
                  platform is, of course, remote. If it wasn’t, human rights
                  compliance would never bescalable. So audits are used to
                  cross-check and validate what the platform sees.
                </p>
                <p>
                  Beyond calibration, both of these types of audits are also
                  about keeping clients on their toes and detecting efforts to
                  game the platform. The annual audit also ensures that your
                  organisation is compliant for your slavefreetrade&reg;
                  certification (label)
                </p>
              </div>
            </div>
          </div>
        </section>
        <div className="parallax2"></div>
      <section id="quotes" className="main style1">
          <Carousel
            autoPlay={7000}
            clickToChange
            arrows
            centered
            slidesPerPage={1}
            animationSpeed={1000}
            infinite
          >
            
            <div className="grid-wrapper">
              <div className="col-12">
                <div id="quote" className="s">
                  <a
                    href="https://hatchcolab.ch/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {' '}
                    <img src={hatchcolab} alt="" />
                  </a>
                </div>
              </div>
            </div>
      
      <div className="grid-wrapper">
              <div className="col-12">
                <div id="quote" className="s">
                  <a
                    href="#"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {' '}
                    <img src={pic05} alt="" />
                  </a>
                </div>
              </div>
            </div>
       <div className="grid-wrapper">
              <div className="col-12">
                <div id="quote" className="s">
                  <a
                    href=""
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {' '}
                    <img src={pic06} alt="" />
                  </a>
                </div>
              </div>
            </div>

            <div className="grid-wrapper">
              <div className="quote col-7">
                <div className="imgalign">
                  <a
                    href="https://www.oracle.com/startup"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {' '}
                    <img src={oracle} alt="" />
                  </a>
                </div>
              </div>
              <div className="col-4">
                <div className="desc">
                  <h3>We are an #OracleStartup organisation! </h3>
                  <p className="info-text">
                    slavefreetrade&reg; was accepted into Oracle’s global initiative
                    to support entrepreneurship with co-development &
                    co-innovation in October 2019.{' '}
                  </p>
                </div>
              </div>
            </div>
          </Carousel>
        </section>
      </div>
      
      
    )
  }
    
}



export default Section
export const pageQuery = graphql`
  query MyQuery {

  allContentfulStaffTitle {
    nodes {
      title
    }
  }


  }
  
`

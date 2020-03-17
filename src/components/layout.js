import React from 'react'
import '../assets/scss/main.scss'
import { initGA, logPageView } from './Ga.js'
import Section from './section'
import Header from './Header'
import Footer from './Footer'
import AOS from 'aos'
import 'aos/dist/aos.css'

class Template extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      loading: 'is-loading',
    }
  }

  componentDidMount() {
    if (!window.GA_INITIALIZED) {
      initGA()
      window.GA_INITIALIZED = true
    }
    logPageView()
    this.timeoutId = setTimeout(() => {
      this.setState({ loading: '' })
    }, 100)
    AOS.init({
      duration: 2000,
    })
  }

  componentWillUnmount() {
    if (this.timeoutId) {
      clearTimeout(this.timeoutId)
    }
  }

  render() {
    const { children } = this.props

    return (
      <div className={`body ${this.state.loading}`}>
        <Header />
        <Section />
        {children}
        <Footer />
      </div>
    )
  }
}

export default Template

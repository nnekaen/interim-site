import React from 'react'

class Footer extends React.Component {
  render() {
    return (
      <section id="footer">
        <ul className="icons">
          <li>
            <a
              href="https://twitter.com/slavefreetrade"
              className="icon alt fa-twitter"
            >
              <span className="label">Twitter</span>
            </a>
          </li>
          <li>
            <a
              href="https://www.facebook.com/slavefreetrade/"
              className="icon alt fa-facebook"
            >
              <span className="label">Facebook</span>
            </a>
          </li>
          <li>
            <a
              href="https://www.instagram.com/slavefreetrade/"
              className="icon alt fa-instagram"
            >
              <span className="label">Instagram</span>
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/company/slavefreetrade.org/"
              className="icon alt fa-linkedin"
            >
              <span className="label">Linkedin</span>
            </a>
          </li>
        </ul>
        <ul className="copyright">
          <li>Copyright &copy; slavefreetrade 2020</li>
        </ul>
      </section>
    )
  }
}

export default Footer

import React from 'react'
import data from '../assets/data/team.json'
import '@brainhubeu/react-carousel/lib/style.css'

class Team extends React.Component {
  render() {
    return (
      <section id="" className="main style1">
        <h1 className="team-heading">Team</h1>
        <div className="">
          <div className="">
            {data.team.map(teams => {
              return (
                <div className="teams">
                  <img
                    alt="{teams.firstname} {teams.lastname}"
                    className="teams-grid"
                    src={teams.imgsrc}
                  />
                  <h3 className="team-description">
                    {teams.firstname}&nbsp;{teams.lastname}{' '}
                  </h3>
                  <h3 className="team-description">{teams.title} </h3>
                  <p className="team-description">{teams.background} </p>
                  <p className="team-description">{teams.mail} </p>
                </div>
              )
            })}
          </div>
        </div>
        <br />
      </section>
    )
  }
}

export default Team

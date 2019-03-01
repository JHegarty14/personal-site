import React, { Component } from 'react';
import Typist from 'react-typist';
import './App.css';

let body = <div>{`Lofty AI: {`}<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;{`position: Software Engineer,`}<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;{`startDate: July 2018,`}<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;{`tech: [Node.js, Angular6+, MongoDB, Redis, Docker, Kubernetes, Google Cloud Platform],`}<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;{`responsibilities: {`}<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{` 1: Managed a four person application team, ensuring all deadlines were met and new features `}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{` were ready for production,`}<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{` 2: Architected the production environment using Docker and Kubernetes to dynamically scale the `}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{` app to meet user demand,`}<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{` 3: Implemented clustering and heatmap generation algorithms in Python that returned the best `}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{` areas in a given city to purchase property`}<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;{'}'}<br/>
        {`},`}<br/>
        {`O P Solutions: {`}<br/>
          &nbsp;&nbsp;&nbsp;&nbsp;{`position: Web Developer,`}<br/>
          &nbsp;&nbsp;&nbsp;&nbsp;{`startDate: June 2017,`}<br/>
          &nbsp;&nbsp;&nbsp;&nbsp;{`endDate: June 2018,`}<br/>
          &nbsp;&nbsp;&nbsp;&nbsp;{`tech: [C#, SQL, jQuery, HTML5, CSS3, VB.NET],`}<br/>
          &nbsp;&nbsp;&nbsp;&nbsp;{`responsibilities: {`}<br/>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{` 1: Worked alongside senior developers to test and debug new builds of the PATTSY WAVE platform, `}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{` and assisted with screen design for new features,`}<br/>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{` 2: Conducted large-scale data conversions for incoming clients from Excel, Access, or SQL to an `}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{` O P Solutions-specific SQL backend,`}<br/>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{` 3: Directed installation projects for new clients, including server configuration and management`}<br/>
          &nbsp;&nbsp;&nbsp;&nbsp;{'}'}<br/>
        {`},`}<br/>
        {`New York University: {`}<br/>
          &nbsp;&nbsp;&nbsp;&nbsp;{`position: Research Assistant,`}<br/>
          &nbsp;&nbsp;&nbsp;&nbsp;{`startDate: September 2015,`}<br/>
          &nbsp;&nbsp;&nbsp;&nbsp;{`endDate: August 2016,`}<br/>
          &nbsp;&nbsp;&nbsp;&nbsp;{`tech: [R, SQL, MATLAB],`}<br/>
          &nbsp;&nbsp;&nbsp;&nbsp;{`responsibilities: {`}<br/>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{` 1: Conducted studies, managed participant scheduling, and analyzed data on behalf of the Social `}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{` Neuroscience Lab and the Neuroscience and Education Lab.`}<br/>

          &nbsp;&nbsp;&nbsp;&nbsp;{'}'}<br/>
        {`}`}<br/><br/>
      </div>

class Experience extends Component {
  constructor(props) {
    super(props);
    this.state = {
        render: false //Set render state to false
    }
  }

  componentDidMount() {
    setTimeout(function() { //Start the timer
        this.setState({render: true}) //After 1 second, set render to true
    }.bind(this), 500)
  }

  render() {
    let renderContainer = false //By default don't render anything
    
    if(this.state.render) { //If this.state.render == true, which is set to true by the timer.
        renderContainer = body //Add dom elements
    }
    return(
      <div>
        <div className='terminal_input'>Jacks-MacBook-Pro:~ jack$&nbsp;<Typist avgTypingDelay={20}>Jack.resume</Typist></div><br/>
        {renderContainer}
      </div>
    )
  }
}

export default Experience;
import React, { Component } from 'react';
import Typist from 'react-typist';

var body = <div>{`Languages: {`}<br/>
    &nbsp;&nbsp;&nbsp;&nbsp;{`Javascript: 4 years experience,`}<br/>
    &nbsp;&nbsp;&nbsp;&nbsp;{`Node.js: 4 years experience,`}<br/>
    &nbsp;&nbsp;&nbsp;&nbsp;{`React: 3 years experience,`}<br/>
    &nbsp;&nbsp;&nbsp;&nbsp;{`Angular2+: 3 years experience,`}<br/>
    &nbsp;&nbsp;&nbsp;&nbsp;{`Python: 2 year experience,`}<br/>
    &nbsp;&nbsp;&nbsp;&nbsp;{`HTML5: 4 years experience,`}<br/>
    &nbsp;&nbsp;&nbsp;&nbsp;{`CSS3: 4 years experience,`}<br/>
    &nbsp;&nbsp;&nbsp;&nbsp;{`LESS: 3 years experience,`}<br/>
    &nbsp;&nbsp;&nbsp;&nbsp;{`SASS: 2 year experience,`}<br/>
    &nbsp;&nbsp;&nbsp;&nbsp;{`C#: 1 year experience,`}<br/>
    &nbsp;&nbsp;&nbsp;&nbsp;{`Golang: 1 year experience,`}<br/>
    {`},`}<br/>
    {`Databases: {`}<br/>
    &nbsp;&nbsp;&nbsp;&nbsp;{`Postgres: 4 years experience,`}<br/>
    &nbsp;&nbsp;&nbsp;&nbsp;{`MongoDB: 4 years experience,`}<br/>
    &nbsp;&nbsp;&nbsp;&nbsp;{`Redis: 1 year experience,`}<br/>
    {`},`}<br/>
    {`DevOps: {`}<br/>
    &nbsp;&nbsp;&nbsp;&nbsp;{`AWS: 4 years experience,`}<br/>
    &nbsp;&nbsp;&nbsp;&nbsp;{`Google Cloud Platform: 1 year experience,`}<br/>
    &nbsp;&nbsp;&nbsp;&nbsp;{`Docker: 3 years experience,`}<br/>
    &nbsp;&nbsp;&nbsp;&nbsp;{`Kubernetes: 3 years experience,`}<br/>
    &nbsp;&nbsp;&nbsp;&nbsp;{`Drone: 2 years experience,`}<br/>
    {`}`}
</div>

class Skills extends Component {
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
    
        if (this.state.render) { //If this.state.render == true, which is set to true by the timer.
            renderContainer = body //Add dom elements
        }
        return (
            <div>
                <div className='terminal_input'>Jacks-MacBook-Pro:~ jack$&nbsp;<Typist avgTypingDelay={20}>Jack.skills</Typist></div><br/>
                {renderContainer}
            </div>
        )
    }
}

export default Skills;
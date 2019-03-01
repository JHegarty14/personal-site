import React, { Component } from 'react';
import Typist from 'react-typist';

var body = <div>{`Languages: {`}<br/>
    &nbsp;&nbsp;&nbsp;&nbsp;{`Javascript: 2 years experience`}<br/>
    &nbsp;&nbsp;&nbsp;&nbsp;{`Node.js: 2 years experience`}<br/>
    &nbsp;&nbsp;&nbsp;&nbsp;{`React: 1 year experience`}<br/>
    &nbsp;&nbsp;&nbsp;&nbsp;{`Angular2+: 1 year experience`}<br/>
    &nbsp;&nbsp;&nbsp;&nbsp;{`HTML5: 2 years experience`}<br/>
    &nbsp;&nbsp;&nbsp;&nbsp;{`CSS3: 2 years experience`}<br/>
    &nbsp;&nbsp;&nbsp;&nbsp;{`SASS: 1 year experience`}<br/>
    &nbsp;&nbsp;&nbsp;&nbsp;{`C#: 1 year experience`}<br/>
    &nbsp;&nbsp;&nbsp;&nbsp;{`Python: <1 year experience`}<br/>
    {`},`}<br/>
    {`Databases: {`}<br/>
    &nbsp;&nbsp;&nbsp;&nbsp;{`SQL: 2 years experience`}<br/>
    &nbsp;&nbsp;&nbsp;&nbsp;{`MongoDB: 2 years experience`}<br/>
    &nbsp;&nbsp;&nbsp;&nbsp;{`Redis: <1 year experience`}<br/>
    {`},`}<br/>
    {`DevOps: {`}<br/>
    &nbsp;&nbsp;&nbsp;&nbsp;{`AWS: 2 years experience`}<br/>
    &nbsp;&nbsp;&nbsp;&nbsp;{`Google Cloud Platform: 1 year experience`}<br/>
    &nbsp;&nbsp;&nbsp;&nbsp;{`Docker: 1 year experience`}<br/>
    &nbsp;&nbsp;&nbsp;&nbsp;{`Kubernetes: 1 year experience`}<br/>
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
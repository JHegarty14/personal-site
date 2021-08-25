import React, { Component } from 'react';
import Typist from 'react-typist';
import './App.css';

var body = <div>{`Education: {`}<br/>
    &nbsp;&nbsp;&nbsp;&nbsp;{`school: New York University,`}<br/>
    &nbsp;&nbsp;&nbsp;&nbsp;{`startDate: August 2013,`}<br/>
    &nbsp;&nbsp;&nbsp;&nbsp;{`graduated: May 2017,`}<br/>
    &nbsp;&nbsp;&nbsp;&nbsp;{`major: Psychology, B.A.,`}<br/>
    &nbsp;&nbsp;&nbsp;&nbsp;{`minor: Chemistry,`}<br/>
    {`},`}<br/>
    {`Hobbies: [`}<br/>
    &nbsp;&nbsp;&nbsp;&nbsp;{`Audio Engineering,`}<br/>
    &nbsp;&nbsp;&nbsp;&nbsp;{`Guitar,`}<br/>
    &nbsp;&nbsp;&nbsp;&nbsp;{`Muay Thai,`}<br/>
    &nbsp;&nbsp;&nbsp;&nbsp;{`Boxing,`}<br/>
    {`],`}<br/>
    {`Open to New Opportunites: true,`}<br/>
    {`Residence: Los Angeles, CA`}<br/>
</div>

class About extends Component {
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
    
        if( this.state.render) { //If this.state.render == true, which is set to true by the timer.
            renderContainer = body //Add dom elements
        }
        return(
            <div>
                <div className='terminal_input'>Jacks-MacBook-Pro:~ jack$&nbsp;<Typist avgTypingDelay={20}>Jack.about</Typist></div><br/>
                {renderContainer}
            </div>
        )
    }
}

export default About;
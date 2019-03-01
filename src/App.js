import React, { Component } from 'react';
import './App.css';
import About from './About';
import Contact from './Contact';
import Experience from './Experience';
import Skills from './Skills';

class App extends Component {
  constructor(props) {
    super(props);
    this.handleNavClick = this.handleNavClick.bind(this);
    this.handleNavClick = this.handleNavClick.bind(this);
    this.state = { 
      nav: 'welcome',
      width: window.innerWidth
    };
  }
  days = {
    0: 'Sun',
    1: 'Mon',
    2: 'Tues',
    3: 'Wed',
    4: 'Thu',
    5: 'Fri',
    6: 'Sat'
  }
  resumeBtn = 'resume_button';
  skillsBtn = 'skills_button';
  aboutBtn = 'about_button';
  contactBtn = 'contact_button';
  date = new Date().toISOString().split('T')[0];
  time = new Date().toISOString().split('T')[1].substr(0, 8);
  key = new Date().getDay();
  dow = this.days[this.key];
  page = 'Jacks-MacBook-Pro:~ jack$';

  componentWillMount() {
    window.addEventListener('resize', this.handleWindowSizeChange);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.handleWindowSizeChange);
  }

  handleWindowSizeChange = () => {
    this.setState({ width: window.innerWidth })
  }

  handleNavClick(e, route) {
    this.setState({ nav: route });
  }

  handleScrollDown() {
    this.refs.interactive.scrollIntoView({behavior: 'smooth'});
  }

  handleScrollUp() {
    this.refs.introduction.scrollIntoView({behavior: 'smooth'});
  }

  render() {
    const navState = this.state.nav;
    const { width } = this.state;
    const isMobile  = width <= 768;

    if (navState === 'resume') {
      this.page = <Experience></Experience>
    } else if (navState === 'skills') {
      this.page = <Skills></Skills>
    } else if (navState === 'about') {
      this.page = <About></About>
    } else if (navState === 'contact') {
      this.page = <Contact></Contact>
    }

    if (!isMobile) {
      return (
        <div className="App">
          <div className="hero">
            <div className="introduction" ref="introduction">
              <p className="intro_text">Hi, I'm <span className="name">Jack Hegarty</span>. <br/> I'm an LA-based software engineer specializing in MEAN/MERN stack application development.</p>
            </div>
            <i className="large material-icons down_arrow hvr-wobble-vertical" onClick={() => this.handleScrollDown()}>arrow_downward</i>
          </div>
          <div className="interactive" ref="interactive">
            <div className="buttons">
              <button className={this.resumeBtn} onClick={(event) => this.handleNavClick(event, 'resume')}>Experience</button>
              <button className={this.skillsBtn} onClick={(event) => this.handleNavClick(event, 'skills')}>Skills</button>
              <button className={this.aboutBtn} onClick={(event) => this.handleNavClick(event, 'about')}>About</button>
              <button className={this.contactBtn} onClick={(event) => this.handleNavClick(event, 'contact')}>Contact</button>
            </div>
            <div className="terminal">
              <div className="terminal_content">
                Last login: {this.dow + ' ' + this.date + ' ' + this.time + ' UTC'}
                <br />
                {this.page}
              </div>
            </div>
          </div>
        </div>
      );
    } else {
      return(
        <div className="App">
          <div className="hero">
            <div className="introduction_mobile" ref="introduction">
              <p className="intro_mobile">Hi, I'm <span className="name">Jack Hegarty</span>. <br/> I'm an LA-based software engineer specializing in MEAN/MERN stack application development.</p>
            </div>
            <div className="email_container"><div className="contact">Contact:<br/></div><a className="link_mobile" href="mailto:jmhegarty14@gmail.com">jmhegarty14@gmail.com</a></div>
          </div>
        </div>
      );
    }
  }
}

export default App;

//<i className="medium material-icons up_arrow" onClick={() => this.handleScrollUp()}>arrow_upward</i>

import React, { Component } from 'react';
import Typist from 'react-typist';
import './Contact.css';
import Modal from 'react-modal';
import axios from 'axios';
import { Form, Field } from 'react-final-form';
import Select from 'react-select';

const subjects = [
    { label: "New Opportunity", value: 'opp' },
    { label: "Freelance Work", value: 'freelance' },
    { label: "Other", value: 'other' }
  ];

class Contact extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            render: false,
            modalIsOpen: false,
            email: '',
            name: '',
            body: ''
        };

        this.openModal = this.openModal.bind(this);
        this.afterOpenModal = this.afterOpenModal.bind(this);
        this.closeModal = this.closeModal.bind(this);
        this.submitForm = this.submitForm.bind(this);
    }

    

    componentDidMount() {
      setTimeout(function() {
          this.setState({ render: true })
      }.bind(this), 500)
    }

    openModal() {
      this.setState({modalIsOpen: true});
    }
    
    afterOpenModal() {
      // references are now sync'd and can be accessed.
      //this.subtitle.style.color = '#f00';
    }
    
    closeModal() {
      this.setState({modalIsOpen: false});
    }

    handleChange(event) {
        this.setState({ value: event.target.value })
      }

    submitForm(form) {
      console.log(form)
      var bodyFormData = new FormData();
      bodyFormData.set('name', form.name);
      bodyFormData.set('email', form.email);
      bodyFormData.set('subject', form.subject);
      bodyFormData.set('content', form.content);
      axios.post('/contact', bodyFormData)
        .then(response => {
            console.log(response);
        });
    }

    render() {
        var body = <div><br/>{`Contact: {`}<br/>
            &nbsp;&nbsp;&nbsp;&nbsp;{`Email: `}<a className="link" href="mailto:jmhegarty14@gmail.com">jmhegarty14@gmail.com</a>,<br/>
            &nbsp;&nbsp;&nbsp;&nbsp;{`LinkedIn: `}<a className="link" rel="noopener noreferrer" target="_blank" href="https://www.linkedin.com/in/john-m-hegarty/">https://www.linkedin.com/in/john-m-hegarty/</a>,<br/>
            &nbsp;&nbsp;&nbsp;&nbsp;{`Github: `}<a className="link" rel="noopener noreferrer" target="_blank" href="https://github.com/jhegarty14">https://github.com/jhegarty14</a>,<br/>
            {`}`}
        </div>
        let renderContainer = false //By default don't render anything
        
        if (this.state.render) { //If this.state.render == true, which is set to true by the timer.
            renderContainer = body //Add dom elements
        }
        return(
            <div>
                <div className='terminal_input'>Jacks-MacBook-Pro:~ jack$&nbsp;<Typist avgTypingDelay={20}>Jack.contact<br/></Typist></div>
                {renderContainer}
                <Modal
                  isOpen={this.state.modalIsOpen}
                  onAfterOpen={this.afterOpenModal}
                  onRequestClose={this.closeModal}
                  contentLabel="Contact"
                  className="modal"
                  overlayClassName="overlay">
                    <a onClick={this.closeModal} className='close_modal'>X</a>
                    <div className="modal_container">
                        <div className="modal_header">Get In Touch</div>
                        <form onSubmit={this.submitForm}>
                          <div className=''>
                            <label>Name</label>
                            <input name="name" component="input" />
                            <label>Email</label>
                            <input name="email" component="input"  />
                          </div>
                          <div className="modal_row">
                            <label>Subject</label>
                            <Select className='modal_select' name="subject" options={subjects} />
                          </div>
                          <div>
                              <label>Your Message</label>
                              <textarea name="content"></textarea>
                          </div>
                          <input type="submit" />
                        </form>
                    </div>
                </Modal>
            </div>
        )
    }
}

export default Contact;
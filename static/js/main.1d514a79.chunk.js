(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{14:function(e,t,a){},37:function(e,t,a){e.exports=a(79)},42:function(e,t,a){},43:function(e,t,a){},79:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(10),c=a.n(r),i=(a(42),a(4)),o=a(5),s=a(7),m=a(6),u=a(9),b=a(8),d=(a(14),a(11)),E=a.n(d),p=l.a.createElement("div",null,"Education: {",l.a.createElement("br",null),"\xa0\xa0\xa0\xa0","school: New York University,",l.a.createElement("br",null),"\xa0\xa0\xa0\xa0","startDate: August 2013,",l.a.createElement("br",null),"\xa0\xa0\xa0\xa0","graduated: May 2017,",l.a.createElement("br",null),"\xa0\xa0\xa0\xa0","major: Psychology, B.A.,",l.a.createElement("br",null),"\xa0\xa0\xa0\xa0","minor: Chemistry,",l.a.createElement("br",null),"},",l.a.createElement("br",null),"Hobbies: [",l.a.createElement("br",null),"\xa0\xa0\xa0\xa0","Audio Engineering,",l.a.createElement("br",null),"\xa0\xa0\xa0\xa0","Guitar,",l.a.createElement("br",null),"\xa0\xa0\xa0\xa0","Muay Thai,",l.a.createElement("br",null),"\xa0\xa0\xa0\xa0","Boxing,",l.a.createElement("br",null),"],",l.a.createElement("br",null),"Open to New Opportunites: true,",l.a.createElement("br",null),"Residence: Los Angeles, CA",l.a.createElement("br",null)),h=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(s.a)(this,Object(m.a)(t).call(this,e))).state={render:!1},a}return Object(b.a)(t,e),Object(o.a)(t,[{key:"componentDidMount",value:function(){setTimeout(function(){this.setState({render:!0})}.bind(this),500)}},{key:"render",value:function(){var e=!1;return this.state.render&&(e=p),l.a.createElement("div",null,l.a.createElement("div",{className:"terminal_input"},"Jacks-MacBook-Pro:~ jack$\xa0",l.a.createElement(E.a,{avgTypingDelay:20},"Jack.about")),l.a.createElement("br",null),e)}}]),t}(n.Component),v=(a(43),a(30)),g=a.n(v),y=a(31),f=a.n(y),k=a(36),w=[{label:"New Opportunity",value:"opp"},{label:"Freelance Work",value:"freelance"},{label:"Other",value:"other"}],N=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(s.a)(this,Object(m.a)(t).call(this,e))).state={render:!1,modalIsOpen:!1,email:"",name:"",body:""},a.openModal=a.openModal.bind(Object(u.a)(a)),a.afterOpenModal=a.afterOpenModal.bind(Object(u.a)(a)),a.closeModal=a.closeModal.bind(Object(u.a)(a)),a.submitForm=a.submitForm.bind(Object(u.a)(a)),a}return Object(b.a)(t,e),Object(o.a)(t,[{key:"componentDidMount",value:function(){setTimeout(function(){this.setState({render:!0})}.bind(this),500)}},{key:"openModal",value:function(){this.setState({modalIsOpen:!0})}},{key:"afterOpenModal",value:function(){}},{key:"closeModal",value:function(){this.setState({modalIsOpen:!1})}},{key:"handleChange",value:function(e){this.setState({value:e.target.value})}},{key:"submitForm",value:function(e){console.log(e);var t=new FormData;t.set("name",e.name),t.set("email",e.email),t.set("subject",e.subject),t.set("content",e.content),f.a.post("/contact",t).then(function(e){console.log(e)})}},{key:"render",value:function(){var e=l.a.createElement("div",null,l.a.createElement("br",null),"Contact: {",l.a.createElement("br",null),"\xa0\xa0\xa0\xa0","Email: ",l.a.createElement("a",{className:"link",href:"mailto:jmhegarty14@gmail.com"},"jmhegarty14@gmail.com"),",",l.a.createElement("br",null),"\xa0\xa0\xa0\xa0","LinkedIn: ",l.a.createElement("a",{className:"link",rel:"noopener noreferrer",target:"_blank",href:"https://www.linkedin.com/in/john-m-hegarty/"},"https://www.linkedin.com/in/john-m-hegarty/"),",",l.a.createElement("br",null),"\xa0\xa0\xa0\xa0","Github: ",l.a.createElement("a",{className:"link",rel:"noopener noreferrer",target:"_blank",href:"https://github.com/jhegarty14"},"https://github.com/jhegarty14"),",",l.a.createElement("br",null),"}"),t=!1;return this.state.render&&(t=e),l.a.createElement("div",null,l.a.createElement("div",{className:"terminal_input"},"Jacks-MacBook-Pro:~ jack$\xa0",l.a.createElement(E.a,{avgTypingDelay:20},"Jack.contact",l.a.createElement("br",null))),t,l.a.createElement(g.a,{isOpen:this.state.modalIsOpen,onAfterOpen:this.afterOpenModal,onRequestClose:this.closeModal,contentLabel:"Contact",className:"modal",overlayClassName:"overlay"},l.a.createElement("div",{className:"modal_container"},l.a.createElement("div",{className:"modal_header"},"Get In Touch"),l.a.createElement("form",{onSubmit:this.submitForm},l.a.createElement("div",{className:""},l.a.createElement("label",null,"Name"),l.a.createElement("input",{name:"name",component:"input"}),l.a.createElement("label",null,"Email"),l.a.createElement("input",{name:"email",component:"input"})),l.a.createElement("div",{className:"modal_row"},l.a.createElement("label",null,"Subject"),l.a.createElement(k.a,{className:"modal_select",name:"subject",options:w})),l.a.createElement("div",null,l.a.createElement("label",null,"Your Message"),l.a.createElement("textarea",{name:"content"})),l.a.createElement("input",{type:"submit"})))))}}]),t}(n.Component),j=l.a.createElement("div",null,"NASA Jet Propulsion Laboratory: {",l.a.createElement("br",null),"\xa0\xa0\xa0\xa0","position: Software Engineer,",l.a.createElement("br",null),"\xa0\xa0\xa0\xa0","startDate: April 2019,",l.a.createElement("br",null),"\xa0\xa0\xa0\xa0","tech: [React, Angular6+, Django, Flask, Postgres, Docker, Amazon ECS, Kubernetes],",l.a.createElement("br",null),"\xa0\xa0\xa0\xa0","responsibilities: {",l.a.createElement("br",null),"\xa0\xa0\xa0\xa0\xa0\xa0"," 1: Lead frontend development in Angular6 for the JPL Tours management system,",l.a.createElement("br",null),"\xa0\xa0\xa0\xa0\xa0\xa0"," 2: Currently writing custom applications in support of the Europa Clipper project",l.a.createElement("br",null),"\xa0\xa0\xa0\xa0","}",l.a.createElement("br",null),"},",l.a.createElement("br",null),"Lofty AI: {",l.a.createElement("br",null),"\xa0\xa0\xa0\xa0","position: Software Engineer,",l.a.createElement("br",null),"\xa0\xa0\xa0\xa0","startDate: July 2018,",l.a.createElement("br",null),"\xa0\xa0\xa0\xa0","endDate: April 2019,",l.a.createElement("br",null),"\xa0\xa0\xa0\xa0","tech: [Node.js, Angular6+, MongoDB, Redis, Docker, Kubernetes, Google Cloud Platform],",l.a.createElement("br",null),"\xa0\xa0\xa0\xa0","responsibilities: {",l.a.createElement("br",null),"\xa0\xa0\xa0\xa0\xa0\xa0"," 1: Managed a four person application team, ensuring all deadlines were met and new features ","\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0"," were ready for production,",l.a.createElement("br",null),"\xa0\xa0\xa0\xa0\xa0\xa0"," 2: Architected the production environment using Docker and Kubernetes to dynamically scale the ","\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0"," app to meet user demand,",l.a.createElement("br",null),"\xa0\xa0\xa0\xa0\xa0\xa0"," 3: Implemented clustering and heatmap generation algorithms in Python that returned the best ","\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0"," areas in a given city to purchase property",l.a.createElement("br",null),"\xa0\xa0\xa0\xa0","}",l.a.createElement("br",null),"},",l.a.createElement("br",null),"O P Solutions: {",l.a.createElement("br",null),"\xa0\xa0\xa0\xa0","position: Web Developer,",l.a.createElement("br",null),"\xa0\xa0\xa0\xa0","startDate: June 2017,",l.a.createElement("br",null),"\xa0\xa0\xa0\xa0","endDate: June 2018,",l.a.createElement("br",null),"\xa0\xa0\xa0\xa0","tech: [C#, SQL, jQuery, HTML5, CSS3, VB.NET],",l.a.createElement("br",null),"\xa0\xa0\xa0\xa0","responsibilities: {",l.a.createElement("br",null),"\xa0\xa0\xa0\xa0\xa0\xa0"," 1: Worked alongside senior developers to test and debug new builds of the PATTSY WAVE platform, ","\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0"," and assisted with screen design for new features,",l.a.createElement("br",null),"\xa0\xa0\xa0\xa0\xa0\xa0"," 2: Conducted large-scale data conversions for incoming clients from Excel, Access, or SQL to an ","\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0"," O P Solutions-specific SQL backend,",l.a.createElement("br",null),"\xa0\xa0\xa0\xa0\xa0\xa0"," 3: Directed installation projects for new clients, including server configuration and management",l.a.createElement("br",null),"\xa0\xa0\xa0\xa0","}",l.a.createElement("br",null),"},",l.a.createElement("br",null),"New York University: {",l.a.createElement("br",null),"\xa0\xa0\xa0\xa0","position: Research Assistant,",l.a.createElement("br",null),"\xa0\xa0\xa0\xa0","startDate: September 2015,",l.a.createElement("br",null),"\xa0\xa0\xa0\xa0","endDate: August 2016,",l.a.createElement("br",null),"\xa0\xa0\xa0\xa0","tech: [R, SQL, MATLAB],",l.a.createElement("br",null),"\xa0\xa0\xa0\xa0","responsibilities: {",l.a.createElement("br",null),"\xa0\xa0\xa0\xa0\xa0\xa0"," 1: Conducted studies, managed participant scheduling, and analyzed data on behalf of the Social ","\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0"," Neuroscience Lab and the Neuroscience and Education Lab.",l.a.createElement("br",null),"\xa0\xa0\xa0\xa0","}",l.a.createElement("br",null),"}",l.a.createElement("br",null),l.a.createElement("br",null)),O=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(s.a)(this,Object(m.a)(t).call(this,e))).state={render:!1},a}return Object(b.a)(t,e),Object(o.a)(t,[{key:"componentDidMount",value:function(){setTimeout(function(){this.setState({render:!0})}.bind(this),500)}},{key:"render",value:function(){var e=!1;return this.state.render&&(e=j),l.a.createElement("div",null,l.a.createElement("div",{className:"terminal_input"},"Jacks-MacBook-Pro:~ jack$\xa0",l.a.createElement(E.a,{avgTypingDelay:20},"Jack.resume")),l.a.createElement("br",null),e)}}]),t}(n.Component),S=l.a.createElement("div",null,"Languages: {",l.a.createElement("br",null),"\xa0\xa0\xa0\xa0","Javascript: 4 years experience,",l.a.createElement("br",null),"\xa0\xa0\xa0\xa0","Node.js: 4 years experience,",l.a.createElement("br",null),"\xa0\xa0\xa0\xa0","React: 3 years experience,",l.a.createElement("br",null),"\xa0\xa0\xa0\xa0","Angular2+: 3 years experience,",l.a.createElement("br",null),"\xa0\xa0\xa0\xa0","Python: 2 year experience,",l.a.createElement("br",null),"\xa0\xa0\xa0\xa0","HTML5: 4 years experience,",l.a.createElement("br",null),"\xa0\xa0\xa0\xa0","CSS3: 4 years experience,",l.a.createElement("br",null),"\xa0\xa0\xa0\xa0","LESS: 3 years experience,",l.a.createElement("br",null),"\xa0\xa0\xa0\xa0","SASS: 2 year experience,",l.a.createElement("br",null),"\xa0\xa0\xa0\xa0","C#: 1 year experience,",l.a.createElement("br",null),"\xa0\xa0\xa0\xa0","Golang: 1 year experience,",l.a.createElement("br",null),"},",l.a.createElement("br",null),"Databases: {",l.a.createElement("br",null),"\xa0\xa0\xa0\xa0","Postgres: 4 years experience,",l.a.createElement("br",null),"\xa0\xa0\xa0\xa0","MongoDB: 4 years experience,",l.a.createElement("br",null),"\xa0\xa0\xa0\xa0","Redis: 1 year experience,",l.a.createElement("br",null),"},",l.a.createElement("br",null),"DevOps: {",l.a.createElement("br",null),"\xa0\xa0\xa0\xa0","AWS: 4 years experience,",l.a.createElement("br",null),"\xa0\xa0\xa0\xa0","Google Cloud Platform: 1 year experience,",l.a.createElement("br",null),"\xa0\xa0\xa0\xa0","Docker: 3 years experience,",l.a.createElement("br",null),"\xa0\xa0\xa0\xa0","Kubernetes: 3 years experience,",l.a.createElement("br",null),"\xa0\xa0\xa0\xa0","Drone: 2 years experience,",l.a.createElement("br",null),"}"),C=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(s.a)(this,Object(m.a)(t).call(this,e))).state={render:!1},a}return Object(b.a)(t,e),Object(o.a)(t,[{key:"componentDidMount",value:function(){setTimeout(function(){this.setState({render:!0})}.bind(this),500)}},{key:"render",value:function(){var e=!1;return this.state.render&&(e=S),l.a.createElement("div",null,l.a.createElement("div",{className:"terminal_input"},"Jacks-MacBook-Pro:~ jack$\xa0",l.a.createElement(E.a,{avgTypingDelay:20},"Jack.skills")),l.a.createElement("br",null),e)}}]),t}(n.Component),D=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(s.a)(this,Object(m.a)(t).call(this,e))).days={0:"Sun",1:"Mon",2:"Tues",3:"Wed",4:"Thu",5:"Fri",6:"Sat"},a.resumeBtn="resume_button",a.skillsBtn="skills_button",a.aboutBtn="about_button",a.contactBtn="contact_button",a.date=(new Date).toISOString().split("T")[0],a.time=(new Date).toISOString().split("T")[1].substr(0,8),a.key=(new Date).getDay(),a.dow=a.days[a.key],a.page="Jacks-MacBook-Pro:~ jack$",a.handleWindowSizeChange=function(){a.setState({width:window.innerWidth})},a.handleNavClick=a.handleNavClick.bind(Object(u.a)(a)),a.handleNavClick=a.handleNavClick.bind(Object(u.a)(a)),a.state={nav:"welcome",width:window.innerWidth},a}return Object(b.a)(t,e),Object(o.a)(t,[{key:"componentWillMount",value:function(){window.addEventListener("resize",this.handleWindowSizeChange)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("resize",this.handleWindowSizeChange)}},{key:"handleNavClick",value:function(e,t){this.setState({nav:t})}},{key:"handleScrollDown",value:function(){this.refs.interactive.scrollIntoView({behavior:"smooth"})}},{key:"handleScrollUp",value:function(){this.refs.introduction.scrollIntoView({behavior:"smooth"})}},{key:"render",value:function(){var e=this,t=this.state.nav,a=this.state.width<=768;return"resume"===t?this.page=l.a.createElement(O,null):"skills"===t?this.page=l.a.createElement(C,null):"about"===t?this.page=l.a.createElement(h,null):"contact"===t&&(this.page=l.a.createElement(N,null)),a?l.a.createElement("div",{className:"App"},l.a.createElement("div",{className:"hero"},l.a.createElement("div",{className:"introduction_mobile",ref:"introduction"},l.a.createElement("p",{className:"intro_mobile"},"Hi, I'm ",l.a.createElement("span",{className:"name"},"Jack Hegarty"),". ",l.a.createElement("br",null)," I'm an LA-based software engineer specializing in MEAN/MERN stack application development.")),l.a.createElement("div",{className:"email_container"},l.a.createElement("div",{className:"contact"},"Contact:",l.a.createElement("br",null)),l.a.createElement("a",{className:"link_mobile",href:"mailto:jmhegarty14@gmail.com"},"jmhegarty14@gmail.com")))):l.a.createElement("div",{className:"App"},l.a.createElement("div",{className:"hero"},l.a.createElement("div",{className:"introduction",ref:"introduction"},l.a.createElement("p",{className:"intro_text"},"Hi, I'm ",l.a.createElement("span",{className:"name"},"Jack Hegarty"),". ",l.a.createElement("br",null)," I'm an LA-based software engineer specializing in MEAN/MERN stack application development.")),l.a.createElement("i",{className:"large material-icons down_arrow hvr-wobble-vertical",onClick:function(){return e.handleScrollDown()}},"arrow_downward")),l.a.createElement("div",{className:"interactive",ref:"interactive"},l.a.createElement("div",{className:"buttons"},l.a.createElement("button",{className:this.resumeBtn,onClick:function(t){return e.handleNavClick(t,"resume")}},"Experience"),l.a.createElement("button",{className:this.skillsBtn,onClick:function(t){return e.handleNavClick(t,"skills")}},"Skills"),l.a.createElement("button",{className:this.aboutBtn,onClick:function(t){return e.handleNavClick(t,"about")}},"About"),l.a.createElement("button",{className:this.contactBtn,onClick:function(t){return e.handleNavClick(t,"contact")}},"Contact")),l.a.createElement("div",{className:"terminal"},l.a.createElement("div",{className:"terminal_content"},"Last login: ",this.dow+" "+this.date+" "+this.time+" UTC",l.a.createElement("br",null),this.page))))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(l.a.createElement(D,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[37,1,2]]]);
//# sourceMappingURL=main.1d514a79.chunk.js.map
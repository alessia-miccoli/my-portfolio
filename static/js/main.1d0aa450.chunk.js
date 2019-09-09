(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{10:function(e){e.exports={description:"Hi, my name is Alessia. \ud83d\udc4b<br> \ud83d\udc69\u200d\ud83d\udcbb\ud83d\udcda I'm a Computer Engineering Student @<b>Polytechnic University of Turin</b>.<br><br>I interrupted my studies for a while to move to <b>Ireland</b>, where I worked for about 2 years, lately as a <b>Web Implementation Specialist</b> for the <b>Google Tag Team</b> in Dublin. <br>This January I came back to Italy in order to finish my studies and hopefully land my first job as a Software Engineer!<br><br> \ud83d\udc99 I really love everything related with programming</b>, Web Development in particular.",skills:{HTML:"https://i.ibb.co/qBsdVPs/html-512px.png",CSS:"https://i.ibb.co/ThKCTsS/css-512px.png",JavaScript:"https://i.ibb.co/tMySwHc/js-512.png",React:"https://cdn.auth0.com/blog/react-js/react.png",jQuery:"https://abeon-hosting.com/images/jquery-logo-png-2.png",Bootstrap:"https://i.ibb.co/wsmGyzy/bootrastrap-512.png",Git:"http://shijuvarghese.com/wp-content/uploads/2018/03/git-logo.png"},projects:[{fcc:!0,name:"Pomodoro Clock",imageSource:"https://i.ibb.co/hdkKF4N/pomodoro.png",description:"Timer that allows to alternate study sessions and breaks.",skills:["HTML","CSS","React"],projectUrl:"https://codepen.io/Alessia/full/YbYjzo",codeUrl:"https://codepen.io/Alessia/pen/YbYjzo"},{fcc:!0,name:"Drum Machine",imageSource:"https://i.ibb.co/6y6s7SK/drum-machine.png",description:"Drum pads that can be played with the mouse or the keyboard, the name of the track played is shown on a display.",skills:["HTML","CSS","React"],projectUrl:"https://codepen.io/Alessia/full/rbNBrE",codeUrl:"https://codepen.io/Alessia/pen/rbNBrE?editors=0010"},{fcc:!0,name:"React Calculator",imageSource:"https://i.ibb.co/wNkRTzH/calcolatrice.png",description:"Calculator that handles the 4 standard operations (sum, subtraction, division, multiplication) for both integers and floating-point numbers.",skills:["HTML","CSS","React"],projectUrl:"https://codepen.io/Alessia/full/GLwLgp",codeUrl:"https://codepen.io/Alessia/pen/GLwLgp"},{fcc:!0,name:"Random Quote Machine",imageSource:"https://i.ibb.co/6XBknV8/random-quote.png",description:"Web page that returns via API from 'Quotes on Design' a series of random quotes. They can be shared on Twitter clicking on the related Button.",skills:["HTML","CSS","jQuery"],projectUrl:"https://codepen.io/Alessia/full/aYPoPK",codeUrl:"https://codepen.io/Alessia/pen/aYPoPK?editors=0010"},{fcc:!0,name:"Markdown Previewer",imageSource:"https://i.ibb.co/BgJWmYK/markdown.png",description:"Responsive web page that allow to Markdown the content inserted in the editor and visualize it in the Preview Container.",skills:["HTML","CSS","React","Marked.js"],projectUrl:"https://codepen.io/Alessia/full/aMgJOX",codeUrl:"https://codepen.io/Alessia/pen/aMgJOX?editors=0010"},{fcc:!1,name:"100",imageSource:"https://i.ibb.co/jfFzT70/100.png",description:"This was my first project. I tried to replicate a game that my father plays on paper.",skills:["HTML","CSS","JavaScript","Git"],projectUrl:"http://100-game.azurewebsites.net/",codeUrl:"https://gitlab.com/AlessiaMiccoli/100"}],articles:{"How to create a responsive Navigation Bar with HTML, CSS and jQuery \u2014 step by step tutorial":"https://itnext.io/how-to-create-a-responsive-navigation-bar-with-html-css-and-jquery-step-by-step-tutorial-9c780b58479f?source=friends_link&sk=af69e81f2c521dc9cbb34cfc1aad8174","Regular Expressions (RegEx) and How to use them in JavaScript\u200a\u2014\u200awith simple examples":"https://itnext.io/regular-expressions-regex-and-how-to-use-them-in-javascript-with-simple-examples-733a27f0717c?source=friends_link&sk=f747f50fadf63d86e221454ecf2605e5","How to create a Twitter Inspired Character Counter with an SVG Progress Ring using React":"https://itnext.io/how-to-create-a-twitter-inspired-character-counter-with-an-svg-progress-ring-react-js-352f3c8eefbc?source=friends_link&sk=502b793d1c5d788b8762dd296a002d48","How to make a form work without back end (with EmailJS)":"https://medium.com/@alessiamiccoli/how-to-make-a-form-work-without-back-end-with-emailjs-fc956fe371d4?source=friends_link&sk=20fcbe4a7283427571aa029855000d2d"},certifications:{"Responsive Web Design":{link:"https://www.freecodecamp.org/certification/alessia-miccoli/responsive-web-design",date:"September 7, 2018",by:"FreeCodeCamp"},"JavaScript Algorithms and Data Structures":{link:"https://www.freecodecamp.org/certification/alessia-miccoli/javascript-algorithms-and-data-structures",date:"February 19, 2019",by:"FreeCodeCamp"},"PHP Tutorial Course":{link:"https://www.sololearn.com/Certificate/1059-13851495/pdf/",date:"07 May, 2019",by:"SoloLearn"},"Front End Libraries":{link:"https://www.freecodecamp.org/certification/alessia-miccoli/front-end-libraries",date:"May 24, 2019",by:"FreeCodeCamp"}}}},12:function(e,t,a){e.exports=a(22)},18:function(e,t,a){},19:function(e,t,a){},22:function(e,t,a){"use strict";a.r(t);var r=a(0),s=a.n(r),i=a(8),n=a.n(i),c=(a(18),a(11)),l=a(1),o=a(2),m=a(4),p=a(3),d=a(6),u=a(5),h=(a(19),s.a.Component,function(e){function t(){return Object(l.a)(this,t),Object(m.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this,t=Object.keys(this.props.data.skills).map(function(t){return s.a.createElement("a",{className:"btn btn-lg text-info skill-btn",key:t,href:"#".concat(t),role:"button"},s.a.createElement("img",{className:"skills",name:t,src:"".concat(e.props.data.skills[t]),alt:"".concat(t),border:"0",style:e.props.skillSelected[t].skillStyle,onClick:e.props.selectSkill}))});return s.a.createElement("div",null,s.a.createElement("div",{id:"skills"},t))}}]),t}(s.a.Component)),b=function(e){function t(){return Object(l.a)(this,t),Object(m.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return s.a.createElement("div",{id:"about",className:"jumbotron"},s.a.createElement("div",{id:"clear"},s.a.createElement("p",{className:"lead",dangerouslySetInnerHTML:{__html:this.props.data.description}}),s.a.createElement("hr",{id:"separator"}),s.a.createElement("nav",{className:"links"},s.a.createElement("ul",null,s.a.createElement("li",{className:"link"},s.a.createElement("a",{href:"#projects-container"},"Projects")),s.a.createElement("li",{className:"link"},s.a.createElement("a",{href:"#certifications-container"},"Certifications")),s.a.createElement("li",{className:"link"},s.a.createElement("a",{href:"#articles-container"},"Articles")),s.a.createElement("li",{className:"link"},s.a.createElement("a",{href:"#form"},"Contacts"))))),s.a.createElement(h,{data:this.props.data,skillSelected:this.props.skillSelected,selectSkill:this.props.selectSkill}))}}]),t}(s.a.Component),f=function(e){function t(){return Object(l.a)(this,t),Object(m.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return s.a.createElement("div",null,s.a.createElement("span",{className:"badge badge-pill badge-info"},this.props.skill))}}]),t}(s.a.Component),g=function(e){function t(){return Object(l.a)(this,t),Object(m.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return s.a.createElement("div",{className:"panel"},s.a.createElement("p",{className:"project-name"},this.props.name),s.a.createElement("button",{className:"btn btn-info"},s.a.createElement("a",{href:this.props.projectUrl,target:"_blank",rel:"noopener noreferrer"},"Go to Project")),s.a.createElement("button",{className:"btn btn-info"},s.a.createElement("a",{href:this.props.codeUrl,target:"_blank",rel:"noopener noreferrer"},"Go to Code")))}}]),t}(s.a.Component),k=function(e){function t(){return Object(l.a)(this,t),Object(m.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this.props.skills.map(function(e){return s.a.createElement(f,{skill:e})});return s.a.createElement("div",{className:"card",id:this.props.name},s.a.createElement(g,{name:this.props.name,codeUrl:this.props.codeUrl,projectUrl:this.props.projectUrl}),s.a.createElement("img",{className:"card-img-top",src:this.props.imageSource,alt:""}),s.a.createElement("div",{className:"card-body"},s.a.createElement("h5",{className:"card-title"},this.props.fcc&&s.a.createElement("i",{className:"fa fa-star","aria-hidden":"true"})," ",s.a.createElement("b",null,this.props.name)),s.a.createElement("p",{className:"card-text "},this.props.description),s.a.createElement("div",{className:"badge-container text-center"},e)))}}]),t}(s.a.Component),y=function(e){function t(){return Object(l.a)(this,t),Object(m.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this.props.data.projects.map(function(e){return s.a.createElement(k,{name:e.name,fcc:e.fcc,imageSource:e.imageSource,description:e.description,skills:e.skills,projectUrl:e.projectUrl,codeUrl:e.codeUrl})});return s.a.createElement("div",{id:"projects-container"},s.a.createElement("h3",{id:"projects",className:"text-center"},"Here are some of my projects"),s.a.createElement("div",{className:"card-deck"},e))}}]),t}(s.a.Component),j=function(e){function t(){return Object(l.a)(this,t),Object(m.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this,t=Object.keys(this.props.data.certifications).map(function(t){return s.a.createElement("li",{className:"list-group-item"},s.a.createElement("a",{href:e.props.data.certifications[t].link,target:"_blank",rel:"noopener noreferrer"},t),s.a.createElement("p",{class:"by"},e.props.data.certifications[t].by),s.a.createElement("p",{class:"date"},e.props.data.certifications[t].date))});return s.a.createElement("div",{id:"certifications-container"},s.a.createElement("h3",{id:"certifications",className:"text-center"},"List of my certifications"),s.a.createElement("ul",{id:"certification-list",className:"list-group container certifications"},t))}}]),t}(s.a.Component),E=function(e){function t(){return Object(l.a)(this,t),Object(m.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this,t=Object.keys(this.props.data.articles).map(function(t){return s.a.createElement("li",{className:"list-group-item"},s.a.createElement("i",{className:"fab fa-medium"})," ",s.a.createElement("a",{href:"#".concat(e.props.data.articles[t]),target:"_blank",rel:"noopener noreferrer"},t))});return s.a.createElement("div",{id:"articles-container"},s.a.createElement("h3",{id:"articles",className:"text-center"},"Articles that I wrote"),s.a.createElement("ul",{className:"list-group list-group-flush container articles"},t))}}]),t}(s.a.Component),v=a(9),S=function(e){function t(){return Object(l.a)(this,t),Object(m.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return s.a.createElement("div",{id:"contacts-container"},s.a.createElement("h3",{id:"form",className:"text-center"},"Would you like to get in touch?"),s.a.createElement("form",{id:"contacts",className:"container",onSubmit:this.props.formSubmit},s.a.createElement("div",{className:"form-group"},s.a.createElement("label",{htmlFor:"name"},"Your Name"),s.a.createElement("input",{type:"name",name:"name",className:"form-control",id:"name",placeholder:"Name",onChange:this.props.handleChange,value:this.props.name,required:!0})),s.a.createElement("div",{className:"form-group"},s.a.createElement("label",{htmlFor:"email"},"Your e-mail address"),s.a.createElement("input",{type:"email",name:"email",className:"form-control",id:"email",placeholder:"name@example.com",onChange:this.props.handleChange,value:this.props.email,required:!0})),s.a.createElement("div",{className:"form-group"},s.a.createElement("label",{htmlFor:"message"},"Message:"),s.a.createElement("textarea",{name:"message",className:"form-control",id:"message",rows:"3",onChange:this.props.handleChange,value:this.props.message,required:!0})),s.a.createElement("button",{type:"submit",className:"btn btn-info"},"Submit"),this.spinnerVisibility&&s.a.createElement("div",{id:"spinner-container"},s.a.createElement("div",{className:"spinner-grow text-info",role:"status"},s.a.createElement("span",{className:"sr-only"},"Loading..."))),this.props.thankYouMessageVisibility&&s.a.createElement("div",{className:"alert alert-success",role:"alert"},"Thanks! I've received your message, I'll get back to you asap. ",s.a.createElement("span",{role:"img","aria-label":"smile"},"\ud83d\ude42")),this.props.errorMessageVisibility&&s.a.createElement("div",{className:"alert alert-danger",role:"alert"},"I'm sorry! I'm having troubles getting your message... ",s.a.createElement("span",{role:"img","aria-label":"ops"},"\ud83d\ude15"),s.a.createElement("br",null),"please consider mailing me directly at miccoli.alessia@hotmail.com")))}}]),t}(s.a.Component),w=function(e){function t(){return Object(l.a)(this,t),Object(m.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return s.a.createElement("div",{className:"card-footer text-muted text-center"},s.a.createElement("p",{id:"footer"},"Made with ",s.a.createElement("i",{className:"fab fa-bootstrap"}),"ootstrap and ",s.a.createElement("i",{className:"fab fa-react"}),"React"))}}]),t}(s.a.Component),O=a(10),N=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(m.a)(this,Object(p.a)(t).call(this,e))).state={data:O,name:"",email:"",message:"",skillSelected:{HTML:{selected:!1,skillStyle:{transform:"scale(1.0)",background:"rgba(255, 255, 255, 0)"}},CSS:{selected:!1,skillStyle:{transform:"scale(1.0)",background:"rgba(255, 255, 255, 0)"}},JavaScript:{selected:!1,skillStyle:{transform:"scale(1.0)",background:"rgba(255, 255, 255, 0)"}},React:{selected:!1,skillStyle:{transform:"scale(1.0)",background:"rgba(255, 255, 255, 0)"}},jQuery:{selected:!1,skillStyle:{transform:"scale(1.0)",background:"rgba(255, 255, 255, 0)"}},Bootstrap:{selected:!1,skillStyle:{transform:"scale(1.0)",background:"rgba(255, 255, 255, 0)"}},Git:{selected:!1,skillStyle:{transform:"scale(1.0)",background:"rgba(255, 255, 255, 0)"}}},selected:[]},a.selectSkill=a.selectSkill.bind(Object(d.a)(a)),a.formSubmit=a.formSubmit.bind(Object(d.a)(a)),a.handleChange=a.handleChange.bind(Object(d.a)(a)),a}return Object(u.a)(t,e),Object(o.a)(t,[{key:"handleChange",value:function(e){switch(e.target.name){case"name":this.setState({name:e.target.value});break;case"email":this.setState({email:e.target.value});break;case"message":this.setState({message:e.target.value})}}},{key:"selectSkill",value:function(e){var t=e.target.name,a=Object(c.a)({},this.state.skillSelected);if(a[t].selected=!a[t].selected,a[t].selected?a[t].skillStyle={transform:"scale(1.1)",background:"rgba(255, 255, 255, 0)"}:a[t].skillStyle={transform:"scale(1.0)",background:"rgba(255, 255, 255, 0)"},a[t].selected)this.setState(function(e){return{skillSelected:a,selected:e.selected.concat(t)}});else{var r=this.state.selected.indexOf(t),s=this.state.selected.slice(0,r).concat(this.state.selected.slice(r+1));this.setState(function(){return{skillSelected:a,selected:s}})}}},{key:"formSubmit",value:function(e){var t=this;e.preventDefault();var a={to_name:"Alessia",name:this.state.name,email:this.state.email,message:this.state.message};v.send("gmail","template_xOTwPgwc",a,"user_NT7ftcejhxZleQsYuCo9f").then(function(e){200===e.status?t.setState({thankYouMessageVisibility:!0}):t.setState({errorMessageVisibility:!0}),t.setState({name:"",email:"",message:""})})}},{key:"render",value:function(){return s.a.createElement("div",{className:"App"},s.a.createElement(b,{data:this.state.data,skillSelected:this.state.skillSelected,selectSkill:this.selectSkill}),s.a.createElement(y,{data:this.state.data}),s.a.createElement(j,{data:this.state.data}),s.a.createElement(E,{data:this.state.data}),s.a.createElement(S,{name:this.state.name,message:this.state.message,email:this.state.email,formSubmit:this.formSubmit,handleChange:this.handleChange,thankYouMessageVisibility:this.state.thankYouMessageVisibility,errorMessageVisibility:this.state.errorMessageVisibility,spinnerVisibility:this.state.spinnerVisibility}),s.a.createElement(w,null))}}]),t}(s.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));n.a.render(s.a.createElement(N,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[12,1,2]]]);
//# sourceMappingURL=main.1d0aa450.chunk.js.map
(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{13:function(e,t,a){e.exports=a.p+"static/media/mail.ac247e4a.svg"},18:function(e,t,a){e.exports=a.p+"static/media/paper-plane.cc90408c.svg"},21:function(e,t,a){e.exports=a(36)},27:function(e,t,a){},29:function(e,t,a){},36:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(17),s=a.n(l),c=(a(27),a(4)),o=a(5),i=a(7),u=a(6),m=a(8),p=(a(29),a(38)),d=a(39),h=a(2),f=a.n(h),E=a(9),b=function(e){return r.a.createElement("div",{className:"completed-request",key:e.data.id},r.a.createElement("span",{className:"blueText"},r.a.createElement("p",null,e.data.sender_name,": ",e.data.title,r.a.createElement("i",{className:"fas fa-paper-plane"}))),r.a.createElement("p",null,e.data.request_contents),r.a.createElement("p",{className:"receiveText"},r.a.createElement("i",{className:"fas fa-check"}),e.data.recipient_name,": ",e.data.reply))},v=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(i.a)(this,Object(u.a)(t).call(this,e))).state={list:[]},a}return Object(m.a)(t,e),Object(o.a)(t,[{key:"componentDidMount",value:function(){var e=Object(E.a)(f.a.mark(function e(){var t=this;return f.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("/api/completedRequests").then(function(e){return e.json().then(function(e){t.setState({list:e})})});case 2:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){return r.a.createElement("div",{className:"completed-requests"},this.state.list.map(function(e,t){return r.a.createElement(b,{key:t,data:e})}))}}]),t}(n.Component),g=a(13),y=a.n(g),O=a(18),j=a.n(O),k=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(i.a)(this,Object(u.a)(t).call(this,e))).state={list:[]},a}return Object(m.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"heroImage"},r.a.createElement("div",{className:"heroTextWrapper"},r.a.createElement("div",{className:"heroTextP"},r.a.createElement("div",{className:"heroTextImg"},r.a.createElement("p",null," Buy-a-Compliment.xyz is a site to connect you to people that care."),r.a.createElement("img",{id:"mailImg",src:y.a,alt:"icon of paperplane flying"})),r.a.createElement("p",{className:"heroTextBlock"},"Sign-up to make requests to users that care. You can make your requests public or private. View sample items below!  "),r.a.createElement("div",{className:"heroTextImg"},r.a.createElement("img",{src:j.a,alt:"icon of stick figurethrowing paper plane"}),r.a.createElement("p",null," Recipients can then respond to the user and share in the interaction fee! All request interactions are only $1.00")),r.a.createElement("p",{className:"heroTextBlock"},"Sign up to become a member of the community now! "))))}}]),t}(n.Component),_=a(37),S=function(e){return r.a.createElement("div",{className:"nav-login"},r.a.createElement("p",{className:"modal-text"},"Please Log in below"),r.a.createElement("form",{action:"/api/login",method:"POST"},r.a.createElement("label",null,"Email address: ",r.a.createElement("br",null),r.a.createElement("input",{type:"email",name:"email",required:!0})),r.a.createElement("br",null),r.a.createElement("label",null,"Password:",r.a.createElement("br",null),r.a.createElement("input",{type:"password",name:"password",required:!0}))," ",r.a.createElement("br",null),r.a.createElement("input",{className:"buttonStyle",type:"submit",value:"submit"})))},N=function(e){return r.a.createElement("form",{action:"/logout",method:"POST"},r.a.createElement("input",{className:"logoutButton buttonStyle",type:"submit",value:"Logout"}))},C=function(e){return r.a.createElement("div",{className:"nav-register"},r.a.createElement("p",{className:"modal-text"},"Please Fill Out the Information Below to Register"),r.a.createElement("form",{action:"/api/register",method:"POST"},r.a.createElement("label",null,"Email address:",r.a.createElement("br",null),r.a.createElement("input",{type:"email",name:"email",required:!0})),r.a.createElement("br",null),r.a.createElement("label",null,"Display name:",r.a.createElement("br",null),r.a.createElement("input",{type:"text",name:"name",required:!0})),r.a.createElement("br",null),r.a.createElement("label",null,"Password:",r.a.createElement("br",null),r.a.createElement("input",{type:"password",name:"password",required:!0})),r.a.createElement("br",null),r.a.createElement("input",{className:"buttonStyle",type:"submit",value:"Register"})))},w=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(i.a)(this,Object(u.a)(t).call(this,e)))._isClickedLogin=function(){a.setState({loginOpen:!a.state.loginOpen,registerOpen:!1})},a._isClickedRegister=function(){a.setState({registerOpen:!a.state.registerOpen,loginOpen:!1})},a.state={loggedIn:!1,displayName:null,loginOpen:!1,registerOpen:!1},a}return Object(m.a)(t,e),Object(o.a)(t,[{key:"componentDidMount",value:function(){var e=Object(E.a)(f.a.mark(function e(){var t=this;return f.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("/api/loggedin").catch(function(e){console.log(e)}).then(function(e){return e.json()}).then(function(e){e?t.setState({displayname:e.name,loggedIn:!0}):console.log("move along")});case 2:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){return r.a.createElement("div",{className:"login-div"},r.a.createElement("ul",{className:"login-system-ul"},this.state.loggedIn?r.a.createElement("li",{className:"nav-logout"},r.a.createElement(N,null)):r.a.createElement(r.a.Fragment,null,r.a.createElement("li",null,r.a.createElement("button",{onClick:this._isClickedLogin},"Login")),r.a.createElement("li",null,r.a.createElement("button",{onClick:this._isClickedRegister},"Register"))),this.state.loginOpen?r.a.createElement(S,null):r.a.createElement(r.a.Fragment,null),this.state.registerOpen?r.a.createElement(C,null):r.a.createElement(r.a.Fragment,null),this.state.loggedIn?r.a.createElement("li",null," ",r.a.createElement(_.a,{className:"navLink",to:"/dashboard"},"Dashboard ")):r.a.createElement(r.a.Fragment,null),this.state.loggedIn?r.a.createElement("li",null," ",r.a.createElement(_.a,{className:"navLink",to:"/"},"Home ")):r.a.createElement(r.a.Fragment,null)))}}]),t}(n.Component),x=a(15),q=function(e){return r.a.createElement("div",{key:e.id,className:"request-card"},r.a.createElement("div",{className:"request-title blueText"},e.data.sender_name,": ",e.data.title),r.a.createElement("div",{className:"request-body"},r.a.createElement("p",null,e.data.request_contents)),r.a.createElement("div",{className:"request-recipient"},"Assigned to:",e.data.recipient_name))},T=a(12),R=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(i.a)(this,Object(u.a)(t).call(this,e)))._onChangeSuperUser=function(e){a.setState({selected_super_user:e.target.value})},a._onChangePrivate=function(e){"notPrivate"===e.target.value?a.setState({is_private:!1}):"private"===e.target.value&&a.setState({is_private:!0})},a._onChangeTitle=function(e){a.setState({title:e.target.value})},a._onChangeBody=function(e){a.setState({body_contents:e.target.value})},a.state={title:"",body_contents:"",is_private:!1,stripe_token:"",super_users_list:[],selected_super_user:null,complete:!1},a.submit=a.submit.bind(Object(T.a)(Object(T.a)(a))),a}return Object(m.a)(t,e),Object(o.a)(t,[{key:"componentDidMount",value:function(){var e=Object(E.a)(f.a.mark(function e(){var t=this;return f.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("/api/superUsersList").then(function(e){return e.json()}).then(function(e){t.setState({super_users_list:e})});case 2:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"submit",value:function(){var e=Object(E.a)(f.a.mark(function e(t){var a=this;return f.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,window.StripeCheckout.configure({key:"pk_test_tYRNrX4cgaDufHFLDWagpMUG",locale:"auto",image:"".concat(y.a),token:function(e){fetch("/charge",{method:"POST",headers:{"Content-Type":"application/json; charset=utf-8"},body:JSON.stringify({data:e.id,email:e.email})}).then(function(t){console.log(t),t.ok&&a.setState({complete:!0}),t.ok&&fetch("/api/userRequests",{method:"POST",body:JSON.stringify({title:a.state.title,text_body:a.state.body_contents,is_private:a.state.is_private,stripe_token:e.id,super_user:a.state.selected_super_user}),headers:{"Content-Type":"application/json; charset=utf-8"}}).then(function(e){return window.location.reload()})})}});case 2:e.sent.open({name:"Buy a Compliment",description:"Classic Compliment order",zipCode:!0,amount:100});case 4:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}()},{key:"render",value:function(){return this.state.complete?r.a.createElement("h1",null,"Thank you for your purchase"):r.a.createElement("div",{className:"checkout"},r.a.createElement("label",null,"Title:",r.a.createElement("br",null),r.a.createElement("input",{value:this.state.title,onChange:this._onChangeTitle,type:"text",name:"title",placeholder:"Ex. This is my story...",required:!0})),r.a.createElement("br",null),r.a.createElement("label",{className:"form-text-area"},"Body:",r.a.createElement("br",null),r.a.createElement("textarea",{name:"text_body",value:this.state.body_contents,onChange:this._onChangeBody,placeholder:"I have been having a hard time recently...",required:!0}))," ",r.a.createElement("br",null),r.a.createElement("label",null,"Is this private?",r.a.createElement("select",{name:"is_private",onChange:this._onChangePrivate},r.a.createElement("option",{value:"",selected:!0,disabled:!0,hidden:!0},"Choose here"),r.a.createElement("option",{value:"notPrivate"},"Not Private"),r.a.createElement("option",{value:"private"},"Private"))),r.a.createElement("br",null),r.a.createElement("label",null,"Who to send to?",r.a.createElement("select",{name:"super_user",onChange:this._onChangeSuperUser},r.a.createElement("option",{value:"",selected:!0,disabled:!0,hidden:!0},"Choose here"),this.state.super_users_list.map(function(e){return r.a.createElement("option",{value:e.id},e.name)}))),r.a.createElement("br",null),r.a.createElement("div",{className:"checkout-terms"},r.a.createElement("p",null,"Terms"),r.a.createElement("p",null,"For $1.00 you may send a message to one of the listed people to receive feedback on your problem, issue, or just to chat! Click below to checkout with Stripe")),r.a.createElement("h4",null,"Would you like to complete the purchase?"),r.a.createElement("button",{className:"buttonStyle",onClick:this.submit},"Send"))}}]),t}(n.Component),I=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(i.a)(this,Object(u.a)(t).call(this,e)))._onChangeRequestID=function(e){a.setState({requestIdToReplyTo:e.target.value}),console.log(e.target.value)},a._onChangeReply=function(e){a.setState({replyBody:e.target.value})},a._onSubmit=function(e){a.state.replyBody.length<=99?alert("Your reply must be 100 characters or more!"):fetch("/api/submitReply",{method:"POST",body:JSON.stringify({REQUESTS_ID:a.state.requestIdToReplyTo,reply:a.state.replyBody}),headers:{"Content-Type":"application/json; charset=utf-8"}}).then(function(e){console.log("IT WORKSSSSSSS")})},a.state={list:[],replyBody:"",requestIdToReplyTo:0},a}return Object(m.a)(t,e),Object(o.a)(t,[{key:"componentDidMount",value:function(){var e=Object(E.a)(f.a.mark(function e(){var t=this;return f.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("/api/requestsToUser").catch(function(e){console.log(e)}).then(function(e){return e.json()}).then(function(e){return t.setState({list:e}),e});case 2:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"replies-form"},r.a.createElement("p",null,"Reply to your requests"),r.a.createElement("form",{onSubmit:this._onSubmit},r.a.createElement("div",null,"Replying to:",r.a.createElement("select",{name:"idToReplyTo",onChange:this._onChangeRequestID},r.a.createElement("option",{value:"",selected:!0,disabled:!0,hidden:!0},"Choose here"),this.state.list.map(function(e){return r.a.createElement("option",{value:e.id},e.title)}))),r.a.createElement("label",null,"Reply:",r.a.createElement("textarea",{value:this.state.replyBody,placeholder:"Must be 100 characters min",onChange:this._onChangeReply,name:"reply_body",form:"usrform",required:!0})),r.a.createElement("br",null),r.a.createElement("div",{className:"button-div"},r.a.createElement("button",{className:"buttonStyle",type:"submit"}," Send")))),r.a.createElement("div",{className:"super-user-requests"},r.a.createElement("h4",null,"Here are your current pending requests to reply to"),r.a.createElement("div",{className:"replies request-wrapper"},this.state.list.map(function(e){return r.a.createElement(q,{data:e})}))))}}]),t}(n.Component),P=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(i.a)(this,Object(u.a)(t).call(this,e))).state={list:[]},a}return Object(m.a)(t,e),Object(o.a)(t,[{key:"componentDidMount",value:function(){var e=Object(E.a)(f.a.mark(function e(){var t=this;return f.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("/api/usersCompletedRequests").then(function(e){return e.json()}).then(function(e){t.setState({list:e})});case 2:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){return r.a.createElement("div",{className:"completed-requests"},this.state.list.map(function(e){return r.a.createElement(b,{data:e})}))}}]),t}(n.Component),B=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(i.a)(this,Object(u.a)(t).call(this,e))).state={displayname:"",isSuper:!1,loggedIn:!1,list:[]},a}return Object(m.a)(t,e),Object(o.a)(t,[{key:"componentDidMount",value:function(){var e=Object(E.a)(f.a.mark(function e(){var t=this;return f.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("/api/userRequests/").catch(function(e){return console.log(e)}).then(function(e){return e.json()}).then(function(e){return t.setState({list:[].concat(Object(x.a)(e),Object(x.a)(t.state.list))}),e}).then(function(e){fetch("/api/loggedin").catch(function(e){console.log(e)}).then(function(e){return e.json()}).then(function(e){e?t.setState({displayname:e.name,loggedIn:!0}):console.log("move along"),e.is_super&&t.setState({isSuper:!0})})});case 2:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(e){return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"requests-form"},this.state.isSuper&&r.a.createElement(I,null)),r.a.createElement("div",{className:"example"},r.a.createElement(R,null)),r.a.createElement("div",{className:"completed-requests-zone"},r.a.createElement("h3",null,"Your Replied Requests"),r.a.createElement(P,null)),r.a.createElement("div",{className:"requests-zone"},r.a.createElement("h3",null,"Your Sent Requests"),r.a.createElement("div",{className:"request-wrapper"},this.state.list.map(function(e){return r.a.createElement(q,{key:e.id,data:e})}))))}}]),t}(n.Component),D=function(e){function t(){return Object(c.a)(this,t),Object(i.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return r.a.createElement(p.a,null,r.a.createElement("div",{className:"App"},r.a.createElement(w,null),r.a.createElement(d.a,{path:"/",exact:!0,component:k}),r.a.createElement(d.a,{path:"/",exact:!0,component:v}),r.a.createElement(d.a,{path:"/dashboard",exact:!0,component:B})))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(r.a.createElement(D,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[21,2,1]]]);
//# sourceMappingURL=main.653239ae.chunk.js.map
(this["webpackJsonpjungle-swap-client"]=this["webpackJsonpjungle-swap-client"]||[]).push([[0],{102:function(e,t,n){"use strict";n.r(t);var a=n(1),s=n.n(a),c=n(21),r=n.n(c),i=(n(65),n(19)),o=n(43),l=n(5),u=n(6),d=n(8),j=n(7),b=n(10),h="https://jungleswap.herokuapp.com",m=n(12),p=n.n(m),O=(n(84),n(85),n(105)),f=n(106),x=n(4),v=n(9),g=n(0),N=function(e){Object(d.a)(n,e);var t=Object(j.a)(n);function n(){var e;Object(l.a)(this,n);for(var a=arguments.length,s=new Array(a),c=0;c<a;c++)s[c]=arguments[c];return(e=t.call.apply(t,[this].concat(s))).state={intervalId:null},e.handleIntervalTimer=function(){return e.props.onCheckRequests()},e}return Object(u.a)(n,[{key:"componentDidMount",value:function(){var e=setInterval(this.handleIntervalTimer,1e4);this.setState({intervalId:e})}},{key:"componentWillUnmount",value:function(){clearInterval(this.state.intervalId)}},{key:"render",value:function(){var e=this.props,t=e.user,n=e.newRequestsReceived;return Object(g.jsx)("div",{children:Object(g.jsxs)(O.a,{className:"pl-5",variant:"dark",expand:"lg",fixed:"top",children:[Object(g.jsx)(O.a.Brand,{href:"/",children:" JungleSwap "}),Object(g.jsx)(O.a.Toggle,{"aria-controls":"basic-navbar-nav"}),Object(g.jsx)(O.a.Collapse,{id:"basic-navbar-nav",children:Object(g.jsxs)(f.a,{className:"mr-auto",children:[Object(g.jsx)("div",{children:Object(g.jsx)(x.b,{to:"/",className:"p-2",onClick:function(){return v.animateScroll.scrollTo(1520)},children:" All Plants "})}),t?Object(g.jsxs)("div",{children:[Object(g.jsx)(x.b,{className:"p-2",to:"/plants/create",children:" Create Plant "}),Object(g.jsx)(x.b,{className:n?"p-2 alertColor":"p-2",to:"/requests/fetch",children:" Messages "})]}):null,t?Object(g.jsx)("div",{children:Object(g.jsx)(x.b,{className:"p-2",to:"/logout",children:" Log out "})}):Object(g.jsxs)("div",{children:[Object(g.jsx)(x.b,{className:"p-2",to:"/signin",children:" Sign in "}),Object(g.jsx)(x.b,{className:"p-2",to:"/signup",children:" Sign up "})]})]})})]})})}}]),n}(a.Component),y=function(e){Object(d.a)(n,e);var t=Object(j.a)(n);function n(){return Object(l.a)(this,n),t.apply(this,arguments)}return Object(u.a)(n,[{key:"render",value:function(){return Object(g.jsx)("div",{className:"footer-row",children:Object(g.jsxs)("footer",{children:[" \xa9 2021 ",Object(g.jsx)("a",{href:"https://www.linkedin.com/in/christian-gerbig/",children:" Christian Gerbig "})," & ",Object(g.jsx)("a",{href:"https://www.linkedin.com/in/lisa-montebaur/",children:"Lisa Montebaur"})]})})}}]),n}(a.Component),S=n.p+"static/media/JungleSwap_Home.c4ed9b4c.png",w=n.p+"static/media/JungleSwap_Icon.a6c7c44a.png",C=function(e){Object(d.a)(n,e);var t=Object(j.a)(n);function n(){return Object(l.a)(this,n),t.apply(this,arguments)}return Object(u.a)(n,[{key:"render",value:function(){var e=this.props,t=e.plants,n=e.query,a=e.onSearchPlant;return Object(g.jsxs)("div",{children:[Object(g.jsx)("header",{className:"text-center pt-5 pb-5 headerImg",children:Object(g.jsx)("div",{className:"row my-5",children:Object(g.jsxs)("div",{className:"col-6 offset-3 my-5 borderAround",children:[Object(g.jsx)("h2",{className:"title mb-2",children:" JungleSwap "}),Object(g.jsx)("h5",{className:"mt-3 mb-5",children:" Share your green heart "}),Object(g.jsx)("div",{className:"mb-5",children:Object(g.jsx)(x.b,{className:"biggerFontSize",onClick:function(){return v.animateScroll.scrollTo(800)},children:" Try it! "})})]})})}),Object(g.jsx)("div",{className:"intro",children:Object(g.jsx)("div",{className:"intro-centered container",children:Object(g.jsxs)("div",{className:"row",children:[Object(g.jsx)("div",{className:"col-sm-6 col-md-5 col-lg-6",children:Object(g.jsx)("img",{className:"image",src:S,alt:""})}),Object(g.jsx)("br",{}),Object(g.jsxs)("div",{className:"intro col-sm-6 col-md-5 col-lg-6 px-5",children:[Object(g.jsx)("h4",{children:" Welcome to JungleSwap! "}),Object(g.jsx)("h5",{children:" Add green to your Home "}),Object(g.jsxs)("p",{children:[' It"s easy-peasy. ',Object(g.jsx)("br",{}),"Share your plant offshoots. ",Object(g.jsx)("br",{}),"Make money! ",Object(g.jsx)("br",{}),"Or swap them for another plant. ",Object(g.jsx)("br",{}),'Don"t have any baby plants? ',Object(g.jsx)("br",{}),"You can simply shop and give a plant a new home."]}),Object(g.jsx)("img",{className:"icon",src:w,alt:"icon"})]})]})})}),Object(g.jsxs)("div",{className:"container mt-5",children:[Object(g.jsxs)("div",{className:"mt-5 mb-3 pt-5",children:[Object(g.jsx)("h2",{children:" Plants "}),Object(g.jsx)("hr",{}),Object(g.jsx)("h4",{children:" Search a plant "})]}),Object(g.jsx)("div",{className:"mb-4",children:Object(g.jsx)("input",{className:"smallWidth form-control",type:"text",placeholder:"Search...",value:n,onChange:a})}),Object(g.jsx)("div",{className:"row row-cols-1 row-cols-md-3 g-4",children:t.map((function(e){var t=e._id,n=e.name,a=e.image,s=e.price;return Object(g.jsx)("div",{className:"col mb-5",children:Object(g.jsxs)("div",{className:"card card-medium-width text-center",children:[Object(g.jsx)("img",{className:"card-img-top mediumPicSize",src:a,alt:n}),Object(g.jsxs)("div",{className:"card-body mb-5",children:[Object(g.jsxs)("h5",{children:[" ",n," "]}),Object(g.jsxs)("p",{children:[" ",s," \u20ac "]}),Object(g.jsx)(x.b,{className:"btn btn-outline-dark",to:"/plants/read/".concat(t),children:" Details "})]})]})},t)}))})]})]})}}]),n}(a.Component),k=function(e){Object(d.a)(n,e);var t=Object(j.a)(n);function n(){return Object(l.a)(this,n),t.apply(this,arguments)}return Object(u.a)(n,[{key:"componentDidMount",value:function(){var e=this.props,t=e.onResetError,n=e.onResetNewRequestsReceived;t(),n(),v.animateScroll.scrollToTop()}},{key:"render",value:function(){var e=this.props,t=e.error,n=e.onSignUp;return Object(g.jsx)("div",{className:"container row mt-5",children:Object(g.jsxs)("div",{className:"mt-5 col-11 col-md-5 offset-1 offset-md-5",children:[Object(g.jsx)("h2",{className:"mb-5",children:" Sign Up "}),Object(g.jsxs)("form",{onSubmit:n,children:[Object(g.jsxs)("div",{className:"form-group",children:[Object(g.jsx)("label",{htmlFor:"InputUsername",children:" Username "}),Object(g.jsx)("input",{type:"text",className:"form-control",id:"InputUsername",name:"username"})]}),Object(g.jsxs)("div",{className:"form-group",children:[Object(g.jsx)("label",{htmlFor:"InputEmail",children:" Email address "}),Object(g.jsx)("input",{type:"email",className:"form-control",id:"InputEmail",name:"email"})]}),Object(g.jsxs)("div",{className:"form-group",children:[Object(g.jsx)("label",{htmlFor:"InputPassword",children:" Password "}),Object(g.jsx)("input",{name:"password",type:"password",className:"form-control",id:"InputPassword"})]}),t?Object(g.jsxs)("p",{style:{color:"red"},children:[" ",t," "]}):null,Object(g.jsx)("button",{type:"submit",className:"btn btn-primary mt-4 btn-outline-dark",children:" Sign up "}),Object(g.jsx)("p",{className:"padding",children:" Already have an account? "}),Object(g.jsx)(x.b,{to:"/signin",children:" Sign in "})]})]})})}}]),n}(a.Component),R=function(e){Object(d.a)(n,e);var t=Object(j.a)(n);function n(){return Object(l.a)(this,n),t.apply(this,arguments)}return Object(u.a)(n,[{key:"componentDidMount",value:function(){var e=this.props,t=e.onResetError,n=e.onResetNewRequestsReceived;t(),n(),v.animateScroll.scrollToTop()}},{key:"render",value:function(){var e=this.props,t=e.error,n=e.onSignIn;return Object(g.jsx)("div",{className:"container row mt-5 custom fullscreen",children:Object(g.jsxs)("div",{className:"mt-5 col-11 col-md-5 offset-1 offset-md-5",children:[Object(g.jsx)("h2",{className:"mb-5",children:" Sign In "}),Object(g.jsxs)("form",{onSubmit:n,children:[Object(g.jsxs)("div",{className:"form-group",children:[Object(g.jsx)("label",{htmlFor:"InputEmail",children:" Email address "}),Object(g.jsx)("input",{type:"email",className:"form-control",id:"InputEmail",name:"email"})]}),Object(g.jsxs)("div",{className:"form-group",children:[Object(g.jsx)("label",{htmlFor:"InputPassword",children:" Password "}),Object(g.jsx)("input",{name:"password",type:"password",className:"form-control",id:"InputPassword"})]}),t?Object(g.jsxs)("p",{style:{color:"red"},children:[" ",t," "]}):null,Object(g.jsx)("button",{type:"submit",className:"btn btn-primary mt-4 btn-outline-dark",children:" Sign in "})]})]})})}}]),n}(a.Component),q=function(e){Object(d.a)(n,e);var t=Object(j.a)(n);function n(){return Object(l.a)(this,n),t.apply(this,arguments)}return Object(u.a)(n,[{key:"componentDidMount",value:function(){var e=this.props,t=e.onLogOut,n=e.onResetNewRequestsReceived;t(),n(),v.animateScroll.scrollToTop()}},{key:"render",value:function(){return Object(g.jsx)("div",{})}}]),n}(a.Component),P=function(e){Object(d.a)(n,e);var t=Object(j.a)(n);function n(){return Object(l.a)(this,n),t.apply(this,arguments)}return Object(u.a)(n,[{key:"componentDidMount",value:function(){this.props.onResetError(),v.animateScroll.scrollToTop()}},{key:"render",value:function(){var e=this.props,t=e.user,n=e.error,a=e.onCreatePlant;return t?Object(g.jsx)("div",{className:"container row mt-5 fullscreen",children:Object(g.jsxs)("div",{className:"mt-5 col-11 col-md-5 offset-1 offset-md-6",children:[Object(g.jsx)("h2",{className:"mb-5",children:" Create a plant "}),Object(g.jsxs)("form",{onSubmit:a,children:[Object(g.jsx)("input",{className:"mb-4",name:"name",type:"text",placeholder:"Enter name"}),Object(g.jsx)("input",{className:"mb-4",name:"description",type:"text",placeholder:"Enter description"}),Object(g.jsx)("input",{className:"mb-4 smallWidth",name:"size",type:"number",min:"1",placeholder:"Size"})," cm ",Object(g.jsx)("br",{}),Object(g.jsxs)("select",{className:"mb-4 p-1",name:"location",type:"text",children:[Object(g.jsx)("option",{children:" Select location "}),Object(g.jsx)("option",{value:"sun",children:" sun "}),Object(g.jsx)("option",{value:"shade",children:" shade "}),Object(g.jsx)("option",{value:"sun and shade",children:" sun and shade "})]}),Object(g.jsx)("br",{}),Object(g.jsx)("input",{className:"mb-4 smallWidth",name:"price",type:"number",min:"1",placeholder:"Price"})," \u20ac ",Object(g.jsx)("br",{}),Object(g.jsx)("input",{className:"mb-4",name:"plantImage",type:"file"}),n?Object(g.jsxs)("p",{style:{color:"red"},children:[" ",n," "]}):null,Object(g.jsxs)("div",{className:"col-12",children:[Object(g.jsx)("button",{className:"btn btn-sm btn-outline-dark",type:"submit",children:" Create "}),Object(g.jsx)(x.b,{to:"/",onClick:function(){return v.animateScroll.scrollTo(1520)},children:Object(g.jsx)("button",{className:"btn btn-sm mx-5",children:" Go back "})})]})]})]})}):Object(g.jsx)(b.a,{to:"/signup"})}}]),n}(a.Component),I=function(e){Object(d.a)(n,e);var t=Object(j.a)(n);function n(){return Object(l.a)(this,n),t.apply(this,arguments)}return Object(u.a)(n,[{key:"componentDidMount",value:function(){v.animateScroll.scrollToTop()}},{key:"render",value:function(){var e=this.props,t=e.plant,n=e.onNameChange,a=e.onDescriptionChange,s=e.onSizeChange,c=e.onPriceChange,r=e.onLocationChange,i=e.onImageChange,o=e.onUpdatePlant,l=t._id,u=t.name,d=t.description,j=t.size,b=t.image,h=t.price;return Object(g.jsx)("div",{className:"container row mt-5 ",children:Object(g.jsxs)("div",{className:"mt-2 col-11 col-md-5 offset-1 offset-md-5",children:[Object(g.jsx)("h2",{className:"mt-5 mb-4",children:" Update your plant "}),Object(g.jsxs)("div",{className:"card cardSmallWidth mb-5",children:[Object(g.jsx)("img",{className:"mb-2 smallPicSize",src:b,alt:u}),Object(g.jsxs)("div",{className:"card-body",children:[Object(g.jsx)("input",{className:"mb-2",onChange:i,type:"file"}),Object(g.jsx)("input",{className:"mb-2",type:"text",onChange:n,value:u}),Object(g.jsx)("input",{className:"mb-2",type:"text",onChange:a,value:d}),Object(g.jsx)("input",{className:"mb-2 smallWidth",type:"number",onChange:s,value:j})," cm ",Object(g.jsx)("br",{}),Object(g.jsxs)("select",{className:"mb-2",onChange:r,name:"location",type:"text",placeholder:"Select",children:[Object(g.jsx)("option",{value:"sun",children:" sun "}),Object(g.jsx)("option",{value:"shade",children:" shade "}),Object(g.jsx)("option",{value:"sun and shade",children:" sun and shade "})]})," ",Object(g.jsx)("br",{}),Object(g.jsx)("input",{className:"mb-4 smallWidth",name:"price",type:"number",min:"1",onChange:c,value:h})," \u20ac",Object(g.jsxs)("div",{className:"row justify-content-around",children:[Object(g.jsx)("button",{className:"btn btn-sm btn-outline-dark",onClick:function(){return o(t)},children:" Save changes "}),Object(g.jsx)(x.b,{to:"/plants/read/".concat(l),children:Object(g.jsx)("button",{className:"btn btn-sm mx-2",children:" Go back "})})]})]})]})]})})}}]),n}(a.Component),D=function(e){Object(d.a)(n,e);var t=Object(j.a)(n);function n(){return Object(l.a)(this,n),t.apply(this,arguments)}return Object(u.a)(n,[{key:"componentDidMount",value:function(){var e=this.props.match.params.plantId;this.props.onReadPlant(e),v.animateScroll.scrollToTop()}},{key:"render",value:function(){var e=this.props,t=e.user,n=e.plant,a=e.onDeletePlant;if(!t)return Object(g.jsx)(b.a,{to:"/signup"});var s=n._id,c=n.name,r=n.description,i=n.size,o=n.image,l=n.location,u=n.price,d=n.creator;return d?Object(g.jsxs)("div",{className:"container mt-5 row row-md-10 offset-md-4",children:[Object(g.jsx)("div",{className:"mt-4 mb-3 pt-4 container",children:Object(g.jsx)("h2",{children:" Plant details "})}),Object(g.jsx)("div",{className:"col",children:Object(g.jsxs)("div",{className:"card cardMediumWidth",children:[o?Object(g.jsx)("img",{className:"card-img-top mediumPicSize",src:o,alt:c}):null,Object(g.jsxs)("div",{className:"ml-2 mt-2",children:[" ",Object(g.jsx)("span",{children:" Name: "})," ",c," "]}),Object(g.jsxs)("div",{className:"ml-2 mt-2",children:[" ",Object(g.jsx)("span",{children:" Description: "})," ",r," "]}),Object(g.jsxs)("div",{className:"ml-2 mt-2",children:[" ",Object(g.jsx)("span",{children:" Size: "})," ",i," cm "]}),Object(g.jsxs)("div",{className:"ml-2 mt-2",children:[" ",Object(g.jsx)("span",{children:" Likes: "})," ",l," "]}),Object(g.jsxs)("div",{className:"ml-2 mt-2",children:[" ",Object(g.jsx)("span",{children:" Price: "})," ",u," \u20ac "]}),Object(g.jsx)("div",{className:"ml-2 mt-2 col justify-content-center",children:Object(g.jsx)("div",{className:"row-2 justify-content-center",children:Object(g.jsxs)("div",{className:"card-body",children:[t._id===d._id?Object(g.jsxs)("div",{children:[Object(g.jsxs)(x.b,{to:"/plants/update",children:[" ",Object(g.jsx)("button",{className:"btn btn-sm ml-2 btn-outline-dark",children:" Update "})," "]}),Object(g.jsx)("button",{className:"btn btn-sm ml-2 btn-outline-dark",onClick:function(){return a(s)},children:" Delete "})]}):Object(g.jsxs)("div",{children:[Object(g.jsx)(x.b,{to:{pathname:"/plants/checkout/".concat(s),plant:n},children:Object(g.jsx)("button",{className:"btn btn-sm ml-2 btn-outline-dark",children:" Buy "})}),Object(g.jsx)(x.b,{to:{pathname:"/requests/create",plant:n},children:Object(g.jsx)("button",{className:"btn btn-sm ml-2 btn-outline-dark",children:" Swap "})})]}),Object(g.jsx)(x.b,{to:"/",onClick:function(){return v.animateScroll.scrollTo(1520)},children:Object(g.jsx)("button",{className:"btn btn-sm ml-2",children:" Go back "})})]})})})]})})]}):Object(g.jsx)("div",{class:"spinner-grow text-success m-5",role:"status",children:Object(g.jsx)("span",{class:"visually-hidden",children:" Loading... "})})}}]),n}(a.Component),T=n(60),E=n(24),U=n(27),z=n.n(U),_=n(42),F=n(25),J=function(e){var t=Object(a.useState)(!1),n=Object(F.a)(t,2),s=n[0],c=n[1],r=Object(a.useState)(null),i=Object(F.a)(r,2),o=i[0],l=i[1],u=Object(a.useState)(""),d=Object(F.a)(u,2),j=d[0],b=d[1],m=Object(a.useState)(!0),p=Object(F.a)(m,2),O=p[0],f=p[1],N=Object(a.useState)(""),y=Object(F.a)(N,2),S=y[0],w=y[1],C=Object(E.useStripe)(),k=Object(E.useElements)(),R=e.plant,q=e.onCheckout;Object(a.useEffect)((function(){window.fetch("".concat(h,"/api/create-payment-intent"),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({price:R.price})}).then((function(e){return e.json()})).then((function(e){return w(e.clientSecret)}))}),[R.price]);var P=function(){var e=Object(_.a)(z.a.mark((function e(t){return z.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:f(t.empty),l(t.error?t.error.message:"");case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),I=function(){var e=Object(_.a)(z.a.mark((function e(t){var n;return z.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),b(!0),e.next=4,C.confirmCardPayment(S,{payment_method:{card:k.getElement(E.CardElement)}});case 4:(n=e.sent).error?(l("Payment failed ".concat(n.error.message)),b(!1)):(l(null),b(!1),c(!0));case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),D=R._id,T=R.name,U=R.price;return Object(g.jsxs)("div",{className:"container col-9",children:[Object(g.jsxs)("form",{className:"checkoutForm mt-5",id:"payment-form",onSubmit:I,children:[Object(g.jsxs)("h2",{className:"text-center mb-2 p-2",children:["  ",T," "]}),Object(g.jsxs)("h3",{className:"text-center mb-4 p-2",children:[" ",U," \u20ac "]}),Object(g.jsx)(E.CardElement,{className:"p-2",id:"card-element",options:{style:{base:{color:"#32325d",fontFamily:"Arial, sans-serif",fontSmoothing:"antialiased",fontSize:"16px","::placeholder":{color:"#32325d"}},invalid:{color:"#fa755a",iconColor:"#fa755a"}}},onChange:P}),Object(g.jsx)("div",{className:"row justify-content-center",children:Object(g.jsx)("button",{onClick:q,className:"btn btn-sm mt-5 mb-4",disabled:j||O||s,id:"submit",children:Object(g.jsx)("span",{id:"button-text",children:j?Object(g.jsx)("div",{className:"spinner",id:"spinner"}):"Pay now"})})}),o&&Object(g.jsxs)("div",{className:"card-error",role:"alert",children:[" ",o," "]}),Object(g.jsx)("p",{className:s?"result-message text-center":"result-message hidden text-center",children:"Payment succeeded."})]}),Object(g.jsx)("div",{className:"row justify-content-center",children:s?Object(g.jsx)(x.b,{to:"/",onClick:function(){return v.animateScroll.scrollTo(1520)},children:Object(g.jsx)("button",{className:"btn btn-sm",children:" Go back "})}):Object(g.jsx)(x.b,{to:"/plants/read/".concat(D),children:Object(g.jsx)("button",{className:"btn btn-sm",children:" Go back "})})})]})},M=Object(T.a)("pk_test_51IQBsPA6EAM4YnfDyrjHWnLHzZ5KkI9tsERzYhBGVoctZBrFUb4Sda035HvcQKpp7thFiqW6QmO8ytPbOAMTg33z00cHvcbojv"),A=function(e){Object(d.a)(n,e);var t=Object(j.a)(n);function n(){return Object(l.a)(this,n),t.apply(this,arguments)}return Object(u.a)(n,[{key:"componentDidMount",value:function(){v.animateScroll.scrollToTop()}},{key:"render",value:function(){var e=this.props.onCheckout,t=this.props.location.plant;return Object(g.jsx)("div",{className:"container row mt-5",children:Object(g.jsx)("div",{className:"mt-5 col-11 col-md-6 offset-1 offset-md-5 App",children:Object(g.jsx)(E.Elements,{stripe:M,children:Object(g.jsx)(J,{onCheckout:e,plant:t})})})})}}]),n}(a.Component),L=function(e){Object(d.a)(n,e);var t=Object(j.a)(n);function n(){return Object(l.a)(this,n),t.apply(this,arguments)}return Object(u.a)(n,[{key:"componentDidMount",value:function(){this.props.onResetError(),v.animateScroll.scrollToTop()}},{key:"render",value:function(){var e=this.props,t=e.error,n=e.onCreateRequest,a=this.props.location.plant;return Object(g.jsx)("div",{className:"container row mt-5",children:Object(g.jsxs)("div",{className:"mt-5 col-11 col-md-5 offset-1 offset-md-5",children:[Object(g.jsx)("h2",{className:"mb-5",children:" Your mesage "}),Object(g.jsxs)("form",{onSubmit:function(e){return n(e,a)},children:[Object(g.jsx)("div",{children:Object(g.jsx)("textarea",{className:"mb-4",name:"message",cols:"35",rows:"4"})}),t?Object(g.jsxs)("p",{style:{color:"red"},children:[" ",t," "]}):null,Object(g.jsx)("button",{className:"btn btn-sm btn-outline-dark",type:"submit",children:" Send "}),Object(g.jsx)(x.b,{to:"/plants/read/".concat(a._id),children:Object(g.jsx)("button",{className:"btn btn-sm mx-2",children:" Go back "})})]})]})})}}]),n}(a.Component),W=function(e){Object(d.a)(n,e);var t=Object(j.a)(n);function n(){return Object(l.a)(this,n),t.apply(this,arguments)}return Object(u.a)(n,[{key:"componentDidMount",value:function(){var e=this.props,t=e.onFetchAllRequests,n=e.onResetNewRequestsReceived;t(),n(),v.animateScroll.scrollToTop()}},{key:"render",value:function(){var e=this.props,t=e.user,n=e.requests,a=e.onDeleteRequest;return t?n?Object(g.jsx)("div",{className:"container row mt-5",children:Object(g.jsxs)("div",{className:"mt-5 col-11 col-md-5 offset-1 offset-md-5",children:[Object(g.jsx)("h2",{className:"mb-5",children:" Your messages "}),Object(g.jsx)(x.b,{to:"/",onClick:v.animateScroll.scrollToTop,children:Object(g.jsx)("button",{className:"btn btn-sm mt-4",children:" Go back "})}),n.map((function(e){var n=e._id,s=e.buyer,c=e.seller,r=e.plant,i=e.message;return c._id===t._id?Object(g.jsxs)("div",{className:"card p-3 mt-4 ",children:[Object(g.jsxs)("h4",{children:[" Request for: ",r.name," "]}),Object(g.jsxs)("h5",{children:[" User: ",s.username," "]}),Object(g.jsxs)("p",{children:[" ",i," "]}),Object(g.jsx)("div",{children:Object(g.jsx)("button",{className:"btn btn-sm ml-2 btn-outline-dark",onClick:function(){return a(n)},children:" Delete "})})]},n):null}))]})}):Object(g.jsx)("div",{}):Object(g.jsx)(b.a,{to:"/signup"})}}]),n}(a.Component),G=function(e){Object(d.a)(n,e);var t=Object(j.a)(n);function n(){return Object(l.a)(this,n),t.apply(this,arguments)}return Object(u.a)(n,[{key:"render",value:function(){return Object(g.jsx)("div",{className:"notFound",children:Object(g.jsxs)("div",{children:[Object(g.jsxs)("h2",{children:["Oh-oh! ",Object(g.jsx)("br",{})," ",Object(g.jsx)("br",{}),"We think you got lost in the jungle!"]}),Object(g.jsx)("h3",{children:" 404 Not Found "}),Object(g.jsx)(x.b,{to:"/",children:Object(g.jsx)("button",{className:"btn btn-sm ml-2",children:" Take me home "})})]})})}}]),n}(a.Component),B=function(e){Object(d.a)(n,e);var t=Object(j.a)(n);function n(){return Object(l.a)(this,n),t.apply(this,arguments)}return Object(u.a)(n,[{key:"componentDidMount",value:function(){!function(e,t){var n=document.createElement("script");n.type="text/javascript",n.async=!0,n.src="https://widget.kommunicate.io/v2/kommunicate.app",document.getElementsByTagName("head")[0].appendChild(n),window.kommunicate=t,t._globals={appId:"10b22c52854a305b79bbdecc356bea5",popupWidget:!0,automaticChatOpenOnNavigation:!0}}(document,window.kommunicate||{})}},{key:"render",value:function(){return Object(g.jsx)("div",{})}}]),n}(a.Component),H=function(e){Object(d.a)(n,e);var t=Object(j.a)(n);function n(){var e;Object(l.a)(this,n);for(var a=arguments.length,s=new Array(a),c=0;c<a;c++)s[c]=arguments[c];return(e=t.call.apply(t,[this].concat(s))).state={loggedInUser:null,error:null,plants:[],query:"",plant:{},requests:[],fetchingUser:!0,currentRequestsNumber:0,initRequestsNumber:!0,newRequestsReceived:!1},e.fetchAllPlants=function(){p.a.get("".concat(h,"/api/plants/fetch")).then((function(t){return e.setState({plants:t.data})})).catch((function(e){return console.log("Fetching plants failed",e)}))},e.fetchQueryPlants=function(){p.a.get("".concat(h,"/api/plants/search?q=").concat(e.state.query)).then((function(t){return e.setState({plants:t.data,ready:!0})})).catch((function(e){return console.log("Query fetching failed",e)}))},e.handleSearchPlant=function(t){var n=t.target.value;e.setState({query:n},(function(){return n?e.fetchQueryPlants():e.fetchAllPlants()}))},e.resetError=function(){return e.setState({error:null})},e.handleSignUp=function(t){t.preventDefault();var n=t.target,a=n.username,s=n.email,c=n.password,r={username:a.value,email:s.value.toLowerCase(),password:c.value};p.a.post("".concat(h,"/api/signup"),r).then((function(t){return e.setState({loggedInUser:t.data},(function(){return e.props.history.push("/")}))})).catch((function(t){return e.setState({error:t.response.data.error})}))},e.handleSignIn=function(t){t.preventDefault();var n=t.target,a=n.email,s=n.password,c={email:a.value,password:s.value};p.a.post("".concat(h,"/api/signin"),c,{withCredentials:!0}).then((function(t){return e.setState({loggedInUser:t.data},(function(){return e.props.history.push("/")}))})).catch((function(t){return e.setState({error:t.response.data.error})}))},e.handleLogOut=function(){p.a.post("".concat(h,"/api/logout"),{},{withCredentials:!0}).then((function(){return e.setState({loggedInUser:null},(function(){return e.props.history.push("/")}))})).catch((function(e){return console.log("Logout failed",e)}))},e.handleCreatePlant=function(t){t.preventDefault();var n=t.target,a=n.name,s=n.description,c=n.size,r=n.plantImage,i=n.location,l=n.price,u=r.files[0],d=new FormData;d.append("image",u),p.a.post("".concat(h,"/api/upload"),d).then((function(t){var n={name:a.value,description:s.value,size:c.value,image:t.data.image,location:i.value,price:l.value};p.a.post("".concat(h,"/api/plants/create"),n,{withCredentials:!0}).then((function(t){return e.setState({plants:[t.data].concat(Object(o.a)(e.state.plants))},(function(){return e.props.history.push("/")}))})).catch((function(t){return e.setState({error:t.response.data.error})}))})).catch((function(t){return e.setState({error:t.response.data.error})}))},e.handleReadPlant=function(t){p.a.get("".concat(h,"/api/plants/read/").concat(t),{withCredentials:!0}).then((function(t){return e.setState({plant:t.data})})).catch((function(){return console.log("Read plant failed")}))},e.handleNameChange=function(t){var n=JSON.parse(JSON.stringify(e.state.plant));n.name=t.target.value,e.setState({plant:n})},e.handleDescriptionChange=function(t){var n=JSON.parse(JSON.stringify(e.state.plant));n.description=t.target.value,e.setState({plant:n})},e.handleSizeChange=function(t){var n=JSON.parse(JSON.stringify(e.state.plant));n.size=t.target.value,e.setState({plant:n})},e.handlePriceChange=function(t){var n=JSON.parse(JSON.stringify(e.state.plant));n.price=t.target.value,e.setState({plant:n})},e.handleLocationChange=function(t){var n=JSON.parse(JSON.stringify(e.state.plant));n.location=t.target.value,e.setState({plant:n})},e.handleImageChange=function(t){var n=t.target.files[0],a=new FormData;a.append("image",n),p.a.post("".concat(h,"/api/upload"),a).then((function(t){var n=JSON.parse(JSON.stringify(e.state.plant));n.image=t.data.image,e.setState({plant:n})})).catch((function(e){return console.log("Image upload failed",e)}))},e.handleUpdatePlant=function(t){var n=t._id,a=t.name,s=t.description,c=t.size,r=t.image,i=t.location,o=t.price,l={name:a,description:s,size:c,image:r,location:i,price:o};p.a.patch("".concat(h,"/api/plants/update/").concat(n),l).then((function(){var t=e.state.plants.map((function(e){return n===e._id&&(e.name=a,e.description=s,e.size=c,e.image=r,e.location=i,e.price=o),e}));e.setState({plants:t},(function(){return e.props.history.push("/")}))})).catch((function(e){return console.log("Update plant failed",e)}))},e.handleDeletePlant=function(t){p.a.delete("".concat(h,"/api/plants/delete/").concat(t)).then((function(){var n=e.state.plants.filter((function(e){return e._id!==t}));e.setState({plants:n},(function(){return e.props.history.push("/")}))})).catch((function(e){return console.log("Delete plant failed",e)}))},e.handleCheckout=function(t){p.a.post("".concat(h,"/api/create-payment-intent"),{},{withCredentials:!0}).then((function(){return e.setState((function(){return e.props.history.push("/")}))})).catch((function(e){return console.log("Checkout failed",e)}))},e.handleFetchAllRequests=function(){p.a.get("".concat(h,"/api/requests/fetch")).then((function(t){return e.setState({requests:t.data})})).catch((function(e){return console.log("Fetching requests failed",e)}))},e.handleCheckRequests=function(){var t=e.state.loggedInUser;t&&p.a.get("".concat(h,"/api/requests/fetch")).then((function(n){e.setState({requests:n.data});var a=e.state.requests.map((function(e){return e.seller._id===t._id})).length;e.state.initRequestsNumber&&e.setState({currentRequestsNumber:a,initRequestsNumber:!1}),e.state.currentRequestsNumber<a&&!e.state.initRequestsNumber&&e.setState({currentRequestsNumber:a,newRequestsReceived:!0})})).catch((function(e){return console.log("Checking requests failed",e)}))},e.resetNewRequestsReceived=function(){return e.setState({newRequestsReceived:!1})},e.handleCreateRequest=function(t,n){t.preventDefault();var a=t.target.message,s={seller:n.creator._id,plant:n,message:a.value};p.a.post("".concat(h,"/api/requests/create"),s,{withCredentials:!0}).then((function(t){return e.setState({requests:[t.data].concat(Object(o.a)(e.state.requests))},(function(){return e.props.history.push("/plants/read/".concat(n._id))}))})).catch((function(t){return e.setState({error:t.response.data.error})}))},e.handleDeleteRequest=function(t){p.a.delete("".concat(h,"/api/requests/delete/").concat(t)).then((function(){var n=e.state.requests.filter((function(e){return e._id!==t}));e.setState({requests:n})})).catch((function(e){return console.log("Delete requestfailed",e)}))},e}return Object(u.a)(n,[{key:"componentDidMount",value:function(){var e=this;this.fetchAllPlants(),this.state.loggedInUser||p.a.get("".concat(h,"/api/user"),{withCredentials:!0}).then((function(t){return e.setState({loggedInUser:t.data,fetchingUser:!1})})).catch((function(t){e.setState({fetchingUser:!1}),console.log("Initializing fetching failed",t)}))}},{key:"render",value:function(){var e=this,t=this.state,n=t.loggedInUser,a=t.error,s=t.plants,c=t.query,r=t.plant,o=t.requests,l=t.fetchingUser,u=t.newRequestsReceived;return l?Object(g.jsx)("div",{class:"spinner-grow text-success m-5",role:"status",children:Object(g.jsx)("span",{class:"visually-hidden",children:" Loading... "})}):Object(g.jsxs)("div",{class:"main",children:[Object(g.jsx)(N,{onLogOut:this.handleLogOut,onCheckRequests:this.handleCheckRequests,newRequestsReceived:u,user:n}),Object(g.jsxs)(b.d,{children:[Object(g.jsx)(b.b,{exact:!0,path:"/",render:function(){return Object(g.jsx)(C,{onSearchPlant:e.handleSearchPlant,plants:s,query:c})}}),Object(g.jsx)(b.b,{path:"/signup",render:function(t){return Object(g.jsx)(k,Object(i.a)({onSignUp:e.handleSignUp,onResetError:e.resetError,onResetNewRequestsReceived:e.resetNewRequestsReceived,error:a},t))}}),Object(g.jsx)(b.b,{path:"/signin",render:function(t){return Object(g.jsx)(R,Object(i.a)({onSignIn:e.handleSignIn,onResetError:e.resetError,onResetNewRequestsReceived:e.resetNewRequestsReceived,error:a},t))}}),Object(g.jsx)(b.b,{path:"/logout",render:function(t){return Object(g.jsx)(q,Object(i.a)({onLogOut:e.handleLogOut,onResetNewRequestsReceived:e.resetNewRequestsReceived},t))}}),Object(g.jsx)(b.b,{path:"/plants/create",render:function(t){return Object(g.jsx)(P,Object(i.a)({onCreatePlant:e.handleCreatePlant,onResetError:e.resetError,user:n,error:a},t))}}),Object(g.jsx)(b.b,{path:"/plants/read/:plantId",render:function(t){return Object(g.jsx)(D,Object(i.a)({onReadPlant:e.handleReadPlant,onDeletePlant:e.handleDeletePlant,plant:r,user:n},t))}}),Object(g.jsx)(b.b,{path:"/plants/update",render:function(t){return Object(g.jsx)(I,Object(i.a)({onNameChange:e.handleNameChange,onDescriptionChange:e.handleDescriptionChange,onSizeChange:e.handleSizeChange,onPriceChange:e.handlePriceChange,onLocationChange:e.handleLocationChange,onImageChange:e.handleImageChange,onUpdatePlant:e.handleUpdatePlant,plant:r},t))}}),Object(g.jsx)(b.b,{path:"/plants/checkout/:plantId",render:function(t){return Object(g.jsx)(A,Object(i.a)({onCheckout:e.handleCheckout},t))}}),Object(g.jsx)(b.b,{path:"/requests/fetch",render:function(t){return Object(g.jsx)(W,Object(i.a)({onFetchAllRequests:e.handleFetchAllRequests,onDeleteRequest:e.handleDeleteRequest,onResetNewRequestsReceived:e.resetNewRequestsReceived,user:n,requests:o},t))}}),Object(g.jsx)(b.b,{path:"/requests/create",render:function(t){return Object(g.jsx)(L,Object(i.a)({onCreateRequest:e.handleCreateRequest,onResetError:e.resetError,user:n,error:a},t))}}),Object(g.jsx)(b.b,{component:G})]}),Object(g.jsx)(B,{}),Object(g.jsx)(y,{})]})}}]),n}(a.Component),Q=Object(b.g)(H);r.a.render(Object(g.jsx)(s.a.StrictMode,{children:Object(g.jsx)(x.a,{children:Object(g.jsx)(Q,{})})}),document.querySelector("#root"))},65:function(e,t,n){},85:function(e,t,n){}},[[102,1,2]]]);
//# sourceMappingURL=main.35be8a11.chunk.js.map
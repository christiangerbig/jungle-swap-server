(this["webpackJsonpjungle-swap-client"]=this["webpackJsonpjungle-swap-client"]||[]).push([[0],{102:function(e,t,n){"use strict";n.r(t);var s=n(1),a=n.n(s),c=n(21),r=n.n(c),l=(n(65),n(18)),i=n(43),o=n(5),u=n(6),d=n(8),j=n(7),b=n(10),h="https://jungleswap.herokuapp.com",p=n(11),m=n.n(p),O=(n(84),n(85),n(105)),f=n(106),x=n(3),v=n(9),g=n(0),N=function(e){Object(d.a)(n,e);var t=Object(j.a)(n);function n(){var e;Object(o.a)(this,n);for(var s=arguments.length,a=new Array(s),c=0;c<s;c++)a[c]=arguments[c];return(e=t.call.apply(t,[this].concat(a))).state={intervalId:null},e.handleIntervalTimer=function(){return e.props.onCheckRequests()},e}return Object(u.a)(n,[{key:"componentDidMount",value:function(){var e=setInterval(this.handleIntervalTimer,1e4);this.setState({intervalId:e})}},{key:"componentWillUnmount",value:function(){clearInterval(this.state.intervalId)}},{key:"render",value:function(){var e=this.props,t=e.user,n=e.newRequestsReceived;return Object(g.jsx)("div",{children:Object(g.jsxs)(O.a,{className:"pl-5",variant:"dark",expand:"lg",fixed:"top",children:[Object(g.jsx)(O.a.Brand,{href:"/",children:" JungleSwap "}),Object(g.jsx)(O.a.Toggle,{"aria-controls":"basic-navbar-nav"}),Object(g.jsx)(O.a.Collapse,{id:"basic-navbar-nav",children:Object(g.jsxs)(f.a,{className:"mr-auto",children:[Object(g.jsx)("div",{children:Object(g.jsx)(x.b,{to:"/",className:"p-2",onClick:function(){return v.animateScroll.scrollTo(1520)},children:" All Plants "})}),t?Object(g.jsxs)("div",{children:[Object(g.jsx)(x.b,{className:"p-2",to:"/plants/create",children:" Create Plant "}),Object(g.jsx)(x.b,{className:n?"p-2 alertColor":"p-2",to:"/requests/fetch",title:n?"new message":null,children:" Messages "})]}):null,t?Object(g.jsx)("div",{children:Object(g.jsx)(x.b,{className:"p-2",to:"/logout",title:t.username,children:" Log out "})}):Object(g.jsxs)("div",{children:[Object(g.jsx)(x.b,{className:"p-2",to:"/signin",children:" Sign in "}),Object(g.jsx)(x.b,{className:"p-2",to:"/signup",children:" Sign up "})]})]})})]})})}}]),n}(s.Component),y=function(e){Object(d.a)(n,e);var t=Object(j.a)(n);function n(){return Object(o.a)(this,n),t.apply(this,arguments)}return Object(u.a)(n,[{key:"render",value:function(){return Object(g.jsx)("div",{className:"footer-row",children:Object(g.jsxs)("footer",{children:[" \xa9 2021 ",Object(g.jsx)("a",{href:"https://www.linkedin.com/in/christian-gerbig/",children:" Christian Gerbig "})," & ",Object(g.jsx)("a",{href:"https://www.linkedin.com/in/lisa-montebaur/",children:"Lisa Montebaur"})]})})}}]),n}(s.Component),S=n.p+"static/media/JungleSwap_Home.c4ed9b4c.png",q=n.p+"static/media/JungleSwap_Icon.a6c7c44a.png",C=function(e){Object(d.a)(n,e);var t=Object(j.a)(n);function n(){return Object(o.a)(this,n),t.apply(this,arguments)}return Object(u.a)(n,[{key:"render",value:function(){var e=this.props,t=e.plants,n=e.query,s=e.onSearchPlant;return t?Object(g.jsxs)("div",{children:[Object(g.jsx)("header",{className:"text-center pt-5 pb-5 headerImg",children:Object(g.jsx)("div",{className:"row my-5",children:Object(g.jsxs)("div",{className:"col-6 offset-3 my-5 borderAround",children:[Object(g.jsx)("h2",{className:"title mb-2",children:" JungleSwap "}),Object(g.jsx)("h5",{className:"mt-3 mb-5",children:" Share your green heart "}),Object(g.jsx)("div",{className:"mb-5",children:Object(g.jsx)(x.b,{className:"biggerFontSize",onClick:function(){return v.animateScroll.scrollTo(800)},children:" Try it! "})})]})})}),Object(g.jsx)("div",{className:"intro",children:Object(g.jsx)("div",{className:"intro-centered container",children:Object(g.jsxs)("div",{className:"row",children:[Object(g.jsx)("div",{className:"col-sm-6 col-md-5 col-lg-6",children:Object(g.jsx)("img",{className:"image",src:S,alt:""})}),Object(g.jsx)("br",{}),Object(g.jsxs)("div",{className:"intro col-sm-6 col-md-5 col-lg-6 px-5",children:[Object(g.jsx)("h4",{children:" Welcome to JungleSwap! "}),Object(g.jsx)("h5",{children:" Add green to your Home "}),Object(g.jsxs)("p",{children:[' It"s easy-peasy. ',Object(g.jsx)("br",{}),"Share your plant offshoots. ",Object(g.jsx)("br",{}),"Make money! ",Object(g.jsx)("br",{}),"Or swap them for another plant. ",Object(g.jsx)("br",{}),'Don"t have any baby plants? ',Object(g.jsx)("br",{}),"You can simply shop and give a plant a new home."]}),Object(g.jsx)("img",{className:"icon",src:q,alt:"icon"})]})]})})}),Object(g.jsxs)("div",{className:"container mt-5",children:[Object(g.jsxs)("div",{className:"mt-5 mb-3 pt-5",children:[Object(g.jsx)("h2",{children:" Plants "}),Object(g.jsx)("hr",{}),Object(g.jsx)("h4",{children:" Search a plant "})]}),Object(g.jsx)("div",{className:"mb-4",children:Object(g.jsx)("input",{className:"smallWidth form-control",type:"text",placeholder:"Search...",value:n,onChange:s})}),Object(g.jsx)("div",{className:"row row-cols-1 row-cols-md-3 g-4",children:t.map((function(e){var t=e._id,n=e.name,s=e.image,a=e.price;return Object(g.jsx)("div",{className:"col mb-5",children:Object(g.jsxs)("div",{className:"card card-medium-width text-center",children:[Object(g.jsx)("img",{className:"card-img-top mediumPicSize",src:s,alt:n}),Object(g.jsxs)("div",{className:"card-body mb-5",children:[Object(g.jsxs)("h5",{children:[" ",n," "]}),Object(g.jsxs)("p",{children:[" ",a," \u20ac "]}),Object(g.jsx)(x.b,{className:"btn btn-outline-dark",to:"/plants/read/".concat(t),children:" Details "})]})]})},t)}))})]})]}):Object(g.jsx)("div",{class:"spinner-grow text-success m-5",role:"status",children:Object(g.jsx)("span",{class:"visually-hidden",children:" Loading... "})})}}]),n}(s.Component),w=function(e){Object(d.a)(n,e);var t=Object(j.a)(n);function n(){return Object(o.a)(this,n),t.apply(this,arguments)}return Object(u.a)(n,[{key:"componentDidMount",value:function(){var e=this.props,t=e.onResetError,n=e.onResetNewRequestsReceived;t(),n(),v.animateScroll.scrollToTop()}},{key:"render",value:function(){var e=this.props,t=e.error,n=e.onSignUp;return Object(g.jsx)("div",{className:"container row mt-5",children:Object(g.jsxs)("div",{className:"mt-5 col-11 col-md-5 offset-1 offset-md-5",children:[Object(g.jsx)("h2",{className:"mb-5",children:" Sign Up "}),Object(g.jsxs)("form",{onSubmit:n,children:[Object(g.jsxs)("div",{className:"form-group",children:[Object(g.jsx)("label",{htmlFor:"InputUsername",children:" Username "}),Object(g.jsx)("input",{type:"text",className:"form-control",id:"InputUsername",name:"username"})]}),Object(g.jsxs)("div",{className:"form-group",children:[Object(g.jsx)("label",{htmlFor:"InputEmail",children:" Email address "}),Object(g.jsx)("input",{type:"email",className:"form-control",id:"InputEmail",name:"email"})]}),Object(g.jsxs)("div",{className:"form-group",children:[Object(g.jsx)("label",{htmlFor:"InputPassword",children:" Password "}),Object(g.jsx)("input",{name:"password",type:"password",className:"form-control",id:"InputPassword"})]}),t?Object(g.jsxs)("p",{style:{color:"red"},children:[" ",t," "]}):null,Object(g.jsx)("button",{type:"submit",className:"btn btn-primary mt-4 btn-outline-dark",children:" Sign up "}),Object(g.jsx)("p",{className:"padding",children:" Already have an account? "}),Object(g.jsx)(x.b,{to:"/signin",children:" Sign in "})]})]})})}}]),n}(s.Component),R=function(e){Object(d.a)(n,e);var t=Object(j.a)(n);function n(){return Object(o.a)(this,n),t.apply(this,arguments)}return Object(u.a)(n,[{key:"componentDidMount",value:function(){var e=this.props,t=e.onResetError,n=e.onResetNewRequestsReceived;t(),n(),v.animateScroll.scrollToTop()}},{key:"render",value:function(){var e=this.props,t=e.error,n=e.onSignIn;return Object(g.jsx)("div",{className:"container row mt-5 custom fullscreen",children:Object(g.jsxs)("div",{className:"mt-5 col-11 col-md-5 offset-1 offset-md-5",children:[Object(g.jsx)("h2",{className:"mb-5",children:" Sign In "}),Object(g.jsxs)("form",{onSubmit:n,children:[Object(g.jsxs)("div",{className:"form-group",children:[Object(g.jsx)("label",{htmlFor:"InputEmail",children:" Email address "}),Object(g.jsx)("input",{type:"email",className:"form-control",id:"InputEmail",name:"email"})]}),Object(g.jsxs)("div",{className:"form-group",children:[Object(g.jsx)("label",{htmlFor:"InputPassword",children:" Password "}),Object(g.jsx)("input",{name:"password",type:"password",className:"form-control",id:"InputPassword"})]}),t?Object(g.jsxs)("p",{style:{color:"red"},children:[" ",t," "]}):null,Object(g.jsx)("button",{type:"submit",className:"btn btn-primary mt-4 btn-outline-dark",children:" Sign in "})]})]})})}}]),n}(s.Component),k=function(e){Object(d.a)(n,e);var t=Object(j.a)(n);function n(){return Object(o.a)(this,n),t.apply(this,arguments)}return Object(u.a)(n,[{key:"componentDidMount",value:function(){var e=this.props,t=e.onLogOut,n=e.onResetNewRequestsReceived;t(),n(),v.animateScroll.scrollToTop()}},{key:"render",value:function(){return Object(g.jsx)("div",{})}}]),n}(s.Component),P=function(e){Object(d.a)(n,e);var t=Object(j.a)(n);function n(){return Object(o.a)(this,n),t.apply(this,arguments)}return Object(u.a)(n,[{key:"componentDidMount",value:function(){this.props.onResetError(),v.animateScroll.scrollToTop()}},{key:"render",value:function(){var e=this.props,t=e.user,n=e.error,s=e.onCreatePlant;return t?Object(g.jsx)("div",{className:"container row mt-5 fullscreen",children:Object(g.jsxs)("div",{className:"mt-5 col-11 col-md-5 offset-1 offset-md-6",children:[Object(g.jsx)("h2",{className:"mb-5",children:" Create a plant "}),Object(g.jsxs)("form",{onSubmit:s,children:[Object(g.jsx)("input",{className:"mb-4",name:"name",type:"text",placeholder:"Enter name"}),Object(g.jsx)("input",{className:"mb-4",name:"description",type:"text",placeholder:"Enter description"}),Object(g.jsx)("input",{className:"mb-4 smallWidth",name:"size",type:"number",min:"1",placeholder:"Size"})," cm ",Object(g.jsx)("br",{}),Object(g.jsxs)("select",{className:"mb-4 p-1",name:"location",type:"text",children:[Object(g.jsx)("option",{children:" Select location "}),Object(g.jsx)("option",{value:"sun",children:" sun "}),Object(g.jsx)("option",{value:"shade",children:" shade "}),Object(g.jsx)("option",{value:"sun and shade",children:" sun and shade "})]}),Object(g.jsx)("br",{}),Object(g.jsx)("input",{className:"mb-4 smallWidth",name:"price",type:"number",min:"1",placeholder:"Price"})," \u20ac ",Object(g.jsx)("br",{}),Object(g.jsx)("input",{className:"mb-4",name:"plantImage",type:"file"}),n?Object(g.jsxs)("p",{style:{color:"red"},children:[" ",n," "]}):null,Object(g.jsxs)("div",{className:"col-12",children:[Object(g.jsx)("button",{className:"btn btn-sm btn-outline-dark",type:"submit",children:" Create "}),Object(g.jsxs)(x.b,{to:"/",onClick:function(){return v.animateScroll.scrollTo(1520)},children:[" ",Object(g.jsx)("button",{className:"btn btn-sm mx-5",children:" Go back "})," "]})]})]})]})}):Object(g.jsx)(b.a,{to:"/signup"})}}]),n}(s.Component),I=function(e){Object(d.a)(n,e);var t=Object(j.a)(n);function n(){return Object(o.a)(this,n),t.apply(this,arguments)}return Object(u.a)(n,[{key:"componentDidMount",value:function(){var e=this.props.match.params.plantId;this.props.onReadPlant(e),v.animateScroll.scrollToTop()}},{key:"render",value:function(){var e=this.props,t=e.user,n=e.plant,s=e.onDeletePlant;if(!t)return Object(g.jsx)(b.a,{to:"/signup"});var a=n._id,c=n.name,r=n.description,l=n.size,i=n.image,o=n.location,u=n.price,d=n.creator;return d?Object(g.jsxs)("div",{className:"container mt-5 row row-md-10 offset-md-4",children:[Object(g.jsx)("div",{className:"mt-4 mb-3 pt-4 container",children:Object(g.jsx)("h2",{children:" Plant details "})}),Object(g.jsx)("div",{className:"col",children:Object(g.jsxs)("div",{className:"card cardMediumWidth",children:[i?Object(g.jsx)("img",{className:"card-img-top mediumPicSize",src:i,alt:c}):null,Object(g.jsxs)("div",{className:"ml-2 mt-2",children:[" ",Object(g.jsx)("span",{children:" Name: "})," ",c," "]}),Object(g.jsxs)("div",{className:"ml-2 mt-2",children:[" ",Object(g.jsx)("span",{children:" Description: "})," ",r," "]}),Object(g.jsxs)("div",{className:"ml-2 mt-2",children:[" ",Object(g.jsx)("span",{children:" Size: "})," ",l," cm "]}),Object(g.jsxs)("div",{className:"ml-2 mt-2",children:[" ",Object(g.jsx)("span",{children:" Likes: "})," ",o," "]}),Object(g.jsxs)("div",{className:"ml-2 mt-2",children:[" ",Object(g.jsx)("span",{children:" Price: "})," ",u," \u20ac "]}),Object(g.jsx)("div",{className:"ml-2 mt-2 col justify-content-center",children:Object(g.jsx)("div",{className:"row-2 justify-content-center",children:Object(g.jsxs)("div",{className:"card-body",children:[t._id===d._id?Object(g.jsxs)("div",{children:[Object(g.jsxs)(x.b,{to:"/plants/update",children:[" ",Object(g.jsx)("button",{className:"btn btn-sm ml-2 btn-outline-dark",children:" Update "})," "]}),Object(g.jsx)("button",{className:"btn btn-sm ml-2 btn-outline-dark",onClick:function(){return s(a)},children:" Delete "})]}):Object(g.jsxs)("div",{children:[Object(g.jsxs)(x.b,{to:{pathname:"/plants/checkout/".concat(a),plant:n},children:[" ",Object(g.jsx)("button",{className:"btn btn-sm ml-2 btn-outline-dark",children:" Buy "})," "]}),Object(g.jsxs)(x.b,{to:{pathname:"/requests/create",plant:n},children:[" ",Object(g.jsx)("button",{className:"btn btn-sm ml-2 btn-outline-dark",children:" Swap "})," "]})]}),Object(g.jsxs)(x.b,{to:"/",onClick:function(){return v.animateScroll.scrollTo(1520)},children:[" ",Object(g.jsx)("button",{className:"btn btn-sm ml-2",children:" Go back "})," "]})]})})})]})})]}):Object(g.jsx)("div",{class:"spinner-grow text-success m-5",role:"status",children:Object(g.jsx)("span",{class:"visually-hidden",children:" Loading... "})})}}]),n}(s.Component),D=function(e){Object(d.a)(n,e);var t=Object(j.a)(n);function n(){return Object(o.a)(this,n),t.apply(this,arguments)}return Object(u.a)(n,[{key:"componentDidMount",value:function(){v.animateScroll.scrollToTop()}},{key:"render",value:function(){var e=this.props,t=e.plant,n=e.onNameChange,s=e.onDescriptionChange,a=e.onSizeChange,c=e.onPriceChange,r=e.onLocationChange,l=e.onImageChange,i=e.onUpdatePlant,o=t._id,u=t.name,d=t.description,j=t.size,b=t.image,h=t.price;return Object(g.jsx)("div",{className:"container row mt-5 ",children:Object(g.jsxs)("div",{className:"mt-2 col-11 col-md-5 offset-1 offset-md-5",children:[Object(g.jsx)("h2",{className:"mt-5 mb-4",children:" Update your plant "}),Object(g.jsxs)("div",{className:"card cardSmallWidth mb-5",children:[Object(g.jsx)("img",{className:"mb-2 smallPicSize",src:b,alt:u}),Object(g.jsxs)("div",{className:"card-body",children:[Object(g.jsx)("input",{className:"mb-2",onChange:l,type:"file"}),Object(g.jsx)("input",{className:"mb-2",type:"text",onChange:n,value:u}),Object(g.jsx)("input",{className:"mb-2",type:"text",onChange:s,value:d}),Object(g.jsx)("input",{className:"mb-2 smallWidth",type:"number",onChange:a,value:j})," cm ",Object(g.jsx)("br",{}),Object(g.jsxs)("select",{className:"mb-2",onChange:r,name:"location",type:"text",placeholder:"Select",children:[Object(g.jsx)("option",{value:"sun",children:" sun "}),Object(g.jsx)("option",{value:"shade",children:" shade "}),Object(g.jsx)("option",{value:"sun and shade",children:" sun and shade "})]})," ",Object(g.jsx)("br",{}),Object(g.jsx)("input",{className:"mb-4 smallWidth",name:"price",type:"number",min:"1",onChange:c,value:h})," \u20ac",Object(g.jsxs)("div",{className:"row justify-content-around",children:[Object(g.jsx)("button",{className:"btn btn-sm btn-outline-dark",onClick:function(){return i(t)},children:" Save changes "}),Object(g.jsxs)(x.b,{to:"/plants/read/".concat(o),children:[" ",Object(g.jsx)("button",{className:"btn btn-sm mx-2",children:" Go back "})," "]})]})]})]})]})})}}]),n}(s.Component),T=n(60),U=n(24),E=n(27),_=n.n(E),z=n(42),J=n(25),L=function(e){var t=Object(s.useState)(!1),n=Object(J.a)(t,2),a=n[0],c=n[1],r=Object(s.useState)(null),l=Object(J.a)(r,2),i=l[0],o=l[1],u=Object(s.useState)(""),d=Object(J.a)(u,2),j=d[0],b=d[1],p=Object(s.useState)(!0),m=Object(J.a)(p,2),O=m[0],f=m[1],N=Object(s.useState)(""),y=Object(J.a)(N,2),S=y[0],q=y[1],C=Object(U.useStripe)(),w=Object(U.useElements)(),R=e.plant,k=e.onCheckout;Object(s.useEffect)((function(){window.fetch("".concat(h,"/api/create-payment-intent"),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({price:R.price})}).then((function(e){return e.json()})).then((function(e){return q(e.clientSecret)}))}),[R.price]);var P=function(){var e=Object(z.a)(_.a.mark((function e(t){return _.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:f(t.empty),o(t.error?t.error.message:"");case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),I=function(){var e=Object(z.a)(_.a.mark((function e(t){var n;return _.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),b(!0),e.next=4,C.confirmCardPayment(S,{payment_method:{card:w.getElement(U.CardElement)}});case 4:(n=e.sent).error?(o("Payment failed ".concat(n.error.message)),b(!1)):(o(null),b(!1),c(!0));case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),D=R._id,T=R.name,E=R.price;return Object(g.jsxs)("div",{className:"container col-9",children:[Object(g.jsxs)("form",{className:"checkoutForm mt-5",id:"payment-form",onSubmit:I,children:[Object(g.jsxs)("h2",{className:"text-center mb-2 p-2",children:["  ",T," "]}),Object(g.jsxs)("h3",{className:"text-center mb-4 p-2",children:[" ",E," \u20ac "]}),Object(g.jsx)(U.CardElement,{className:"p-2",id:"card-element",options:{style:{base:{color:"#32325d",fontFamily:"Arial, sans-serif",fontSmoothing:"antialiased",fontSize:"16px","::placeholder":{color:"#32325d"}},invalid:{color:"#fa755a",iconColor:"#fa755a"}}},onChange:P}),Object(g.jsx)("div",{className:"row justify-content-center",children:Object(g.jsx)("button",{onClick:k,className:"btn btn-sm mt-5 mb-4",disabled:j||O||a,id:"submit",children:Object(g.jsx)("span",{id:"button-text",children:j?Object(g.jsx)("div",{className:"spinner",id:"spinner"}):"Pay now"})})}),i&&Object(g.jsxs)("div",{className:"card-error",role:"alert",children:[" ",i," "]}),Object(g.jsx)("p",{className:a?"result-message text-center":"result-message hidden text-center",children:"Payment succeeded."})]}),Object(g.jsx)("div",{className:"row justify-content-center",children:a?Object(g.jsxs)(x.b,{to:"/",onClick:function(){return v.animateScroll.scrollTo(1520)},children:[" ",Object(g.jsx)("button",{className:"btn btn-sm",children:" Go back "})," "]}):Object(g.jsxs)(x.b,{to:"/plants/read/".concat(D),children:[" ",Object(g.jsx)("button",{className:"btn btn-sm",children:" Go back "})," "]})})]})},M=Object(T.a)("pk_test_51IQBsPA6EAM4YnfDyrjHWnLHzZ5KkI9tsERzYhBGVoctZBrFUb4Sda035HvcQKpp7thFiqW6QmO8ytPbOAMTg33z00cHvcbojv"),F=function(e){Object(d.a)(n,e);var t=Object(j.a)(n);function n(){return Object(o.a)(this,n),t.apply(this,arguments)}return Object(u.a)(n,[{key:"componentDidMount",value:function(){v.animateScroll.scrollToTop()}},{key:"render",value:function(){var e=this.props.onCheckout,t=this.props.location.plant;return Object(g.jsx)("div",{className:"container row mt-5",children:Object(g.jsx)("div",{className:"mt-5 col-11 col-md-6 offset-1 offset-md-5 App",children:Object(g.jsx)(U.Elements,{stripe:M,children:Object(g.jsx)(L,{onCheckout:e,plant:t})})})})}}]),n}(s.Component),A=function(e){Object(d.a)(n,e);var t=Object(j.a)(n);function n(){return Object(o.a)(this,n),t.apply(this,arguments)}return Object(u.a)(n,[{key:"componentDidMount",value:function(){var e=this.props,t=e.onFetchAllRequests,n=e.onResetNewRequestsReceived;t(),n(),v.animateScroll.scrollToTop()}},{key:"render",value:function(){var e=this.props,t=e.user,n=e.requests,s=e.currentRequestsNumber;return t?n?Object(g.jsx)("div",{className:"container row mt-5",children:Object(g.jsxs)("div",{className:"mt-5 col-11 col-md-5 offset-1 offset-md-5",children:[Object(g.jsx)("h2",{className:"mb-5",children:" Your messages "}),Object(g.jsxs)(x.b,{to:"/",onClick:v.animateScroll.scrollToTop,children:[" ",Object(g.jsx)("button",{className:"btn btn-sm mt-4",children:" Go back "})," "]}),n.map((function(e){var n=e._id,s=e.buyer,a=e.seller,c=e.plant;return a._id===t._id?Object(g.jsxs)("div",{className:"card p-3 mt-4 ",children:[Object(g.jsxs)("h4",{children:[" Request for: ",c.name," "]}),Object(g.jsxs)("h5",{children:[" by: ",s.username," "]}),Object(g.jsx)("div",{children:Object(g.jsx)(x.b,{className:"btn btn-outline-dark",to:"/requests/read/".concat(n),children:" Details "})})]},n):null})),0===s?null:Object(g.jsxs)(x.b,{to:"/",onClick:v.animateScroll.scrollToTop,children:[" ",Object(g.jsx)("button",{className:"btn btn-sm mt-4",children:" Go back "})," "]})]})}):Object(g.jsx)("div",{class:"spinner-grow text-success m-5",role:"status",children:Object(g.jsx)("span",{class:"visually-hidden",children:" Loading... "})}):Object(g.jsx)(b.a,{to:"/signup"})}}]),n}(s.Component),W=function(e){Object(d.a)(n,e);var t=Object(j.a)(n);function n(){return Object(o.a)(this,n),t.apply(this,arguments)}return Object(u.a)(n,[{key:"componentDidMount",value:function(){this.props.onResetError(),v.animateScroll.scrollToTop()}},{key:"render",value:function(){var e=this.props,t=e.error,n=e.onCreateRequest,s=this.props.location.plant;return Object(g.jsx)("div",{className:"container row mt-5",children:Object(g.jsxs)("div",{className:"mt-5 col-11 col-md-5 offset-1 offset-md-5",children:[Object(g.jsx)("h2",{className:"mb-5",children:" Your mesage "}),Object(g.jsxs)("form",{onSubmit:function(e){return n(e,s)},children:[Object(g.jsx)("div",{children:Object(g.jsx)("textarea",{className:"mb-4",name:"message",cols:"35",rows:"7"})}),t?Object(g.jsxs)("p",{style:{color:"red"},children:[" ",t," "]}):null,Object(g.jsx)("button",{className:"btn btn-sm btn-outline-dark",type:"submit",children:" Send "}),Object(g.jsxs)(x.b,{to:"/plants/read/".concat(s._id),children:[" ",Object(g.jsx)("button",{className:"btn btn-sm mx-2",children:" Go back "})," "]})]})]})})}}]),n}(s.Component),G=function(e){Object(d.a)(n,e);var t=Object(j.a)(n);function n(){return Object(o.a)(this,n),t.apply(this,arguments)}return Object(u.a)(n,[{key:"componentDidMount",value:function(){var e=this.props.match.params.requestId;this.props.onReadRequest(e),v.animateScroll.scrollToTop()}},{key:"render",value:function(){var e=this.props,t=e.request,n=e.onDeleteRequest,s=t._id,a=t.buyer,c=t.plant,r=t.message,l=t.reply;return a&&c?Object(g.jsx)("div",{className:"container row mt-5 ",children:Object(g.jsxs)("div",{className:"mt-5 col-11 col-md-5 offset-1 offset-md-5",children:[Object(g.jsx)("h2",{className:"mb-5",children:" Your request "}),Object(g.jsxs)("h4",{children:[" for: ",c.name," "]}),Object(g.jsxs)("h5",{children:[" by: ",a.username," "]}),Object(g.jsxs)("p",{children:[" ",r," "]}),l?Object(g.jsxs)("div",{children:[Object(g.jsx)("h5",{children:" Your reply: "}),Object(g.jsxs)("p",{children:[" ",l," "]})]}):null,Object(g.jsxs)("div",{children:[l?null:Object(g.jsxs)(x.b,{to:"/requests/update/".concat(s),children:[" ",Object(g.jsx)("button",{className:"btn btn-sm ml-2 btn-outline-dark",children:" Reply "})," "]}),Object(g.jsx)("button",{className:"btn btn-sm ml-2 btn-outline-dark",onClick:function(){return n(s)},children:" Delete "})]}),Object(g.jsxs)(x.b,{to:"/requests/fetch",onClick:v.animateScroll.scrollToTop,children:[" ",Object(g.jsx)("button",{className:"btn btn-sm mt-4",children:" Go back "})," "]})]})}):Object(g.jsx)("div",{class:"spinner-grow text-success m-5",role:"status",children:Object(g.jsx)("span",{class:"visually-hidden",children:" Loading... "})})}}]),n}(s.Component),Y=function(e){Object(d.a)(n,e);var t=Object(j.a)(n);function n(){return Object(o.a)(this,n),t.apply(this,arguments)}return Object(u.a)(n,[{key:"componentDidMount",value:function(){v.animateScroll.scrollToTop()}},{key:"render",value:function(){var e=this.props,t=e.request,n=e.onCreateReply,s=e.onUpdateRequest,a=t._id,c=t.message;return Object(g.jsx)("div",{className:"container row mt-5 ",children:Object(g.jsxs)("div",{className:"mt-2 col-11 col-md-5 offset-1 offset-md-5",children:[Object(g.jsx)("h2",{className:"mt-5 mb-4",children:" Reply your request "}),Object(g.jsx)("div",{className:"card cardSmallWidth mb-5",children:Object(g.jsxs)("div",{className:"card-body",children:[Object(g.jsxs)("p",{children:[" ",c," "]}),Object(g.jsx)("textarea",{className:"mb-4",name:"reply",cols:"31",rows:"6",placeholder:"Your reply",onChange:n}),Object(g.jsxs)("div",{className:"row justify-content-around",children:[Object(g.jsx)("button",{className:"btn btn-sm btn-outline-dark",onClick:function(){return s(t)},children:" Submit "}),Object(g.jsxs)(x.b,{to:"/requests/read/".concat(a),children:[" ",Object(g.jsx)("button",{className:"btn btn-sm mx-2",children:" Go back "})," "]})]})]})})]})})}}]),n}(s.Component),B=function(e){Object(d.a)(n,e);var t=Object(j.a)(n);function n(){return Object(o.a)(this,n),t.apply(this,arguments)}return Object(u.a)(n,[{key:"render",value:function(){return Object(g.jsx)("div",{className:"notFound",children:Object(g.jsxs)("div",{children:[Object(g.jsxs)("h2",{children:["Oh-oh! ",Object(g.jsx)("br",{})," ",Object(g.jsx)("br",{}),"We think you got lost in the jungle!"]}),Object(g.jsx)("h3",{children:" 404 Not Found "}),Object(g.jsxs)(x.b,{to:"/",children:[" ",Object(g.jsx)("button",{className:"btn btn-sm ml-2",children:" Take me home "})," "]})]})})}}]),n}(s.Component),H=function(e){Object(d.a)(n,e);var t=Object(j.a)(n);function n(){return Object(o.a)(this,n),t.apply(this,arguments)}return Object(u.a)(n,[{key:"componentDidMount",value:function(){!function(e,t){var n=document.createElement("script");n.type="text/javascript",n.async=!0,n.src="https://widget.kommunicate.io/v2/kommunicate.app",document.getElementsByTagName("head")[0].appendChild(n),window.kommunicate=t,t._globals={appId:"10b22c52854a305b79bbdecc356bea5",popupWidget:!0,automaticChatOpenOnNavigation:!0}}(document,window.kommunicate||{})}},{key:"render",value:function(){return Object(g.jsx)("div",{})}}]),n}(s.Component),Q=function(e){Object(d.a)(n,e);var t=Object(j.a)(n);function n(){var e;Object(o.a)(this,n);for(var s=arguments.length,a=new Array(s),c=0;c<s;c++)a[c]=arguments[c];return(e=t.call.apply(t,[this].concat(a))).state={fetchingUser:!0,loggedInUser:null,plants:[],query:"",plant:{},requests:[],request:{},currentRequestsNumber:0,initRequestsNumber:!0,newRequestsReceived:!1,error:null},e.fetchAllPlants=function(){m.a.get("".concat(h,"/api/plants/fetch")).then((function(t){return e.setState({plants:t.data})})).catch((function(e){return console.log("Fetching plants failed",e)}))},e.fetchQueryPlants=function(){m.a.get("".concat(h,"/api/plants/search?q=").concat(e.state.query)).then((function(t){return e.setState({plants:t.data,ready:!0})})).catch((function(e){return console.log("Query fetching failed",e)}))},e.handleSearchPlant=function(t){var n=t.target.value;e.setState({query:n},(function(){return n?e.fetchQueryPlants():e.fetchAllPlants()}))},e.resetError=function(){return e.setState({error:null})},e.handleSignUp=function(t){t.preventDefault();var n=t.target,s=n.username,a=n.email,c=n.password,r={username:s.value,email:a.value.toLowerCase(),password:c.value};m.a.post("".concat(h,"/api/signup"),r).then((function(t){return e.setState({loggedInUser:t.data},(function(){return e.props.history.push("/")}))})).catch((function(t){return e.setState({error:t.response.data.error})}))},e.handleSignIn=function(t){t.preventDefault();var n=t.target,s=n.email,a=n.password,c={email:s.value,password:a.value};m.a.post("".concat(h,"/api/signin"),c,{withCredentials:!0}).then((function(t){return e.setState({loggedInUser:t.data},(function(){return e.props.history.push("/")}))})).catch((function(t){return e.setState({error:t.response.data.error})}))},e.handleLogOut=function(){m.a.post("".concat(h,"/api/logout"),{},{withCredentials:!0}).then((function(){return e.setState({loggedInUser:null},(function(){return e.props.history.push("/")}))})).catch((function(e){return console.log("Logout failed",e)}))},e.handleCreatePlant=function(t){t.preventDefault();var n=t.target,s=n.name,a=n.description,c=n.size,r=n.plantImage,l=n.location,o=n.price,u=r.files[0],d=new FormData;d.append("image",u),m.a.post("".concat(h,"/api/upload"),d).then((function(t){var n={name:s.value,description:a.value,size:c.value,image:t.data.image,location:l.value,price:o.value};m.a.post("".concat(h,"/api/plants/create"),n,{withCredentials:!0}).then((function(t){return e.setState({plants:[t.data].concat(Object(i.a)(e.state.plants))},(function(){return e.props.history.push("/")}))})).catch((function(t){return e.setState({error:t.response.data.error})}))})).catch((function(t){return e.setState({error:t.response.data.error})}))},e.handleReadPlant=function(t){m.a.get("".concat(h,"/api/plants/read/").concat(t),{withCredentials:!0}).then((function(t){return e.setState({plant:t.data})})).catch((function(){return console.log("Read plant failed")}))},e.handleNameChange=function(t){var n=JSON.parse(JSON.stringify(e.state.plant));n.name=t.target.value,e.setState({plant:n})},e.handleDescriptionChange=function(t){var n=JSON.parse(JSON.stringify(e.state.plant));n.description=t.target.value,e.setState({plant:n})},e.handleSizeChange=function(t){var n=JSON.parse(JSON.stringify(e.state.plant));n.size=t.target.value,e.setState({plant:n})},e.handlePriceChange=function(t){var n=JSON.parse(JSON.stringify(e.state.plant));n.price=t.target.value,e.setState({plant:n})},e.handleLocationChange=function(t){var n=JSON.parse(JSON.stringify(e.state.plant));n.location=t.target.value,e.setState({plant:n})},e.handleImageChange=function(t){var n=t.target.files[0],s=new FormData;s.append("image",n),m.a.post("".concat(h,"/api/upload"),s).then((function(t){var n=JSON.parse(JSON.stringify(e.state.plant));n.image=t.data.image,e.setState({plant:n})})).catch((function(e){return console.log("Image upload failed",e)}))},e.handleUpdatePlant=function(t){var n=t._id,s=t.name,a=t.description,c=t.size,r=t.image,l=t.location,i=t.price,o={name:s,description:a,size:c,image:r,location:l,price:i};m.a.patch("".concat(h,"/api/plants/update/").concat(n),o).then((function(){var t=e.state.plants.map((function(e){return e._id===n&&(e.name=s,e.description=a,e.size=c,e.image=r,e.location=l,e.price=i),e}));e.setState({plants:t},(function(){return e.props.history.push("/")}))})).catch((function(e){return console.log("Update plant failed",e)}))},e.handleDeletePlant=function(t){m.a.delete("".concat(h,"/api/plants/delete/").concat(t)).then((function(){var n=e.state.plants.filter((function(e){return e._id!==t?e:null}));e.setState({plants:n},(function(){return e.props.history.push("/")}))})).catch((function(e){return console.log("Delete plant failed",e)}))},e.handleCheckout=function(t){m.a.post("".concat(h,"/api/create-payment-intent"),{},{withCredentials:!0}).then((function(){return e.setState((function(){return e.props.history.push("/")}))})).catch((function(e){return console.log("Checkout failed",e)}))},e.handleFetchAllRequests=function(){m.a.get("".concat(h,"/api/requests/fetch")).then((function(t){return e.setState({requests:t.data})})).catch((function(e){return console.log("Fetching requests failed",e)}))},e.handleCheckRequests=function(){var t=e.state.loggedInUser;t&&m.a.get("".concat(h,"/api/requests/fetch")).then((function(n){e.setState({requests:n.data});var s=e.state.requests.map((function(e){return e.seller._id===t._id?e:null})),a=s.length;0!==a&&(e.state.initRequestsNumber&&e.setState({currentRequestsNumber:a,initRequestsNumber:!1}),e.state.currentRequestsNumber<a&&!e.state.initRequestsNumber&&s[0].seller._id===t._id&&e.setState({currentRequestsNumber:a,newRequestsReceived:!0}))})).catch((function(e){return console.log("Checking requests failed",e)}))},e.resetNewRequestsReceived=function(){return e.setState({newRequestsReceived:!1})},e.handleCreateRequest=function(t,n){t.preventDefault();var s=t.target.message,a={seller:n.creator._id,plant:n._id,message:s.value};m.a.post("".concat(h,"/api/requests/create"),a,{withCredentials:!0}).then((function(t){return e.setState({requests:[t.data].concat(Object(i.a)(e.state.requests))},(function(){return e.props.history.push("/plants/read/".concat(n._id))}))})).catch((function(t){return e.setState({error:t.response.data.error})}))},e.handleReadRequest=function(t){m.a.get("".concat(h,"/api/requests/read/").concat(t),{withCredentials:!0}).then((function(t){return e.setState({request:t.data})})).catch((function(){return console.log("Read request failed")}))},e.handleCreateReply=function(t){var n=JSON.parse(JSON.stringify(e.state.request));n.reply=t.target.value,e.setState({request:n})},e.handleUpdateRequest=function(t){var n=t._id,s=t.buyer,a=t.seller,c=t.plant,r=t.message,l=t.reply,i={buyer:s,seller:a,plant:c,message:r,reply:l};m.a.patch("".concat(h,"/api/requests/update/").concat(n),i).then((function(){var t=e.state.requests.map((function(e){return e._id===n&&(e.buyer=s,e.seller=a,e.plant=c,e.message=r,e.reply=l),e}));e.setState({requests:t},(function(){return e.props.history.push("/requests/fetch")}))})).catch((function(e){return console.log("Update request failed",e)}))},e.handleDeleteRequest=function(t){m.a.delete("".concat(h,"/api/requests/delete/").concat(t)).then((function(){var n=e.state.requests.filter((function(e){return e._id!==t?e:null})),s=n.length;e.setState({requests:n,currentRequestsNumber:s},(function(){return e.props.history.push("/requests/fetch")}))})).catch((function(e){return console.log("Delete requestfailed",e)}))},e}return Object(u.a)(n,[{key:"componentDidMount",value:function(){var e=this;this.fetchAllPlants(),this.state.loggedInUser||m.a.get("".concat(h,"/api/user"),{withCredentials:!0}).then((function(t){return e.setState({loggedInUser:t.data,fetchingUser:!1})})).catch((function(t){e.setState({fetchingUser:!1}),console.log("Initializing fetching failed",t)}))}},{key:"render",value:function(){var e=this,t=this.state,n=t.fetchingUser,s=t.loggedInUser,a=t.plants,c=t.query,r=t.plant,i=t.requests,o=t.request,u=t.currentRequestsNumber,d=t.newRequestsReceived,j=t.error;return n?Object(g.jsx)("div",{class:"spinner-grow text-success m-5",role:"status",children:Object(g.jsx)("span",{class:"visually-hidden",children:" Loading... "})}):Object(g.jsxs)("div",{class:"main",children:[Object(g.jsx)(N,{onLogOut:this.handleLogOut,onCheckRequests:this.handleCheckRequests,newRequestsReceived:d,user:s}),Object(g.jsxs)(b.d,{children:[Object(g.jsx)(b.b,{exact:!0,path:"/",render:function(){return Object(g.jsx)(C,{onSearchPlant:e.handleSearchPlant,plants:a,query:c})}}),Object(g.jsx)(b.b,{path:"/signup",render:function(t){return Object(g.jsx)(w,Object(l.a)({onSignUp:e.handleSignUp,onResetError:e.resetError,onResetNewRequestsReceived:e.resetNewRequestsReceived,error:j},t))}}),Object(g.jsx)(b.b,{path:"/signin",render:function(t){return Object(g.jsx)(R,Object(l.a)({onSignIn:e.handleSignIn,onResetError:e.resetError,onResetNewRequestsReceived:e.resetNewRequestsReceived,error:j},t))}}),Object(g.jsx)(b.b,{path:"/logout",render:function(t){return Object(g.jsx)(k,Object(l.a)({onLogOut:e.handleLogOut,onResetNewRequestsReceived:e.resetNewRequestsReceived},t))}}),Object(g.jsx)(b.b,{path:"/plants/create",render:function(t){return Object(g.jsx)(P,Object(l.a)({onCreatePlant:e.handleCreatePlant,onResetError:e.resetError,user:s,error:j},t))}}),Object(g.jsx)(b.b,{path:"/plants/read/:plantId",render:function(t){return Object(g.jsx)(I,Object(l.a)({onReadPlant:e.handleReadPlant,onDeletePlant:e.handleDeletePlant,plant:r,user:s},t))}}),Object(g.jsx)(b.b,{path:"/plants/update",render:function(t){return Object(g.jsx)(D,Object(l.a)({onNameChange:e.handleNameChange,onDescriptionChange:e.handleDescriptionChange,onSizeChange:e.handleSizeChange,onPriceChange:e.handlePriceChange,onLocationChange:e.handleLocationChange,onImageChange:e.handleImageChange,onUpdatePlant:e.handleUpdatePlant,plant:r},t))}}),Object(g.jsx)(b.b,{path:"/plants/checkout/:plantId",render:function(t){return Object(g.jsx)(F,Object(l.a)({onCheckout:e.handleCheckout},t))}}),Object(g.jsx)(b.b,{path:"/requests/fetch",render:function(t){return Object(g.jsx)(A,Object(l.a)({onFetchAllRequests:e.handleFetchAllRequests,onResetNewRequestsReceived:e.resetNewRequestsReceived,user:s,requests:i,currentRequestsNumber:u},t))}}),Object(g.jsx)(b.b,{path:"/requests/create",render:function(t){return Object(g.jsx)(W,Object(l.a)({onCreateRequest:e.handleCreateRequest,onResetError:e.resetError,user:s,error:j},t))}}),Object(g.jsx)(b.b,{path:"/requests/read/:requestId",render:function(t){return Object(g.jsx)(G,Object(l.a)({onReadRequest:e.handleReadRequest,onDeleteRequest:e.handleDeleteRequest,request:o,user:s},t))}}),Object(g.jsx)(b.b,{path:"/requests/update",render:function(t){return Object(g.jsx)(Y,Object(l.a)({onCreateReply:e.handleCreateReply,onUpdateRequest:e.handleUpdateRequest,request:o},t))}}),Object(g.jsx)(b.b,{component:B})]}),Object(g.jsx)(H,{}),Object(g.jsx)(y,{})]})}}]),n}(s.Component),K=Object(b.g)(Q);r.a.render(Object(g.jsx)(a.a.StrictMode,{children:Object(g.jsx)(x.a,{children:Object(g.jsx)(K,{})})}),document.querySelector("#root"))},65:function(e,t,n){},85:function(e,t,n){}},[[102,1,2]]]);
//# sourceMappingURL=main.f044aafc.chunk.js.map
(this["webpackJsonpjungle-swap-client"]=this["webpackJsonpjungle-swap-client"]||[]).push([[0],{102:function(e,t,n){"use strict";n.r(t);var a=n(1),s=n.n(a),c=n(21),r=n.n(c),i=(n(65),n(18)),o=n(43),l=n(6),u=n(7),d=n(9),j=n(8),h=n(11),b=n(4),m="https://jungleswap.herokuapp.com",p=n(10),O=n.n(p),f=(n(93),n(94),n(105)),x=n(106),g=n(3),v=n(0),N=function(e){Object(d.a)(n,e);var t=Object(j.a)(n);function n(e){var a;return Object(l.a)(this,n),(a=t.call(this,e)).handleIntervalTimer=function(){return a.props.onCheckRequests()},a.state={intervalId:null},a}return Object(u.a)(n,[{key:"componentDidMount",value:function(){var e=setInterval(this.handleIntervalTimer,1e4);this.setState({intervalId:e})}},{key:"componentWillUnmount",value:function(){clearInterval(this.state.intervalId)}},{key:"render",value:function(){var e=this.props,t=e.user,n=e.newRequestsReceived,a=e.headerHeight,s=e.introHeight;return Object(v.jsx)("div",{children:Object(v.jsxs)(f.a,{className:"pl-5",variant:"dark",expand:"lg",fixed:"top",children:[Object(v.jsx)(f.a.Brand,{href:"/",children:" JungleSwap "}),Object(v.jsx)(f.a.Toggle,{"aria-controls":"basic-navbar-nav"}),Object(v.jsx)(f.a.Collapse,{id:"basic-navbar-nav",children:Object(v.jsxs)(x.a,{className:"mr-auto",children:[Object(v.jsx)("div",{children:Object(v.jsx)(g.b,{to:"/",className:"p-2",onClick:function(){return b.animateScroll.scrollTo(a+s)},children:" All Plants "})}),t?Object(v.jsxs)("div",{children:[Object(v.jsx)(g.b,{className:"p-2",to:"/plants/create",children:" Create Plant "}),Object(v.jsx)(g.b,{className:n?"p-2 alertColor":"p-2",to:"/requests/fetch",title:n?"new message":null,children:" Messages "})]}):null,t?Object(v.jsx)("div",{children:Object(v.jsx)(g.b,{className:"p-2",to:"/logout",title:t.username,children:" Log out "})}):Object(v.jsxs)("div",{children:[Object(v.jsx)(g.b,{className:"p-2",to:"/signin",children:" Sign in "}),Object(v.jsx)(g.b,{className:"p-2",to:"/signup",children:" Sign up "})]})]})})]})})}}]),n}(a.Component),y=function(e){Object(d.a)(n,e);var t=Object(j.a)(n);function n(){return Object(l.a)(this,n),t.apply(this,arguments)}return Object(u.a)(n,[{key:"render",value:function(){return Object(v.jsx)("div",{className:"footer-row",children:Object(v.jsxs)("footer",{children:[" \xa9 2021 ",Object(v.jsx)("a",{href:"https://www.linkedin.com/in/christian-gerbig/",children:" Christian Gerbig "})," & ",Object(v.jsx)("a",{href:"https://www.linkedin.com/in/lisa-montebaur/",children:"Lisa Montebaur"})," "]})})}}]),n}(a.Component),S=n.p+"static/media/JungleSwap_Home.c4ed9b4c.png",q=n.p+"static/media/JungleSwap_Icon.a6c7c44a.png",C=function(e){Object(d.a)(n,e);var t=Object(j.a)(n);function n(){return Object(l.a)(this,n),t.apply(this,arguments)}return Object(u.a)(n,[{key:"componentDidMount",value:function(){this.props.onGetElementsHeight()}},{key:"render",value:function(){var e=this.props,t=e.plants,n=e.query,a=e.headerHeight,s=e.onSearchPlant;return t?Object(v.jsxs)("div",{children:[Object(v.jsx)("header",{className:"text-center pt-5 pb-5 headerImg",id:"headerId",children:Object(v.jsx)("div",{className:"row my-5",children:Object(v.jsxs)("div",{className:"col-6 offset-3 my-5 borderAround",children:[Object(v.jsx)("h2",{className:"title mb-2",children:" JungleSwap "}),Object(v.jsx)("h5",{className:"mt-3 mb-5",children:" Share your green heart "}),Object(v.jsx)("div",{className:"mb-5",children:Object(v.jsx)(g.b,{className:"biggerFontSize",onClick:function(){return b.animateScroll.scrollTo(a)},children:" Try it! "})})]})})}),Object(v.jsx)("div",{className:"intro",id:"introId",children:Object(v.jsx)("div",{className:"intro-centered container",children:Object(v.jsxs)("div",{className:"row",children:[Object(v.jsx)("div",{className:"col-sm-6 col-md-5 col-lg-6",children:Object(v.jsx)("img",{className:"image",src:S,alt:"plants"})}),Object(v.jsx)("br",{}),Object(v.jsxs)("div",{className:"intro col-sm-6 col-md-5 col-lg-6 px-5",children:[Object(v.jsx)("h4",{children:" Welcome to JungleSwap! "}),Object(v.jsx)("h5",{children:" Add green to your Home "}),Object(v.jsxs)("p",{children:[' It"s easy-peasy. ',Object(v.jsx)("br",{}),"Share your plant offshoots. ",Object(v.jsx)("br",{}),"Make money! ",Object(v.jsx)("br",{}),"Or swap them for another plant. ",Object(v.jsx)("br",{}),'Don"t have any baby plants? ',Object(v.jsx)("br",{}),"You can simply shop and give a plant a new home."]}),Object(v.jsx)("img",{className:"icon",src:q,alt:"icon"})]})]})})}),Object(v.jsxs)("div",{className:"container mt-5",children:[Object(v.jsxs)("div",{className:"mt-5 mb-3",children:[Object(v.jsx)("h2",{children:" Plants "}),Object(v.jsx)("hr",{}),Object(v.jsx)("h4",{children:" Search a plant "})]}),Object(v.jsx)("div",{className:"mb-4",children:Object(v.jsx)("input",{className:"smallWidth form-control",type:"text",placeholder:"Search...",value:n,onChange:s})}),Object(v.jsx)("div",{className:"row row-cols-1 row-cols-md-3 g-4",children:t.map((function(e){var t=e._id,n=e.name,a=e.image,s=e.price;return Object(v.jsx)("div",{className:"col mb-5",children:Object(v.jsxs)("div",{className:"card card-medium-width text-center",children:[Object(v.jsx)("img",{className:"card-img-top mediumPicSize",src:a,alt:n}),Object(v.jsxs)("div",{className:"card-body mb-5",children:[Object(v.jsxs)("h5",{children:[" ",n," "]}),Object(v.jsxs)("p",{children:[" ",s," \u20ac "]}),Object(v.jsx)(g.b,{className:"btn btn-outline-dark",to:"/plants/read/".concat(t),children:" Details "})]})]})},t)}))})]})]}):Object(v.jsx)("div",{class:"spinner-grow text-success m-5",role:"status",children:Object(v.jsx)("span",{class:"visually-hidden",children:" Loading... "})})}}]),n}(a.Component),R=function(e){Object(d.a)(n,e);var t=Object(j.a)(n);function n(){return Object(l.a)(this,n),t.apply(this,arguments)}return Object(u.a)(n,[{key:"componentDidMount",value:function(){var e=this.props,t=e.onResetError,n=e.onResetNewRequestsReceived;t(),n(),b.animateScroll.scrollToTop()}},{key:"render",value:function(){var e=this.props,t=e.error,n=e.onSignUp;return Object(v.jsx)("div",{className:"container row mt-5",children:Object(v.jsxs)("div",{className:"mt-5 col-11 col-md-5 offset-1 offset-md-5",children:[Object(v.jsx)("h2",{className:"mb-5",children:" Sign Up "}),Object(v.jsxs)("form",{onSubmit:n,children:[Object(v.jsxs)("div",{className:"form-group",children:[Object(v.jsx)("label",{htmlFor:"InputUsername",children:" Username "}),Object(v.jsx)("input",{type:"text",className:"form-control",id:"InputUsername",name:"username"})]}),Object(v.jsxs)("div",{className:"form-group",children:[Object(v.jsx)("label",{htmlFor:"InputEmail",children:" Email address "}),Object(v.jsx)("input",{type:"email",className:"form-control",id:"InputEmail",name:"email"})]}),Object(v.jsxs)("div",{className:"form-group",children:[Object(v.jsx)("label",{htmlFor:"InputPassword",children:" Password "}),Object(v.jsx)("input",{name:"password",type:"password",className:"form-control",id:"InputPassword"})]}),t?Object(v.jsxs)("p",{className:"warningColor",children:[" ",t," "]}):null,Object(v.jsx)("button",{type:"submit",className:"btn btn-primary mt-4 btn-outline-dark",children:" Sign up "}),Object(v.jsx)("p",{className:"padding",children:" Already have an account? "}),Object(v.jsx)(g.b,{to:"/signin",children:" Sign in "})]})]})})}}]),n}(a.Component),w=function(e){Object(d.a)(n,e);var t=Object(j.a)(n);function n(){return Object(l.a)(this,n),t.apply(this,arguments)}return Object(u.a)(n,[{key:"componentDidMount",value:function(){var e=this.props,t=e.onResetError,n=e.onResetNewRequestsReceived;t(),n(),b.animateScroll.scrollToTop()}},{key:"render",value:function(){var e=this.props,t=e.error,n=e.onSignIn;return Object(v.jsx)("div",{className:"container row mt-5 custom fullscreen",children:Object(v.jsxs)("div",{className:"mt-5 col-11 col-md-5 offset-1 offset-md-5",children:[Object(v.jsx)("h2",{className:"mb-5",children:" Sign In "}),Object(v.jsxs)("form",{onSubmit:n,children:[Object(v.jsxs)("div",{className:"form-group",children:[Object(v.jsx)("label",{htmlFor:"InputEmail",children:" Email address "}),Object(v.jsx)("input",{type:"email",className:"form-control",id:"InputEmail",name:"email"})]}),Object(v.jsxs)("div",{className:"form-group",children:[Object(v.jsx)("label",{htmlFor:"InputPassword",children:" Password "}),Object(v.jsx)("input",{name:"password",type:"password",className:"form-control",id:"InputPassword"})]}),t?Object(v.jsxs)("p",{className:"warningColor",children:[" ",t," "]}):null,Object(v.jsx)("button",{type:"submit",className:"btn btn-primary mt-4 btn-outline-dark",children:" Sign in "})]})]})})}}]),n}(a.Component),k=function(e){Object(d.a)(n,e);var t=Object(j.a)(n);function n(){return Object(l.a)(this,n),t.apply(this,arguments)}return Object(u.a)(n,[{key:"componentDidMount",value:function(){var e=this.props,t=e.onLogOut,n=e.onResetNewRequestsReceived;t(),n(),b.animateScroll.scrollToTop()}},{key:"render",value:function(){return Object(v.jsx)("div",{})}}]),n}(a.Component),I=function(e){Object(d.a)(n,e);var t=Object(j.a)(n);function n(){return Object(l.a)(this,n),t.apply(this,arguments)}return Object(u.a)(n,[{key:"componentDidMount",value:function(){this.props.onResetError(),b.animateScroll.scrollToTop()}},{key:"render",value:function(){var e=this.props,t=e.user,n=e.headerHeight,a=e.introHeight,s=e.error,c=e.onCreatePlant;return t?Object(v.jsx)("div",{className:"container row mt-5 fullscreen",children:Object(v.jsxs)("div",{className:"mt-5 col-11 col-md-5 offset-1 offset-md-6",children:[Object(v.jsx)("h2",{className:"mb-5",children:" Create a plant "}),Object(v.jsxs)("form",{onSubmit:c,children:[Object(v.jsx)("input",{className:"mb-4",name:"name",type:"text",placeholder:"Enter name"}),Object(v.jsx)("input",{className:"mb-4",name:"description",type:"text",placeholder:"Enter description"}),Object(v.jsx)("input",{className:"mb-4 smallWidth",name:"size",type:"number",min:"1",placeholder:"Size"})," cm ",Object(v.jsx)("br",{}),Object(v.jsxs)("select",{className:"mb-4 p-1",name:"location",type:"text",children:[Object(v.jsx)("option",{children:" Select location "}),Object(v.jsx)("option",{value:"sun",children:" sun "}),Object(v.jsx)("option",{value:"shade",children:" shade "}),Object(v.jsx)("option",{value:"sun and shade",children:" sun and shade "})]}),Object(v.jsx)("br",{}),Object(v.jsx)("input",{className:"mb-4 smallWidth",name:"price",type:"number",min:"1",placeholder:"Price"})," \u20ac ",Object(v.jsx)("br",{}),Object(v.jsx)("input",{className:"mb-4",name:"plantImage",type:"file"}),s?Object(v.jsxs)("p",{className:"warningColor",children:[" ",s," "]}):null,Object(v.jsxs)("div",{className:"col-12",children:[Object(v.jsx)("button",{className:"btn btn-sm btn-outline-dark",type:"submit",children:" Create "}),Object(v.jsxs)(g.b,{to:"/",onClick:function(){return b.animateScroll.scrollTo(n+a)},children:[" ",Object(v.jsx)("button",{className:"btn btn-sm mx-5",children:" Go back "})," "]})]})]})]})}):Object(v.jsx)(h.a,{to:"/signup"})}}]),n}(a.Component),P=function(e){Object(d.a)(n,e);var t=Object(j.a)(n);function n(){return Object(l.a)(this,n),t.apply(this,arguments)}return Object(u.a)(n,[{key:"componentDidMount",value:function(){var e=this.props.match.params.plantId;this.props.onReadPlant(e),b.animateScroll.scrollToTop()}},{key:"render",value:function(){var e=this.props,t=e.user,n=e.plant,a=e.headerHeight,s=e.introHeight,c=e.onDeletePlant;if(!t)return Object(v.jsx)(h.a,{to:"/signup"});var r=n._id,i=n.name,o=n.description,l=n.size,u=n.image,d=n.imagePublicId,j=n.location,m=n.price,p=n.creator;return p?Object(v.jsxs)("div",{className:"container mt-5 row row-md-10 offset-md-4",children:[Object(v.jsx)("div",{className:"mt-4 mb-3 pt-4 container",children:Object(v.jsx)("h2",{children:" Plant details "})}),Object(v.jsx)("div",{className:"col",children:Object(v.jsxs)("div",{className:"card cardMediumWidth",children:[u?Object(v.jsx)("img",{className:"card-img-top mediumPicSize",src:u,alt:i}):null,Object(v.jsxs)("div",{className:"ml-2 mt-2",children:[" ",Object(v.jsx)("span",{children:" Name: "})," ",i," "]}),Object(v.jsxs)("div",{className:"ml-2 mt-2",children:[" ",Object(v.jsx)("span",{children:" Description: "})," ",o," "]}),Object(v.jsxs)("div",{className:"ml-2 mt-2",children:[" ",Object(v.jsx)("span",{children:" Size: "})," ",l," cm "]}),Object(v.jsxs)("div",{className:"ml-2 mt-2",children:[" ",Object(v.jsx)("span",{children:" Likes: "})," ",j," "]}),Object(v.jsxs)("div",{className:"ml-2 mt-2",children:[" ",Object(v.jsx)("span",{children:" Price: "})," ",m," \u20ac "]}),Object(v.jsx)("div",{className:"ml-2 mt-2 col justify-content-center",children:Object(v.jsx)("div",{className:"row-2 justify-content-center",children:Object(v.jsxs)("div",{className:"card-body",children:[t._id===p._id?Object(v.jsxs)("div",{children:[Object(v.jsxs)(g.b,{to:"/plants/update",children:[" ",Object(v.jsx)("button",{className:"btn btn-sm ml-2 btn-outline-dark",children:" Update "})," "]}),Object(v.jsx)("button",{className:"btn btn-sm ml-2 btn-outline-dark",onClick:function(){return c(r,d)},children:" Delete "})]}):Object(v.jsxs)("div",{children:[Object(v.jsxs)(g.b,{to:{pathname:"/plants/checkout/".concat(r),plant:n},children:[" ",Object(v.jsx)("button",{className:"btn btn-sm ml-2 btn-outline-dark",children:" Buy "})," "]}),Object(v.jsxs)(g.b,{to:{pathname:"/requests/create",plant:n},children:[" ",Object(v.jsx)("button",{className:"btn btn-sm ml-2 btn-outline-dark",children:" Swap "})," "]})]}),Object(v.jsxs)(g.b,{to:"/",onClick:function(){return b.animateScroll.scrollTo(a+s)},children:[" ",Object(v.jsx)("button",{className:"btn btn-sm ml-2",children:" Go back "})," "]})]})})})]})})]}):Object(v.jsx)("div",{class:"spinner-grow text-success m-5",role:"status",children:Object(v.jsx)("span",{class:"visually-hidden",children:" Loading... "})})}}]),n}(a.Component),H=function(e){Object(d.a)(n,e);var t=Object(j.a)(n);function n(){return Object(l.a)(this,n),t.apply(this,arguments)}return Object(u.a)(n,[{key:"componentDidMount",value:function(){b.animateScroll.scrollToTop()}},{key:"render",value:function(){var e=this.props,t=e.plant,n=e.onNameChange,a=e.onDescriptionChange,s=e.onSizeChange,c=e.onPriceChange,r=e.onLocationChange,i=e.onImageChange,o=e.onUpdatePlant,l=t._id,u=t.name,d=t.description,j=t.size,h=t.image,b=t.price;return Object(v.jsx)("div",{className:"container row mt-5 ",children:Object(v.jsxs)("div",{className:"mt-2 col-11 col-md-5 offset-1 offset-md-5",children:[Object(v.jsx)("h2",{className:"mt-5 mb-4",children:" Update your plant "}),Object(v.jsxs)("div",{className:"card cardSmallWidth mb-5",children:[Object(v.jsx)("img",{className:"mb-2 smallPicSize",src:h,alt:u}),Object(v.jsxs)("div",{className:"card-body",children:[Object(v.jsx)("input",{className:"mb-2",onChange:i,type:"file"}),Object(v.jsx)("input",{className:"mb-2",type:"text",onChange:n,value:u}),Object(v.jsx)("input",{className:"mb-2",type:"text",onChange:a,value:d}),Object(v.jsx)("input",{className:"mb-2 smallWidth",type:"number",onChange:s,value:j})," cm ",Object(v.jsx)("br",{}),Object(v.jsxs)("select",{className:"mb-2",onChange:r,name:"location",type:"text",placeholder:"Select",children:[Object(v.jsx)("option",{value:"sun",children:" sun "}),Object(v.jsx)("option",{value:"shade",children:" shade "}),Object(v.jsx)("option",{value:"sun and shade",children:" sun and shade "})]})," ",Object(v.jsx)("br",{}),Object(v.jsx)("input",{className:"mb-4 smallWidth",name:"price",type:"number",min:"1",onChange:c,value:b})," \u20ac",Object(v.jsxs)("div",{className:"row justify-content-around",children:[Object(v.jsx)("button",{className:"btn btn-sm btn-outline-dark",onClick:function(){return o(t)},children:" Save changes "}),Object(v.jsxs)(g.b,{to:"/plants/read/".concat(l),children:[" ",Object(v.jsx)("button",{className:"btn btn-sm mx-2",children:" Go back "})," "]})]})]})]})]})})}}]),n}(a.Component),T=n(60),D=n(24),E=n(27),U=n.n(E),_=n(42),z=n(25),M=function(e){var t=Object(a.useState)(!1),n=Object(z.a)(t,2),s=n[0],c=n[1],r=Object(a.useState)(null),i=Object(z.a)(r,2),o=i[0],l=i[1],u=Object(a.useState)(""),d=Object(z.a)(u,2),j=d[0],h=d[1],p=Object(a.useState)(!0),O=Object(z.a)(p,2),f=O[0],x=O[1],N=Object(a.useState)(""),y=Object(z.a)(N,2),S=y[0],q=y[1],C=Object(D.useStripe)(),R=Object(D.useElements)(),w=e.plant,k=e.headerHeight,I=e.introHeight,P=e.onCheckout;Object(a.useEffect)((function(){window.fetch("".concat(m,"/api/create-payment-intent"),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({price:w.price})}).then((function(e){return e.json()})).then((function(e){return q(e.clientSecret)}))}),[w.price]);var H=function(){var e=Object(_.a)(U.a.mark((function e(t){return U.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:x(t.empty),l(t.error?t.error.message:"");case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),T=function(){var e=Object(_.a)(U.a.mark((function e(t){var n;return U.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),h(!0),e.next=4,C.confirmCardPayment(S,{payment_method:{card:R.getElement(D.CardElement)}});case 4:(n=e.sent).error?(l("Payment failed ".concat(n.error.message)),h(!1)):(l(null),h(!1),c(!0));case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),E=w._id,M=w.name,J=w.price;return Object(v.jsxs)("div",{className:"container col-9",children:[Object(v.jsxs)("form",{className:"checkoutForm mt-5",id:"payment-form",onSubmit:T,children:[Object(v.jsxs)("h2",{className:"text-center mb-2 p-2",children:["  ",M," "]}),Object(v.jsxs)("h3",{className:"text-center mb-4 p-2",children:[" ",J," \u20ac "]}),Object(v.jsx)(D.CardElement,{className:"p-2",id:"card-element",options:{style:{base:{color:"#32325d",fontFamily:"Arial, sans-serif",fontSmoothing:"antialiased",fontSize:"16px","::placeholder":{color:"#32325d"}},invalid:{color:"#fa755a",iconColor:"#fa755a"}}},onChange:H}),Object(v.jsx)("div",{className:"row justify-content-center",children:Object(v.jsx)("button",{onClick:P,className:"btn btn-sm mt-5 mb-4",disabled:j||f||s,id:"submit",children:Object(v.jsx)("span",{id:"button-text",children:j?Object(v.jsx)("div",{className:"spinner",id:"spinner"}):"Pay now"})})}),o&&Object(v.jsxs)("div",{className:"card-error",role:"alert",children:[" ",o," "]}),Object(v.jsx)("p",{className:s?"result-message text-center":"result-message hidden text-center",children:"Payment succeeded."})]}),Object(v.jsx)("div",{className:"row justify-content-center",children:s?Object(v.jsxs)(g.b,{to:"/",onClick:function(){return b.animateScroll.scrollTo(k+I)},children:[" ",Object(v.jsx)("button",{className:"btn btn-sm",children:" Go back "})," "]}):Object(v.jsxs)(g.b,{to:"/plants/read/".concat(E),children:[" ",Object(v.jsx)("button",{className:"btn btn-sm",children:" Go back "})," "]})})]})},J=Object(T.a)("pk_test_51IQBsPA6EAM4YnfDyrjHWnLHzZ5KkI9tsERzYhBGVoctZBrFUb4Sda035HvcQKpp7thFiqW6QmO8ytPbOAMTg33z00cHvcbojv"),L=function(e){Object(d.a)(n,e);var t=Object(j.a)(n);function n(){return Object(l.a)(this,n),t.apply(this,arguments)}return Object(u.a)(n,[{key:"componentDidMount",value:function(){b.animateScroll.scrollToTop()}},{key:"render",value:function(){var e=this.props,t=e.headerHeight,n=e.introHeight,a=e.onCheckout,s=this.props.location.plant;return Object(v.jsx)("div",{className:"container row mt-5",children:Object(v.jsx)("div",{className:"mt-5 col-11 col-md-6 offset-1 offset-md-5 App",children:Object(v.jsx)(D.Elements,{stripe:J,children:Object(v.jsx)(M,{onCheckout:a,plant:s,headerHeight:t,introHeight:n})})})})}}]),n}(a.Component),F=function(e){Object(d.a)(n,e);var t=Object(j.a)(n);function n(){return Object(l.a)(this,n),t.apply(this,arguments)}return Object(u.a)(n,[{key:"componentDidMount",value:function(){var e=this.props,t=e.onFetchAllRequests,n=e.onResetNewRequestsReceived;t(),n(),b.animateScroll.scrollToTop()}},{key:"render",value:function(){var e=this.props,t=e.user,n=e.requests,a=e.currentRequestsNumber,s=e.onResetNewRequestsReceived;return t?n?Object(v.jsx)("div",{className:"container row mt-5",children:Object(v.jsxs)("div",{className:"mt-5 col-11 col-md-5 offset-1 offset-md-5",children:[Object(v.jsx)("h2",{className:"mb-5",children:" Your messages "}),Object(v.jsxs)(g.b,{to:"/",onClick:function(){s(),b.animateScroll.scrollToTop()},children:[" ",Object(v.jsx)("button",{className:"btn btn-sm mt-4",children:" Go back "})," "]}),n.map((function(e){var n=e._id,a=e.buyer,s=e.seller,c=e.plant;return s._id===t._id?Object(v.jsxs)("div",{className:"card p-3 mt-4 ",children:[Object(v.jsxs)("h4",{children:[" Request for: ",c.name," "]}),Object(v.jsxs)("h5",{children:[" by: ",a.username," "]}),Object(v.jsx)("div",{children:Object(v.jsx)(g.b,{className:"btn btn-outline-dark",to:"/requests/read/".concat(n),children:" Details "})})]},n):null})),0===a?null:Object(v.jsxs)(g.b,{to:"/",onClick:function(){s(),b.animateScroll.scrollToTop()},children:[" ",Object(v.jsx)("button",{className:"btn btn-sm mt-4",children:" Go back "})," "]})]})}):Object(v.jsx)("div",{class:"spinner-grow text-success m-5",role:"status",children:Object(v.jsx)("span",{class:"visually-hidden",children:" Loading... "})}):Object(v.jsx)(h.a,{to:"/signup"})}}]),n}(a.Component),A=function(e){Object(d.a)(n,e);var t=Object(j.a)(n);function n(){return Object(l.a)(this,n),t.apply(this,arguments)}return Object(u.a)(n,[{key:"componentDidMount",value:function(){this.props.onResetError(),b.animateScroll.scrollToTop()}},{key:"render",value:function(){var e=this.props,t=e.error,n=e.onCreateRequest,a=this.props.location.plant;return Object(v.jsx)("div",{className:"container row mt-5",children:Object(v.jsxs)("div",{className:"mt-5 col-11 col-md-5 offset-1 offset-md-5",children:[Object(v.jsx)("h2",{className:"mb-5",children:" Your mesage "}),Object(v.jsxs)("form",{onSubmit:function(e){return n(e,a)},children:[Object(v.jsx)("div",{children:Object(v.jsx)("textarea",{className:"mb-4",name:"message",cols:"35",rows:"7"})}),t?Object(v.jsxs)("p",{className:"warningColor",children:[" ",t," "]}):null,Object(v.jsx)("button",{className:"btn btn-sm btn-outline-dark",type:"submit",children:" Send "}),Object(v.jsxs)(g.b,{to:"/plants/read/".concat(a._id),children:[" ",Object(v.jsx)("button",{className:"btn btn-sm mx-2",children:" Go back "})," "]})]})]})})}}]),n}(a.Component),G=function(e){Object(d.a)(n,e);var t=Object(j.a)(n);function n(){return Object(l.a)(this,n),t.apply(this,arguments)}return Object(u.a)(n,[{key:"componentDidMount",value:function(){var e=this.props.match.params.requestId;this.props.onReadRequest(e),b.animateScroll.scrollToTop()}},{key:"render",value:function(){var e=this.props,t=e.request,n=e.onDeleteRequest,a=t._id,s=t.buyer,c=t.plant,r=t.message,i=t.reply;return s&&c?Object(v.jsx)("div",{className:"container row mt-5 ",children:Object(v.jsxs)("div",{className:"mt-5 col-11 col-md-5 offset-1 offset-md-5",children:[Object(v.jsx)("h2",{className:"mb-5",children:" Your request "}),Object(v.jsxs)("h4",{children:[" for: ",c.name," "]}),Object(v.jsxs)("h5",{children:[" by: ",s.username," "]}),Object(v.jsxs)("p",{children:[" ",r," "]}),i?Object(v.jsxs)("div",{children:[Object(v.jsx)("h5",{children:" Your reply: "}),Object(v.jsxs)("p",{children:[" ",i," "]})]}):null,Object(v.jsxs)("div",{children:[i?null:Object(v.jsxs)(g.b,{to:"/requests/update/".concat(a),children:[" ",Object(v.jsx)("button",{className:"btn btn-sm ml-2 btn-outline-dark",children:" Reply "})," "]}),Object(v.jsx)("button",{className:"btn btn-sm ml-2 btn-outline-dark",onClick:function(){return n(a)},children:" Delete "})]}),Object(v.jsxs)(g.b,{to:"/requests/fetch",onClick:b.animateScroll.scrollToTop,children:[" ",Object(v.jsx)("button",{className:"btn btn-sm mt-4",children:" Go back "})," "]})]})}):Object(v.jsx)("div",{class:"spinner-grow text-success m-5",role:"status",children:Object(v.jsx)("span",{class:"visually-hidden",children:" Loading... "})})}}]),n}(a.Component),W=function(e){Object(d.a)(n,e);var t=Object(j.a)(n);function n(){return Object(l.a)(this,n),t.apply(this,arguments)}return Object(u.a)(n,[{key:"componentDidMount",value:function(){b.animateScroll.scrollToTop()}},{key:"render",value:function(){var e=this.props,t=e.request,n=e.onCreateReply,a=e.onUpdateRequest,s=t._id,c=t.message;return Object(v.jsx)("div",{className:"container row mt-5 ",children:Object(v.jsxs)("div",{className:"mt-2 col-11 col-md-5 offset-1 offset-md-5",children:[Object(v.jsx)("h2",{className:"mt-5 mb-4",children:" Reply your request "}),Object(v.jsx)("div",{className:"card cardSmallWidth mb-5",children:Object(v.jsxs)("div",{className:"card-body",children:[Object(v.jsxs)("p",{children:[" ",c," "]}),Object(v.jsx)("textarea",{className:"mb-4",name:"reply",cols:"31",rows:"6",placeholder:"Your reply",onChange:n}),Object(v.jsxs)("div",{className:"row justify-content-around",children:[Object(v.jsx)("button",{className:"btn btn-sm btn-outline-dark",onClick:function(){return a(t)},children:" Submit "}),Object(v.jsxs)(g.b,{to:"/requests/read/".concat(s),children:[" ",Object(v.jsx)("button",{className:"btn btn-sm mx-2",children:" Go back "})," "]})]})]})})]})})}}]),n}(a.Component),B=function(e){Object(d.a)(n,e);var t=Object(j.a)(n);function n(){return Object(l.a)(this,n),t.apply(this,arguments)}return Object(u.a)(n,[{key:"render",value:function(){return Object(v.jsx)("div",{className:"notFound",children:Object(v.jsxs)("div",{children:[Object(v.jsxs)("h2",{children:["Oh-oh! ",Object(v.jsx)("br",{})," ",Object(v.jsx)("br",{}),"We think you got lost in the jungle!"]}),Object(v.jsx)("h3",{children:" 404 Not Found "}),Object(v.jsxs)(g.b,{to:"/",children:[" ",Object(v.jsx)("button",{className:"btn btn-sm ml-2",children:" Take me home "})," "]})]})})}}]),n}(a.Component),Y=function(e){Object(d.a)(n,e);var t=Object(j.a)(n);function n(){return Object(l.a)(this,n),t.apply(this,arguments)}return Object(u.a)(n,[{key:"componentDidMount",value:function(){!function(e,t){var n=document.createElement("script");n.type="text/javascript",n.async=!0,n.src="https://widget.kommunicate.io/v2/kommunicate.app",document.getElementsByTagName("head")[0].appendChild(n),window.kommunicate=t,t._globals={appId:"10b22c52854a305b79bbdecc356bea5",popupWidget:!0,automaticChatOpenOnNavigation:!0}}(document,window.kommunicate||{})}},{key:"render",value:function(){return Object(v.jsx)("div",{})}}]),n}(a.Component),Q=function(e){Object(d.a)(n,e);var t=Object(j.a)(n);function n(e){var a;return Object(l.a)(this,n),(a=t.call(this,e)).getElementsHeight=function(){var e=Math.round(document.querySelector("#headerId").getBoundingClientRect().height),t=Math.round(document.querySelector("#introId").getBoundingClientRect().height);a.setState({headerHeight:e,introHeight:t})},a.fetchAllPlants=function(){O.a.get("".concat(m,"/api/plants/fetch")).then((function(e){return a.setState({plants:e.data})})).catch((function(e){return console.log("Fetching plants failed",e)}))},a.fetchQueryPlants=function(){O.a.get("".concat(m,"/api/plants/search?q=").concat(a.state.query)).then((function(e){return a.setState({plants:e.data,ready:!0})})).catch((function(e){return console.log("Query fetching failed",e)}))},a.handleSearchPlant=function(e){var t=e.target.value;a.setState({query:t},(function(){return t?a.fetchQueryPlants():a.fetchAllPlants()}))},a.handleCreatePlant=function(e){e.preventDefault();var t=e.target,n=t.name,s=t.description,c=t.size,r=t.plantImage,i=t.location,l=t.price,u=r.files[0],d=new FormData;d.append("image",u),O.a.post("".concat(m,"/api/upload"),d).then((function(e){var t=e.data,r=t.image,u=t.imagePublicId,d={name:n.value,description:s.value,size:c.value,image:r,imagePublicId:u,location:i.value,price:l.value};O.a.post("".concat(m,"/api/plants/create"),d,{withCredentials:!0}).then((function(e){return a.setState({plants:[e.data].concat(Object(o.a)(a.state.plants))},(function(){a.props.history.push("/"),b.animateScroll.scrollTo(a.state.headerHeight+a.state.introHeight)}))})).catch((function(e){return a.setState({error:e.response.data.error})}))})).catch((function(e){return a.setState({error:e.response.data.error})}))},a.handleReadPlant=function(e){O.a.get("".concat(m,"/api/plants/read/").concat(e),{withCredentials:!0}).then((function(e){return a.setState({plant:e.data})})).catch((function(){return console.log("Read plant failed")}))},a.handleNameChange=function(e){var t=JSON.parse(JSON.stringify(a.state.plant));t.name=e.target.value,a.setState({plant:t})},a.handleDescriptionChange=function(e){var t=JSON.parse(JSON.stringify(a.state.plant));t.description=e.target.value,a.setState({plant:t})},a.handleSizeChange=function(e){var t=JSON.parse(JSON.stringify(a.state.plant));t.size=e.target.value,a.setState({plant:t})},a.handlePriceChange=function(e){var t=JSON.parse(JSON.stringify(a.state.plant));t.price=e.target.value,a.setState({plant:t})},a.handleLocationChange=function(e){var t=JSON.parse(JSON.stringify(a.state.plant));t.location=e.target.value,a.setState({plant:t})},a.handleImageChange=function(e){var t=e.target.files[0],n={imagePublicId:a.state.plant.imagePublicId};O.a.post("".concat(m,"/api/destroy"),n).then((function(){var e=new FormData;e.append("image",t),O.a.post("".concat(m,"/api/upload"),e).then((function(e){var t=JSON.parse(JSON.stringify(a.state.plant)),n=e.data,s=n.imagePublicId,c=n.image;t.imagePublicId=s,t.image=c,a.setState({plant:t})})).catch((function(e){return console.log("Image upload failed",e)}))})).catch((function(e){return console.log("Delete old image failed",e)}))},a.handleUpdatePlant=function(e){var t=e._id,n=e.name,s=e.description,c=e.size,r=e.image,i=e.imagePublicId,o=e.location,l=e.price,u={name:n,description:s,size:c,image:r,imagePublicId:i,location:o,price:l};O.a.patch("".concat(m,"/api/plants/update/").concat(t),u).then((function(){var e=a.state.plants.map((function(e){return e._id===t&&(e.name=n,e.description=s,e.size=c,e.image=r,e.imagePublicId=i,e.location=o,e.price=l),e}));a.setState({plants:e},(function(){a.props.history.push("/"),b.animateScroll.scrollTo(a.state.headerHeight+a.state.introHeight)}))})).catch((function(e){return console.log("Update plant failed",e)}))},a.handleDeletePlant=function(e,t){var n={imagePublicId:t};O.a.post("".concat(m,"/api/destroy"),n).then((function(){O.a.delete("".concat(m,"/api/plants/delete/").concat(e)).then((function(){var t=a.state.plants.filter((function(t){return t._id!==e}));a.setState({plants:t},(function(){a.props.history.push("/"),b.animateScroll.scrollTo(a.state.headerHeight+a.state.introHeight)}))})).catch((function(e){return console.log("Delete plant failed",e)}))})).catch((function(e){return console.log("Delete image failed",e)}))},a.handleCheckout=function(e){O.a.post("".concat(m,"/api/create-payment-intent"),{},{withCredentials:!0}).then((function(){return a.setState((function(){a.props.history.push("/"),b.animateScroll.scrollTo(a.state.headerHeight+a.state.introHeight)}))})).catch((function(e){return console.log("Checkout failed",e)}))},a.handleFetchAllRequests=function(){O.a.get("".concat(m,"/api/requests/fetch")).then((function(e){return a.setState({requests:e.data})})).catch((function(e){return console.log("Fetching requests failed",e)}))},a.handleCheckRequests=function(){var e=a.state.loggedInUser;e&&O.a.get("".concat(m,"/api/requests/fetch")).then((function(t){a.setState({requests:t.data});var n=a.state.requests.filter((function(t){return t.seller._id===e._id})),s=n.length;a.state.initRequestsNumber&&a.setState({currentRequestsNumber:s,initRequestsNumber:!1}),a.state.currentRequestsNumber<s&&!1===a.state.initRequestsNumber&&n[0].seller._id===e._id&&a.setState({currentRequestsNumber:s,newRequestsReceived:!0})})).catch((function(e){return console.log("Checking requests failed",e)}))},a.resetNewRequestsReceived=function(){return a.setState({newRequestsReceived:!1})},a.handleCreateRequest=function(e,t){e.preventDefault();var n=e.target.message,s={seller:t.creator._id,plant:t._id,message:n.value};O.a.post("".concat(m,"/api/requests/create"),s,{withCredentials:!0}).then((function(e){return a.setState({requests:[e.data].concat(Object(o.a)(a.state.requests))},(function(){return a.props.history.push("/plants/read/".concat(t._id))}))})).catch((function(e){return a.setState({error:e.response.data.error})}))},a.handleReadRequest=function(e){O.a.get("".concat(m,"/api/requests/read/").concat(e),{withCredentials:!0}).then((function(e){return a.setState({request:e.data})})).catch((function(){return console.log("Read request failed")}))},a.handleCreateReply=function(e){var t=JSON.parse(JSON.stringify(a.state.request));t.reply=e.target.value,a.setState({request:t})},a.handleUpdateRequest=function(e){var t=e._id,n=e.buyer,s=e.seller,c=e.plant,r=e.message,i=e.reply,o={buyer:n,seller:s,plant:c,message:r,reply:i};O.a.patch("".concat(m,"/api/requests/update/").concat(t),o).then((function(){var e=a.state.requests.map((function(e){return e._id===t&&(e.buyer=n,e.seller=s,e.plant=c,e.message=r,e.reply=i),e}));a.setState({requests:e},(function(){return a.props.history.push("/requests/read/".concat(t))}))})).catch((function(e){return console.log("Update request failed",e)}))},a.handleDeleteRequest=function(e){O.a.delete("".concat(m,"/api/requests/delete/").concat(e)).then((function(){var t=a.state.requests.filter((function(t){return t._id!==e})),n=t.length;a.setState({requests:t,currentRequestsNumber:n},(function(){return a.props.history.push("/requests/fetch")}))})).catch((function(e){return console.log("Delete requestfailed",e)}))},a.resetError=function(){return a.setState({error:null})},a.handleSignUp=function(e){e.preventDefault();var t=e.target,n=t.username,s=t.email,c=t.password,r={username:n.value,email:s.value.toLowerCase(),password:c.value};O.a.post("".concat(m,"/api/signup"),r).then((function(e){return a.setState({loggedInUser:e.data},(function(){return a.props.history.push("/")}))})).catch((function(e){return a.setState({error:e.response.data.error})}))},a.handleSignIn=function(e){e.preventDefault();var t=e.target,n=t.email,s=t.password,c={email:n.value,password:s.value};O.a.post("".concat(m,"/api/signin"),c,{withCredentials:!0}).then((function(e){return a.setState({loggedInUser:e.data},(function(){return a.props.history.push("/")}))})).catch((function(e){return a.setState({error:e.response.data.error})}))},a.handleLogOut=function(){O.a.post("".concat(m,"/api/logout"),{},{withCredentials:!0}).then((function(){return a.setState({loggedInUser:null},(function(){return a.props.history.push("/")}))})).catch((function(e){return console.log("Logout failed",e)}))},a.state={fetchingUser:!0,loggedInUser:null,plants:[],query:"",plant:{},requests:[],request:{},currentRequestsNumber:0,initRequestsNumber:!0,newRequestsReceived:!1,headerHeight:0,introHeight:0,error:null},a}return Object(u.a)(n,[{key:"componentDidMount",value:function(){var e=this;this.fetchAllPlants(),this.state.loggedInUser||O.a.get("".concat(m,"/api/user"),{withCredentials:!0}).then((function(t){return e.setState({loggedInUser:t.data,fetchingUser:!1})})).catch((function(t){e.setState({fetchingUser:!1}),console.log("Initializing fetching failed",t)}))}},{key:"render",value:function(){var e=this,t=this.state,n=t.fetchingUser,a=t.loggedInUser,s=t.plants,c=t.query,r=t.plant,o=t.requests,l=t.request,u=t.headerHeight,d=t.introHeight,j=t.error,b=t.currentRequestsNumber,m=t.newRequestsReceived;return n?Object(v.jsx)("div",{class:"spinner-grow text-success m-5",role:"status",children:Object(v.jsx)("span",{class:"visually-hidden",children:" Loading... "})}):Object(v.jsxs)("div",{class:"main",children:[Object(v.jsx)(N,{onLogOut:this.handleLogOut,onCheckRequests:this.handleCheckRequests,newRequestsReceived:m,user:a,headerHeight:u,introHeight:d}),Object(v.jsxs)(h.d,{children:[Object(v.jsx)(h.b,{exact:!0,path:"/",render:function(){return Object(v.jsx)(C,{onSearchPlant:e.handleSearchPlant,onGetElementsHeight:e.getElementsHeight,plants:s,query:c,headerHeight:u})}}),Object(v.jsx)(h.b,{path:"/signup",render:function(t){return Object(v.jsx)(R,Object(i.a)({onSignUp:e.handleSignUp,onResetError:e.resetError,onResetNewRequestsReceived:e.resetNewRequestsReceived,error:j},t))}}),Object(v.jsx)(h.b,{path:"/signin",render:function(t){return Object(v.jsx)(w,Object(i.a)({onSignIn:e.handleSignIn,onResetError:e.resetError,onResetNewRequestsReceived:e.resetNewRequestsReceived,error:j},t))}}),Object(v.jsx)(h.b,{path:"/logout",render:function(t){return Object(v.jsx)(k,Object(i.a)({onLogOut:e.handleLogOut,onResetNewRequestsReceived:e.resetNewRequestsReceived},t))}}),Object(v.jsx)(h.b,{path:"/plants/create",render:function(t){return Object(v.jsx)(I,Object(i.a)({onCreatePlant:e.handleCreatePlant,onResetError:e.resetError,user:a,headerHeight:u,introHeight:d,error:j},t))}}),Object(v.jsx)(h.b,{path:"/plants/read/:plantId",render:function(t){return Object(v.jsx)(P,Object(i.a)({onReadPlant:e.handleReadPlant,onDeletePlant:e.handleDeletePlant,plant:r,user:a,headerHeight:u,introHeight:d},t))}}),Object(v.jsx)(h.b,{path:"/plants/update",render:function(t){return Object(v.jsx)(H,Object(i.a)({onNameChange:e.handleNameChange,onDescriptionChange:e.handleDescriptionChange,onSizeChange:e.handleSizeChange,onPriceChange:e.handlePriceChange,onLocationChange:e.handleLocationChange,onImageChange:e.handleImageChange,onUpdatePlant:e.handleUpdatePlant,plant:r,headerHeight:u,introHeight:d},t))}}),Object(v.jsx)(h.b,{path:"/plants/checkout/:plantId",render:function(t){return Object(v.jsx)(L,Object(i.a)({onCheckout:e.handleCheckout,headerHeight:u,introHeight:d},t))}}),Object(v.jsx)(h.b,{path:"/requests/fetch",render:function(t){return Object(v.jsx)(F,Object(i.a)({onFetchAllRequests:e.handleFetchAllRequests,onResetNewRequestsReceived:e.resetNewRequestsReceived,user:a,requests:o,currentRequestsNumber:b},t))}}),Object(v.jsx)(h.b,{path:"/requests/create",render:function(t){return Object(v.jsx)(A,Object(i.a)({onCreateRequest:e.handleCreateRequest,onResetError:e.resetError,user:a,error:j},t))}}),Object(v.jsx)(h.b,{path:"/requests/read/:requestId",render:function(t){return Object(v.jsx)(G,Object(i.a)({onReadRequest:e.handleReadRequest,onDeleteRequest:e.handleDeleteRequest,request:l,user:a},t))}}),Object(v.jsx)(h.b,{path:"/requests/update",render:function(t){return Object(v.jsx)(W,Object(i.a)({onCreateReply:e.handleCreateReply,onUpdateRequest:e.handleUpdateRequest,request:l},t))}}),Object(v.jsx)(h.b,{component:B})]}),Object(v.jsx)(Y,{}),Object(v.jsx)(y,{})]})}}]),n}(a.Component),K=Object(h.g)(Q);r.a.render(Object(v.jsx)(s.a.StrictMode,{children:Object(v.jsx)(g.a,{children:Object(v.jsx)(K,{})})}),document.querySelector("#root"))},65:function(e,t,n){},94:function(e,t,n){}},[[102,1,2]]]);
//# sourceMappingURL=main.e74d5471.chunk.js.map
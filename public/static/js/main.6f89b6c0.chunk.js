(this["webpackJsonpjungle-swap-client"]=this["webpackJsonpjungle-swap-client"]||[]).push([[0],{55:function(e,t,n){},75:function(e,t,n){},86:function(e,t,n){"use strict";n.r(t);var a=n(1),c=n.n(a),s=n(21),r=n.n(s),i=(n(55),n(18)),o=n(37),l=n(5),d=n(6),j=n(8),u=n(7),b=n(9),h="https://jungleswap.herokuapp.com",p=n(13),m=n.n(p),O=(n(74),n(75),n(89)),x=n(90),f=n(4),g=n(28),v=n(0),N=function(e){Object(j.a)(n,e);var t=Object(u.a)(n);function n(){return Object(l.a)(this,n),t.apply(this,arguments)}return Object(d.a)(n,[{key:"render",value:function(){var e=this.props.user;return Object(v.jsx)("div",{children:Object(v.jsxs)(O.a,{className:"pl-5",variant:"dark",expand:"lg",fixed:"top",children:[Object(v.jsx)(O.a.Brand,{href:"/",children:" JungleSwap "}),Object(v.jsx)(O.a.Toggle,{"aria-controls":"basic-navbar-nav"}),Object(v.jsx)(O.a.Collapse,{id:"basic-navbar-nav",children:Object(v.jsxs)(x.a,{className:"mr-auto",children:[Object(v.jsx)(g.ScrollTo,{children:function(e){var t=e.scroll;return Object(v.jsx)("div",{children:Object(v.jsx)(f.b,{to:"/",className:"p-2",onClick:function(){return t({y:1700,smooth:!0})},children:" All Plants "})})}}),e?Object(v.jsxs)("div",{children:[Object(v.jsx)(f.b,{className:"p-2",to:"/plants/create",children:" Create Plant "}),Object(v.jsx)(f.b,{className:"p-2",to:"/requests/fetch",children:" Messages "})]}):null,e?Object(v.jsx)("div",{children:Object(v.jsx)(f.b,{className:"p-2",to:"/logout",children:" Log out "})}):Object(v.jsxs)("div",{children:[Object(v.jsx)(f.b,{className:"p-2",to:"/signin",children:" Sign in "}),Object(v.jsx)(f.b,{className:"p-2",to:"/signup",children:" Sign up "})]})]})})]})})}}]),n}(a.Component),y=function(e){Object(j.a)(n,e);var t=Object(u.a)(n);function n(){return Object(l.a)(this,n),t.apply(this,arguments)}return Object(d.a)(n,[{key:"render",value:function(){return Object(v.jsx)("div",{className:"footer-row",children:Object(v.jsxs)("footer",{children:[" \xa9 2021 ",Object(v.jsx)("a",{href:"https://www.linkedin.com/in/christian-gerbig/",children:" Christian Gerbig "})," & ",Object(v.jsx)("a",{href:"https://www.linkedin.com/in/lisa-montebaur/",children:"Lisa Montebaur"})]})})}}]),n}(a.Component),S=n.p+"static/media/JungleSwap_Home.c4ed9b4c.png",C=n.p+"static/media/JungleSwap_Icon.a6c7c44a.png",w=function(e){Object(j.a)(n,e);var t=Object(u.a)(n);function n(){return Object(l.a)(this,n),t.apply(this,arguments)}return Object(d.a)(n,[{key:"render",value:function(){var e=this.props,t=e.plants,n=e.query,a=e.onSearchPlant;return Object(v.jsxs)("div",{children:[Object(v.jsx)("header",{className:"text-center pt-5 pb-5 headerImg",children:Object(v.jsx)("div",{className:"row my-5",children:Object(v.jsxs)("div",{className:"col-6 offset-3 my-5 borderAround",children:[Object(v.jsx)("h2",{className:"title mb-2",children:" JungleSwap "}),Object(v.jsx)("h5",{className:"mt-3 mb-5",children:" Share your green heart "}),Object(v.jsx)("div",{className:"mb-5",children:Object(v.jsx)(g.ScrollTo,{children:function(e){var t=e.scroll;return Object(v.jsx)(f.b,{className:"biggerFontSize",onClick:function(){return t({y:800,smooth:!0})},children:" Try it! "})}})})]})})}),Object(v.jsx)("div",{className:"intro",children:Object(v.jsx)("div",{className:"intro-centered container",children:Object(v.jsxs)("div",{className:"row",children:[Object(v.jsx)("div",{className:"col-sm-6 col-md-5 col-lg-6",children:Object(v.jsx)("img",{className:"image",src:S,alt:""})}),Object(v.jsx)("br",{}),Object(v.jsxs)("div",{className:"intro col-sm-6 col-md-5 col-lg-6 px-5",children:[Object(v.jsx)("h4",{children:" Welcome to JungleSwap! "}),Object(v.jsx)("h5",{children:" Add green to your Home "}),Object(v.jsxs)("p",{children:[' It"s easy-peasy. ',Object(v.jsx)("br",{}),"Share your plant offshoots. ",Object(v.jsx)("br",{}),"Make money! ",Object(v.jsx)("br",{}),"Or swap them for another plant. ",Object(v.jsx)("br",{}),'Don"t have any baby plants? ',Object(v.jsx)("br",{}),"You can simply shop and give a plant a new home."]}),Object(v.jsx)("img",{className:"icon",src:C,alt:"icon"})]})]})})}),Object(v.jsxs)("div",{className:"container mt-5",children:[Object(v.jsxs)("div",{className:"mt-4 mb-3 pt-5",children:[Object(v.jsx)("h2",{children:" Plants "}),Object(v.jsx)("hr",{}),Object(v.jsx)("h4",{children:" Search a plant "})]}),Object(v.jsx)("div",{className:"mb-4",children:Object(v.jsx)("input",{className:"smallWidth form-control",type:"text",placeholder:"Search...",value:n,onChange:a})}),Object(v.jsx)("div",{className:"row row-cols-1 row-cols-md-3 g-4",children:t.map((function(e){var t=e._id,n=e.name,a=e.image,c=e.price;return Object(v.jsx)("div",{className:"col mb-5",children:Object(v.jsxs)("div",{className:"card card-medium-width text-center",children:[Object(v.jsx)("img",{className:"card-img-top mediumPicSize",src:a,alt:n}),Object(v.jsxs)("div",{className:"card-body mb-5",children:[Object(v.jsxs)("h5",{children:[" ",n," "]}),Object(v.jsxs)("p",{children:[" ",c," \u20ac "]}),Object(v.jsx)(f.b,{className:"btn btn-outline-dark",to:"/plants/read/".concat(t),children:" Details "})]})]})},t)}))})]})]})}}]),n}(a.Component),k=function(e){Object(j.a)(n,e);var t=Object(u.a)(n);function n(){return Object(l.a)(this,n),t.apply(this,arguments)}return Object(d.a)(n,[{key:"componentDidMount",value:function(){this.props.onResetError()}},{key:"render",value:function(){var e=this.props,t=e.error,n=e.onSignUp;return Object(v.jsx)("div",{className:"container row mt-5",children:Object(v.jsxs)("div",{className:"mt-5 col-11 col-md-5 offset-1 offset-md-5",children:[Object(v.jsx)("h2",{className:"mt-5 mb-5",children:"Sign Up"}),Object(v.jsxs)("form",{onSubmit:n,children:[Object(v.jsxs)("div",{className:"form-group",children:[Object(v.jsx)("label",{htmlFor:"InputUsername",children:" Username "}),Object(v.jsx)("input",{type:"text",className:"form-control",id:"InputUsername",name:"username"})]}),Object(v.jsxs)("div",{className:"form-group",children:[Object(v.jsx)("label",{htmlFor:"InputEmail",children:" Email address "}),Object(v.jsx)("input",{type:"email",className:"form-control",id:"InputEmail",name:"email"})]}),Object(v.jsxs)("div",{className:"form-group",children:[Object(v.jsx)("label",{htmlFor:"InputPassword",children:" Password "}),Object(v.jsx)("input",{name:"password",type:"password",className:"form-control",id:"InputPassword"})]}),t?Object(v.jsxs)("p",{style:{color:"red"},children:[" ",t," "]}):null,Object(v.jsx)("button",{type:"submit",className:"btn btn-primary mt-4 btn-outline-dark",children:" Sign up "}),Object(v.jsx)("p",{className:"padding",children:" Already have an account? "}),Object(v.jsx)(f.b,{to:"/signin",children:" Sign in "})]})]})})}}]),n}(a.Component),P=function(e){Object(j.a)(n,e);var t=Object(u.a)(n);function n(){return Object(l.a)(this,n),t.apply(this,arguments)}return Object(d.a)(n,[{key:"componentDidMount",value:function(){this.props.onResetError()}},{key:"render",value:function(){var e=this.props,t=e.error,n=e.onSignIn;return Object(v.jsx)("div",{className:"container row mt-5 custom fullscreen",children:Object(v.jsxs)("div",{className:"mt-5 col-11 col-md-5 offset-1 offset-md-5",children:[Object(v.jsx)("h2",{className:"mt-5 mb-5",children:" Sign In "}),Object(v.jsxs)("form",{onSubmit:n,children:[Object(v.jsxs)("div",{className:"form-group",children:[Object(v.jsx)("label",{htmlFor:"InputEmail",children:" Email address "}),Object(v.jsx)("input",{type:"email",className:"form-control",id:"InputEmail",name:"email"})]}),Object(v.jsxs)("div",{className:"form-group",children:[Object(v.jsx)("label",{htmlFor:"InputPassword",children:" Password "}),Object(v.jsx)("input",{name:"password",type:"password",className:"form-control",id:"InputPassword"})]}),t?Object(v.jsxs)("p",{style:{color:"red"},children:[" ",t," "]}):null,Object(v.jsx)("button",{type:"submit",className:"btn btn-primary mt-4 btn-outline-dark",children:" Sign in "})]})]})})}}]),n}(a.Component),I=function(e){Object(j.a)(n,e);var t=Object(u.a)(n);function n(){return Object(l.a)(this,n),t.apply(this,arguments)}return Object(d.a)(n,[{key:"componentDidMount",value:function(){this.props.onLogOut()}},{key:"render",value:function(){return Object(v.jsx)("div",{})}}]),n}(a.Component),q=function(e){Object(j.a)(n,e);var t=Object(u.a)(n);function n(){return Object(l.a)(this,n),t.apply(this,arguments)}return Object(d.a)(n,[{key:"componentDidMount",value:function(){this.props.onResetError()}},{key:"render",value:function(){var e=this.props,t=e.user,n=e.error,a=e.onCreatePlant;return t?Object(v.jsx)("div",{className:"container row mt-5 fullscreen",children:Object(v.jsxs)("div",{className:"mt-5 col-11 col-md-5 offset-1 offset-md-6",children:[Object(v.jsx)("h2",{className:"mt-5 mb-5",children:" Create a plant "}),Object(v.jsxs)("form",{onSubmit:a,children:[Object(v.jsx)("input",{className:"mb-4",name:"name",type:"text",placeholder:"Enter name"}),Object(v.jsx)("input",{className:"mb-4",name:"description",type:"text",placeholder:"Enter description"}),Object(v.jsx)("input",{className:"mb-4 smallWidth",name:"size",type:"number",min:"1",placeholder:"Size"})," cm ",Object(v.jsx)("br",{}),Object(v.jsxs)("select",{className:"mb-4 p-1",name:"location",type:"text",children:[Object(v.jsx)("option",{children:" Select location "}),Object(v.jsx)("option",{value:"sun",children:" sun "}),Object(v.jsx)("option",{value:"shade",children:" shade "}),Object(v.jsx)("option",{value:"sun and shade",children:" sun and shade "})]}),Object(v.jsx)("br",{}),Object(v.jsx)("input",{className:"mb-4 smallWidth",name:"price",type:"number",min:"1",placeholder:"Price"})," \u20ac ",Object(v.jsx)("br",{}),Object(v.jsx)("input",{className:"mb-4",name:"plantImage",type:"file"}),n?Object(v.jsxs)("p",{style:{color:"red"},children:[" ",n," "]}):null,Object(v.jsxs)("div",{className:"col-12",children:[Object(v.jsx)("button",{className:"btn btn-sm btn-outline-dark",type:"submit",children:" Create "}),Object(v.jsx)(f.b,{to:"/",children:Object(v.jsx)("button",{className:"btn btn-sm mx-5",children:" Go back "})})]})]})]})}):Object(v.jsx)(b.a,{to:"/signup"})}}]),n}(a.Component),D=function(e){Object(j.a)(n,e);var t=Object(u.a)(n);function n(){return Object(l.a)(this,n),t.apply(this,arguments)}return Object(d.a)(n,[{key:"render",value:function(){var e=this.props,t=e.plant,n=e.onNameChange,a=e.onDescriptionChange,c=e.onSizeChange,s=e.onPriceChange,r=e.onLocationChange,i=e.onImageChange,o=e.onUpdatePlant,l=t._id,d=t.name,j=t.description,u=t.size,b=t.image,h=t.price;return Object(v.jsx)("div",{className:"container row mt-5 ",children:Object(v.jsxs)("div",{className:"mt-2 col-11 col-md-5 offset-1 offset-md-5",children:[Object(v.jsx)("h2",{className:"mt-5 mb-4",children:" Update your plant "}),Object(v.jsxs)("div",{className:"card cardSmallWidth mb-5",children:[Object(v.jsx)("img",{className:"mb-2 smallPicSize",src:b,alt:d}),Object(v.jsxs)("div",{className:"card-body",children:[Object(v.jsx)("input",{className:"mb-2",onChange:i,type:"file"}),Object(v.jsx)("input",{className:"mb-2",type:"text",onChange:n,value:d}),Object(v.jsx)("input",{className:"mb-2",type:"text",onChange:a,value:j}),Object(v.jsx)("input",{className:"mb-2 smallWidth",type:"number",onChange:c,value:u})," cm ",Object(v.jsx)("br",{}),Object(v.jsxs)("select",{className:"mb-2",onChange:r,name:"location",type:"text",placeholder:"Select",children:[Object(v.jsx)("option",{value:"sun",children:" sun "}),Object(v.jsx)("option",{value:"shade",children:" shade "}),Object(v.jsx)("option",{value:"sun and shade",children:" sun and shade "})]})," ",Object(v.jsx)("br",{}),Object(v.jsx)("input",{className:"mb-4 smallWidth",name:"price",type:"number",min:"1",onChange:s,value:h})," \u20ac",Object(v.jsxs)("div",{className:"row justify-content-around",children:[Object(v.jsx)("button",{className:"btn btn-sm btn-outline-dark",onClick:function(){return o(t)},children:" Save changes "}),Object(v.jsx)(f.b,{to:"/plants/read/".concat(l),children:Object(v.jsx)("button",{className:"btn btn-sm mx-2",children:" Go back "})})]})]})]})]})})}}]),n}(a.Component),U=function(e){Object(j.a)(n,e);var t=Object(u.a)(n);function n(){return Object(l.a)(this,n),t.apply(this,arguments)}return Object(d.a)(n,[{key:"componentDidMount",value:function(){var e=this.props.match.params.plantId;this.props.onReadPlant(e)}},{key:"render",value:function(){var e=this.props,t=e.user,n=e.plant,a=e.onDeletePlant;if(!t)return Object(v.jsx)(b.a,{to:"/signup"});var c=n._id,s=n.name,r=n.description,i=n.size,o=n.image,l=n.location,d=n.price,j=n.creator;return j?Object(v.jsxs)("div",{className:"container mt-5 row row-md-10 offset-md-4",children:[Object(v.jsx)("div",{className:"mt-4 mb-3 pt-4 container",children:Object(v.jsx)("h2",{children:" Plant details "})}),Object(v.jsx)("div",{className:"col",children:Object(v.jsxs)("div",{className:"card cardMediumWidth",children:[o?Object(v.jsx)("img",{className:"card-img-top mediumPicSize",src:o,alt:s}):null,Object(v.jsxs)("div",{className:"ml-2 mt-2",children:[" ",Object(v.jsx)("span",{children:" Name: "})," ",s," "]}),Object(v.jsxs)("div",{className:"ml-2 mt-2",children:[" ",Object(v.jsx)("span",{children:" Description: "})," ",r," "]}),Object(v.jsxs)("div",{className:"ml-2 mt-2",children:[" ",Object(v.jsx)("span",{children:" Size: "})," ",i," cm "]}),Object(v.jsxs)("div",{className:"ml-2 mt-2",children:[" ",Object(v.jsx)("span",{children:" Likes: "})," ",l," "]}),Object(v.jsxs)("div",{className:"ml-2 mt-2",children:[" ",Object(v.jsx)("span",{children:" Price: "})," ",d," \u20ac "]}),Object(v.jsx)("div",{className:"ml-2 mt-2 col justify-content-center",children:Object(v.jsx)("div",{className:"row-2 justify-content-center",children:Object(v.jsxs)("div",{className:"card-body",children:[t._id===j._id?Object(v.jsxs)("div",{children:[Object(v.jsxs)(f.b,{to:"/plants/update",children:[" ",Object(v.jsx)("button",{className:"btn btn-sm ml-2 btn-outline-dark",children:" Update "})," "]}),Object(v.jsx)("button",{className:"btn btn-sm ml-2 btn-outline-dark",onClick:function(){return a(c)},children:" Delete "})]}):Object(v.jsxs)("div",{children:[Object(v.jsx)(f.b,{to:{pathname:"/plants/checkout/".concat(c),plant:n},children:Object(v.jsx)("button",{className:"btn btn-sm ml-2 btn-outline-dark",children:" Buy "})}),Object(v.jsx)(f.b,{to:{pathname:"/requests/create",plant:n},children:Object(v.jsx)("button",{className:"btn btn-sm ml-2 btn-outline-dark",children:" Swap "})})]}),Object(v.jsx)(f.b,{to:"/",children:Object(v.jsx)("button",{className:"btn btn-sm ml-2",children:" Go back "})})]})})})]})})]}):Object(v.jsx)("div",{class:"spinner-grow text-success m-5",role:"status",children:Object(v.jsx)("span",{class:"visually-hidden",children:" Loading... "})})}}]),n}(a.Component),E=n(50),z=n(22),R=n(26),_=n.n(R),F=n(36),J=n(24),L=function(e){var t=Object(a.useState)(!1),n=Object(J.a)(t,2),c=n[0],s=n[1],r=Object(a.useState)(null),i=Object(J.a)(r,2),o=i[0],l=i[1],d=Object(a.useState)(""),j=Object(J.a)(d,2),u=j[0],b=j[1],p=Object(a.useState)(!0),m=Object(J.a)(p,2),O=m[0],x=m[1],g=Object(a.useState)(""),N=Object(J.a)(g,2),y=N[0],S=N[1],C=Object(z.useStripe)(),w=Object(z.useElements)(),k=e.plant,P=e.onCheckout;Object(a.useEffect)((function(){window.fetch("".concat(h,"/api/create-payment-intent"),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({price:k.price})}).then((function(e){return e.json()})).then((function(e){S(e.clientSecret)}))}),[k.price]);var I=function(){var e=Object(F.a)(_.a.mark((function e(t){return _.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:x(t.empty),l(t.error?t.error.message:"");case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),q=function(){var e=Object(F.a)(_.a.mark((function e(t){var n;return _.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),b(!0),e.next=4,C.confirmCardPayment(y,{payment_method:{card:w.getElement(z.CardElement)}});case 4:(n=e.sent).error?(l("Payment failed ".concat(n.error.message)),b(!1)):(l(null),b(!1),s(!0));case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),D=k._id,U=k.name,E=k.price;return Object(v.jsxs)("div",{className:"container col-9",children:[Object(v.jsxs)("form",{className:"checkoutForm pt-5 mt-5",id:"payment-form",onSubmit:q,children:[Object(v.jsxs)("h2",{className:"text-center mb-2 p-2",children:["  ",U," "]}),Object(v.jsxs)("h3",{className:"text-center mb-4 p-2",children:[" ",E," \u20ac "]}),Object(v.jsx)(z.CardElement,{className:"p-2",id:"card-element",options:{style:{base:{color:"#32325d",fontFamily:"Arial, sans-serif",fontSmoothing:"antialiased",fontSize:"16px","::placeholder":{color:"#32325d"}},invalid:{color:"#fa755a",iconColor:"#fa755a"}}},onChange:I}),Object(v.jsx)("div",{className:"row justify-content-center",children:Object(v.jsx)("button",{onClick:P,className:"btn btn-sm mt-5 mb-4",disabled:u||O||c,id:"submit",children:Object(v.jsx)("span",{id:"button-text",children:u?Object(v.jsx)("div",{className:"spinner",id:"spinner"}):"Pay now"})})}),o&&Object(v.jsxs)("div",{className:"card-error",role:"alert",children:[" ",o," "]}),Object(v.jsx)("p",{className:c?"result-message text-center":"result-message hidden text-center",children:"Payment succeeded."})]}),Object(v.jsx)("div",{className:"row justify-content-center",children:c?Object(v.jsx)(f.b,{to:"/",children:Object(v.jsx)("button",{className:"btn btn-sm",children:" Go back "})}):Object(v.jsx)(f.b,{to:"/plants/read/".concat(D),children:Object(v.jsx)("button",{className:"btn btn-sm",children:" Go back "})})})]})},A=Object(E.a)("pk_test_51IQBsPA6EAM4YnfDyrjHWnLHzZ5KkI9tsERzYhBGVoctZBrFUb4Sda035HvcQKpp7thFiqW6QmO8ytPbOAMTg33z00cHvcbojv"),M=function(e){Object(j.a)(n,e);var t=Object(u.a)(n);function n(){return Object(l.a)(this,n),t.apply(this,arguments)}return Object(d.a)(n,[{key:"render",value:function(){var e=this.props.location.plant;return Object(v.jsx)("div",{className:"container row mt-5",children:Object(v.jsx)("div",{className:"mt-5 col-11 col-md-6 offset-1 offset-md-5 App",children:Object(v.jsx)(z.Elements,{stripe:A,children:Object(v.jsx)(L,{onCheckout:this.props.onCheckout,plant:e})})})})}}]),n}(a.Component),W=function(e){Object(j.a)(n,e);var t=Object(u.a)(n);function n(){return Object(l.a)(this,n),t.apply(this,arguments)}return Object(d.a)(n,[{key:"componentDidMount",value:function(){this.props.onResetError()}},{key:"render",value:function(){var e=this.props,t=e.error,n=e.onCreateRequest,a=this.props.location.plant;return Object(v.jsx)("div",{className:"container row mt-5",children:Object(v.jsxs)("div",{className:"mt-5 col-11 col-md-5 offset-1 offset-md-5",children:[Object(v.jsx)("h2",{className:"mt-5 mb-5",children:" Your mesage "}),Object(v.jsxs)("form",{onSubmit:function(e){return n(e,a)},children:[Object(v.jsx)("div",{children:Object(v.jsx)("textarea",{className:"mb-4",name:"message",cols:"35",rows:"4"})}),t?Object(v.jsxs)("p",{style:{color:"red"},children:[" ",t," "]}):null,Object(v.jsx)("button",{className:"btn btn-sm btn-outline-dark",type:"submit",children:" Send "}),Object(v.jsx)(f.b,{to:"/plants/read/".concat(a._id),children:Object(v.jsx)("button",{className:"btn btn-sm mx-2",children:" Go back "})})]})]})})}}]),n}(a.Component),G=function(e){Object(j.a)(n,e);var t=Object(u.a)(n);function n(){return Object(l.a)(this,n),t.apply(this,arguments)}return Object(d.a)(n,[{key:"componentDidMount",value:function(){this.props.onFetchAllRequests()}},{key:"render",value:function(){var e=this.props,t=e.user,n=e.requests;return t?n?Object(v.jsx)("div",{className:"container row mt-5",children:Object(v.jsxs)("div",{className:"mt-5 col-11 col-md-5 offset-1 offset-md-5",children:[Object(v.jsx)("h2",{className:"mt-5 mb-5",children:" Your messages "}),n.map((function(e){var n=e._id,a=e.buyer,c=e.seller,s=e.plant,r=e.message;return c._id===t._id?Object(v.jsxs)("div",{className:"card p-3 mt-4 ",children:[Object(v.jsxs)("h4",{children:[" Request for: ",s.name," "]}),Object(v.jsxs)("h5",{children:[" User: ",a.username," "]}),Object(v.jsxs)("p",{children:[" ",r," "]})]},n):null})),Object(v.jsx)(f.b,{to:"/",children:Object(v.jsx)("button",{className:"btn btn-sm mt-4",children:" Go back "})})]})}):Object(v.jsx)("div",{}):Object(v.jsx)(b.a,{to:"/signup"})}}]),n}(a.Component),T=function(e){Object(j.a)(n,e);var t=Object(u.a)(n);function n(){return Object(l.a)(this,n),t.apply(this,arguments)}return Object(d.a)(n,[{key:"render",value:function(){return Object(v.jsx)("div",{className:"notFound",children:Object(v.jsxs)("div",{children:[Object(v.jsxs)("h2",{children:["Oh-oh! ",Object(v.jsx)("br",{})," ",Object(v.jsx)("br",{}),"We think you got lost in the jungle!"]}),Object(v.jsx)("h3",{children:" 404 Not Found "}),Object(v.jsx)(f.b,{to:"/",children:Object(v.jsx)("button",{className:"btn btn-sm ml-2",children:" Take me home "})})]})})}}]),n}(a.Component),B=function(e){Object(j.a)(n,e);var t=Object(u.a)(n);function n(){return Object(l.a)(this,n),t.apply(this,arguments)}return Object(d.a)(n,[{key:"componentDidMount",value:function(){!function(e,t){var n=document.createElement("script");n.type="text/javascript",n.async=!0,n.src="https://widget.kommunicate.io/v2/kommunicate.app",document.getElementsByTagName("head")[0].appendChild(n),window.kommunicate=t,t._globals={appId:"10b22c52854a305b79bbdecc356bea5",popupWidget:!0,automaticChatOpenOnNavigation:!0}}(document,window.kommunicate||{})}},{key:"render",value:function(){return Object(v.jsx)("div",{})}}]),n}(a.Component),H=function(e){Object(j.a)(n,e);var t=Object(u.a)(n);function n(){var e;Object(l.a)(this,n);for(var a=arguments.length,c=new Array(a),s=0;s<a;s++)c[s]=arguments[s];return(e=t.call.apply(t,[this].concat(c))).state={loggedInUser:null,error:null,plants:[],query:"",plant:{},requests:[],fetchingUser:!0},e.fetchAllPlants=function(){m.a.get("".concat(h,"/api/plants/fetch")).then((function(t){return e.setState({plants:t.data})})).catch((function(e){return console.log("Fetching plants failed",e)}))},e.fetchQueryPlants=function(){m.a.get("".concat(h,"/api/plants/search?q=").concat(e.state.query)).then((function(t){return e.setState({plants:t.data,ready:!0})})).catch((function(e){return console.log("Query fetching failed",e)}))},e.handleSearchPlant=function(t){var n=t.target.value;e.setState({query:n},(function(){return n?e.fetchQueryPlants():e.fetchAllPlants()}))},e.resetError=function(){return e.setState({error:null})},e.handleSignUp=function(t){t.preventDefault();var n=t.target,a=n.username,c=n.email,s=n.password,r={username:a.value,email:c.value.toLowerCase(),password:s.value};m.a.post("".concat(h,"/api/signup"),r).then((function(t){return e.setState({loggedInUser:t.data},(function(){return e.props.history.push("/")}))})).catch((function(t){return e.setState({error:t.response.data.error})}))},e.handleSignIn=function(t){t.preventDefault();var n=t.target,a=n.email,c=n.password,s={email:a.value,password:c.value};m.a.post("".concat(h,"/api/signin"),s,{withCredentials:!0}).then((function(t){return e.setState({loggedInUser:t.data},(function(){return e.props.history.push("/")}))})).catch((function(t){return e.setState({error:t.response.data.error})}))},e.handleLogOut=function(){m.a.post("".concat(h,"/api/logout"),{},{withCredentials:!0}).then((function(){return e.setState({loggedInUser:null},(function(){return e.props.history.push("/")}))})).catch((function(e){return console.log("Logout failed",e)}))},e.handleCreatePlant=function(t){t.preventDefault();var n=t.target,a=n.name,c=n.description,s=n.size,r=n.plantImage,i=n.location,l=n.price,d=r.files[0],j=new FormData;j.append("image",d),m.a.post("".concat(h,"/api/upload"),j).then((function(t){var n={name:a.value,description:c.value,size:s.value,image:t.data.image,location:i.value,price:l.value};m.a.post("".concat(h,"/api/plants/create"),n,{withCredentials:!0}).then((function(t){return e.setState({plants:[t.data].concat(Object(o.a)(e.state.plants))},(function(){return e.props.history.push("/")}))})).catch((function(t){return e.setState({error:t.response.data.error})}))})).catch((function(e){return console.log("Image upload failed",e)}))},e.handleReadPlant=function(t){m.a.get("".concat(h,"/api/plants/read/").concat(t),{withCredentials:!0}).then((function(t){return e.setState({plant:t.data})})).catch((function(){return console.log("Read plant failed")}))},e.handleNameChange=function(t){var n=JSON.parse(JSON.stringify(e.state.plant));n.name=t.target.value,e.setState({plant:n})},e.handleDescriptionChange=function(t){var n=JSON.parse(JSON.stringify(e.state.plant));n.description=t.target.value,e.setState({plant:n})},e.handleSizeChange=function(t){var n=JSON.parse(JSON.stringify(e.state.plant));n.size=t.target.value,e.setState({plant:n})},e.handlePriceChange=function(t){var n=JSON.parse(JSON.stringify(e.state.plant));n.price=t.target.value,e.setState({plant:n})},e.handleLocationChange=function(t){var n=JSON.parse(JSON.stringify(e.state.plant));n.location=t.target.value,e.setState({plant:n})},e.handleImageChange=function(t){var n=t.target.files[0],a=new FormData;a.append("image",n),m.a.post("".concat(h,"/api/upload"),a).then((function(t){var n=JSON.parse(JSON.stringify(e.state.plant));n.image=t.data.image,e.setState({plant:n})})).catch((function(e){return console.log("Image upload failed",e)}))},e.handleUpdatePlant=function(t){var n=t._id,a=t.name,c=t.description,s=t.size,r=t.image,i=t.location,o=t.price,l={name:a,description:c,size:s,image:r,location:i,price:o};m.a.patch("".concat(h,"/api/plants/update/").concat(n),l).then((function(){var t=e.state.plants.map((function(e){return n===e._id&&(e.name=a,e.description=c,e.size=s,e.image=r,e.location=i,e.price=o),e}));e.setState({plants:t},(function(){return e.props.history.push("/")}))})).catch((function(e){return console.log("Update plant failed",e)}))},e.handleDeletePlant=function(t){m.a.delete("".concat(h,"/api/plants/delete/").concat(t)).then((function(){var n=e.state.plants.filter((function(e){return e._id!==t}));e.setState({plants:n},(function(){return e.props.history.push("/")}))})).catch((function(e){return console.log("Delete plant failed",e)}))},e.handleCheckout=function(t){m.a.post("".concat(h,"/api/create-payment-intent"),{},{withCredentials:!0}).then((function(){return e.setState((function(){return e.props.history.push("/")}))})).catch((function(e){return console.log("Checkout failed",e)}))},e.handleFetchAllRequests=function(){m.a.get("".concat(h,"/api/requests/fetch")).then((function(t){return e.setState({requests:t.data})})).catch((function(e){return console.log("Fetching requests failed",e)}))},e.handleCreateRequest=function(t,n){t.preventDefault();var a=t.target.message,c={seller:n.creator._id,plant:n,message:a.value};m.a.post("".concat(h,"/api/requests/create"),c,{withCredentials:!0}).then((function(t){return e.setState({requests:[t.data].concat(Object(o.a)(e.state.requests))},(function(){return e.props.history.push("/plants/read/".concat(n._id))}))})).catch((function(t){return e.setState({error:t.response.data.error})}))},e}return Object(d.a)(n,[{key:"componentDidMount",value:function(){var e=this;this.fetchAllPlants(),this.state.loggedInUser||m.a.get("".concat(h,"/api/user"),{withCredentials:!0}).then((function(t){return e.setState({loggedInUser:t.data,fetchingUser:!1})})).catch((function(t){e.setState({fetchingUser:!1}),console.log("Initializing fetching failed",t)}))}},{key:"render",value:function(){var e=this,t=this.state,n=t.loggedInUser,a=t.error,c=t.plants,s=t.query,r=t.plant,o=t.requests;return t.fetchingUser?Object(v.jsx)("div",{class:"spinner-grow text-success m-5",role:"status",children:Object(v.jsx)("span",{class:"visually-hidden",children:" Loading... "})}):Object(v.jsxs)("div",{class:"main",children:[Object(v.jsx)(N,{onLogOut:this.handleLogOut,user:n}),Object(v.jsxs)(b.d,{children:[Object(v.jsx)(b.b,{exact:!0,path:"/",render:function(){return Object(v.jsx)(w,{onSearchPlant:e.handleSearchPlant,plants:c,query:s})}}),Object(v.jsx)(b.b,{path:"/signup",render:function(t){return Object(v.jsx)(k,Object(i.a)({onSignUp:e.handleSignUp,onResetError:e.resetError,error:a},t))}}),Object(v.jsx)(b.b,{path:"/signin",render:function(t){return Object(v.jsx)(P,Object(i.a)({onSignIn:e.handleSignIn,onResetError:e.resetError,error:a},t))}}),Object(v.jsx)(b.b,{path:"/logout",render:function(t){return Object(v.jsx)(I,Object(i.a)({onLogOut:e.handleLogOut},t))}}),Object(v.jsx)(b.b,{path:"/plants/create",render:function(){return Object(v.jsx)(q,{onCreatePlant:e.handleCreatePlant,user:n,error:a})}}),Object(v.jsx)(b.b,{path:"/plants/read/:plantId",render:function(t){return Object(v.jsx)(U,Object(i.a)({onReadPlant:e.handleReadPlant,onDeletePlant:e.handleDeletePlant,plant:r,user:n},t))}}),Object(v.jsx)(b.b,{path:"/plants/update",render:function(t){return Object(v.jsx)(D,Object(i.a)({onNameChange:e.handleNameChange,onDescriptionChange:e.handleDescriptionChange,onSizeChange:e.handleSizeChange,onPriceChange:e.handlePriceChange,onLocationChange:e.handleLocationChange,onImageChange:e.handleImageChange,onUpdatePlant:e.handleUpdatePlant,plant:r},t))}}),Object(v.jsx)(b.b,{path:"/plants/checkout/:plantId",render:function(t){return Object(v.jsx)(M,Object(i.a)({onCheckout:e.handleCheckout},t))}}),Object(v.jsx)(b.b,{path:"/requests/fetch",render:function(t){return Object(v.jsx)(G,Object(i.a)({onFetchAllRequests:e.handleFetchAllRequests,user:n,requests:o},t))}}),Object(v.jsx)(b.b,{path:"/requests/create",render:function(t){return Object(v.jsx)(W,Object(i.a)({onCreateRequest:e.handleCreateRequest,user:n,error:a},t))}}),Object(v.jsx)(b.b,{component:T})]}),Object(v.jsx)(B,{}),Object(v.jsx)(y,{})]})}}]),n}(a.Component),Q=Object(b.g)(H);r.a.render(Object(v.jsx)(c.a.StrictMode,{children:Object(v.jsx)(f.a,{children:Object(v.jsx)(Q,{})})}),document.querySelector("#root"))}},[[86,1,2]]]);
//# sourceMappingURL=main.6f89b6c0.chunk.js.map
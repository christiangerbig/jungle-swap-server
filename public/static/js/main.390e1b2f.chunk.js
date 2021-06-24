(this["webpackJsonpjungle-swap-client"]=this["webpackJsonpjungle-swap-client"]||[]).push([[0],{55:function(e,t,n){},63:function(e,t,n){},86:function(e,t,n){"use strict";n.r(t);var a=n(1),c=n.n(a),s=n(21),r=n.n(s),i=(n(55),n(18)),o=n(37),l=n(5),d=n(6),j=n(8),u=n(7),b=n(0),p=function(e){Object(j.a)(n,e);var t=Object(u.a)(n);function n(){return Object(l.a)(this,n),t.apply(this,arguments)}return Object(d.a)(n,[{key:"componentDidMount",value:function(){this.props.onResetError()}},{key:"render",value:function(){return Object(b.jsx)("div",{className:"container row mt-5 custom fullscreen",children:Object(b.jsxs)("div",{className:"mt-5 col-11 col-md-5 offset-1 offset-md-5",children:[Object(b.jsx)("h2",{className:"mt-5 mb-5",children:" Sign In "}),Object(b.jsxs)("form",{onSubmit:this.props.onSignIn,children:[Object(b.jsxs)("div",{className:"form-group",children:[Object(b.jsx)("label",{htmlFor:"InputEmail",children:" Email address "}),Object(b.jsx)("input",{type:"email",className:"form-control",id:"InputEmail",name:"email"})]}),Object(b.jsxs)("div",{className:"form-group",children:[Object(b.jsx)("label",{htmlFor:"InputPassword",children:" Password "}),Object(b.jsx)("input",{name:"password",type:"password",className:"form-control",id:"InputPassword"})]}),this.props.error?Object(b.jsxs)("p",{style:{color:"red"},children:[" ",this.props.error," "]}):null,Object(b.jsx)("button",{type:"submit",className:"btn btn-primary mt-4 btn-outline-dark",children:" Sign in "})]})]})})}}]),n}(a.Component),h=n(4),m=function(e){Object(j.a)(n,e);var t=Object(u.a)(n);function n(){return Object(l.a)(this,n),t.apply(this,arguments)}return Object(d.a)(n,[{key:"componentDidMount",value:function(){this.props.onResetError()}},{key:"render",value:function(){return Object(b.jsx)("div",{className:"container row mt-5",children:Object(b.jsxs)("div",{className:"mt-5 col-11 col-md-5 offset-1 offset-md-5",children:[Object(b.jsx)("h2",{className:"mt-5 mb-5",children:"Sign Up"}),Object(b.jsxs)("form",{onSubmit:this.props.onSignUp,children:[Object(b.jsxs)("div",{className:"form-group",children:[Object(b.jsx)("label",{htmlFor:"InputUsername",children:" Username "}),Object(b.jsx)("input",{type:"text",className:"form-control",id:"InputUsername",name:"username"})]}),Object(b.jsxs)("div",{className:"form-group",children:[Object(b.jsx)("label",{htmlFor:"InputEmail",children:" Email address "}),Object(b.jsx)("input",{type:"email",className:"form-control",id:"InputEmail",name:"email"})]}),Object(b.jsxs)("div",{className:"form-group",children:[Object(b.jsx)("label",{htmlFor:"InputPassword",children:" Password "}),Object(b.jsx)("input",{name:"password",type:"password",className:"form-control",id:"InputPassword"})]}),this.props.error?Object(b.jsxs)("p",{style:{color:"red"},children:[" ",this.props.error," "]}):null,Object(b.jsx)("button",{type:"submit",className:"btn btn-primary mt-4 btn-outline-dark",children:" Sign up "}),Object(b.jsx)("p",{className:"padding",children:" Already have an account? "}),Object(b.jsx)(h.b,{to:"/signin",children:" Sign in "})]})]})})}}]),n}(a.Component),O=(n(62),n(63),n(9)),f="https://jungleswap.herokuapp.com",x=n(10),g=n.n(x),v=n(28),y=n.p+"static/media/JungleSwap_Home.c4ed9b4c.png",N=n.p+"static/media/JungleSwap_Icon.a6c7c44a.png",S=function(e){Object(j.a)(n,e);var t=Object(u.a)(n);function n(){return Object(l.a)(this,n),t.apply(this,arguments)}return Object(d.a)(n,[{key:"render",value:function(){var e=this.props,t=e.plants,n=e.query;return Object(b.jsxs)("div",{children:[Object(b.jsx)("header",{className:"text-center pt-5 pb-5 headerImg",children:Object(b.jsx)("div",{className:"row my-5",children:Object(b.jsxs)("div",{className:"col-6 offset-3 my-5 borderAround",children:[Object(b.jsx)("h2",{className:"title mb-2",children:" JungleSwap "}),Object(b.jsx)("h5",{className:"mt-3 mb-5",children:" Share your green heart "}),Object(b.jsx)("div",{className:"mb-5",children:Object(b.jsx)(v.ScrollTo,{children:function(e){var t=e.scroll;return Object(b.jsx)(h.b,{className:"biggerFontSize",onClick:function(){return t({y:800,smooth:!0})},children:" Try it! "})}})})]})})}),Object(b.jsx)("div",{className:"intro",children:Object(b.jsx)("div",{className:"intro-centered container",children:Object(b.jsxs)("div",{className:"row",children:[Object(b.jsx)("div",{className:"col-sm-6 col-md-5 col-lg-6",children:Object(b.jsx)("img",{className:"image",src:y,alt:""})}),Object(b.jsx)("br",{}),Object(b.jsxs)("div",{className:"intro col-sm-6 col-md-5 col-lg-6 px-5",children:[Object(b.jsx)("h4",{children:" Welcome to JungleSwap! "}),Object(b.jsx)("h5",{children:" Add green to your Home "}),Object(b.jsxs)("p",{children:[' It"s easy-peasy. ',Object(b.jsx)("br",{}),"Share your plant offshoots. ",Object(b.jsx)("br",{}),"Make money! ",Object(b.jsx)("br",{}),"Or swap them for another plant. ",Object(b.jsx)("br",{}),'Don"t have any baby plants? ',Object(b.jsx)("br",{}),"You can simply shop and give a plant a new home."]}),Object(b.jsx)("img",{className:"icon",src:N,alt:"icon"})]})]})})}),Object(b.jsxs)("div",{className:"container mt-5",children:[Object(b.jsxs)("div",{className:"mt-4 mb-3 pt-5",children:[Object(b.jsx)("h2",{children:" Plants "}),Object(b.jsx)("hr",{}),Object(b.jsx)("h4",{children:" Search a plant "})]}),Object(b.jsx)("div",{className:"mb-4",children:Object(b.jsx)("input",{className:"smallWidth form-control",type:"text",placeholder:"Search...",value:n,onChange:this.props.onSearch})}),Object(b.jsx)("div",{className:"row row-cols-1 row-cols-md-3 g-4",children:t.map((function(e){return Object(b.jsx)("div",{className:"col mb-5",children:Object(b.jsxs)("div",{className:"card card-medium-width text-center",children:[Object(b.jsx)("img",{className:"card-img-top mediumPicSize",src:e.image,alt:e.name}),Object(b.jsxs)("div",{className:"card-body mb-5",children:[Object(b.jsxs)("h5",{children:[" ",e.name," "]}),Object(b.jsxs)("p",{children:[" ",e.price," \u20ac "]}),Object(b.jsx)(h.b,{className:"btn btn-outline-dark",to:"/plants/".concat(e._id),children:" Details "})]})]})},e._id)}))})]})]})}}]),n}(a.Component),w=n(89),k=n(90),C=function(e){Object(j.a)(n,e);var t=Object(u.a)(n);function n(){return Object(l.a)(this,n),t.apply(this,arguments)}return Object(d.a)(n,[{key:"render",value:function(){return Object(b.jsx)("div",{children:Object(b.jsxs)(w.a,{className:"pl-5",variant:"dark",expand:"lg",fixed:"top",children:[Object(b.jsx)(w.a.Brand,{href:"/",children:" JungleSwap "}),Object(b.jsx)(w.a.Toggle,{"aria-controls":"basic-navbar-nav"}),Object(b.jsx)(w.a.Collapse,{id:"basic-navbar-nav",children:Object(b.jsxs)(k.a,{className:"mr-auto",children:[Object(b.jsx)(v.ScrollTo,{children:function(e){var t=e.scroll;return Object(b.jsx)("div",{children:Object(b.jsx)(h.b,{to:"/",className:"p-2",onClick:function(){return t({y:1700,smooth:!0})},children:" All Plants "})})}}),this.props.user?Object(b.jsxs)("div",{children:[Object(b.jsx)(h.b,{className:"p-2",to:"/add-form",children:" Add Plant "}),Object(b.jsx)(h.b,{className:"p-2",to:"/myrequests",children:" Messages "})]}):null,this.props.user?Object(b.jsx)("div",{children:Object(b.jsx)(h.b,{className:"p-2",to:"/logout",children:" Log out "})}):Object(b.jsxs)("div",{children:[Object(b.jsx)(h.b,{className:"p-2",to:"/signin",children:" Sign in "}),Object(b.jsx)(h.b,{className:"p-2",to:"/signup",children:" Sign up "})]})]})})]})})}}]),n}(a.Component),I=function(e){Object(j.a)(n,e);var t=Object(u.a)(n);function n(){return Object(l.a)(this,n),t.apply(this,arguments)}return Object(d.a)(n,[{key:"render",value:function(){return Object(b.jsx)("div",{className:"footer-row",children:Object(b.jsxs)("footer",{children:[" \xa9 2021 ",Object(b.jsx)("a",{href:"https://www.linkedin.com/in/christian-gerbig/",children:" Christian Gerbig "})," & ",Object(b.jsx)("a",{href:"https://www.linkedin.com/in/lisa-montebaur/",children:"Lisa Montebaur"})]})})}}]),n}(a.Component),P=function(e){Object(j.a)(n,e);var t=Object(u.a)(n);function n(){return Object(l.a)(this,n),t.apply(this,arguments)}return Object(d.a)(n,[{key:"render",value:function(){return this.props.user?Object(b.jsx)("div",{className:"container row mt-5 fullscreen",children:Object(b.jsxs)("div",{className:"mt-5 col-11 col-md-5 offset-1 offset-md-6",children:[Object(b.jsx)("h2",{className:"mt-5 mb-5",children:" Upload a plant "}),Object(b.jsxs)("form",{onSubmit:this.props.onAdd,children:[Object(b.jsx)("input",{className:"mb-4",name:"name",type:"text",placeholder:"Enter name"}),Object(b.jsx)("input",{className:"mb-4",name:"description",type:"text",placeholder:"Enter description"}),Object(b.jsx)("input",{className:"mb-4 smallWidth",name:"size",type:"number",min:"1",placeholder:"Size"})," cm ",Object(b.jsx)("br",{}),Object(b.jsxs)("select",{className:"mb-4 p-1",name:"location",type:"text",children:[Object(b.jsx)("option",{children:" Select location "}),Object(b.jsx)("option",{value:"sun",children:" sun "}),Object(b.jsx)("option",{value:"shade",children:" shade "}),Object(b.jsx)("option",{value:"sun and shade",children:" sun and shade "})]}),Object(b.jsx)("br",{}),Object(b.jsx)("input",{className:"mb-4 smallWidth",name:"price",type:"number",min:"1",placeholder:"Price"})," \u20ac ",Object(b.jsx)("br",{}),Object(b.jsx)("input",{className:"mb-4",name:"plantImage",type:"file"}),Object(b.jsxs)("div",{className:"col-12",children:[Object(b.jsx)("button",{className:"btn btn-sm btn-outline-dark",type:"submit",children:" Add plant "}),Object(b.jsx)(h.b,{to:"/",children:Object(b.jsx)("button",{className:"btn btn-sm mx-5",children:" Go back "})})]})]})]})}):Object(b.jsx)(O.a,{to:"/signup"})}}]),n}(a.Component),q=function(e){Object(j.a)(n,e);var t=Object(u.a)(n);function n(){var e;Object(l.a)(this,n);for(var a=arguments.length,c=new Array(a),s=0;s<a;s++)c[s]=arguments[s];return(e=t.call.apply(t,[this].concat(c))).state={plant:{}},e.handleNameChange=function(t){var n=JSON.parse(JSON.stringify(e.state.plant));n.name=t.target.value,e.setState({plant:n})},e.handleDescriptionChange=function(t){var n=JSON.parse(JSON.stringify(e.state.plant));n.description=t.target.value,e.setState({plant:n})},e.handleSizeChange=function(t){var n=JSON.parse(JSON.stringify(e.state.plant));n.size=t.target.value,e.setState({plant:n})},e.handlePriceChange=function(t){var n=JSON.parse(JSON.stringify(e.state.plant));n.price=t.target.value,e.setState({plant:n})},e.handleLocationChange=function(t){var n=JSON.parse(JSON.stringify(e.state.plant));n.location=t.target.value,e.setState({plant:n})},e.handleImageChange=function(t){var n=t.target.files[0],a=new FormData;a.append("image",n),g.a.post("".concat(f,"/api/upload"),a).then((function(t){var n=JSON.parse(JSON.stringify(e.state.plant));n.image=t.data.image,e.setState({plant:n})})).catch((function(e){console.log("Image upload failed",e)}))},e}return Object(d.a)(n,[{key:"componentDidMount",value:function(){var e=this,t=this.props.match.params.plantId;g.a.get("".concat(f,"/api/plants/read/").concat(t)).then((function(t){e.setState({plant:t.data})})).catch((function(){console.log("Plant detail fetch failed")}))}},{key:"render",value:function(){var e=this.state.plant,t=this.props.onUpdatePlant,n=e._id,a=e.name,c=e.description,s=e.size,r=e.image,i=e.price;return Object(b.jsx)("div",{className:"container row mt-5 ",children:Object(b.jsxs)("div",{className:"mt-2 col-11 col-md-5 offset-1 offset-md-5",children:[Object(b.jsx)("h2",{className:"mt-5 mb-4",children:" Edit your plant "}),Object(b.jsxs)("div",{className:"card cardSmallWidth mb-5",children:[Object(b.jsx)("img",{className:"mb-2 smallPicSize",src:r,alt:a}),Object(b.jsxs)("div",{className:"card-body",children:[Object(b.jsx)("input",{className:"mb-2",onChange:this.handleImageChange,type:"file"}),Object(b.jsx)("input",{className:"mb-2",type:"text",onChange:this.handleNameChange,value:a}),Object(b.jsx)("input",{className:"mb-2",type:"text",onChange:this.handleDescriptionChange,value:c}),Object(b.jsx)("input",{className:"mb-2 smallWidth",type:"number",onChange:this.handleSizeChange,value:s})," cm ",Object(b.jsx)("br",{}),Object(b.jsxs)("select",{className:"mb-2",onChange:this.handleLocationChange,name:"location",type:"text",placeholder:"Select",children:[Object(b.jsx)("option",{value:"sun",children:" sun "}),Object(b.jsx)("option",{value:"shade",children:" shade "}),Object(b.jsx)("option",{value:"sun and shade",children:" sun and shade "})]})," ",Object(b.jsx)("br",{}),Object(b.jsx)("input",{className:"mb-4 smallWidth",name:"price",type:"number",min:"1",onChange:this.handlePriceChange,value:i})," \u20ac",Object(b.jsxs)("div",{className:"row justify-content-around",children:[Object(b.jsx)("button",{className:"btn btn-sm btn-outline-dark",onClick:function(){t(e)},children:" Save changes "}),Object(b.jsx)(h.b,{to:"/plants/".concat(n),children:Object(b.jsx)("button",{className:"btn btn-sm mx-2",children:" Go back "})})]})]})]})]})})}}]),n}(a.Component),D=function(e){Object(j.a)(n,e);var t=Object(u.a)(n);function n(){var e;Object(l.a)(this,n);for(var a=arguments.length,c=new Array(a),s=0;s<a;s++)c[s]=arguments[s];return(e=t.call.apply(t,[this].concat(c))).state={plant:{}},e}return Object(d.a)(n,[{key:"componentDidMount",value:function(){var e=this,t=this.props.match.params.plantId;g.a.get("".concat(f,"/api/plants/read/").concat(t),{withCredentials:!0}).then((function(t){e.setState({plant:t.data})})).catch((function(){console.log("Plant detail fetch failed")}))}},{key:"render",value:function(){var e=this.state.plant,t=this.props,n=t.user,a=t.onDelete,c=e._id,s=e.name,r=e.description,i=e.size,o=e.image,l=e.location,d=e.price,j=e.creator;return n?Object(b.jsxs)("div",{className:"container mt-5 row row-md-10 offset-md-4",children:[Object(b.jsx)("div",{className:"mt-4 mb-3 pt-4 container",children:Object(b.jsx)("h2",{children:" Plant details "})}),Object(b.jsx)("div",{className:"col",children:Object(b.jsxs)("div",{className:"card cardMediumWidth",children:[o?Object(b.jsx)("img",{className:"card-img-top mediumPicSize",src:o,alt:s}):null,Object(b.jsxs)("div",{className:"ml-2 mt-2",children:[" ",Object(b.jsx)("span",{children:" Name: "})," ",s," "]}),Object(b.jsxs)("div",{className:"ml-2 mt-2",children:[" ",Object(b.jsx)("span",{children:" Description: "})," ",r," "]}),Object(b.jsxs)("div",{className:"ml-2 mt-2",children:[" ",Object(b.jsx)("span",{children:" Size: "})," ",i," cm "]}),Object(b.jsxs)("div",{className:"ml-2 mt-2",children:[" ",Object(b.jsx)("span",{children:" Likes: "})," ",l," "]}),Object(b.jsxs)("div",{className:"ml-2 mt-2",children:[" ",Object(b.jsx)("span",{children:" Price: "})," ",d," \u20ac "]}),Object(b.jsx)("div",{className:"ml-2 mt-2 col justify-content-center",children:Object(b.jsx)("div",{className:"row-2 justify-content-center",children:Object(b.jsxs)("div",{className:"card-body",children:[n._id===j?Object(b.jsxs)("div",{children:[Object(b.jsxs)(h.b,{to:"/plant/".concat(e._id,"/edit"),children:[" ",Object(b.jsx)("button",{className:"btn btn-sm ml-2 btn-outline-dark",children:" Edit "})," "]}),Object(b.jsx)("button",{className:"btn btn-sm ml-2 btn-outline-dark",onClick:function(){return a(c)},children:" Delete "})]}):Object(b.jsxs)("div",{children:[Object(b.jsx)(h.b,{to:{pathname:"/plant/".concat(c,"/checkout"),plant:e},children:Object(b.jsx)("button",{className:"btn btn-sm ml-2 btn-outline-dark",children:" Buy "})}),Object(b.jsx)(h.b,{to:{pathname:"/request-form",plant:e},children:Object(b.jsx)("button",{className:"btn btn-sm ml-2 btn-outline-dark",children:" Swap "})})]}),Object(b.jsx)(h.b,{to:"/",children:Object(b.jsx)("button",{className:"btn btn-sm ml-2",children:" Go back "})})]})})})]})})]}):Object(b.jsx)(O.a,{to:"/signup"})}}]),n}(a.Component),E=n(50),U=n(22),z=n(26),J=n.n(z),M=n(36),_=n(24),A=function(e){var t=Object(a.useState)(!1),n=Object(_.a)(t,2),c=n[0],s=n[1],r=Object(a.useState)(null),i=Object(_.a)(r,2),o=i[0],l=i[1],d=Object(a.useState)(""),j=Object(_.a)(d,2),u=j[0],p=j[1],m=Object(a.useState)(!0),O=Object(_.a)(m,2),x=O[0],g=O[1],v=Object(a.useState)(""),y=Object(_.a)(v,2),N=y[0],S=y[1],w=Object(U.useStripe)(),k=Object(U.useElements)(),C=e.plant;Object(a.useEffect)((function(){window.fetch("".concat(f,"/api/create-payment-intent"),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({price:C.price})}).then((function(e){return e.json()})).then((function(e){S(e.clientSecret)}))}),[C.price]);var I=function(){var e=Object(M.a)(J.a.mark((function e(t){return J.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:g(t.empty),l(t.error?t.error.message:"");case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),P=function(){var e=Object(M.a)(J.a.mark((function e(t){var n;return J.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),p(!0),e.next=4,w.confirmCardPayment(N,{payment_method:{card:k.getElement(U.CardElement)}});case 4:(n=e.sent).error?(l("Payment failed ".concat(n.error.message)),p(!1)):(l(null),p(!1),s(!0));case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(b.jsxs)("div",{className:"container col-9",children:[Object(b.jsxs)("form",{className:"checkoutForm pt-5 mt-5",id:"payment-form",onSubmit:P,children:[Object(b.jsxs)("h2",{className:"text-center mb-2 p-2",children:["  ",C.name," "]}),Object(b.jsxs)("h3",{className:"text-center mb-4 p-2",children:[" ",C.price," \u20ac "]}),Object(b.jsx)(U.CardElement,{className:"p-2",id:"card-element",options:{style:{base:{color:"#32325d",fontFamily:"Arial, sans-serif",fontSmoothing:"antialiased",fontSize:"16px","::placeholder":{color:"#32325d"}},invalid:{color:"#fa755a",iconColor:"#fa755a"}}},onChange:I}),Object(b.jsx)("div",{className:"row justify-content-center",children:Object(b.jsx)("button",{onClick:e.onCheckout,className:"btn btn-sm mt-5 mb-4",disabled:u||x||c,id:"submit",children:Object(b.jsx)("span",{id:"button-text",children:u?Object(b.jsx)("div",{className:"spinner",id:"spinner"}):"Pay now"})})}),o&&Object(b.jsxs)("div",{className:"card-error",role:"alert",children:[" ",o," "]}),Object(b.jsx)("p",{className:c?"result-message text-center":"result-message hidden text-center",children:"Payment succeeded."})]}),Object(b.jsx)("div",{className:"row justify-content-center",children:Object(b.jsx)(h.b,{to:"/",children:Object(b.jsx)("button",{className:"btn btn-sm",children:" Go back "})})})]})},F=Object(E.a)("pk_test_51IQBsPA6EAM4YnfDyrjHWnLHzZ5KkI9tsERzYhBGVoctZBrFUb4Sda035HvcQKpp7thFiqW6QmO8ytPbOAMTg33z00cHvcbojv"),R=function(e){Object(j.a)(n,e);var t=Object(u.a)(n);function n(){return Object(l.a)(this,n),t.apply(this,arguments)}return Object(d.a)(n,[{key:"render",value:function(){var e=this.props.location.plant;return Object(b.jsx)("div",{className:"container row mt-5",children:Object(b.jsx)("div",{className:"mt-5 col-11 col-md-6 offset-1 offset-md-5 App",children:Object(b.jsx)(U.Elements,{stripe:F,children:Object(b.jsx)(A,{onCheckout:this.props.onCheckout,plant:e})})})})}}]),n}(a.Component),L=function(e){Object(j.a)(n,e);var t=Object(u.a)(n);function n(){return Object(l.a)(this,n),t.apply(this,arguments)}return Object(d.a)(n,[{key:"componentDidMount",value:function(){this.props.onLogOut()}},{key:"render",value:function(){return Object(b.jsx)("div",{})}}]),n}(a.Component),W=function(e){Object(j.a)(n,e);var t=Object(u.a)(n);function n(){return Object(l.a)(this,n),t.apply(this,arguments)}return Object(d.a)(n,[{key:"render",value:function(){var e=this,t=this.props.location.plant;return Object(b.jsx)("div",{className:"container row mt-5",children:Object(b.jsxs)("div",{className:"mt-5 col-11 col-md-5 offset-1 offset-md-5",children:[Object(b.jsx)("h2",{className:"mt-5 mb-5",children:" Your mesage "}),Object(b.jsxs)("form",{onSubmit:function(n){return e.props.onRequest(n,t)},children:[Object(b.jsx)("div",{children:Object(b.jsx)("textarea",{className:"mb-4",name:"message",cols:"35",rows:"4"})}),Object(b.jsx)("button",{className:"btn btn-sm btn-outline-dark",type:"submit",children:" Send "}),Object(b.jsx)(h.b,{to:"/plants/".concat(t._id),children:Object(b.jsx)("button",{className:"btn btn-sm mx-2",children:" Go back "})})]})]})})}}]),n}(a.Component),T=function(e){Object(j.a)(n,e);var t=Object(u.a)(n);function n(){return Object(l.a)(this,n),t.apply(this,arguments)}return Object(d.a)(n,[{key:"componentDidMount",value:function(){this.props.onMyRequests()}},{key:"render",value:function(){var e=this.props,t=e.user,n=e.requests;return t?Object(b.jsx)("div",{className:"container row mt-5",children:Object(b.jsxs)("div",{className:"mt-5 col-11 col-md-5 offset-1 offset-md-5",children:[Object(b.jsx)("h2",{className:"mt-5 mb-5",children:" Your messages "}),n.map((function(e){return e.seller===t._id?Object(b.jsxs)("div",{className:"card p-3 mt-4 ",children:[Object(b.jsxs)("h4",{children:[" Request for ",e.plant.name," "]}),Object(b.jsxs)("p",{children:[" ",e.message," "]})]},e._id):null})),Object(b.jsx)(h.b,{to:"/",children:Object(b.jsx)("button",{className:"btn btn-sm mt-4",children:" Go back "})})]})}):Object(b.jsx)(O.a,{to:"/signup"})}}]),n}(a.Component),G=function(e){Object(j.a)(n,e);var t=Object(u.a)(n);function n(){return Object(l.a)(this,n),t.apply(this,arguments)}return Object(d.a)(n,[{key:"render",value:function(){return Object(b.jsx)("div",{className:"notFound",children:Object(b.jsxs)("div",{children:[Object(b.jsxs)("h2",{children:["Oh-oh! ",Object(b.jsx)("br",{})," ",Object(b.jsx)("br",{}),"We think you got lost in the jungle!"]}),Object(b.jsx)("h3",{children:" 404 Not Found "}),Object(b.jsx)(h.b,{to:"/",children:Object(b.jsx)("button",{className:"btn btn-sm ml-2",children:" Take me home "})})]})})}}]),n}(a.Component),B=function(e){Object(j.a)(n,e);var t=Object(u.a)(n);function n(){return Object(l.a)(this,n),t.apply(this,arguments)}return Object(d.a)(n,[{key:"componentDidMount",value:function(){!function(e,t){var n=document.createElement("script");n.type="text/javascript",n.async=!0,n.src="https://widget.kommunicate.io/v2/kommunicate.app",document.getElementsByTagName("head")[0].appendChild(n),window.kommunicate=t,t._globals={appId:"10b22c52854a305b79bbdecc356bea5",popupWidget:!0,automaticChatOpenOnNavigation:!0}}(document,window.kommunicate||{})}},{key:"render",value:function(){return Object(b.jsx)("div",{})}}]),n}(a.Component),H=function(e){Object(j.a)(n,e);var t=Object(u.a)(n);function n(){var e;Object(l.a)(this,n);for(var a=arguments.length,c=new Array(a),s=0;s<a;s++)c[s]=arguments[s];return(e=t.call.apply(t,[this].concat(c))).state={loggedInUser:null,error:null,plants:[],query:"",requests:[],fetchingUser:!0},e.fetchAllPlants=function(){g.a.get("".concat(f,"/api/plants")).then((function(t){e.setState({plants:t.data})})).catch((function(e){console.log("Fetching plants failed",e)}))},e.fetchQueryPlants=function(){g.a.get("".concat(f,"/api/plants/search?q=").concat(e.state.query)).then((function(t){e.setState({plants:t.data,ready:!0})})).catch((function(e){console.log("Query fetching failed",e)}))},e.handleChange=function(t){var n=t.target.value;e.setState({query:n},(function(){n?e.fetchQueryPlants():e.fetchAllPlants()}))},e.handleSignUp=function(t){t.preventDefault();var n=t.target,a=n.username,c=n.email,s=n.password,r={username:a.value,email:c.value.toLowerCase(),password:s.value};g.a.post("".concat(f,"/api/signup"),r).then((function(t){e.setState({loggedInUser:t.data},(function(){e.props.history.push("/")}))})).catch((function(t){e.setState({error:t.response.data.error})}))},e.handleSignIn=function(t){t.preventDefault();var n=t.target,a=n.email,c=n.password,s={email:a.value,password:c.value};g.a.post("".concat(f,"/api/signin"),s,{withCredentials:!0}).then((function(t){e.setState({loggedInUser:t.data},(function(){e.props.history.push("/")}))})).catch((function(t){e.setState({error:t.response.data.error})}))},e.resetError=function(){e.setState({error:null})},e.handleLogOut=function(){g.a.post("".concat(f,"/api/logout"),{},{withCredentials:!0}).then((function(){e.setState({loggedInUser:null},(function(){e.props.history.push("/")}))})).catch((function(e){console.log("Logout failed",e)}))},e.handleCreatePlant=function(t){t.preventDefault();var n=t.target,a=n.name,c=n.description,s=n.size,r=n.plantImage,i=n.location,l=n.price,d=r.files[0],j=new FormData;j.append("image",d),g.a.post("".concat(f,"/api/upload"),j).then((function(t){var n={name:a.value,description:c.value,size:s.value,image:t.data.image,location:i.value,price:l.value};g.a.post("".concat(f,"/api/plants/create"),n,{withCredentials:!0}).then((function(t){e.setState({plants:[t.data].concat(Object(o.a)(e.state.plants))},(function(){e.props.history.push("/")}))})).catch((function(e){console.log("Create plant failed",e)}))})).catch((function(e){console.log("Image upload failed",e)}))},e.handleUpdatePlant=function(t){var n={name:t.name,description:t.description,size:t.size,image:t.image,location:t.location,price:t.price};g.a.patch("".concat(f,"/api/plants/create/").concat(t._id),n).then((function(){var n=e.state.plants.map((function(e){if(t._id===e._id){var n=t.name,a=t.description,c=t.size,s=t.image,r=t.location,i=t.price;e.name=n,e.description=a,e.size=c,e.image=s,e.location=r,e.price=i}return e}));e.setState({plants:n},(function(){e.props.history.push("/")}))})).catch((function(e){console.log("Update plant failed",e)}))},e.handleDeletePlant=function(t){g.a.delete("".concat(f,"/api/plants/delete/").concat(t)).then((function(){var n=e.state.plants.filter((function(e){return e._id!==t}));e.setState({plants:n},(function(){e.props.history.push("/")}))})).catch((function(e){console.log("Delete plant failed",e)}))},e.handleCheckout=function(t){g.a.post("".concat(f,"/api/create-payment-intent"),{},{withCredentials:!0}).then((function(){e.setState((function(){e.props.history.push("/")}))})).catch((function(e){console.log("Checkout failed",e)}))},e.handleRequestSubmit=function(t,n){t.preventDefault();var a=t.target.message,c={buyer:e.state.loggedInUser._id,seller:n.creator,plant:n,message:a.value};g.a.post("".concat(f,"/api/plants/request"),c,{withCredentials:!0}).then((function(t){e.setState({requests:[t.data].concat(Object(o.a)(e.state.requests))},(function(){e.props.history.push("/")}))})).catch((function(e){console.log("Create request failed",e)}))},e.handleMyRequests=function(){g.a.get("".concat(f,"/api/myrequests")).then((function(t){console.log("Response -- handleMyRequests():",t.data),e.setState({requests:t.data})})).catch((function(e){console.log("Fetching requests failed",e)}))},e}return Object(d.a)(n,[{key:"componentDidMount",value:function(){var e=this;this.fetchAllPlants(),this.state.loggedInUser||g.a.get("".concat(f,"/api/user"),{withCredentials:!0}).then((function(t){e.setState({loggedInUser:t.data,fetchingUser:!1})})).catch((function(t){e.setState({fetchingUser:!1}),console.log("Initializing fetching failed",t)}))}},{key:"render",value:function(){var e=this,t=this.state,n=t.plants,a=t.loggedInUser,c=t.error,s=t.query,r=t.requests;return this.state.fetchingUser,Object(b.jsxs)("div",{class:"main",children:[Object(b.jsx)(C,{onLogOut:this.handleLogOut,user:a}),Object(b.jsxs)(O.d,{children:[Object(b.jsx)(O.b,{exact:!0,path:"/",render:function(){return Object(b.jsx)(S,{onSearch:e.handleChange,plants:n,query:s})}}),Object(b.jsx)(O.b,{path:"/signin",render:function(t){return Object(b.jsx)(p,Object(i.a)({onSignIn:e.handleSignIn,onResetError:e.resetError,error:c},t))}}),Object(b.jsx)(O.b,{path:"/signup",render:function(t){return Object(b.jsx)(m,Object(i.a)({onSignUp:e.handleSignUp,onResetError:e.resetError,error:c},t))}}),Object(b.jsx)(O.b,{path:"/logout",render:function(t){return Object(b.jsx)(L,Object(i.a)({onLogOut:e.handleLogOut},t))}}),Object(b.jsx)(O.b,{path:"/plants/:plantId",render:function(t){return Object(b.jsx)(D,Object(i.a)({onDeletePlant:e.handleDeletePlant,user:a},t))}}),Object(b.jsx)(O.b,{path:"/add-form",render:function(){return Object(b.jsx)(P,{onCreatePlant:e.handleSubmit,user:a})}}),Object(b.jsx)(O.b,{path:"/plant/:plantId/edit",render:function(t){return Object(b.jsx)(q,Object(i.a)({onUpdatePlant:e.handleUpdatePlant},t))}}),Object(b.jsx)(O.b,{path:"/plant/:plantId/checkout",render:function(t){return Object(b.jsx)(R,Object(i.a)({onCheckout:e.handleCheckout},t))}}),Object(b.jsx)(O.b,{path:"/request-form",render:function(t){return Object(b.jsx)(W,Object(i.a)({onRequest:e.handleRequestSubmit,user:a},t))}}),Object(b.jsx)(O.b,{path:"/myrequests",render:function(t){return Object(b.jsx)(T,Object(i.a)({onMyRequests:e.handleMyRequests,user:a,requests:r},t))}}),Object(b.jsx)(O.b,{component:G})]}),Object(b.jsx)(B,{}),Object(b.jsx)(I,{})]})}}]),n}(a.Component),Q=Object(O.g)(H);r.a.render(Object(b.jsx)(c.a.StrictMode,{children:Object(b.jsx)(h.a,{children:Object(b.jsx)(Q,{})})}),document.querySelector("#root"))}},[[86,1,2]]]);
//# sourceMappingURL=main.390e1b2f.chunk.js.map
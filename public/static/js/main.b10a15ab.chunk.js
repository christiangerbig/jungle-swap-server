(this["webpackJsonpjungle-swap-client"]=this["webpackJsonpjungle-swap-client"]||[]).push([[0],{55:function(e,t,n){},63:function(e,t,n){},86:function(e,t,n){"use strict";n.r(t);var a=n(1),c=n.n(a),s=n(21),r=n.n(s),i=(n(55),n(18)),l=n(37),o=n(5),d=n(6),j=n(8),b=n(7),u=n(0),m=function(e){return Object(u.jsx)("div",{className:"container row mt-5 custom fullscreen",children:Object(u.jsxs)("div",{className:"mt-5 col-11 col-md-5 offset-1 offset-md-5",children:[Object(u.jsx)("h2",{className:"mt-5 mb-5",children:" Sign In "}),Object(u.jsxs)("form",{onSubmit:e.onSignIn,children:[Object(u.jsxs)("div",{className:"form-group",children:[Object(u.jsx)("label",{htmlFor:"InputEmail",children:" Email address "}),Object(u.jsx)("input",{type:"email",className:"form-control",id:"InputEmail",name:"email"})]}),Object(u.jsxs)("div",{className:"form-group",children:[Object(u.jsx)("label",{htmlFor:"InputPassword",children:" Password "}),Object(u.jsx)("input",{name:"password",type:"password",className:"form-control",id:"InputPassword"})]}),e.error?Object(u.jsxs)("p",{style:{color:"red"},children:[" ",e.error," "]}):null,Object(u.jsx)("button",{type:"submit",className:"btn btn-primary mt-4 btn-outline-dark",children:" Sign in "})]})]})})},h=n(4),p=function(e){return Object(u.jsx)("div",{className:"container row mt-5",children:Object(u.jsxs)("div",{className:"mt-5 col-11 col-md-5 offset-1 offset-md-5",children:[Object(u.jsx)("h2",{className:"mt-5 mb-5",children:"Sign Up"}),Object(u.jsxs)("form",{onSubmit:e.onSignUp,children:[Object(u.jsxs)("div",{className:"form-group",children:[Object(u.jsx)("label",{htmlFor:"InputUsername",children:" Username "}),Object(u.jsx)("input",{type:"text",className:"form-control",id:"InputUsername",name:"username"})]}),Object(u.jsxs)("div",{className:"form-group",children:[Object(u.jsx)("label",{htmlFor:"InputEmail",children:" Email address "}),Object(u.jsx)("input",{type:"email",className:"form-control",id:"InputEmail",name:"email"})]}),Object(u.jsxs)("div",{className:"form-group",children:[Object(u.jsx)("label",{htmlFor:"InputPassword",children:" Password "}),Object(u.jsx)("input",{name:"password",type:"password",className:"form-control",id:"InputPassword"})]}),e.error?Object(u.jsxs)("p",{style:{color:"red"},children:[" ",e.error," "]}):null,Object(u.jsx)("button",{type:"submit",className:"btn btn-primary mt-4 btn-outline-dark",children:" Sign up "}),Object(u.jsx)("p",{className:"padding",children:" Already have an account? "}),Object(u.jsx)(h.b,{to:"/signin",children:" Sign in "})]})]})})},O=(n(62),n(63),n(9)),f="https://jungleswap.herokuapp.com",x=n(10),g=n.n(x),v=n(28),N=n.p+"static/media/JungleSwap_Home.c4ed9b4c.png",y=n.p+"static/media/JungleSwap_Icon.a6c7c44a.png",S=function(e){Object(j.a)(n,e);var t=Object(b.a)(n);function n(){return Object(o.a)(this,n),t.apply(this,arguments)}return Object(d.a)(n,[{key:"render",value:function(){var e=this.props,t=e.plants,n=e.query;return Object(u.jsxs)("div",{children:[Object(u.jsx)("header",{className:"text-center pt-5 pb-5 headerImg",children:Object(u.jsx)("div",{className:"row my-5",children:Object(u.jsxs)("div",{className:"col-6 offset-3 my-5 borderAround",children:[Object(u.jsx)("h2",{className:"title mb-2",children:" JungleSwap "}),Object(u.jsx)("h5",{className:"mt-3 mb-5",children:" Share your green heart "}),Object(u.jsx)("div",{className:"mb-5",children:Object(u.jsx)(v.ScrollTo,{children:function(e){var t=e.scroll;return Object(u.jsx)(h.b,{className:"biggerFontSize",onClick:function(){return t({y:800,smooth:!0})},children:" Try it! "})}})})]})})}),Object(u.jsx)("div",{className:"intro",children:Object(u.jsx)("div",{className:"intro-centered container",children:Object(u.jsxs)("div",{className:"row",children:[Object(u.jsx)("div",{className:"col-sm-6 col-md-5 col-lg-6",children:Object(u.jsx)("img",{className:"image",src:N,alt:""})}),Object(u.jsx)("br",{}),Object(u.jsxs)("div",{className:"intro col-sm-6 col-md-5 col-lg-6 px-5",children:[Object(u.jsx)("h4",{children:" Welcome to JungleSwap! "}),Object(u.jsx)("h5",{children:" Add green to your Home "}),Object(u.jsxs)("p",{children:[" It's easy-peasy. ",Object(u.jsx)("br",{}),"Share your plant offshoots. ",Object(u.jsx)("br",{}),"Make money! ",Object(u.jsx)("br",{}),"Or swap them for another plant. ",Object(u.jsx)("br",{}),"Don't have any baby plants? ",Object(u.jsx)("br",{}),"You can simply shop and give a plant a new home."]}),Object(u.jsx)("img",{className:"icon",src:y,alt:"icon"})]})]})})}),Object(u.jsxs)("div",{className:"container mt-5",children:[Object(u.jsxs)("div",{className:"mt-4 mb-3 pt-5",children:[Object(u.jsx)("h2",{children:" Plants "}),Object(u.jsx)("hr",{}),Object(u.jsx)("h4",{children:" Search a plant "})]}),Object(u.jsx)("div",{className:"mb-4",children:Object(u.jsx)("input",{className:"smallWidth form-control",type:"text",placeholder:"Search...",value:n,onChange:this.props.onSearch})}),Object(u.jsx)("div",{className:"row row-cols-1 row-cols-md-3 g-4",children:t.map((function(e){return Object(u.jsx)("div",{className:"col mb-5",children:Object(u.jsxs)("div",{className:"card card-medium-width text-center",children:[Object(u.jsx)("img",{className:"card-img-top mediumPicSize",src:e.image,alt:e.name}),Object(u.jsxs)("div",{className:"card-body mb-5",children:[Object(u.jsxs)("h5",{children:[" ",e.name," "]}),Object(u.jsxs)("p",{children:[" ",e.price," \u20ac "]}),Object(u.jsx)(h.b,{className:"btn btn-outline-dark",to:"/plants/".concat(e._id),children:" Details "})]})]})},e._id)}))})]})]})}}]),n}(a.Component),w=n(89),k=n(90),C=function(e){return Object(u.jsx)("div",{children:Object(u.jsxs)(w.a,{className:"pl-5",variant:"dark",expand:"lg",fixed:"top",children:[Object(u.jsx)(w.a.Brand,{href:"/",children:" JungleSwap "}),Object(u.jsx)(w.a.Toggle,{"aria-controls":"basic-navbar-nav"}),Object(u.jsx)(w.a.Collapse,{id:"basic-navbar-nav",children:Object(u.jsxs)(k.a,{className:"mr-auto",children:[Object(u.jsx)(v.ScrollTo,{children:function(e){var t=e.scroll;return Object(u.jsx)("div",{children:Object(u.jsx)(h.b,{to:"/",className:"p-2",onClick:function(){return t({y:1700,smooth:!0})},children:" All Plants "})})}}),e.user?Object(u.jsxs)("div",{children:[Object(u.jsx)(h.b,{className:"p-2",to:"/add-form",children:" Add Plant "}),Object(u.jsx)(h.b,{className:"p-2",to:"/myrequests",children:" Messages "})]}):null,e.user?Object(u.jsx)("div",{children:Object(u.jsx)(h.b,{className:"p-2",to:"/logout",children:" Log out "})}):Object(u.jsxs)("div",{children:[Object(u.jsx)(h.b,{className:"p-2",to:"/signin",children:" Sign in "}),Object(u.jsx)(h.b,{className:"p-2",to:"/signup",children:" Sign up "})]})]})})]})})},I=function(e){Object(j.a)(n,e);var t=Object(b.a)(n);function n(){return Object(o.a)(this,n),t.apply(this,arguments)}return Object(d.a)(n,[{key:"render",value:function(){return Object(u.jsx)("div",{className:"footer-row",children:Object(u.jsxs)("footer",{children:[" \xa9 2021 ",Object(u.jsx)("a",{href:"https://www.linkedin.com/in/christian-gerbig/",children:" Christian Gerbig "})," & ",Object(u.jsx)("a",{href:"https://www.linkedin.com/in/lisa-montebaur/",children:"Lisa Montebaur"})]})})}}]),n}(a.Component),q=function(e){Object(j.a)(n,e);var t=Object(b.a)(n);function n(){return Object(o.a)(this,n),t.apply(this,arguments)}return Object(d.a)(n,[{key:"render",value:function(){return this.props.user?Object(u.jsx)("div",{className:"container row mt-5 fullscreen",children:Object(u.jsxs)("div",{className:"mt-5 col-11 col-md-5 offset-1 offset-md-6",children:[Object(u.jsx)("h2",{className:"mt-5 mb-5",children:" Upload a plant "}),Object(u.jsxs)("form",{onSubmit:this.props.onAdd,children:[Object(u.jsx)("input",{className:"mb-4",name:"name",type:"text",placeholder:"Enter name"}),Object(u.jsx)("input",{className:"mb-4",name:"description",type:"text",placeholder:"Enter description"}),Object(u.jsx)("input",{className:"mb-4 smallWidth",name:"size",type:"number",min:"1",placeholder:"Size"})," cm ",Object(u.jsx)("br",{}),Object(u.jsxs)("select",{className:"mb-4 p-1",name:"location",type:"text",children:[Object(u.jsx)("option",{children:" Select location "}),Object(u.jsx)("option",{value:"sun",children:" sun "}),Object(u.jsx)("option",{value:"shade",children:" shade "}),Object(u.jsx)("option",{value:"sun and shade",children:" sun and shade "})]}),Object(u.jsx)("br",{}),Object(u.jsx)("input",{className:"mb-4 smallWidth",name:"price",type:"number",min:"1",placeholder:"Price"})," \u20ac ",Object(u.jsx)("br",{}),Object(u.jsx)("input",{className:"mb-4",name:"plantImage",type:"file"}),Object(u.jsxs)("div",{className:"col-12",children:[Object(u.jsx)("button",{className:"btn btn-sm btn-outline-dark",type:"submit",children:" Add plant "}),Object(u.jsx)(h.b,{to:"/",children:Object(u.jsx)("button",{className:"btn btn-sm mx-5",children:" Go back "})})]})]})]})}):Object(u.jsx)(O.a,{to:"/signup"})}}]),n}(a.Component),P=function(e){Object(j.a)(n,e);var t=Object(b.a)(n);function n(){var e;Object(o.a)(this,n);for(var a=arguments.length,c=new Array(a),s=0;s<a;s++)c[s]=arguments[s];return(e=t.call.apply(t,[this].concat(c))).state={plant:{}},e.handleNameChange=function(t){var n=JSON.parse(JSON.stringify(e.state.plant));n.name=t.target.value,e.setState({plant:n})},e.handleDescChange=function(t){var n=JSON.parse(JSON.stringify(e.state.plant));n.description=t.target.value,e.setState({plant:n})},e.handleSizeChange=function(t){var n=JSON.parse(JSON.stringify(e.state.plant));n.size=t.target.value,e.setState({plant:n})},e.handlePriceChange=function(t){var n=JSON.parse(JSON.stringify(e.state.plant));n.price=t.target.value,e.setState({plant:n})},e.handleLocationChange=function(t){var n=JSON.parse(JSON.stringify(e.state.plant));n.location=t.target.value,e.setState({plant:n})},e.handleImageChange=function(t){var n=t.target.files[0],a=new FormData;a.append("image",n),g.a.post("".concat(f,"/api/upload"),a).then((function(t){var n=JSON.parse(JSON.stringify(e.state.plant));n.image=t.data.image,e.setState({plant:n})})).catch((function(e){console.log("Image upload failed",e)}))},e}return Object(d.a)(n,[{key:"componentDidMount",value:function(){var e=this,t=this.props.match.params.plantId;g.a.get("".concat(f,"/api/plants/").concat(t)).then((function(t){e.setState({plant:t.data})})).catch((function(){console.log("Detail fetch failed")}))}},{key:"render",value:function(){var e=this.state.plant,t=this.props.onEdit;return Object(u.jsx)("div",{className:"container row mt-5 ",children:Object(u.jsxs)("div",{className:"mt-2 col-11 col-md-5 offset-1 offset-md-5",children:[Object(u.jsx)("h2",{className:"mt-5 mb-4",children:" Edit your plant "}),Object(u.jsxs)("div",{className:"card cardSmallWidth mb-5",children:[Object(u.jsx)("img",{className:"mb-2 smallPicSize",src:e.image,alt:e.name}),Object(u.jsxs)("div",{className:"card-body",children:[Object(u.jsx)("input",{className:"mb-2",onChange:this.handleImageChange,type:"file"}),Object(u.jsx)("input",{className:"mb-2",type:"text",onChange:this.handleNameChange,value:e.name}),Object(u.jsx)("input",{className:"mb-2",type:"text",onChange:this.handleDescChange,value:e.description}),Object(u.jsx)("input",{className:"mb-2 smallWidth",type:"number",onChange:this.handleSizeChange,value:e.size})," cm ",Object(u.jsx)("br",{}),Object(u.jsxs)("select",{className:"mb-2",onChange:this.handleLocationChange,name:"location",type:"text",placeholder:"Select",children:[Object(u.jsx)("option",{value:"sun",children:" sun "}),Object(u.jsx)("option",{value:"shade",children:" shade "}),Object(u.jsx)("option",{value:"sun and shade",children:" sun and shade "})]})," ",Object(u.jsx)("br",{}),Object(u.jsx)("input",{className:"mb-4 smallWidth",name:"price",type:"number",min:"1",onChange:this.handlePriceChange,value:e.price})," \u20ac",Object(u.jsxs)("div",{className:"row justify-content-around",children:[Object(u.jsx)("button",{className:"btn btn-sm btn-outline-dark",onClick:function(){t(e)},children:" Save changes "}),Object(u.jsx)(h.b,{to:"/plants/".concat(e._id),children:Object(u.jsx)("button",{className:"btn btn-sm mx-2",children:" Go back "})})]})]})]})]})})}}]),n}(a.Component),D=function(e){Object(j.a)(n,e);var t=Object(b.a)(n);function n(){var e;Object(o.a)(this,n);for(var a=arguments.length,c=new Array(a),s=0;s<a;s++)c[s]=arguments[s];return(e=t.call.apply(t,[this].concat(c))).state={plant:{}},e}return Object(d.a)(n,[{key:"componentDidMount",value:function(){var e=this,t=this.props.match.params.plantId;g.a.get("".concat(f,"/api/plants/").concat(t),{withCredentials:!0}).then((function(t){e.setState({plant:t.data})})).catch((function(){console.log("Detail fetch failed")}))}},{key:"render",value:function(){var e=this.state.plant,t=this.props,n=t.onDelete,a=t.user;return a?Object(u.jsxs)("div",{className:"container mt-5 row row-md-10 offset-md-4",children:[Object(u.jsx)("div",{className:"mt-4 mb-3 pt-4 container",children:Object(u.jsx)("h2",{children:" Plant details "})}),Object(u.jsx)("div",{className:"col",children:Object(u.jsxs)("div",{className:"card cardMediumWidth",children:[e.image?Object(u.jsx)("img",{className:"card-img-top mediumPicSize",src:e.image,alt:e.name}):null,Object(u.jsxs)("div",{className:"ml-2 mt-2",children:[" ",Object(u.jsx)("span",{children:" Name: "})," ",e.name," "]}),Object(u.jsxs)("div",{className:"ml-2 mt-2",children:[" ",Object(u.jsx)("span",{children:" Description: "})," ",e.description," "]}),Object(u.jsxs)("div",{className:"ml-2 mt-2",children:[" ",Object(u.jsx)("span",{children:" Size: "})," ",e.size," cm "]}),Object(u.jsxs)("div",{className:"ml-2 mt-2",children:[" ",Object(u.jsx)("span",{children:" Likes: "})," ",e.location," "]}),Object(u.jsxs)("div",{className:"ml-2 mt-2",children:[" ",Object(u.jsx)("span",{children:" Price: "})," ",e.price," \u20ac "]}),Object(u.jsx)("div",{className:"ml-2 mt-2 col justify-content-center",children:Object(u.jsx)("div",{className:"row-2 justify-content-center",children:Object(u.jsxs)("div",{className:"card-body",children:[a._id===e.creator?Object(u.jsxs)("div",{children:[Object(u.jsxs)(h.b,{to:"/plant/".concat(e._id,"/edit"),children:[" ",Object(u.jsx)("button",{className:"btn btn-sm ml-2 btn-outline-dark",children:" Edit "})," "]}),Object(u.jsx)("button",{className:"btn btn-sm ml-2 btn-outline-dark",onClick:function(){return n(e)},children:" Delete "})]}):Object(u.jsxs)("div",{children:[Object(u.jsx)(h.b,{to:{pathname:"/plant/".concat(e._id,"/checkout"),plant:e},children:Object(u.jsx)("button",{className:"btn btn-sm ml-2 btn-outline-dark",children:" Buy "})}),Object(u.jsx)(h.b,{to:{pathname:"/request-form",plant:e},children:Object(u.jsx)("button",{className:"btn btn-sm ml-2 btn-outline-dark",children:" Swap "})})]}),Object(u.jsx)(h.b,{to:"/",children:Object(u.jsx)("button",{className:"btn btn-sm ml-2",children:" Go back "})})]})})})]})})]}):Object(u.jsx)(O.a,{to:"/signup"})}}]),n}(a.Component),E=n(50),z=n(22),U=n(26),_=n.n(U),J=n(36),A=n(24),M=function(e){var t=Object(a.useState)(!1),n=Object(A.a)(t,2),c=n[0],s=n[1],r=Object(a.useState)(null),i=Object(A.a)(r,2),l=i[0],o=i[1],d=Object(a.useState)(""),j=Object(A.a)(d,2),b=j[0],m=j[1],p=Object(a.useState)(!0),O=Object(A.a)(p,2),x=O[0],g=O[1],v=Object(a.useState)(""),N=Object(A.a)(v,2),y=N[0],S=N[1],w=Object(z.useStripe)(),k=Object(z.useElements)(),C=e.plant;Object(a.useEffect)((function(){window.fetch("".concat(f,"/api/create-payment-intent"),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({price:C.price})}).then((function(e){return e.json()})).then((function(e){S(e.clientSecret)}))}),[C.price]);var I=function(){var e=Object(J.a)(_.a.mark((function e(t){return _.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:g(t.empty),o(t.error?t.error.message:"");case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),q=function(){var e=Object(J.a)(_.a.mark((function e(t){var n;return _.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),m(!0),e.next=4,w.confirmCardPayment(y,{payment_method:{card:k.getElement(z.CardElement)}});case 4:(n=e.sent).error?(o("Payment failed ".concat(n.error.message)),m(!1)):(o(null),m(!1),s(!0));case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(u.jsxs)("div",{className:"container col-9",children:[Object(u.jsxs)("form",{className:"checkoutForm pt-5 mt-5",id:"payment-form",onSubmit:q,children:[Object(u.jsxs)("h2",{className:"text-center mb-2 p-2",children:["  ",C.name," "]}),Object(u.jsxs)("h3",{className:"text-center mb-4 p-2",children:[" ",C.price," \u20ac "]}),Object(u.jsx)(z.CardElement,{className:"p-2",id:"card-element",options:{style:{base:{color:"#32325d",fontFamily:"Arial, sans-serif",fontSmoothing:"antialiased",fontSize:"16px","::placeholder":{color:"#32325d"}},invalid:{color:"#fa755a",iconColor:"#fa755a"}}},onChange:I}),Object(u.jsx)("div",{className:"row justify-content-center",children:Object(u.jsx)("button",{onClick:e.onCheckout,className:"btn btn-sm mt-5 mb-4",disabled:b||x||c,id:"submit",children:Object(u.jsx)("span",{id:"button-text",children:b?Object(u.jsx)("div",{className:"spinner",id:"spinner"}):"Pay now"})})}),l&&Object(u.jsxs)("div",{className:"card-error",role:"alert",children:[" ",l," "]}),Object(u.jsx)("p",{className:c?"result-message text-center":"result-message hidden text-center",children:"Payment succeeded."})]}),Object(u.jsx)("div",{className:"row justify-content-center",children:Object(u.jsx)(h.b,{to:"/",children:Object(u.jsx)("button",{className:"btn btn-sm",children:" Go back "})})})]})},F=Object(E.a)("pk_test_51IQBsPA6EAM4YnfDyrjHWnLHzZ5KkI9tsERzYhBGVoctZBrFUb4Sda035HvcQKpp7thFiqW6QmO8ytPbOAMTg33z00cHvcbojv"),L=function(e){Object(j.a)(n,e);var t=Object(b.a)(n);function n(){return Object(o.a)(this,n),t.apply(this,arguments)}return Object(d.a)(n,[{key:"render",value:function(){var e=this.props.location.plant;return Object(u.jsx)("div",{className:"container row mt-5",children:Object(u.jsx)("div",{className:"mt-5 col-11 col-md-6 offset-1 offset-md-5 App",children:Object(u.jsx)(z.Elements,{stripe:F,children:Object(u.jsx)(M,{onCheckout:this.props.onCheckout,plant:e})})})})}}]),n}(a.Component),R=function(e){return e.onLogOut(),Object(u.jsx)("div",{})},W=function(e){Object(j.a)(n,e);var t=Object(b.a)(n);function n(){return Object(o.a)(this,n),t.apply(this,arguments)}return Object(d.a)(n,[{key:"render",value:function(){var e=this,t=this.props.location.plant;return Object(u.jsx)("div",{className:"container row mt-5",children:Object(u.jsxs)("div",{className:"mt-5 col-11 col-md-5 offset-1 offset-md-5",children:[Object(u.jsx)("h2",{className:"mt-5 mb-5",children:" Your mesage "}),Object(u.jsxs)("form",{onSubmit:function(n){return e.props.onRequest(n,t)},children:[Object(u.jsx)("div",{children:Object(u.jsx)("textarea",{className:"mb-4",name:"message",cols:"35",rows:"4"})}),Object(u.jsx)("button",{className:"btn btn-sm btn-outline-dark",type:"submit",children:" Send "}),Object(u.jsx)(h.b,{to:"/plants/".concat(t._id),children:Object(u.jsx)("button",{className:"btn btn-sm mx-2",children:" Go back "})})]})]})})}}]),n}(a.Component),T=function(e){Object(j.a)(n,e);var t=Object(b.a)(n);function n(){return Object(o.a)(this,n),t.apply(this,arguments)}return Object(d.a)(n,[{key:"componentDidMount",value:function(){this.props.onMyRequests()}},{key:"render",value:function(){var e=this.props,t=e.user,n=e.requests;return t?Object(u.jsx)("div",{className:"container row mt-5",children:Object(u.jsxs)("div",{className:"mt-5 col-11 col-md-5 offset-1 offset-md-5",children:[Object(u.jsx)("h2",{className:"mt-5 mb-5",children:" Your messages "}),n.map((function(e){return e.seller===t._id?Object(u.jsxs)("div",{className:"card p-3 mt-4 ",children:[Object(u.jsxs)("h4",{children:[" Request for ",e.plant.name," "]}),Object(u.jsxs)("p",{children:[" ",e.message," "]})]},e._id):null})),Object(u.jsx)(h.b,{to:"/",children:Object(u.jsx)("button",{className:"btn btn-sm mt-4",children:" Go back "})})]})}):Object(u.jsx)(O.a,{to:"/signup"})}}]),n}(a.Component),G=function(e){Object(j.a)(n,e);var t=Object(b.a)(n);function n(){return Object(o.a)(this,n),t.apply(this,arguments)}return Object(d.a)(n,[{key:"render",value:function(){return Object(u.jsx)("div",{className:"notFound",children:Object(u.jsxs)("div",{children:[Object(u.jsxs)("h2",{children:["Oh-oh! ",Object(u.jsx)("br",{})," ",Object(u.jsx)("br",{}),"We think you got lost in the jungle!"]}),Object(u.jsx)("h3",{children:" 404 Not Found "}),Object(u.jsx)(h.b,{to:"/",children:Object(u.jsx)("button",{className:"btn btn-sm ml-2",children:" Take me home "})})]})})}}]),n}(a.Component),B=function(e){Object(j.a)(n,e);var t=Object(b.a)(n);function n(){return Object(o.a)(this,n),t.apply(this,arguments)}return Object(d.a)(n,[{key:"componentDidMount",value:function(){!function(e,t){var n=document.createElement("script");n.type="text/javascript",n.async=!0,n.src="https://widget.kommunicate.io/v2/kommunicate.app",document.getElementsByTagName("head")[0].appendChild(n),window.kommunicate=t,t._globals={appId:"10b22c52854a305b79bbdecc356bea5",popupWidget:!0,automaticChatOpenOnNavigation:!0}}(document,window.kommunicate||{})}},{key:"render",value:function(){return Object(u.jsx)("div",{})}}]),n}(a.Component),H=function(e){Object(j.a)(n,e);var t=Object(b.a)(n);function n(){var e;Object(o.a)(this,n);for(var a=arguments.length,c=new Array(a),s=0;s<a;s++)c[s]=arguments[s];return(e=t.call.apply(t,[this].concat(c))).state={loggedInUser:null,error:null,plants:[],query:"",requests:[],fetchingUser:!0},e.fetchAllPlants=function(){g.a.get("".concat(f,"/api/plants")).then((function(t){e.setState({plants:t.data})})).catch((function(e){console.log("Fetching plants failed",e)}))},e.fetchQueryPlants=function(){g.a.get("".concat(f,"/api/plants/search?q=").concat(e.state.query)).then((function(t){e.setState({plants:t.data,ready:!0})})).catch((function(e){console.log("Query fetching failed",e)}))},e.handleChange=function(t){var n=t.target.value;e.setState({query:n},(function(){n?e.fetchQueryPlants():e.fetchAllPlants()}))},e.handleSubmit=function(t){t.preventDefault();var n=t.target,a=n.name,c=n.description,s=n.size,r=n.price,i=n.plantImage,o=n.location,d=i.files[0],j=new FormData;j.append("image",d),g.a.post("".concat(f,"/api/upload"),j).then((function(t){var n={name:a.value,description:c.value,size:s.value,price:r.value,image:t.data.image,location:o.value};g.a.post("".concat(f,"/api/plants/create"),n,{withCredentials:!0}).then((function(t){e.setState({plants:[t.data].concat(Object(l.a)(e.state.plants))},(function(){e.props.history.push("/")}))})).catch((function(e){console.log("Create plant failed",e)}))})).catch((function(e){console.log("Image upload failed",e)}))},e.handleEditPlant=function(t){var n={name:t.name,description:t.description,size:t.size,price:t.price,image:t.image,location:t.location};g.a.patch("".concat(f,"/api/plants/").concat(t._id),n).then((function(){var n=e.state.plants.map((function(e){if(t._id===e._id){var n=t.name,a=t.description,c=t.size,s=t.price,r=t.image,i=t.location;e.name=n,e.description=a,e.size=c,e.price=s,e.image=r,e.location=i}return e}));e.setState({plants:n},(function(){e.props.history.push("/")}))})).catch((function(e){console.log("Edit plant failed",e)}))},e.handleDelete=function(t){g.a.delete("".concat(f,"/api/plants/").concat(t._id)).then((function(){var t=e.state.plants.filter((function(e){return e._id!==e.Id}));e.setState({plants:t},(function(){e.props.history.push("/")}))})).catch((function(e){console.log("Delete plant failed",e)}))},e.handleSignUp=function(t){t.preventDefault();var n=t.target,a=n.username,c=n.email,s=n.password,r={username:a.value,email:c.value.toLowerCase(),password:s.value};g.a.post("".concat(f,"/api/signup"),r).then((function(t){e.setState({loggedInUser:t.data},(function(){e.props.history.push("/signin")}))})).catch((function(t){e.setState({error:t.response.data.error})}))},e.handleSignIn=function(t){t.preventDefault();var n=t.target,a=n.email,c=n.password,s={email:a.value,password:c.value};g.a.post("".concat(f,"/api/signin"),s,{withCredentials:!0}).then((function(t){e.setState({loggedInUser:t.data},(function(){e.props.history.push("/")}))})).catch((function(t){e.setState({error:t.response.data.error})}))},e.handleLogOut=function(){g.a.post("".concat(f,"/api/logout"),{},{withCredentials:!0}).then((function(){e.setState({loggedInUser:null},(function(){e.props.history.push("/")}))})).catch((function(e){console.log("Logout failed",e)}))},e.handleCheckout=function(t){console.log(t),g.a.post("".concat(f,"/api/create-payment-intent"),{},{withCredentials:!0}).then((function(){e.setState((function(){e.props.history.push("/")}))})).catch((function(e){console.log("Checkout failed",e)}))},e.handleRequestSubmit=function(t,n){t.preventDefault();var a=t.target.message,c={buyer:e.state.loggedInUser._id,seller:n.creator,plant:n,message:a.value};g.a.post("".concat(f,"/api/plants/request"),c,{withCredentials:!0}).then((function(t){e.setState({requests:[t.data].concat(Object(l.a)(e.state.requests))},(function(){e.props.history.push("/")}))})).catch((function(e){console.log("Create request failed",e)}))},e.handleMyRequests=function(){g.a.get("".concat(f,"/api/myrequests")).then((function(t){console.log("Response -- handleMyRequests():",t.data),e.setState({requests:t.data})})).catch((function(e){console.log("Fetching requests failed",e)}))},e}return Object(d.a)(n,[{key:"componentDidMount",value:function(){var e=this;this.fetchAllPlants(),this.state.loggedInUser||g.a.get("".concat(f,"/api/user"),{withCredentials:!0}).then((function(t){e.setState({loggedInUser:t.data,fetchingUser:!1})})).catch((function(t){e.setState({fetchingUser:!1}),console.log("Initializing fetching failed",t)}))}},{key:"render",value:function(){var e=this,t=this.state,n=t.plants,a=t.loggedInUser,c=t.error,s=t.query,r=t.requests;return this.state.fetchingUser,Object(u.jsxs)("div",{class:"main",children:[Object(u.jsx)(C,{onLogOut:this.handleLogOut,user:a}),Object(u.jsxs)(O.d,{children:[Object(u.jsx)(O.b,{exact:!0,path:"/",render:function(){return Object(u.jsx)(S,{onSearch:e.handleChange,plants:n,query:s})}}),Object(u.jsx)(O.b,{path:"/plants/:plantId",render:function(t){return Object(u.jsx)(D,Object(i.a)({onDelete:e.handleDelete,user:a},t))}}),Object(u.jsx)(O.b,{path:"/signin",render:function(t){return Object(u.jsx)(m,Object(i.a)({onSignIn:e.handleSignIn,error:c},t))}}),Object(u.jsx)(O.b,{path:"/signup",render:function(t){return Object(u.jsx)(p,Object(i.a)({onSignUp:e.handleSignUp,error:c},t))}}),Object(u.jsx)(O.b,{path:"/logout",render:function(t){return Object(u.jsx)(R,Object(i.a)({onLogOut:e.handleLogOut},t))}}),Object(u.jsx)(O.b,{path:"/add-form",render:function(){return Object(u.jsx)(q,{onAdd:e.handleSubmit,user:a})}}),Object(u.jsx)(O.b,{path:"/plant/:plantId/edit",render:function(t){return Object(u.jsx)(P,Object(i.a)({onEdit:e.handleEditPlant},t))}}),Object(u.jsx)(O.b,{path:"/plant/:plantId/checkout",render:function(t){return Object(u.jsx)(L,Object(i.a)({onCheckout:e.handleCheckout},t))}}),Object(u.jsx)(O.b,{path:"/request-form",render:function(t){return Object(u.jsx)(W,Object(i.a)({onRequest:e.handleRequestSubmit,user:a},t))}}),Object(u.jsx)(O.b,{path:"/myrequests",render:function(t){return Object(u.jsx)(T,Object(i.a)({onMyRequests:e.handleMyRequests,user:a,requests:r},t))}}),Object(u.jsx)(O.b,{component:G})]}),Object(u.jsx)(B,{}),Object(u.jsx)(I,{})]})}}]),n}(a.Component),Q=Object(O.g)(H);r.a.render(Object(u.jsx)(c.a.StrictMode,{children:Object(u.jsx)(h.a,{children:Object(u.jsx)(Q,{})})}),document.querySelector("#root"))}},[[86,1,2]]]);
//# sourceMappingURL=main.b10a15ab.chunk.js.map
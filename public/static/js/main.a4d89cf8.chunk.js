(this["webpackJsonpjungle-swap-client"]=this["webpackJsonpjungle-swap-client"]||[]).push([[0],{103:function(e,t,n){"use strict";n.r(t);var a=n(1),s=n.n(a),c=n(18),r=n.n(c),l=(n(66),n(15)),i=n(44),o=n(28),d=n(29),u=n(6),h=n(32),b=n(30),j=n(8),m=n(5),p="https://jungleswap.herokuapp.com",O=n(7),f=n.n(O),g=(n(94),n(95),n(106)),x=n(107),v=n(3),N=n(0),y=function(e){var t=e.user,n=e.newRequestsReceived,s=e.headerHeight,c=e.introHeight,r=e.onCheckRequests;return Object(a.useEffect)((function(){var e=setInterval((function(){return r()}),1e4);return function(){return clearInterval(e)}}),[]),Object(N.jsx)("div",{children:Object(N.jsxs)(g.a,{className:"pl-5",variant:"dark",expand:"lg",fixed:"top",children:[Object(N.jsx)(g.a.Brand,{href:"/",children:" JungleSwap "}),Object(N.jsx)(g.a.Toggle,{"aria-controls":"basic-navbar-nav"}),Object(N.jsx)(g.a.Collapse,{id:"basic-navbar-nav",children:Object(N.jsxs)(x.a,{className:"mr-auto",children:[Object(N.jsx)("div",{children:Object(N.jsx)(v.b,{to:"/",className:"p-2",onClick:function(){return m.animateScroll.scrollTo(s+c)},children:" All Plants "})}),t?Object(N.jsxs)("div",{children:[Object(N.jsx)(v.b,{className:"p-2",to:"/plants/create",children:" Create Plant "}),Object(N.jsx)(v.b,{className:n?"p-2 alertColor":"p-2",to:"/requests/fetch",title:n?"new message":null,children:" Messages "})]}):null,t?Object(N.jsx)("div",{children:Object(N.jsx)(v.b,{className:"p-2",to:"/logout",title:t.username,children:" Log out "})}):Object(N.jsxs)("div",{children:[Object(N.jsx)(v.b,{className:"p-2",to:"/signin",children:" Sign in "}),Object(N.jsx)(v.b,{className:"p-2",to:"/signup",children:" Sign up "})]})]})})]})})},S=function(){return Object(N.jsx)("div",{className:"footer-row",children:Object(N.jsxs)("footer",{children:["\xa9 2021",Object(N.jsx)(v.b,{href:"https://www.linkedin.com/in/christian-gerbig/",children:" Christian Gerbig "}),"&",Object(N.jsx)(v.b,{href:"https://www.linkedin.com/in/lisa-montebaur/",children:" Lisa Montebaur "})]})})},R=n.p+"static/media/JungleSwap_Home.c4ed9b4c.png",q=n.p+"static/media/JungleSwap_Icon.a6c7c44a.png",C=function(e){var t=e.plants,n=e.query,s=e.headerHeight,c=e.onSearchPlant,r=e.onHandleElementsHeight;return Object(a.useEffect)((function(){return r()}),[]),t?Object(N.jsxs)("div",{children:[Object(N.jsx)("header",{className:"text-center pt-5 pb-5 headerImg",id:"titleId",children:Object(N.jsx)("div",{className:"row my-5",children:Object(N.jsxs)("div",{className:"col-6 offset-3 my-5 borderAround",children:[Object(N.jsx)("h2",{className:"title mb-2",children:" JungleSwap "}),Object(N.jsx)("h5",{className:"mt-3 mb-5",children:" Share your green heart "}),Object(N.jsx)("div",{className:"mb-5",children:Object(N.jsx)(v.b,{className:"biggerFontSize",onClick:function(){return m.animateScroll.scrollTo(s)},children:" Try it! "})})]})})}),Object(N.jsx)("section",{id:"aboutId",children:Object(N.jsx)("div",{className:"about centered container",children:Object(N.jsxs)("div",{className:"row",children:[Object(N.jsx)("div",{className:"col-sm-6 col-md-5 col-lg-6",children:Object(N.jsx)("img",{className:"image",src:R,alt:"plants"})}),Object(N.jsx)("br",{}),Object(N.jsxs)("div",{className:"about col-sm-6 col-md-5 col-lg-6 px-5 noOverflow",children:[Object(N.jsx)("h4",{children:" Welcome to JungleSwap! "}),Object(N.jsx)("h5",{children:" Add green to your Home "}),Object(N.jsxs)("p",{children:[' It"s easy-peasy. ',Object(N.jsx)("br",{}),"Share your plant offshoots. ",Object(N.jsx)("br",{}),"Make money! ",Object(N.jsx)("br",{}),"Or swap them for another plant. ",Object(N.jsx)("br",{}),'Don"t have any baby plants? ',Object(N.jsx)("br",{}),"You can simply shop and give a plant a new home."]}),Object(N.jsx)("img",{className:"icon",src:q,alt:"icon"})]})]})})}),Object(N.jsx)("section",{children:Object(N.jsxs)("div",{className:"container mt-5",children:[Object(N.jsxs)("div",{className:"mt-5 mb-3",children:[Object(N.jsx)("h2",{children:" Plants "}),Object(N.jsx)("hr",{}),Object(N.jsx)("h4",{children:" Search a plant "})]}),Object(N.jsx)("div",{className:"mb-4",children:Object(N.jsx)("input",{className:"smallWidth form-control",type:"text",placeholder:"Search...",value:n,onChange:c})}),Object(N.jsx)("div",{className:"row row-cols-1 row-cols-md-3 g-4",children:t.map((function(e){var t=e._id,n=e.name,a=e.image,s=e.price;return Object(N.jsx)("div",{className:"col mb-5",children:Object(N.jsxs)("div",{className:"card card-medium-width text-center h-100",children:[Object(N.jsx)("img",{className:"card-img-top mediumPicSize",src:a,alt:n}),Object(N.jsxs)("div",{className:"card-body mb-5",children:[Object(N.jsxs)("h5",{children:[" ",n," "]}),Object(N.jsxs)("p",{children:[" ",s," \u20ac "]}),Object(N.jsx)(v.b,{className:"btn btn-outline-dark",to:"/plants/read/".concat(t),children:" Details "})]})]})},t)}))})]})})]}):Object(N.jsx)("div",{class:"spinner-grow text-success m-5",role:"status",children:Object(N.jsx)("span",{class:"visually-hidden",children:" Loading... "})})},w=function(e){var t=e.error,n=e.onSignUp,s=e.onResetError,c=e.onResetNewRequestsReceived;return Object(a.useEffect)((function(){s(),c(),m.animateScroll.scrollToTop()}),[]),Object(N.jsx)("div",{className:"container row mt-5",children:Object(N.jsxs)("div",{className:"mt-5 col-11 col-md-5 offset-1 offset-md-5",children:[Object(N.jsx)("h2",{className:"mb-5",children:" Sign Up "}),Object(N.jsxs)("form",{onSubmit:n,children:[Object(N.jsxs)("div",{className:"form-group",children:[Object(N.jsx)("label",{htmlFor:"InputUsername",children:" Username "}),Object(N.jsx)("input",{type:"text",className:"form-control",id:"InputUsername",name:"username"})]}),Object(N.jsxs)("div",{className:"form-group",children:[Object(N.jsx)("label",{htmlFor:"InputEmail",children:" Email address "}),Object(N.jsx)("input",{type:"email",className:"form-control",id:"InputEmail",name:"email"})]}),Object(N.jsxs)("div",{className:"form-group",children:[Object(N.jsx)("label",{htmlFor:"InputPassword",children:" Password "}),Object(N.jsx)("input",{name:"password",type:"password",className:"form-control",id:"InputPassword"})]}),t?Object(N.jsxs)("p",{className:"warningColor",children:[" ",t," "]}):null,Object(N.jsx)("button",{type:"submit",className:"btn btn-primary mt-4 btn-outline-dark",children:" Sign up "}),Object(N.jsx)("p",{className:"padding",children:" Already have an account? "}),Object(N.jsx)(v.b,{to:"/signin",children:" Sign in "})]})]})})},k=function(e){var t=e.error,n=e.onSignIn,s=e.onResetError,c=e.onResetNewRequestsReceived;return Object(a.useEffect)((function(){s(),c(),m.animateScroll.scrollToTop()}),[]),Object(N.jsx)("div",{className:"container row mt-5 custom fullscreen",children:Object(N.jsxs)("div",{className:"mt-5 col-11 col-md-5 offset-1 offset-md-5",children:[Object(N.jsx)("h2",{className:"mb-5",children:" Sign In "}),Object(N.jsxs)("form",{onSubmit:n,children:[Object(N.jsxs)("div",{className:"form-group",children:[Object(N.jsx)("label",{htmlFor:"InputEmail",children:" Email address "}),Object(N.jsx)("input",{type:"email",className:"form-control",id:"InputEmail",name:"email"})]}),Object(N.jsxs)("div",{className:"form-group",children:[Object(N.jsx)("label",{htmlFor:"InputPassword",children:" Password "}),Object(N.jsx)("input",{name:"password",type:"password",className:"form-control",id:"InputPassword"})]}),t?Object(N.jsxs)("p",{className:"warningColor",children:[" ",t," "]}):null,Object(N.jsx)("button",{type:"submit",className:"btn btn-primary mt-4 btn-outline-dark",children:" Sign in "})]})]})})},P=function(e){var t=e.onLogOut,n=e.onResetNewRequestsReceived;return Object(a.useEffect)((function(){t(),n(),m.animateScroll.scrollToTop()}),[]),Object(N.jsx)("div",{})},I=function(e){var t=e.user,n=e.headerHeight,s=e.introHeight,c=e.error,r=e.onCreatePlant,l=e.onResetError;return Object(a.useEffect)((function(){l(),m.animateScroll.scrollToTop()}),[]),t?Object(N.jsx)("div",{className:"container row mt-5 fullscreen",children:Object(N.jsxs)("div",{className:"mt-5 col-11 col-md-5 offset-1 offset-md-6",children:[Object(N.jsx)("h2",{className:"mb-5",children:" Create a plant "}),Object(N.jsxs)("form",{onSubmit:r,children:[Object(N.jsx)("input",{className:"mb-4",name:"name",type:"text",placeholder:"Enter name"}),Object(N.jsx)("input",{className:"mb-4",name:"description",type:"text",placeholder:"Enter description"}),Object(N.jsx)("input",{className:"mb-4 smallWidth",name:"size",type:"number",min:"1",placeholder:"Size"})," cm ",Object(N.jsx)("br",{}),Object(N.jsxs)("select",{className:"mb-4 p-1",name:"location",type:"text",children:[Object(N.jsx)("option",{children:" Select location "}),Object(N.jsx)("option",{value:"sun",children:" sun "}),Object(N.jsx)("option",{value:"shade",children:" shade "}),Object(N.jsx)("option",{value:"sun and shade",children:" sun and shade "})]}),Object(N.jsx)("br",{}),Object(N.jsx)("input",{className:"mb-4 smallWidth",name:"price",type:"number",min:"1",placeholder:"Price"})," \u20ac ",Object(N.jsx)("br",{}),Object(N.jsx)("input",{className:"mb-4",name:"plantImage",type:"file"}),c?Object(N.jsxs)("p",{className:"warningColor",children:[" ",c," "]}):null,Object(N.jsxs)("div",{className:"col-12",children:[Object(N.jsx)("button",{className:"btn btn-sm btn-outline-dark",type:"submit",children:" Create "}),Object(N.jsxs)(v.b,{to:"/",onClick:function(){return m.animateScroll.scrollTo(n+s)},children:[" ",Object(N.jsx)("button",{className:"btn btn-sm mx-5",children:" Go back "})," "]})]})]})]})}):Object(N.jsx)(j.a,{to:"/signup"})},E=function(e){var t=e.match,n=e.user,s=e.plant,c=e.headerHeight,r=e.introHeight,l=e.onReadPlant,i=e.onDeletePlant;if(Object(a.useEffect)((function(){l(t.params.plantId),m.animateScroll.scrollToTop()}),[]),!n)return Object(N.jsx)(j.a,{to:"/signup"});var o=s._id,d=s.name,u=s.description,h=s.size,b=s.image,p=s.imagePublicId,O=s.location,f=s.price,g=s.creator;return g?Object(N.jsxs)("div",{className:"container mt-5 row row-md-10 offset-md-4",children:[Object(N.jsx)("div",{className:"mt-4 mb-3 pt-4 container",children:Object(N.jsx)("h2",{children:" Plant details "})}),Object(N.jsx)("div",{className:"col",children:Object(N.jsxs)("div",{className:"card cardMediumWidth",children:[b?Object(N.jsx)("img",{className:"card-img-top mediumPicSize",src:b,alt:d}):null,Object(N.jsxs)("div",{className:"ml-2 mt-2",children:[" ",Object(N.jsx)("span",{children:" Name: "})," ",d," "]}),Object(N.jsxs)("div",{className:"ml-2 mt-2",children:[" ",Object(N.jsx)("span",{children:" Description: "})," ",u," "]}),Object(N.jsxs)("div",{className:"ml-2 mt-2",children:[" ",Object(N.jsx)("span",{children:" Size: "})," ",h," cm "]}),Object(N.jsxs)("div",{className:"ml-2 mt-2",children:[" ",Object(N.jsx)("span",{children:" Likes: "})," ",O," "]}),Object(N.jsxs)("div",{className:"ml-2 mt-2",children:[" ",Object(N.jsx)("span",{children:" Price: "})," ",f," \u20ac "]}),Object(N.jsx)("div",{className:"ml-2 mt-2 col justify-content-center",children:Object(N.jsx)("div",{className:"row-2 justify-content-center",children:Object(N.jsxs)("div",{className:"card-body",children:[n._id===g._id?Object(N.jsxs)("div",{children:[Object(N.jsxs)(v.b,{to:"/plants/update",children:[" ",Object(N.jsx)("button",{className:"btn btn-sm ml-2 btn-outline-dark",children:" Update "})," "]}),Object(N.jsx)("button",{className:"btn btn-sm ml-2 btn-outline-dark",onClick:function(){return i(o,p)},children:" Delete "})]}):Object(N.jsxs)("div",{children:[Object(N.jsxs)(v.b,{to:{pathname:"/plants/checkout/".concat(o),plant:s},children:[" ",Object(N.jsx)("button",{className:"btn btn-sm ml-2 btn-outline-dark",children:" Buy "})," "]}),Object(N.jsxs)(v.b,{to:{pathname:"/requests/create",plant:s},children:[" ",Object(N.jsx)("button",{className:"btn btn-sm ml-2 btn-outline-dark",children:" Swap "})," "]})]}),Object(N.jsxs)(v.b,{to:"/",onClick:function(){return m.animateScroll.scrollTo(c+r)},children:[" ",Object(N.jsx)("button",{className:"btn btn-sm ml-2",children:" Go back "})," "]})]})})})]})})]}):Object(N.jsx)("div",{class:"spinner-grow text-success m-5",role:"status",children:Object(N.jsx)("span",{class:"visually-hidden",children:" Loading... "})})},H=function(e){var t=e.plant,n=e.onNameChange,s=e.onDescriptionChange,c=e.onSizeChange,r=e.onPriceChange,l=e.onLocationChange,i=e.onImageChange,o=e.onUpdatePlant;Object(a.useEffect)((function(){return m.animateScroll.scrollToTop()}),[]);var d=t._id,u=t.name,h=t.description,b=t.size,j=t.image,p=t.price;return Object(N.jsx)("div",{className:"container row mt-5 ",children:Object(N.jsxs)("div",{className:"mt-2 col-11 col-md-5 offset-1 offset-md-5",children:[Object(N.jsx)("h2",{className:"mt-5 mb-4",children:" Update your plant "}),Object(N.jsxs)("div",{className:"card cardSmallWidth mb-5",children:[Object(N.jsx)("img",{className:"mb-2 smallPicSize",src:j,alt:u}),Object(N.jsxs)("div",{className:"card-body",children:[Object(N.jsx)("input",{className:"mb-2",onChange:i,type:"file"}),Object(N.jsx)("input",{className:"mb-2",type:"text",onChange:n,value:u}),Object(N.jsx)("input",{className:"mb-2",type:"text",onChange:s,value:h}),Object(N.jsx)("input",{className:"mb-2 smallWidth",type:"number",onChange:c,value:b})," cm ",Object(N.jsx)("br",{}),Object(N.jsxs)("select",{className:"mb-2",onChange:l,name:"location",type:"text",placeholder:"Select",children:[Object(N.jsx)("option",{value:"sun",children:" sun "}),Object(N.jsx)("option",{value:"shade",children:" shade "}),Object(N.jsx)("option",{value:"sun and shade",children:" sun and shade "})]})," ",Object(N.jsx)("br",{}),Object(N.jsx)("input",{className:"mb-4 smallWidth",name:"price",type:"number",min:"1",onChange:r,value:p})," \u20ac",Object(N.jsxs)("div",{className:"row justify-content-around",children:[Object(N.jsx)("button",{className:"btn btn-sm btn-outline-dark",onClick:function(){return o(t)},children:" Save changes "}),Object(N.jsxs)(v.b,{to:"/plants/read/".concat(d),children:[" ",Object(N.jsx)("button",{className:"btn btn-sm mx-2",children:" Go back "})," "]})]})]})]})]})})},T=n(61),U=n(21),D=n(24),_=n.n(D),z=n(43),L=n(22),F=function(e){var t=e.plant,n=e.headerHeight,s=e.introHeight,c=e.onCheckout,r=Object(a.useState)(!1),l=Object(L.a)(r,2),i=l[0],o=l[1],d=Object(a.useState)(null),u=Object(L.a)(d,2),h=u[0],b=u[1],j=Object(a.useState)(""),O=Object(L.a)(j,2),f=O[0],g=O[1],x=Object(a.useState)(!0),y=Object(L.a)(x,2),S=y[0],R=y[1],q=Object(a.useState)(""),C=Object(L.a)(q,2),w=C[0],k=C[1],P=Object(U.useStripe)(),I=Object(U.useElements)();Object(a.useEffect)((function(){window.fetch("".concat(p,"/api/create-payment-intent"),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({price:t.price})}).then((function(e){return e.json()})).then((function(e){return k(e.clientSecret)}))}),[]);var E=function(){var e=Object(z.a)(_.a.mark((function e(t){return _.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:R(t.empty),b(t.error?t.error.message:"");case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),H=function(){var e=Object(z.a)(_.a.mark((function e(t){var n;return _.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),g(!0),e.next=4,P.confirmCardPayment(w,{payment_method:{card:I.getElement(U.CardElement)}});case 4:(n=e.sent).error?(b("Payment failed ".concat(n.error.message)),g(!1)):(b(null),g(!1),o(!0));case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),T=t._id,D=t.name,F=t.price;return Object(N.jsxs)("div",{className:"container col-9",children:[Object(N.jsxs)("form",{className:"checkoutForm mt-5",id:"payment-form",onSubmit:H,children:[Object(N.jsxs)("h2",{className:"text-center mb-2 p-2",children:["  ",D," "]}),Object(N.jsxs)("h3",{className:"text-center mb-4 p-2",children:[" ",F," \u20ac "]}),Object(N.jsx)(U.CardElement,{className:"p-2",id:"card-element",options:{style:{base:{color:"#32325d",fontFamily:"Arial, sans-serif",fontSmoothing:"antialiased",fontSize:"16px","::placeholder":{color:"#32325d"}},invalid:{color:"#fa755a",iconColor:"#fa755a"}}},onChange:E}),Object(N.jsx)("div",{className:"row justify-content-center",children:Object(N.jsx)("button",{onClick:c,className:"btn btn-sm mt-5 mb-4",disabled:f||S||i,id:"submit",children:Object(N.jsx)("span",{id:"button-text",children:f?Object(N.jsx)("div",{className:"spinner",id:"spinner"}):"Pay now"})})}),h&&Object(N.jsxs)("div",{className:"card-error",role:"alert",children:[" ",h," "]}),Object(N.jsx)("p",{className:i?"result-message text-center":"result-message hidden text-center",children:"Payment succeeded."})]}),Object(N.jsx)("div",{className:"row justify-content-center",children:i?Object(N.jsxs)(v.b,{to:"/",onClick:function(){return m.animateScroll.scrollTo(n+s)},children:[" ",Object(N.jsx)("button",{className:"btn btn-sm",children:" Go back "})," "]}):Object(N.jsxs)(v.b,{to:"/plants/read/".concat(T),children:[" ",Object(N.jsx)("button",{className:"btn btn-sm",children:" Go back "})," "]})})]})},J=Object(T.a)("pk_test_51IQBsPA6EAM4YnfDyrjHWnLHzZ5KkI9tsERzYhBGVoctZBrFUb4Sda035HvcQKpp7thFiqW6QmO8ytPbOAMTg33z00cHvcbojv"),A=function(e){var t=e.location,n=e.headerHeight,s=e.introHeight,c=e.onCheckout;return Object(a.useEffect)((function(){return m.animateScroll.scrollToTop()}),[]),Object(N.jsx)("div",{className:"container row mt-5",children:Object(N.jsx)("div",{className:"mt-5 col-11 col-md-6 offset-1 offset-md-5 App",children:Object(N.jsx)(U.Elements,{stripe:J,children:Object(N.jsx)(F,{onCheckout:c,plant:t.plant,headerHeight:n,introHeight:s})})})})},W=function(e){var t=e.user,n=e.requests,s=e.currentRequestsNumber,c=e.onFetchAllRequests,r=e.onResetNewRequestsReceived,l=function(){r(),m.animateScroll.scrollToTop()};return Object(a.useEffect)((function(){c(),l()}),[]),t?n?Object(N.jsx)("div",{className:"container row mt-5",children:Object(N.jsxs)("div",{className:"mt-5 col-11 col-md-5 offset-1 offset-md-5",children:[Object(N.jsx)("h2",{className:"mb-5",children:" Your messages "}),Object(N.jsxs)(v.b,{to:"/",onClick:l,children:[" ",Object(N.jsx)("button",{className:"btn btn-sm mt-4",children:" Go back "})," "]}),n.map((function(e){var n=e._id,a=e.buyer,s=e.seller,c=e.plant;return s._id===t._id?Object(N.jsxs)("div",{className:"card p-3 mt-4 ",children:[Object(N.jsxs)("h4",{children:[" Request for: ",c.name," "]}),Object(N.jsxs)("h5",{children:[" by: ",a.username," "]}),Object(N.jsx)("div",{children:Object(N.jsx)(v.b,{className:"btn btn-outline-dark",to:"/requests/read/".concat(n),children:" Details "})})]},n):null})),0===s?null:Object(N.jsxs)(v.b,{to:"/",onClick:l,children:[" ",Object(N.jsx)("button",{className:"btn btn-sm mt-4",children:" Go back "})," "]})]})}):Object(N.jsx)("div",{class:"spinner-grow text-success m-5",role:"status",children:Object(N.jsx)("span",{class:"visually-hidden",children:" Loading... "})}):Object(N.jsx)(j.a,{to:"/signup"})},G=function(e){var t=e.location,n=e.error,s=e.onCreateRequest,c=e.onResetError;Object(a.useEffect)((function(){c(),m.animateScroll.scrollToTop()}),[]);var r=t.plant;return Object(N.jsx)("div",{className:"container row mt-5",children:Object(N.jsxs)("div",{className:"mt-5 col-11 col-md-5 offset-1 offset-md-5",children:[Object(N.jsx)("h2",{className:"mb-5",children:" Your mesage "}),Object(N.jsxs)("form",{onSubmit:function(e){return s(e,r)},children:[Object(N.jsx)("div",{children:Object(N.jsx)("textarea",{className:"mb-4",name:"message",cols:"35",rows:"7"})}),n?Object(N.jsxs)("p",{className:"warningColor",children:[" ",n," "]}):null,Object(N.jsx)("button",{className:"btn btn-sm btn-outline-dark",type:"submit",children:" Send "}),Object(N.jsxs)(v.b,{to:"/plants/read/".concat(r._id),children:[" ",Object(N.jsx)("button",{className:"btn btn-sm mx-2",children:" Go back "})," "]})]})]})})},M=function(e){var t=e.match,n=e.request,s=e.onReadRequest,c=e.onDeleteRequest;Object(a.useEffect)((function(){s(t.params.requestId),m.animateScroll.scrollToTop()}),[]);var r=n._id,l=n.buyer,i=n.plant,o=n.message,d=n.reply;return l&&i?Object(N.jsx)("div",{className:"container row mt-5 ",children:Object(N.jsxs)("div",{className:"mt-5 col-11 col-md-5 offset-1 offset-md-5",children:[Object(N.jsx)("h2",{className:"mb-5",children:" Your request "}),Object(N.jsxs)("h4",{children:[" for: ",i.name," "]}),Object(N.jsxs)("h5",{children:[" by: ",l.username," "]}),Object(N.jsxs)("p",{children:[" ",o," "]}),d?Object(N.jsxs)("div",{children:[Object(N.jsx)("h5",{children:" Your reply: "}),Object(N.jsxs)("p",{children:[" ",d," "]})]}):null,Object(N.jsxs)("div",{children:[d?null:Object(N.jsxs)(v.b,{to:"/requests/update/".concat(r),children:[" ",Object(N.jsx)("button",{className:"btn btn-sm ml-2 btn-outline-dark",children:" Reply "})," "]}),Object(N.jsx)("button",{className:"btn btn-sm ml-2 btn-outline-dark",onClick:function(){return c(r)},children:" Delete "})]}),Object(N.jsxs)(v.b,{to:"/requests/fetch",onClick:m.animateScroll.scrollToTop,children:[" ",Object(N.jsx)("button",{className:"btn btn-sm mt-4",children:" Go back "})," "]})]})}):Object(N.jsx)("div",{class:"spinner-grow text-success m-5",role:"status",children:Object(N.jsx)("span",{class:"visually-hidden",children:" Loading... "})})},B=function(e){var t=e.request,n=e.onCreateReply,s=e.onUpdateRequest;Object(a.useEffect)((function(){return m.animateScroll.scrollToTop()}),[]);var c=t._id,r=t.message;return Object(N.jsx)("div",{className:"container row mt-5 ",children:Object(N.jsxs)("div",{className:"mt-2 col-11 col-md-5 offset-1 offset-md-5",children:[Object(N.jsx)("h2",{className:"mt-5 mb-4",children:" Reply your request "}),Object(N.jsx)("div",{className:"card cardSmallWidth mb-5",children:Object(N.jsxs)("div",{className:"card-body",children:[Object(N.jsxs)("p",{children:[" ",r," "]}),Object(N.jsx)("textarea",{className:"mb-4",name:"reply",cols:"31",rows:"6",placeholder:"Your reply",onChange:n}),Object(N.jsxs)("div",{className:"row justify-content-around",children:[Object(N.jsx)("button",{className:"btn btn-sm btn-outline-dark",onClick:function(){return s(t)},children:" Submit "}),Object(N.jsxs)(v.b,{to:"/requests/read/".concat(c),children:[" ",Object(N.jsx)("button",{className:"btn btn-sm mx-2",children:" Go back "})," "]})]})]})})]})})},Q=function(){return Object(N.jsx)("div",{className:"notFound",children:Object(N.jsxs)("div",{children:[Object(N.jsxs)("h2",{children:["Oh-oh! ",Object(N.jsx)("br",{})," ",Object(N.jsx)("br",{}),"We think you got lost in the jungle!"]}),Object(N.jsx)("h3",{children:" 404 Not Found "}),Object(N.jsxs)(v.b,{to:"/",children:[" ",Object(N.jsx)("button",{className:"btn btn-sm ml-2",children:" Take me home "})," "]})]})})},Y=function(e){Object(h.a)(n,e);var t=Object(b.a)(n);function n(){return Object(o.a)(this,n),t.apply(this,arguments)}return Object(d.a)(n,[{key:"componentDidMount",value:function(){!function(e,t){var n=document.createElement("script");n.type="text/javascript",n.async=!0,n.src="https://widget.kommunicate.io/v2/kommunicate.app",document.getElementsByTagName("head")[0].appendChild(n),window.kommunicate=t,t._globals={appId:"10b22c52854a305b79bbdecc356bea5",popupWidget:!0,automaticChatOpenOnNavigation:!0}}(document,window.kommunicate||{})}},{key:"render",value:function(){return Object(N.jsx)("div",{})}}]),n}(a.Component),K=function(e){Object(h.a)(n,e);var t=Object(b.a)(n);function n(e){var a;return Object(o.a)(this,n),(a=t.call(this,e)).state={fetchingUser:!0,loggedInUser:null,plants:[],query:"",plant:{},requests:[],request:{},currentRequestsNumber:0,initRequestsNumber:!0,newRequestsReceived:!1,headerHeight:0,introHeight:0,error:null},a.handleElementsHeight=a.handleElementsHeight.bind(Object(u.a)(a)),a.resetError=a.resetError.bind(Object(u.a)(a)),a.fetchAllPlants=a.fetchAllPlants.bind(Object(u.a)(a)),a.fetchQueryPlants=a.fetchQueryPlants.bind(Object(u.a)(a)),a.handleSearchPlant=a.handleSearchPlant.bind(Object(u.a)(a)),a.handleCreatePlant=a.handleCreatePlant.bind(Object(u.a)(a)),a.handleReadPlant=a.handleReadPlant.bind(Object(u.a)(a)),a.handleNameChange=a.handleNameChange.bind(Object(u.a)(a)),a.handleDescriptionChange=a.handleDescriptionChange.bind(Object(u.a)(a)),a.handleSizeChange=a.handleSizeChange.bind(Object(u.a)(a)),a.handlePriceChange=a.handlePriceChange.bind(Object(u.a)(a)),a.handleLocationChange=a.handleLocationChange.bind(Object(u.a)(a)),a.handleImageChange=a.handleImageChange.bind(Object(u.a)(a)),a.handleUpdatePlant=a.handleUpdatePlant.bind(Object(u.a)(a)),a.handleDeletePlant=a.handleDeletePlant.bind(Object(u.a)(a)),a.handleCheckout=a.handleCheckout.bind(Object(u.a)(a)),a.handleFetchAllRequests=a.handleFetchAllRequests.bind(Object(u.a)(a)),a.handleCheckRequests=a.handleCheckRequests.bind(Object(u.a)(a)),a.resetNewRequestsReceived=a.resetNewRequestsReceived.bind(Object(u.a)(a)),a.handleCreateRequest=a.handleCreateRequest.bind(Object(u.a)(a)),a.handleReadRequest=a.handleReadRequest.bind(Object(u.a)(a)),a.handleCreateReply=a.handleCreateReply.bind(Object(u.a)(a)),a.handleUpdateRequest=a.handleUpdateRequest.bind(Object(u.a)(a)),a.handleDeleteRequest=a.handleDeleteRequest.bind(Object(u.a)(a)),a.handleSignUp=a.handleSignUp.bind(Object(u.a)(a)),a.handleSignIn=a.handleSignIn.bind(Object(u.a)(a)),a.handleLogOut=a.handleLogOut.bind(Object(u.a)(a)),a}return Object(d.a)(n,[{key:"handleElementsHeight",value:function(){var e=Math.round(document.querySelector("#titleId").getBoundingClientRect().height),t=Math.round(document.querySelector("#aboutId").getBoundingClientRect().height);this.setState({headerHeight:e,introHeight:t})}},{key:"resetError",value:function(){this.setState({error:null})}},{key:"fetchAllPlants",value:function(){var e=this;f.a.get("".concat(p,"/api/plants/fetch")).then((function(t){return e.setState({plants:t.data})})).catch((function(e){return console.log("Fetching plants failed",e)}))}},{key:"componentDidMount",value:function(){var e=this;this.fetchAllPlants(),this.state.loggedInUser||f.a.get("".concat(p,"/api/user"),{withCredentials:!0}).then((function(t){return e.setState({loggedInUser:t.data,fetchingUser:!1})})).catch((function(t){e.setState({fetchingUser:!1}),console.log("Initializing fetching failed",t)}))}},{key:"fetchQueryPlants",value:function(){var e=this;f.a.get("".concat(p,"/api/plants/search?q=").concat(this.state.query)).then((function(t){return e.setState({plants:t.data,ready:!0})})).catch((function(e){return console.log("Query fetching failed",e)}))}},{key:"handleSearchPlant",value:function(e){var t=this,n=e.target.value;this.setState({query:n},(function(){return n?t.fetchQueryPlants():t.fetchAllPlants()}))}},{key:"handleCreatePlant",value:function(e){var t=this;e.preventDefault();var n=e.target,a=n.name,s=n.description,c=n.size,r=n.plantImage,l=n.location,o=n.price,d=r.files[0],u=new FormData;u.append("image",d),f.a.post("".concat(p,"/api/upload"),u).then((function(e){var n=e.data,r=n.image,d=n.imagePublicId,u={name:a.value,description:s.value,size:c.value,image:r,imagePublicId:d,location:l.value,price:o.value};f.a.post("".concat(p,"/api/plants/create"),u,{withCredentials:!0}).then((function(e){return t.setState({plants:[e.data].concat(Object(i.a)(t.state.plants))},(function(){t.props.history.push("/");var e=t.state,n=e.headerHeight,a=e.introHeight;m.animateScroll.scrollTo(n+a)}))})).catch((function(e){return t.setState({error:e.response.data.error})}))})).catch((function(e){return t.setState({error:e.response.data.error})}))}},{key:"handleReadPlant",value:function(e){var t=this;f.a.get("".concat(p,"/api/plants/read/").concat(e),{withCredentials:!0}).then((function(e){return t.setState({plant:e.data})})).catch((function(){return console.log("Read plant failed")}))}},{key:"handleNameChange",value:function(e){var t=JSON.parse(JSON.stringify(this.state.plant));t.name=e.target.value,this.setState({plant:t})}},{key:"handleDescriptionChange",value:function(e){var t=JSON.parse(JSON.stringify(this.state.plant));t.description=e.target.value,this.setState({plant:t})}},{key:"handleSizeChange",value:function(e){var t=JSON.parse(JSON.stringify(this.state.plant));t.size=e.target.value,this.setState({plant:t})}},{key:"handlePriceChange",value:function(e){var t=JSON.parse(JSON.stringify(this.state.plant));t.price=e.target.value,this.setState({plant:t})}},{key:"handleLocationChange",value:function(e){var t=JSON.parse(JSON.stringify(this.state.plant));t.location=e.target.value,this.setState({plant:t})}},{key:"handleImageChange",value:function(e){var t=this,n=e.target.files[0],a={imagePublicId:this.state.plant.imagePublicId};f.a.post("".concat(p,"/api/destroy"),a).then((function(){var e=new FormData;e.append("image",n),f.a.post("".concat(p,"/api/upload"),e).then((function(e){var n=JSON.parse(JSON.stringify(t.state.plant)),a=e.data,s=a.imagePublicId,c=a.image;n.imagePublicId=s,n.image=c,t.setState({plant:n})})).catch((function(e){return console.log("Image upload failed",e)}))})).catch((function(e){return console.log("Delete old image failed",e)}))}},{key:"handleUpdatePlant",value:function(e){var t=this,n=e._id,a=e.name,s=e.description,c=e.size,r=e.image,l=e.imagePublicId,i=e.location,o=e.price,d={name:a,description:s,size:c,image:r,imagePublicId:l,location:i,price:o};f.a.patch("".concat(p,"/api/plants/update/").concat(n),d).then((function(){var e=t.state.plants.map((function(e){return e._id===n&&(e.name=a,e.description=s,e.size=c,e.image=r,e.imagePublicId=l,e.location=i,e.price=o),e}));t.setState({plants:e},(function(){t.props.history.push("/");var e=t.state,n=e.headerHeight,a=e.introHeight;m.animateScroll.scrollTo(n+a)}))})).catch((function(e){return console.log("Update plant failed",e)}))}},{key:"handleDeletePlant",value:function(e,t){var n=this,a={imagePublicId:t};f.a.post("".concat(p,"/api/destroy"),a).then((function(){f.a.delete("".concat(p,"/api/plants/delete/").concat(e)).then((function(){var t=n.state.plants.filter((function(t){return t._id!==e}));n.setState({plants:t},(function(){n.props.history.push("/");var e=n.state,t=e.headerHeight,a=e.introHeight;m.animateScroll.scrollTo(t+a)}))})).catch((function(e){return console.log("Delete plant failed",e)}))})).catch((function(e){return console.log("Delete image failed",e)}))}},{key:"handleCheckout",value:function(e){var t=this;f.a.post("".concat(p,"/api/create-payment-intent"),{},{withCredentials:!0}).then((function(){return t.setState((function(){t.props.history.push("/");var e=t.state,n=e.headerHeight,a=e.introHeight;m.animateScroll.scrollTo(n+a)}))})).catch((function(e){return console.log("Checkout failed",e)}))}},{key:"handleFetchAllRequests",value:function(){var e=this;f.a.get("".concat(p,"/api/requests/fetch")).then((function(t){return e.setState({requests:t.data})})).catch((function(e){return console.log("Fetching requests failed",e)}))}},{key:"handleCheckRequests",value:function(){var e=this,t=this.state.loggedInUser;t&&f.a.get("".concat(p,"/api/requests/fetch")).then((function(n){e.setState({requests:n.data});var a=e.state.requests.filter((function(e){return e.seller._id===t._id})),s=a.length;e.state.initRequestsNumber&&e.setState({currentRequestsNumber:s,initRequestsNumber:!1}),e.state.currentRequestsNumber<s&&!1===e.state.initRequestsNumber&&a[0].seller._id===t._id&&e.setState({currentRequestsNumber:s,newRequestsReceived:!0})})).catch((function(e){return console.log("Checking requests failed",e)}))}},{key:"resetNewRequestsReceived",value:function(){this.setState({newRequestsReceived:!1})}},{key:"handleCreateRequest",value:function(e,t){var n=this;e.preventDefault();var a=e.target.message,s={seller:t.creator._id,plant:t._id,message:a.value};f.a.post("".concat(p,"/api/requests/create"),s,{withCredentials:!0}).then((function(e){return n.setState({requests:[e.data].concat(Object(i.a)(n.state.requests))},(function(){return n.props.history.push("/plants/read/".concat(t._id))}))})).catch((function(e){return n.setState({error:e.response.data.error})}))}},{key:"handleReadRequest",value:function(e){var t=this;f.a.get("".concat(p,"/api/requests/read/").concat(e),{withCredentials:!0}).then((function(e){return t.setState({request:e.data})})).catch((function(){return console.log("Read request failed")}))}},{key:"handleCreateReply",value:function(e){var t=JSON.parse(JSON.stringify(this.state.request));t.reply=e.target.value,this.setState({request:t})}},{key:"handleUpdateRequest",value:function(e){var t=this,n=e._id,a=e.buyer,s=e.seller,c=e.plant,r=e.message,l=e.reply,i={buyer:a,seller:s,plant:c,message:r,reply:l};f.a.patch("".concat(p,"/api/requests/update/").concat(n),i).then((function(){var e=t.state.requests.map((function(e){return e._id===n&&(e.buyer=a,e.seller=s,e.plant=c,e.message=r,e.reply=l),e}));t.setState({requests:e},(function(){return t.props.history.push("/requests/read/".concat(n))}))})).catch((function(e){return console.log("Update request failed",e)}))}},{key:"handleDeleteRequest",value:function(e){var t=this;f.a.delete("".concat(p,"/api/requests/delete/").concat(e)).then((function(){var n=t.state.requests.filter((function(t){return t._id!==e})),a=n.length;t.setState({requests:n,currentRequestsNumber:a},(function(){return t.props.history.push("/requests/fetch")}))})).catch((function(e){return console.log("Delete requestfailed",e)}))}},{key:"handleSignUp",value:function(e){var t=this;e.preventDefault();var n=e.target,a=n.username,s=n.email,c=n.password,r={username:a.value,email:s.value.toLowerCase(),password:c.value};f.a.post("".concat(p,"/api/signup"),r).then((function(e){return t.setState({loggedInUser:e.data},(function(){return t.props.history.push("/")}))})).catch((function(e){return t.setState({error:e.response.data.error})}))}},{key:"handleSignIn",value:function(e){var t=this;e.preventDefault();var n=e.target,a=n.email,s=n.password,c={email:a.value,password:s.value};f.a.post("".concat(p,"/api/signin"),c,{withCredentials:!0}).then((function(e){return t.setState({loggedInUser:e.data},(function(){return t.props.history.push("/")}))})).catch((function(e){return t.setState({error:e.response.data.error})}))}},{key:"handleLogOut",value:function(){var e=this;f.a.post("".concat(p,"/api/logout"),{},{withCredentials:!0}).then((function(){return e.setState({loggedInUser:null},(function(){return e.props.history.push("/")}))})).catch((function(e){return console.log("Logout failed",e)}))}},{key:"render",value:function(){var e=this,t=this.state,n=t.fetchingUser,a=t.loggedInUser,s=t.plants,c=t.query,r=t.plant,i=t.requests,o=t.request,d=t.headerHeight,u=t.introHeight,h=t.error,b=t.currentRequestsNumber,m=t.newRequestsReceived;return n?Object(N.jsx)("div",{class:"spinner-grow text-success m-5",role:"status",children:Object(N.jsx)("span",{class:"visually-hidden",children:" Loading... "})}):Object(N.jsxs)("div",{class:"main",children:[Object(N.jsx)(y,{onLogOut:this.handleLogOut,onCheckRequests:this.handleCheckRequests,newRequestsReceived:m,user:a,headerHeight:d,introHeight:u}),Object(N.jsxs)(j.d,{children:[Object(N.jsx)(j.b,{exact:!0,path:"/",render:function(){return Object(N.jsx)(C,{onSearchPlant:e.handleSearchPlant,onHandleElementsHeight:e.handleElementsHeight,plants:s,query:c,headerHeight:d})}}),Object(N.jsx)(j.b,{path:"/plants/create",render:function(t){return Object(N.jsx)(I,Object(l.a)({onCreatePlant:e.handleCreatePlant,onResetError:e.resetError,user:a,headerHeight:d,introHeight:u,error:h},t))}}),Object(N.jsx)(j.b,{path:"/plants/read/:plantId",render:function(t){return Object(N.jsx)(E,Object(l.a)({onReadPlant:e.handleReadPlant,onDeletePlant:e.handleDeletePlant,plant:r,user:a,headerHeight:d,introHeight:u},t))}}),Object(N.jsx)(j.b,{path:"/plants/update",render:function(t){return Object(N.jsx)(H,Object(l.a)({onNameChange:e.handleNameChange,onDescriptionChange:e.handleDescriptionChange,onSizeChange:e.handleSizeChange,onPriceChange:e.handlePriceChange,onLocationChange:e.handleLocationChange,onImageChange:e.handleImageChange,onUpdatePlant:e.handleUpdatePlant,plant:r,headerHeight:d,introHeight:u},t))}}),Object(N.jsx)(j.b,{path:"/plants/checkout/:plantId",render:function(t){return Object(N.jsx)(A,Object(l.a)({onCheckout:e.handleCheckout,headerHeight:d,introHeight:u},t))}}),Object(N.jsx)(j.b,{path:"/requests/fetch",render:function(t){return Object(N.jsx)(W,Object(l.a)({onFetchAllRequests:e.handleFetchAllRequests,onResetNewRequestsReceived:e.resetNewRequestsReceived,user:a,requests:i,currentRequestsNumber:b},t))}}),Object(N.jsx)(j.b,{path:"/requests/create",render:function(t){return Object(N.jsx)(G,Object(l.a)({onCreateRequest:e.handleCreateRequest,onResetError:e.resetError,user:a,error:h},t))}}),Object(N.jsx)(j.b,{path:"/requests/read/:requestId",render:function(t){return Object(N.jsx)(M,Object(l.a)({onReadRequest:e.handleReadRequest,onDeleteRequest:e.handleDeleteRequest,request:o,user:a},t))}}),Object(N.jsx)(j.b,{path:"/requests/update",render:function(t){return Object(N.jsx)(B,Object(l.a)({onCreateReply:e.handleCreateReply,onUpdateRequest:e.handleUpdateRequest,request:o},t))}}),Object(N.jsx)(j.b,{path:"/signup",render:function(t){return Object(N.jsx)(w,Object(l.a)({onSignUp:e.handleSignUp,onResetError:e.resetError,onResetNewRequestsReceived:e.resetNewRequestsReceived,error:h},t))}}),Object(N.jsx)(j.b,{path:"/signin",render:function(t){return Object(N.jsx)(k,Object(l.a)({onSignIn:e.handleSignIn,onResetError:e.resetError,onResetNewRequestsReceived:e.resetNewRequestsReceived,error:h},t))}}),Object(N.jsx)(j.b,{path:"/logout",render:function(t){return Object(N.jsx)(P,Object(l.a)({onLogOut:e.handleLogOut,onResetNewRequestsReceived:e.resetNewRequestsReceived},t))}}),Object(N.jsx)(j.b,{component:Q})]}),Object(N.jsx)(Y,{}),Object(N.jsx)(S,{})]})}}]),n}(a.Component),Z=Object(j.g)(K);r.a.render(Object(N.jsx)(s.a.StrictMode,{children:Object(N.jsx)(v.a,{children:Object(N.jsx)(Z,{})})}),document.querySelector("#root"))},66:function(e,t,n){},95:function(e,t,n){}},[[103,1,2]]]);
//# sourceMappingURL=main.a4d89cf8.chunk.js.map
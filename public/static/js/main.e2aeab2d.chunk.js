(this["webpackJsonpjungle-swap-client"]=this["webpackJsonpjungle-swap-client"]||[]).push([[0],{61:function(e,t,n){},90:function(e,t,n){},98:function(e,t,n){"use strict";n.r(t);var c=n(1),a=n.n(c),s=n(18),r=n.n(s),i=(n(61),n(15)),l=n(39),o=n(8),d=n(7),u=n(5),j="https://jungleswap.herokuapp.com",b=n(6),m=n.n(b),h=(n(89),n(90),n(101)),p=n(102),O=n(3),f=n(0),x=function(e){var t=e.user,n=e.newRequestsReceived,c=e.headerHeight,a=e.aboutHeight;return Object(f.jsx)("div",{children:Object(f.jsxs)(h.a,{className:"pl-5",variant:"dark",expand:"lg",fixed:"top",children:[Object(f.jsx)(h.a.Brand,{href:"/",children:" JungleSwap "}),Object(f.jsx)(h.a.Toggle,{"aria-controls":"basic-navbar-nav"}),Object(f.jsx)(h.a.Collapse,{id:"basic-navbar-nav",children:Object(f.jsxs)(p.a,{className:"mr-auto",children:[Object(f.jsx)("div",{children:Object(f.jsx)(O.b,{to:"/",className:"p-2",onClick:function(){return u.animateScroll.scrollTo(c+a)},children:" All Plants "})}),t?Object(f.jsxs)("div",{children:[Object(f.jsx)(O.b,{className:"p-2",to:"/plants/create",children:" Create Plant "}),Object(f.jsx)(O.b,{className:n?"p-2 alertColor":"p-2",to:"/requests/fetch",title:n?"new message":null,children:" Messages "})]}):null,t?Object(f.jsx)("div",{children:Object(f.jsx)(O.b,{className:"p-2",to:"/logout",title:t.username,children:" Log out "})}):Object(f.jsxs)("div",{children:[Object(f.jsx)(O.b,{className:"p-2",to:"/signin",children:" Sign in "}),Object(f.jsx)(O.b,{className:"p-2",to:"/signup",children:" Sign up "})]})]})})]})})},g=function(){return Object(f.jsx)("div",{className:"footer-row",children:Object(f.jsxs)("footer",{children:["\xa9 2021",Object(f.jsx)(O.b,{href:"https://www.linkedin.com/in/christian-gerbig/",children:" Christian Gerbig "}),"&",Object(f.jsx)(O.b,{href:"https://www.linkedin.com/in/lisa-montebaur/",children:" Lisa Montebaur "})]})})},v=n.p+"static/media/JungleSwap_Home.c4ed9b4c.png",N=n.p+"static/media/JungleSwap_Icon.a6c7c44a.png",y=function(e){var t=e.plants,n=e.query,a=e.headerHeight,s=e.onSearchPlant,r=e.onGetElementsHeight;return Object(c.useEffect)((function(){return r()}),[]),t?Object(f.jsxs)("div",{children:[Object(f.jsx)("header",{className:"text-center pt-5 pb-5 headerImg",id:"titleId",children:Object(f.jsx)("div",{className:"row my-5",children:Object(f.jsxs)("div",{className:"col-6 offset-3 my-5 borderAround",children:[Object(f.jsx)("h2",{className:"title mb-2",children:" JungleSwap "}),Object(f.jsx)("h5",{className:"mt-3 mb-5",children:" Share your green heart "}),Object(f.jsx)("div",{className:"mb-5",children:Object(f.jsx)(O.b,{className:"biggerFontSize",onClick:function(){return u.animateScroll.scrollTo(a)},children:" Try it! "})})]})})}),Object(f.jsx)("section",{id:"aboutId",children:Object(f.jsx)("div",{className:"about centered container",children:Object(f.jsxs)("div",{className:"row",children:[Object(f.jsx)("div",{className:"col-sm-6 col-md-5 col-lg-6",children:Object(f.jsx)("img",{className:"image",src:v,alt:"plants"})}),Object(f.jsx)("br",{}),Object(f.jsxs)("div",{className:"about col-sm-6 col-md-5 col-lg-6 px-5 noOverflow",children:[Object(f.jsx)("h4",{children:" Welcome to JungleSwap! "}),Object(f.jsx)("h5",{children:" Add green to your Home "}),Object(f.jsxs)("p",{children:[' It"s easy-peasy. ',Object(f.jsx)("br",{}),"Share your plant offshoots. ",Object(f.jsx)("br",{}),"Make money! ",Object(f.jsx)("br",{}),"Or swap them for another plant. ",Object(f.jsx)("br",{}),'Don"t have any baby plants? ',Object(f.jsx)("br",{}),"You can simply shop and give a plant a new home."]}),Object(f.jsx)("img",{className:"icon",src:N,alt:"icon"})]})]})})}),Object(f.jsx)("section",{children:Object(f.jsxs)("div",{className:"container mt-5",children:[Object(f.jsxs)("div",{className:"mt-5 mb-3",children:[Object(f.jsx)("h2",{children:" Plants "}),Object(f.jsx)("hr",{}),Object(f.jsx)("h4",{children:" Search a plant "})]}),Object(f.jsx)("div",{className:"mb-4",children:Object(f.jsx)("input",{className:"smallWidth form-control",type:"text",placeholder:"Search...",value:n,onChange:s})}),Object(f.jsx)("div",{className:"row row-cols-1 row-cols-md-3 g-4",children:t.map((function(e){var t=e._id,n=e.name,c=e.image,a=e.price;return Object(f.jsx)("div",{className:"col mb-5",children:Object(f.jsxs)("div",{className:"card card-medium-width text-center h-100",children:[Object(f.jsx)("img",{className:"card-img-top mediumPicSize",src:c,alt:n}),Object(f.jsxs)("div",{className:"card-body mb-5",children:[Object(f.jsxs)("h5",{children:[" ",n," "]}),Object(f.jsxs)("p",{children:[" ",a," \u20ac "]}),Object(f.jsx)(O.b,{className:"btn btn-outline-dark",to:"/plants/read/".concat(t),children:" Details "})]})]})},t)}))})]})})]}):Object(f.jsx)("div",{class:"spinner-grow text-success m-5",role:"status",children:Object(f.jsx)("span",{class:"visually-hidden",children:" Loading... "})})},S=function(e){var t=e.error,n=e.onSignUp,a=e.onClearError,s=e.onClearRequestsReceived;return Object(c.useEffect)((function(){a(),s(),u.animateScroll.scrollToTop()}),[]),Object(f.jsx)("div",{className:"container row mt-5",children:Object(f.jsxs)("div",{className:"mt-5 col-11 col-md-5 offset-1 offset-md-5",children:[Object(f.jsx)("h2",{className:"mb-5",children:" Sign Up "}),Object(f.jsxs)("form",{onSubmit:n,children:[Object(f.jsxs)("div",{className:"form-group",children:[Object(f.jsx)("label",{htmlFor:"InputUsername",children:" Username "}),Object(f.jsx)("input",{type:"text",className:"form-control",id:"InputUsername",name:"username"})]}),Object(f.jsxs)("div",{className:"form-group",children:[Object(f.jsx)("label",{htmlFor:"InputEmail",children:" Email address "}),Object(f.jsx)("input",{type:"email",className:"form-control",id:"InputEmail",name:"email"})]}),Object(f.jsxs)("div",{className:"form-group",children:[Object(f.jsx)("label",{htmlFor:"InputPassword",children:" Password "}),Object(f.jsx)("input",{name:"password",type:"password",className:"form-control",id:"InputPassword"})]}),t?Object(f.jsxs)("p",{className:"warningColor",children:[" ",t," "]}):null,Object(f.jsx)("button",{type:"submit",className:"btn btn-primary mt-4 btn-outline-dark",children:" Sign up "}),Object(f.jsx)("p",{className:"padding",children:" Already have an account? "}),Object(f.jsx)(O.b,{to:"/signin",children:" Sign in "})]})]})})},w=function(e){var t=e.error,n=e.onSignIn,a=e.onClearError,s=e.onClearRequestsReceived;return Object(c.useEffect)((function(){a(),s(),u.animateScroll.scrollToTop()}),[]),Object(f.jsx)("div",{className:"container row mt-5 custom fullscreen",children:Object(f.jsxs)("div",{className:"mt-5 col-11 col-md-5 offset-1 offset-md-5",children:[Object(f.jsx)("h2",{className:"mb-5",children:" Sign In "}),Object(f.jsxs)("form",{onSubmit:n,children:[Object(f.jsxs)("div",{className:"form-group",children:[Object(f.jsx)("label",{htmlFor:"InputEmail",children:" Email address "}),Object(f.jsx)("input",{type:"email",className:"form-control",id:"InputEmail",name:"email"})]}),Object(f.jsxs)("div",{className:"form-group",children:[Object(f.jsx)("label",{htmlFor:"InputPassword",children:" Password "}),Object(f.jsx)("input",{name:"password",type:"password",className:"form-control",id:"InputPassword"})]}),t?Object(f.jsxs)("p",{className:"warningColor",children:[" ",t," "]}):null,Object(f.jsx)("button",{type:"submit",className:"btn btn-primary mt-4 btn-outline-dark",children:" Sign in "})]})]})})},C=function(e){var t=e.onLogOut,n=e.onClearRequestsReceived;return Object(c.useEffect)((function(){t(),n(),u.animateScroll.scrollToTop()}),[]),Object(f.jsx)("div",{})},q=function(e){var t=e.user,n=e.headerHeight,a=e.aboutHeight,s=e.error,r=e.onCreatePlant,i=e.onClearError;return Object(c.useEffect)((function(){return i(),u.animateScroll.scrollToTop(),function(){return u.animateScroll.scrollTo(n+a)}}),[]),t?Object(f.jsx)("div",{className:"container row mt-5 fullscreen",children:Object(f.jsxs)("div",{className:"mt-5 col-11 col-md-5 offset-1 offset-md-6",children:[Object(f.jsx)("h2",{className:"mb-5",children:" Create a plant "}),Object(f.jsxs)("form",{onSubmit:r,children:[Object(f.jsx)("input",{className:"mb-4",name:"name",type:"text",placeholder:"Enter name"}),Object(f.jsx)("input",{className:"mb-4",name:"description",type:"text",placeholder:"Enter description"}),Object(f.jsx)("input",{className:"mb-4 smallWidth",name:"size",type:"number",min:"1",placeholder:"Size"})," cm ",Object(f.jsx)("br",{}),Object(f.jsxs)("select",{className:"mb-4 p-1",name:"location",type:"text",children:[Object(f.jsx)("option",{children:" Select location "}),Object(f.jsx)("option",{value:"sun",children:" sun "}),Object(f.jsx)("option",{value:"shade",children:" shade "}),Object(f.jsx)("option",{value:"sun and shade",children:" sun and shade "})]}),Object(f.jsx)("br",{}),Object(f.jsx)("input",{className:"mb-4 smallWidth",name:"price",type:"number",min:"1",placeholder:"Price"})," \u20ac ",Object(f.jsx)("br",{}),Object(f.jsx)("input",{className:"mb-4",name:"plantImage",type:"file"}),s?Object(f.jsxs)("p",{className:"warningColor",children:[" ",s," "]}):null,Object(f.jsxs)("div",{className:"col-12",children:[Object(f.jsx)("button",{className:"btn btn-sm btn-outline-dark",type:"submit",children:" Create "}),Object(f.jsxs)(O.b,{to:"/",children:[" ",Object(f.jsx)("button",{className:"btn btn-sm mx-5",children:" Go back "})," "]})]})]})]})}):Object(f.jsx)(d.a,{to:"/signup"})},k=function(e){var t=e.match,n=e.user,a=e.plant,s=e.headerHeight,r=e.aboutHeight,i=e.onReadPlant,l=e.onDeletePlant;if(Object(c.useEffect)((function(){i(t.params.plantId),u.animateScroll.scrollToTop()}),[]),!n)return Object(f.jsx)(d.a,{to:"/signup"});var o=a._id,j=a.name,b=a.description,m=a.size,h=a.image,p=a.imagePublicId,x=a.location,g=a.price,v=a.creator;return v?Object(f.jsxs)("div",{className:"container mt-5 row row-md-10 offset-md-4",children:[Object(f.jsx)("div",{className:"mt-4 mb-3 pt-4 container",children:Object(f.jsx)("h2",{children:" Plant details "})}),Object(f.jsx)("div",{className:"col",children:Object(f.jsxs)("div",{className:"card cardMediumWidth",children:[h?Object(f.jsx)("img",{className:"card-img-top mediumPicSize",src:h,alt:j}):null,Object(f.jsxs)("div",{className:"ml-2 mt-2",children:[" ",Object(f.jsx)("span",{children:" Name: "})," ",j," "]}),Object(f.jsxs)("div",{className:"ml-2 mt-2",children:[" ",Object(f.jsx)("span",{children:" Description: "})," ",b," "]}),Object(f.jsxs)("div",{className:"ml-2 mt-2",children:[" ",Object(f.jsx)("span",{children:" Size: "})," ",m," cm "]}),Object(f.jsxs)("div",{className:"ml-2 mt-2",children:[" ",Object(f.jsx)("span",{children:" Likes: "})," ",x," "]}),Object(f.jsxs)("div",{className:"ml-2 mt-2",children:[" ",Object(f.jsx)("span",{children:" Price: "})," ",g," \u20ac "]}),Object(f.jsx)("div",{className:"ml-2 mt-2 col justify-content-center",children:Object(f.jsx)("div",{className:"row-2 justify-content-center",children:Object(f.jsxs)("div",{className:"card-body",children:[n._id===v._id?Object(f.jsxs)("div",{children:[Object(f.jsxs)(O.b,{to:"/plants/update",children:[" ",Object(f.jsx)("button",{className:"btn btn-sm ml-2 btn-outline-dark",children:" Update "})," "]}),Object(f.jsx)("button",{className:"btn btn-sm ml-2 btn-outline-dark",onClick:function(){return l(o,p)},children:" Delete "})]}):Object(f.jsxs)("div",{children:[Object(f.jsxs)(O.b,{to:{pathname:"/plants/checkout/".concat(o),plant:a},children:[" ",Object(f.jsx)("button",{className:"btn btn-sm ml-2 btn-outline-dark",children:" Buy "})," "]}),Object(f.jsxs)(O.b,{to:{pathname:"/requests/create",plant:a},children:[" ",Object(f.jsx)("button",{className:"btn btn-sm ml-2 btn-outline-dark",children:" Swap "})," "]})]}),Object(f.jsxs)(O.b,{to:"/",onClick:function(){return u.animateScroll.scrollTo(s+r)},children:[" ",Object(f.jsx)("button",{className:"btn btn-sm ml-2",children:" Go back "})," "]})]})})})]})})]}):Object(f.jsx)("div",{class:"spinner-grow text-success m-5",role:"status",children:Object(f.jsx)("span",{class:"visually-hidden",children:" Loading... "})})},I=function(e){var t=e.plant,n=e.onNameChange,a=e.onDescriptionChange,s=e.onSizeChange,r=e.onPriceChange,i=e.onLocationChange,l=e.onImageChange,o=e.onUpdatePlant;Object(c.useEffect)((function(){return u.animateScroll.scrollToTop()}),[]);var d=t._id,j=t.name,b=t.description,m=t.size,h=t.image,p=t.price;return Object(f.jsx)("div",{className:"container row mt-5 ",children:Object(f.jsxs)("div",{className:"mt-2 col-11 col-md-5 offset-1 offset-md-5",children:[Object(f.jsx)("h2",{className:"mt-5 mb-4",children:" Update your plant "}),Object(f.jsxs)("div",{className:"card cardSmallWidth mb-5",children:[Object(f.jsx)("img",{className:"mb-2 smallPicSize",src:h,alt:j}),Object(f.jsxs)("div",{className:"card-body",children:[Object(f.jsx)("input",{className:"mb-2",onChange:l,type:"file"}),Object(f.jsx)("input",{className:"mb-2",type:"text",onChange:n,value:j}),Object(f.jsx)("input",{className:"mb-2",type:"text",onChange:a,value:b}),Object(f.jsx)("input",{className:"mb-2 smallWidth",type:"number",onChange:s,value:m})," cm ",Object(f.jsx)("br",{}),Object(f.jsxs)("select",{className:"mb-2",onChange:i,name:"location",type:"text",placeholder:"Select",children:[Object(f.jsx)("option",{value:"sun",children:" sun "}),Object(f.jsx)("option",{value:"shade",children:" shade "}),Object(f.jsx)("option",{value:"sun and shade",children:" sun and shade "})]})," ",Object(f.jsx)("br",{}),Object(f.jsx)("input",{className:"mb-4 smallWidth",name:"price",type:"number",min:"1",onChange:r,value:p})," \u20ac",Object(f.jsxs)("div",{className:"row justify-content-around",children:[Object(f.jsx)("button",{className:"btn btn-sm btn-outline-dark",onClick:function(){return o(t)},children:" Save changes "}),Object(f.jsxs)(O.b,{to:"/plants/read/".concat(d),children:[" ",Object(f.jsx)("button",{className:"btn btn-sm mx-2",children:" Go back "})," "]})]})]})]})]})})},E=n(56),P=n(21),R=n(23),T=n.n(R),H=n(38),_=function(e){var t=e.plant,n=e.headerHeight,a=e.aboutHeight,s=e.onCheckout,r=Object(c.useState)(!1),i=Object(o.a)(r,2),l=i[0],d=i[1],b=Object(c.useState)(null),m=Object(o.a)(b,2),h=m[0],p=m[1],x=Object(c.useState)(""),g=Object(o.a)(x,2),v=g[0],N=g[1],y=Object(c.useState)(!0),S=Object(o.a)(y,2),w=S[0],C=S[1],q=Object(c.useState)(""),k=Object(o.a)(q,2),I=k[0],E=k[1],R=Object(P.useStripe)(),_=Object(P.useElements)();Object(c.useEffect)((function(){return window.fetch("".concat(j,"/api/create-payment-intent"),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({price:t.price})}).then((function(e){return e.json()})).then((function(e){return E(e.clientSecret)})),function(){return u.animateScroll.scrollTo(n+a)}}),[]);var D=function(){var e=Object(H.a)(T.a.mark((function e(t){return T.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:C(t.empty),p(t.error?t.error.message:"");case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),z=function(){var e=Object(H.a)(T.a.mark((function e(t){var n;return T.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),N(!0),e.next=4,R.confirmCardPayment(I,{payment_method:{card:_.getElement(P.CardElement)}});case 4:(n=e.sent).error?(p("Payment failed ".concat(n.error.message)),N(!1)):(p(null),N(!1),d(!0));case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),J=t._id,F=t.name,L=t.price;return Object(f.jsxs)("div",{className:"container col-9",children:[Object(f.jsxs)("form",{className:"checkoutForm mt-5",id:"payment-form",onSubmit:z,children:[Object(f.jsxs)("h2",{className:"text-center mb-2 p-2",children:["  ",F," "]}),Object(f.jsxs)("h3",{className:"text-center mb-4 p-2",children:[" ",L," \u20ac "]}),Object(f.jsx)(P.CardElement,{className:"p-2",id:"card-element",options:{style:{base:{color:"#32325d",fontFamily:"Arial, sans-serif",fontSmoothing:"antialiased",fontSize:"16px","::placeholder":{color:"#32325d"}},invalid:{color:"#fa755a",iconColor:"#fa755a"}}},onChange:D}),Object(f.jsx)("div",{className:"row justify-content-center",children:Object(f.jsx)("button",{onClick:s,className:"btn btn-sm mt-5 mb-4",disabled:v||w||l,id:"submit",children:Object(f.jsx)("span",{id:"button-text",children:v?Object(f.jsx)("div",{className:"spinner",id:"spinner"}):"Pay now"})})}),h&&Object(f.jsxs)("div",{className:"card-error",role:"alert",children:[" ",h," "]}),Object(f.jsx)("p",{className:l?"result-message text-center":"result-message hidden text-center",children:"Payment succeeded."})]}),Object(f.jsx)("div",{className:"row justify-content-center",children:l?Object(f.jsxs)(O.b,{to:"/",children:[" ",Object(f.jsx)("button",{className:"btn btn-sm",children:" Go back "})," "]}):Object(f.jsxs)(O.b,{to:"/plants/read/".concat(J),children:[" ",Object(f.jsx)("button",{className:"btn btn-sm",children:" Go back "})," "]})})]})},D=Object(E.a)("pk_test_51IQBsPA6EAM4YnfDyrjHWnLHzZ5KkI9tsERzYhBGVoctZBrFUb4Sda035HvcQKpp7thFiqW6QmO8ytPbOAMTg33z00cHvcbojv"),z=function(e){var t=e.location,n=e.headerHeight,a=e.aboutHeight,s=e.onCheckout;return Object(c.useEffect)((function(){return u.animateScroll.scrollToTop()}),[]),Object(f.jsx)("div",{className:"container row mt-5",children:Object(f.jsx)("div",{className:"mt-5 col-11 col-md-6 offset-1 offset-md-5 App",children:Object(f.jsx)(P.Elements,{stripe:D,children:Object(f.jsx)(_,{onCheckout:s,plant:t.plant,headerHeight:n,aboutHeight:a})})})})},J=function(e){var t=e.user,n=e.requests,a=e.requestsNumber,s=e.onFetchAllRequests,r=e.onClearRequestsReceived,i=function(){r(),u.animateScroll.scrollToTop()};return Object(c.useEffect)((function(){return s(),i(),function(){i()}}),[]),t?n?Object(f.jsx)("div",{className:"container row mt-5",children:Object(f.jsxs)("div",{className:"mt-5 col-11 col-md-5 offset-1 offset-md-5",children:[Object(f.jsx)("h2",{children:" Your messages "}),Object(f.jsxs)("h3",{className:"mb-4",children:[" [",a,"] "]}),Object(f.jsxs)(O.b,{to:"/",children:[" ",Object(f.jsx)("button",{className:"btn btn-sm mt-4",children:" Go back "})," "]}),n.map((function(e){var n=e._id,c=e.buyer,a=e.seller,s=e.plant;return a._id===t._id?Object(f.jsxs)("div",{className:"card p-3 mt-4 ",children:[Object(f.jsxs)("h4",{children:[" Request for: ",s.name," "]}),Object(f.jsxs)("h5",{children:[" by: ",c.username," "]}),Object(f.jsx)("div",{children:Object(f.jsx)(O.b,{className:"btn btn-outline-dark",to:"/requests/read/".concat(n),children:" Details "})})]},n):null})),0===a?null:Object(f.jsxs)(O.b,{to:"/",children:[" ",Object(f.jsx)("button",{className:"btn btn-sm mt-4",children:" Go back "})," "]})]})}):Object(f.jsx)("div",{class:"spinner-grow text-success m-5",role:"status",children:Object(f.jsx)("span",{class:"visually-hidden",children:" Loading... "})}):Object(f.jsx)(d.a,{to:"/signup"})},F=function(e){var t=e.location,n=e.error,a=e.onCreateRequest,s=e.onClearError;Object(c.useEffect)((function(){s(),u.animateScroll.scrollToTop()}),[]);var r=t.plant;return Object(f.jsx)("div",{className:"container row mt-5",children:Object(f.jsxs)("div",{className:"mt-5 col-11 col-md-5 offset-1 offset-md-5",children:[Object(f.jsx)("h2",{className:"mb-5",children:" Your mesage "}),Object(f.jsxs)("form",{onSubmit:function(e){return a(e,r)},children:[Object(f.jsx)("div",{children:Object(f.jsx)("textarea",{className:"mb-4",name:"message",cols:"35",rows:"7"})}),n?Object(f.jsxs)("p",{className:"warningColor",children:[" ",n," "]}):null,Object(f.jsx)("button",{className:"btn btn-sm btn-outline-dark",type:"submit",children:" Send "}),Object(f.jsxs)(O.b,{to:"/plants/read/".concat(r._id),children:[" ",Object(f.jsx)("button",{className:"btn btn-sm mx-2",children:" Go back "})," "]})]})]})})},L=function(e){var t=e.match,n=e.request,a=e.onReadRequest,s=e.onDeleteRequest;Object(c.useEffect)((function(){a(t.params.requestId),u.animateScroll.scrollToTop()}),[]);var r=n._id,i=n.buyer,l=n.plant,o=n.message,d=n.reply;return i&&l?Object(f.jsx)("div",{className:"container row mt-5 ",children:Object(f.jsxs)("div",{className:"mt-5 col-11 col-md-5 offset-1 offset-md-5",children:[Object(f.jsx)("h2",{className:"mb-5",children:" Your request "}),Object(f.jsxs)("h4",{children:[" for: ",l.name," "]}),Object(f.jsxs)("h5",{children:[" by: ",i.username," "]}),Object(f.jsxs)("p",{children:[" ",o," "]}),d?Object(f.jsxs)("div",{children:[Object(f.jsx)("h5",{children:" Your reply: "}),Object(f.jsxs)("p",{children:[" ",d," "]})]}):null,Object(f.jsxs)("div",{children:[d?null:Object(f.jsxs)(O.b,{to:"/requests/update/".concat(r),children:[" ",Object(f.jsx)("button",{className:"btn btn-sm ml-2 btn-outline-dark",children:" Reply "})," "]}),Object(f.jsx)("button",{className:"btn btn-sm ml-2 btn-outline-dark",onClick:function(){return s(r)},children:" Delete "})]}),Object(f.jsxs)(O.b,{to:"/requests/fetch",onClick:u.animateScroll.scrollToTop,children:[" ",Object(f.jsx)("button",{className:"btn btn-sm mt-4",children:" Go back "})," "]})]})}):Object(f.jsx)("div",{class:"spinner-grow text-success m-5",role:"status",children:Object(f.jsx)("span",{class:"visually-hidden",children:" Loading... "})})},U=function(e){var t=e.request,n=e.onCreateReply,a=e.onUpdateRequest;Object(c.useEffect)((function(){return u.animateScroll.scrollToTop()}),[]);var s=t._id,r=t.message;return Object(f.jsx)("div",{className:"container row mt-5 ",children:Object(f.jsxs)("div",{className:"mt-2 col-11 col-md-5 offset-1 offset-md-5",children:[Object(f.jsx)("h2",{className:"mt-5 mb-4",children:" Reply your request "}),Object(f.jsx)("div",{className:"card cardSmallWidth mb-5",children:Object(f.jsxs)("div",{className:"card-body",children:[Object(f.jsxs)("p",{children:[" ",r," "]}),Object(f.jsx)("textarea",{className:"mb-4",name:"reply",cols:"31",rows:"6",placeholder:"Your reply",onChange:n}),Object(f.jsxs)("div",{className:"row justify-content-around",children:[Object(f.jsx)("button",{className:"btn btn-sm btn-outline-dark",onClick:function(){return a(t)},children:" Submit "}),Object(f.jsxs)(O.b,{to:"/requests/read/".concat(s),children:[" ",Object(f.jsx)("button",{className:"btn btn-sm mx-2",children:" Go back "})," "]})]})]})})]})})},G=function(){return Object(f.jsx)("div",{className:"notFound",children:Object(f.jsxs)("div",{children:[Object(f.jsxs)("h2",{children:["Oh-oh! ",Object(f.jsx)("br",{})," ",Object(f.jsx)("br",{}),"We think you got lost in the jungle!"]}),Object(f.jsx)("h3",{children:" 404 Not Found "}),Object(f.jsxs)(O.b,{to:"/",children:[" ",Object(f.jsx)("button",{className:"btn btn-sm ml-2",children:" Take me home "})," "]})]})})},W=function(){return Object(c.useEffect)((function(){!function(e,t){var n=document.createElement("script");n.type="text/javascript",n.async=!0,n.src="https://widget.kommunicate.io/v2/kommunicate.app",document.getElementsByTagName("head")[0].appendChild(n),window.kommunicate=t,t._globals={appId:"10b22c52854a305b79bbdecc356bea5",popupWidget:!0,automaticChatOpenOnNavigation:!0}}(document,window.kommunicate||{})}),[]),Object(f.jsx)("div",{})},A=Object(d.g)((function(e){var t=Object(c.useState)(!0),n=Object(o.a)(t,2),a=n[0],s=n[1],r=Object(c.useState)(null),b=Object(o.a)(r,2),h=b[0],p=b[1],O=Object(c.useState)([]),v=Object(o.a)(O,2),N=v[0],E=v[1],P=Object(c.useState)(""),R=Object(o.a)(P,2),T=R[0],H=R[1],_=Object(c.useState)({}),D=Object(o.a)(_,2),A=D[0],M=D[1],B=Object(c.useState)([]),Y=Object(o.a)(B,2),Q=Y[0],K=Y[1],Z=Object(c.useState)({}),V=Object(o.a)(Z,2),X=V[0],$=V[1],ee=Object(c.useState)(0),te=Object(o.a)(ee,2),ne=te[0],ce=te[1],ae=Object(c.useState)(!1),se=Object(o.a)(ae,2),re=se[0],ie=se[1],le=Object(c.useState)(null),oe=Object(o.a)(le,2),de=oe[0],ue=oe[1],je=Object(c.useState)(0),be=Object(o.a)(je,2),me=be[0],he=be[1],pe=Object(c.useState)(0),Oe=Object(o.a)(pe,2),fe=Oe[0],xe=Oe[1],ge=Object(c.useState)(0),ve=Object(o.a)(ge,2),Ne=ve[0],ye=ve[1],Se=Object(c.useState)(null),we=Object(o.a)(Se,2),Ce=we[0],qe=we[1],ke=function(){xe(Math.round(document.querySelector("#titleId").getBoundingClientRect().height)),ye(Math.round(document.querySelector("#aboutId").getBoundingClientRect().height))},Ie=function(){return qe(null)},Ee=function(){m.a.get("".concat(j,"/api/plants/fetch")).then((function(e){return E(e.data)})).catch((function(e){return console.log("Fetching plants failed",e)}))};Object(c.useEffect)((function(){return Ee(),h||m.a.get("".concat(j,"/api/user"),{withCredentials:!0}).then((function(e){p(e.data),s(!1)})).catch((function(e){s(!1),console.log("Initializing fetching failed",e)})),function(){de&&clearInterval(de)}}),[]);var Pe=function(){m.a.get("".concat(j,"/api/plants/search?q=").concat(T)).then((function(e){return E(e.data)})).catch((function(e){return console.log("Query fetching failed",e)}))},Re=function(e){var t=e.target.value;H(t),t?Pe():Ee()},Te=function(t){t.preventDefault();var n=t.target,c=n.name,a=n.description,s=n.size,r=n.plantImage,i=n.location,o=n.price,d=r.files[0],u=new FormData;u.append("image",d),m.a.post("".concat(j,"/api/upload"),u).then((function(t){var n=t.data,r=n.image,d=n.imagePublicId,u={name:c.value,description:a.value,size:s.value,image:r,imagePublicId:d,location:i.value,price:o.value};m.a.post("".concat(j,"/api/plants/create"),u,{withCredentials:!0}).then((function(t){E([t.data].concat(Object(l.a)(N))),e.history.push("/")})).catch((function(e){return qe(e.response.data.error)}))})).catch((function(e){return qe(e.response.data.error)}))},He=function(e){m.a.get("".concat(j,"/api/plants/read/").concat(e),{withCredentials:!0}).then((function(e){return M(e.data)})).catch((function(){return console.log("Read plant failed")}))},_e=function(e){var t=JSON.parse(JSON.stringify(A));t.name=e.target.value,M(t)},De=function(e){var t=JSON.parse(JSON.stringify(A));t.description=e.target.value,M(t)},ze=function(e){var t=JSON.parse(JSON.stringify(A));t.size=e.target.value,M(t)},Je=function(e){var t=JSON.parse(JSON.stringify(A));t.price=e.target.value,M(t)},Fe=function(e){var t=JSON.parse(JSON.stringify(A));t.location=e.target.value,M(t)},Le=function(e){var t=e.target.files[0],n={imagePublicId:A.imagePublicId};m.a.post("".concat(j,"/api/destroy"),n).then((function(){var e=new FormData;e.append("image",t),m.a.post("".concat(j,"/api/upload"),e).then((function(e){var t=JSON.parse(JSON.stringify(A)),n=e.data,c=n.imagePublicId,a=n.image;t.imagePublicId=c,t.image=a,M(t)})).catch((function(e){return console.log("Image upload failed",e)}))})).catch((function(e){return console.log("Delete old image failed",e)}))},Ue=function(t){var n=t._id,c=t.name,a=t.description,s=t.size,r=t.image,i=t.imagePublicId,l=t.location,o=t.price,d={name:c,description:a,size:s,image:r,imagePublicId:i,location:l,price:o};m.a.patch("".concat(j,"/api/plants/update/").concat(n),d).then((function(){var t=N.map((function(e){return e._id===n&&(e.name=c,e.description=a,e.size=s,e.image=r,e.imagePublicId=i,e.location=l,e.price=o),e}));E(t),e.history.push("/"),u.animateScroll.scrollTo(fe+Ne)})).catch((function(e){return console.log("Update plant failed",e)}))},Ge=function(t,n){var c={imagePublicId:n};m.a.post("".concat(j,"/api/destroy"),c).then((function(){m.a.delete("".concat(j,"/api/plants/delete/").concat(t)).then((function(){var n=N.filter((function(e){return e._id!==t}));E(n),e.history.push("/"),u.animateScroll.scrollTo(fe+Ne)})).catch((function(e){return console.log("Delete plant failed",e)}))})).catch((function(e){return console.log("Delete image failed",e)}))},We=function(){m.a.post("".concat(j,"/api/create-payment-intent"),{},{withCredentials:!0}).then((function(){return e.history.push("/")})).catch((function(e){return console.log("Checkout failed",e)}))};Object(c.useEffect)((function(){m.a.get("".concat(j,"/api/requests/fetch")).then((function(e){K(e.data);var t=Q.filter((function(e){return e.seller._id===h._id}));if(ce(t.length),h){var n=setInterval((function(){he((function(e){return e+1}))}),1e4);ue(n)}})).catch((function(e){return console.log("Checking requests failed",e)}))}),[h]),Object(c.useEffect)((function(){m.a.get("".concat(j,"/api/requests/fetch")).then((function(e){K(e.data);var t=Q.filter((function(e){return e.seller._id===h._id})).length;ne<t&&(ce(t),ie(!0))})).catch((function(e){return console.log("Checking requests failed",e)}))}),[me]);var Ae=function(){return ie(!1)},Me=function(){m.a.get("".concat(j,"/api/requests/fetch")).then((function(e){return K(e.data)})).catch((function(e){return console.log("Fetching requests failed",e)}))},Be=function(t,n){t.preventDefault();var c=t.target.message,a={seller:n.creator._id,plant:n._id,message:c.value};m.a.post("".concat(j,"/api/requests/create"),a,{withCredentials:!0}).then((function(t){K([t.data].concat(Object(l.a)(Q))),e.history.push("/plants/read/".concat(n._id))})).catch((function(e){return qe(e.response.data.error)}))},Ye=function(e){m.a.get("".concat(j,"/api/requests/read/").concat(e),{withCredentials:!0}).then((function(e){return $(e.data)})).catch((function(){return console.log("Read request failed")}))},Qe=function(e){var t=JSON.parse(JSON.stringify(X));t.reply=e.target.value,$(t)},Ke=function(t){var n=t._id,c=t.buyer,a=t.seller,s=t.plant,r=t.message,i=t.reply,l={buyer:c,seller:a,plant:s,message:r,reply:i};m.a.patch("".concat(j,"/api/requests/update/").concat(n),l).then((function(){var t=Q.map((function(e){return e._id===n&&(e.buyer=c,e.seller=a,e.plant=s,e.message=r,e.reply=i),e}));K(t),e.history.push("/requests/read/".concat(n))})).catch((function(e){return console.log("Update request failed",e)}))};Object(c.useEffect)((function(){e.history.push("/requests/fetch")}),[Q]);var Ze=function(e){m.a.delete("".concat(j,"/api/requests/delete/").concat(e)).then((function(){var t=Q.filter((function(t){return t._id!==e}));K(t),ce(t.length)})).catch((function(e){return console.log("Delete request failed",e)}))};Object(c.useEffect)((function(){return e.history.push("/")}),[h]);var Ve=function(e){e.preventDefault();var t=e.target,n=t.username,c=t.email,a=t.password,s={username:n.value,email:c.value.toLowerCase(),password:a.value};m.a.post("".concat(j,"/api/signup"),s).then((function(e){return p(e.data)})).catch((function(e){return qe(e.response.data.error)}))},Xe=function(e){e.preventDefault();var t=e.target,n=t.email,c=t.password,a={email:n.value,password:c.value};m.a.post("".concat(j,"/api/signin"),a,{withCredentials:!0}).then((function(e){return p(e.data)})).catch((function(e){return qe(e.response.data.error)}))},$e=function(){m.a.post("".concat(j,"/api/logout"),{},{withCredentials:!0}).then((function(){p(null),clearInterval(de)})).catch((function(e){return console.log("Logout failed",e)}))};return a?Object(f.jsx)("div",{class:"spinner-grow text-success m-5",role:"status",children:Object(f.jsx)("span",{class:"visually-hidden",children:" Loading... "})}):Object(f.jsxs)("div",{class:"main",children:[Object(f.jsx)(x,{onLogOut:$e,newRequestsReceived:re,user:h,headerHeight:fe,aboutHeight:Ne}),Object(f.jsxs)(d.d,{children:[Object(f.jsx)(d.b,{exact:!0,path:"/",render:function(){return Object(f.jsx)(y,{onSearchPlant:Re,onGetElementsHeight:ke,plants:N,query:T,headerHeight:fe})}}),Object(f.jsx)(d.b,{path:"/plants/create",render:function(e){return Object(f.jsx)(q,Object(i.a)({onCreatePlant:Te,onClearError:Ie,user:h,headerHeight:fe,aboutHeight:Ne,error:Ce},e))}}),Object(f.jsx)(d.b,{path:"/plants/read/:plantId",render:function(e){return Object(f.jsx)(k,Object(i.a)({onReadPlant:He,onDeletePlant:Ge,plant:A,user:h,headerHeight:fe,aboutHeight:Ne},e))}}),Object(f.jsx)(d.b,{path:"/plants/update",render:function(e){return Object(f.jsx)(I,Object(i.a)({onNameChange:_e,onDescriptionChange:De,onSizeChange:ze,onPriceChange:Je,onLocationChange:Fe,onImageChange:Le,onUpdatePlant:Ue,plant:A,headerHeight:fe,aboutHeight:Ne},e))}}),Object(f.jsx)(d.b,{path:"/plants/checkout/:plantId",render:function(e){return Object(f.jsx)(z,Object(i.a)({onCheckout:We,headerHeight:fe,aboutHeight:Ne},e))}}),Object(f.jsx)(d.b,{path:"/requests/fetch",render:function(e){return Object(f.jsx)(J,Object(i.a)({onFetchAllRequests:Me,onClearRequestsReceived:Ae,user:h,requests:Q,requestsNumber:ne},e))}}),Object(f.jsx)(d.b,{path:"/requests/create",render:function(e){return Object(f.jsx)(F,Object(i.a)({onCreateRequest:Be,onClearError:Ie,user:h,error:Ce},e))}}),Object(f.jsx)(d.b,{path:"/requests/read/:requestId",render:function(e){return Object(f.jsx)(L,Object(i.a)({onReadRequest:Ye,onDeleteRequest:Ze,request:X,user:h},e))}}),Object(f.jsx)(d.b,{path:"/requests/update",render:function(e){return Object(f.jsx)(U,Object(i.a)({onCreateReply:Qe,onUpdateRequest:Ke,request:X},e))}}),Object(f.jsx)(d.b,{path:"/signup",render:function(e){return Object(f.jsx)(S,Object(i.a)({onSignUp:Ve,onClearError:Ie,onClearRequestsReceived:Ae,error:Ce},e))}}),Object(f.jsx)(d.b,{path:"/signin",render:function(e){return Object(f.jsx)(w,Object(i.a)({onSignIn:Xe,onClearError:Ie,onClearRequestsReceived:Ae,error:Ce},e))}}),Object(f.jsx)(d.b,{path:"/logout",render:function(e){return Object(f.jsx)(C,Object(i.a)({onLogOut:$e,onClearRequestsReceived:Ae},e))}}),Object(f.jsx)(d.b,{component:G})]}),Object(f.jsx)(W,{}),Object(f.jsx)(g,{})]})}));r.a.render(Object(f.jsx)(a.a.StrictMode,{children:Object(f.jsx)(O.a,{children:Object(f.jsx)(A,{})})}),document.querySelector("#root"))}},[[98,1,2]]]);
//# sourceMappingURL=main.e2aeab2d.chunk.js.map
(this["webpackJsonpjungle-swap-client"]=this["webpackJsonpjungle-swap-client"]||[]).push([[0],{89:function(e,t,n){},97:function(e,t,n){},98:function(e,t,n){"use strict";n.r(t);var c=n(1),a=n.n(c),s=n(17),r=n.n(s),i=n(3),l=n(23),o=n(39),d=n(7),u=n(8),j=n(5),b="https://jungleswap.herokuapp.com",m=n(6),h=n.n(m),p=(n(88),n(89),n(101)),O=n(102),f=n(0),x=function(e){var t=e.user,n=e.isNewRequest,c=e.headerHeight,a=e.aboutHeight;return Object(f.jsx)("div",{children:Object(f.jsxs)(p.a,{className:"pl-5",variant:"dark",expand:"lg",fixed:"top",children:[Object(f.jsxs)(p.a.Brand,{children:[" ",Object(f.jsx)(i.b,{to:"/",onClick:j.animateScroll.scrollToTop,children:" JungleSwap "})," "]}),Object(f.jsx)(p.a.Toggle,{"aria-controls":"basic-navbar-nav"}),Object(f.jsx)(p.a.Collapse,{id:"basic-navbar-nav",children:Object(f.jsxs)(O.a,{className:"mr-auto",children:[Object(f.jsx)("div",{children:Object(f.jsx)(i.b,{to:"/",className:"p-2",onClick:function(){return j.animateScroll.scrollTo(c+a)},children:" All Plants "})}),t&&Object(f.jsxs)("div",{children:[Object(f.jsx)(i.b,{className:"p-2",to:"/plants/create",children:" Create Plant "}),Object(f.jsx)(i.b,{className:n?"p-2 alertColor":"p-2",to:"/requests/fetch",title:n?"new message":null,children:" Messages "})]}),t?Object(f.jsx)("div",{children:Object(f.jsx)(i.b,{className:"p-2",to:"/logout",title:t.username,children:" Log out "})}):Object(f.jsxs)("div",{children:[Object(f.jsx)(i.b,{className:"p-2",to:"/signin",children:" Sign in "}),Object(f.jsx)(i.b,{className:"p-2",to:"/signup",children:" Sign up "})]})]})})]})})},g=function(){return Object(f.jsx)("div",{className:"footer-row",children:Object(f.jsxs)("footer",{children:["\xa9 2021",Object(f.jsx)(i.b,{href:"https://www.linkedin.com/in/christian-gerbig/",children:" Christian Gerbig "}),"&",Object(f.jsx)(i.b,{href:"https://www.linkedin.com/in/lisa-montebaur/",children:" Lisa Montebaur "})]})})},v=n.p+"static/media/JungleSwap_Home.c4ed9b4c.png",N=n.p+"static/media/JungleSwap_Icon.a6c7c44a.png",y=function(e){var t=e.plants,n=e.query,a=e.headerHeight,s=e.onSearchPlant,r=e.onGetElementsHeight;return Object(c.useEffect)((function(){return r()}),[]),t?Object(f.jsxs)("div",{children:[Object(f.jsx)("header",{className:"text-center pt-5 pb-5 headerImg",id:"titleId",children:Object(f.jsx)("div",{className:"row my-5",children:Object(f.jsxs)("div",{className:"col-6 offset-3 my-5 borderAround",children:[Object(f.jsx)("h2",{className:"title mb-2",children:" JungleSwap "}),Object(f.jsx)("h5",{className:"mt-3 mb-5",children:" Share your green heart "}),Object(f.jsx)("div",{className:"mb-5",children:Object(f.jsx)(i.b,{className:"biggerFontSize",onClick:function(){return j.animateScroll.scrollTo(a)},children:" Try it! "})})]})})}),Object(f.jsx)("section",{id:"aboutId",children:Object(f.jsx)("div",{className:"about centered container",children:Object(f.jsxs)("div",{className:"row",children:[Object(f.jsx)("div",{className:"col-sm-6 col-md-5 col-lg-6",children:Object(f.jsx)("img",{className:"image",src:v,alt:"plants"})}),Object(f.jsx)("br",{}),Object(f.jsxs)("div",{className:"about col-sm-6 col-md-5 col-lg-6 px-5 noOverflow",children:[Object(f.jsx)("h4",{children:" Welcome to JungleSwap! "}),Object(f.jsx)("h5",{children:" Add green to your Home "}),Object(f.jsxs)("p",{children:[' It"s easy-peasy. ',Object(f.jsx)("br",{}),"Share your plant offshoots. ",Object(f.jsx)("br",{}),"Make money! ",Object(f.jsx)("br",{}),"Or swap them for another plant. ",Object(f.jsx)("br",{}),'Don"t have any baby plants? ',Object(f.jsx)("br",{}),"You can simply shop and give a plant a new home."]}),Object(f.jsx)("img",{className:"icon",src:N,alt:"icon"})]})]})})}),Object(f.jsx)("section",{children:Object(f.jsxs)("div",{className:"container mt-5",children:[Object(f.jsxs)("div",{className:"mt-5 mb-3",children:[Object(f.jsx)("h2",{children:" Plants "}),Object(f.jsx)("hr",{}),Object(f.jsx)("h4",{children:" Search a plant "})]}),Object(f.jsx)("div",{className:"mb-4",children:Object(f.jsx)("input",{className:"smallWidth form-control",type:"text",placeholder:"Search...",value:n,onChange:s})}),Object(f.jsx)("div",{className:"row row-cols-1 row-cols-md-3 g-4",children:t.map((function(e){var t=e._id,n=e.name,c=e.image,a=e.price;return Object(f.jsx)("div",{className:"col mb-5",children:Object(f.jsxs)("div",{className:"card card-medium-width text-center h-100",children:[Object(f.jsx)("img",{className:"card-img-top mediumPicSize",src:c,alt:n}),Object(f.jsxs)("div",{className:"card-body mb-5",children:[Object(f.jsxs)("h5",{children:[" ",n," "]}),Object(f.jsxs)("p",{children:[" ",a," \u20ac "]}),Object(f.jsx)(i.b,{className:"btn btn-outline-dark",to:"/plants/read/".concat(t),children:" Details "})]})]})},t)}))})]})})]}):Object(f.jsx)("div",{class:"spinner-grow text-success m-5",role:"status",children:Object(f.jsx)("span",{class:"visually-hidden",children:" Loading... "})})},S=function(e){var t=e.error,n=e.onSignUp,a=e.onClearError,s=e.onClearNewRequest;return Object(c.useEffect)((function(){a(),s(),j.animateScroll.scrollToTop()}),[]),Object(f.jsx)("div",{className:"container row mt-5",children:Object(f.jsxs)("div",{className:"mt-5 col-11 col-md-5 offset-1 offset-md-5",children:[Object(f.jsx)("h2",{className:"mb-5",children:" Sign Up "}),Object(f.jsxs)("form",{onSubmit:n,children:[Object(f.jsxs)("div",{className:"form-group",children:[Object(f.jsx)("label",{htmlFor:"InputUsername",children:" Username "}),Object(f.jsx)("input",{type:"text",className:"form-control",id:"InputUsername",name:"username"})]}),Object(f.jsxs)("div",{className:"form-group",children:[Object(f.jsx)("label",{htmlFor:"InputEmail",children:" Email address "}),Object(f.jsx)("input",{type:"email",className:"form-control",id:"InputEmail",name:"email"})]}),Object(f.jsxs)("div",{className:"form-group",children:[Object(f.jsx)("label",{htmlFor:"InputPassword",children:" Password "}),Object(f.jsx)("input",{name:"password",type:"password",className:"form-control",id:"InputPassword"})]}),t&&Object(f.jsxs)("p",{className:"warningColor",children:[" ",t," "]}),Object(f.jsx)("button",{type:"submit",className:"btn btn-primary mt-4 btn-outline-dark",formnovalidate:"formnovalidate",children:" Sign up "}),Object(f.jsx)("p",{className:"padding",children:" Already have an account? "}),Object(f.jsx)(i.b,{to:"/signin",children:" Sign in "})]})]})})},w=function(e){var t=e.error,n=e.onSignIn,a=e.onClearError,s=e.onClearNewRequest;return Object(c.useEffect)((function(){a(),s(),j.animateScroll.scrollToTop()}),[]),Object(f.jsx)("div",{className:"container row mt-5 custom fullscreen",children:Object(f.jsxs)("div",{className:"mt-5 col-11 col-md-5 offset-1 offset-md-5",children:[Object(f.jsx)("h2",{className:"mb-5",children:" Sign In "}),Object(f.jsxs)("form",{onSubmit:n,children:[Object(f.jsxs)("div",{className:"form-group",children:[Object(f.jsx)("label",{htmlFor:"InputEmail",children:" Email address "}),Object(f.jsx)("input",{type:"email",className:"form-control",id:"InputEmail",name:"email"})]}),Object(f.jsxs)("div",{className:"form-group",children:[Object(f.jsx)("label",{htmlFor:"InputPassword",children:" Password "}),Object(f.jsx)("input",{name:"password",type:"password",className:"form-control",id:"InputPassword"})]}),t&&Object(f.jsxs)("p",{className:"warningColor",children:[" ",t," "]}),Object(f.jsx)("button",{type:"submit",className:"btn btn-primary mt-4 btn-outline-dark",formnovalidate:"formnovalidate",children:" Sign in "})]})]})})},C=function(e){var t=e.onLogOut,n=e.onClearNewRequest;return Object(c.useEffect)((function(){t(),n(),j.animateScroll.scrollToTop()}),[]),Object(f.jsx)("div",{})},q=function(e){var t=e.user,n=e.headerHeight,a=e.aboutHeight,s=e.error,r=e.onCreatePlant,l=e.onClearError;return Object(c.useEffect)((function(){return l(),j.animateScroll.scrollToTop(),function(){return j.animateScroll.scrollTo(n+a)}}),[]),t?Object(f.jsx)("div",{className:"container row mt-5 fullscreen",children:Object(f.jsxs)("div",{className:"mt-5 col-11 col-md-5 offset-1 offset-md-6",children:[Object(f.jsx)("h2",{className:"mb-5",children:" Create a plant "}),Object(f.jsxs)("form",{onSubmit:r,children:[Object(f.jsx)("input",{className:"mb-4",name:"name",type:"text",placeholder:"Enter name"}),Object(f.jsx)("input",{className:"mb-4",name:"description",type:"text",placeholder:"Enter description"}),Object(f.jsx)("input",{className:"mb-4 smallWidth",name:"size",type:"number",min:"1",placeholder:"Size"})," cm ",Object(f.jsx)("br",{}),Object(f.jsxs)("select",{className:"mb-4 p-1",name:"location",type:"text",children:[Object(f.jsx)("option",{children:" Select location "}),Object(f.jsx)("option",{value:"sun",children:" sun "}),Object(f.jsx)("option",{value:"shade",children:" shade "}),Object(f.jsx)("option",{value:"sun and shade",children:" sun and shade "})]}),Object(f.jsx)("br",{}),Object(f.jsx)("input",{className:"mb-4 smallWidth",name:"price",type:"number",min:"1",placeholder:"Price"})," \u20ac ",Object(f.jsx)("br",{}),Object(f.jsx)("input",{className:"mb-4",name:"plantImage",type:"file"}),s&&Object(f.jsxs)("p",{className:"warningColor",children:[" ",s," "]}),Object(f.jsxs)("div",{className:"col-12",children:[Object(f.jsx)("button",{className:"btn btn-sm btn-outline-dark",type:"submit",children:" Create "}),Object(f.jsxs)(i.b,{to:"/",children:[" ",Object(f.jsx)("button",{className:"btn btn-sm mx-5",children:" Go back "})," "]})]})]})]})}):Object(f.jsx)(u.a,{to:"/signup"})},k=function(e){var t=e.match,n=e.user,a=e.plant,s=e.headerHeight,r=e.aboutHeight,l=e.onReadPlant,o=e.onDeletePlant;if(Object(c.useEffect)((function(){l(t.params.plantId),j.animateScroll.scrollToTop()}),[]),!n)return Object(f.jsx)(u.a,{to:"/signup"});var d=a._id,b=a.name,m=a.description,h=a.size,p=a.image,O=a.imagePublicId,x=a.location,g=a.price,v=a.creator;return v?Object(f.jsxs)("div",{className:"container mt-5 row row-md-10 offset-md-4",children:[Object(f.jsx)("div",{className:"mt-4 mb-3 pt-4 container",children:Object(f.jsx)("h2",{children:" Plant details "})}),Object(f.jsx)("div",{className:"col",children:Object(f.jsxs)("div",{className:"card cardMediumWidth",children:[p&&Object(f.jsx)("img",{className:"card-img-top mediumPicSize",src:p,alt:b}),Object(f.jsxs)("div",{className:"ml-2 mt-2",children:[" ",Object(f.jsx)("span",{children:" Name: "})," ",b," "]}),Object(f.jsxs)("div",{className:"ml-2 mt-2",children:[" ",Object(f.jsx)("span",{children:" Description: "})," ",m," "]}),Object(f.jsxs)("div",{className:"ml-2 mt-2",children:[" ",Object(f.jsx)("span",{children:" Size: "})," ",h," cm "]}),Object(f.jsxs)("div",{className:"ml-2 mt-2",children:[" ",Object(f.jsx)("span",{children:" Likes: "})," ",x," "]}),Object(f.jsxs)("div",{className:"ml-2 mt-2",children:[" ",Object(f.jsx)("span",{children:" Price: "})," ",g," \u20ac "]}),Object(f.jsx)("div",{className:"ml-2 mt-2 col justify-content-center",children:Object(f.jsx)("div",{className:"row-2 justify-content-center",children:Object(f.jsxs)("div",{className:"card-body",children:[n._id===v._id?Object(f.jsxs)("div",{children:[Object(f.jsxs)(i.b,{to:"/plants/update",children:[" ",Object(f.jsx)("button",{className:"btn btn-sm ml-2 btn-outline-dark",children:" Update "})," "]}),Object(f.jsx)("button",{className:"btn btn-sm ml-2 btn-outline-dark",onClick:function(){return o(d,O)},children:" Delete "})]}):Object(f.jsxs)("div",{children:[Object(f.jsxs)(i.b,{to:{pathname:"/plants/checkout/".concat(d),plant:a},children:[" ",Object(f.jsx)("button",{className:"btn btn-sm ml-2 btn-outline-dark",children:" Buy "})," "]}),Object(f.jsxs)(i.b,{to:{pathname:"/requests/create",plant:a},children:[" ",Object(f.jsx)("button",{className:"btn btn-sm ml-2 btn-outline-dark",children:" Swap "})," "]})]}),Object(f.jsxs)(i.b,{to:"/",onClick:function(){return j.animateScroll.scrollTo(s+r)},children:[" ",Object(f.jsx)("button",{className:"btn btn-sm ml-2",children:" Go back "})," "]})]})})})]})})]}):Object(f.jsx)("div",{class:"spinner-grow text-success m-5",role:"status",children:Object(f.jsx)("span",{class:"visually-hidden",children:" Loading... "})})},I=function(e){var t=e.plant,n=e.onNameChange,a=e.onDescriptionChange,s=e.onSizeChange,r=e.onPriceChange,l=e.onLocationChange,o=e.onImageChange,d=e.onUpdatePlant;Object(c.useEffect)((function(){return j.animateScroll.scrollToTop()}),[]);var u=t._id,b=t.name,m=t.description,h=t.size,p=t.image,O=t.price;return Object(f.jsx)("div",{className:"container row mt-5 ",children:Object(f.jsxs)("div",{className:"mt-2 col-11 col-md-5 offset-1 offset-md-5",children:[Object(f.jsx)("h2",{className:"mt-5 mb-4",children:" Update your plant "}),Object(f.jsxs)("div",{className:"card cardSmallWidth mb-5",children:[Object(f.jsx)("img",{className:"mb-2 smallPicSize",src:p,alt:b}),Object(f.jsxs)("div",{className:"card-body",children:[Object(f.jsx)("input",{className:"mb-2",onChange:o,type:"file"}),Object(f.jsx)("input",{className:"mb-2",type:"text",onChange:n,value:b}),Object(f.jsx)("input",{className:"mb-2",type:"text",onChange:a,value:m}),Object(f.jsx)("input",{className:"mb-2 smallWidth",type:"number",onChange:s,value:h})," cm ",Object(f.jsx)("br",{}),Object(f.jsxs)("select",{className:"mb-2",onChange:l,name:"location",type:"text",placeholder:"Select",children:[Object(f.jsx)("option",{value:"sun",children:" sun "}),Object(f.jsx)("option",{value:"shade",children:" shade "}),Object(f.jsx)("option",{value:"sun and shade",children:" sun and shade "})]})," ",Object(f.jsx)("br",{}),Object(f.jsx)("input",{className:"mb-4 smallWidth",name:"price",type:"number",min:"1",onChange:r,value:O})," \u20ac",Object(f.jsxs)("div",{className:"row justify-content-around",children:[Object(f.jsx)("button",{className:"btn btn-sm btn-outline-dark",onClick:function(){return d(t)},children:" Save changes "}),Object(f.jsxs)(i.b,{to:"/plants/read/".concat(u),children:[" ",Object(f.jsx)("button",{className:"btn btn-sm mx-2",children:" Go back "})," "]})]})]})]})]})})},E=n(56),P=n(20),T=n(22),R=n.n(T),H=n(38),_=function(e){var t=e.plant,n=e.headerHeight,a=e.aboutHeight,s=e.onCheckout,r=Object(c.useState)(!1),l=Object(d.a)(r,2),o=l[0],u=l[1],m=Object(c.useState)(!1),h=Object(d.a)(m,2),p=h[0],O=h[1],x=Object(c.useState)(!0),g=Object(d.a)(x,2),v=g[0],N=g[1],y=Object(c.useState)(""),S=Object(d.a)(y,2),w=S[0],C=S[1],q=Object(c.useState)(null),k=Object(d.a)(q,2),I=k[0],E=k[1],T=Object(P.useStripe)(),_=Object(P.useElements)();Object(c.useEffect)((function(){return window.fetch("".concat(b,"/api/create-payment-intent"),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({price:t.price})}).then((function(e){return e.json()})).then((function(e){return C(e.clientSecret)})),function(){return j.animateScroll.scrollTo(n+a)}}),[]);var D=function(){var e=Object(H.a)(R.a.mark((function e(t){return R.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:N(t.empty),E(t.error?t.error.message:"");case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),z=function(){var e=Object(H.a)(R.a.mark((function e(t){var n;return R.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),O(!0),e.next=4,T.confirmCardPayment(w,{payment_method:{card:_.getElement(P.CardElement)}});case 4:(n=e.sent).error?(E("Payment failed ".concat(n.error.message)),O(!1)):(E(null),O(!1),u(!0));case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),J=t._id,F=t.name,L=t.price;return Object(f.jsxs)("div",{className:"container col-9",children:[Object(f.jsxs)("form",{className:"checkoutForm mt-5",id:"payment-form",onSubmit:z,children:[Object(f.jsxs)("h2",{className:"text-center mb-2 p-2",children:["  ",F," "]}),Object(f.jsxs)("h3",{className:"text-center mb-4 p-2",children:[" ",L," \u20ac "]}),Object(f.jsx)(P.CardElement,{className:"p-2",id:"card-element",options:{style:{base:{color:"#32325d",fontFamily:"Arial, sans-serif",fontSmoothing:"antialiased",fontSize:"16px","::placeholder":{color:"#32325d"}},invalid:{color:"#fa755a",iconColor:"#fa755a"}}},onChange:D}),Object(f.jsx)("div",{className:"row justify-content-center",children:Object(f.jsx)("button",{onClick:s,className:"btn btn-sm mt-5 mb-4",disabled:p||v||o,id:"submit",children:Object(f.jsx)("span",{id:"button-text",children:p?Object(f.jsx)("div",{className:"spinner",id:"spinner"}):"Pay now"})})}),I&&Object(f.jsxs)("div",{className:"card-error",role:"alert",children:[" ",I," "]}),Object(f.jsx)("p",{className:o?"result-message text-center":"result-message hidden text-center",children:"Payment succeeded."})]}),Object(f.jsx)("div",{className:"row justify-content-center",children:o?Object(f.jsxs)(i.b,{to:"/",children:[" ",Object(f.jsx)("button",{className:"btn btn-sm",children:" Go back "})," "]}):Object(f.jsxs)(i.b,{to:"/plants/read/".concat(J),children:[" ",Object(f.jsx)("button",{className:"btn btn-sm",children:" Go back "})," "]})})]})},D=Object(E.a)("pk_test_51IQBsPA6EAM4YnfDyrjHWnLHzZ5KkI9tsERzYhBGVoctZBrFUb4Sda035HvcQKpp7thFiqW6QmO8ytPbOAMTg33z00cHvcbojv"),z=function(e){var t=e.location,n=e.headerHeight,a=e.aboutHeight,s=e.onCheckout;return Object(c.useEffect)((function(){return j.animateScroll.scrollToTop()}),[]),Object(f.jsx)("div",{className:"container row mt-5",children:Object(f.jsx)("div",{className:"mt-5 col-11 col-md-6 offset-1 offset-md-5 App",children:Object(f.jsx)(P.Elements,{stripe:D,children:Object(f.jsx)(_,{onCheckout:s,plant:t.plant,headerHeight:n,aboutHeight:a})})})})},J=function(e){var t=e.user,n=e.requests,a=e.amountOfRequests,s=e.onFetchAllRequests,r=e.onClearNewRequest,l=function(){r(),j.animateScroll.scrollToTop()};return Object(c.useEffect)((function(){return s(),l(),function(){return l()}}),[]),t?n?Object(f.jsx)("div",{className:"container row mt-5",children:Object(f.jsxs)("div",{className:"mt-5 col-11 col-md-5 offset-1 offset-md-5",children:[Object(f.jsx)("h2",{children:" Your messages "}),Object(f.jsxs)("h3",{className:"mb-4",children:[" [",a,"] "]}),Object(f.jsxs)(i.b,{to:"/",children:[" ",Object(f.jsx)("button",{className:"btn btn-sm mt-4",children:" Go back "})," "]}),n.map((function(e){var n=e._id,c=e.buyer,a=e.seller,s=e.plant;return a._id===t._id&&Object(f.jsxs)("div",{className:"card p-3 mt-4 ",children:[Object(f.jsxs)("h4",{children:[" Request for: ",s.name," "]}),Object(f.jsxs)("h5",{children:[" by: ",c.username," "]}),Object(f.jsx)("div",{children:Object(f.jsx)(i.b,{className:"btn btn-outline-dark",to:"/requests/read/".concat(n),children:" Details "})})]},n)})),0!==a&&Object(f.jsxs)(i.b,{to:"/",children:[" ",Object(f.jsx)("button",{className:"btn btn-sm mt-4",children:" Go back "})," "]})]})}):Object(f.jsx)("div",{class:"spinner-grow text-success m-5",role:"status",children:Object(f.jsx)("span",{class:"visually-hidden",children:" Loading... "})}):Object(f.jsx)(u.a,{to:"/signup"})},F=function(e){var t=e.location,n=e.error,a=e.onCreateRequest,s=e.onClearError;Object(c.useEffect)((function(){s(),j.animateScroll.scrollToTop()}),[]);var r=t.plant;return Object(f.jsx)("div",{className:"container row mt-5",children:Object(f.jsxs)("div",{className:"mt-5 col-11 col-md-5 offset-1 offset-md-5",children:[Object(f.jsx)("h2",{className:"mb-5",children:" Your mesage "}),Object(f.jsxs)("form",{onSubmit:function(e){return a(e,r)},children:[Object(f.jsx)("div",{children:Object(f.jsx)("textarea",{className:"mb-4",name:"message",cols:"35",rows:"7"})}),n&&Object(f.jsxs)("p",{className:"warningColor",children:[" ",n," "]}),Object(f.jsx)("button",{className:"btn btn-sm btn-outline-dark",type:"submit",children:" Send "}),Object(f.jsxs)(i.b,{to:"/plants/read/".concat(r._id),children:[" ",Object(f.jsx)("button",{className:"btn btn-sm mx-2",children:" Go back "})," "]})]})]})})},L=function(e){var t=e.match,n=e.request,a=e.onReadRequest,s=e.onDeleteRequest;Object(c.useEffect)((function(){a(t.params.requestId),j.animateScroll.scrollToTop()}),[]);var r=n._id,l=n.buyer,o=n.plant,d=n.message,u=n.reply;return l&&o?Object(f.jsx)("div",{className:"container row mt-5 ",children:Object(f.jsxs)("div",{className:"mt-5 col-11 col-md-5 offset-1 offset-md-5",children:[Object(f.jsx)("h2",{className:"mb-5",children:" Your request "}),Object(f.jsxs)("h4",{children:[" for: ",o.name," "]}),Object(f.jsxs)("h5",{children:[" by: ",l.username," "]}),Object(f.jsxs)("p",{children:[" ",d," "]}),u&&Object(f.jsxs)("div",{children:[Object(f.jsx)("h5",{children:" Your reply: "}),Object(f.jsxs)("p",{children:[" ",u," "]})]}),Object(f.jsxs)("div",{children:[!u&&Object(f.jsxs)(i.b,{to:"/requests/update/".concat(r),children:[" ",Object(f.jsx)("button",{className:"btn btn-sm ml-2 btn-outline-dark",children:" Reply "})," "]}),Object(f.jsx)("button",{className:"btn btn-sm ml-2 btn-outline-dark",onClick:function(){return s(r)},children:" Delete "})]}),Object(f.jsxs)(i.b,{to:"/requests/fetch",onClick:j.animateScroll.scrollToTop,children:[" ",Object(f.jsx)("button",{className:"btn btn-sm mt-4",children:" Go back "})," "]})]})}):Object(f.jsx)("div",{class:"spinner-grow text-success m-5",role:"status",children:Object(f.jsx)("span",{class:"visually-hidden",children:" Loading... "})})},U=function(e){var t=e.request,n=e.onCreateReply,a=e.onUpdateRequest;Object(c.useEffect)((function(){return j.animateScroll.scrollToTop()}),[]);var s=t._id,r=t.message;return Object(f.jsx)("div",{className:"container row mt-5 ",children:Object(f.jsxs)("div",{className:"mt-2 col-11 col-md-5 offset-1 offset-md-5",children:[Object(f.jsx)("h2",{className:"mt-5 mb-4",children:" Reply your request "}),Object(f.jsx)("div",{className:"card cardSmallWidth mb-5",children:Object(f.jsxs)("div",{className:"card-body",children:[Object(f.jsxs)("p",{children:[" ",r," "]}),Object(f.jsx)("textarea",{className:"mb-4",name:"reply",cols:"31",rows:"6",placeholder:"Your reply",onChange:n}),Object(f.jsxs)("div",{className:"row justify-content-around",children:[Object(f.jsx)("button",{className:"btn btn-sm btn-outline-dark",onClick:function(){return a(t)},children:" Submit "}),Object(f.jsxs)(i.b,{to:"/requests/read/".concat(s),children:[" ",Object(f.jsx)("button",{className:"btn btn-sm mx-2",children:" Go back "})," "]})]})]})})]})})},G=function(){return Object(f.jsx)("div",{className:"notFound",children:Object(f.jsxs)("div",{children:[Object(f.jsxs)("h2",{children:["Oh-oh! ",Object(f.jsx)("br",{})," ",Object(f.jsx)("br",{}),"We think you got lost in the jungle!"]}),Object(f.jsx)("h3",{children:" 404 Not Found "}),Object(f.jsxs)(i.b,{to:"/",children:[" ",Object(f.jsx)("button",{className:"btn btn-sm ml-2",children:" Take me home "})," "]})]})})},W=function(){return Object(c.useEffect)((function(){!function(e,t){var n=document.createElement("script");n.type="text/javascript",n.async=!0,n.src="https://widget.kommunicate.io/v2/kommunicate.app",document.getElementsByTagName("head")[0].appendChild(n),window.kommunicate=t,t._globals={appId:"10b22c52854a305b79bbdecc356bea5",popupWidget:!0,automaticChatOpenOnNavigation:!0}}(document,window.kommunicate||{})}),[]),Object(f.jsx)("div",{})},A=Object(u.g)((function(e){var t=Object(c.useState)(!0),n=Object(d.a)(t,2),a=n[0],s=n[1],r=Object(c.useState)(null),i=Object(d.a)(r,2),m=i[0],p=i[1],O=Object(c.useState)(!1),v=Object(d.a)(O,2),N=v[0],E=v[1],P=Object(c.useState)([]),T=Object(d.a)(P,2),R=T[0],H=T[1],_=Object(c.useState)(""),D=Object(d.a)(_,2),A=D[0],M=D[1],B=Object(c.useState)({}),Y=Object(d.a)(B,2),Q=Y[0],K=Y[1],Z=Object(c.useState)([]),V=Object(d.a)(Z,2),X=V[0],$=V[1],ee=Object(c.useState)({}),te=Object(d.a)(ee,2),ne=te[0],ce=te[1],ae=Object(c.useState)(0),se=Object(d.a)(ae,2),re=se[0],ie=se[1],le=Object(c.useState)(!1),oe=Object(d.a)(le,2),de=oe[0],ue=oe[1],je=Object(c.useState)(null),be=Object(d.a)(je,2),me=be[0],he=be[1],pe=Object(c.useState)(0),Oe=Object(d.a)(pe,2),fe=Oe[0],xe=Oe[1],ge=Object(c.useState)(0),ve=Object(d.a)(ge,2),Ne=ve[0],ye=ve[1],Se=Object(c.useState)(0),we=Object(d.a)(Se,2),Ce=we[0],qe=we[1],ke=Object(c.useState)(null),Ie=Object(d.a)(ke,2),Ee=Ie[0],Pe=Ie[1],Te=function(){ye(Math.round(document.querySelector("#titleId").getBoundingClientRect().height)),qe(Math.round(document.querySelector("#aboutId").getBoundingClientRect().height))},Re=function(){return Pe(null)},He=function(){h.a.get("".concat(b,"/api/plants/fetch")).then((function(e){return H(e.data)})).catch((function(e){return console.log("Fetching plants failed",e)}))};Object(c.useEffect)((function(){return He(),m||h.a.get("".concat(b,"/api/user"),{withCredentials:!0}).then((function(e){p(e.data),s(!1)})).catch((function(e){s(!1),console.log("Initializing fetching failed",e)})),function(){me&&clearInterval(me)}}),[]);var _e=function(e){return M(e.target.value)};Object(c.useEffect)((function(){return A?void h.a.get("".concat(b,"/api/plants/search?q=").concat(A)).then((function(e){return H(e.data)})).catch((function(e){return console.log("Query fetching failed",e)})):He()}),[A]);var De=function(t){t.preventDefault();var n=t.target,c=n.name,a=n.description,s=n.size,r=n.plantImage,i=n.location,l=n.price,d=r.files[0],u=new FormData;u.append("image",d),h.a.post("".concat(b,"/api/upload"),u).then((function(t){var n=t.data,r=n.image,d=n.imagePublicId,u={name:c.value,description:a.value,size:s.value,image:r,imagePublicId:d,location:i.value,price:l.value};h.a.post("".concat(b,"/api/plants/create"),u,{withCredentials:!0}).then((function(t){H([t.data].concat(Object(o.a)(R))),e.history.push("/")})).catch((function(e){return Pe(e.response.data.error)}))})).catch((function(e){return Pe(e.response.data.error)}))},ze=function(e){h.a.get("".concat(b,"/api/plants/read/").concat(e),{withCredentials:!0}).then((function(e){return K(e.data)})).catch((function(){return console.log("Read plant failed")}))},Je=function(e){var t=JSON.parse(JSON.stringify(Q));t.name=e.target.value,K(t)},Fe=function(e){var t=JSON.parse(JSON.stringify(Q));t.description=e.target.value,K(t)},Le=function(e){var t=JSON.parse(JSON.stringify(Q));t.size=e.target.value,K(t)},Ue=function(e){var t=JSON.parse(JSON.stringify(Q));t.price=e.target.value,K(t)},Ge=function(e){var t=JSON.parse(JSON.stringify(Q));t.location=e.target.value,K(t)},We=function(e){var t=e.target.files[0],n={imagePublicId:Q.imagePublicId};h.a.post("".concat(b,"/api/destroy"),n).then((function(){var e=new FormData;e.append("image",t),h.a.post("".concat(b,"/api/upload"),e).then((function(e){var t=JSON.parse(JSON.stringify(Q)),n=e.data,c=n.imagePublicId,a=n.image;t.imagePublicId=c,t.image=a,K(t)})).catch((function(e){return console.log("Image upload failed",e)}))})).catch((function(e){return console.log("Delete old image failed",e)}))},Ae=function(t){var n=t._id,c=t.name,a=t.description,s=t.size,r=t.image,i=t.imagePublicId,l=t.location,o=t.price,d={name:c,description:a,size:s,image:r,imagePublicId:i,location:l,price:o};h.a.patch("".concat(b,"/api/plants/update/").concat(n),d).then((function(){H(R.map((function(e){return e._id===n&&(e.name=c,e.description=a,e.size=s,e.image=r,e.imagePublicId=i,e.location=l,e.price=o),e}))),e.history.push("/"),j.animateScroll.scrollTo(Ne+Ce)})).catch((function(e){return console.log("Update plant failed",e)}))},Me=function(t,n){var c={imagePublicId:n};h.a.post("".concat(b,"/api/destroy"),c).then((function(){h.a.delete("".concat(b,"/api/plants/delete/").concat(t)).then((function(){H(R.filter((function(e){return e._id!==t}))),e.history.push("/"),j.animateScroll.scrollTo(Ne+Ce)})).catch((function(e){return console.log("Delete plant failed",e)}))})).catch((function(e){return console.log("Delete image failed",e)}))},Be=function(){h.a.post("".concat(b,"/api/create-payment-intent"),{},{withCredentials:!0}).then((function(){return e.history.push("/")})).catch((function(e){return console.log("Checkout failed",e)}))};Object(c.useEffect)((function(){N&&(E(!1),h.a.get("".concat(b,"/api/requests/fetch")).then((function(e){$(e.data),ie(X.filter((function(e){return e.seller._id===m._id})).length);var t=setInterval((function(){return xe((function(e){return e+1}))}),1e4);he(t)})).catch((function(e){return console.log("Checking requests failed",e)})))}),[N]),Object(c.useEffect)((function(){h.a.get("".concat(b,"/api/requests/fetch")).then((function(e){$(e.data);var t=X.filter((function(e){return e.seller._id===m._id})).length;re<t&&(ie(t),ue(!0))})).catch((function(e){return console.log("Checking requests failed",e)}))}),[fe]);var Ye=function(){return ue(!1)},Qe=function(){h.a.get("".concat(b,"/api/requests/fetch")).then((function(e){return $(e.data)})).catch((function(e){return console.log("Fetching requests failed",e)}))},Ke=function(t,n){t.preventDefault();var c=t.target.message,a=n._id,s={seller:n.creator._id,plant:a,message:c.value};h.a.post("".concat(b,"/api/requests/create"),s,{withCredentials:!0}).then((function(t){$([t.data].concat(Object(o.a)(X))),e.history.push("/plants/read/".concat(n._id))})).catch((function(e){return Pe(e.response.data.error)}))},Ze=function(e){h.a.get("".concat(b,"/api/requests/read/").concat(e),{withCredentials:!0}).then((function(e){return ce(e.data)})).catch((function(){return console.log("Read request failed")}))},Ve=function(e){var t=JSON.parse(JSON.stringify(ne));t.reply=e.target.value,ce(t)},Xe=function(t){var n=t._id,c=t.buyer,a=t.seller,s=t.plant,r=t.message,i=t.reply,l={buyer:c,seller:a,plant:s,message:r,reply:i};h.a.patch("".concat(b,"/api/requests/update/").concat(n),l).then((function(){$(X.map((function(e){return e._id===n&&(e.buyer=c,e.seller=a,e.plant=s,e.message=r,e.reply=i),e}))),e.history.push("/requests/read/".concat(n))})).catch((function(e){return console.log("Update request failed",e)}))},$e=function(t){h.a.delete("".concat(b,"/api/requests/delete/").concat(t)).then((function(){$(X.filter((function(e){return e._id!==t}))),ie((function(e){return e-1})),e.history.push("/requests/fetch")})).catch((function(e){return console.log("Delete request failed",e)}))},et=function(t){t.preventDefault();var n=t.target,c=n.username,a=n.email,s=n.password,r={username:c.value,email:a.value.toLowerCase(),password:s.value};h.a.post("".concat(b,"/api/signup"),r).then((function(t){p(t.data),E(!0),e.history.push("/")})).catch((function(e){return Pe(e.response.data.error)}))},tt=function(t){t.preventDefault();var n=t.target,c=n.email,a=n.password,s={email:c.value,password:a.value};h.a.post("".concat(b,"/api/signin"),s,{withCredentials:!0}).then((function(t){p(t.data),E(!0),e.history.push("/")})).catch((function(e){return Pe(e.response.data.error)}))},nt=function(){h.a.post("".concat(b,"/api/logout"),{},{withCredentials:!0}).then((function(){p(null),clearInterval(me),e.history.push("/")})).catch((function(e){return console.log("Logout failed",e)}))};return a?Object(f.jsx)("div",{class:"spinner-grow text-success m-5",role:"status",children:Object(f.jsx)("span",{class:"visually-hidden",children:" Loading... "})}):Object(f.jsxs)("div",{class:"main",children:[Object(f.jsx)(x,{onLogOut:nt,isNewRequest:de,user:m,headerHeight:Ne,aboutHeight:Ce}),Object(f.jsxs)(u.d,{children:[Object(f.jsx)(u.b,{exact:!0,path:"/",render:function(){return Object(f.jsx)(y,{onSearchPlant:_e,onGetElementsHeight:Te,plants:R,query:A,headerHeight:Ne})}}),Object(f.jsx)(u.b,{path:"/plants/create",render:function(){return Object(f.jsx)(q,{onCreatePlant:De,onClearError:Re,user:m,headerHeight:Ne,aboutHeight:Ce,error:Ee})}}),Object(f.jsx)(u.b,{path:"/plants/read/:plantId",render:function(e){return Object(f.jsx)(k,Object(l.a)({onReadPlant:ze,onDeletePlant:Me,plant:Q,user:m,headerHeight:Ne,aboutHeight:Ce},e))}}),Object(f.jsx)(u.b,{path:"/plants/update",render:function(){return Object(f.jsx)(I,{onNameChange:Je,onDescriptionChange:Fe,onSizeChange:Le,onPriceChange:Ue,onLocationChange:Ge,onImageChange:We,onUpdatePlant:Ae,plant:Q,headerHeight:Ne,aboutHeight:Ce})}}),Object(f.jsx)(u.b,{path:"/plants/checkout",render:function(e){return Object(f.jsx)(z,Object(l.a)({onCheckout:Be,headerHeight:Ne,aboutHeight:Ce},e))}}),Object(f.jsx)(u.b,{path:"/requests/fetch",render:function(){return Object(f.jsx)(J,{onFetchAllRequests:Qe,onClearNewRequest:Ye,user:m,requests:X,amountOfRequests:re})}}),Object(f.jsx)(u.b,{path:"/requests/create",render:function(e){return Object(f.jsx)(F,Object(l.a)({onCreateRequest:Ke,onClearError:Re,user:m,error:Ee},e))}}),Object(f.jsx)(u.b,{path:"/requests/read/:requestId",render:function(e){return Object(f.jsx)(L,Object(l.a)({onReadRequest:Ze,onDeleteRequest:$e,request:ne,user:m},e))}}),Object(f.jsx)(u.b,{path:"/requests/update",render:function(){return Object(f.jsx)(U,{onCreateReply:Ve,onUpdateRequest:Xe,request:ne})}}),Object(f.jsx)(u.b,{path:"/signup",render:function(){return Object(f.jsx)(S,{onSignUp:et,onClearError:Re,onClearNewRequest:Ye,error:Ee})}}),Object(f.jsx)(u.b,{path:"/signin",render:function(){return Object(f.jsx)(w,{onSignIn:tt,onClearError:Re,onClearNewRequest:Ye,error:Ee})}}),Object(f.jsx)(u.b,{path:"/logout",render:function(){return Object(f.jsx)(C,{onLogOut:nt,onClearNewRequest:Ye})}}),Object(f.jsx)(u.b,{component:G})]}),Object(f.jsx)(W,{}),Object(f.jsx)(g,{})]})}));n(97);r.a.render(Object(f.jsx)(a.a.StrictMode,{children:Object(f.jsx)(i.a,{children:Object(f.jsx)(A,{})})}),document.querySelector("#root"))}},[[98,1,2]]]);
//# sourceMappingURL=main.66ab6490.chunk.js.map
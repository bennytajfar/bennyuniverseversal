(this.webpackJsonpfinalversion=this.webpackJsonpfinalversion||[]).push([[0],{21:function(e,a,t){e.exports=t.p+"static/media/logo.d846540c.png"},27:function(e,a,t){},29:function(e,a,t){},50:function(e,a,t){e.exports=t(77)},55:function(e,a,t){},67:function(e,a,t){},68:function(e,a,t){},69:function(e,a,t){},76:function(e,a,t){},77:function(e,a,t){"use strict";t.r(a);var n=t(0),c=t.n(n),l=t(40),s=t.n(l),r=(t(55),t(20)),i=t(3),o=function(){return c.a.createElement("div",{className:"header"},c.a.createElement("div",{className:"header__logo"},"Benny's Universe"),c.a.createElement("div",{className:"header__text"},"we will always protect your privacy"))},u=(t(27),t(2)),m=t(17),d=t.n(m);t(56),t(58),t(78);d.a.initializeApp({apiKey:"AIzaSyBkRM7Afyzheh_8YjO_58RdUzegGGS8mB8",authDomain:"handshake-802fe.firebaseapp.com",databaseURL:"https://handshake-802fe.firebaseio.com",projectId:"handshake-802fe",storageBucket:"handshake-802fe.appspot.com",messagingSenderId:"397817233552",appId:"1:397817233552:web:cb836c026ce05f21631815"});var f=d.a.auth(),E=d.a.firestore(),g=d.a.storage(),p=function(){var e=Object(n.useState)(null),a=Object(u.a)(e,2),t=a[0],l=a[1],s=Object(n.useState)(null),r=Object(u.a)(s,2),o=r[0],m=r[1],d=Object(n.useState)(null),g=Object(u.a)(d,2),p=g[0],b=g[1],v=Object(n.useState)(!1),h=Object(u.a)(v,2),N=h[0],O=h[1];return c.a.createElement(c.a.Fragment,null,!N&&c.a.createElement("div",{className:"signin"},c.a.createElement("div",{className:"signinform"},c.a.createElement("input",{type:"email",className:"inputemail",placeholder:"Email",onChange:function(e){l(e.target.value)}}),c.a.createElement("input",{type:"password",className:"inputpassword",placeholder:"Password",onChange:function(e){m(e.target.value)}}),c.a.createElement("div",{className:"login",onClick:function(){f.signInWithEmailAndPassword(t,o).catch((function(e){b(e.message)})).then((function(e){O(!0)}))}},"Log In")),!p&&c.a.createElement("div",{className:"button",onClick:function(){f.createUserWithEmailAndPassword(t,o).then((function(e){E.collection("users").doc(e.user.id).set({email:e.user.email,uid:e.user.uid})})).catch((function(e){console.log(e.message)})),b("Now you could log in")}},"Sign Up"),p&&c.a.createElement("div",{className:"msg"},p)),N&&c.a.createElement(i.a,{to:"/home"}))},b=t(21),v=t.n(b),h=function(){return c.a.createElement("div",{className:"main"},c.a.createElement(o,null),c.a.createElement("div",{className:"skul"},c.a.createElement("img",{className:"skullogo",src:v.a,alt:"logo"})),c.a.createElement(p,null))},N=t(32),O=t.n(N),j=t(42),S=(t(67),t(90)),k=t(47),y=t.n(k),w=(t(29),t(68),t(69),function(e){var a=e.message,t=e.user;e.to;return c.a.createElement("div",{className:"sendmessage"},c.a.createElement("div",{className:a.sender===t?"body":"answerbody"},a.message),c.a.createElement("div",{className:"info"}))}),C=function(e){var a=e.messageto,t=Object(n.useState)(null),l=Object(u.a)(t,2),s=l[0],r=l[1],i=Object(n.useState)(null),o=Object(u.a)(i,2),m=o[0],d=o[1],g=Object(n.useState)(null),p=Object(u.a)(g,2),b=p[0],v=p[1],h=Object(n.useState)(""),N=Object(u.a)(h,2),O=N[0],j=N[1],S=Object(n.useState)(null),k=Object(u.a)(S,2),y=k[0],C=k[1];return Object(n.useEffect)((function(){var e=f.currentUser;r(e.email),E.collection("messages").orderBy("timestamp").onSnapshot((function(e){C(e.docs.map((function(e){return e.data()})))}))}),[O]),Object(n.useEffect)((function(){var e=f.currentUser;e&&d(e.email),E.collection("users").onSnapshot((function(e){var t=e.docs.map((function(e){return e.data()})).filter((function(e){return e.email===a}));if(console.log(t),1===t.length){var n=t[0].url;v(n)}}))}),[a]),c.a.createElement("div",{className:"message"},c.a.createElement("div",{className:"imgholder"},c.a.createElement("img",{className:"img",src:b,alt:a})),c.a.createElement("div",{className:"nameuser"},s),c.a.createElement("div",{className:"inputholder"},c.a.createElement("form",{onSubmit:function(e){e.preventDefault();var a=Date.now();E.collection("messages").add({sender:m,receiver:s,message:O,timestamp:a}),j("")}},c.a.createElement("input",{className:"input",value:O,onChange:function(e){j(e.target.value)},placeholder:"wrtie youe message here..."}))),c.a.createElement("div",{className:"canvas"},y&&y.map((function(e){return e.sender===a||e.receiver===m?c.a.createElement(w,{key:e.timestamp,user:m,to:s,message:e}):null}))))},I=function(e){var a=e.email,t=e.url,l=Object(n.useState)(null),s=Object(u.a)(l,2),r=s[0],i=s[1],o=Object(n.useState)(null),m=Object(u.a)(o,2),d=m[0],E=m[1],g=Object(n.useState)(null),p=Object(u.a)(g,2),b=p[0],v=p[1];return f.onAuthStateChanged((function(e){e?i(e.metadata.lastSignInTime):console.log("nobody is here")})),c.a.createElement(c.a.Fragment,null,!d&&c.a.createElement("div",{className:"sidebar"},c.a.createElement("div",{onClick:function(e){console.log(e.target.id),v(e.target.id),E(!0)},id:a,className:"titlenamesidebar"},c.a.createElement(S.a,{src:t,className:"avatarsidebar"}),c.a.createElement("div",{className:"spansidebar"},c.a.createElement("span",{className:"namesidebar"},a),c.a.createElement("span",{className:"lastseensidebar"},r)))),d&&c.a.createElement(C,{messageto:b}))},A=function(e){var a=e.credemail,t=Object(n.useState)(null),l=Object(u.a)(t,2),s=l[0],r=l[1];return Object(n.useEffect)((function(){return E.collection("users").onSnapshot((function(e){r(e.docs.map((function(e){return e.data()})))}))}),[a]),s&&s.map((function(e){return c.a.createElement(I,{key:e.url,email:e.email,url:e.url})}))},U=function(){var e=Object(n.useState)(null),a=Object(u.a)(e,2),t=a[0],l=a[1],s=Object(n.useState)(null),r=Object(u.a)(s,2),m=r[0],d=r[1],p=Object(n.useState)(null),b=Object(u.a)(p,2),v=b[0],h=b[1],N=Object(n.useState)(null),k=Object(u.a)(N,2),w=k[0],C=k[1],I=Object(n.useState)(null),U=Object(u.a)(I,2),_=U[0],B=U[1];Object(n.useEffect)((function(){return E.collection("users").onSnapshot((function(e){if(e.docs){var a=e.docs.map((function(e){return e.data()})).filter((function(e){return e.id===w}));a[0]&&h(a[0].url)}}))}),[t,w]);f.onAuthStateChanged((function(e){e?(l(e.email),d(e.metadata.lastSignInTime),C(e.uid)):console.log("nobody is here")}));return c.a.createElement(c.a.Fragment,null,!_&&c.a.createElement("div",{className:"home"},c.a.createElement(o,null),c.a.createElement("div",{className:"title"},c.a.createElement("div",{className:"titlename"},c.a.createElement("label",null,c.a.createElement(S.a,{className:"avatar",src:v}),c.a.createElement("input",{type:"file",className:"inputavatar",onChange:function(e){e.preventDefault();var a=e.target.files[0];g.ref("profilepictureof".concat(t)).put(a).on("state_changed",(function(e){}),(function(e){console.log(e)}),Object(j.a)(O.a.mark((function e(){var a;return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,g.ref("profilepictureof".concat(t)).getDownloadURL();case 2:a=e.sent,E.collection("users").doc(w).set({url:a,id:w,email:t});case 4:case"end":return e.stop()}}),e)}))))}})),c.a.createElement("div",{className:"span"},c.a.createElement("span",{className:"name"},t),c.a.createElement("span",{className:"lastseen"},m))),c.a.createElement("div",{className:"burger"},c.a.createElement(y.a,{className:"burgericon",onclick:function(){f.onAuthStateChanged((function(e){e?(l(e.email),d(e.metadata.lastSignInTime),C(e.uid)):console.log("nobody is here")}))}}))),c.a.createElement("div",{className:"container"},c.a.createElement("div",{className:"sidebarcontainer"},c.a.createElement(A,{credemail:t}))),c.a.createElement("div",{className:"signout"},c.a.createElement("div",{className:"logout",onClick:function(){f.signOut(),C(null),h(null),d(null),l(null),B(!0)}},"Log Out"))),_&&c.a.createElement(i.a,{to:"/logout"}))},_=(t(76),function(){return c.a.createElement("div",{className:"main"},c.a.createElement(o,null),c.a.createElement("div",{className:"skul"},c.a.createElement("img",{className:"skullogo",src:v.a,alt:"logo"})),c.a.createElement("div",{className:"end"},"Thanks for choosing us!"))});var B=function(){return c.a.createElement(r.a,null,c.a.createElement("div",{className:"App"},c.a.createElement(i.d,null,c.a.createElement(i.b,{path:"/signin"}),c.a.createElement(i.b,{path:"/signup"}),c.a.createElement(i.b,{path:"/home"},c.a.createElement(U,null)),c.a.createElement(i.b,{path:"/logout"},c.a.createElement(_,null)),c.a.createElement(i.b,{path:"/"},c.a.createElement(h,null)))))};s.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(B,null)),document.getElementById("root"))}},[[50,1,2]]]);
//# sourceMappingURL=main.f8d13e37.chunk.js.map
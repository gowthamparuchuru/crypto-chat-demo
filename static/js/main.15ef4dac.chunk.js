(this["webpackJsonpcrypto-chat-demo"]=this["webpackJsonpcrypto-chat-demo"]||[]).push([[0],{111:function(e,t,a){e.exports=a.p+"static/media/googleIcon.af68e760.svg"},113:function(e,t,a){e.exports=a.p+"static/media/sendIcon.14f8dffe.svg"},115:function(e,t,a){e.exports=a(225)},131:function(e,t){},133:function(e,t){},144:function(e,t){},146:function(e,t){},173:function(e,t){},175:function(e,t){},176:function(e,t){},182:function(e,t){},184:function(e,t){},202:function(e,t){},204:function(e,t){},216:function(e,t){},219:function(e,t){},225:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),r=a(109),o=a.n(r),l=a(14),i=(a(56),a(10)),s=a.n(i),m=(a(120),a(123),a(110)),u=a(111),p=a.n(u),d=a(54),f=a.n(d),b=a(112),g=a(113),y=a.n(g),E=a(114),v=a(126);function h(e){var t=e.message,a=t.text,n=t.uid,r=t.photoURL,o=n===e.auth.currentUser.uid?"sent":"received";return c.a.createElement(c.a.Fragment,null,c.a.createElement("div",{className:" ".concat(o," d-flex align-items-center")},c.a.createElement("img",{src:r||"https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png",alt:"Profile Pic",className:"profile-img mb-auto"}),""!==e.cryptoKey&&c.a.createElement("p",null,v.decrypt(e.cryptoKey,a))))}var k=function(e){var t=Object(n.useRef)(),a=e.firebase.firestore().collection("messages"),r=a.orderBy("createdAt"),o=Object(E.a)(r,{idField:"id"}),i=Object(l.a)(o,1)[0],m=Object(n.useState)(""),u=Object(l.a)(m,2),p=u[0],d=u[1],g=function(){var t=Object(b.a)(f.a.mark((function t(n){var c,r,o;return f.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n.preventDefault(),document.getElementById("msg-input").focus(),c=e.auth.currentUser,r=c.uid,o=c.photoURL,d(""),t.next=6,a.add({text:v.encrypt(e.cryptoKey,p),createdAt:s.a.firestore.FieldValue.serverTimestamp(),uid:r,photoURL:o});case 6:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}();return Object(n.useEffect)((function(){t&&t.current.scrollIntoView()}),[i]),c.a.createElement(c.a.Fragment,null,c.a.createElement("main",null,i&&i.map((function(t){return c.a.createElement(h,{key:t.id,message:t,cryptoKey:e.cryptoKey,auth:e.auth})})),c.a.createElement("span",{ref:t,id:"dummy"})),c.a.createElement("form",{onSubmit:g,className:"msg-form"},c.a.createElement("input",{type:"text",value:p,onChange:function(e){return d(e.target.value)},onClick:function(){setTimeout((function(){t.current.scrollIntoView()}),300)},placeholder:"Type a message",id:"msg-input"}),c.a.createElement("button",{type:"submit",disabled:!p},c.a.createElement("img",{src:y.a,alt:"send icon"}))))};a(222).config(),s.a.initializeApp(JSON.parse('{"apiKey":"AIzaSyDmAELsDVgIUrpxPkIMPniFQG-bduvujf8","authDomain":"crypto-chat-demo.firebaseapp.com","databaseURL":"https://crypto-chat-demo.firebaseio.com","projectId":"crypto-chat-demo","storageBucket":"crypto-chat-demo.appspot.com","messagingSenderId":"1066352262157","appId":"1:1066352262157:web:7dc48cf00c1ad9bec62944"}'));var N=s.a.auth();function x(e){setTimeout((function(){document.getElementById("key-input").focus()}),100);return c.a.createElement(c.a.Fragment,null,c.a.createElement("form",{className:"crypto-from"},c.a.createElement("div",{className:"form-group"},c.a.createElement("label",null,c.a.createElement("h3",null,"Enter Crpto Key")),c.a.createElement("input",{type:"password",className:"form-control",id:"key-input"})),c.a.createElement("button",{type:"submit",className:"btn btn-primary",id:"key-btn",onClick:function(t){t.preventDefault(),e.setKey(document.getElementById("key-input").value)}},"Submit"),c.a.createElement("small",{className:"form-text text-muted mt-5"},'\u2022 (For Demo) Crypto key is "demo".'),c.a.createElement("small",{className:"form-text text-muted"},"\u2022 Once try entering any wrong key also"," ",c.a.createElement("span",{role:"img","aria-label":"blink"},"\ud83d\ude09.")),c.a.createElement("small",{className:"form-text text-muted"},"\u2022 We can also block account if user enters wrong key many timmes.")))}function I(){var e=Object(n.useState)(!1),t=Object(l.a)(e,2),a=t[0],r=t[1];return c.a.createElement(c.a.Fragment,null,c.a.createElement("button",{className:"btn btn-info btn-lg sign-in ",onClick:function(){r(!0),s.a.auth().signInAnonymously().catch((function(e){console.log(e)}))}},a?c.a.createElement(c.a.Fragment,null,c.a.createElement("span",{class:"spinner-border spinner-border mr-2",role:"status","aria-hidden":"true"}),"Logging in..."):c.a.createElement(c.a.Fragment,null,c.a.createElement("img",{alt:"Anonymous Mask icon",src:"https://img.icons8.com/ios/344/anonymous-mask.png"}),c.a.createElement("span",{style:{color:"black"}},"Log in Anonymously"))),c.a.createElement("button",{className:"btn btn-light btn-lg sign-in mt-4",onClick:function(){var e=new s.a.auth.GoogleAuthProvider;N.signInWithPopup(e)}},c.a.createElement("img",{src:p.a,alt:"Google Icon"}),c.a.createElement("span",{className:"ml-3"},"Log in with Google")))}function O(){return N.currentUser&&c.a.createElement("button",{className:"btn btn-danger sign-out",onClick:function(){N.signOut(),document.getElementById("navbar-btn").click()}},"Sign Out")}function j(){var e=s.a.firestore(),t=["2FzVSgbCMZYQXfJendY2","H5PcCZb5mziybihyO6de","ImzRj5F8FLs9hUsr8k79","LJC4Fa3Sg1AEVv6ou0K3","xq4rwYo5KyYPQfmuSQP2xq4rwYo5KyYPQfmuSQP2"];return N.currentUser&&c.a.createElement("button",{className:"btn btn-outline-info sign-out",onClick:function(){window.confirm("Are you sure to delete all chat?")&&e.collection("messages").get().then((function(a){a.forEach((function(a){t.includes(a.id)||e.collection("messages").doc(a.id).delete()})),document.getElementById("navbar-btn").click()}))}},"Clear Chat")}var w=function(){var e=Object(m.a)(N),t=Object(l.a)(e,1)[0],a=Object(n.useState)(""),r=Object(l.a)(a,2),o=r[0],i=r[1];return c.a.createElement("div",{className:"App"},c.a.createElement("nav",{className:"navbar navbar-expand-lg fixed-top navbar-dark bg-dark"},c.a.createElement("a",{className:"navbar-brand"},c.a.createElement("h1",null,c.a.createElement("span",{role:"img","aria-label":"msg"},"\ud83d\udcac"))),c.a.createElement("button",{className:"navbar-toggler",type:"button",id:"navbar-btn","data-toggle":"collapse","data-target":"#navbarText","aria-controls":"navbarText","aria-expanded":"false","aria-label":"Toggle navigation"},c.a.createElement("span",{className:"navbar-toggler-icon"})),c.a.createElement("div",{className:"collapse navbar-collapse",id:"navbarText"},c.a.createElement("ul",{className:"navbar-nav ml-auto"},""!==o&&c.a.createElement("li",{className:"nav-item"},c.a.createElement("a",{className:"nav-link"},c.a.createElement(j,null))),c.a.createElement("li",{className:"nav-item"},c.a.createElement("a",{className:"nav-link"},c.a.createElement(O,{className:"mb-3"})))))),c.a.createElement("section",null,t?""===o?c.a.createElement(x,{setKey:function(e){return i(e)}}):c.a.createElement(k,{cryptoKey:o,auth:N,firebase:s.a}):c.a.createElement(I,null)))};o.a.render(c.a.createElement(w,null),document.getElementById("root"))},56:function(e,t,a){}},[[115,1,2]]]);
//# sourceMappingURL=main.15ef4dac.chunk.js.map
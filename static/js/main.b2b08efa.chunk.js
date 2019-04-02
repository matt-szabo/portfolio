(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{36:function(n,e,t){n.exports=t(71)},44:function(n,e,t){},71:function(n,e,t){"use strict";t.r(e);var r=t(0),a=t.n(r),i=t(17),o=t.n(i),c=t(8),u=t.n(c),l=t(14),s=t(9),d=t(10),p=t(12),m=t(11),f=t(13),h=t(73),g=t(74),x=t(75),b=(t(44),t(3)),v=t(2),w={colors:{dark:"#1B1B1E",darkOne:"#373F51",middle:"#373F51",lightOne:"#A9BCD0",light:"white"},fontWg:{thin:300,reg:400,fat:800},media:{desktop:"@media(min-width: 1324px)",tablet:"@media(min-width: 1024px)",mobile:"@media(min-width: 665px)"}};function y(){var n=Object(b.a)(["\n body {\n   padding: 0;\n   box-sizing:border-box;\n   margin 0;\n   background:","\n   font-family: Montserrat,'Segoe UI', sans-serif ;\n   color:","\n  }\n"]);return y=function(){return n},n}var j=Object(v.b)(y(),function(n){return n.theme.colors.light},function(n){return n.theme.colors.dark});function k(n){var e=n.children;return a.a.createElement(v.a,{theme:w},a.a.createElement(a.a.Fragment,null,a.a.createElement(j,null),e))}function E(){var n=Object(b.a)(["\n        font-size:1.6em;\n        margin:0;\n        \n        font-family: Oswald, sans-serif;\n\n"]);return E=function(){return n},n}var O=v.c.h2(E()),z=t(25),S=t(72);function G(){var n=Object(b.a)(["\n    display:flex;\n    justify-content:center;\n    align-items:center;\n    flex-direction:column;\n    list-style-type:none;\n    margin: 4%;\n    li{\n        font-size:4em;\n        font-weight:",";\n        transition: all 1s ease;\n    :hover{\n        color:","\n        transform: translateX(5px);\n    }\n}\n"]);return G=function(){return n},n}function T(){var n=Object(b.a)(["\n    position:fixed;\n    top:0;\n    left:0;\n    height:100vh;\n    width:100%;\n    z-index:100;\n    background:","\n    // display:",";\n"]);return T=function(){return n},n}function A(){var n=Object(b.a)(["\nwidth: 30px;\nheight: 3px;\nbackground-color:black\nmargin:6px 0;\ntransition: 0.4s;\nborder-radius: 0px;\nfont-size: .5px;\ndisplay: block;\ntransform:","; \n"]);return A=function(){return n},n}function L(){var n=Object(b.a)(["\nwidth: 30px;\nheight: 3px;\nbackground-color:black;\nmargin:6px 0;\ntransition: 0.4s;\nborder-radius: 0px;\nfont-size: .5px;\ndisplay: block;\nopacity:",";\n"]);return L=function(){return n},n}function M(){var n=Object(b.a)(["\nwidth: 30px;\nheight: 3px;\nmargin:6px 0;\ntransition: 0.4s;\nborder-radius: 0px;\nfont-size: .5px;\ndisplay: block;\nbackground:black;\n transform:","; \n"]);return M=function(){return n},n}function W(){var n=Object(b.a)(["\n    position:relative;\n    height: 31px;\n    width: 31px;\n    display: inline-block;\n    cursor: pointer;\n    z-index: 9900;\n"]);return W=function(){return n},n}var _=v.c.div(W()),N=v.c.div(M(),function(n){return n.val?"rotate(-45deg) translate(-5px, 3px)":"rotate(-0deg) translate(-0px, 0px)"}),C=v.c.div(L(),function(n){return n.val?"0":"1"}),B=v.c.div(A(),function(n){return n.val?"rotate(45deg) translate(-10px, -8px)":"rotate(-0deg) translate(-0px, 0px)"}),D=z.a.div({true:{x:"0%",opacity:1,transition:{duration:600}},false:{x:"150%",opacity:0}}),Q=z.a.ul({true:{x:0,opacity:1,transition:{duration:1200}},false:{x:"150%",opacity:0}}),R=Object(v.c)(D)(T(),function(n){return n.theme.colors.light},function(n){return n.val?"block":"none"}),U=Object(v.c)(Q)(G(),function(n){return n.theme.fontWg.fat},function(n){return n.theme.colors.lightOne});r.Component;function P(){var n=Object(b.a)(["\n  margin:0 auto;\n  width:100%;\n  padding:30px 9%;\n  box-sizing:border-box;\n  text-transform:uppercase;\n  display:flex;\n  justify-content:center;\n  align-items:center;\n  height:70%;\n  position:relative;\n"]);return P=function(){return n},n}function I(){var n=Object(b.a)(["\n  width:100%;\n  height:100vh;\n  position:fixed;\n  display:","; \n  top:0;\n  left:0;\n  z-index:1000;\n  box-sizing:border-box;\n  background: linear-gradient(to bottom, #ffffff 50%, rgba(255, 255, 255, 0.7) 100%);\n  span{\n    display:flex;\n    max-width:1200px;\n    margin:20px auto;\n    justify-content:space-between;\n    align-items:center;\n    padding:0 30px ;\n    box-sizing:inherit;\n  }\n  a{\n    color:"," ;\n    text-decoration:none;\n  }\n  i{\n    display:flex\n    justify-content:center;  \n    position:absolute;\n    bottom:5%;\n    left:0;\n    right:0; \n  }\n"]);return I=function(){return n},n}var q=v.c.div(I(),function(n){return n.hg?"none":"block"},function(n){return n.theme.colors.dark}),F=v.c.img(P());function K(n){return a.a.createElement(q,{hg:n.hg},a.a.createElement("span",null,a.a.createElement("a",{href:"/"},a.a.createElement(O,null,"Matt Szabo - React & web portfolio"))),a.a.createElement(F,{hg:n.hg,src:"facebook_cover_photo_1.svg",alt:"img"}),a.a.createElement("i",{className:"fa fa-angle-down fa-4x","aria-hidden":"true"}))}function V(){var n=Object(b.a)(["\n  display:grid;\n  width:100%;\n  padding:3em 0;\n  grid-template-columns: minmax(320px, 640px);\n  img{\n    width:100%;\n    height:auto;\n    object-fit: cover;\n    border-radius: 2em;\n    border: 3px solid black;\n\n  }\n\n  "," {\n    grid-template-columns:",";\n  font-size:0.6em;\n  grid-template-rows:300px;\n  img{\n  \n    height:300px;\n    width:100%;\n    background:yellow;\n    box-shadow: 6px 6px 12px 0 rgba(0, 0, 0, .15);\n    order:",";    \n  }\n }\n "," {\n  grid-template-columns:",";\n  font-size:0.8em;\n  grid-template-rows:400px;\n  img{\n  \n    height:400px;\n    width:100%;\n    background:yellow;\n    //box-shadow: 6px 6px 12px 0 rgba(0, 0, 0, .15);\n    order:","; \n     \n }\n "," {\n  display:grid;\n  font-size:1.1em;\n  grid-template-columns:",";\n   grid-template-rows:600px;\n   grid-column-gap: 2em;\n\n  width:100%;\n  \n   img{\n     height:600px; \n     \n   }\n }\n  \n"]);return V=function(){return n},n}var H=v.c.div(V(),function(n){return n.theme.media.mobile},function(n){return n.index%2===0?"390px 250px":"250px 390px"},function(n){return n.index%2===0?"1":"2"},function(n){return n.theme.media.tablet},function(n){return n.index%2===0?"550px 350px":"350px 550px"},function(n){return n.index%2===0?"1":"2"},function(n){return n.theme.media.desktop},function(n){return n.index%2===0?"850px 450px":"450px 850px"});function J(){var n=Object(b.a)(["\n        background: ",";\n        width:100%;\n        height:100%;\n        position:relative;\n        order:",";\n        display:flex;\n        justify-content:center;\n        align-items:center; \n      \n      \n"]);return J=function(){return n},n}var Y=v.c.div(J(),function(n){return n.theme.colors.light},function(n){return n.index%2===0?"2":"1"});function X(){var n=Object(b.a)(["\n    background: ","\n    color: ","\n    font-size: ","\n    font-size: 1em;\n    padding:10px;\n    border-radius:50px;\n    height:40px;\n    width:200px;\n    border:1px solid ",";\n    cursor:pointer;\n    transition:all .7s ease;\n\n    :hover{\n        background: ",";\n        color: ","\n    }\n"]);return X=function(){return n},n}var $=v.c.button(X(),function(n){return n.theme.colors.light},function(n){return n.theme.colors.darkOne},function(n){return n.theme.fontWg.thin},function(n){return n.theme.colors.darkOne},function(n){return n.theme.colors.dark},function(n){return n.theme.colors.light});function Z(){var n=Object(b.a)(["\n  color:","\n  font-size: ","; \n  text-align:","; \n  max-height:100px;\n  \n"]);return Z=function(){return n},n}var nn=v.c.h1(Z(),function(n){return n.theme.colors.dark},function(n){return n.isBig?"3em":"1em"},function(n){return n.center?"center":"left"});function en(){var n=Object(b.a)(["\n  height:100%;\n  max-width:640px; \n  margin:250px auto 10px auto; \n  box-sizing:border-box;\n  a{\n    padding-left:20px;\n  }\n  "," {\n     \n  max-width:640px;   \n  a{\n    padding-left:0px;\n  }\n }\n "," {\n  max-width:800px;   \n  margin:250px auto;\n }\n "," {\n  max-width:1300px;\n } \n"]);return en=function(){return n},n}var tn=v.c.div(en(),function(n){return n.theme.media.mobile},function(n){return n.theme.media.tablet},function(n){return n.theme.media.desktop});function rn(){var n=Object(b.a)(["\nbackground:",";\nbox-sizing:border-box;\npadding:0 20px;\n\n \n  "," {\n    height:250px;\n    width:400px;\n    position:relative;\n    box-shadow: ","; \n    left:",";\n    :before{\n      right:",";\n      content:'';\n      height:100px;\n      position:absolute;\n      width:100px;\n      top:0;\n      border-right:","; \n      border-left:","; \n      border-top:1px solid black; \n    }   \n \n }\n "," {\n  height:300px;\n  padding:0 40px;\n  width:500px;\n    :before{\n      right:","; \n    }   \n }\n "," {\n  height:450px;\n  width:550px;\n  padding:0 50px;\n  h1{\n    margin-bottom:60px;\n  }\n    ::before{\n      right:","; \n    } \n } \n"]);return rn=function(){return n},n}var an=v.c.div(rn(),function(n){return n.theme.colors.light},function(n){return n.theme.media.mobile},function(n){return n.index%2===0?" -9px 11px 14px 0 rgba(0, 0, 0, .15)":" 11px 11px 14px 0 rgba(0, 0, 0, .15)"},function(n){return n.index%2===0?"-100px":"100px"},function(n){return n.index%2===0?"0":"200px"},function(n){return n.index%2===0?"1px solid black;":"none"},function(n){return n.index%2!==0?"1px solid black;":"none"},function(n){return n.theme.media.tablet},function(n){return n.index%2===0?"0":"250px"},function(n){return n.theme.media.desktop},function(n){return n.index%2===0?"0":"350px"});function on(){var n=Object(b.a)(["\n    \n"]);return on=function(){return n},n}var cn=v.c.p(on());function un(n){return console.log("Props category",n),a.a.createElement(tn,null,n.category&&n.category.map(function(n,e){return a.a.createElement(H,{key:e,index:e+1},a.a.createElement("img",{src:n.metadata.img.url,alt:"img",index:e+1}),a.a.createElement(Y,{index:e+1},a.a.createElement(an,{index:e+1},a.a.createElement(nn,{isBig:!0},n.title),a.a.createElement(cn,{dangerouslySetInnerHTML:{__html:n.content}}))))}))}function ln(){var n=Object(b.a)(["\n    width:320px;\n    height:400px;\n    background:",";\n    overflow:hidden;\n    justify-self:center;\n    transition:all .8s ease;\n    cursor:pointer;\n    position:relative;\n    opacity:0.7;\n    display:flex;\n    justify-content:center;\n    align-items:center;\n    \n    a{\n        transform: translate(15px, -150%);\n    }\n\n    :hover{\n        transform: translateY(-5px);\n        opacity:1;\n        \n        \n    }\n    :hover a{\n      transform:translate(15px, 20%);\n    }\n\n"]);return ln=function(){return n},n}var sn=v.c.div(ln(),function(n){return n.theme.colors.lightOne});function dn(){var n=Object(b.a)(["\nobject-fit: cover;\nwidth: ",";\n"]);return dn=function(){return n},n}var pn=v.c.img(dn(),function(n){return n.responsive?"100%":""});function mn(){var n=Object(b.a)(["\n    position:absolute;\n    top:0;\n    left:0;\n    z-index:100;\n    height:50px;\n    width:50px;\n    display:flex;\n    justify-content:center;\n    color:",";\n    border:1px solid ","\n    border-radius:50%;\n    align-items:center;\n    transition:all .8s ease;\n    text-decoration:none;\n"]);return mn=function(){return n},n}var fn=v.c.span(mn(),function(n){return n.theme.colors.dark},function(n){return n.theme.colors.dark});function hn(){var n=Object(b.a)(["\n    min-height:100%;\n    display:grid;\n    margin:150px auto;\n    justify-items:center;\n    grid-template-column:1fr;\n    grid-template-rows:400px;\n    grid-gap:10px;\n"," {\n   grid-template-columns:320px 320px;\n   width:640px;\n}\n"," {\n    grid-template-columns:320px 320px 320px;\n    width:960px;   \n}\n"," {\n    grid-template-columns:320px 320px 320px 320px;\n    width:1280px;\n    margin:200px auto 450px auto;\n}\n"]);return hn=function(){return n},n}var gn=v.c.div(hn(),function(n){return n.theme.media.mobile},function(n){return n.theme.media.tablet},function(n){return n.theme.media.desktop}),xn=function(n){function e(){var n,r;Object(s.a)(this,e);for(var a=arguments.length,i=new Array(a),o=0;o<a;o++)i[o]=arguments[o];return(r=Object(p.a)(this,(n=Object(m.a)(e)).call.apply(n,[this].concat(i)))).state={picture:[]},r.componentDidMount=Object(l.a)(u.a.mark(function n(){var e,a,i,o,c;return u.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return e=r.props.match.params.slug,a=t(16),i=a(),o=i.bucket({slug:"2455d100-53e9-11e9-85e5-6914decad3f2",read_key:"VjQgWGD4S9xnNLjyRTubU6Oapgpqz5GcK6PGu2GM0Tn9Tl2LQo"}),n.next=6,o.getObject({slug:"".concat(e)});case 6:c=n.sent,r.setState({picture:c.object});case 8:case"end":return n.stop()}},n,this)})),r}return Object(f.a)(e,n),Object(d.a)(e,[{key:"render",value:function(){return a.a.createElement(gn,{column:!0},this.state.picture.metadata&&this.state.picture.metadata.images.map(function(n,e){return a.a.createElement(sn,{key:e},a.a.createElement(pn,{src:n.metadata.img.url,alt:"grid-img"}),a.a.createElement(fn,{as:S.a,to:"/img/"+n.slug},a.a.createElement("i",{className:"fa fa-link","aria-hidden":"true"})))}))}}]),e}(r.Component);function bn(){var n=Object(b.a)(["\n    max-width:1100px;\n    height:100%;\n    margin:30px auto;\n    padding:0 60px;\n    box-sizing:border-box;\n    font-size:","; \n    text-align:","; \n    "," {\n        margin:150px auto;\n        font-size:","; \n       }\n        \n"]);return bn=function(){return n},n}var vn=v.c.div(bn(),function(n){return n.fs?"2.1em":"0.7em"},function(n){return n.center?"justify":"left"},function(n){return n.theme.media.tablet},function(n){return n.fs?"2.3em":"1em"});function wn(){var n=Object(b.a)(["\n"," {\n  width:100%;\n  height:100%;\n  padding:30px 0;\n  \n }\n "," {\n  padding:150px 0;\n }\n  \n"]);return wn=function(){return n},n}var yn=v.c.div(wn(),function(n){return n.theme.media.mobile},function(n){return n.theme.media.tablet}),jn=function(n){function e(){var n,r;Object(s.a)(this,e);for(var a=arguments.length,i=new Array(a),o=0;o<a;o++)i[o]=arguments[o];return(r=Object(p.a)(this,(n=Object(m.a)(e)).call.apply(n,[this].concat(i)))).state={content:null},r.componentDidMount=Object(l.a)(u.a.mark(function n(){var e,a,i,o;return u.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return e=t(16),a=e(),i=a.bucket({slug:"2455d100-53e9-11e9-85e5-6914decad3f2",read_key:"VjQgWGD4S9xnNLjyRTubU6Oapgpqz5GcK6PGu2GM0Tn9Tl2LQo"}),n.next=5,i.getObject({slug:"contact"});case 5:o=n.sent,r.setState({content:o.object});case 7:case"end":return n.stop()}},n,this)})),r}return Object(f.a)(e,n),Object(d.a)(e,[{key:"render",value:function(){return console.log(this.state.content),a.a.createElement(yn,null,a.a.createElement(vn,null,this.state.content&&a.a.createElement(nn,{isBig:!0,center:!0},this.state.content.title),this.state.content&&a.a.createElement(cn,{dangerouslySetInnerHTML:{__html:this.state.content.content}}),a.a.createElement(nn,null,"About author:"),a.a.createElement("span",null,"Created by: ",a.a.createElement("a",{href:"https://github.com/3ndrius"}," 3ndrius ")),a.a.createElement("hr",null),this.state.content&&a.a.createElement(pn,{responsive:!0,src:this.state.content.metadata.picture.url,alt:"img"})))}}]),e}(r.Component),kn=function(n){function e(){var n,r;Object(s.a)(this,e);for(var a=arguments.length,i=new Array(a),o=0;o<a;o++)i[o]=arguments[o];return(r=Object(p.a)(this,(n=Object(m.a)(e)).call.apply(n,[this].concat(i)))).state={img:null},r.componentDidMount=Object(l.a)(u.a.mark(function n(){var e,a,i,o,c;return u.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return e=r.props.match.params.slug,a=t(16),i=a(),o=i.bucket({slug:"2455d100-53e9-11e9-85e5-6914decad3f2",read_key:"VjQgWGD4S9xnNLjyRTubU6Oapgpqz5GcK6PGu2GM0Tn9Tl2LQo"}),n.next=6,o.getObject({slug:"".concat(e)});case 6:c=n.sent,r.setState({img:c.object});case 8:case"end":return n.stop()}},n,this)})),r}return Object(f.a)(e,n),Object(d.a)(e,[{key:"render",value:function(){return a.a.createElement(tn,null,a.a.createElement(H,{index:0},this.state.img&&a.a.createElement("img",{src:this.state.img.metadata.img.url,alt:"img",index:0}),a.a.createElement(Y,{index:0},a.a.createElement(an,{index:0},this.state.img&&a.a.createElement(nn,{isBig:!0},this.state.img.title),this.state.img&&a.a.createElement(cn,{dangerouslySetInnerHTML:{__html:this.state.img.content}})))),a.a.createElement("br",null)," ",a.a.createElement("br",null),a.a.createElement(S.a,{to:"/"},a.a.createElement($,null,"Go back")))}}]),e}(r.Component);function En(){var n=Object(b.a)(["\n    width:100%;\n    height:150px;\n    display:flex;\n    justify-content:center;\n    align-items:center;\n    flex-direction:column;\n    a{\n        color:#29AAE1;\n        text-decoration:none;\n    }\n    i{\n        margin:6px;\n        cursor:pointer;\n    }\n    span{\n        display:flex;\n        justify-content:center;\n        align-items:center;\n    \n    }\n\n"]);return En=function(){return n},n}var On=v.c.div(En());function zn(){return a.a.createElement(On,null,a.a.createElement("span",null,a.a.createElement("a",{href:"http://github.com/matt-szabo"},a.a.createElement("i",{className:"fa fa-github fa-lg","aria-hidden":"true"})," "),a.a.createElement("a",{href:"https://www.linkedin.com/in/mattszabo/"},a.a.createElement("i",{className:"fa fa-linkedin fa-lg","aria-hidden":"true"})),a.a.createElement("a",{href:"mailto:mattszabo2017@gmail.com"},a.a.createElement("i",{className:"fa fa-at fa-lg","aria-hidden":"true"})),a.a.createElement("a",{href:"tel:514-512-7209"},a.a.createElement("i",{className:"fa fa-phone fa-lg","aria-hidden":"true"}))),a.a.createElement("br",null),a.a.createElement("span",null,"Created using\xa0 ",a.a.createElement("a",{href:"https://cosmicjs.com/"}," Cosmic JS \xa0"),a.a.createElement("img",{width:"auto",height:"20px",src:"/cosmic.svg",alt:"cosmic_logo"})))}var Sn=function(n){function e(){var n,r;Object(s.a)(this,e);for(var a=arguments.length,i=new Array(a),o=0;o<a;o++)i[o]=arguments[o];return(r=Object(p.a)(this,(n=Object(m.a)(e)).call.apply(n,[this].concat(i)))).state={category:null,hg:!1},r.componentDidMount=Object(l.a)(u.a.mark(function n(){var e,a,i,o;return u.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return e=t(16),a=e(),i=a.bucket({slug:"2455d100-53e9-11e9-85e5-6914decad3f2",read_key:"VjQgWGD4S9xnNLjyRTubU6Oapgpqz5GcK6PGu2GM0Tn9Tl2LQo"}),n.next=5,i.getObjects({type:"categories"});case 5:o=n.sent,r.setState({category:o.objects}),document.addEventListener("scroll",function(){window.pageYOffset>50?r.setState({hg:!0}):r.setState({hg:!1})});case 8:case"end":return n.stop()}},n,this)})),r.handleMenu=function(){r.setState(function(n){return{visable:!n.visable}})},r}return Object(f.a)(e,n),Object(d.a)(e,[{key:"render",value:function(){var n=this;return console.log(this.state.category),a.a.createElement("div",{className:"App"},a.a.createElement(k,null,a.a.createElement(h.a,null,a.a.createElement(a.a.Fragment,null,a.a.createElement(K,{hg:this.state.hg}),a.a.createElement(g.a,null,a.a.createElement(x.a,{path:"/",exact:!0,render:function(e){return a.a.createElement(un,{category:n.state.category})}}),a.a.createElement(x.a,{path:"/contact",exact:!0,component:jn}),a.a.createElement(x.a,{path:"/img/:slug",component:kn,exact:!0}),a.a.createElement(x.a,{path:"/:slug",component:xn,exact:!0})))),a.a.createElement(zn,null)))}}]),e}(r.Component),Gn=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function Tn(n,e){navigator.serviceWorker.register(n).then(function(n){n.onupdatefound=function(){var t=n.installing;null!=t&&(t.onstatechange=function(){"installed"===t.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See http://bit.ly/CRA-PWA."),e&&e.onUpdate&&e.onUpdate(n)):(console.log("Content is cached for offline use."),e&&e.onSuccess&&e.onSuccess(n)))})}}).catch(function(n){console.error("Error during service worker registration:",n)})}o.a.render(a.a.createElement(Sn,null),document.getElementById("root")),function(n){if("serviceWorker"in navigator){if(new URL("/portfolio",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",function(){var e="".concat("/portfolio","/service-worker.js");Gn?(function(n,e){fetch(n).then(function(t){var r=t.headers.get("content-type");404===t.status||null!=r&&-1===r.indexOf("javascript")?navigator.serviceWorker.ready.then(function(n){n.unregister().then(function(){window.location.reload()})}):Tn(n,e)}).catch(function(){console.log("No internet connection found. App is running in offline mode.")})}(e,n),navigator.serviceWorker.ready.then(function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit http://bit.ly/CRA-PWA")})):Tn(e,n)})}}()}},[[36,2,1]]]);
//# sourceMappingURL=main.b2b08efa.chunk.js.map
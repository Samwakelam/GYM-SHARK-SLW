(this["webpackJsonpgym-shark"]=this["webpackJsonpgym-shark"]||[]).push([[0],{114:function(e,t,c){},115:function(e,t,c){},116:function(e,t,c){},117:function(e,t,c){},118:function(e,t,c){},119:function(e,t,c){"use strict";c.r(t);var n=c(1),s=c.n(n),a=c(50),r=c.n(a),i=c(6),o=(c(27),c(3)),l=c(0),j=Object(n.createContext)(),u=function(e){var t=e.children,c=Object(n.useState)("male"),s=Object(o.a)(c,2),a=s[0],r=s[1];return Object(l.jsx)(j.Provider,{value:{gender:a,genderMale:function(){r("male")},genderFemale:function(){r("female")}},children:t})},b=j,d=(c(58),function(e){var t=e.onEnable,c=Object(n.useState)("off"),s=Object(o.a)(c,2),a=s[0],r=s[1];return Object(n.useEffect)((function(){t(a)}),[a,t]),Object(l.jsx)("label",{className:"switch",onClick:function(e){e.preventDefault(),r("on"===a?"off":"on")},children:Object(l.jsx)("span",{className:"slider ".concat(a)})})}),x=c(12),O=c(13),h=c(10),p=(c(32),function(){var e=Object(n.useContext)(b).gender;return Object(l.jsx)("nav",{id:"top-nav",children:Object(l.jsxs)("ul",{children:[Object(l.jsx)("li",{children:Object(l.jsx)(i.b,{className:"".concat(e),exact:!0,to:{pathname:"/",aboutProps:{page:"home"}},children:Object(l.jsx)(h.a,{icon:x.e})})}),Object(l.jsx)("li",{children:Object(l.jsx)(i.b,{className:"".concat(e),to:{pathname:"/exercise",aboutProps:{page:"exercise"}},children:Object(l.jsx)(h.a,{icon:x.c})})}),Object(l.jsx)("li",{children:Object(l.jsx)(i.b,{className:"".concat(e),to:{pathname:"/favourites",aboutProps:{page:"favourites"}},children:Object(l.jsx)(h.a,{icon:O.a})})}),Object(l.jsx)("li",{children:Object(l.jsx)(i.b,{className:"".concat(e),to:{pathname:"/help",aboutProps:{page:"help"}},children:Object(l.jsx)(h.a,{icon:O.b})})})]})})}),m=function(){var e=Object(n.useContext)(b),t=e.genderMale,c=e.genderFemale;return Object(l.jsxs)("header",{children:[Object(l.jsx)(d,{onEnable:function(e){"on"===e?c():"off"===e&&t()}}),Object(l.jsx)(p,{})]})},f=c(7),v=c(16),g=c.n(v),N=c(23),S=c(4),y=function(){var e=Object(N.a)(g.a.mark((function e(){var t,c,n;return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"https://private-922d75-recruitmenttechnicaltest.apiary-mock.com/customexercises/",t={method:"GET",headers:{}},e.prev=2,e.next=5,fetch("https://private-922d75-recruitmenttechnicaltest.apiary-mock.com/customexercises/",t);case 5:return c=e.sent,e.next=8,c.json();case 8:return n=e.sent,e.abrupt("return",n.exercises);case 12:return e.prev=12,e.t0=e.catch(2),console.log("fetcher Error =",e.t0),e.abrupt("return",e.t0);case 16:case"end":return e.stop()}}),e,null,[[2,12]])})));return function(){return e.apply(this,arguments)}}(),C=function(){var e=Object(n.useContext)(b).gender;return Object(l.jsx)("nav",{id:"exercise-navigation",children:Object(l.jsx)("div",{children:Object(l.jsxs)("ul",{children:[Object(l.jsx)("li",{className:"nav-item",children:Object(l.jsxs)(i.b,{to:{pathname:"/exercise/arms",aboutProps:{page:"exercise"}},children:[Object(l.jsx)("img",{alt:"arms",src:"".concat("/GYM-SHARK-SLW","/assets/strength.png"),className:"body-area ".concat(e)}),Object(l.jsx)("h3",{className:"nav-item",children:"Arms"})]})}),Object(l.jsx)("li",{className:"nav-item",children:Object(l.jsxs)(i.b,{to:{pathname:"/exercise/shoulders",aboutProps:{page:"exercise"}},children:[Object(l.jsx)("img",{alt:"shoulders",src:"".concat("/GYM-SHARK-SLW","/assets/shoulder.png"),className:"body-area ".concat(e)}),Object(l.jsx)("h3",{className:"nav-item",children:"Shoulders"})]})}),Object(l.jsx)("li",{className:"nav-item",children:Object(l.jsxs)(i.b,{to:{pathname:"/exercise/back",aboutProps:{page:"exercise"}},children:[Object(l.jsx)("img",{alt:"back",src:"".concat("/GYM-SHARK-SLW","/assets/back.png"),className:"body-area ".concat(e)}),Object(l.jsx)("h3",{className:"nav-item",children:"Back"})]})}),Object(l.jsx)("li",{className:"nav-item",children:Object(l.jsxs)(i.b,{to:{pathname:"/exercise/chest",aboutProps:{page:"exercise"}},children:[Object(l.jsx)("img",{alt:"chest",src:"".concat("/GYM-SHARK-SLW","/assets/chest.png"),className:"body-area ".concat(e)}),Object(l.jsx)("h3",{className:"nav-item",children:"Chest"})]})}),Object(l.jsx)("li",{className:"nav-item",children:Object(l.jsxs)(i.b,{to:{pathname:"/exercise/core",aboutProps:{page:"exercise"}},children:[Object(l.jsx)("img",{alt:"core",src:"".concat("/GYM-SHARK-SLW","/assets/torso.png"),className:"body-area ".concat(e)}),Object(l.jsx)("h3",{className:"nav-item",children:"Core"})]})}),Object(l.jsx)("li",{className:"nav-item",children:Object(l.jsxs)(i.b,{to:{pathname:"/exercise/legs",aboutProps:{page:"exercise"}},children:[Object(l.jsx)("img",{alt:"legs",src:"".concat("/GYM-SHARK-SLW","/assets/legs.png"),className:"body-area ".concat(e)}),Object(l.jsx)("h3",{className:"nav-item",children:"Legs"})]})})]})})})},A=c(31),k=(c(67),c(52)),L=c.n(k),P=c(24),E=c.n(P),w=(c(114),function(e,t){localStorage.setItem(e,JSON.stringify(t))}),H=function(e){return JSON.parse(localStorage.getItem(e))},M=function(e,t){var c=H(e);if(t&&c.length>1){var n=c.indexOf(t);c.splice(n,1),w(e,c)}else localStorage.removeItem(e)},G=(c(48),c(115),function(){return Object(l.jsxs)("div",{className:"lds-ripple",children:[Object(l.jsx)("div",{}),Object(l.jsx)("div",{})]})}),D=function(e){var t=e.height,c=e.width;return Object(l.jsx)("div",{className:"img-placeholder",style:{height:t,width:c},children:Object(l.jsx)(G,{})})},F=function(e){e.bodyAreas;var t=e.exercise,c=Object(n.useState)(""),s=Object(o.a)(c,2),a=s[0],r=s[1],i=Object(n.useState)(""),j=Object(o.a)(i,2),u=j[0],d=j[1],p=Object(n.useState)(!1),m=Object(o.a)(p,2),f=m[0],v=m[1],g=Object(n.useRef)(null),N=Object(n.useContext)(b).gender;return Object(n.useEffect)((function(){var e,c=H("fave");c&&(e=c.includes(null===t||void 0===t?void 0:t.id)),e&&v(!0)}),[null===t||void 0===t?void 0:t.id]),Object(l.jsxs)("article",{className:"card-container",children:[Object(l.jsx)("div",{className:"img-container",children:Object(l.jsx)(E.a,{placeholder:Object(l.jsx)(D,{height:"400px"}),offset:100,debounce:500,children:Object(l.jsx)("img",{alt:"exercise",src:"male"===N?null===t||void 0===t?void 0:t.male.image:null===t||void 0===t?void 0:t.female.image,className:"exercise-img"})})}),Object(l.jsx)("div",{className:"favourite-select ".concat(f," ").concat(N),onClick:function(){var e=H("fave");f?M("fave",null===t||void 0===t?void 0:t.id):f||e?!f&&e&&(e.push(null===t||void 0===t?void 0:t.id),w("fave",e)):w("fave",[null===t||void 0===t?void 0:t.id]),v(!f)},children:Object(l.jsx)(h.a,{icon:f?x.d:O.a})}),Object(l.jsxs)("div",{className:"infomation-container",children:[Object(l.jsx)("p",{children:null===t||void 0===t?void 0:t.bodyAreas}),Object(l.jsxs)("div",{className:"titles",children:[Object(l.jsx)("h2",{children:null===t||void 0===t?void 0:t.name}),Object(l.jsx)("button",{className:"collapse ".concat(a),onClick:function(){r(""===a?"active":""),d("active"===a?"0px":"".concat(g.current.scrollHeight,"px"))},children:Object(l.jsx)(h.a,{icon:"active"===a?x.b:x.a})})]}),Object(l.jsx)("div",{ref:g,className:"transcript",style:{maxHeight:"".concat(u)},children:L()(null===t||void 0===t?void 0:t.transcript)})]})]})},B=(c(116),function(e){var t=e.bodyAreas,c=e.exercise,s=e.onSelect,a=Object(n.useState)(!1),r=Object(o.a)(a,2),i=r[0],j=r[1],u=Object(n.useRef)(null),d=Object(n.useContext)(b).gender;return Object(n.useEffect)((function(){var e,t=H("fave");t&&(e=t.includes(null===c||void 0===c?void 0:c.id)),e&&j(!0)}),[null===c||void 0===c?void 0:c.id]),Object(l.jsxs)("article",{ref:u,className:"preview-card-container",onClick:function(){var e=u.current.offsetTop;s(e)},children:[Object(l.jsx)("div",{className:"img-container",children:Object(l.jsx)(E.a,{placeholder:Object(l.jsx)(D,{height:"200px",width:"200px"}),offset:100,debounce:500,children:Object(l.jsx)("img",{alt:"exercise",src:"male"===d?null===c||void 0===c?void 0:c.male.image:null===c||void 0===c?void 0:c.female.image,className:"preview-exercise-img"})})}),Object(l.jsxs)("div",{className:"information-container",children:[Object(l.jsx)("h2",{children:null===c||void 0===c?void 0:c.name}),Object(l.jsx)("ul",{children:t.map((function(e){return Object(l.jsx)("li",{children:"".concat(e)},e)}))})]}),Object(l.jsx)("div",{className:"favourite-select ".concat(i," ").concat(d),children:Object(l.jsx)(h.a,{icon:i?x.d:O.a})})]})}),R=function(e){var t=e.children,c=e.onClose,n=e.openLocation;return Object(l.jsx)("div",{id:"overlay",onClick:function(e){e.stopPropagation(),e.target===e.currentTarget&&c()},children:Object(l.jsx)("div",{id:"location-container",style:{top:"".concat(n,"px")},children:t})})},I=(c(49),function(e){var t=e.onSelectChange,c=e.selectValue,s=e.type,a=Object(n.useContext)(b).gender;return Object(l.jsxs)("select",{name:"bodyAreas",id:"bodyAreas-filter",value:c,onChange:function(e){var c=e.target.value;t(c)},children:[Object(l.jsx)("option",{className:"".concat(a),value:"all",children:"All Muscle Groups"}),(s.includes("Shoulders")||s.includes("Arms")||s.includes("Chest")||s.includes("All"))&&Object(l.jsx)("option",{value:"Triceps",children:"Triceps"}),(s.includes("Arms")||s.includes("Back")||s.includes("All"))&&Object(l.jsx)("option",{value:"Biceps",children:"Biceps"}),(s.includes("Core")||s.includes("All"))&&Object(l.jsx)("option",{value:"Abs",children:"Abs"}),(s.includes("Legs")||s.includes("Back")||s.includes("All"))&&Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)("option",{value:"Hamstrings",children:"Hamstrings"}),Object(l.jsx)("option",{value:"Quads",children:"Quads"})]}),(s.includes("Legs")||s.includes("All"))&&Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)("option",{value:"Glutes",children:"Glutes"}),Object(l.jsx)("option",{value:"Calves",children:"Calves"})]})]})}),X=function(e){var t=e.onInputChange,c=e.inputValue,s=Object(n.useState)("none"),a=Object(o.a)(s,2),r=a[0],i=a[1];return Object(l.jsxs)("form",{id:"search-bar",onMouseEnter:function(){i("inline-block")},onMouseLeave:function(){i("none")},children:[Object(l.jsx)("input",{type:"text",id:"exercise-search",name:"exercise-search",placeholder:"Search",style:{display:"".concat(r)},onChange:function(e){e.preventDefault();var c=function(e){for(var t=e.toLowerCase().split(" "),c=[],n=0;n<t.length;n++)if(0!==t[n].length){var s=t[n].split("");s[0]=s[0].toUpperCase();var a=s.join("");c.push(a)}else c.push(t[n]);return c.join(" ")}(e.target.value);t(c)},value:c}),Object(l.jsx)("label",{htmlFor:"exercise-search",children:Object(l.jsx)(h.a,{icon:x.f})})]})},K=function(e){var t=e.exerciseData,c=e.type,s=e.numberOfX,a=Object(n.useState)([]),r=Object(o.a)(a,2),i=r[0],j=r[1],u=Object(n.useState)(""),b=Object(o.a)(u,2),d=b[0],x=b[1],O=Object(n.useState)(!1),h=Object(o.a)(O,2),p=h[0],m=h[1],f=Object(n.useState)(""),v=Object(o.a)(f,2),g=v[0],N=v[1],S=Object(n.useState)("all"),y=Object(o.a)(S,2),C=y[0],k=y[1],L=Object(n.useState)(""),P=Object(o.a)(L,2),E=P[0],w=P[1];return Object(n.useEffect)((function(){var e,n=[],a=[];c.includes("All")?n=Object(A.a)(t):t.forEach((function(e){e.bodyAreas.some((function(e){return c.includes(e)}))&&n.push(e)})),n.forEach((function(e){"all"!==C&&e.bodyAreas.includes(C)?a.push(e):"all"===C&&(a=Object(A.a)(n))})),e=a.filter((function(e){return e.name.includes(E)})),j(e),s(e.length)}),[t,c,s,C,E]),Object(l.jsxs)("section",{id:"exercise-content",children:[Object(l.jsx)("div",{children:Object(l.jsx)(I,{onSelectChange:function(e){k(e)},selectValue:C,type:c})}),Object(l.jsx)("div",{children:0===i.length?Object(l.jsx)(G,{}):i.map((function(e){return Object(l.jsx)(B,{bodyAreas:null===e||void 0===e?void 0:e.bodyAreas,exercise:e,onSelect:function(t){return function(e,t){x(t),N(Math.floor(e)),m(!0)}(t,e)}},null===e||void 0===e?void 0:e.id)}))}),p&&Object(l.jsx)(R,{onClose:function(){m(!1)},openLocation:g,children:Object(l.jsx)(F,{bodyAreas:null===d||void 0===d?void 0:d.bodyAreas,exercise:d})}),Object(l.jsx)(X,{onInputChange:function(e){w(e)},inputValue:E})]})},T=function(){return Object(l.jsx)("section",{id:"home-content",children:Object(l.jsx)("h2",{children:"Home Page"})})},W=function(){return Object(l.jsx)("section",{id:"Help-content",children:Object(l.jsx)("h2",{children:"Help Page"})})},Y=function(){return Object(l.jsx)("section",{id:"favourites-content",children:Object(l.jsx)("h2",{children:"Favourites Page"})})},J=function(){var e=Object(S.e)().pathname.split("/"),t=Object(n.useContext)(b).gender,c=Object(n.useState)([]),s=Object(o.a)(c,2),a=s[0],r=s[1],i=Object(n.useState)(""),j=Object(o.a)(i,2),u=j[0],d=j[1],x=function(){var e=Object(N.a)(g.a.mark((function e(){var t;return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,y();case 2:t=e.sent,r(t);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();Object(n.useEffect)((function(){return x(),function(){console.log("I did Unmount")}}),[]);var O=function(e){d(e)};return Object(l.jsxs)("main",{children:[Object(l.jsxs)("section",{id:"banner",children:[Object(l.jsx)("img",{alt:"gym shark branding",src:"".concat("/GYM-SHARK-SLW","/assets/gs-logo-long.png"),className:"logo-long"}),Object(l.jsx)("h1",{className:"".concat(t),children:"Exercise Library"}),"exercise"===e[1]&&Object(l.jsxs)("h3",{children:[Object(l.jsx)("span",{className:"".concat(t),children:u})," Exercises Shown"]})]}),Object(l.jsxs)("div",{children:["exercise"===e[1]&&Object(l.jsx)(C,{}),Object(l.jsx)(S.a,{exact:!0,path:"/exercise",render:function(e){return Object(l.jsx)(K,Object(f.a)(Object(f.a)({},e),{},{exerciseData:a,type:["All"],numberOfX:O}))}}),Object(l.jsx)(S.a,{exact:!0,path:"/exercise/arms",render:function(e){return Object(l.jsx)(K,Object(f.a)(Object(f.a)({},e),{},{exerciseData:a,type:["Arms","Biceps"],numberOfX:O}))}}),Object(l.jsx)(S.a,{exact:!0,path:"/exercise/shoulders",render:function(e){return Object(l.jsx)(K,Object(f.a)(Object(f.a)({},e),{},{exerciseData:a,type:["Shoulders"],numberOfX:O}))}}),Object(l.jsx)(S.a,{exact:!0,path:"/exercise/back",render:function(e){return Object(l.jsx)(K,Object(f.a)(Object(f.a)({},e),{},{exerciseData:a,type:["Back"],numberOfX:O}))}}),Object(l.jsx)(S.a,{exact:!0,path:"/exercise/chest",render:function(e){return Object(l.jsx)(K,Object(f.a)(Object(f.a)({},e),{},{exerciseData:a,type:["Chest"],numberOfX:O}))}}),Object(l.jsx)(S.a,{exact:!0,path:"/exercise/core",render:function(e){return Object(l.jsx)(K,Object(f.a)(Object(f.a)({},e),{},{exerciseData:a,type:["Core"],numberOfX:O}))}}),Object(l.jsx)(S.a,{exact:!0,path:"/exercise/legs",render:function(e){return Object(l.jsx)(K,Object(f.a)(Object(f.a)({},e),{},{exerciseData:a,type:["Legs","Calves","Glutes"],numberOfX:O}))}}),Object(l.jsx)(S.a,{exact:!0,path:"/favourites",component:Y}),Object(l.jsx)(S.a,{exact:!0,path:"/help",component:W}),Object(l.jsx)(S.a,{exact:!0,path:"/",component:T})]})]})},V=function(){return Object(l.jsx)("footer",{})};c(117);var Q=function(){return Object(l.jsx)("div",{className:"App",children:Object(l.jsxs)(i.a,{children:[Object(l.jsx)(m,{}),Object(l.jsx)(J,{}),Object(l.jsx)(V,{})]})})},U=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,120)).then((function(t){var c=t.getCLS,n=t.getFID,s=t.getFCP,a=t.getLCP,r=t.getTTFB;c(e),n(e),s(e),a(e),r(e)}))};c(118);r.a.render(Object(l.jsx)(s.a.StrictMode,{children:Object(l.jsx)(u,{children:Object(l.jsx)(Q,{})})}),document.getElementById("root")),U()},27:function(e,t,c){},32:function(e,t,c){},48:function(e,t,c){},49:function(e,t,c){},58:function(e,t,c){},67:function(e,t,c){},92:function(e,t){}},[[119,1,2]]]);
//# sourceMappingURL=main.f83953f1.chunk.js.map
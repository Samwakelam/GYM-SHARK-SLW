(this["webpackJsonpgym-shark"]=this["webpackJsonpgym-shark"]||[]).push([[0],{110:function(e,t,c){},111:function(e,t,c){},112:function(e,t,c){},113:function(e,t,c){},114:function(e,t,c){},115:function(e,t,c){"use strict";c.r(t);var n=c(1),s=c.n(n),a=c(47),r=c.n(a),i=c(10),o=(c(25),c(4)),l=c(0),j=Object(n.createContext)(),u=function(e){var t=e.children,c=Object(n.useState)("male"),s=Object(o.a)(c,2),a=s[0],r=s[1];return Object(l.jsx)(j.Provider,{value:{gender:a,genderMale:function(){r("male")},genderFemale:function(){r("female")}},children:t})},b=j,d=(c(54),function(e){var t=e.onEnable,c=Object(n.useState)("off"),s=Object(o.a)(c,2),a=s[0],r=s[1];return Object(n.useEffect)((function(){t(a)}),[a,t]),Object(l.jsx)("label",{className:"switch",onClick:function(e){e.preventDefault(),r("on"===a?"off":"on")},children:Object(l.jsx)("span",{className:"slider ".concat(a)})})}),O=function(){var e=Object(n.useContext)(b),t=e.genderMale,c=e.genderFemale;return Object(l.jsx)("header",{children:Object(l.jsx)(d,{onEnable:function(e){"on"===e?c():"off"===e&&t()}})})},x=c(6),h=c(13),m=c.n(h),v=c(19),f=c(3),p=function(){var e=Object(v.a)(m.a.mark((function e(){var t,c,n;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"https://private-922d75-recruitmenttechnicaltest.apiary-mock.com/customexercises/",t={method:"GET",headers:{}},e.prev=2,e.next=5,fetch("https://private-922d75-recruitmenttechnicaltest.apiary-mock.com/customexercises/",t);case 5:return c=e.sent,e.next=8,c.json();case 8:return n=e.sent,e.abrupt("return",n.exercises);case 12:return e.prev=12,e.t0=e.catch(2),console.log("fetcher Error =",e.t0),e.abrupt("return",e.t0);case 16:case"end":return e.stop()}}),e,null,[[2,12]])})));return function(){return e.apply(this,arguments)}}(),g=(c(56),function(){var e=Object(n.useContext)(b).gender;return Object(l.jsx)("nav",{id:"exercise-navigation",children:Object(l.jsx)("div",{children:Object(l.jsxs)("ul",{children:[Object(l.jsx)("li",{className:"nav-item",children:Object(l.jsxs)(i.b,{to:"/arms",children:[Object(l.jsx)("img",{alt:"arms",src:"".concat("/GYM-SHARK-SLW","/assets/strength.png"),className:"body-area ".concat(e)}),Object(l.jsx)("h3",{className:"nav-item",children:"Arms"})]})}),Object(l.jsx)("li",{className:"nav-item",children:Object(l.jsxs)(i.b,{to:"/shoulders",children:[Object(l.jsx)("img",{alt:"shoulders",src:"".concat("/GYM-SHARK-SLW","/assets/shoulder.png"),className:"body-area ".concat(e)}),Object(l.jsx)("h3",{className:"nav-item",children:"Shoulders"})]})}),Object(l.jsx)("li",{className:"nav-item",children:Object(l.jsxs)(i.b,{to:"/back",children:[Object(l.jsx)("img",{alt:"back",src:"".concat("/GYM-SHARK-SLW","/assets/back.png"),className:"body-area ".concat(e)}),Object(l.jsx)("h3",{className:"nav-item",children:"Back"})]})}),Object(l.jsx)("li",{className:"nav-item",children:Object(l.jsxs)(i.b,{to:"/chest",children:[Object(l.jsx)("img",{alt:"chest",src:"".concat("/GYM-SHARK-SLW","/assets/chest.png"),className:"body-area ".concat(e)}),Object(l.jsx)("h3",{className:"nav-item",children:"Chest"})]})}),Object(l.jsx)("li",{className:"nav-item",children:Object(l.jsxs)(i.b,{to:"/core",children:[Object(l.jsx)("img",{alt:"core",src:"".concat("/GYM-SHARK-SLW","/assets/torso.png"),className:"body-area ".concat(e)}),Object(l.jsx)("h3",{className:"nav-item",children:"Core"})]})}),Object(l.jsx)("li",{className:"nav-item",children:Object(l.jsxs)(i.b,{to:"/legs",children:[Object(l.jsx)("img",{alt:"legs",src:"".concat("/GYM-SHARK-SLW","/assets/legs.png"),className:"body-area ".concat(e)}),Object(l.jsx)("h3",{className:"nav-item",children:"Legs"})]})})]})})})}),y=c(20),N=c.n(y),S=(c(44),c(21)),C=c.n(S),A=c(16),k=c(22),L=(c(110),c(45),c(111),function(){return Object(l.jsxs)("div",{className:"lds-ripple",children:[Object(l.jsx)("div",{}),Object(l.jsx)("div",{})]})}),w=function(e){var t=e.height,c=e.width;return Object(l.jsx)("div",{className:"img-placeholder",style:{height:t,width:c},children:Object(l.jsx)(L,{})})},M=function(e){e.bodyAreas;var t=e.exercise,c=Object(n.useState)(""),s=Object(o.a)(c,2),a=s[0],r=s[1],i=Object(n.useState)(""),j=Object(o.a)(i,2),u=j[0],d=j[1],O=Object(n.useRef)(null),x=Object(n.useContext)(b).gender;return Object(l.jsxs)("article",{className:"card-container",children:[Object(l.jsx)("div",{className:"img-container",children:Object(l.jsx)(C.a,{placeholder:Object(l.jsx)(w,{height:"400px"}),offset:100,debounce:500,children:Object(l.jsx)("img",{alt:"exercise",src:"male"===x?null===t||void 0===t?void 0:t.male.image:null===t||void 0===t?void 0:t.female.image,className:"exercise-img"})})}),Object(l.jsxs)("div",{className:"infomation-container",children:[Object(l.jsx)("p",{children:null===t||void 0===t?void 0:t.bodyAreas}),Object(l.jsxs)("div",{className:"titles",children:[Object(l.jsx)("h2",{children:null===t||void 0===t?void 0:t.name}),Object(l.jsx)("button",{className:"collapse ".concat(a),onClick:function(){r(""===a?"active":""),d("active"===a?"0px":"".concat(O.current.scrollHeight,"px"))},children:Object(l.jsx)(k.a,{icon:"active"===a?A.b:A.a})})]}),Object(l.jsx)("div",{ref:O,className:"transcript",style:{maxHeight:"".concat(u)},children:N()(null===t||void 0===t?void 0:t.transcript)})]})]})},E=function(e){var t=e.exerciseData,c=Object(n.useContext)(b).gender;return Object(l.jsx)("section",{id:"exercise-content",children:t.map((function(e){return Object(l.jsxs)(M,{bodyAreas:null===e||void 0===e?void 0:e.bodyAreas,children:[Object(l.jsx)("img",{alt:"exercise",src:"male"===c?null===e||void 0===e?void 0:e.male.image:null===e||void 0===e?void 0:e.female.image,className:"exercise-img"}),Object(l.jsxs)("div",{children:[Object(l.jsx)("p",{children:null===e||void 0===e?void 0:e.bodyAreas}),Object(l.jsx)("h2",{children:null===e||void 0===e?void 0:e.name}),Object(l.jsx)("div",{className:"transcript",children:N()(null===e||void 0===e?void 0:e.transcript)})]})]},null===e||void 0===e?void 0:e.id)}))})},D=(c(112),function(e){var t=e.bodyAreas,c=e.exercise,s=e.onSelect,a=Object(n.useRef)(null),r=Object(n.useContext)(b).gender;return Object(l.jsxs)("article",{ref:a,className:"preview-card-container",onClick:function(){var e=a.current.offsetTop;s(e)},children:[Object(l.jsx)("div",{className:"img-container",children:Object(l.jsx)(C.a,{placeholder:Object(l.jsx)(w,{height:"200px",width:"200px"}),offset:100,debounce:500,children:Object(l.jsx)("img",{alt:"exercise",src:"male"===r?null===c||void 0===c?void 0:c.male.image:null===c||void 0===c?void 0:c.female.image,className:"preview-exercise-img"})})}),Object(l.jsxs)("div",{className:"information-container",children:[Object(l.jsx)("h2",{children:null===c||void 0===c?void 0:c.name}),Object(l.jsx)("p",{children:t})]})]})}),G=function(e){var t=e.children,c=e.onClose,n=e.openLocation;return Object(l.jsx)("div",{id:"overlay",onClick:function(e){e.stopPropagation(),e.target===e.currentTarget&&c()},children:Object(l.jsx)("div",{id:"location-container",style:{top:"".concat(n,"px")},children:t})})},H=(c(46),function(e){var t=e.onSelectChange,c=e.selectValue,s=e.type,a=Object(n.useContext)(b).gender;return Object(l.jsxs)("select",{name:"bodyAreas",id:"bodyAreas-filter",value:c,onChange:function(e){var c=e.target.value;t(c)},children:[Object(l.jsx)("option",{className:"".concat(a),value:"all",children:"All Muscle Groups"}),(s.includes("Shoulders")||s.includes("Arms")||s.includes("Chest"))&&Object(l.jsx)("option",{value:"Triceps",children:"Triceps"}),(s.includes("Arms")||s.includes("Back"))&&Object(l.jsx)("option",{value:"Biceps",children:"Biceps"}),s.includes("Core")&&Object(l.jsx)("option",{value:"Abs",children:"Abs"}),(s.includes("Legs")||s.includes("Back"))&&Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)("option",{value:"Hamstrings",children:"Hamstrings"}),Object(l.jsx)("option",{value:"Quads",children:"Quads"})]}),s.includes("Legs")&&Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)("option",{value:"Glutes",children:"Glutes"}),Object(l.jsx)("option",{value:"Calves",children:"Calves"})]})]})}),B=function(e){var t=e.onInputChange,c=e.inputValue,s=Object(n.useState)("none"),a=Object(o.a)(s,2),r=a[0],i=a[1];return Object(l.jsxs)("form",{id:"search-bar",onMouseEnter:function(){i("inline-block")},onMouseLeave:function(){i("none")},children:[Object(l.jsx)("input",{type:"text",id:"exercise-search",name:"exercise-search",placeholder:"Search",style:{display:"".concat(r)},onChange:function(e){e.preventDefault();var c=function(e){for(var t=e.toLowerCase().split(" "),c=[],n=0;n<t.length;n++)if(0!==t[n].length){var s=t[n].split("");s[0]=s[0].toUpperCase();var a=s.join("");c.push(a)}else c.push(t[n]);return c.join(" ")}(e.target.value);t(c)},value:c}),Object(l.jsx)("label",{htmlFor:"exercise-search",children:Object(l.jsx)(k.a,{icon:A.c})})]})},F=function(e){var t=e.exerciseData,c=e.type,s=e.numberOfX,a=Object(n.useState)([]),r=Object(o.a)(a,2),i=r[0],j=r[1],u=Object(n.useState)(""),b=Object(o.a)(u,2),d=b[0],O=b[1],x=Object(n.useState)(!1),h=Object(o.a)(x,2),m=h[0],v=h[1],f=Object(n.useState)(""),p=Object(o.a)(f,2),g=p[0],y=p[1],N=Object(n.useState)("all"),S=Object(o.a)(N,2),C=S[0],A=S[1],k=Object(n.useState)(""),w=Object(o.a)(k,2),E=w[0],F=w[1];return Object(n.useEffect)((function(){var e,n=[],a=[];t.forEach((function(e){e.bodyAreas.some((function(e){return c.includes(e)}))&&n.push(e)})),n.forEach((function(e){"all"!==C&&e.bodyAreas.includes(C)?a.push(e):"all"===C&&(a=[].concat(n))})),e=a.filter((function(e){return e.name.includes(E)})),j(e),s(a.length)}),[t,c,s,C,E]),Object(l.jsxs)("section",{id:"exercise-content",children:[Object(l.jsx)("div",{children:Object(l.jsx)(H,{onSelectChange:function(e){A(e)},selectValue:C,type:c})}),Object(l.jsx)("div",{children:0===i.length?Object(l.jsx)(L,{}):i.map((function(e){return Object(l.jsx)(D,{bodyAreas:null===e||void 0===e?void 0:e.bodyAreas,exercise:e,onSelect:function(t){return function(e,t){O(t),y(Math.floor(e)),v(!0)}(t,e)}},null===e||void 0===e?void 0:e.id)}))}),m&&Object(l.jsx)(G,{onClose:function(){v(!1)},openLocation:g,children:Object(l.jsx)(M,{bodyAreas:null===d||void 0===d?void 0:d.bodyAreas,exercise:d})}),Object(l.jsx)(B,{onInputChange:function(e){F(e)},inputValue:E})]})},R=function(){var e=Object(n.useContext)(b).gender,t=Object(n.useState)([]),c=Object(o.a)(t,2),s=c[0],a=c[1],r=Object(n.useState)(""),i=Object(o.a)(r,2),j=i[0],u=i[1],d=function(){var e=Object(v.a)(m.a.mark((function e(){var t;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,p();case 2:t=e.sent,a(t);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();Object(n.useEffect)((function(){return d(),function(){console.log("I did Unmount")}}),[]);var O=function(e){u(e)};return Object(l.jsxs)("main",{children:[Object(l.jsxs)("section",{id:"banner",children:[Object(l.jsx)("img",{alt:"gym shark branding",src:"".concat("/GYM-SHARK-SLW","/assets/gs-logo-long.png"),className:"logo-long"}),Object(l.jsx)("h1",{className:"".concat(e),children:"Exercise Library"}),Object(l.jsxs)("h3",{children:[Object(l.jsx)("span",{className:"".concat(e),children:j})," Exercises Shown."]})]}),Object(l.jsxs)("div",{children:[Object(l.jsx)(g,{}),Object(l.jsx)(f.a,{exact:!0,path:"/",render:function(e){return Object(l.jsx)(E,Object(x.a)(Object(x.a)({},e),{},{exerciseData:s}))}}),Object(l.jsx)(f.a,{exact:!0,path:"/arms",render:function(e){return Object(l.jsx)(F,Object(x.a)(Object(x.a)({},e),{},{exerciseData:s,type:["Arms","Biceps"],numberOfX:O}))}}),Object(l.jsx)(f.a,{exact:!0,path:"/shoulders",render:function(e){return Object(l.jsx)(F,Object(x.a)(Object(x.a)({},e),{},{exerciseData:s,type:["Shoulders"],numberOfX:O}))}}),Object(l.jsx)(f.a,{exact:!0,path:"/back",render:function(e){return Object(l.jsx)(F,Object(x.a)(Object(x.a)({},e),{},{exerciseData:s,type:["Back"],numberOfX:O}))}}),Object(l.jsx)(f.a,{exact:!0,path:"/chest",render:function(e){return Object(l.jsx)(F,Object(x.a)(Object(x.a)({},e),{},{exerciseData:s,type:["Chest"],numberOfX:O}))}}),Object(l.jsx)(f.a,{exact:!0,path:"/core",render:function(e){return Object(l.jsx)(F,Object(x.a)(Object(x.a)({},e),{},{exerciseData:s,type:["Core"],numberOfX:O}))}}),Object(l.jsx)(f.a,{exact:!0,path:"/legs",render:function(e){return Object(l.jsx)(F,Object(x.a)(Object(x.a)({},e),{},{exerciseData:s,type:["Legs","Calves","Glutes"],numberOfX:O}))}})]})]})},K=function(){return Object(l.jsx)("footer",{})};c(113);var T=function(){return Object(l.jsx)("div",{className:"App",children:Object(l.jsxs)(i.a,{children:[Object(l.jsx)(O,{}),Object(l.jsx)(R,{}),Object(l.jsx)(K,{})]})})},W=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,116)).then((function(t){var c=t.getCLS,n=t.getFID,s=t.getFCP,a=t.getLCP,r=t.getTTFB;c(e),n(e),s(e),a(e),r(e)}))};c(114);r.a.render(Object(l.jsx)(s.a.StrictMode,{children:Object(l.jsx)(u,{children:Object(l.jsx)(T,{})})}),document.getElementById("root")),W()},25:function(e,t,c){},44:function(e,t,c){},45:function(e,t,c){},46:function(e,t,c){},54:function(e,t,c){},56:function(e,t,c){},85:function(e,t){}},[[115,1,2]]]);
//# sourceMappingURL=main.a2b254c1.chunk.js.map
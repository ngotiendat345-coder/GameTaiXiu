(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{20:function(e,t,c){},27:function(e,t,c){"use strict";c.r(t);var n=c(1),a=c(0),s=c.n(a),r=c(8),i=c.n(r),h=(c(20),c(4)),o=c(5),l=c(7),u=c(6),b=c(3),j=function(e){Object(l.a)(c,e);var t=Object(u.a)(c);function c(){return Object(h.a)(this,c),t.apply(this,arguments)}return Object(o.a)(c,[{key:"render",value:function(){var e=this.props,t=e.totalMatch,c=e.matchWin,a=e.choose,s=e.alert;return Object(n.jsxs)("div",{children:[Object(n.jsx)("h1",{className:"text-uppercase bg-danger",children:s}),Object(n.jsxs)("h3",{className:"text-uppercase",children:["B\u1ea1n ch\u1ecdn ",Object(n.jsx)("span",{className:"text-danger",children:a?"T\xe0i":"X\u1ec9u"})]}),Object(n.jsxs)("h3",{className:"text-capitalize",children:["S\u1ed1 b\xe0n th\u1eafng  ",Object(n.jsx)("span",{className:"text-success",children:c})]}),Object(n.jsxs)("h3",{className:"text-capitalize",children:["S\u1ed1 b\xe0n ch\u01a1i  ",Object(n.jsx)("span",{className:"text-warning",children:t})]})]})}}]),c}(a.Component),p=Object(b.b)((function(e){return{alert:e.alert,totalMatch:e.totalMatch,matchWin:e.matchWin,choose:e.choose,ketQua:e.ketQua}}),null)(j),m=function(e){Object(l.a)(c,e);var t=Object(u.a)(c);function c(){return Object(h.a)(this,c),t.apply(this,arguments)}return Object(o.a)(c,[{key:"render",value:function(){var e=this.props.xucSacIMG,t=e.reduce((function(e,t){return e+t.number}),0);return Object(n.jsx)(n.Fragment,{children:Object(n.jsxs)("div",{className:"col-6 text-center",children:[e.map((function(e,t){return Object(n.jsx)("img",{className:"ml-5",style:{width:50},src:e.hinhAnh},t)})),Object(n.jsxs)("h3",{className:"bg-warning",children:["T\u1ed5ng \u0111i\u1ec3m :",t," ",Object(n.jsx)("span",{className:"text-danger",children:t>10?"X\u1ec9u":"T\xe0i"})]})]})})}}]),c}(a.Component),O=Object(b.b)((function(e){return{xucSacIMG:e.xucSac}}),null)(m),d=function(e){Object(l.a)(c,e);var t=Object(u.a)(c);function c(){return Object(h.a)(this,c),t.apply(this,arguments)}return Object(o.a)(c,[{key:"render",value:function(){var e=this.props,t=e.LuaChonFunction,c=e.PlayGameFunction;return Object(n.jsx)(n.Fragment,{children:Object(n.jsxs)("div",{className:"gameXucXac pt-5",children:[Object(n.jsx)("h1",{className:"text-uppercase text-center display-5 ",children:"game t\xe0i x\u1ec9u"}),Object(n.jsxs)("section",{className:"d-flex flex-direction-row w-70 mx-auto my-5",children:[Object(n.jsx)("button",{className:"btn display-4 text-white bg-primary p-5 col-3",onClick:function(){t(!0)},children:"T\xe0i"}),Object(n.jsx)(O,{}),Object(n.jsx)("button",{className:"btn display-4 text-white bg-primary p-5 ml-5 col-3",onClick:function(){t(!1)},children:"X\u1ec9u"})]}),Object(n.jsx)(p,{}),Object(n.jsx)("button",{className:"btn btn-success",onClick:function(){c()},children:"PLAY GAME"})]})})}}]),c}(a.Component),x=Object(b.b)(null,(function(e){return{LuaChonFunction:function(t){e({type:"CHOOSE",payload:t})},PlayGameFunction:function(){e({type:"PLAY"})}}}))(d),g=c(9),f=c(2),y={alert:"",checkChoose:!1,choose:!0,totalMatch:0,matchWin:0,xucSac:[{number:1,hinhAnh:"./1.png"},{number:2,hinhAnh:"./2.png"},{number:3,hinhAnh:"./3.png"}]},v=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:y,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"CHOOSE":return t.payload?Object(f.a)(Object(f.a)({},e),{},{choose:!0,checkChoose:!0}):Object(f.a)(Object(f.a)({},e),{},{choose:!1,checkChoose:!0});case"PLAY":if(!e.checkChoose)return Object(f.a)(Object(f.a)({},e),{},{alert:"M\u1eddi ch\u1ecdn t\xe0i ho\u1eb7c x\u1ec9u \u0111\u1ec3 ch\u01a1i"});var c=Math.ceil(6*Math.random()),n=Math.ceil(6*Math.random()),a=Math.ceil(6*Math.random()),s=c+n+a,r=!0,i=e.matchWin,h=e.totalMatch+1,o=e.choose;s>10&&(r=!1),(o&&r||!o&&!r)&&i++;var l=[{number:c,hinhAnh:"./".concat(c,".png")},{number:n,hinhAnh:"./".concat(n,".png")},{number:a,hinhAnh:"./".concat(a,".png")}];return console.log(l),Object(f.a)(Object(f.a)({},e),{},{xucSac:l,ketQua:r,totalMatch:h,matchWin:i,checkChoose:!1,alert:""});default:return e}};var C=function(){var e=Object(g.b)(v);return Object(n.jsx)("div",{className:"App",children:Object(n.jsx)(b.a,{store:e,children:Object(n.jsx)(x,{})})})},N=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,28)).then((function(t){var c=t.getCLS,n=t.getFID,a=t.getFCP,s=t.getLCP,r=t.getTTFB;c(e),n(e),a(e),s(e),r(e)}))};i.a.render(Object(n.jsx)(s.a.StrictMode,{children:Object(n.jsx)(C,{})}),document.getElementById("root")),N()}},[[27,1,2]]]);
//# sourceMappingURL=main.40c6abca.chunk.js.map
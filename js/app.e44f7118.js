(function(e){function t(t){for(var o,u,l=t[0],c=t[1],a=t[2],p=0,d=[];p<l.length;p++)u=l[p],Object.prototype.hasOwnProperty.call(r,u)&&r[u]&&d.push(r[u][0]),r[u]=0;for(o in c)Object.prototype.hasOwnProperty.call(c,o)&&(e[o]=c[o]);s&&s(t);while(d.length)d.shift()();return i.push.apply(i,a||[]),n()}function n(){for(var e,t=0;t<i.length;t++){for(var n=i[t],o=!0,l=1;l<n.length;l++){var c=n[l];0!==r[c]&&(o=!1)}o&&(i.splice(t--,1),e=u(u.s=n[0]))}return e}var o={},r={app:0},i=[];function u(t){if(o[t])return o[t].exports;var n=o[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,u),n.l=!0,n.exports}u.m=e,u.c=o,u.d=function(e,t,n){u.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},u.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},u.t=function(e,t){if(1&t&&(e=u(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(u.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)u.d(n,o,function(t){return e[t]}.bind(null,o));return n},u.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return u.d(t,"a",t),t},u.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},u.p="/Vue/";var l=window["webpackJsonp"]=window["webpackJsonp"]||[],c=l.push.bind(l);l.push=t,l=l.slice();for(var a=0;a<l.length;a++)t(l[a]);var s=c;i.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"0fab":function(e,t,n){"use strict";n("2fad")},"2fad":function(e,t,n){},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var o=n("2b0e"),r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("h1",[e._v(" Todo App ")]),n("TodoApp")],1)},i=[],u=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("div",{staticClass:"item"},[n("input",{directives:[{name:"model",rawName:"v-model",value:e.newItem,expression:"newItem"}],attrs:{type:"text",placeholder:"todo"},domProps:{value:e.newItem},on:{input:function(t){t.target.composing||(e.newItem=t.target.value)}}}),n("button",{on:{click:e.addItem}},[e._v("Dodaj")])]),e._l(e.items,(function(t){return n("TodoItem",{key:t.id,attrs:{item:t},on:{removeClicked:e.removeItem}})}))],2)},l=[],c=(n("c740"),function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"item",class:{completed:e.item.completed}},[n("h2",[e._v(e._s(e.item.title))]),e.item.completed?e._e():n("button",{on:{click:e.removeItem}},[e._v("Odhacz")])])}),a=[],s={props:["item"],methods:{removeItem:function(){this.$emit("removeClicked",this.item.id)}}},p=s,d=n("2877"),m=Object(d["a"])(p,c,a,!1,null,null,null),f=m.exports,v={components:{TodoItem:f},data:function(){return{newItem:"",items:[{title:"Zrobić zakupy",completed:!1,id:1},{title:"Nagrać kurs",completed:!0,id:2}]}},methods:{addItem:function(){this.items.push({title:this.newItem,completed:!1,id:Math.random()}),this.newItem=""},removeItem:function(e){var t=this.items.findIndex((function(t){return t.id===e}));this.items[t].completed=!0}}},h=v,b=(n("0fab"),Object(d["a"])(h,u,l,!1,null,null,null)),y=b.exports,w={components:{TodoApp:y}},_=w,g=Object(d["a"])(_,r,i,!1,null,null,null),I=g.exports;o["a"].config.productionTip=!1,new o["a"]({render:function(e){return e(I)}}).$mount("#app")}});
//# sourceMappingURL=app.e44f7118.js.map
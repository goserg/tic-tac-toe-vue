(function(t){function r(r){for(var e,o,c=r[0],s=r[1],u=r[2],d=0,f=[];d<c.length;d++)o=c[d],Object.prototype.hasOwnProperty.call(i,o)&&i[o]&&f.push(i[o][0]),i[o]=0;for(e in s)Object.prototype.hasOwnProperty.call(s,e)&&(t[e]=s[e]);l&&l(r);while(f.length)f.shift()();return a.push.apply(a,u||[]),n()}function n(){for(var t,r=0;r<a.length;r++){for(var n=a[r],e=!0,c=1;c<n.length;c++){var s=n[c];0!==i[s]&&(e=!1)}e&&(a.splice(r--,1),t=o(o.s=n[0]))}return t}var e={},i={app:0},a=[];function o(r){if(e[r])return e[r].exports;var n=e[r]={i:r,l:!1,exports:{}};return t[r].call(n.exports,n,n.exports,o),n.l=!0,n.exports}o.m=t,o.c=e,o.d=function(t,r,n){o.o(t,r)||Object.defineProperty(t,r,{enumerable:!0,get:n})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,r){if(1&r&&(t=o(t)),8&r)return t;if(4&r&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&r&&"string"!=typeof t)for(var e in t)o.d(n,e,function(r){return t[r]}.bind(null,e));return n},o.n=function(t){var r=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(r,"a",r),r},o.o=function(t,r){return Object.prototype.hasOwnProperty.call(t,r)},o.p="/tic-tac-toe-vue/";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],s=c.push.bind(c);c.push=r,c=c.slice();for(var u=0;u<c.length;u++)r(c[u]);var l=s;a.push([0,"chunk-vendors"]),n()})({0:function(t,r,n){t.exports=n("cd49")},"5c0b":function(t,r,n){"use strict";var e=n("9c0c"),i=n.n(e);i.a},"93f7":function(t,r,n){"use strict";var e=n("b481"),i=n.n(e);i.a},"9c0c":function(t,r,n){},b481:function(t,r,n){},cd49:function(t,r,n){"use strict";n.r(r);n("e260"),n("e6cf"),n("cca6"),n("a79d");var e=n("2b0e"),i=function(){var t=this,r=t.$createElement,n=t._self._c||r;return n("div",{attrs:{id:"app"}},[n("GameBoard")],1)},a=[],o=n("d4ec"),c=n("262e"),s=n("2caf"),u=n("9ab4"),l=n("60a3"),d=function(){var t=this,r=t.$createElement,n=t._self._c||r;return n("div",[null!==t.winner?n("div",{class:"screen "+t.winner},["tie"!==t.winner?n("span",[t._v("The winner is")]):n("span",[t._v("It's a Tie")]),n("div",{staticClass:"button-container"},[n("button",{staticClass:"new-game",on:{click:t.restart}},[t._v(" new game ")])])]):t._e(),null===t.winner?n("div",{staticClass:"main-screen"},[n("div",{staticClass:"head"},[n("div",{class:"x"===t.current?"x":"x inactive"}),n("h1",[t._v("Tic Tac Toe")]),n("div",{class:"o"===t.current?"o":"o inactive"})]),n("div",{staticClass:"board"},[t._l(t.board[0],(function(r,e){return n("div",{key:r,class:t.getClass(e,0),on:{click:function(r){return t.click(e,0)}}})})),t._l(t.board[1],(function(r,e){return n("div",{key:r+"2",class:t.getClass(e,1),on:{click:function(r){return t.click(e,1)}}})})),t._l(t.board[2],(function(r,e){return n("div",{key:r+"3",class:t.getClass(e,2),on:{click:function(r){return t.click(e,2)}}})}))],2)]):t._e()])},f=[],b=n("b85c"),h={name:"GameBoard",data:function(){return{winner:null,current:"x",board:[[0,0,0],[0,0,0],[0,0,0]]}},methods:{getClass:function(t,r){var n="field";return 0===this.board[r][t]?n=n+" hover"+this.current.toUpperCase():"x"===this.board[r][t]?n+=" x":"o"===this.board[r][t]&&(n+=" o"),n},click:function(t,r){0===this.board[r][t]&&(this.board[r][t]=this.current,this.current="x"===this.current?"o":"x"),this.checkWinner()},checkWinner:function(){for(var t=0;t<3;t++){if(0!==this.board[t][0]&&this.board[t][0]===this.board[t][1]&&this.board[t][0]===this.board[t][2])return void(this.winner=this.board[t][0]);if(0!==this.board[0][t]&&this.board[1][t]===this.board[0][t]&&this.board[0][t]===this.board[2][t])return void(this.winner=this.board[0][t]);if(0!==this.board[0][0]&&this.board[0][0]===this.board[1][1]&&this.board[1][1]===this.board[2][2])return void(this.winner=this.board[0][0]);if(0!==this.board[0][2]&&this.board[0][2]===this.board[1][1]&&this.board[1][1]===this.board[2][0])return void(this.winner=this.board[0][2]);var r,n=!0,e=Object(b["a"])(this.board);try{for(e.s();!(r=e.n()).done;){var i,a=r.value,o=Object(b["a"])(a);try{for(o.s();!(i=o.n()).done;){var c=i.value;0===c&&(n=!1)}}catch(s){o.e(s)}finally{o.f()}}}catch(s){e.e(s)}finally{e.f()}n&&(this.winner="tie")}},restart:function(){this.winner=null,this.current="x",this.board=[[0,0,0],[0,0,0],[0,0,0]]}}},v=h,p=(n("93f7"),n("2877")),w=Object(p["a"])(v,d,f,!1,null,"22928d44",null),y=w.exports,O=function(t){Object(c["a"])(n,t);var r=Object(s["a"])(n);function n(){return Object(o["a"])(this,n),r.apply(this,arguments)}return n}(l["b"]);O=Object(u["a"])([Object(l["a"])({components:{GameBoard:y}})],O);var _=O,g=_,j=(n("5c0b"),Object(p["a"])(g,i,a,!1,null,null,null)),m=j.exports;e["a"].config.productionTip=!1,new e["a"]({render:function(t){return t(m)}}).$mount("#app")}});
//# sourceMappingURL=app.b60e2d95.js.map
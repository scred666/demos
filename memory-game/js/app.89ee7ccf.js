(function(e){function t(t){for(var r,n,s=t[0],a=t[1],o=t[2],d=0,f=[];d<s.length;d++)n=s[d],Object.prototype.hasOwnProperty.call(c,n)&&c[n]&&f.push(c[n][0]),c[n]=0;for(r in a)Object.prototype.hasOwnProperty.call(a,r)&&(e[r]=a[r]);l&&l(t);while(f.length)f.shift()();return u.push.apply(u,o||[]),i()}function i(){for(var e,t=0;t<u.length;t++){for(var i=u[t],r=!0,n=1;n<i.length;n++){var s=i[n];0!==c[s]&&(r=!1)}r&&(u.splice(t--,1),e=a(a.s=i[0]))}return e}var r={},n={app:0},c={app:0},u=[];function s(e){return a.p+"js/"+({}[e]||e)+"."+{"chunk-ad50e6c4":"c32a9c3b"}[e]+".js"}function a(t){if(r[t])return r[t].exports;var i=r[t]={i:t,l:!1,exports:{}};return e[t].call(i.exports,i,i.exports,a),i.l=!0,i.exports}a.e=function(e){var t=[],i={"chunk-ad50e6c4":1};n[e]?t.push(n[e]):0!==n[e]&&i[e]&&t.push(n[e]=new Promise((function(t,i){for(var r="css/"+({}[e]||e)+"."+{"chunk-ad50e6c4":"6e18377f"}[e]+".css",c=a.p+r,u=document.getElementsByTagName("link"),s=0;s<u.length;s++){var o=u[s],d=o.getAttribute("data-href")||o.getAttribute("href");if("stylesheet"===o.rel&&(d===r||d===c))return t()}var f=document.getElementsByTagName("style");for(s=0;s<f.length;s++){o=f[s],d=o.getAttribute("data-href");if(d===r||d===c)return t()}var l=document.createElement("link");l.rel="stylesheet",l.type="text/css",l.onload=t,l.onerror=function(t){var r=t&&t.target&&t.target.src||c,u=new Error("Loading CSS chunk "+e+" failed.\n("+r+")");u.code="CSS_CHUNK_LOAD_FAILED",u.request=r,delete n[e],l.parentNode.removeChild(l),i(u)},l.href=c;var p=document.getElementsByTagName("head")[0];p.appendChild(l)})).then((function(){n[e]=0})));var r=c[e];if(0!==r)if(r)t.push(r[2]);else{var u=new Promise((function(t,i){r=c[e]=[t,i]}));t.push(r[2]=u);var o,d=document.createElement("script");d.charset="utf-8",d.timeout=120,a.nc&&d.setAttribute("nonce",a.nc),d.src=s(e);var f=new Error;o=function(t){d.onerror=d.onload=null,clearTimeout(l);var i=c[e];if(0!==i){if(i){var r=t&&("load"===t.type?"missing":t.type),n=t&&t.target&&t.target.src;f.message="Loading chunk "+e+" failed.\n("+r+": "+n+")",f.name="ChunkLoadError",f.type=r,f.request=n,i[1](f)}c[e]=void 0}};var l=setTimeout((function(){o({type:"timeout",target:d})}),12e4);d.onerror=d.onload=o,document.head.appendChild(d)}return Promise.all(t)},a.m=e,a.c=r,a.d=function(e,t,i){a.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:i})},a.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.t=function(e,t){if(1&t&&(e=a(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var i=Object.create(null);if(a.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)a.d(i,r,function(t){return e[t]}.bind(null,r));return i},a.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return a.d(t,"a",t),t},a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},a.p="/demos/memory-game/",a.oe=function(e){throw console.error(e),e};var o=window["webpackJsonp"]=window["webpackJsonp"]||[],d=o.push.bind(o);o.push=t,o=o.slice();for(var f=0;f<o.length;f++)t(o[f]);var l=d;u.push([0,"chunk-vendors"]),i()})({0:function(e,t,i){e.exports=i("56d7")},"28a9":function(e,t,i){"use strict";i("fb0f")},"3fb6":function(e,t,i){},"56d7":function(e,t,i){"use strict";i.r(t);i("e260"),i("e6cf"),i("cca6"),i("a79d");var r=i("2b0e"),n=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{attrs:{id:"app"}},[i("layout")],1)},c=[],u=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("section",{staticClass:"layout"},[i("difficult-switcher",{attrs:{difficult:e.difficult},on:{updateDifficult:e.updateDifficult}}),i("Cards",{attrs:{emojis:e.emojisByDifficult,difficult:e.difficult},on:{reshuffle:e.reshuffle}})],1)},s=[],a=(i("fb6a"),i("d3b7"),i("25f0"),i("2ef0")),o={easy:10,medium:20,hard:30,expert:40,survival:140},d=["🎄","😰","🐝","🐸","😈","🎃","🌝","😥","😺","😅","😙","😶","🐷","🌚","🐛","😨","🐳","🐶","👃","🐤","🐔","😸","🐢","😴","🙉","😯","😏","😁","👅","😤","😢","😻","😒","😃","🌳","😼","🐍","👷","🌴","😐","🐚","👿","😊","👼","🐱","👮","😖","🙊","🐹","🐌","😦","👲","🐘","😄","😮","👽","😀","😽","👴","💋","💎","🐒","👸","🐜","😲","🐵","😬","🌰","🐺","👻","😋","👵","😎","🐞","🎅","👦","🐧","🐋","❤","😪","🐬","🐦","😩","👂","👹","🐴","😭","🐰","😆","😿","😜","💀","😔","😡","🐼","💂","😠","🐭","😕","👧","🐗","😂","😉","👀","😹","🐙","👱","😣","👳","🐑","😑","🐟","👺","😓","👩","🐣","😷","😧","🐠","🐮","🐯","🐥","😵","🐽","😫","🙀","🐨","😾","⭐","😞","😟","👨","🌞","🌲","🐻","😇","😝","👶","😱","🙈"],f=function(){return Math.random().toString(36).substr(2,9)},l=function(e){return Object(a["shuffle"])(e)},p=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",[e.isGamePassed?i("win-message",{on:{retry:e.startNewGame}}):e._e(),i("div",{staticClass:"cards"},e._l(e.emojisToGame,(function(t){return i("card",e._b({key:t.privateId,attrs:{"current-clicked-cards":e.currentClickedCards,"solved-cards":e.solvedCards,card:t},on:{choseCard:e.choseCard}},"card",e.$attrs,!1))})),1)],1)},h=[],m=(i("a623"),i("5db7"),i("caad"),i("73d9"),i("2532"),i("3835")),v=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{class:e.wrapperClasses,on:{click:e.handler}},[i("div",{staticClass:"card__content"},[i("div",{staticClass:"card__content-front"}),i("div",{class:e.backSideClasses},[i("transition",{attrs:{name:"fading"}},[e.isSolved||e.isClicked?i("span",[e._v(" "+e._s(e.card.emoji)+" ")]):e._e()])],1)])])},b=[],C=(i("45fc"),{props:{difficult:{type:String,default:"easy",required:!0},card:{type:Object,default:function(){return{}},required:!0},currentClickedCards:{type:Array,default:function(){return[]},required:!0},solvedCards:{type:Array,default:function(){return[]},required:!0}},name:"Card",data:function(){return{}},methods:{handler:function(){this.isClicked||this.isSolved||this.isDisabled||this.$emit("choseCard",this.card)}},computed:{wrapperClasses:function(){return{card:!0,"card--clicked":this.isClicked,"card--solved":this.isSolved}},backSideClasses:function(){return["card__content-back","card__content-back--".concat(this.difficult)]},isClicked:function(){var e=this;return this.currentClickedCards.some((function(t){return t.privateId===e.card.privateId}))},isSolved:function(){return this.solvedCards.includes(this.card.publicId)},isDisabled:function(){return 2===this.currentClickedCards.length}}}),y=C,g=(i("28a9"),i("2877")),_=Object(g["a"])(y,v,b,!1,null,"eccb6976",null),j=_.exports,k={props:{emojis:{type:Array,default:function(){return[]},required:!0}},name:"Cards",data:function(){return{currentClickedCards:[],solvedCards:[],isWinWindowShow:!1}},components:{WinMessage:function(){return i.e("chunk-ad50e6c4").then(i.bind(null,"071a"))},Card:j},watch:{currentClickedCards:function(){var e=this;if(2===this.currentClickedCards.length){var t=Object(m["a"])(this.currentClickedCards,2),i=t[0],r=t[1];i.publicId===r.publicId?(this.solvedCards.push(i.publicId),this.currentClickedCards=[]):setTimeout((function(){e.currentClickedCards=[]}),500)}},emojis:function(){this.resetResults()}},methods:{choseCard:function(e){var t=e.publicId,i=e.privateId;this.currentClickedCards.push({publicId:t,privateId:i})},startNewGame:function(){this.resetResults(),this.$emit("reshuffle")},resetResults:function(){this.solvedCards=[],this.currentClickedCards=[]}},computed:{emojisToGame:function(){var e=this.emojis.flatMap((function(e){var t=f();return[{publicId:t,emoji:e,privateId:f()},{publicId:t,emoji:e,privateId:f()}]}));return l(e)},isGamePassed:function(){var e=this;return this.emojisToGame.every((function(t){return e.solvedCards.includes(t.publicId)}))}}},w=k,D=(i("c7a9"),Object(g["a"])(w,p,h,!1,null,"0eb0a4b8",null)),O=D.exports,S=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"difficult-switcher"},[i("div",{staticClass:"difficult-switcher__items"},e._l(Object.entries(e.difficulties),(function(t){return i("difficult-radio",{key:t[0],attrs:{"current-difficult":e.difficult,item:t},on:{updateDifficult:e.updateDifficult}})})),1)])},I=[],x=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"difficult-radio"},[i("input",{directives:[{name:"model",rawName:"v-model",value:e.computedDifficult,expression:"computedDifficult"}],staticClass:"input",attrs:{type:"radio",id:"difficult--"+e.difficult,name:"difficult"},domProps:{value:e.difficult,checked:e._q(e.computedDifficult,e.difficult)},on:{change:function(t){e.computedDifficult=e.difficult}}}),i("label",{class:e.classes,attrs:{for:"difficult--"+e.difficult}},[e._v(" "+e._s(e.difficult)+" ")])])},E=[],P={props:{item:{type:Array,default:function(){return[]},required:!0},currentDifficult:{type:String,default:"easy",required:!0}},name:"DifficultRadio",computed:{difficult:function(){var e=Object(m["a"])(this.item,1),t=e[0];return t},classes:function(){return["label","label--".concat(this.difficult)]},computedDifficult:{get:function(){return this.currentDifficult},set:function(e){this.$emit("updateDifficult",e)}}}},T=P,$=(i("7486"),Object(g["a"])(T,x,E,!1,null,"fe3d38e6",null)),q=$.exports,A={props:{difficult:{type:String,default:"easy",required:!0}},name:"DifficultSwitcher",methods:{updateDifficult:function(e){this.$emit("updateDifficult",e)}},components:{DifficultRadio:q},computed:{difficulties:function(){return o}}},N=A,G=(i("d0a3"),Object(g["a"])(N,S,I,!1,null,"6cd0c9de",null)),L=G.exports,M={name:"Layout",data:function(){return{difficult:"easy",emojis:[]}},components:{DifficultSwitcher:L,Cards:O},methods:{updateDifficult:function(e){this.difficult=e},reshuffle:function(){this.emojis=l(this.emojis)}},mounted:function(){this.emojis=l(d)},computed:{difficulties:function(){return o},emojisByDifficult:function(){return l(this.emojis).slice(0,o[this.difficult])}}},B=M,R=(i("d86b"),Object(g["a"])(B,u,s,!1,null,"4bc6e13d",null)),W=R.exports,J={name:"App",components:{Layout:W}},F=J,H=(i("cf25"),Object(g["a"])(F,n,c,!1,null,null,null)),K=H.exports;r["a"].config.productionTip=!1,new r["a"]({render:function(e){return e(K)}}).$mount("#app")},"699e":function(e,t,i){},7486:function(e,t,i){"use strict";i("fe93")},b661:function(e,t,i){},c7a9:function(e,t,i){"use strict";i("699e")},cf25:function(e,t,i){"use strict";i("fea6")},d0a3:function(e,t,i){"use strict";i("b661")},d86b:function(e,t,i){"use strict";i("3fb6")},fb0f:function(e,t,i){},fe93:function(e,t,i){},fea6:function(e,t,i){}});
//# sourceMappingURL=app.89ee7ccf.js.map
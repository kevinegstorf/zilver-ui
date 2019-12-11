var __extends=this&&this.__extends||function(){var e=function(r,t){e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,r){e.__proto__=r}||function(e,r){for(var t in r)if(r.hasOwnProperty(t))e[t]=r[t]};return e(r,t)};return function(r,t){e(r,t);function n(){this.constructor=r}r.prototype=t===null?Object.create(t):(n.prototype=t.prototype,new n)}}();var __awaiter=this&&this.__awaiter||function(e,r,t,n){function a(e){return e instanceof t?e:new t((function(r){r(e)}))}return new(t||(t=Promise))((function(t,i){function s(e){try{u(n.next(e))}catch(r){i(r)}}function o(e){try{u(n["throw"](e))}catch(r){i(r)}}function u(e){e.done?t(e.value):a(e.value).then(s,o)}u((n=n.apply(e,r||[])).next())}))};var __generator=this&&this.__generator||function(e,r){var t={label:0,sent:function(){if(i[0]&1)throw i[1];return i[1]},trys:[],ops:[]},n,a,i,s;return s={next:o(0),throw:o(1),return:o(2)},typeof Symbol==="function"&&(s[Symbol.iterator]=function(){return this}),s;function o(e){return function(r){return u([e,r])}}function u(s){if(n)throw new TypeError("Generator is already executing.");while(t)try{if(n=1,a&&(i=s[0]&2?a["return"]:s[0]?a["throw"]||((i=a["return"])&&i.call(a),0):a.next)&&!(i=i.call(a,s[1])).done)return i;if(a=0,i)s=[s[0]&2,i.value];switch(s[0]){case 0:case 1:i=s;break;case 4:t.label++;return{value:s[1],done:false};case 5:t.label++;a=s[1];s=[0];continue;case 7:s=t.ops.pop();t.trys.pop();continue;default:if(!(i=t.trys,i=i.length>0&&i[i.length-1])&&(s[0]===6||s[0]===2)){t=0;continue}if(s[0]===3&&(!i||s[1]>i[0]&&s[1]<i[3])){t.label=s[1];break}if(s[0]===6&&t.label<i[1]){t.label=i[1];i=s;break}if(i&&t.label<i[2]){t.label=i[2];t.ops.push(s);break}if(i[2])t.ops.pop();t.trys.pop();continue}s=r.call(e,t)}catch(o){s=[6,o];a=0}finally{n=i=0}if(s[0]&5)throw s[1];return{value:s[0]?s[1]:void 0,done:true}}};var __spreadArrays=this&&this.__spreadArrays||function(){for(var e=0,r=0,t=arguments.length;r<t;r++)e+=arguments[r].length;for(var n=Array(e),a=0,r=0;r<t;r++)for(var i=arguments[r],s=0,o=i.length;s<o;s++,a++)n[a]=i[s];return n};System.register([],(function(e,r){"use strict";return{execute:function(){var t=this;var n="zilver-ui";var a=0;var i=false;var s;var o;var u=false;var l=window;var f=document;var c={$flags$:0,$resourcesUrl$:"",jmp:function(e){return e()},raf:function(e){return requestAnimationFrame(e)},ael:function(e,r,t,n){return e.addEventListener(r,t,n)},rel:function(e,r,t,n){return e.removeEventListener(r,t,n)}};var $=function(){return!!f.documentElement.attachShadow}();var v=function(){var e=false;try{f.addEventListener("e",null,Object.defineProperty({},"passive",{get:function(){e=true}}))}catch(r){}return e}();var h=function(){try{new CSSStyleSheet;return true}catch(e){}return false}();var d=new WeakMap;var m=function(e){return d.get(e)};var p=e("r",(function(e,r){return d.set(r.$lazyInstance$=e,r)}));var g=function(e){var r={$flags$:0,$hostElement$:e,$instanceValues$:new Map};{r.$onReadyPromise$=new Promise((function(e){return r.$onReadyResolve$=e}));e["s-p"]=[];e["s-rc"]=[]}return d.set(e,r)};var y=function(e,r){return r in e};var b=function(e){return console.error(e)};var w=new Map;var _=function(e,t,n){var a=e.$tagName$.replace(/-/g,"_");var i=e.$lazyBundleIds$;var s=w.get(i);if(s){return s[a]}return r.import("./"+i+".entry.js"+"").then((function(e){{w.set(i,e)}return e[a]}),b)};var S=new Map;var R=[];var L=[];var j=[];var E=function(e,r){return function(t){e.push(t);if(!i){i=true;if(r&&c.$flags$&4){A(x)}else{c.raf(x)}}}};var C=function(e){for(var r=0;r<e.length;r++){try{e[r](performance.now())}catch(t){b(t)}}e.length=0};var N=function(e,r){var t=0;var n=0;while(t<e.length&&(n=performance.now())<r){try{e[t++](n)}catch(a){b(a)}}if(t===e.length){e.length=0}else if(t!==0){e.splice(0,t)}};var x=function(){a++;C(R);var e=(c.$flags$&6)===2?performance.now()+10*Math.ceil(a*(1/22)):Infinity;N(L,e);N(j,e);if(L.length>0){j.push.apply(j,L);L.length=0}if(i=R.length+L.length+j.length>0){c.raf(x)}else{a=0}};var A=function(e){return Promise.resolve().then(e)};var O=E(L,true);var P={};var U=function(e){return e!=null};var k=function(e){e=typeof e;return e==="object"||e==="function"};var M=function(e){return"__sc_import_"+e.replace(/\s|-/g,"_")};var q=e("a",(function(){if(!(l.CSS&&l.CSS.supports&&l.CSS.supports("color","var(--c)"))){return r.import("./p-a614138e.system.js").then((function(){c.$cssShim$=l.__stencil_cssshim;if(c.$cssShim$){return c.$cssShim$.initShim()}}))}return Promise.resolve()}));var B=e("p",(function(){return __awaiter(t,void 0,void 0,(function(){var e,t,a,i,s;return __generator(this,(function(o){switch(o.label){case 0:{c.$cssShim$=l.__stencil_cssshim}e=r.meta.url;t=new RegExp("/"+n+"(\\.esm)?\\.js($|\\?|#)");a=Array.from(f.querySelectorAll("script")).find((function(e){return t.test(e.src)||e.getAttribute("data-stencil-namespace")===n}));i=a["data-opts"];if(!(e!==""))return[3,1];return[2,Object.assign(Object.assign({},i),{resourcesUrl:new URL(".",e).href})];case 1:s=new URL(".",new URL(a.getAttribute("data-resources-url")||a.src,l.location.href));I(s.href);if(!!window.customElements)return[3,3];return[4,r.import("./p-5b416380.system.js")];case 2:o.sent();o.label=3;case 3:return[2,Object.assign(Object.assign({},i),{resourcesUrl:s.href})]}}))}))}));var I=function(e){var r=M(n);try{l[r]=new Function("w","return import(w);//"+Math.random())}catch(a){var t=new Map;l[r]=function(n){var a=new URL(n,e).href;var i=t.get(a);if(!i){var s=f.createElement("script");s.type="module";s.src=URL.createObjectURL(new Blob(["import * as m from '"+a+"'; window."+r+".m = m;"],{type:"application/javascript"}));i=new Promise((function(e){s.onload=function(){e(l[r].m);s.remove()}}));t.set(a,i);f.head.appendChild(s)}return i}}};var T=function(e,r){if(e!=null&&!k(e)){if(r&2){return parseFloat(e)}if(r&1){return String(e)}return e}return e};var z="hydrated";var H=function(e,r){if(r===void 0){r=""}{return function(){return}}};var V=function(e,r){{return function(){return}}};var F=new WeakMap;var W=function(e,r,t){var n=S.get(e);if(h&&t){n=n||new CSSStyleSheet;n.replace(r)}else{n=r}S.set(e,n)};var G=function(e,r,t,n){var a=D(r.$tagName$);var i=S.get(a);e=e.nodeType===11?e:f;if(i){if(typeof i==="string"){e=e.head||e;var s=F.get(e);var o=void 0;if(!s){F.set(e,s=new Set)}if(!s.has(a)){{if(c.$cssShim$){o=c.$cssShim$.createHostStyle(n,a,i,!!(r.$flags$&10));var u=o["s-sc"];if(u){a=u;s=null}}else{o=f.createElement("style");o.innerHTML=i}e.insertBefore(o,e.querySelector("link"))}if(s){s.add(a)}}}else if(!e.adoptedStyleSheets.includes(i)){e.adoptedStyleSheets=__spreadArrays(e.adoptedStyleSheets,[i])}}return a};var Q=function(e,r,t){var n=H("attachStyles",r.$tagName$);var a=G($&&e.shadowRoot?e.shadowRoot:e.getRootNode(),r,t,e);if(r.$flags$&10){e["s-sc"]=a;e.classList.add(a+"-h")}n()};var D=function(e,r){return"sc-"+e};var J=e("h",(function(e,r){var t=[];for(var n=2;n<arguments.length;n++){t[n-2]=arguments[n]}var a=null;var i=false;var s=false;var o=[];var u=function(r){for(var t=0;t<r.length;t++){a=r[t];if(Array.isArray(a)){u(a)}else if(a!=null&&typeof a!=="boolean"){if(i=typeof e!=="function"&&!k(a)){a=String(a)}if(i&&s){o[o.length-1].$text$+=a}else{o.push(i?K(null,a):a)}s=i}}};u(t);var l=K(e,null);l.$attrs$=r;if(o.length>0){l.$children$=o}return l}));var K=function(e,r){var t={$flags$:0,$tag$:e,$text$:r,$elm$:null,$children$:null};{t.$attrs$=null}return t};var X={};var Y=function(e){return e&&e.$tag$===X};var Z=function(e,r,t,n,a,i){if(t===n){return}var s=y(e,r);var o=r.toLowerCase();{var u=k(n);if((s||u&&n!==null)&&!a){try{if(!e.tagName.includes("-")){var l=n==null?"":n;if(r==="list"){s=false}else if(t==null||e[r]!=l){e[r]=l}}else{e[r]=n}}catch(f){}}if(n==null||n===false){{e.removeAttribute(r)}}else if((!s||i&4||a)&&!u){n=n===true?"":n;{e.setAttribute(r,n)}}}};var ee=function(e,r,t,n){var a=r.$elm$.nodeType===11&&r.$elm$.host?r.$elm$.host:r.$elm$;var i=e&&e.$attrs$||P;var s=r.$attrs$||P;{for(n in i){if(!(n in s)){Z(a,n,i[n],undefined,t,r.$flags$)}}}for(n in s){Z(a,n,i[n],s[n],t,r.$flags$)}};var re=function(e,r,t,n){var a=r.$children$[t];var i=0;var o;var l;{o=a.$elm$=f.createElement(a.$tag$);{ee(null,a,u)}if(U(s)&&o["s-si"]!==s){o.classList.add(o["s-si"]=s)}if(a.$children$){for(i=0;i<a.$children$.length;++i){l=re(e,a,i);if(l){o.appendChild(l)}}}}return o};var te=function(e,r,t,n,a,i){var s=e;var u;if(s.shadowRoot&&s.tagName===o){s=s.shadowRoot}for(;a<=i;++a){if(n[a]){u=re(null,t,a);if(u){n[a].$elm$=u;s.insertBefore(u,r)}}}};var ne=function(e,r,t,n,a){for(;r<=t;++r){if(n=e[r]){a=n.$elm$;a.remove()}}};var ae=function(e,r,t,n){var a=0;var i=0;var s=r.length-1;var o=r[0];var u=r[s];var l=n.length-1;var f=n[0];var c=n[l];var $;while(a<=s&&i<=l){if(o==null){o=r[++a]}else if(u==null){u=r[--s]}else if(f==null){f=n[++i]}else if(c==null){c=n[--l]}else if(ie(o,f)){se(o,f);o=r[++a];f=n[++i]}else if(ie(u,c)){se(u,c);u=r[--s];c=n[--l]}else if(ie(o,c)){se(o,c);e.insertBefore(o.$elm$,u.$elm$.nextSibling);o=r[++a];c=n[--l]}else if(ie(u,f)){se(u,f);e.insertBefore(u.$elm$,o.$elm$);u=r[--s];f=n[++i]}else{{$=re(r&&r[i],t,i);f=n[++i]}if($){{o.$elm$.parentNode.insertBefore($,o.$elm$)}}}}if(a>s){te(e,n[l+1]==null?null:n[l+1].$elm$,t,n,i,l)}else if(i>l){ne(r,a,s)}};var ie=function(e,r){if(e.$tag$===r.$tag$){return true}return false};var se=function(e,r){var t=r.$elm$=e.$elm$;var n=e.$children$;var a=r.$children$;{{{ee(e,r,u)}}if(n!==null&&a!==null){ae(t,n,r,a)}else if(a!==null){te(t,null,r,a,0,a.length-1)}else if(n!==null){ne(n,0,n.length-1)}}};var oe=function(e,r,t,n){o=e.tagName;var a=r.$vnode$||K(null,null);var i=Y(n)?n:J(null,null,n);i.$tag$=null;i.$flags$|=4;r.$vnode$=i;i.$elm$=a.$elm$=e.shadowRoot||e;{s=e["s-sc"]}se(a,i)};var ue=function(e,r){if(r&&!e.$onRenderResolve$){r["s-p"].push(new Promise((function(r){return e.$onRenderResolve$=r})))}};var le=function(e,r,t,n){{r.$flags$|=16}if(r.$flags$&4){r.$flags$|=512;return}var a=H("scheduleUpdate",t.$tagName$);var i=r.$ancestorComponent$;var s=r.$lazyInstance$;var o=function(){return fe(e,r,t,s,n)};ue(r,i);var u;if(n){{r.$flags$|=256;if(r.$queuedListeners$){r.$queuedListeners$.forEach((function(e){var r=e[0],t=e[1];return he(s,r,t)}));r.$queuedListeners$=null}}}a();return de(u,(function(){return O(o)}))};var fe=function(e,r,t,n,a){var i=H("update",t.$tagName$);var s=e["s-rc"];if(a){Q(e,t,r.$modeName$)}var o=H("render",t.$tagName$);{{try{oe(e,r,t,n.render())}catch(f){b(f)}}}if(c.$cssShim$){c.$cssShim$.updateHost(e)}{r.$flags$&=~16}{r.$flags$|=2}if(s){s.forEach((function(e){return e()}));e["s-rc"]=undefined}o();i();{var u=e["s-p"];var l=function(){return ce(e,r,t)};if(u.length===0){l()}else{Promise.all(u).then(l);r.$flags$|=4;u.length=0}}};var ce=function(e,r,t){var n=H("postUpdate",t.$tagName$);var a=r.$ancestorComponent$;if(!(r.$flags$&64)){r.$flags$|=64;{e.classList.add(z)}n();{r.$onReadyResolve$(e);if(!a){ve()}}}else{n()}{if(r.$onRenderResolve$){r.$onRenderResolve$();r.$onRenderResolve$=undefined}if(r.$flags$&512){A((function(){return le(e,r,t,false)}))}r.$flags$&=~(4|512)}};var $e=function(e,r){{var t=m(e);if((t.$flags$&(2|16))===2){le(e,t,r,false)}}};var ve=function(e){{f.documentElement.classList.add(z)}{c.$flags$|=2}};var he=function(e,r,t){if(e&&e[r]){try{return e[r](t)}catch(n){b(n)}}return undefined};var de=function(e,r){return e&&e.then?e.then(r):r()};var me=function(e,r){return m(e).$instanceValues$.get(r)};var pe=function(e,r,t,n){var a=m(e);var i=a.$hostElement$;var s=a.$instanceValues$.get(r);var o=a.$flags$;var u=a.$lazyInstance$;t=T(t,n.$members$[r][0]);if(t!==s&&(!(o&8)||s===undefined)){a.$instanceValues$.set(r,t);if(u){if((o&(2|16))===2){le(i,a,n,false)}}}};var ge=function(e,r,t){if(r.$members$){var n=Object.entries(r.$members$);var a=e.prototype;n.forEach((function(e){var n=e[0],i=e[1][0];if(i&31||t&2&&i&32){Object.defineProperty(a,n,{get:function(){return me(this,n)},set:function(e){pe(this,n,e,r)},configurable:true,enumerable:true})}}));if(t&1){var i=new Map;a.attributeChangedCallback=function(e,r,t){var n=this;c.jmp((function(){var r=i.get(e);n[r]=t===null&&typeof n[r]==="boolean"?false:t}))};e.observedAttributes=n.filter((function(e){var r=e[0],t=e[1];return t[0]&15})).map((function(e){var r=e[0],t=e[1];var n=t[1]||r;i.set(n,r);return n}))}}return e};var ye=function(e,r,t){r.$queuedListeners$=r.$queuedListeners$||[];var n=t.map((function(t){var n=t[0],a=t[1],i=t[2];var s=e;var o=be(r,i);var u=we(n);c.ael(s,a,o,u);return function(){return c.rel(s,a,o,u)}}));return function(){return n.forEach((function(e){return e()}))}};var be=function(e,r){return function(t){{if(e.$flags$&256){e.$lazyInstance$[r](t)}else{e.$queuedListeners$.push([r,t])}}}};var we=function(e){return v?{passive:(e&1)!==0,capture:(e&2)!==0}:(e&2)!==0};var _e=function(e,n,a,i,s){return __awaiter(t,void 0,void 0,(function(){var t,i,o,u,l,f,c;return __generator(this,(function($){switch($.label){case 0:if(!((n.$flags$&32)===0))return[3,5];n.$flags$|=32;s=_(a);if(!s.then)return[3,2];t=V();return[4,s];case 1:s=$.sent();t();$.label=2;case 2:if(!s.isProxied){ge(s,a,2);s.isProxied=true}i=H("createInstance",a.$tagName$);{n.$flags$|=8}try{new s(n)}catch(v){b(v)}{n.$flags$&=~8}i();o=D(a.$tagName$);if(!(!S.has(o)&&s.style))return[3,5];u=H("registerStyles",a.$tagName$);l=s.style;if(!(a.$flags$&8))return[3,4];return[4,r.import("./p-ed968002.system.js").then((function(e){return e.scopeCss(l,o,false)}))];case 3:l=$.sent();$.label=4;case 4:W(o,l,!!(a.$flags$&1));u();$.label=5;case 5:f=n.$ancestorComponent$;c=function(){return le(e,n,a,true)};if(f&&f["s-rc"]){f["s-rc"].push(c)}else{c()}return[2]}}))}))};var Se=function(e,r){if((c.$flags$&1)===0){var t=H("connectedCallback",r.$tagName$);var n=m(e);if(r.$listeners$){n.$rmListeners$=ye(e,n,r.$listeners$)}if(!(n.$flags$&1)){n.$flags$|=1;{var a=e;while(a=a.parentNode||a.host){if(a["s-p"]){ue(n,n.$ancestorComponent$=a);break}}}if(r.$members$){Object.entries(r.$members$).forEach((function(r){var t=r[0],n=r[1][0];if(n&31&&e.hasOwnProperty(t)){var a=e[t];delete e[t];e[t]=a}}))}{A((function(){return _e(e,n,r)}))}}t()}};var Re=function(e){if((c.$flags$&1)===0){var r=m(e);{if(r.$rmListeners$){r.$rmListeners$();r.$rmListeners$=undefined}}if(c.$cssShim$){c.$cssShim$.removeHost(e)}}};var Le=e("b",(function(e,r){if(r===void 0){r={}}var t=H();var n=[];var a=r.exclude||[];var i=f.head;var s=l.customElements;var o=i.querySelector("meta[charset]");var u=f.createElement("style");var v=[];var h;var d=true;Object.assign(c,r);c.$resourcesUrl$=new URL(r.resourcesUrl||"./",f.baseURI).href;if(r.syncQueue){c.$flags$|=4}e.forEach((function(e){return e[1].forEach((function(r){var t={$flags$:r[0],$tagName$:r[1],$members$:r[2],$listeners$:r[3]};{t.$members$=r[2]}{t.$listeners$=r[3]}if(!$&&t.$flags$&1){t.$flags$|=8}var i=t.$tagName$;var o=function(e){__extends(r,e);function r(r){var n=e.call(this,r)||this;r=n;g(r);if(t.$flags$&1){if($){r.attachShadow({mode:"open"})}else if(!("shadowRoot"in r)){r.shadowRoot=r}}return n}r.prototype.connectedCallback=function(){var e=this;if(h){clearTimeout(h);h=null}if(d){v.push(this)}else{c.jmp((function(){return Se(e,t)}))}};r.prototype.disconnectedCallback=function(){var e=this;c.jmp((function(){return Re(e)}))};r.prototype["s-hmr"]=function(e){};r.prototype.forceUpdate=function(){$e(this,t)};r.prototype.componentOnReady=function(){return m(this).$onReadyPromise$};return r}(HTMLElement);t.$lazyBundleIds$=e[0];if(!a.includes(i)&&!s.get(i)){n.push(i);s.define(i,ge(o,t,1))}}))}));u.innerHTML=n+"{visibility:hidden}.hydrated{visibility:inherit}";u.setAttribute("data-styles","");i.insertBefore(u,o?o.nextSibling:i.firstChild);d=false;if(v.length>0){v.forEach((function(e){return e.connectedCallback()}))}else{c.jmp((function(){return h=setTimeout(ve,30,"timeout")}))}t()}))}}}));
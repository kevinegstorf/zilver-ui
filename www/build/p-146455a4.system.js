var __extends=this&&this.__extends||function(){var e=function(r,n){e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,r){e.__proto__=r}||function(e,r){for(var n in r)if(r.hasOwnProperty(n))e[n]=r[n]};return e(r,n)};return function(r,n){e(r,n);function t(){this.constructor=r}r.prototype=n===null?Object.create(n):(t.prototype=n.prototype,new t)}}();var __awaiter=this&&this.__awaiter||function(e,r,n,t){function a(e){return e instanceof n?e:new n((function(r){r(e)}))}return new(n||(n=Promise))((function(n,i){function s(e){try{o(t.next(e))}catch(r){i(r)}}function u(e){try{o(t["throw"](e))}catch(r){i(r)}}function o(e){e.done?n(e.value):a(e.value).then(s,u)}o((t=t.apply(e,r||[])).next())}))};var __generator=this&&this.__generator||function(e,r){var n={label:0,sent:function(){if(i[0]&1)throw i[1];return i[1]},trys:[],ops:[]},t,a,i,s;return s={next:u(0),throw:u(1),return:u(2)},typeof Symbol==="function"&&(s[Symbol.iterator]=function(){return this}),s;function u(e){return function(r){return o([e,r])}}function o(s){if(t)throw new TypeError("Generator is already executing.");while(n)try{if(t=1,a&&(i=s[0]&2?a["return"]:s[0]?a["throw"]||((i=a["return"])&&i.call(a),0):a.next)&&!(i=i.call(a,s[1])).done)return i;if(a=0,i)s=[s[0]&2,i.value];switch(s[0]){case 0:case 1:i=s;break;case 4:n.label++;return{value:s[1],done:false};case 5:n.label++;a=s[1];s=[0];continue;case 7:s=n.ops.pop();n.trys.pop();continue;default:if(!(i=n.trys,i=i.length>0&&i[i.length-1])&&(s[0]===6||s[0]===2)){n=0;continue}if(s[0]===3&&(!i||s[1]>i[0]&&s[1]<i[3])){n.label=s[1];break}if(s[0]===6&&n.label<i[1]){n.label=i[1];i=s;break}if(i&&n.label<i[2]){n.label=i[2];n.ops.push(s);break}if(i[2])n.ops.pop();n.trys.pop();continue}s=r.call(e,n)}catch(u){s=[6,u];a=0}finally{t=i=0}if(s[0]&5)throw s[1];return{value:s[0]?s[1]:void 0,done:true}}};var __spreadArrays=this&&this.__spreadArrays||function(){for(var e=0,r=0,n=arguments.length;r<n;r++)e+=arguments[r].length;for(var t=Array(e),a=0,r=0;r<n;r++)for(var i=arguments[r],s=0,u=i.length;s<u;s++,a++)t[a]=i[s];return t};System.register([],(function(e,r){"use strict";return{execute:function(){var n=this;var t="zilver-ui";var a=0;var i=false;var s=false;var u=window;var o=document;var l={$flags$:0,$resourcesUrl$:"",jmp:function(e){return e()},raf:function(e){return requestAnimationFrame(e)},ael:function(e,r,n,t){return e.addEventListener(r,n,t)},rel:function(e,r,n,t){return e.removeEventListener(r,n,t)}};var f=function(){var e=false;try{o.addEventListener("e",null,Object.defineProperty({},"passive",{get:function(){e=true}}))}catch(r){}return e}();var c=function(){try{new CSSStyleSheet;return true}catch(e){}return false}();var $=new WeakMap;var v=function(e){return $.get(e)};var h=e("r",(function(e,r){return $.set(r.$lazyInstance$=e,r)}));var m=function(e){var r={$flags$:0,$hostElement$:e,$instanceValues$:new Map};{r.$onReadyPromise$=new Promise((function(e){return r.$onReadyResolve$=e}));e["s-p"]=[];e["s-rc"]=[]}return $.set(e,r)};var d=function(e,r){return r in e};var p=function(e){return console.error(e)};var g=new Map;var y=function(e,n,t){var a=e.$tagName$.replace(/-/g,"_");var i=e.$lazyBundleIds$;var s=g.get(i);if(s){return s[a]}return r.import("./"+i+".entry.js"+"").then((function(e){{g.set(i,e)}return e[a]}),p)};var b=new Map;var w=[];var _=[];var S=[];var R=function(e,r){return function(n){e.push(n);if(!i){i=true;if(r&&l.$flags$&4){C(j)}else{l.raf(j)}}}};var L=function(e){for(var r=0;r<e.length;r++){try{e[r](performance.now())}catch(n){p(n)}}e.length=0};var E=function(e,r){var n=0;var t=0;while(n<e.length&&(t=performance.now())<r){try{e[n++](t)}catch(a){p(a)}}if(n===e.length){e.length=0}else if(n!==0){e.splice(0,n)}};var j=function(){a++;L(w);var e=(l.$flags$&6)===2?performance.now()+10*Math.ceil(a*(1/22)):Infinity;E(_,e);E(S,e);if(_.length>0){S.push.apply(S,_);_.length=0}if(i=w.length+_.length+S.length>0){l.raf(j)}else{a=0}};var C=function(e){return Promise.resolve().then(e)};var N=R(_,true);var x={};var A=function(e){e=typeof e;return e==="object"||e==="function"};var O=function(e){return"__sc_import_"+e.replace(/\s|-/g,"_")};var P=e("a",(function(){if(!(u.CSS&&u.CSS.supports&&u.CSS.supports("color","var(--c)"))){return r.import("./p-a614138e.system.js").then((function(){l.$cssShim$=u.__stencil_cssshim;if(l.$cssShim$){return l.$cssShim$.initShim()}}))}return Promise.resolve()}));var U=e("p",(function(){return __awaiter(n,void 0,void 0,(function(){var e,n,a,i,s;return __generator(this,(function(f){switch(f.label){case 0:{l.$cssShim$=u.__stencil_cssshim}e=r.meta.url;n=new RegExp("/"+t+"(\\.esm)?\\.js($|\\?|#)");a=Array.from(o.querySelectorAll("script")).find((function(e){return n.test(e.src)||e.getAttribute("data-stencil-namespace")===t}));i=a["data-opts"];if(!(e!==""))return[3,1];return[2,Object.assign(Object.assign({},i),{resourcesUrl:new URL(".",e).href})];case 1:s=new URL(".",new URL(a.getAttribute("data-resources-url")||a.src,u.location.href));k(s.href);if(!!window.customElements)return[3,3];return[4,r.import("./p-5b416380.system.js")];case 2:f.sent();f.label=3;case 3:return[2,Object.assign(Object.assign({},i),{resourcesUrl:s.href})]}}))}))}));var k=function(e){var r=O(t);try{u[r]=new Function("w","return import(w);//"+Math.random())}catch(a){var n=new Map;u[r]=function(t){var a=new URL(t,e).href;var i=n.get(a);if(!i){var s=o.createElement("script");s.type="module";s.src=URL.createObjectURL(new Blob(["import * as m from '"+a+"'; window."+r+".m = m;"],{type:"application/javascript"}));i=new Promise((function(e){s.onload=function(){e(u[r].m);s.remove()}}));n.set(a,i);o.head.appendChild(s)}return i}}};var M=function(e,r){if(e!=null&&!A(e)){if(r&2){return parseFloat(e)}if(r&1){return String(e)}return e}return e};var q="hydrated";var B=function(e,r){if(r===void 0){r=""}{return function(){return}}};var I=function(e,r){{return function(){return}}};var T=new WeakMap;var z=function(e,r,n){var t=b.get(e);if(c&&n){t=t||new CSSStyleSheet;t.replace(r)}else{t=r}b.set(e,t)};var H=function(e,r,n,t){var a=F(r.$tagName$);var i=b.get(a);e=e.nodeType===11?e:o;if(i){if(typeof i==="string"){e=e.head||e;var s=T.get(e);var u=void 0;if(!s){T.set(e,s=new Set)}if(!s.has(a)){{if(l.$cssShim$){u=l.$cssShim$.createHostStyle(t,a,i,!!(r.$flags$&10));var f=u["s-sc"];if(f){a=f;s=null}}else{u=o.createElement("style");u.innerHTML=i}e.insertBefore(u,e.querySelector("link"))}if(s){s.add(a)}}}else if(!e.adoptedStyleSheets.includes(i)){e.adoptedStyleSheets=__spreadArrays(e.adoptedStyleSheets,[i])}}return a};var V=function(e,r,n){var t=B("attachStyles",r.$tagName$);var a=H(e.getRootNode(),r,n,e);t()};var F=function(e,r){return"sc-"+e};var W=e("h",(function(e,r){var n=[];for(var t=2;t<arguments.length;t++){n[t-2]=arguments[t]}var a=null;var i=false;var s=false;var u=[];var o=function(r){for(var n=0;n<r.length;n++){a=r[n];if(Array.isArray(a)){o(a)}else if(a!=null&&typeof a!=="boolean"){if(i=typeof e!=="function"&&!A(a)){a=String(a)}if(i&&s){u[u.length-1].$text$+=a}else{u.push(i?G(null,a):a)}s=i}}};o(n);var l=G(e,null);l.$attrs$=r;if(u.length>0){l.$children$=u}return l}));var G=function(e,r){var n={$flags$:0,$tag$:e,$text$:r,$elm$:null,$children$:null};{n.$attrs$=null}return n};var Q={};var D=function(e){return e&&e.$tag$===Q};var J=function(e,r,n,t,a,i){if(n===t){return}var s=d(e,r);var u=r.toLowerCase();if(r==="ref"){if(t){t(e)}}else{var o=A(t);if((s||o&&t!==null)&&!a){try{if(!e.tagName.includes("-")){var l=t==null?"":t;if(r==="list"){s=false}else if(n==null||e[r]!=l){e[r]=l}}else{e[r]=t}}catch(f){}}if(t==null||t===false){{e.removeAttribute(r)}}else if((!s||i&4||a)&&!o){t=t===true?"":t;{e.setAttribute(r,t)}}}};var K=function(e,r,n,t){var a=r.$elm$.nodeType===11&&r.$elm$.host?r.$elm$.host:r.$elm$;var i=e&&e.$attrs$||x;var s=r.$attrs$||x;{for(t in i){if(!(t in s)){J(a,t,i[t],undefined,n,r.$flags$)}}}for(t in s){J(a,t,i[t],s[t],n,r.$flags$)}};var X=function(e,r,n,t){var a=r.$children$[n];var i=0;var u;var l;{u=a.$elm$=o.createElement(a.$tag$);{K(null,a,s)}if(a.$children$){for(i=0;i<a.$children$.length;++i){l=X(e,a,i);if(l){u.appendChild(l)}}}}return u};var Y=function(e,r,n,t,a,i){var s=e;var u;for(;a<=i;++a){if(t[a]){u=X(null,n,a);if(u){t[a].$elm$=u;s.insertBefore(u,r)}}}};var Z=function(e,r,n,t,a){for(;r<=n;++r){if(t=e[r]){a=t.$elm$;te(t);a.remove()}}};var ee=function(e,r,n,t){var a=0;var i=0;var s=r.length-1;var u=r[0];var o=r[s];var l=t.length-1;var f=t[0];var c=t[l];var $;while(a<=s&&i<=l){if(u==null){u=r[++a]}else if(o==null){o=r[--s]}else if(f==null){f=t[++i]}else if(c==null){c=t[--l]}else if(re(u,f)){ne(u,f);u=r[++a];f=t[++i]}else if(re(o,c)){ne(o,c);o=r[--s];c=t[--l]}else if(re(u,c)){ne(u,c);e.insertBefore(u.$elm$,o.$elm$.nextSibling);u=r[++a];c=t[--l]}else if(re(o,f)){ne(o,f);e.insertBefore(o.$elm$,u.$elm$);o=r[--s];f=t[++i]}else{{$=X(r&&r[i],n,i);f=t[++i]}if($){{u.$elm$.parentNode.insertBefore($,u.$elm$)}}}}if(a>s){Y(e,t[l+1]==null?null:t[l+1].$elm$,n,t,i,l)}else if(i>l){Z(r,a,s)}};var re=function(e,r){if(e.$tag$===r.$tag$){return true}return false};var ne=function(e,r){var n=r.$elm$=e.$elm$;var t=e.$children$;var a=r.$children$;{{{K(e,r,s)}}if(t!==null&&a!==null){ee(n,t,r,a)}else if(a!==null){Y(n,null,r,a,0,a.length-1)}else if(t!==null){Z(t,0,t.length-1)}}};var te=function(e){{e.$attrs$&&e.$attrs$.ref&&e.$attrs$.ref(null);e.$children$&&e.$children$.forEach(te)}};var ae=function(e,r,n,t){var a=r.$vnode$||G(null,null);var i=D(t)?t:W(null,null,t);i.$tag$=null;i.$flags$|=4;r.$vnode$=i;i.$elm$=a.$elm$=e;ne(a,i)};var ie=function(e,r){if(r&&!e.$onRenderResolve$){r["s-p"].push(new Promise((function(r){return e.$onRenderResolve$=r})))}};var se=function(e,r,n,t){{r.$flags$|=16}if(r.$flags$&4){r.$flags$|=512;return}var a=B("scheduleUpdate",n.$tagName$);var i=r.$ancestorComponent$;var s=r.$lazyInstance$;var u=function(){return ue(e,r,n,s,t)};ie(r,i);var o;if(t){{r.$flags$|=256;if(r.$queuedListeners$){r.$queuedListeners$.forEach((function(e){var r=e[0],n=e[1];return ce(s,r,n)}));r.$queuedListeners$=null}}}a();return $e(o,(function(){return N(u)}))};var ue=function(e,r,n,t,a){var i=B("update",n.$tagName$);var s=e["s-rc"];if(a){V(e,n,r.$modeName$)}var u=B("render",n.$tagName$);{{try{ae(e,r,n,t.render())}catch(c){p(c)}}}if(l.$cssShim$){l.$cssShim$.updateHost(e)}{r.$flags$&=~16}{r.$flags$|=2}if(s){s.forEach((function(e){return e()}));e["s-rc"]=undefined}u();i();{var o=e["s-p"];var f=function(){return oe(e,r,n)};if(o.length===0){f()}else{Promise.all(o).then(f);r.$flags$|=4;o.length=0}}};var oe=function(e,r,n){var t=B("postUpdate",n.$tagName$);var a=r.$ancestorComponent$;if(!(r.$flags$&64)){r.$flags$|=64;{e.classList.add(q)}t();{r.$onReadyResolve$(e);if(!a){fe()}}}else{t()}{if(r.$onRenderResolve$){r.$onRenderResolve$();r.$onRenderResolve$=undefined}if(r.$flags$&512){C((function(){return se(e,r,n,false)}))}r.$flags$&=~(4|512)}};var le=function(e,r){{var n=v(e);if((n.$flags$&(2|16))===2){se(e,n,r,false)}}};var fe=function(e){{o.documentElement.classList.add(q)}{l.$flags$|=2}};var ce=function(e,r,n){if(e&&e[r]){try{return e[r](n)}catch(t){p(t)}}return undefined};var $e=function(e,r){return e&&e.then?e.then(r):r()};var ve=function(e,r){return v(e).$instanceValues$.get(r)};var he=function(e,r,n,t){var a=v(e);var i=a.$hostElement$;var s=a.$instanceValues$.get(r);var u=a.$flags$;var o=a.$lazyInstance$;n=M(n,t.$members$[r][0]);if(n!==s&&(!(u&8)||s===undefined)){a.$instanceValues$.set(r,n);if(o){if((u&(2|16))===2){se(i,a,t,false)}}}};var me=function(e,r,n){if(r.$members$){var t=Object.entries(r.$members$);var a=e.prototype;t.forEach((function(e){var t=e[0],i=e[1][0];if(i&31||n&2&&i&32){Object.defineProperty(a,t,{get:function(){return ve(this,t)},set:function(e){he(this,t,e,r)},configurable:true,enumerable:true})}}));if(n&1){var i=new Map;a.attributeChangedCallback=function(e,r,n){var t=this;l.jmp((function(){var r=i.get(e);t[r]=n===null&&typeof t[r]==="boolean"?false:n}))};e.observedAttributes=t.filter((function(e){var r=e[0],n=e[1];return n[0]&15})).map((function(e){var r=e[0],n=e[1];var t=n[1]||r;i.set(t,r);return t}))}}return e};var de=function(e,r,n){r.$queuedListeners$=r.$queuedListeners$||[];var t=n.map((function(n){var t=n[0],a=n[1],i=n[2];var s=e;var u=pe(r,i);var o=ge(t);l.ael(s,a,u,o);return function(){return l.rel(s,a,u,o)}}));return function(){return t.forEach((function(e){return e()}))}};var pe=function(e,r){return function(n){{if(e.$flags$&256){e.$lazyInstance$[r](n)}else{e.$queuedListeners$.push([r,n])}}}};var ge=function(e){return f?{passive:(e&1)!==0,capture:(e&2)!==0}:(e&2)!==0};var ye=function(e,r,t,a,i){return __awaiter(n,void 0,void 0,(function(){var n,a,s,u,o,l,f;return __generator(this,(function(c){switch(c.label){case 0:if(!((r.$flags$&32)===0))return[3,3];r.$flags$|=32;i=y(t);if(!i.then)return[3,2];n=I();return[4,i];case 1:i=c.sent();n();c.label=2;case 2:if(!i.isProxied){me(i,t,2);i.isProxied=true}a=B("createInstance",t.$tagName$);{r.$flags$|=8}try{new i(r)}catch($){p($)}{r.$flags$&=~8}a();s=F(t.$tagName$);if(!b.has(s)&&i.style){u=B("registerStyles",t.$tagName$);o=i.style;z(s,o,!!(t.$flags$&1));u()}c.label=3;case 3:l=r.$ancestorComponent$;f=function(){return se(e,r,t,true)};if(l&&l["s-rc"]){l["s-rc"].push(f)}else{f()}return[2]}}))}))};var be=function(e,r){if((l.$flags$&1)===0){var n=B("connectedCallback",r.$tagName$);var t=v(e);if(r.$listeners$){t.$rmListeners$=de(e,t,r.$listeners$)}if(!(t.$flags$&1)){t.$flags$|=1;{var a=e;while(a=a.parentNode||a.host){if(a["s-p"]){ie(t,t.$ancestorComponent$=a);break}}}if(r.$members$){Object.entries(r.$members$).forEach((function(r){var n=r[0],t=r[1][0];if(t&31&&e.hasOwnProperty(n)){var a=e[n];delete e[n];e[n]=a}}))}{C((function(){return ye(e,t,r)}))}}n()}};var we=function(e){if((l.$flags$&1)===0){var r=v(e);{if(r.$rmListeners$){r.$rmListeners$();r.$rmListeners$=undefined}}if(l.$cssShim$){l.$cssShim$.removeHost(e)}}};var _e=e("b",(function(e,r){if(r===void 0){r={}}var n=B();var t=[];var a=r.exclude||[];var i=o.head;var s=u.customElements;var f=i.querySelector("meta[charset]");var c=o.createElement("style");var $=[];var h;var d=true;Object.assign(l,r);l.$resourcesUrl$=new URL(r.resourcesUrl||"./",o.baseURI).href;if(r.syncQueue){l.$flags$|=4}e.forEach((function(e){return e[1].forEach((function(r){var n={$flags$:r[0],$tagName$:r[1],$members$:r[2],$listeners$:r[3]};{n.$members$=r[2]}{n.$listeners$=r[3]}var i=n.$tagName$;var u=function(e){__extends(r,e);function r(r){var n=e.call(this,r)||this;r=n;m(r);return n}r.prototype.connectedCallback=function(){var e=this;if(h){clearTimeout(h);h=null}if(d){$.push(this)}else{l.jmp((function(){return be(e,n)}))}};r.prototype.disconnectedCallback=function(){var e=this;l.jmp((function(){return we(e)}))};r.prototype["s-hmr"]=function(e){};r.prototype.forceUpdate=function(){le(this,n)};r.prototype.componentOnReady=function(){return v(this).$onReadyPromise$};return r}(HTMLElement);n.$lazyBundleIds$=e[0];if(!a.includes(i)&&!s.get(i)){t.push(i);s.define(i,me(u,n,1))}}))}));c.innerHTML=t+"{visibility:hidden}.hydrated{visibility:inherit}";c.setAttribute("data-styles","");i.insertBefore(c,f?f.nextSibling:i.firstChild);d=false;if($.length>0){$.forEach((function(e){return e.connectedCallback()}))}else{l.jmp((function(){return h=setTimeout(fe,30,"timeout")}))}n()}))}}}));
let t,e,n=0,l=!1;const r=window,s=document,o={t:0,l:"",jmp:t=>t(),raf:t=>requestAnimationFrame(t),ael:(t,e,n,l)=>t.addEventListener(e,n,l),rel:(t,e,n,l)=>t.removeEventListener(e,n,l)},i=(()=>!!s.documentElement.attachShadow)(),c=(()=>{try{return new CSSStyleSheet,!0}catch(t){}return!1})(),a=new WeakMap,u=t=>a.get(t),f=(t,e)=>a.set(e.s=t,e),p=t=>console.error(t),m=new Map,$=new Map,d=[],h=[],w=[],y=(t,e)=>n=>{t.push(n),l||(l=!0,e&&4&o.t?v(b):o.raf(b))},_=(t,e)=>{let n=0,l=0;for(;n<t.length&&(l=performance.now())<e;)try{t[n++](l)}catch(r){p(r)}n===t.length?t.length=0:0!==n&&t.splice(0,n)},b=()=>{n++,(t=>{for(let n=0;n<t.length;n++)try{t[n](performance.now())}catch(e){p(e)}t.length=0})(d);const t=2==(6&o.t)?performance.now()+10*Math.ceil(n*(1/22)):1/0;_(h,t),_(w,t),h.length>0&&(w.push(...h),h.length=0),(l=d.length+h.length+w.length>0)?o.raf(b):n=0},v=t=>Promise.resolve().then(t),g=y(h,!0),j={},S=t=>"object"==(t=typeof t)||"function"===t,M=()=>r.CSS&&r.CSS.supports&&r.CSS.supports("color","var(--c)")?Promise.resolve():__sc_import_zilver_ui("./p-d8631f0b.js").then(()=>{o.o=r.__stencil_cssshim}),R=async()=>{o.o=r.__stencil_cssshim;const t=new RegExp("/zilver-ui(\\.esm)?\\.js($|\\?|#)"),e=Array.from(s.querySelectorAll("script")).find(e=>t.test(e.src)||"zilver-ui"===e.getAttribute("data-stencil-namespace")),n=e["data-opts"];{const t=new URL(".",new URL(e.getAttribute("data-resources-url")||e.src,r.location.href));return U(t.href),window.customElements||await __sc_import_zilver_ui("./p-d0882b30.js"),Object.assign(Object.assign({},n),{resourcesUrl:t.href})}},U=t=>{const e=(()=>`__sc_import_${"zilver-ui".replace(/\s|-/g,"_")}`)();try{r[e]=new Function("w",`return import(w);//${Math.random()}`)}catch(n){const l=new Map;r[e]=n=>{const o=new URL(n,t).href;let i=l.get(o);if(!i){const t=s.createElement("script");t.type="module",t.src=URL.createObjectURL(new Blob([`import * as m from '${o}'; window.${e}.m = m;`],{type:"application/javascript"})),i=new Promise(n=>{t.onload=()=>{n(r[e].m),t.remove()}}),l.set(o,i),s.head.appendChild(t)}return i}}},z=new WeakMap,O=t=>"sc-"+t,k=(t,e,...n)=>{let l=null,r=!1,s=!1,o=[];const i=e=>{for(let n=0;n<e.length;n++)l=e[n],Array.isArray(l)?i(l):null!=l&&"boolean"!=typeof l&&((r="function"!=typeof t&&!S(l))&&(l=String(l)),r&&s?o[o.length-1].i+=l:o.push(r?L(null,l):l),s=r)};i(n);const c=L(t,null);return c.u=e,o.length>0&&(c.p=o),c},L=(t,e)=>({t:0,$:t,i:e,h:null,p:null,u:null}),P={},x=(t,e,n,l,r,s)=>{if(n===l)return;let o=((t,e)=>e in t)(t,e);if(e.toLowerCase(),"ref"===e)l&&l(t);else{const c=S(l);if((o||c&&null!==l)&&!r)try{if(t.tagName.includes("-"))t[e]=l;else{let r=null==l?"":l;"list"===e?o=!1:null!=n&&t[e]==r||(t[e]=r)}}catch(i){}null==l||!1===l?t.removeAttribute(e):(!o||4&s||r)&&!c&&t.setAttribute(e,l=!0===l?"":l)}},C=(t,e,n,l)=>{const r=11===e.h.nodeType&&e.h.host?e.h.host:e.h,s=t&&t.u||j,o=e.u||j;for(l in s)l in o||x(r,l,s[l],void 0,n,e.t);for(l in o)x(r,l,s[l],o[l],n,e.t)},A=(e,n,l)=>{let r,o,i=n.p[l],c=0;if(r=i.h=s.createElement(i.$),C(null,i,!1),(t=>null!=t)(t)&&r["s-si"]!==t&&r.classList.add(r["s-si"]=t),i.p)for(c=0;c<i.p.length;++c)(o=A(e,i,c))&&r.appendChild(o);return r},E=(t,n,l,r,s,o)=>{let i,c=t;for(c.shadowRoot&&c.tagName===e&&(c=c.shadowRoot);s<=o;++s)r[s]&&(i=A(null,l,s))&&(r[s].h=i,c.insertBefore(i,n))},F=(t,e,n,l,r)=>{for(;e<=n;++e)(l=t[e])&&(r=l.h,q(l),r.remove())},T=(t,e)=>t.$===e.$,W=(t,e)=>{const n=e.h=t.h,l=t.p,r=e.p;C(t,e,!1),null!==l&&null!==r?((t,e,n,l)=>{let r,s=0,o=0,i=e.length-1,c=e[0],a=e[i],u=l.length-1,f=l[0],p=l[u];for(;s<=i&&o<=u;)null==c?c=e[++s]:null==a?a=e[--i]:null==f?f=l[++o]:null==p?p=l[--u]:T(c,f)?(W(c,f),c=e[++s],f=l[++o]):T(a,p)?(W(a,p),a=e[--i],p=l[--u]):T(c,p)?(W(c,p),t.insertBefore(c.h,a.h.nextSibling),c=e[++s],p=l[--u]):T(a,f)?(W(a,f),t.insertBefore(a.h,c.h),a=e[--i],f=l[++o]):(r=A(e&&e[o],n,o),f=l[++o],r&&c.h.parentNode.insertBefore(r,c.h));s>i?E(t,null==l[u+1]?null:l[u+1].h,n,l,o,u):o>u&&F(e,s,i)})(n,l,e,r):null!==r?E(n,null,e,r,0,r.length-1):null!==l&&F(l,0,l.length-1)},q=t=>{t.u&&t.u.ref&&t.u.ref(null),t.p&&t.p.forEach(q)},B=(t,e)=>{e&&!t._&&e["s-p"].push(new Promise(e=>t._=e))},H=(t,e,n,l)=>{if(e.t|=16,4&e.t)return void(e.t|=512);const r=e.s,s=()=>N(t,e,n,r,l);return B(e,e.v),l&&(e.t|=256,e.g&&(e.g.forEach(([t,e])=>G(r,t,e)),e.g=null)),I(void 0,()=>g(s))},N=(n,l,r,o,c)=>{const a=n["s-rc"];c&&((t,e)=>{const n=((t,e)=>{let n=O(e.j),l=$.get(n);if(t=11===t.nodeType?t:s,l)if("string"==typeof l){let e,r=z.get(t=t.head||t);r||z.set(t,r=new Set),r.has(n)||((e=s.createElement("style")).innerHTML=l,t.insertBefore(e,t.querySelector("link")),r&&r.add(n))}else t.adoptedStyleSheets.includes(l)||(t.adoptedStyleSheets=[...t.adoptedStyleSheets,l]);return n})(i&&t.shadowRoot?t.shadowRoot:t.getRootNode(),e);10&e.t&&(t["s-sc"]=n,t.classList.add(n+"-h"))})(n,r);try{((n,l,r,s)=>{e=n.tagName;const o=l.S||L(null,null),i=(t=>t&&t.$===P)(s)?s:k(null,null,s);i.$=null,i.t|=4,l.S=i,i.h=o.h=n.shadowRoot||n,t=n["s-sc"],W(o,i)})(n,l,0,o.render())}catch(u){p(u)}l.t&=-17,l.t|=2,a&&(a.forEach(t=>t()),n["s-rc"]=void 0);{const t=n["s-p"],e=()=>V(n,l,r);0===t.length?e():(Promise.all(t).then(e),l.t|=4,t.length=0)}},V=(t,e,n)=>{const l=e.v;64&e.t||(e.t|=64,t.classList.add("hydrated"),e.M(t),l||D()),e._&&(e._(),e._=void 0),512&e.t&&v(()=>H(t,e,n,!1)),e.t&=-517},D=()=>{s.documentElement.classList.add("hydrated"),o.t|=2},G=(t,e,n)=>{if(t&&t[e])try{return t[e](n)}catch(l){p(l)}},I=(t,e)=>t&&t.then?t.then(e):e(),J=(t,e,n)=>{if(e.R){const l=Object.entries(e.R),r=t.prototype;if(l.forEach(([t,[l]])=>{(31&l||2&n&&32&l)&&Object.defineProperty(r,t,{get(){return((t,e)=>u(t).U.get(e))(this,t)},set(n){((t,e,n,l)=>{const r=u(this),s=r.O,o=r.U.get(e),i=r.t,c=r.s;(n=((t,e)=>null==t||S(t)?t:2&e?parseFloat(t):1&e?String(t):t)(n,l.R[e][0]))===o||8&i&&void 0!==o||(r.U.set(e,n),c&&2==(18&i)&&H(s,r,l,!1))})(0,t,n,e)},configurable:!0,enumerable:!0})}),1&n){const e=new Map;r.attributeChangedCallback=function(t,n,l){o.jmp(()=>{const n=e.get(t);this[n]=(null!==l||"boolean"!=typeof this[n])&&l})},t.observedAttributes=l.filter(([t,e])=>15&e[0]).map(([t,n])=>{const l=n[1]||t;return e.set(l,t),l})}}return t},K=(t,e={})=>{const n=[],l=e.exclude||[],f=s.head,d=r.customElements,h=f.querySelector("meta[charset]"),w=s.createElement("style"),y=[];let _,b=!0;Object.assign(o,e),o.l=new URL(e.resourcesUrl||"./",s.baseURI).href,e.syncQueue&&(o.t|=4),t.forEach(t=>t[1].forEach(e=>{const r={t:e[0],j:e[1],R:e[2],k:e[3]};r.R=e[2],r.k=e[3],!i&&1&r.t&&(r.t|=8);const s=r.j,f=class extends HTMLElement{constructor(t){super(t),(t=>{const e={t:0,O:t,U:new Map};e.L=new Promise(t=>e.M=t),t["s-p"]=[],t["s-rc"]=[],a.set(t,e)})(t=this),1&r.t&&(i?t.attachShadow({mode:"open"}):"shadowRoot"in t||(t.shadowRoot=t))}connectedCallback(){_&&(clearTimeout(_),_=null),b?y.push(this):o.jmp(()=>((t,e)=>{if(0==(1&o.t)){const n=()=>{},l=u(t);if(e.k&&(l.P=((t,e,n)=>{e.g=e.g||[];const l=n.map(([n,l,r])=>{const s=t,i=((t,e)=>n=>{256&t.t?t.s[e](n):t.g.push([e,n])})(e,r),c=(t=>({passive:0!=(1&t),capture:0!=(2&t)}))(n);return o.ael(s,l,i,c),()=>o.rel(s,l,i,c)});return()=>l.forEach(t=>t())})(t,l,e.k)),!(1&l.t)){l.t|=1;{let e=t;for(;e=e.parentNode||e.host;)if(e["s-p"]){B(l,l.v=e);break}}e.R&&Object.entries(e.R).forEach(([e,[n]])=>{if(31&n&&t.hasOwnProperty(e)){const n=t[e];delete t[e],t[e]=n}}),v(()=>(async(t,e,n,l,r)=>{if(0==(32&e.t)){e.t|=32;{if((r=(t=>{const e=t.j.replace(/-/g,"_"),n=t.C,l=m.get(n);return l?l[e]:__sc_import_zilver_ui(`./${n}.entry.js`).then(t=>(m.set(n,t),t[e]),p)})(n)).then){const t=()=>{};r=await r,t()}r.isProxied||(J(r,n,2),r.isProxied=!0);const t=()=>{};e.t|=8;try{new r(e)}catch(i){p(i)}e.t&=-9,t()}const t=O(n.j);if(!$.has(t)&&r.style){const e=()=>{};let l=r.style;8&n.t&&(l=await __sc_import_zilver_ui("./p-affe7c09.js").then(e=>e.scopeCss(l,t,!1))),((t,e,n)=>{let l=$.get(t);c&&n?(l=l||new CSSStyleSheet).replace(e):l=e,$.set(t,l)})(t,l,!!(1&n.t)),e()}}const s=e.v,o=()=>H(t,e,n,!0);s&&s["s-rc"]?s["s-rc"].push(o):o()})(t,l,e))}n()}})(this,r))}disconnectedCallback(){o.jmp(()=>(()=>{if(0==(1&o.t)){const t=u(this);t.P&&(t.P(),t.P=void 0)}})())}"s-hmr"(t){}forceUpdate(){((t,e)=>{{const n=u(t);2==(18&n.t)&&H(t,n,e,!1)}})(this,r)}componentOnReady(){return u(this).L}};r.C=t[0],l.includes(s)||d.get(s)||(n.push(s),d.define(s,J(f,r,1)))})),w.innerHTML=n+"{visibility:hidden}.hydrated{visibility:inherit}",w.setAttribute("data-styles",""),f.insertBefore(w,h?h.nextSibling:f.firstChild),b=!1,y.length>0?y.forEach(t=>t.connectedCallback()):o.jmp(()=>_=setTimeout(D,30,"timeout"))};export{M as a,K as b,k as h,R as p,f as r};
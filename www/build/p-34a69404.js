let t=0,e=!1;const n=window,l=document,r={t:0,l:"",jmp:t=>t(),raf:t=>requestAnimationFrame(t),ael:(t,e,n,l)=>t.addEventListener(e,n,l),rel:(t,e,n,l)=>t.removeEventListener(e,n,l)},s=(()=>{try{return new CSSStyleSheet,!0}catch(t){}return!1})(),o=new WeakMap,i=t=>o.get(t),c=(t,e)=>o.set(e.s=t,e),a=t=>console.error(t),u=new Map,f=new Map,p=[],m=[],$=[],d=(t,n)=>l=>{t.push(l),e||(e=!0,n&&4&r.t?y(w):r.raf(w))},h=(t,e)=>{let n=0,l=0;for(;n<t.length&&(l=performance.now())<e;)try{t[n++](l)}catch(r){a(r)}n===t.length?t.length=0:0!==n&&t.splice(0,n)},w=()=>{t++,(t=>{for(let n=0;n<t.length;n++)try{t[n](performance.now())}catch(e){a(e)}t.length=0})(p);const n=2==(6&r.t)?performance.now()+10*Math.ceil(t*(1/22)):1/0;h(m,n),h($,n),m.length>0&&($.push(...m),m.length=0),(e=p.length+m.length+$.length>0)?r.raf(w):t=0},y=t=>Promise.resolve().then(t),b=d(m,!0),_={},v=t=>"object"==(t=typeof t)||"function"===t,g=()=>n.CSS&&n.CSS.supports&&n.CSS.supports("color","var(--c)")?Promise.resolve():__sc_import_zilver_ui("./p-d8631f0b.js").then(()=>{r.o=n.__stencil_cssshim}),j=async()=>{r.o=n.__stencil_cssshim;const t=new RegExp("/zilver-ui(\\.esm)?\\.js($|\\?|#)"),e=Array.from(l.querySelectorAll("script")).find(e=>t.test(e.src)||"zilver-ui"===e.getAttribute("data-stencil-namespace")),s=e["data-opts"];{const t=new URL(".",new URL(e.getAttribute("data-resources-url")||e.src,n.location.href));return S(t.href),window.customElements||await __sc_import_zilver_ui("./p-d0882b30.js"),Object.assign(Object.assign({},s),{resourcesUrl:t.href})}},S=t=>{const e=(()=>`__sc_import_${"zilver-ui".replace(/\s|-/g,"_")}`)();try{n[e]=new Function("w",`return import(w);//${Math.random()}`)}catch(r){const s=new Map;n[e]=r=>{const o=new URL(r,t).href;let i=s.get(o);if(!i){const t=l.createElement("script");t.type="module",t.src=URL.createObjectURL(new Blob([`import * as m from '${o}'; window.${e}.m = m;`],{type:"application/javascript"})),i=new Promise(l=>{t.onload=()=>{l(n[e].m),t.remove()}}),s.set(o,i),l.head.appendChild(t)}return i}}},M=new WeakMap,U=t=>"sc-"+t,O=(t,e,...n)=>{let l=null,r=!1,s=!1,o=[];const i=e=>{for(let n=0;n<e.length;n++)l=e[n],Array.isArray(l)?i(l):null!=l&&"boolean"!=typeof l&&((r="function"!=typeof t&&!v(l))&&(l=String(l)),r&&s?o[o.length-1].i+=l:o.push(r?R(null,l):l),s=r)};i(n);const c=R(t,null);return c.u=e,o.length>0&&(c.p=o),c},R=(t,e)=>({t:0,$:t,i:e,h:null,p:null,u:null}),k={},z=(t,e,n,l,r,s)=>{if(n===l)return;let o=((t,e)=>e in t)(t,e);if(e.toLowerCase(),"ref"===e)l&&l(t);else{const c=v(l);if((o||c&&null!==l)&&!r)try{if(t.tagName.includes("-"))t[e]=l;else{let r=null==l?"":l;"list"===e?o=!1:null!=n&&t[e]==r||(t[e]=r)}}catch(i){}null==l||!1===l?t.removeAttribute(e):(!o||4&s||r)&&!c&&t.setAttribute(e,l=!0===l?"":l)}},L=(t,e,n,l)=>{const r=11===e.h.nodeType&&e.h.host?e.h.host:e.h,s=t&&t.u||_,o=e.u||_;for(l in s)l in o||z(r,l,s[l],void 0,n,e.t);for(l in o)z(r,l,s[l],o[l],n,e.t)},P=(t,e,n)=>{let r,s,o=e.p[n],i=0;if(r=o.h=l.createElement(o.$),L(null,o,!1),o.p)for(i=0;i<o.p.length;++i)(s=P(t,o,i))&&r.appendChild(s);return r},x=(t,e,n,l,r,s)=>{let o,i=t;for(;r<=s;++r)l[r]&&(o=P(null,n,r))&&(l[r].h=o,i.insertBefore(o,e))},C=(t,e,n,l,r)=>{for(;e<=n;++e)(l=t[e])&&(r=l.h,F(l),r.remove())},A=(t,e)=>t.$===e.$,E=(t,e)=>{const n=e.h=t.h,l=t.p,r=e.p;L(t,e,!1),null!==l&&null!==r?((t,e,n,l)=>{let r,s=0,o=0,i=e.length-1,c=e[0],a=e[i],u=l.length-1,f=l[0],p=l[u];for(;s<=i&&o<=u;)null==c?c=e[++s]:null==a?a=e[--i]:null==f?f=l[++o]:null==p?p=l[--u]:A(c,f)?(E(c,f),c=e[++s],f=l[++o]):A(a,p)?(E(a,p),a=e[--i],p=l[--u]):A(c,p)?(E(c,p),t.insertBefore(c.h,a.h.nextSibling),c=e[++s],p=l[--u]):A(a,f)?(E(a,f),t.insertBefore(a.h,c.h),a=e[--i],f=l[++o]):(r=P(e&&e[o],n,o),f=l[++o],r&&c.h.parentNode.insertBefore(r,c.h));s>i?x(t,null==l[u+1]?null:l[u+1].h,n,l,o,u):o>u&&C(e,s,i)})(n,l,e,r):null!==r?x(n,null,e,r,0,r.length-1):null!==l&&C(l,0,l.length-1)},F=t=>{t.u&&t.u.ref&&t.u.ref(null),t.p&&t.p.forEach(F)},T=(t,e)=>{e&&!t._&&e["s-p"].push(new Promise(e=>t._=e))},W=(t,e,n,l)=>{if(e.t|=16,4&e.t)return void(e.t|=512);const r=e.s,s=()=>q(t,e,n,r,l);return T(e,e.v),l&&(e.t|=256,e.g&&(e.g.forEach(([t,e])=>N(r,t,e)),e.g=null)),V(void 0,()=>b(s))},q=(t,e,n,r,s)=>{const o=t["s-rc"];s&&((t,e)=>{((t,e)=>{let n=U(e.j),r=f.get(n);if(t=11===t.nodeType?t:l,r)if("string"==typeof r){let e,s=M.get(t=t.head||t);s||M.set(t,s=new Set),s.has(n)||((e=l.createElement("style")).innerHTML=r,t.insertBefore(e,t.querySelector("link")),s&&s.add(n))}else t.adoptedStyleSheets.includes(r)||(t.adoptedStyleSheets=[...t.adoptedStyleSheets,r])})(t.getRootNode(),e)})(t,n);try{((t,e,n,l)=>{const r=e.S||R(null,null),s=(t=>t&&t.$===k)(l)?l:O(null,null,l);s.$=null,s.t|=4,e.S=s,s.h=r.h=t,E(r,s)})(t,e,0,r.render())}catch(i){a(i)}e.t&=-17,e.t|=2,o&&(o.forEach(t=>t()),t["s-rc"]=void 0);{const l=t["s-p"],r=()=>B(t,e,n);0===l.length?r():(Promise.all(l).then(r),e.t|=4,l.length=0)}},B=(t,e,n)=>{const l=e.v;64&e.t||(e.t|=64,t.classList.add("hydrated"),e.M(t),l||H()),e._&&(e._(),e._=void 0),512&e.t&&y(()=>W(t,e,n,!1)),e.t&=-517},H=()=>{l.documentElement.classList.add("hydrated"),r.t|=2},N=(t,e,n)=>{if(t&&t[e])try{return t[e](n)}catch(l){a(l)}},V=(t,e)=>t&&t.then?t.then(e):e(),D=(t,e,n)=>{if(e.U){const l=Object.entries(e.U),s=t.prototype;if(l.forEach(([t,[l]])=>{(31&l||2&n&&32&l)&&Object.defineProperty(s,t,{get(){return((t,e)=>i(t).O.get(e))(this,t)},set(n){((t,e,n,l)=>{const r=i(this),s=r.R,o=r.O.get(e),c=r.t,a=r.s;(n=((t,e)=>null==t||v(t)?t:2&e?parseFloat(t):1&e?String(t):t)(n,l.U[e][0]))===o||8&c&&void 0!==o||(r.O.set(e,n),a&&2==(18&c)&&W(s,r,l,!1))})(0,t,n,e)},configurable:!0,enumerable:!0})}),1&n){const e=new Map;s.attributeChangedCallback=function(t,n,l){r.jmp(()=>{const n=e.get(t);this[n]=(null!==l||"boolean"!=typeof this[n])&&l})},t.observedAttributes=l.filter(([t,e])=>15&e[0]).map(([t,n])=>{const l=n[1]||t;return e.set(l,t),l})}}return t},G=(t,e={})=>{const c=[],p=e.exclude||[],m=l.head,$=n.customElements,d=m.querySelector("meta[charset]"),h=l.createElement("style"),w=[];let b,_=!0;Object.assign(r,e),r.l=new URL(e.resourcesUrl||"./",l.baseURI).href,e.syncQueue&&(r.t|=4),t.forEach(t=>t[1].forEach(e=>{const n={t:e[0],j:e[1],U:e[2],k:e[3]};n.U=e[2],n.k=e[3];const l=n.j,m=class extends HTMLElement{constructor(t){super(t),(t=>{const e={t:0,R:t,O:new Map};e.L=new Promise(t=>e.M=t),t["s-p"]=[],t["s-rc"]=[],o.set(t,e)})(t=this)}connectedCallback(){b&&(clearTimeout(b),b=null),_?w.push(this):r.jmp(()=>((t,e)=>{if(0==(1&r.t)){const n=()=>{},l=i(t);if(e.k&&(l.P=((t,e,n)=>{e.g=e.g||[];const l=n.map(([n,l,s])=>{const o=t,i=((t,e)=>n=>{256&t.t?t.s[e](n):t.g.push([e,n])})(e,s),c=(t=>({passive:0!=(1&t),capture:0!=(2&t)}))(n);return r.ael(o,l,i,c),()=>r.rel(o,l,i,c)});return()=>l.forEach(t=>t())})(t,l,e.k)),!(1&l.t)){l.t|=1;{let e=t;for(;e=e.parentNode||e.host;)if(e["s-p"]){T(l,l.v=e);break}}e.U&&Object.entries(e.U).forEach(([e,[n]])=>{if(31&n&&t.hasOwnProperty(e)){const n=t[e];delete t[e],t[e]=n}}),y(()=>(async(t,e,n,l,r)=>{if(0==(32&e.t)){e.t|=32;{if((r=(t=>{const e=t.j.replace(/-/g,"_"),n=t.C,l=u.get(n);return l?l[e]:__sc_import_zilver_ui(`./${n}.entry.js`).then(t=>(u.set(n,t),t[e]),a)})(n)).then){const t=()=>{};r=await r,t()}r.isProxied||(D(r,n,2),r.isProxied=!0);const t=()=>{};e.t|=8;try{new r(e)}catch(c){a(c)}e.t&=-9,t()}const t=U(n.j);if(!f.has(t)&&r.style){const e=()=>{};((t,e,n)=>{let l=f.get(t);s&&n?(l=l||new CSSStyleSheet).replace(e):l=e,f.set(t,l)})(t,r.style,!!(1&n.t)),e()}}const o=e.v,i=()=>W(t,e,n,!0);o&&o["s-rc"]?o["s-rc"].push(i):i()})(t,l,e))}n()}})(this,n))}disconnectedCallback(){r.jmp(()=>(()=>{if(0==(1&r.t)){const t=i(this);t.P&&(t.P(),t.P=void 0)}})())}"s-hmr"(t){}forceUpdate(){((t,e)=>{{const n=i(t);2==(18&n.t)&&W(t,n,e,!1)}})(this,n)}componentOnReady(){return i(this).L}};n.C=t[0],p.includes(l)||$.get(l)||(c.push(l),$.define(l,D(m,n,1)))})),h.innerHTML=c+"{visibility:hidden}.hydrated{visibility:inherit}",h.setAttribute("data-styles",""),m.insertBefore(h,d?d.nextSibling:m.firstChild),_=!1,w.length>0?w.forEach(t=>t.connectedCallback()):r.jmp(()=>b=setTimeout(H,30,"timeout"))};export{g as a,G as b,O as h,j as p,c as r};
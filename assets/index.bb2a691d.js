(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))o(r);new MutationObserver(r=>{for(const c of r)if(c.type==="childList")for(const f of c.addedNodes)f.tagName==="LINK"&&f.rel==="modulepreload"&&o(f)}).observe(document,{childList:!0,subtree:!0});function n(r){const c={};return r.integrity&&(c.integrity=r.integrity),r.referrerpolicy&&(c.referrerPolicy=r.referrerpolicy),r.crossorigin==="use-credentials"?c.credentials="include":r.crossorigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function o(r){if(r.ep)return;r.ep=!0;const c=n(r);fetch(r.href,c)}})();function L(){}function W(e){return e()}function z(){return Object.create(null)}function E(e){e.forEach(W)}function X(e){return typeof e=="function"}function Y(e,t){return e!=e?t==t:e!==t||e&&typeof e=="object"||typeof e=="function"}let O;function D(e,t){return O||(O=document.createElement("a")),O.href=t,e===O.href}function ie(e){return Object.keys(e).length===0}function d(e,t){e.appendChild(t)}function Z(e,t,n){e.insertBefore(t,n||null)}function F(e){e.parentNode&&e.parentNode.removeChild(e)}function le(e,t){for(let n=0;n<e.length;n+=1)e[n]&&e[n].d(t)}function b(e){return document.createElement(e)}function q(e){return document.createTextNode(e)}function N(){return q(" ")}function G(e,t,n,o){return e.addEventListener(t,n,o),()=>e.removeEventListener(t,n,o)}function v(e,t,n){n==null?e.removeAttribute(t):e.getAttribute(t)!==n&&e.setAttribute(t,n)}function se(e){return Array.from(e.childNodes)}function H(e,t){t=""+t,e.wholeText!==t&&(e.data=t)}let K;function A(e){K=e}const k=[],J=[],j=[],Q=[],ue=Promise.resolve();let M=!1;function ae(){M||(M=!0,ue.then(ee))}function I(e){j.push(e)}const B=new Set;let P=0;function ee(){const e=K;do{for(;P<k.length;){const t=k[P];P++,A(t),fe(t.$$)}for(A(null),k.length=0,P=0;J.length;)J.pop()();for(let t=0;t<j.length;t+=1){const n=j[t];B.has(n)||(B.add(n),n())}j.length=0}while(k.length);for(;Q.length;)Q.pop()();M=!1,B.clear(),A(e)}function fe(e){if(e.fragment!==null){e.update(),E(e.before_update);const t=e.dirty;e.dirty=[-1],e.fragment&&e.fragment.p(e.ctx,t),e.after_update.forEach(I)}}const S=new Set;let x;function de(){x={r:0,c:[],p:x}}function he(){x.r||E(x.c),x=x.p}function C(e,t){e&&e.i&&(S.delete(e),e.i(t))}function T(e,t,n,o){if(e&&e.o){if(S.has(e))return;S.add(e),x.c.push(()=>{S.delete(e),o&&(n&&e.d(1),o())}),e.o(t)}else o&&o()}function me(e){e&&e.c()}function te(e,t,n,o){const{fragment:r,after_update:c}=e.$$;r&&r.m(t,n),o||I(()=>{const f=e.$$.on_mount.map(W).filter(X);e.$$.on_destroy?e.$$.on_destroy.push(...f):E(f),e.$$.on_mount=[]}),c.forEach(I)}function ne(e,t){const n=e.$$;n.fragment!==null&&(E(n.on_destroy),n.fragment&&n.fragment.d(t),n.on_destroy=n.fragment=null,n.ctx=[])}function _e(e,t){e.$$.dirty[0]===-1&&(k.push(e),ae(),e.$$.dirty.fill(0)),e.$$.dirty[t/31|0]|=1<<t%31}function re(e,t,n,o,r,c,f,m=[-1]){const p=K;A(e);const i=e.$$={fragment:null,ctx:[],props:c,update:L,not_equal:r,bound:z(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(t.context||(p?p.$$.context:[])),callbacks:z(),dirty:m,skip_bound:!1,root:t.target||p.$$.root};f&&f(i.root);let y=!1;if(i.ctx=n?n(e,t.props||{},(u,g,...h)=>{const $=h.length?h[0]:g;return i.ctx&&r(i.ctx[u],i.ctx[u]=$)&&(!i.skip_bound&&i.bound[u]&&i.bound[u]($),y&&_e(e,u)),g}):[],i.update(),y=!0,E(i.before_update),i.fragment=o?o(i.ctx):!1,t.target){if(t.hydrate){const u=se(t.target);i.fragment&&i.fragment.l(u),u.forEach(F)}else i.fragment&&i.fragment.c();t.intro&&C(e.$$.fragment),te(e,t.target,t.anchor,t.customElement),ee()}A(p)}class oe{$destroy(){ne(this,1),this.$destroy=L}$on(t,n){if(!X(n))return L;const o=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return o.push(n),()=>{const r=o.indexOf(n);r!==-1&&o.splice(r,1)}}$set(t){this.$$set&&!ie(t)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}function pe(e){let t,n,o,r,c,f,m=e[0].name+"",p,i,y,u=e[0].species+"",g;return{c(){t=b("div"),n=b("img"),c=N(),f=b("h1"),p=q(m),i=N(),y=b("h3"),g=q(u),D(n.src,o=e[0].image)||v(n,"src",o),v(n,"alt",r=e[0].name)},m(h,$){Z(h,t,$),d(t,n),d(t,c),d(t,f),d(f,p),d(t,i),d(t,y),d(y,g)},p(h,[$]){$&1&&!D(n.src,o=h[0].image)&&v(n,"src",o),$&1&&r!==(r=h[0].name)&&v(n,"alt",r),$&1&&m!==(m=h[0].name+"")&&H(p,m),$&1&&u!==(u=h[0].species+"")&&H(g,u)},i:L,o:L,d(h){h&&F(t)}}}function ge(e,t,n){let{character:o}=t;return e.$$set=r=>{"character"in r&&n(0,o=r.character)},[o]}class $e extends oe{constructor(t){super(),re(this,t,ge,pe,Y,{character:0})}}function U(e,t,n){const o=e.slice();return o[5]=t[n],o}function V(e){let t,n;return t=new $e({props:{character:e[5]}}),{c(){me(t.$$.fragment)},m(o,r){te(t,o,r),n=!0},p(o,r){const c={};r&1&&(c.character=o[5]),t.$set(c)},i(o){n||(C(t.$$.fragment,o),n=!0)},o(o){T(t.$$.fragment,o),n=!1},d(o){ne(t,o)}}}function ye(e){let t,n,o,r,c,f,m,p,i,y,u,g,h,$,w=e[0],s=[];for(let l=0;l<w.length;l+=1)s[l]=V(U(e,w,l));const ce=l=>T(s[l],1,1,()=>{s[l]=null});return{c(){t=b("main"),n=b("h1"),n.textContent="Rick And Morty Svelte",o=N(),r=b("div"),c=b("button"),f=q("Previous"),p=N(),i=b("button"),i.textContent="Next",y=N(),u=b("div");for(let l=0;l<s.length;l+=1)s[l].c();v(n,"class","title"),c.disabled=m=e[1]===1,v(i,"class","btn"),v(r,"class","btns"),v(u,"class","grid"),v(t,"class","container")},m(l,_){Z(l,t,_),d(t,n),d(t,o),d(t,r),d(r,c),d(c,f),d(r,p),d(r,i),d(t,y),d(t,u);for(let a=0;a<s.length;a+=1)s[a].m(u,null);g=!0,h||($=[G(c,"click",e[3]),G(i,"click",e[2])],h=!0)},p(l,[_]){if((!g||_&2&&m!==(m=l[1]===1))&&(c.disabled=m),_&1){w=l[0];let a;for(a=0;a<w.length;a+=1){const R=U(l,w,a);s[a]?(s[a].p(R,_),C(s[a],1)):(s[a]=V(R),s[a].c(),C(s[a],1),s[a].m(u,null))}for(de(),a=w.length;a<s.length;a+=1)ce(a);he()}},i(l){if(!g){for(let _=0;_<w.length;_+=1)C(s[_]);g=!0}},o(l){s=s.filter(Boolean);for(let _=0;_<s.length;_+=1)T(s[_]);g=!1},d(l){l&&F(t),le(s,l),h=!1,E($)}}}function be(e,t,n){let o=[],r=1;async function c(){const i=await(await fetch(`https://rickandmortyapi.com/api/character?page=${r}`)).json(),{results:y}=i;n(0,o=y)}c();function f(){n(1,r++,r),c()}function m(){n(1,r--,r),c()}return[o,r,f,m]}class ve extends oe{constructor(t){super(),re(this,t,be,ye,Y,{})}}new ve({target:document.getElementById("app")});
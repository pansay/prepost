var app=function(){"use strict";function t(){}function e(t){return t()}function n(){return Object.create(null)}function r(t){t.forEach(e)}function o(t){return"function"==typeof t}function c(t,e){return t!=t?e==e:t!==e||t&&"object"==typeof t||"function"==typeof t}function i(t,e){t.appendChild(e)}function u(t){t.parentNode.removeChild(t)}function a(t){return document.createElement(t)}function l(t){return document.createTextNode(t)}function s(t,e){t.value=null==e?"":e}let f;function p(t){f=t}const d=[],g=[],h=[],$=[],m=Promise.resolve();let b=!1;function y(t){h.push(t)}let _=!1;const v=new Set;function x(){if(!_){_=!0;do{for(let t=0;t<d.length;t+=1){const e=d[t];p(e),k(e.$$)}for(p(null),d.length=0;g.length;)g.pop()();for(let t=0;t<h.length;t+=1){const e=h[t];v.has(e)||(v.add(e),e())}h.length=0}while(d.length);for(;$.length;)$.pop()();b=!1,_=!1,v.clear()}}function k(t){if(null!==t.fragment){t.update(),r(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(y)}}const w=new Set;function E(t,e){-1===t.$$.dirty[0]&&(d.push(t),b||(b=!0,m.then(x)),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function A(c,i,a,l,s,d,g=[-1]){const h=f;p(c);const $=i.props||{},m=c.$$={fragment:null,ctx:null,props:d,update:t,not_equal:s,bound:n(),on_mount:[],on_destroy:[],before_update:[],after_update:[],context:new Map(h?h.$$.context:[]),callbacks:n(),dirty:g,skip_bound:!1};let b=!1;if(m.ctx=a?a(c,$,((t,e,...n)=>{const r=n.length?n[0]:e;return m.ctx&&s(m.ctx[t],m.ctx[t]=r)&&(!m.skip_bound&&m.bound[t]&&m.bound[t](r),b&&E(c,t)),e})):[],m.update(),b=!0,r(m.before_update),m.fragment=!!l&&l(m.ctx),i.target){if(i.hydrate){const t=function(t){return Array.from(t.childNodes)}(i.target);m.fragment&&m.fragment.l(t),t.forEach(u)}else m.fragment&&m.fragment.c();i.intro&&((_=c.$$.fragment)&&_.i&&(w.delete(_),_.i(v))),function(t,n,c){const{fragment:i,on_mount:u,on_destroy:a,after_update:l}=t.$$;i&&i.m(n,c),y((()=>{const n=u.map(e).filter(o);a?a.push(...n):r(n),t.$$.on_mount=[]})),l.forEach(y)}(c,i.target,i.anchor),x()}var _,v;p(h)}const j=t=>t.toLowerCase().replace(/[ =.><\[\]{}()!$'?:;,&+*/\\]/gi,"-").replace(/[àáâãäå]/gi,"a").replace(/[ç]/gi,"c").replace(/[èéêë]/gi,"e").replace(/[ìíîï]/gi,"i").replace(/[ñń]/gi,"n").replace(/[òóôõöø]/gi,"o").replace(/[ùúûü]/gi,"u").replace(/[ýÿ]/gi,"y").replace(/[ß]/gi,"ss").replace(/[æ]/gi,"ae").replace(/[œ]/gi,"oe").replace(/\-{1,}/gi,"-");function C(e){let n,r,o,c,f,p,d,g=j(e[0])+"";return{c(){var t,e,i;n=a("main"),r=a("input"),o=l(" "),c=a("h1"),f=l(g),t=n,e="class",null==(i="svelte-1gmv5eg")?t.removeAttribute(e):t.getAttribute(e)!==i&&t.setAttribute(e,i)},m(t,u){var a,l,g,h;!function(t,e,n){t.insertBefore(e,n||null)}(t,n,u),i(n,r),s(r,e[0]),i(n,o),i(n,c),i(c,f),p||(a=r,l="input",g=e[1],a.addEventListener(l,g,h),d=()=>a.removeEventListener(l,g,h),p=!0)},p(t,[e]){1&e&&r.value!==t[0]&&s(r,t[0]),1&e&&g!==(g=j(t[0])+"")&&function(t,e){e=""+e,t.wholeText!==e&&(t.data=e)}(f,g)},i:t,o:t,d(t){t&&u(n),p=!1,d()}}}function L(t,e,n){let r="";return[r,function(){r=this.value,n(0,r)}]}return new class extends class{$destroy(){!function(t,e){const n=t.$$;null!==n.fragment&&(r(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}(this,1),this.$destroy=t}$on(t,e){const n=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return n.push(e),()=>{const t=n.indexOf(e);-1!==t&&n.splice(t,1)}}$set(t){var e;this.$$set&&(e=t,0!==Object.keys(e).length)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}{constructor(t){super(),A(this,t,L,C,c,{})}}({target:document.body})}();
//# sourceMappingURL=bundle.js.map
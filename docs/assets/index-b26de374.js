var Me=Object.defineProperty;var ze=(e,t,s)=>t in e?Me(e,t,{enumerable:!0,configurable:!0,writable:!0,value:s}):e[t]=s;var q=(e,t,s)=>(ze(e,typeof t!="symbol"?t+"":t,s),s);(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))i(n);new MutationObserver(n=>{for(const l of n)if(l.type==="childList")for(const r of l.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&i(r)}).observe(document,{childList:!0,subtree:!0});function s(n){const l={};return n.integrity&&(l.integrity=n.integrity),n.referrerPolicy&&(l.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?l.credentials="include":n.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function i(n){if(n.ep)return;n.ep=!0;const l=s(n);fetch(n.href,l)}})();function K(){}function Le(e,t){for(const s in t)e[s]=t[s];return e}function be(e){return e()}function ae(){return Object.create(null)}function I(e){e.forEach(be)}function x(e){return typeof e=="function"}function _e(e,t){return e!=e?t==t:e!==t||e&&typeof e=="object"||typeof e=="function"}let k;function ue(e,t){return k||(k=document.createElement("a")),k.href=t,e===k.href}function Ye(e){return Object.keys(e).length===0}function Xe(e,t,s,i){if(e){const n=ge(e,t,s,i);return e[0](n)}}function ge(e,t,s,i){return e[1]&&i?Le(s.ctx.slice(),e[1](i(t))):s.ctx}function Pe(e,t,s,i){if(e[2]&&i){const n=e[2](i(s));if(t.dirty===void 0)return n;if(typeof n=="object"){const l=[],r=Math.max(t.dirty.length,n.length);for(let o=0;o<r;o+=1)l[o]=t.dirty[o]|n[o];return l}return t.dirty|n}return t.dirty}function Se(e,t,s,i,n,l){if(n){const r=ge(t,s,i,l);e.p(r,n)}}function je(e){if(e.ctx.length>32){const t=[],s=e.ctx.length/32;for(let i=0;i<s;i++)t[i]=-1;return t}return-1}function te(e){return e&&x(e.destroy)?e.destroy:K}function p(e,t){e.appendChild(t)}function O(e,t,s){e.insertBefore(t,s||null)}function P(e){e.parentNode&&e.parentNode.removeChild(e)}function Ae(e,t){for(let s=0;s<e.length;s+=1)e[s]&&e[s].d(t)}function w(e){return document.createElement(e)}function V(e){return document.createTextNode(e)}function M(){return V(" ")}function G(e,t,s,i){return e.addEventListener(t,s,i),()=>e.removeEventListener(t,s,i)}function d(e,t,s){s==null?e.removeAttribute(t):e.getAttribute(t)!==s&&e.setAttribute(t,s)}function Oe(e){return Array.from(e.childNodes)}function ye(e,t){t=""+t,e.data!==t&&(e.data=t)}function X(e,t){e.value=t??""}function C(e,t,s,i){s==null?e.style.removeProperty(t):e.style.setProperty(t,s,i?"important":"")}let T;function N(e){T=e}function De(){if(!T)throw new Error("Function called outside component initialization");return T}function Ie(e){De().$$.on_mount.push(e)}const A=[],oe=[];let D=[];const fe=[],Be=Promise.resolve();let se=!1;function Ce(){se||(se=!0,Be.then(ve))}function ne(e){D.push(e)}const Z=new Set;let j=0;function ve(){if(j!==0)return;const e=T;do{try{for(;j<A.length;){const t=A[j];j++,N(t),Ne(t.$$)}}catch(t){throw A.length=0,j=0,t}for(N(null),A.length=0,j=0;oe.length;)oe.pop()();for(let t=0;t<D.length;t+=1){const s=D[t];Z.has(s)||(Z.add(s),s())}D.length=0}while(A.length);for(;fe.length;)fe.pop()();se=!1,Z.clear(),N(e)}function Ne(e){if(e.fragment!==null){e.update(),I(e.before_update);const t=e.dirty;e.dirty=[-1],e.fragment&&e.fragment.p(e.ctx,t),e.after_update.forEach(ne)}}function xe(e){const t=[],s=[];D.forEach(i=>e.indexOf(i)===-1?t.push(i):s.push(i)),s.forEach(i=>i()),D=t}const J=new Set;let Te;function ie(e,t){e&&e.i&&(J.delete(e),e.i(t))}function Ee(e,t,s,i){if(e&&e.o){if(J.has(e))return;J.add(e),Te.c.push(()=>{J.delete(e),i&&(s&&e.d(1),i())}),e.o(t)}else i&&i()}function Ue(e){e&&e.c()}function we(e,t,s,i){const{fragment:n,after_update:l}=e.$$;n&&n.m(t,s),i||ne(()=>{const r=e.$$.on_mount.map(be).filter(x);e.$$.on_destroy?e.$$.on_destroy.push(...r):I(r),e.$$.on_mount=[]}),l.forEach(ne)}function $e(e,t){const s=e.$$;s.fragment!==null&&(xe(s.after_update),I(s.on_destroy),s.fragment&&s.fragment.d(t),s.on_destroy=s.fragment=null,s.ctx=[])}function Fe(e,t){e.$$.dirty[0]===-1&&(A.push(e),Ce(),e.$$.dirty.fill(0)),e.$$.dirty[t/31|0]|=1<<t%31}function qe(e,t,s,i,n,l,r,o=[-1]){const u=T;N(e);const a=e.$$={fragment:null,ctx:[],props:l,update:K,not_equal:n,bound:ae(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(t.context||(u?u.$$.context:[])),callbacks:ae(),dirty:o,skip_bound:!1,root:t.target||u.$$.root};r&&r(a.root);let c=!1;if(a.ctx=s?s(e,t.props||{},(b,R,...v)=>{const E=v.length?v[0]:R;return a.ctx&&n(a.ctx[b],a.ctx[b]=E)&&(!a.skip_bound&&a.bound[b]&&a.bound[b](E),c&&Fe(e,b)),R}):[],a.update(),c=!0,I(a.before_update),a.fragment=i?i(a.ctx):!1,t.target){if(t.hydrate){const b=Oe(t.target);a.fragment&&a.fragment.l(b),b.forEach(P)}else a.fragment&&a.fragment.c();t.intro&&ie(e.$$.fragment),we(e,t.target,t.anchor,t.customElement),ve()}N(u)}class Re{$destroy(){$e(this,1),this.$destroy=K}$on(t,s){if(!x(s))return K;const i=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return i.push(s),()=>{const n=i.indexOf(s);n!==-1&&i.splice(n,1)}}$set(t){this.$$set&&!Ye(t)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}function ke(e){let t,s,i,n,l;const r=e[3].default,o=Xe(r,e,e[2],null);return{c(){t=w("div"),s=w("div"),o&&o.c(),d(s,"id","panFrame"),d(s,"class","svelte-4n6dg"),d(t,"id","holder"),d(t,"class","svelte-4n6dg")},m(u,a){O(u,t,a),p(t,s),o&&o.m(s,null),i=!0,n||(l=te(e[0].call(null,s)),n=!0)},p(u,[a]){o&&o.p&&(!i||a&4)&&Se(o,r,u,u[2],i?Pe(r,u[2],a,null):je(u[2]),null)},i(u){i||(ie(o,u),i=!0)},o(u){Ee(o,u),i=!1},d(u){u&&P(t),o&&o.d(u),n=!1,l()}}}function Ge(e,t,s){let{$$slots:i={},$$scope:n}=t;class l{constructor(a,c){q(this,"element");q(this,"lastX");q(this,"lastY");q(this,"isDown");q(this,"posX");q(this,"posY");q(this,"scale");q(this,"bufferScale");q(this,"bufferX");q(this,"bufferY");q(this,"bufferRequested");q(this,"bufferRate");q(this,"step");this.lastX,this.lastY,this.isDown,this.posX=c.x||0,this.posY=c.y||0,this.scale=c.scale||1,this.bufferScale=c.scale||1,this.bufferX=0,this.bufferY=0,this.bufferRequested=!1,this.element=a,this.bufferRate=.16,this.step=c.step||9/10,this.updatePos(),this.initEvents()}updatePos(){this.element.style.transform=`scale(${this.scale}) translate(${this.posX}px, ${this.posY}px)`}updateBuffer(){if(Math.abs(this.bufferX)<1&&(this.bufferX=0),Math.abs(this.bufferY)<1&&(this.bufferY=0),Math.abs(this.bufferScale-this.scale)<1e-8&&(this.scale=this.bufferScale),this.bufferX===0&&this.bufferY===0&&this.scale==this.bufferScale){this.bufferRequested=!1,this.updatePos();return}this.scale=this.scale+(this.bufferScale-this.scale)*.28,this.posX+=this.bufferX*this.bufferRate,this.posY+=this.bufferY*this.bufferRate,this.bufferX=this.bufferX*(1-this.bufferRate),this.bufferY=this.bufferY*(1-this.bufferRate),this.updatePos(),requestAnimationFrame(this.updateBuffer.bind(this))}updateBufferRequest(){this.bufferRequested||(this.bufferRequested=!0,requestAnimationFrame(this.updateBuffer.bind(this)))}initEvents(){this.element.parentElement.addEventListener("mousemove",c=>{if(!this.isDown)return;const b=c.x-this.lastX,R=c.y-this.lastY;this.lastX=c.x,this.lastY=c.y,this.bufferX+=b/this.scale,this.bufferY+=R/this.scale,this.updateBufferRequest()}),this.element.parentElement.addEventListener("mousedown",c=>{this.lastX=c.x,this.lastY=c.y,this.isDown=!0});const a=()=>{this.isDown=!1};this.element.parentElement.addEventListener("mouseup",a),this.element.parentElement.addEventListener("mouseleave",a),this.element.parentElement.addEventListener("wheel",c=>{c.deltaY>0?this.bufferScale*=this.step:this.bufferScale/=this.step,this.updateBufferRequest()})}}let{options:r}=t;function o(u){new l(u,r)}return e.$$set=u=>{"options"in u&&s(1,r=u.options),"$$scope"in u&&s(2,n=u.$$scope)},[o,r,n,i]}class He extends Re{constructor(t){super(),qe(this,t,Ge,ke,_e,{options:1})}}const Je="/assets/earth-c76c33ff.jpg",Ke="/assets/sun-8758bb29.jpg",Ve="/assets/mercury-71e4ade9.jpg",Qe="/assets/venus-525a9f31.jpg",We="/assets/mars-f8ca656c.webp",Ze="/assets/jupiter-79b772d1.jpg",et="/assets/saturn-76e2b943.jpg",tt="/assets/uranus-40f42cdb.webp",st="/assets/neptune-d9093bf5.jpg",y=149597870,ce=60*60*24,nt=365.25,ee=100*nt,de=new Date("2000-01-01T12:00:00-00:00"),H=Math.PI/180,it=180/Math.PI,pe=[{name:"Sun",label:"태양",image:Ke,orbitRadius:0,radius:696340,orbit:{base:{a:0,e:0,i:0,l:0,lp:0,o:0},cy:{a:0,e:0,i:0,l:0,lp:0,o:0}}},{name:"Mercury",label:"수성",image:Ve,radius:2439,orbitRadius:.39,orbit:{base:{a:.38709927*y,e:.20563593,i:7.00497902,l:252.2503235,lp:77.45779628,o:48.33076593},cy:{a:37e-8*y,e:1906e-8,i:-.00594749,l:149472.67411175,lp:.16047689,o:-.12534081}}},{name:"Venus",label:"금성",image:Qe,radius:6051,orbitRadius:.72,orbit:{base:{a:.72333566*y,e:.00677672,i:3.39467605,l:181.9790995,lp:131.60246718,o:76.67984255},cy:{a:39e-7*y,e:-4107e-8,i:-7889e-7,l:58517.81538729,lp:.00268329,o:-.27769418}}},{name:"Earth",label:"지구",image:Je,radius:6371,orbitRadius:1,orbit:{base:{a:1.00000261*y,e:.01671123,i:-1531e-8,l:100.46457166,lp:102.93768193,o:0},cy:{a:562e-8*y,e:-4392e-8,i:-.01294668,l:35999.37244981,lp:.32327364,o:0}}},{name:"Mars",label:"화성",image:We,radius:3389,orbitRadius:1.52,orbit:{base:{a:1.52371034*y,e:.0933941,i:1.84969142,l:-4.55343205,lp:-23.94362959,o:49.55953891},cy:{a:1847e-8*y,e:7882e-8,i:-.00813131,l:19140.30268499,lp:.44441088,o:-.29257343}}},{name:"Saturn",label:"목성",image:Ze,radius:58232,orbitRadius:1.52,orbit:{base:{a:5.202887*y,e:.04838624,i:1.30439695,l:34.39644051,lp:14.72847983,o:100.47390909},cy:{a:-11607e-8*y,e:-13253e-8,i:-.00183714,l:3034.74612775,lp:.21252668,o:.20469106}}},{name:"Saturn",label:"토성",image:et,radius:69911*1.3,orbitRadius:1.52,orbit:{base:{a:9.53667594*y,e:.05386179,i:2.48599187,l:49.95424423,lp:92.59887831,o:113.66242448},cy:{a:-.0012506*y,e:-50991e-8,i:.00193609,l:1222.49362201,lp:-.41897216,o:-.28867794}}},{name:"Uranus",label:"천왕성",image:tt,radius:25362,orbitRadius:1.52,orbit:{base:{a:19.18916464*y,e:.04725744,i:.77263783,l:313.23810451,lp:170.9542763,o:74.01692503},cy:{a:-.00196176*y,e:-4397e-8,i:-.00242939,l:428.48202785,lp:.40805281,o:.04240589}}},{name:"Neptune",label:"해왕성",image:st,radius:24622,orbitRadius:1.52,orbit:{base:{a:30.06992276*y,e:.00859048,i:1.77004347,l:-55.12002969,lp:44.96476227,o:131.78422574},cy:{a:26291e-8*y,e:5105e-8,i:35372e-8,l:218.45945325,lp:-.32241464,o:-.00508664}}}];function he(e,t,s){const i=e.slice();return i[17]=t[s],i}function me(e){let t,s,i,n,l=`${e[17].radius*e[3]}px`,r=`${e[17].radius*e[3]}px`,o,u,a=e[17].label+"",c,b,R,v;return{c(){t=w("img"),o=M(),u=w("p"),c=V(a),d(t,"draggable","false"),d(t,"class","planet svelte-19vrzaq"),ue(t.src,s=e[17].image)||d(t,"src",s),d(t,"alt",i=e[17].name),C(t,"height",l),C(t,"width",r),d(u,"class","planet svelte-19vrzaq")},m(E,_){O(E,t,_),O(E,o,_),O(E,u,_),p(u,c),R||(v=[te(n=e[7].call(null,t,e[17])),te(b=e[8].call(null,u,e[17]))],R=!0)},p(E,_){e=E,_&32&&!ue(t.src,s=e[17].image)&&d(t,"src",s),_&32&&i!==(i=e[17].name)&&d(t,"alt",i),n&&x(n.update)&&_&32&&n.update.call(null,e[17]),_&40&&l!==(l=`${e[17].radius*e[3]}px`)&&C(t,"height",l),_&40&&r!==(r=`${e[17].radius*e[3]}px`)&&C(t,"width",r),_&32&&a!==(a=e[17].label+"")&&ye(c,a),b&&x(b.update)&&_&32&&b.update.call(null,e[17])},d(E){E&&P(t),E&&P(o),E&&P(u),R=!1,I(v)}}}function rt(e){let t,s=e[5],i=[];for(let n=0;n<s.length;n+=1)i[n]=me(he(e,s,n));return{c(){t=w("div");for(let n=0;n<i.length;n+=1)i[n].c();d(t,"id","planetHolder"),d(t,"class","svelte-19vrzaq")},m(n,l){O(n,t,l);for(let r=0;r<i.length;r+=1)i[r]&&i[r].m(t,null)},p(n,l){if(l&40){s=n[5];let r;for(r=0;r<s.length;r+=1){const o=he(n,s,r);i[r]?i[r].p(o,l):(i[r]=me(o),i[r].c(),i[r].m(t,null))}for(;r<i.length;r+=1)i[r].d(1);i.length=s.length}},d(n){n&&P(t),Ae(i,n)}}}function lt(e){let t,s,i,n,l,r,o,u,a,c,b,R,v,E,_,U,z,F,S,h,m,f,$,L,Q,B,W,re;return s=new He({props:{options:{scale:.1},$$slots:{default:[rt]},$$scope:{ctx:e}}}),{c(){t=w("main"),Ue(s.$$.fragment),i=M(),n=w("div"),l=w("p"),l.textContent="행성궤도 시뮬레이터 dev@qwreey.kr",r=M(),o=w("p"),o.textContent="행성 축소 배율(km)",u=M(),a=w("input"),c=M(),b=w("p"),b.textContent="궤도 축소 배율(au)",R=M(),v=w("input"),E=M(),_=w("p"),_.textContent="태양 축소 배율(au)",U=M(),z=w("input"),F=M(),S=w("p"),S.textContent="초당 일 수(days)",h=M(),m=w("input"),f=M(),$=w("p"),L=V("시간: "),Q=V(e[6]),d(l,"class","title svelte-19vrzaq"),d(o,"class","inputLabel svelte-19vrzaq"),d(a,"class","input svelte-19vrzaq"),d(b,"class","inputLabel svelte-19vrzaq"),d(v,"class","input svelte-19vrzaq"),C(v,"width","150px"),d(_,"class","inputLabel svelte-19vrzaq"),d(z,"class","input svelte-19vrzaq"),d(S,"class","inputLabel svelte-19vrzaq"),d(m,"class","input svelte-19vrzaq"),d($,"class","inputLabel svelte-19vrzaq"),d(n,"id","topbar"),d(n,"class","svelte-19vrzaq"),d(t,"class","svelte-19vrzaq")},m(g,Y){O(g,t,Y),we(s,t,null),p(t,i),p(t,n),p(n,l),p(n,r),p(n,o),p(n,u),p(n,a),X(a,e[0]),p(n,c),p(n,b),p(n,R),p(n,v),X(v,e[1]),p(n,E),p(n,_),p(n,U),p(n,z),X(z,e[2]),p(n,F),p(n,S),p(n,h),p(n,m),X(m,e[4]),p(n,f),p(n,$),p($,L),p($,Q),B=!0,W||(re=[G(a,"input",e[9]),G(v,"input",e[10]),G(z,"input",e[11]),G(m,"input",e[12])],W=!0)},p(g,[Y]){const le={};Y&1048616&&(le.$$scope={dirty:Y,ctx:g}),s.$set(le),Y&1&&a.value!==g[0]&&X(a,g[0]),Y&2&&v.value!==g[1]&&X(v,g[1]),Y&4&&z.value!==g[2]&&X(z,g[2]),Y&16&&m.value!==g[4]&&X(m,g[4]),(!B||Y&64)&&ye(Q,g[6])},i(g){B||(ie(s.$$.fragment,g),B=!0)},o(g){Ee(s.$$.fragment,g),B=!1},d(g){g&&P(t),$e(s),W=!1,I(re)}}}function at(e,t,s){let i=0,n=t;for(let l=0;l<s;l++)i=n,n=e(i);return i}function ut(e,t){return s=>s+(t+e*Math.sin(s)-s)/(1-e*Math.cos(s))}function ot(e,t,s){let i=20,n=8e15,l=40,r,o,u=60;const a=[];pe.forEach(h=>{a.push({image:h.image,label:h.label,left:0,top:0,name:h.name,orbit:h.orbit,orbitRadius:h.orbitRadius,radius:h.radius,updateImg:void 0,updateLabel:void 0})});let c=b(new Date);function b(h){return(+h-+de)/1e3/ce/ee}function R(h,m){let f={};return f=Object.keys(h.base).reduce(($,L)=>($[L]=h.base[L]+(h.cy[L]||0)*m,$),f),f.M=f.l-f.lp,f.a*=1e3,f.i*=H,f.o*=H,f.w*=H,f.M*=H,f.E=at(ut(f.e,f.M),f.M,6),f.pos={x:null,y:null},f.pos.x=f.a*(Math.cos(f.E)-f.e),f.pos.y=f.a*Math.sqrt(1-f.e*f.e)*Math.sin(f.E),f.r=Math.sqrt(Math.pow(f.pos.x,2)+Math.pow(f.pos.y,2)),f.v=Math.atan2(f.pos.y,f.pos.x),f.r/=1e3*y,f.v*=it,f}let v="undefined";Ie(()=>{let h=0;function m(){const f=c+h/ee;s(6,v=new Date(f*ee*ce*1e3+ +de).toDateString());for(const $ of a){const L=R($.orbit,f);$.top=L.pos.y,$.left=L.pos.x,$.updateImg&&$.updateImg(),$.updateLabel&&$.updateLabel()}h+=1*(u/60),requestAnimationFrame(m)}m()});function E(h,m){m.updateImg=()=>{h.style.left=m.left*o-m.radius/2*r+"px",h.style.top=m.top*o-m.radius/2*r+"px"}}function _(h,m){m.updateLabel=()=>{h.style.left=m.left*o+"px",h.style.top=m.top*o+m.radius/2*r+"px"}}function U(){i=this.value,s(0,i)}function z(){n=this.value,s(1,n)}function F(){l=this.value,s(2,l)}function S(){u=this.value,s(4,u)}return e.$$.update=()=>{e.$$.dirty&3&&(s(3,r=1/i),o=y/n),e.$$.dirty&4&&s(5,a[0].radius=pe[0].radius/l,a)},[i,n,l,r,u,a,v,E,_,U,z,F,S]}class ft extends Re{constructor(t){super(),qe(this,t,ot,lt,_e,{})}}new ft({target:document.getElementById("app")});

import{w as we,B as Le}from"./index-efdaeff1.js";import{r as P}from"./helpers-70dd449c.js";import{w as Ln}from"./index6-b9636d10.js";const Se="modulepreload",_e=function(e){return"/ionic-vue-capacitor-boilerplate/"+e},Sn={},Tn=function(t,r,s){if(!r||r.length===0)return t();const f=document.getElementsByTagName("link");return Promise.all(r.map(u=>{if(u=_e(u),u in Sn)return;Sn[u]=!0;const E=u.endsWith(".css"),c=E?'[rel="stylesheet"]':"";if(!!s)for(let y=f.length-1;y>=0;y--){const d=f[y];if(d.href===u&&(!E||d.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${u}"]${c}`))return;const C=document.createElement("link");if(C.rel=E?"stylesheet":Se,E||(C.as="script",C.crossOrigin=""),C.href=u,document.head.appendChild(C),E)return new Promise((y,d)=>{C.addEventListener("load",y),C.addEventListener("error",()=>d(new Error(`Unable to preload CSS for ${u}`)))})})).then(()=>t())},Pe="ionViewWillEnter",Fe="ionViewDidEnter",Te="ionViewWillLeave",Re="ionViewDidLeave",$e=()=>Tn(()=>import("./ios.transition-6e86a28e.js"),["assets/ios.transition-6e86a28e.js","assets/index-efdaeff1.js","assets/helpers-70dd449c.js","assets/index6-b9636d10.js"]),ke=()=>Tn(()=>import("./md.transition-2730ba2b.js"),["assets/md.transition-2730ba2b.js","assets/index-efdaeff1.js","assets/helpers-70dd449c.js","assets/index6-b9636d10.js"]),Xe=e=>new Promise((t,r)=>{we(()=>{De(e),Ie(e).then(s=>{s.animation&&s.animation.destroy(),_n(e),t(s)},s=>{_n(e),r(s)})})}),De=e=>{const t=e.enteringEl,r=e.leavingEl;Ve(t,r,e.direction),e.showGoBack?t.classList.add("can-go-back"):t.classList.remove("can-go-back"),Pn(t,!1),t.style.setProperty("pointer-events","none"),r&&(Pn(r,!1),r.style.setProperty("pointer-events","none"))},Ie=async e=>{const t=await We(e);return t&&Le.isBrowser?xe(t,e):Ke(e)},_n=e=>{const t=e.enteringEl,r=e.leavingEl;t.classList.remove("ion-page-invisible"),t.style.removeProperty("pointer-events"),r!==void 0&&(r.classList.remove("ion-page-invisible"),r.style.removeProperty("pointer-events"))},We=async e=>!e.leavingEl||!e.animated||e.duration===0?void 0:e.animationBuilder?e.animationBuilder:e.mode==="ios"?(await $e()).iosTransitionAnimation:(await ke()).mdTransitionAnimation,xe=async(e,t)=>{await Rn(t,!0);const r=e(t.baseEl,t);$n(t.enteringEl,t.leavingEl);const s=await Be(r,t);return t.progressCallback&&t.progressCallback(void 0),s&&kn(t.enteringEl,t.leavingEl),{hasCompleted:s,animation:r}},Ke=async e=>{const t=e.enteringEl,r=e.leavingEl;return await Rn(e,!1),$n(t,r),kn(t,r),{hasCompleted:!0}},Rn=async(e,t)=>{(e.deepWait!==void 0?e.deepWait:t)&&await Promise.all([sn(e.enteringEl),sn(e.leavingEl)]),await Oe(e.viewIsReady,e.enteringEl)},Oe=async(e,t)=>{e&&await e(t)},Be=(e,t)=>{const r=t.progressCallback,s=new Promise(f=>{e.onFinish(u=>f(u===1))});return r?(e.progressStart(!0),r(e)):e.play(),s},$n=(e,t)=>{J(t,Te),J(e,Pe)},kn=(e,t)=>{J(e,Fe),J(t,Re)},J=(e,t)=>{if(e){const r=new CustomEvent(t,{bubbles:!1,cancelable:!1});e.dispatchEvent(r)}},sn=async e=>{const t=e;if(t){if(t.componentOnReady!=null){if(await t.componentOnReady()!=null)return}else if(t.__registerHost!=null){await new Promise(s=>P(s));return}await Promise.all(Array.from(t.children).map(sn))}},Pn=(e,t)=>{t?(e.setAttribute("aria-hidden","true"),e.classList.add("ion-page-hidden")):(e.hidden=!1,e.removeAttribute("aria-hidden"),e.classList.remove("ion-page-hidden"))},Ve=(e,t,r)=>{e!==void 0&&(e.style.zIndex=r==="back"?"99":"101"),t!==void 0&&(t.style.zIndex="100")},nt=e=>{if(e.classList.contains("ion-page"))return e;const t=e.querySelector(":scope > .ion-page, :scope > ion-nav, :scope > ion-tabs");return t||e};/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */let an;const Ne=e=>(e.forEach(t=>{for(const r in t)if(t.hasOwnProperty(r)){const s=t[r];if(r==="easing"){const f="animation-timing-function";t[f]=s,delete t[r]}else{const f=ze(r);f!==r&&(t[f]=s,delete t[r])}}}),e),ze=e=>e.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),cn=e=>{if(an===void 0){const t=e.style.animationName!==void 0,r=e.style.webkitAnimationName!==void 0;an=!t&&r?"-webkit-":""}return an},l=(e,t,r)=>{const s=t.startsWith("animation")?cn(e):"";e.style.setProperty(s+t,r)},L=(e,t)=>{const r=t.startsWith("animation")?cn(e):"";e.style.removeProperty(r+t)},Ue=(e,t)=>{let r;const s={passive:!0},f=()=>{r&&r()},u=E=>{e===E.target&&(f(),t(E))};return e&&(e.addEventListener("webkitAnimationEnd",u,s),e.addEventListener("animationend",u,s),r=()=>{e.removeEventListener("webkitAnimationEnd",u,s),e.removeEventListener("animationend",u,s)}),f},Ye=(e=[])=>e.map(t=>{const r=t.offset,s=[];for(const f in t)t.hasOwnProperty(f)&&f!=="offset"&&s.push(`${f}: ${t[f]};`);return`${r*100}% { ${s.join(" ")} }`}).join(" "),Fn=[],qe=e=>{let t=Fn.indexOf(e);return t<0&&(t=Fn.push(e)-1),`ion-animation-${t}`},He=e=>{const t=e.getRootNode!==void 0?e.getRootNode():e;return t.head||t},Me=(e,t,r)=>{var s;const f=He(r),u=cn(r),E=f.querySelector("#"+e);if(E)return E;const c=((s=r.ownerDocument)!==null&&s!==void 0?s:document).createElement("style");return c.id=e,c.textContent=`@${u}keyframes ${e} { ${t} } @${u}keyframes ${e}-alt { ${t} }`,f.appendChild(c),c},Z=(e=[],t)=>{if(t!==void 0){const r=Array.isArray(t)?t:[t];return[...e,...r]}return e},et=e=>{let t,r,s,f,u,E,c=[],U=[],C=[],y=!1,d,Q={},X=[],nn=[],en={},T=0,Y=!1,q=!1,H,R,x,$,k=!0,K=!1,O=!0,B,a,M=!1;const fn=e,tn=[],j=[],g=[],p=[],rn=[],ln=[],un=[],dn=[],mn=[],S=[],Dn=typeof AnimationEffect=="function"||Ln!==void 0&&typeof Ln.AnimationEffect=="function",b=typeof Element=="function"&&typeof Element.prototype.animate=="function"&&Dn,In=100,gn=()=>S,Wn=n=>(p.forEach(i=>{i.destroy(n)}),xn(n),g.length=0,p.length=0,c.length=0,Bn(),y=!1,O=!0,a),xn=n=>{hn(),n&&En()},Kn=()=>{Y=!1,q=!1,O=!0,R=void 0,x=void 0,$=void 0,T=0,K=!1,k=!0,M=!1},On=()=>T!==0&&!M,G=(n,i)=>((i!=null&&i.oneTimeCallback?j:tn).push({c:n,o:i}),a),Bn=()=>(tn.length=0,j.length=0,a),hn=()=>{if(b)S.forEach(n=>{n.cancel()}),S.length=0;else{const n=g.slice();P(()=>{n.forEach(i=>{L(i,"animation-name"),L(i,"animation-duration"),L(i,"animation-timing-function"),L(i,"animation-iteration-count"),L(i,"animation-delay"),L(i,"animation-play-state"),L(i,"animation-fill-mode"),L(i,"animation-direction")})})}},En=()=>{rn.forEach(n=>{n!=null&&n.parentNode&&n.parentNode.removeChild(n)}),rn.length=0},Vn=n=>(ln.push(n),a),Nn=n=>(un.push(n),a),zn=n=>(dn.push(n),a),Un=n=>(mn.push(n),a),Yn=n=>(U=Z(U,n),a),qn=n=>(C=Z(C,n),a),Hn=(n={})=>(Q=n,a),Mn=(n=[])=>{for(const i of n)Q[i]="";return a},jn=n=>(X=Z(X,n),a),Gn=n=>(nn=Z(nn,n),a),Zn=(n={})=>(en=n,a),Jn=(n=[])=>{for(const i of n)en[i]="";return a},V=()=>u!==void 0?u:d?d.getFill():"both",D=()=>R!==void 0?R:E!==void 0?E:d?d.getDirection():"normal",N=()=>Y?"linear":s!==void 0?s:d?d.getEasing():"linear",w=()=>q?0:x!==void 0?x:r!==void 0?r:d?d.getDuration():0,_=()=>f!==void 0?f:d?d.getIterations():1,I=()=>$!==void 0?$:t!==void 0?t:d?d.getDelay():0,Qn=()=>c,Xn=n=>(E=n,v(!0),a),ne=n=>(u=n,v(!0),a),ee=n=>(t=n,v(!0),a),te=n=>(s=n,v(!0),a),ie=n=>(!b&&n===0&&(n=1),r=n,v(!0),a),re=n=>(f=n,v(!0),a),oe=n=>(d=n,a),ae=n=>{if(n!=null)if(n.nodeType===1)g.push(n);else if(n.length>=0)for(let i=0;i<n.length;i++)g.push(n[i]);else console.error("Invalid addElement value");return a},se=n=>{if(n!=null)if(Array.isArray(n))for(const i of n)i.parent(a),p.push(i);else n.parent(a),p.push(n);return a},ce=n=>{const i=c!==n;return c=n,i&&fe(c),a},fe=n=>{b?gn().forEach(i=>{if(i.effect.setKeyframes)i.effect.setKeyframes(n);else{const o=new KeyframeEffect(i.effect.target,n,i.effect.getTiming());i.effect=o}}):yn()},le=()=>{ln.forEach(m=>m()),un.forEach(m=>m());const n=U,i=C,o=Q;g.forEach(m=>{const h=m.classList;n.forEach(A=>h.add(A)),i.forEach(A=>h.remove(A));for(const A in o)o.hasOwnProperty(A)&&l(m,A,o[A])})},ue=()=>{on(),dn.forEach(h=>h()),mn.forEach(h=>h());const n=k?1:0,i=X,o=nn,m=en;g.forEach(h=>{const A=h.classList;i.forEach(F=>A.add(F)),o.forEach(F=>A.remove(F));for(const F in m)m.hasOwnProperty(F)&&l(h,F,m[F])}),tn.forEach(h=>h.c(n,a)),j.forEach(h=>h.c(n,a)),j.length=0,O=!0,k&&(K=!0),k=!0},W=()=>{T!==0&&(T--,T===0&&(ue(),d&&d.animationFinish()))},yn=(n=!0)=>{En();const i=Ne(c);g.forEach(o=>{if(i.length>0){const m=Ye(i);B=e!==void 0?e:qe(m);const h=Me(B,m,o);rn.push(h),l(o,"animation-duration",`${w()}ms`),l(o,"animation-timing-function",N()),l(o,"animation-delay",`${I()}ms`),l(o,"animation-fill-mode",V()),l(o,"animation-direction",D());const A=_()===1/0?"infinite":_().toString();l(o,"animation-iteration-count",A),l(o,"animation-play-state","paused"),n&&l(o,"animation-name",`${h.id}-alt`),P(()=>{l(o,"animation-name",h.id||null)})}})},de=()=>{g.forEach(n=>{const i=n.animate(c,{id:fn,delay:I(),duration:w(),easing:N(),iterations:_(),fill:V(),direction:D()});i.pause(),S.push(i)}),S.length>0&&(S[0].onfinish=()=>{W()})},pn=(n=!0)=>{le(),c.length>0&&(b?de():yn(n)),y=!0},z=n=>{if(n=Math.min(Math.max(n,0),.9999),b)S.forEach(i=>{i.currentTime=i.effect.getComputedTiming().delay+w()*n,i.pause()});else{const i=`-${w()*n}ms`;g.forEach(o=>{c.length>0&&(l(o,"animation-delay",i),l(o,"animation-play-state","paused"))})}},vn=n=>{S.forEach(i=>{i.effect.updateTiming({delay:I(),duration:w(),easing:N(),iterations:_(),fill:V(),direction:D()})}),n!==void 0&&z(n)},An=(n=!0,i)=>{P(()=>{g.forEach(o=>{l(o,"animation-name",B||null),l(o,"animation-duration",`${w()}ms`),l(o,"animation-timing-function",N()),l(o,"animation-delay",i!==void 0?`-${i*w()}ms`:`${I()}ms`),l(o,"animation-fill-mode",V()||null),l(o,"animation-direction",D()||null);const m=_()===1/0?"infinite":_().toString();l(o,"animation-iteration-count",m),n&&l(o,"animation-name",`${B}-alt`),P(()=>{l(o,"animation-name",B||null)})})})},v=(n=!1,i=!0,o)=>(n&&p.forEach(m=>{m.update(n,i,o)}),b?vn(o):An(i,o),a),me=(n=!1,i)=>(p.forEach(o=>{o.progressStart(n,i)}),Cn(),Y=n,y||pn(),v(!1,!0,i),a),ge=n=>(p.forEach(i=>{i.progressStep(n)}),z(n),a),he=(n,i,o)=>(Y=!1,p.forEach(m=>{m.progressEnd(n,i,o)}),o!==void 0&&(x=o),K=!1,k=!0,n===0?(R=D()==="reverse"?"normal":"reverse",R==="reverse"&&(k=!1),b?(v(),z(1-i)):($=(1-i)*w()*-1,v(!1,!1))):n===1&&(b?(v(),z(i)):($=i*w()*-1,v(!1,!1))),n!==void 0&&(G(()=>{x=void 0,R=void 0,$=void 0},{oneTimeCallback:!0}),d||bn()),a),Cn=()=>{y&&(b?S.forEach(n=>{n.pause()}):g.forEach(n=>{l(n,"animation-play-state","paused")}),M=!0)},Ee=()=>(p.forEach(n=>{n.pause()}),Cn(),a),ye=()=>{H=void 0,W()},on=()=>{H&&clearTimeout(H)},pe=()=>{if(on(),P(()=>{g.forEach(n=>{c.length>0&&l(n,"animation-play-state","running")})}),c.length===0||g.length===0)W();else{const n=I()||0,i=w()||0,o=_()||1;isFinite(o)&&(H=setTimeout(ye,n+i*o+In)),Ue(g[0],()=>{on(),P(()=>{ve(),P(W)})})}},ve=()=>{g.forEach(n=>{L(n,"animation-duration"),L(n,"animation-delay"),L(n,"animation-play-state")})},Ae=()=>{S.forEach(n=>{n.play()}),(c.length===0||g.length===0)&&W()},Ce=()=>{b?(z(0),vn()):An()},bn=n=>new Promise(i=>{n!=null&&n.sync&&(q=!0,G(()=>q=!1,{oneTimeCallback:!0})),y||pn(),K&&(Ce(),K=!1),O&&(T=p.length+1,O=!1),G(()=>i(),{oneTimeCallback:!0}),p.forEach(o=>{o.play()}),b?Ae():pe(),M=!1}),be=()=>{p.forEach(n=>{n.stop()}),y&&(hn(),y=!1),Kn()},wn=(n,i)=>{const o=c[0];return o!==void 0&&(o.offset===void 0||o.offset===0)?o[n]=i:c=[{offset:0,[n]:i},...c],a};return a={parentAnimation:d,elements:g,childAnimations:p,id:fn,animationFinish:W,from:wn,to:(n,i)=>{const o=c[c.length-1];return o!==void 0&&(o.offset===void 0||o.offset===1)?o[n]=i:c=[...c,{offset:1,[n]:i}],a},fromTo:(n,i,o)=>wn(n,i).to(n,o),parent:oe,play:bn,pause:Ee,stop:be,destroy:Wn,keyframes:ce,addAnimation:se,addElement:ae,update:v,fill:ne,direction:Xn,iterations:re,duration:ie,easing:te,delay:ee,getWebAnimations:gn,getKeyframes:Qn,getFill:V,getDirection:D,getDelay:I,getIterations:_,getEasing:N,getDuration:w,afterAddRead:zn,afterAddWrite:Un,afterClearStyles:Jn,afterStyles:Zn,afterRemoveClass:Gn,afterAddClass:jn,beforeAddRead:Vn,beforeAddWrite:Nn,beforeClearStyles:Mn,beforeStyles:Hn,beforeRemoveClass:qn,beforeAddClass:Yn,onFinish:G,isRunning:On,progressStart:me,progressStep:ge,progressEnd:he}};export{Pe as L,Tn as _,Fe as a,Te as b,et as c,sn as d,Re as e,nt as g,Xe as t};

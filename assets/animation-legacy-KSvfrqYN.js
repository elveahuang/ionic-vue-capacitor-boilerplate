System.register(["./index-legacy-gArgE4YT.js"],(function(e,t){"use strict";var n,i;return{setters:[e=>{n=e.l,i=e.r}],execute:function(){
/*!
       * (C) Ionic http://ionicframework.com - MIT License
       */
let t;const o=e=>e.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),a=e=>{if(void 0===t){const n=void 0!==e.style.animationName,i=void 0!==e.style.webkitAnimationName;t=!n&&i?"-webkit-":""}return t},r=(e,t,n)=>{const i=t.startsWith("animation")?a(e):"";e.style.setProperty(i+t,n)},s=(e,t)=>{const n=t.startsWith("animation")?a(e):"";e.style.removeProperty(n+t)},l=[],f=(e=[],t)=>{if(void 0!==t){const n=Array.isArray(t)?t:[t];return[...e,...n]}return e};e("c",(e=>{let t,c,d,m,h,u,p,g,y,v,E,$,A,b=[],C=[],T=[],k=!1,w={},S=[],D=[],L={},P=0,R=!1,x=!1,F=!0,N=!1,O=!0,W=!1;const I=e,K=[],j=[],M=[],q=[],z=[],Z=[],B=[],G=[],H=[],J=[],Q=[],U="function"==typeof AnimationEffect||void 0!==n&&"function"==typeof n.AnimationEffect,V="function"==typeof Element&&"function"==typeof Element.prototype.animate&&U,X=()=>Q,Y=e=>{ne(),e&&ie()},_=(e,t)=>{const n=t.findIndex((t=>t.c===e));n>-1&&t.splice(n,1)},ee=(e,t)=>(((null==t?void 0:t.oneTimeCallback)?j:K).push({c:e,o:t}),A),te=()=>(K.length=0,j.length=0,A),ne=()=>{if(V)Q.forEach((e=>{e.cancel()})),Q.length=0;else{const e=q.slice();i((()=>{e.forEach((e=>{s(e,"animation-name"),s(e,"animation-duration"),s(e,"animation-timing-function"),s(e,"animation-iteration-count"),s(e,"animation-delay"),s(e,"animation-play-state"),s(e,"animation-fill-mode"),s(e,"animation-direction")}))}))}},ie=()=>{Z.forEach((e=>{(null==e?void 0:e.parentNode)&&e.parentNode.removeChild(e)})),Z.length=0},oe=()=>void 0!==h?h:p?p.getFill():"both",ae=()=>void 0!==y?y:void 0!==u?u:p?p.getDirection():"normal",re=()=>R?"linear":void 0!==d?d:p?p.getEasing():"linear",se=()=>x?0:void 0!==v?v:void 0!==c?c:p?p.getDuration():0,le=()=>void 0!==m?m:p?p.getIterations():1,fe=()=>void 0!==E?E:void 0!==t?t:p?p.getDelay():0,ce=e=>{V?X().forEach((t=>{const n=t.effect;if(n.setKeyframes)n.setKeyframes(e);else{const i=new KeyframeEffect(n.target,e,n.getTiming());t.effect=i}})):me()},de=()=>{0!==P&&(P--,0===P&&((()=>{$e(),H.forEach((e=>e())),J.forEach((e=>e()));const e=F?1:0,t=S,n=D,i=L;q.forEach((e=>{const o=e.classList;t.forEach((e=>o.add(e))),n.forEach((e=>o.remove(e)));for(const t in i)i.hasOwnProperty(t)&&r(e,t,i[t])})),K.forEach((t=>t.c(e,A))),j.forEach((t=>t.c(e,A))),j.length=0,O=!0,F&&(N=!0),F=!0})(),p&&p.animationFinish()))},me=(t=!0)=>{ie();const n=(e=>(e.forEach((e=>{for(const t in e)if(e.hasOwnProperty(t)){const n=e[t];if("easing"===t)e["animation-timing-function"]=n,delete e[t];else{const i=o(t);i!==t&&(e[i]=n,delete e[t])}}})),e))(b);q.forEach((o=>{if(n.length>0){const s=((e=[])=>e.map((e=>{const t=e.offset,n=[];for(const i in e)e.hasOwnProperty(i)&&"offset"!==i&&n.push(`${i}: ${e[i]};`);return`${100*t}% { ${n.join(" ")} }`})).join(" "))(n);$=void 0!==e?e:(e=>{let t=l.indexOf(e);return t<0&&(t=l.push(e)-1),`ion-animation-${t}`})(s);const f=((e,t,n)=>{var i;const o=(e=>{const t=void 0!==e.getRootNode?e.getRootNode():e;return t.head||t})(n),r=a(n),s=o.querySelector("#"+e);if(s)return s;const l=(null!==(i=n.ownerDocument)&&void 0!==i?i:document).createElement("style");return l.id=e,l.textContent=`@${r}keyframes ${e} { ${t} } @${r}keyframes ${e}-alt { ${t} }`,o.appendChild(l),l})($,s,o);Z.push(f),r(o,"animation-duration",`${se()}ms`),r(o,"animation-timing-function",re()),r(o,"animation-delay",`${fe()}ms`),r(o,"animation-fill-mode",oe()),r(o,"animation-direction",ae());const c=le()===1/0?"infinite":le().toString();r(o,"animation-iteration-count",c),r(o,"animation-play-state","paused"),t&&r(o,"animation-name",`${f.id}-alt`),i((()=>{r(o,"animation-name",f.id||null)}))}}))},he=(e=!0)=>{(()=>{B.forEach((e=>e())),G.forEach((e=>e()));const e=C,t=T,n=w;q.forEach((i=>{const o=i.classList;e.forEach((e=>o.add(e))),t.forEach((e=>o.remove(e)));for(const e in n)n.hasOwnProperty(e)&&r(i,e,n[e])}))})(),b.length>0&&(V?(q.forEach((e=>{const t=e.animate(b,{id:I,delay:fe(),duration:se(),easing:re(),iterations:le(),fill:oe(),direction:ae()});t.pause(),Q.push(t)})),Q.length>0&&(Q[0].onfinish=()=>{de()})):me(e)),k=!0},ue=e=>{if(e=Math.min(Math.max(e,0),.9999),V)Q.forEach((t=>{t.currentTime=t.effect.getComputedTiming().delay+se()*e,t.pause()}));else{const t=`-${se()*e}ms`;q.forEach((e=>{b.length>0&&(r(e,"animation-delay",t),r(e,"animation-play-state","paused"))}))}},pe=e=>{Q.forEach((e=>{e.effect.updateTiming({delay:fe(),duration:se(),easing:re(),iterations:le(),fill:oe(),direction:ae()})})),void 0!==e&&ue(e)},ge=(e=!0,t)=>{i((()=>{q.forEach((n=>{r(n,"animation-name",$||null),r(n,"animation-duration",`${se()}ms`),r(n,"animation-timing-function",re()),r(n,"animation-delay",void 0!==t?`-${t*se()}ms`:`${fe()}ms`),r(n,"animation-fill-mode",oe()||null),r(n,"animation-direction",ae()||null);const o=le()===1/0?"infinite":le().toString();r(n,"animation-iteration-count",o),e&&r(n,"animation-name",`${$}-alt`),i((()=>{r(n,"animation-name",$||null)}))}))}))},ye=(e=!1,t=!0,n)=>(e&&z.forEach((i=>{i.update(e,t,n)})),V?pe(n):ge(t,n),A),ve=()=>{k&&(V?Q.forEach((e=>{e.pause()})):q.forEach((e=>{r(e,"animation-play-state","paused")})),W=!0)},Ee=()=>{g=void 0,de()},$e=()=>{g&&clearTimeout(g)},Ae=()=>{q.forEach((e=>{s(e,"animation-duration"),s(e,"animation-delay"),s(e,"animation-play-state")}))},be=e=>new Promise((t=>{(null==e?void 0:e.sync)&&(x=!0,ee((()=>x=!1),{oneTimeCallback:!0})),k||he(),N&&(V?(ue(0),pe()):ge(),N=!1),O&&(P=z.length+1,O=!1);const n=()=>{_(o,j),t()},o=()=>{_(n,M),t()};ee(o,{oneTimeCallback:!0}),((e,t)=>{M.push({c:e,o:t})})(n,{oneTimeCallback:!0}),z.forEach((e=>{e.play()})),V?(Q.forEach((e=>{e.play()})),0!==b.length&&0!==q.length||de()):(()=>{if($e(),i((()=>{q.forEach((e=>{b.length>0&&r(e,"animation-play-state","running")}))})),0===b.length||0===q.length)de();else{const e=fe()||0,t=se()||0,n=le()||1;isFinite(n)&&(g=setTimeout(Ee,e+t*n+100)),((e,t)=>{let n;const i={passive:!0},o=()=>{n&&n()},a=n=>{e===n.target&&(o(),t(n))};e&&(e.addEventListener("webkitAnimationEnd",a,i),e.addEventListener("animationend",a,i),n=()=>{e.removeEventListener("webkitAnimationEnd",a,i),e.removeEventListener("animationend",a,i)})})(q[0],(()=>{$e(),i((()=>{Ae(),i(de)}))}))}})(),W=!1})),Ce=(e,t)=>{const n=b[0];return void 0===n||void 0!==n.offset&&0!==n.offset?b=[{offset:0,[e]:t},...b]:n[e]=t,A};return A={parentAnimation:p,elements:q,childAnimations:z,id:I,animationFinish:de,from:Ce,to:(e,t)=>{const n=b[b.length-1];return void 0===n||void 0!==n.offset&&1!==n.offset?b=[...b,{offset:1,[e]:t}]:n[e]=t,A},fromTo:(e,t,n)=>Ce(e,t).to(e,n),parent:e=>(p=e,A),play:be,pause:()=>(z.forEach((e=>{e.pause()})),ve(),A),stop:()=>{z.forEach((e=>{e.stop()})),k&&(ne(),k=!1),R=!1,x=!1,O=!0,y=void 0,v=void 0,E=void 0,P=0,N=!1,F=!0,W=!1,M.forEach((e=>e.c(0,A))),M.length=0},destroy:e=>(z.forEach((t=>{t.destroy(e)})),Y(e),q.length=0,z.length=0,b.length=0,te(),k=!1,O=!0,A),keyframes:e=>{const t=b!==e;return b=e,t&&ce(b),A},addAnimation:e=>{if(null!=e)if(Array.isArray(e))for(const t of e)t.parent(A),z.push(t);else e.parent(A),z.push(e);return A},addElement:e=>{if(null!=e)if(1===e.nodeType)q.push(e);else if(e.length>=0)for(let t=0;t<e.length;t++)q.push(e[t]);else console.error("Invalid addElement value");return A},update:ye,fill:e=>(h=e,ye(!0),A),direction:e=>(u=e,ye(!0),A),iterations:e=>(m=e,ye(!0),A),duration:e=>(V||0!==e||(e=1),c=e,ye(!0),A),easing:e=>(d=e,ye(!0),A),delay:e=>(t=e,ye(!0),A),getWebAnimations:X,getKeyframes:()=>b,getFill:oe,getDirection:ae,getDelay:fe,getIterations:le,getEasing:re,getDuration:se,afterAddRead:e=>(H.push(e),A),afterAddWrite:e=>(J.push(e),A),afterClearStyles:(e=[])=>{for(const t of e)L[t]="";return A},afterStyles:(e={})=>(L=e,A),afterRemoveClass:e=>(D=f(D,e),A),afterAddClass:e=>(S=f(S,e),A),beforeAddRead:e=>(B.push(e),A),beforeAddWrite:e=>(G.push(e),A),beforeClearStyles:(e=[])=>{for(const t of e)w[t]="";return A},beforeStyles:(e={})=>(w=e,A),beforeRemoveClass:e=>(T=f(T,e),A),beforeAddClass:e=>(C=f(C,e),A),onFinish:ee,isRunning:()=>0!==P&&!W,progressStart:(e=!1,t)=>(z.forEach((n=>{n.progressStart(e,t)})),ve(),R=e,k||he(),ye(!1,!0,t),A),progressStep:e=>(z.forEach((t=>{t.progressStep(e)})),ue(e),A),progressEnd:(e,t,n)=>(R=!1,z.forEach((i=>{i.progressEnd(e,t,n)})),void 0!==n&&(v=n),N=!1,F=!0,0===e?(y="reverse"===ae()?"normal":"reverse","reverse"===y&&(F=!1),V?(ye(),ue(1-t)):(E=(1-t)*se()*-1,ye(!1,!1))):1===e&&(V?(ye(),ue(t)):(E=t*se()*-1,ye(!1,!1))),void 0!==e&&(ee((()=>{v=void 0,y=void 0,E=void 0}),{oneTimeCallback:!0}),p||be()),A)}}))}}}));

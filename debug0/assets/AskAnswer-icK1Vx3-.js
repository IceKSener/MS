import{_ as Ce,g as ee,r as j,e as D,f as me,w as Se,h as d,i as Ae,o as f,c as h,a as o,u as m,t as B,F as H,j as J,n as v,k as C,v as q,l as ve,m as F,p as Te,q as ge,s as Be,d as qe,b as Ie,x as V,y as Me,z as Re,A as pe}from"./index-mom4kIaj.js";const te=""+new URL("../icon/del.svg",import.meta.url).href,$e=""+new URL("../icon/add.svg",import.meta.url).href,xe=""+new URL("../icon/chat.svg",import.meta.url).href,je=""+new URL("../icon/edit.svg",import.meta.url).href,Le=""+new URL("../icon/loading.svg",import.meta.url).href,Ne=""+new URL("../icon/copy.svg",import.meta.url).href,Ue=""+new URL("../icon/submit.svg",import.meta.url).href,Oe={class:"area"},De={class:"functions"},Fe=["title"],ze={class:"chats"},Ge=["title","onClick"],He=["onBlur","onKeyup"],Je=["onClick"],Ve={class:"mainArea"},Pe={class:"questionBar"},Xe=["title","onClick"],Ke={xmlns:"http://www.w3.org/2000/svg","xml:space":"preserve",viewBox:"0 0 1964 1963",overflow:"hidden"},Qe=["id"],We={fill:"#393C45"},Ye=["title"],Ze=["onClick"],et=["onClick"],tt={key:1},st={key:2,class:"refFiles"},nt=["onClick"],lt=["title","href"],it={class:"relQues"},ot={class:"quesItems"},rt=["title","onClick"],at=["onKeydown"],ut={__name:"AskAnswer",setup(dt){let p=ee().proxy.api,_=ee().proxy.config,k=ee().proxy.screen;const se=Blob&&URL.createObjectURL&&URL.revokeObjectURL,a=j(),c=D([]);let S=null;const L=j(),R=j(),ne=j();window.currentChat=a;const le=me(()=>a.value.messages.every(l=>l.fold)),y=j(!1),P=j(!1);let X=null,ie=null;window.addEventListener("mouseup",()=>P.value=!1),Se(c,()=>{y.value=c.length<=0?!1:y.value});const oe=me(()=>{const l=a.value;if(l.status!="ready")return!0;const e=l.messages;return e.length>0&&e[e.length-1].status=="unfinished"});window.chats=c;let A=()=>({Authorization:"Bearer "+_.loginStatus.userinfo.access_token,"Content-Type":"application/json"});function K(){const l=c.map(t=>t.session_id);function e(){let t=new Date().getTime();return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,function(i){let r=(t+Math.random()*16)%16|0;return t=Math.floor(t/16),(i=="x"?r:r&3|8).toString(16)})}let s=e();for(;l.indexOf(s)>=0;)s=e();return S=D({title:"",messages:[],session_id:s,input:"",rel_ques:[],status:"ready",editing:!1}),S}d.on("loadChats",()=>{de()}),d.on("clearChats",()=>{c.length=0,a.value=K()}),d.on("delAllChats",()=>{_e(!0)}),a.value=K();function re(){c.sort((l,e)=>e.timestamp-l.timestamp)}function ae(l,e=!0){if(a.value=l,l.status=="unload"){let s=function(n){n.forEach(i=>{l.messages.push(D({question:i.question,id:i.question_id,text:i.answer,status:"finished",controller:{abort(){}},fold:!1,ref_files:[],ref_show:!1}))}),l.status="ready",setTimeout(()=>R.value.scrollTo(0,Number.MAX_SAFE_INTEGER),300)},t=A();fetch(p.path+"/get_qas?session_id="+l.session_id,{method:"GET",headers:t}).then(n=>n.json()).then(n=>{if(n.code===401){d.emit("refreshToken",{onSuccess(i){t.Authorization="Bearer "+i,fetch(p.path+"/get_qas?session_id="+l.session_id,{method:"GET",headers:t}).then(r=>r.json()).then(r=>{if(r.code!==200)throw Error(r.code?r.message:"会话加载失败");s(r.data)}).catch(r=>{d.emit("dialog",{text:r.message}),console.error(r)})}});return}else if(n.code!==200)throw Error(n.code?n.message:"会话加载失败");s(n.data)}).catch(n=>{d.emit("dialog",{text:n.message}),console.error(n)})}k.type=="ver"&&e&&(y.value=!1),setTimeout(()=>R.value.scrollTo(0,Number.MAX_SAFE_INTEGER),300)}function ue(l,e=!1){function s(){let t=c.indexOf(l);c[t]==a.value&&(a.value=S),l.messages.forEach(n=>{n.controller.abort()}),c.splice(t,1),fetch(p.path+"/delete_session/"+l.session_id,{method:"DELETE",headers:A()})}e&&_.settings.comfBefDelSess?d.emit("dialog",{text:"确定删除该会话吗？",onYes(t){_.settings.comfBefDelSess=t,s()},checkText:"每次删除都提示确认",checkVal:!0}):s()}function _e(l=!1){function e(){fetch(p.path+"/delete_all_sessions",{method:"DELETE",headers:A()}),c.length=0,a.value=S}l?d.emit("dialog",{text:"确定清空所有会话吗？",onYes(){e()}}):e()}function de(){function l(s){let t=!1,n=[];if(c.length=0,s.forEach(i=>{c.push({title:i.name,session_id:i.session_id,timestamp:i.timestamp,messages:[],rel_ques:[],input:"",status:"unload",editing:!1}),n.push(i.session_id),i.session_id==S.session_id&&(t=!0)}),t){let i=function(){let E=new Date().getTime();return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,function(w){let M=(E+Math.random()*16)%16|0;return E=Math.floor(E/16),(w=="x"?M:M&3|8).toString(16)})},r=i();for(;n.indexOf(r)>=0;)r=i();S.session_id=r}a.value=S}if(!_.loginStatus.isLogged)return;let e=A();fetch(p.path+"/get_sessions",{method:"GET",headers:e}).then(s=>s.json()).then(s=>{if(s.code===401)d.emit("refreshToken",{onSuccess(t){e.Authorization="Bearer "+t,fetch(p.path+"/get_sessions",{method:"GET",headers:e}).then(n=>n.json()).then(n=>{if(n.code!==200)throw Error(n.code?n.message:"会话加载失败，请刷新重试");l(n.data||[])}).catch(n=>{d.emit("dialog",{text:n.message}),console.error(n)})}});else{if(s.code!==200)throw Error(s.code?s.message:"会话加载失败，请刷新重试");l(s.data||[])}}).catch(s=>{d.emit("dialog",{text:s.message}),console.error(s)})}let I=D("");function Q(l,e=void 0){if(e!==void 0){if(l.editing=!1,e&&l.title!=e){l.title=e;let s=JSON.stringify({session_id:l.session_id,name:e});fetch(p.path+"/rename_session",{method:"PUT",headers:A(),body:s})}}else I=l.title,l.editing=!0,pe(()=>{ie.getElementsByClassName("input")[0].focus()})}function ye(l,e){let s=l.target,t=s.getClientRects()[0],n=ne.value;n.style.top="",n.style.left="",n.style.bottom="",n.style.right="",k.type=="hor"?(n.style.top=t.bottom+"px",n.style.left=t.left+"px"):(n.style.top=t.top+"px",n.style.right=`calc(100% - ${t.right}px)`),X=e,ie=s.parentElement,P.value=!0}function W(l=void 0){l!=null&&(a.value.input=l,L.value.value=l),L.value.style.height="auto",L.value.style.height=L.value.scrollHeight+"px"}async function fe(l){l.preventDefault();const e=a.value,s=e.messages;s.length>0&&s[s.length-1].status=="unfinished"||await Y(e.input)&&(W(""),e.rel_ques.length=0)}async function Y(l,e=void 0,s=a.value){if(!_.loginStatus.isLogged)return d.emit("startLogin",{msg:"请登录后使用",err:!0}),!1;if(l=l.trim(),l.length<=0)return!1;let t=A(),n;try{n=JSON.parse(p.reqBodyArg)}catch{d.emit("dialog",{text:"请求体参数解析错误，请检测是否是正确的json"})}if(c.indexOf(s)<0){s.title=l,s.timestamp=new Date().getTime().toFixed(),s.status="prepost";try{let u=JSON.stringify({session_id:s.session_id,name:s.title}),x=await fetch(p.path+"/add_session",{method:"POST",headers:t,body:u});if(x=await x.json(),x.code===401)return d.emit("refreshToken",{onSuccess(){Y(l,void 0,s)},onFail(){s.status="ready"}}),!0;if(x.code!==201)throw Error(x.code?x.message:"会话创建失败，请刷新重试")}catch(u){return d.emit("dialog",{text:u.message}),console.error(u),s.status="ready",!1}s.status="ready",c.push(s),re(),K()}let i=D({question:l,id:null,text:"",status:"unfinished",controller:new AbortController,fold:!1,ref_files:[],ref_show:!1}),r="";e?ce(s,e,i):s.messages.push(i);let E=[];E.push({role:"user",content:l}),n.messages=n.messages||E,n.session_id=n.session_id||s.session_id,n.model=n.model||"qwen2.5-math-7b-instruct",fetch(p.path+"/v1/chat/completions",{signal:i.controller.signal,method:"POST",headers:t,body:JSON.stringify(n)}).then(u=>{if(u.status===401){d.emit("refreshToken",{onSuccess(){Y(l,i,s)},onFail(){r="[登录过期，请重新登录]",i.status="error"}});return}else if(!u.ok)throw Error(u.status+": "+u.statusText);let x=new Worker("./js/test.js");x.onerror=b=>console.error(b),x.postMessage("");const z=u.body.getReader(),U=new TextDecoder;let T="";function $(){z.read().then(({done:b,value:be})=>{if(b){i.status="finished";return}T+=U.decode(be,{stream:!0});let Z=0,O=0;for(;O=T.indexOf("}",Z)+1,O!=0;)try{let G=JSON.parse(T.substring(0,O));if(i.id=G.id,G.final){s.timestamp=G.created,re(),i.status="finished",we(i,s);return}r+=G.choices[0].message.content,T=T.substring(O),Z=0}catch{Z=O}$()}).catch(b=>{if(b.name==="AbortError"){r="",i.status="finished";return}r+="[解析异常]",i.status="error",console.error(b)})}$()}).catch(u=>{if(u.name==="AbortError"){r="",i.status="finished";return}r+="[请求异常]",i.status="error",console.error(u)});let g=0,w=0,M="";const N=20;if(_.settings.printByWord){let b=function(){i.text!=M&&(i.text=M),pe(()=>{w!==null&&(w=setTimeout(b,1e3/N))})},u="",x=!0;const z=1/N*_.settings.charPerSecond;let U=0,T=0,$=0;T=setInterval(()=>{if(g>=1&&x&&(setTimeout(()=>R.value.scrollTo(0,Number.MAX_SAFE_INTEGER),500),x=!1),g<r.length)u=r.substring(g,g+z+U),M+=u,g+=u.length,U=(z+U)%1;else if(i.status!="unfinished"){if(g<r.length){$=0;return}else if($<5){$++;return}clearInterval(T),i.text=M,clearInterval(w),w=null}},1e3/N),w=setTimeout(b,1e3/N)}else w=setInterval(()=>{i.text!=r&&(i.text=r,g++,g==1&&r.length>0&&setTimeout(()=>R.value.scrollTo(0,Number.MAX_SAFE_INTEGER),500)),i.status!="unfinished"&&(i.text=r,clearInterval(w))},1e3/N);return!0}function we(l,e=a.value){fetch(p.path+"/v1/related_questions",{signal:l.controller.signal,method:"POST",headers:A(),body:JSON.stringify({question:l.question})}).then(s=>{if(s.status!=200)throw Error(s.status+": "+s.statusText);return s.json()}).then(s=>{s.status=="success"&&(e.rel_ques=s.related_questions||[],setTimeout(()=>R.value.scrollTo(0,Number.MAX_SAFE_INTEGER),500))}).catch(s=>{console.error(s)}),fetch(p.path+"/v1/reference_files?question_id="+l.id,{signal:l.controller.signal,method:"GET",headers:{Authorization:"Bearer "+_.loginStatus.userinfo.access_token}}).then(s=>{if(s.status!=200)throw Error(s.status+": "+s.statusText);return s.json()}).then(s=>{s.status=="success"&&(l.ref_files=s.reference_files)}).catch(s=>{console.error(s)})}function ce(l,e,s=void 0,t=!1){function n(i,r,E=void 0){r.controller.abort();let g=i.messages.indexOf(r);if(E)i.messages.splice(g,1,E);else{if(i.messages.length==1){ue(i);return}if(r.status!="error"){let w=JSON.stringify({session_id:i.session_id,question_id:i.messages[g].id});fetch(p.path+"/delete_qa",{method:"DELETE",body:w,headers:A()})}i.messages.splice(g,1)}return g}t&&_.settings.comfBefDelQues&&e.status!="error"?d.emit("dialog",{text:"确认要删除该轮提问？",onYes(i){_.settings.comfBefDelQues=i,n(l,e,s)},checkText:"每次删除都提示确认",checkVal:!0}):n(l,e,s)}function ke(){le.value?a.value.messages.forEach(l=>{l.fold=!1}):a.value.messages.forEach(l=>{l.fold=!0})}async function Ee(l){l&&(await navigator.clipboard.writeText(l),d.emit("dialog",{text:"复制成功"}))}function he(l,e){if(l.messages.length<=0)return;let s=null,t="";if(e==="markdown")t=".md",s="",l.messages.forEach(n=>{n.status=="finished"&&(s+=`**${n.question}**

`,s+=n.text+`

`,n.ref_files.length>0&&(s+="`参考文档`\n\n",n.ref_files.forEach(i=>{s+=`#### [*${i.name}*](${i.url})

`})),s+=`---

`)});else if(e==="json"){t=".json";let n=l.messages.filter(r=>r.status=="finished").map(r=>({question:r.question,question_id:r.id,answer:r.text,timestamp:r.timestamp,reference_files:r.ref_files})),i={name:l.title,session_id:l.session_id,questions:n};s=JSON.stringify(i)}if(s){let n=document.createElement("a");s=new Blob([s]);let i=URL.createObjectURL(s);n.href=i,n.download=`${l.session_id}${t}`,n.click(),URL.revokeObjectURL(i)}}return de(),(l,e)=>{const s=Ae("Markdown");return f(),h("div",Oe,[o("div",{class:v(["chatsBar",m(k).type,{show:c.length>0,active:y.value}])},[o("div",De,[m(k).type=="hor"?(f(),h("div",{key:0,class:"toggleBar buttonEffect",onClick:e[0]||(e[0]=t=>y.value=!y.value),title:y.value?"收回":"展开"},B(y.value?"<":">"),9,Fe)):(f(),h("div",{key:1,class:"toggleBar buttonEffect",onClick:e[1]||(e[1]=t=>y.value=!1),title:"关闭"},e[13]||(e[13]=[o("img",{src:te,alt:" X"},null,-1)]))),o("div",{class:"addButton buttonEffect",onClick:e[2]||(e[2]=t=>ae(m(S))),title:"创建新会话"},e[14]||(e[14]=[o("img",{src:$e,alt:"add"},null,-1),o("div",null,"创建新会话",-1)]))]),o("div",ze,[(f(!0),h(H,null,J(c,t=>(f(),h("div",{key:t.timestamp,class:v(["chatItem",{buttonEffect:!t.editing,active:a.value==t}]),title:t.title,onClick:n=>ae(t)},[e[15]||(e[15]=o("img",{src:xe,alt:"C",class:"chatIcon"},null,-1)),C(o("span",{class:"text"},B(t.title),513),[[q,!t.editing]]),C(o("input",{type:"text",class:"input",onClick:e[3]||(e[3]=F(()=>{},["stop"])),"onUpdate:modelValue":e[4]||(e[4]=n=>Te(I)?I.value=n:I=n),onBlur:n=>Q(t,m(I)),onKeyup:ge(n=>Q(t,m(I)),["enter"])},null,40,He),[[q,t.editing],[ve,m(I)]]),C(o("img",{src:Be,alt:"...",class:"menuButton buttonEffect",onClick:F(n=>ye(n,t),["stop"]),title:"会话设置"},null,8,Je),[[q,!t.editing]])],10,Ge))),128)),C(o("div",{class:"chatMenu",ref_key:"chatMenu",ref:ne},[o("div",{class:"chatMenuItem buttonEffect",onClick:e[5]||(e[5]=F(t=>Q(m(X),void 0),["stop"])),title:"重命名"},e[16]||(e[16]=[o("img",{src:je,alt:"",class:"icon"},null,-1),o("span",{class:"text"},"重命名",-1)])),o("div",{class:"chatMenuItem buttonEffect",onClick:e[6]||(e[6]=F(t=>ue(m(X),!0),["stop"])),title:"删除会话"},e[17]||(e[17]=[o("img",{src:te,alt:"",class:"icon"},null,-1),o("span",{class:"text"},"删除会话",-1)]))],512),[[q,P.value]])])],2),C(o("img",{src:xe,alt:"对话",class:"floatChat buttonEffect",onClick:e[7]||(e[7]=t=>y.value=!y.value)},null,512),[[q,m(k).type=="ver"&&c.length>0]]),o("div",Ve,[o("div",{class:v(["loading",{show:a.value.status=="unload"}])},e[18]||(e[18]=[o("img",{class:"autoInvert",src:Le,alt:""},null,-1),qe(" 加载中 ")]),2),o("div",{class:v(["startArea",{hasContent:a.value.messages.length>0||a.value.status=="unload"}])},e[19]||(e[19]=[o("div",{class:"title"},[o("img",{src:Ie,alt:"MathSolve"}),o("span",null,"你的数学解题助手")],-1),o("div",{class:"subtitle"},"一键求解，轻松解决你的数学烦恼",-1)]),2),o("div",{class:v(["answersArea",{hasContent:a.value.messages.length>0||a.value.status=="unload"}])},[o("div",{class:v(["toolbar",m(k).type])},[m(se)?(f(),h("div",{key:0,onClick:e[8]||(e[8]=t=>he(a.value,"markdown")),class:"buttonEffect"},"导出会话.md")):V("",!0),m(se)?(f(),h("div",{key:1,onClick:e[9]||(e[9]=t=>he(a.value,"json")),class:"buttonEffect"},"导出会话.json")):V("",!0),o("div",{onClick:e[10]||(e[10]=t=>ke()),class:"buttonEffect"},"全部"+B(le.value?"展开":"折叠"),1)],2),o("div",{class:v(["answers",m(k).type]),ref_key:"answers",ref:R},[(f(!0),h(H,null,J(a.value.messages,(t,n)=>(f(),h("div",{class:v(["msg",t.status])},[o("div",Pe,[o("div",{class:v(["foldButton","buttonEffect",{folded:t.fold}]),title:t.fold?"展开":"折叠",onClick:i=>t.fold=!t.fold},[(f(),h("svg",Ke,[o("defs",null,[o("mask",{id:"mask"+n},e[20]||(e[20]=[o("rect",{width:"100%",height:"100%",fill:"white"},null,-1),o("path",{class:"turn",stroke:"black","stroke-linejoin":"round","stroke-miterlimit":"10","stroke-width":"150",d:"m982 926 632 791h-319l-313-391-313 391H350Z"},null,-1)]),8,Qe)]),o("g",We,[o("path",{d:"M287 1174h1390v203H287zM287 786h1390v203H287zM287 398h1390v203H287z",style:Me(`mask:url(#mask${n})`)},null,4),e[21]||(e[21]=o("path",{class:"turn",d:"m982 982 562 702h-284l-278-347-278 347H420Z"},null,-1))])]))],10,Xe),o("div",{class:v(["question",{folded:t.fold,thinking:t.fold&&t.status==="unfinished"}]),title:t.question},B(t.question),11,Ye),t.status=="finished"?(f(),h("img",{key:0,class:"questionBarButton buttonEffect",src:Ne,title:"复制答案为markdown",style:{"margin-right":"15px"},onClick:i=>Ee(t.text)},null,8,Ze)):V("",!0),o("img",{class:"questionBarButton buttonEffect",src:te,title:"删除",onClick:i=>ce(a.value,t,void 0,!0)},null,8,et)]),C(o("br",null,null,512),[[q,!t.fold]]),C(o("div",{class:v({foldable:!0,thinking:t.status==="unfinished"}),style:{display:"flex"}},[t.text.length>0?(f(),Re(s,{key:0,md:t.text,theme:m(_).settings.theme},null,8,["md","theme"])):(f(),h("div",tt," ... ")),t.ref_files.length>0?(f(),h("div",st,[o("div",{class:"filesTitle buttonEffect",onClick:i=>t.ref_show=!t.ref_show},B(t.ref_show?"∧":"∨")+" 参考文档 "+B(t.ref_show?"∧":"∨"),9,nt),o("div",{class:v(["filesItems",{show:t.ref_show}])},[(f(!0),h(H,null,J(t.ref_files,i=>(f(),h("a",{class:"filesItem",title:i.name,href:i.url,target:"_blank"},B(i.name),9,lt))),256))],2)])):V("",!0)],2),[[q,!t.fold]])],2))),256)),C(o("div",it,[e[22]||(e[22]=o("div",{class:"quesTitle"},"继续提问：",-1)),o("div",ot,[(f(!0),h(H,null,J(a.value.rel_ques,t=>(f(),h("div",{class:"quesItem buttonEffect",title:t,onClick:n=>W(t)},B(t),9,rt))),256))])],512),[[q,a.value.rel_ques.length>0]])],2)],2),o("div",{class:v(["requestArea",{hasContent:a.value.messages.length>0||a.value.status=="unload"}])},[o("div",{class:v(["request",m(k).type])},[C(o("textarea",{class:v(["requestbox",m(k).type]),"onUpdate:modelValue":e[11]||(e[11]=t=>a.value.input=t),placeholder:"输入问题，多行输入使用Shift+Enter换行",onKeydown:ge(F(fe,["exact"]),["enter"]),onInput:e[12]||(e[12]=t=>W()),ref_key:"inputTextarea",ref:L},null,42,at),[[ve,a.value.input]]),o("div",{class:v(["submitRow",m(k).type])},[o("img",{class:v(["submit",{buttonEffect:!oe.value,disable:oe.value}]),src:Ue,alt:"提问",onClick:fe},null,2)],2)],2)],2)])])}}},ct=Ce(ut,[["__scopeId","data-v-7c1fba7d"]]);export{ct as default};

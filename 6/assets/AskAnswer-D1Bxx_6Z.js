import{_ as M,g as x,u as j,r as T,a as E,o as p,c as f,b as o,w as O,v as V,n as r,d as c,e as D,f as F,F as I,h as L,t as P,i as R,j as z,k as J,l as K}from"./index-DpsHWp2i.js";const $={class:"question"},G={key:0},U={__name:"AskAnswer",setup(X){let A=x().proxy.api,m=x().proxy.config,i=x().proxy.screen;const _=j("answers"),h=T([]),u=T(""),q=s=>new Promise(e=>setTimeout(e,s));async function b(s){if(s=s.trim(),s.length<=0)return;if(!m.loginStatus.isLogged){J.emit("startLogin");return}let e=K({question:s,text:"",status:"unfinished"}),n="",t=[];t.push({role:"user",content:s}),fetch(A.path+"/v1/chat/completions",{method:"POST",headers:{Authorization:"Bearer "+m.loginStatus.userinfo.access,"Content-Type":"application/json"},body:JSON.stringify({model:"qwen2.5-math-7b-instruct",messages:t,max_tokens:1e3,temperature:1})}).then(d=>{console.log("成功获取响应"),console.log(d);const N=d.body.getReader(),B=new TextDecoder;let a="";function k(){N.read().then(({done:v,value:y})=>{if(console.log("读取字节 %dbytes",y.length),console.log(y),v){e.status="finished";return}a+=B.decode(y,{stream:!0}),console.log("目前处理字符串："+a);let w=0,l=0;for(;l=a.indexOf("}",w)+1,l!=0;)try{let S=JSON.parse(a.substring(0,l));if(S.final){e.status="finished";return}n+=S.choices[0].message.content,a=a.substring(l),w=0}catch{w=l}k()}).catch(v=>{n+="请求出错，分块问题",e.status="error",console.error(v)})}k()}).catch(d=>{n+="请求出错,链接问题",e.status="error",console.error(d)}),h.value.push(e),setTimeout(()=>_.value.scrollTo(0,Number.MAX_SAFE_INTEGER),100);let g=0;for(;;){if(g<n.length)e.text+=n.at(g),++g;else if(e.status!="unfinished")break;await q(1e3/m.settings.charPerSecond)}}function C(){h.value.length=0}return(s,e)=>{const n=E("Markdown");return p(),f("div",{class:r(["area",c(i).type])},[o("div",{class:r(["request",c(i).type])},[O(o("textarea",{type:"text",class:r(["requestbox",c(i).type]),"onUpdate:modelValue":e[0]||(e[0]=t=>u.value=t),placeholder:"输入问题",onKeyup:e[1]||(e[1]=D(F(t=>b(u.value),["exact"]),["enter"]))},null,34),[[V,u.value]]),o("div",{class:r(["submit",c(i).type]),onClick:e[2]||(e[2]=t=>b(u.value))},"提问",2)],2),o("div",{class:r(["answers",c(i).type]),ref_key:"answers",ref:_},[o("div",null,[o("button",{onClick:C},"清空")]),(p(!0),f(I,null,L(h.value,t=>(p(),f("div",{class:r(["chat",t.status])},[o("div",$,P(t.question),1),R(n,{class:"answer",md:t.text},null,8,["md"]),t.status=="unfinished"?(p(),f("div",G,"......")):z("",!0)],2))),256))],2)],2)}}},Q=M(U,[["__scopeId","data-v-fe428d4b"]]);export{Q as default};

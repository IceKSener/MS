import{_ as C,g as _,r as b,c as s,o as n,F as x,j as v,m as y,b as f,t as r,u as t,a as c,w as p,p as k,n as V}from"./index-CObHgAJA.js";const w={key:0,class:"class"},U={key:0},$=["onClick"],F={class:"text"},E={class:"input switch"},B=["checked"],M=["onClick"],N={class:"text"},S={key:2,class:"item range"},D={class:"text"},I=["min","max","step","onUpdate:modelValue","onMouseup"],T={key:3,class:"item text"},j={class:"text"},z=["onUpdate:modelValue","onChange"],A=["onUpdate:modelValue","onChange"],L=["onClick"],P={__name:"Settings",setup(q){let l=_().proxy.config.settings,i=_().proxy.set_dscp,g=_().proxy.screen,o=b({});return i.forEach(h=>{h.items.forEach(d=>{(d.type==="range"||d.type==="text")&&(o[d.key]=l[d.key])})}),(h,d)=>(n(),s("div",{class:V(["area",t(g).type])},[(n(!0),s(x,null,v(t(i),u=>(n(),s("div",null,[!u.show||u.show()?(n(),s("div",w,[f(r(u.name)+" ",1),(n(!0),s(x,null,v(u.items,e=>(n(),s("div",null,[!e.show||e.show()?(n(),s("div",U,[e.type=="bool"?(n(),s("div",{key:0,class:"item bool",onClick:a=>t(l)[e.key]=!t(l)[e.key]},[c("div",F,r(e.text||e.textF(t(l)[e.key])),1),c("label",E,[c("input",{type:"checkbox",checked:t(l)[e.key],disabled:""},null,8,B),d[0]||(d[0]=c("span",{class:"slider"},null,-1))])],8,$)):e.type=="button"?(n(),s("div",{key:1,class:"item button buttonEffect",onClick:a=>e.func()},[c("div",N,r(e.text),1)],8,M)):e.type=="range"?(n(),s("div",S,[c("div",D,r(e.text||e.textF(t(o)[e.key])),1),p(c("input",{class:"input",type:"range",min:e.min,max:e.max,step:e.step||1,"onUpdate:modelValue":a=>t(o)[e.key]=a,onMouseup:a=>t(l)[e.key]=t(o)[e.key]},null,40,I),[[k,t(o)[e.key],void 0,{number:!0}]])])):e.type=="text"?(n(),s("div",T,[c("div",j,r(e.text||e.textF(t(o)[e.key])),1),e.multiline?p((n(),s("textarea",{key:0,class:"input","onUpdate:modelValue":a=>t(o)[e.key]=a,onChange:a=>t(l)[e.key]=t(o)[e.key]},null,40,z)),[[k,t(o)[e.key]]]):p((n(),s("input",{key:1,class:"input",type:"text","onUpdate:modelValue":a=>t(o)[e.key]=a,onChange:a=>t(l)[e.key]=t(o)[e.key]},null,40,A)),[[k,t(o)[e.key]]]),e.reset?(n(),s("button",{key:2,onClick:a=>t(o)[e.key]=t(l)[e.key]=e.reset},"重置",8,L)):y("",!0)])):y("",!0)])):y("",!0)]))),256))])):y("",!0)]))),256))],2))}},H=C(P,[["__scopeId","data-v-c5899ceb"]]);export{H as default};

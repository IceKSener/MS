import{_ as A,g as I,h as B,c as u,o as c,j as M,u as E,e as f,r as P,s as y,x as z,i as e,w as v,l as j,y as H,z as G,A as N,v as k,B as R,F,k as D,t as x,C as Z,D as K,E as q,m as J,n as L,G as Q,K as W}from"./index-C0mhe2zO.js";const X=`# 知识库上传说明\r
\r
1.上传文件的格式必须为jsonl格式。\r
\r
2.文件内知识格式要求\r
\r
​	①文件中每一条知识占用一条json；每一个知识概念占用2~5个json；如“一元二次方程”这一知识概念占用5个json的示例如下：\r
\r
\`\`\`json\r
{"id": 2096, "label": "virtual", "name": "一元二次方程", "desc": "", "relation": "方程"}\r
\r
{"id": 2097, "label": "定义", "name": "一元二次方程的定义", "desc": "形如$ax^2+bx+c=0$（$a\\\\neq 0$）的方程称为一元二次方程，其中$a$、$b$、$c$为常数，$x$为未知数。解这类方程需要运用求根公式或因式分解等方法。", "relation": "一元二次方程"}\r
\r
{"id": 2098, "label": "性质", "name": "一元二次方程的性质", "desc": "1.求根公式：$x=\\\\frac{-b\\\\pm\\\\sqrt{b^2-4ac}}\\n{2a}$\\n2.判别式：$\\\\Delta=b^2-4ac$决定根的性质（$\\\\Delta>0$两实根，$\\\\Delta=0$重根，$\\\\Delta<0$无实根）\\n3.根与系数关系：$x_1+x_2=-\\\\frac{b}{a}$，$x_1x_2=\\\\frac{c}{a}$（韦达定理）\\n4.图像特征：对应抛物线$y=ax^2+bx+c$的顶点坐标为$(-\\\\frac{b}{2a},c-\\\\frac{b^2}{4a})$", "relation": "一元二次方程"}\r
\r
{"id": 2099, "label": "应用", "name": "一元二次方程的应用", "desc": "1.解决抛物线运动问题\\n2.计算几何图形面积\\n3.经济学中的最优化问题\\n4.工程中的设计计算\\n5.生活中的实际问题建模（如利润最大化）", "relation": "一元二次方程"}\r
\r
{"id": 2100, "label": "解题技巧", "name": "一元二次方程的解法", "desc": "1.因式分解法：将方程化为$(x-p)(x-q)=0$形式\\n2.配方法：通过配方得到$(x+h)^2=k$的形式\\n3.公式法：直接套用求根公式$x=\\\\frac{-b\\\\pm\\\\sqrt{b^2-4ac}}{2a}$\\n4.图像法：绘制抛物线观察与$x$轴交点\\n5.判别式分析：预判方程的解的情况\\n6.韦达定理应用：不解方程求根的对称式", "relation": "一元二次方程"}\r
\`\`\`\r
\r
​	②文件中每一个   \`数学知识概念\`占用一个json，如\r
\r
\`\`\`json\r
{"id": 2096, "label": "virtual", "name": "一元二次方程", "desc": "", "relation": "方程"}\r
\`\`\`\r
\r
​	其中，id字段   \`非必须\`；label字段为virtual（规定）；desc字段为空字符串；relation字段的值为该知识概念的更高层次的知识概念，如“一元一次方程”的更高层次的知识概念为“方程”，其中，relation字段的值应确保在内置知识库中或用户知识库中能够查找到，否则知识概念的relation字段应该也为空字符串。\r
\r
​	③文件中每一个数学知识概念还应该至少包含label字段为“定义”、“性质”、“应用”、“解题技巧”中其一（最好全部包含）的知识属性文档。如：\r
\r
\`\`\`json\r
{"id": 2097, "label": "定义", "name": "一元二次方程的定义", "desc": "形如$ax^2+bx+c=0$（$a\\\\neq 0$）的方程称为一元二次方程，其中$a$、$b$、$c$为常数，$x$为未知数。解这类方程需要运用求根公式或因式分解等方法。", "relation": "一元二次方程"}\r
\`\`\`\r
\r
​	其中，id字段   \`非必须\`；label字段为“定义”、“性质”、“应用”、“解题技巧”中其一；desc中为相关的描述字段，其中，数学公式要求为latex格式语法，且每一个公式周围用$包裹；relation字段为对应知识概念的name字段。\r
\r
​	④用户应该确保知识不重复出现。\r
\r
​	⑤id字段可以全部不加，加了无影响。\r
\r
​	⑥非法文件格式和非法文件内容将会导致上传失败。\r
\r
​	⑦删除某一条知识会导致整个知识群（相关的2~5条知识）都会被删除。\r
\r
\r
`,ee={class:"usageArea"},te={__name:"Usage",setup(T){const d=I().proxy.config.settings;return(_,l)=>{const i=B("Markdown");return c(),u("div",ee,[M(i,{class:"md",md:E(X),theme:E(d).theme},null,8,["md","theme"])])}}},ne=A(te,[["__scopeId","data-v-fc51ff14"]]),se={class:"panelArea"},le={class:"funcs"},ae={class:"funcSearch"},oe={class:"items"},re={class:"loading"},ie={border:"1",cellspacing:"0"},ce=["title"],de=["title"],ue=["title"],pe=["title"],me=["title"],_e={style:{"max-width":"55px"}},he=["onClick"],xe={class:"pages"},ve=["value"],V=30,fe={__name:"Library",setup(T){const d=I().proxy.F,_=I().proxy.config.settings,l=f(),i=f([]),r=P({items:i,ready:!1});async function h(){r.ready=!1;let s=await d.myFetchApi("/knowledge/get_user_knowledges",{expectCodes:[200],errorText:"用户知识库获取失败，请刷新重试"});s&&(i.value=s.data,r.items===i&&(r.ready=!0)),r.ready=!0}h(),y.on("loginSuccess",h);const p=f(0),g=z(()=>{let s=[];for(let t=0;t<r.items.length;t+=V)s.push(r.items.slice(t,t+V));return s});y.on("logoutDone",()=>{i.value.length=w.value.length=0});function C(){const s=l.value;s.removeEventListener("change",C);let t=[],$=[];for(let a of s.files){window.file=a;let b=new FormData;b.append("file",a),$.push(d.myFetchApi("/knowledge/upload_jsonl_knowledges",{expectCodes:[200,201],onError(O,Y){t.push(a.name+" : "+O),console.error(Y)}},{data:b}))}Promise.all($).then(()=>{t.length>0?y.emit("dialog",{text:`文件上传失败:
`+t.join(`
`)}):y.emit("dialog",{text:"上传成功"}),s.files.length>t.length&&h()})}function m(){const s=l.value;s.value="",s.addEventListener("change",C),s.click()}const n=f(""),w=f([]);async function o(){let s=n.value.trim();if(s){r.ready=!1;try{let t=await d.myFetchApi("/knowledge/query_user_knowledge?part_name="+s,{expectCodes:[200],errorText:`"${s}" 查询失败`});t&&(w.value=t.data,r.items=w)}finally{r.ready=!0}}else r.items=i}function S(s){function t(){d.myFetchApi("/knowledge/del_knowledge/"+s.id,{expectCodes:[200],errorText:`${s.name}删除失败`},{method:"DELETE"}).then($=>{$&&(h(),r.items===w&&o())})}_.comfBefDelKnow?y.emit("dialog",{text:"确定删除该条知识吗？",onYes($){_.comfBefDelKnow=$,t()},checkText:"每次删除都提示确认",checkVal:!0,type:"yes_no"}):t()}return(s,t)=>{const $=B("Markdown");return c(),u("div",se,[e("div",le,[e("input",{type:"file",style:{display:"none"},accept:".jsonl",multiple:"",ref_key:"fileSelector",ref:l},null,512),e("div",{class:"func buttonEffect",onClick:m},t[2]||(t[2]=[e("img",{src:H,alt:"+"},null,-1),j(" 上传文件")])),e("div",ae,[e("div",{class:"text buttonEffect",onClick:o},"知识查询"),v(e("input",{class:"input",type:"text","onUpdate:modelValue":t[0]||(t[0]=a=>n.value=a),onKeyup:N(o,["enter"]),placeholder:"留空列出所有数据"},null,544),[[G,n.value]])])]),e("div",oe,[v(e("div",re,t[3]||(t[3]=[e("img",{class:"autoInvert",src:R,alt:""},null,-1),j(" 加载中 ")]),512),[[k,!r.ready]]),e("table",ie,[t[4]||(t[4]=e("thead",{style:{position:"sticky",top:"0","background-color":"var(--bgColor)","z-index":"5"}},[e("tr",null,[e("th",{width:"80px"},"id"),e("th",{width:"120px"},"label"),e("th",{width:"120px"},"name"),e("th",null,"desc"),e("th",{width:"120px"},"relation"),e("th",{width:"55px"},"操作")])],-1)),e("tbody",null,[(c(!0),u(F,null,D(g.value[p.value],a=>(c(),u("tr",null,[e("td",{style:{"max-width":"80px"},title:a.id},x(a.id),9,ce),e("td",{style:{"max-width":"120px"},title:a.label},x(a.label),9,de),e("td",{style:{"max-width":"120px"},title:a.name},x(a.name),9,ue),e("td",{style:{"max-width":"0"},title:a.desc},[M($,{style:{"max-height":"100px"},md:a.desc},null,8,["md"])],8,pe),e("td",{style:{"max-width":"120px"},title:a.relation},x(a.relation),9,me),e("td",_e,[e("div",{class:"delBtn buttonEffect",onClick:b=>S(a)},"删除",8,he)])]))),256))])])]),v(e("div",xe,[t[5]||(t[5]=e("div",{style:{"margin-right":"10px"}},"页数",-1)),v(e("select",{class:"pageTurn","onUpdate:modelValue":t[1]||(t[1]=a=>p.value=a)},[(c(!0),u(F,null,D(g.value,(a,b)=>(c(),u("option",{value:b},x(b+1),9,ve))),256))],512),[[Z,p.value]])],512),[[k,g.value.length>1]])])}}},ge=A(fe,[["__scopeId","data-v-c7628793"]]),$e={class:"panelArea"},ye={class:"funcs"},we={class:"funcSearch"},be={class:"items"},ke={class:"loading"},Ce={border:"1",cellspacing:"0"},Ee=["title"],Ie=["title"],Fe=["title"],De=["title"],Se=["title"],Ae={class:"pages"},Te=["value"],U=30,je={__name:"LibraryInter",setup(T){const d=I().proxy.F,_=f([]),l=P({items:_,ready:!1});window.currShow=l;async function i(){l.ready=!1;let m=await d.myFetchApi("/knowledge/get_inner_knowledges",{expectCodes:[200],errorText:"内部知识库获取失败，请刷新重试"});m&&(_.value=m.data),l.ready=!0}i(),y.on("loginSuccess",i);const r=f(0),h=z(()=>{let m=[];console.log(l);for(let n=0;n<l.items.length;n+=U)m.push(l.items.slice(n,n+U));return m}),p=f(""),g=f([]);y.on("logoutDone",()=>{_.value.length=g.value.length=0});async function C(){let m=p.value.trim();if(m){l.ready=!1;try{let n=await d.myFetchApi("/knowledge/query_inner_knowledge?part_name="+m,{expectCodes:[200],errorText:`"${m}" 查询失败`});n&&(g.value=n.data,l.items=g)}finally{l.ready=!0}}else l.items=_}return(m,n)=>{const w=B("Markdown");return c(),u("div",$e,[e("div",ye,[e("div",we,[e("div",{class:"text buttonEffect",onClick:C},"知识查询"),v(e("input",{class:"input",type:"text","onUpdate:modelValue":n[0]||(n[0]=o=>p.value=o),onKeyup:N(C,["enter"]),placeholder:"留空列出所有数据"},null,544),[[G,p.value]])])]),e("div",be,[v(e("div",ke,n[2]||(n[2]=[e("img",{class:"autoInvert",src:R,alt:""},null,-1),j(" 加载中 ")]),512),[[k,!l.ready]]),e("table",Ce,[n[3]||(n[3]=e("thead",{style:{position:"sticky",top:"0","background-color":"var(--bgColor)","z-index":"5"}},[e("tr",null,[e("th",{width:"80px"},"id"),e("th",{width:"120px"},"label"),e("th",{width:"120px"},"name"),e("th",null,"desc"),e("th",{width:"120px"},"relation")])],-1)),e("tbody",null,[(c(!0),u(F,null,D(h.value[r.value],o=>(c(),u("tr",null,[e("td",{style:{"max-width":"80px"},title:o.id},x(o.id),9,Ee),e("td",{style:{"max-width":"120px"},title:o.label},x(o.label),9,Ie),e("td",{style:{"max-width":"120px"},title:o.name},x(o.name),9,Fe),e("td",{style:{"max-width":"0"},title:o.desc},[M(w,{style:{"max-height":"100px"},md:o.desc},null,8,["md"])],8,De),e("td",{style:{"max-width":"120px"},title:o.relation},x(o.relation),9,Se)]))),256))])])]),v(e("div",Ae,[n[4]||(n[4]=e("div",{style:{"margin-right":"10px"}},"页数",-1)),v(e("select",{class:"pageTurn","onUpdate:modelValue":n[1]||(n[1]=o=>r.value=o)},[(c(!0),u(F,null,D(h.value,(o,S)=>(c(),u("option",{value:S},x(S+1),9,Te))),256))],512),[[Z,r.value]])],512),[[k,h.value.length>1]])])}}},Be=A(je,[["__scopeId","data-v-ffc4e280"]]),Me={class:"panels"},Ke=["onClick"],qe={__name:"Knowledge",setup(T){const d=I().proxy.screen,_=[{name:"使用说明",component:ne},{name:"用户知识库",component:ge},{name:"内置知识库",component:Be}],l=K(_[1]),i=K(!1);return(r,h)=>(c(),u("div",{class:L(["area",E(d).type])},[v(e("img",{src:J,class:"floatBtn buttonEffect",onClick:h[0]||(h[0]=p=>i.value=!i.value)},null,512),[[k,E(d).type==="ver"]]),v(e("div",Me,[(c(),u(F,null,D(_,p=>e("div",{class:L(["panel","buttonEffect",{active:l.value.name===p.name}]),onClick:g=>(l.value=p,i.value=!1)},x(p.name),11,Ke)),64))],512),[[k,E(d).type==="hor"||i.value]]),(c(),q(W,{class:"content"},[(c(),q(Q(l.value.component)))],1024))],2))}},Ve=A(qe,[["__scopeId","data-v-cd648e60"]]);export{Ve as default};

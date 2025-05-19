import{g as I,h as j,c as u,o as c,j as B,u as E,_ as M,e as f,r as U,s as $,x as z,w as v,i as e,v as k,l as T,y as G,z as H,A as N,B as R,F,k as D,t as x,C as Z,D as K,E as q,m as J,n as L,G as Q,K as W}from"./index-Bmi2DaAT.js";const X=`# 知识库上传说明\r
\r
1.上传文件的格式必须为jsonl格式。\r
\r
2.文件内知识格式要求\r
\r
​	①文件中每一条知识占用一条json；每一个知识概念占用5个json；如“一元二次方程”这一知识概念占用5个json的示例如下：\r
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
​	③文件中每一个数学知识概念还必须包含label字段为“定义”、“性质”、“应用”、“解题技巧”的知识属性文档，如：\r
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
`,ee={class:"usageArea",style:{"overflow-y":"auto","scrollbar-width":"thin"}},te={__name:"Usage",setup(A){const d=I().proxy.config.settings;return(_,a)=>{const i=j("Markdown");return c(),u("div",ee,[B(i,{class:"md",md:E(X),theme:E(d).theme},null,8,["md","theme"])])}}},ne={class:"panelArea"},le={class:"loading"},se={class:"funcs"},ae={class:"funcSearch"},oe={class:"items"},re={border:"1",cellspacing:"0"},ie=["title"],ce=["title"],de=["title"],ue=["title"],pe=["title"],me={style:{"max-width":"55px"}},_e=["onClick"],he={class:"pages"},xe=["value"],V=30,ve={__name:"Library",setup(A){const d=I().proxy.F,_=I().proxy.config.settings,a=f(),i=f([]),l=U({items:i,ready:!1});async function h(){l.ready=!1;let s=await d.myFetchApi("/knowledge/get_user_knowledges",{expectCodes:[200],errorText:"用户知识库获取失败，请刷新重试"});s&&(i.value=s.data,l.items===i&&(l.ready=!0)),l.ready=!0}h(),$.on("loginSuccess",h);const p=f(0),y=z(()=>{let s=[];for(let t=0;t<l.items.length;t+=V)s.push(l.items.slice(t,t+V));return s});$.on("logoutDone",()=>{i.value.length=w.value.length=0});async function C(){const s=a.value;s.removeEventListener("change",C);let t=[],g=[];for(let r of s.files){let b=new FormData;b.append("file",r),g.push(d.myFetchApi("/knowledge/upload_jsonl_knowledges",{expectCodes:[200,201],onError(O,Y){t.push(r.name+" : "+O),console.error(Y)}},{data:b}))}l.ready=!1,await Promise.all(g),t.length>0?$.emit("dialog",{text:`文件上传失败:
`+t.join(`
`)}):$.emit("dialog",{text:"上传成功"}),s.files.length>t.length&&await h(),l.ready=!0}function m(){const s=a.value;s.value="",s.addEventListener("change",C),s.click()}const n=f(""),w=f([]);async function o(){let s=n.value.trim();if(s){l.ready=!1;try{let t=await d.myFetchApi("/knowledge/query_user_knowledge?part_name="+s,{expectCodes:[200],errorText:`"${s}" 查询失败`});t&&(w.value=t.data,l.items=w)}finally{l.ready=!0}}else l.items=i}function S(s){async function t(){l.ready=!1,await d.myFetchApi("/knowledge/del_knowledge/"+s.id,{expectCodes:[200],errorText:`${s.name}删除失败`},{method:"DELETE"})&&(await h(),l.items===w&&await o()),l.ready=!0}_.comfBefDelKnow?$.emit("dialog",{text:"确定删除该条知识吗？",onYes(g){_.comfBefDelKnow=g,t()},checkText:"每次删除都提示确认",checkVal:!0,type:"yes_no"}):t()}return(s,t)=>{const g=j("Markdown");return c(),u("div",ne,[v(e("div",le,t[2]||(t[2]=[e("img",{class:"autoInvert",src:G,alt:""},null,-1),T(" 加载中 ")]),512),[[k,!l.ready]]),e("div",se,[e("input",{type:"file",style:{display:"none"},accept:".jsonl",multiple:"",ref_key:"fileSelector",ref:a},null,512),e("div",{class:"func buttonEffect",onClick:m},t[3]||(t[3]=[e("img",{src:H,alt:"+"},null,-1),T(" 上传文件")])),e("div",ae,[e("div",{class:"text buttonEffect",onClick:o},"知识查询"),v(e("input",{class:"input",type:"text","onUpdate:modelValue":t[0]||(t[0]=r=>n.value=r),onKeyup:R(o,["enter"]),placeholder:"留空列出所有数据"},null,544),[[N,n.value]])])]),e("div",oe,[e("table",re,[t[4]||(t[4]=e("thead",{style:{position:"sticky",top:"0","background-color":"var(--bgColor)","z-index":"5"}},[e("tr",null,[e("th",{width:"80px"},"id"),e("th",{width:"120px"},"label"),e("th",{width:"120px"},"name"),e("th",null,"desc"),e("th",{width:"120px"},"relation"),e("th",{width:"55px"},"操作")])],-1)),e("tbody",null,[(c(!0),u(F,null,D(y.value[p.value],r=>(c(),u("tr",null,[e("td",{style:{"max-width":"80px"},title:r.id},x(r.id),9,ie),e("td",{style:{"max-width":"120px"},title:r.label},x(r.label),9,ce),e("td",{style:{"max-width":"120px"},title:r.name},x(r.name),9,de),e("td",{style:{"max-width":"0"},title:r.desc},[B(g,{style:{"max-height":"100px"},md:r.desc},null,8,["md"])],8,ue),e("td",{style:{"max-width":"120px"},title:r.relation},x(r.relation),9,pe),e("td",me,[e("div",{class:"delBtn buttonEffect",onClick:b=>S(r)},"删除",8,_e)])]))),256))])])]),v(e("div",he,[t[5]||(t[5]=e("div",{style:{"margin-right":"10px"}},"页数",-1)),v(e("select",{class:"pageTurn","onUpdate:modelValue":t[1]||(t[1]=r=>p.value=r)},[(c(!0),u(F,null,D(y.value,(r,b)=>(c(),u("option",{value:b},x(b+1),9,xe))),256))],512),[[Z,p.value]])],512),[[k,y.value.length>1]])])}}},fe=M(ve,[["__scopeId","data-v-b9811ce5"]]),ye={class:"panelArea"},ge={class:"loading"},$e={class:"funcs"},we={class:"funcSearch"},be={class:"items"},ke={border:"1",cellspacing:"0"},Ce=["title"],Ee=["title"],Ie=["title"],Fe=["title"],De=["title"],Se={class:"pages"},Ae=["value"],P=30,Te={__name:"LibraryInter",setup(A){const d=I().proxy.F,_=f([]),a=U({items:_,ready:!1});window.currShow=a;async function i(){a.ready=!1;let m=await d.myFetchApi("/knowledge/get_inner_knowledges",{expectCodes:[200],errorText:"内部知识库获取失败，请刷新重试"});m&&(_.value=m.data),a.ready=!0}i(),$.on("loginSuccess",i);const l=f(0),h=z(()=>{let m=[];console.log(a);for(let n=0;n<a.items.length;n+=P)m.push(a.items.slice(n,n+P));return m}),p=f(""),y=f([]);$.on("logoutDone",()=>{_.value.length=y.value.length=0});async function C(){let m=p.value.trim();if(m){a.ready=!1;try{let n=await d.myFetchApi("/knowledge/query_inner_knowledge?part_name="+m,{expectCodes:[200],errorText:`"${m}" 查询失败`});n&&(y.value=n.data,a.items=y)}finally{a.ready=!0}}else a.items=_}return(m,n)=>{const w=j("Markdown");return c(),u("div",ye,[v(e("div",ge,n[2]||(n[2]=[e("img",{class:"autoInvert",src:G,alt:""},null,-1),T(" 加载中 ")]),512),[[k,!a.ready]]),e("div",$e,[e("div",we,[e("div",{class:"text buttonEffect",onClick:C},"知识查询"),v(e("input",{class:"input",type:"text","onUpdate:modelValue":n[0]||(n[0]=o=>p.value=o),onKeyup:R(C,["enter"]),placeholder:"留空列出所有数据"},null,544),[[N,p.value]])])]),e("div",be,[e("table",ke,[n[3]||(n[3]=e("thead",{style:{position:"sticky",top:"0","background-color":"var(--bgColor)","z-index":"5"}},[e("tr",null,[e("th",{width:"80px"},"id"),e("th",{width:"120px"},"label"),e("th",{width:"120px"},"name"),e("th",null,"desc"),e("th",{width:"120px"},"relation")])],-1)),e("tbody",null,[(c(!0),u(F,null,D(h.value[l.value],o=>(c(),u("tr",null,[e("td",{style:{"max-width":"80px"},title:o.id},x(o.id),9,Ce),e("td",{style:{"max-width":"120px"},title:o.label},x(o.label),9,Ee),e("td",{style:{"max-width":"120px"},title:o.name},x(o.name),9,Ie),e("td",{style:{"max-width":"0"},title:o.desc},[B(w,{style:{"max-height":"100px"},md:o.desc},null,8,["md"])],8,Fe),e("td",{style:{"max-width":"120px"},title:o.relation},x(o.relation),9,De)]))),256))])])]),v(e("div",Se,[n[4]||(n[4]=e("div",{style:{"margin-right":"10px"}},"页数",-1)),v(e("select",{class:"pageTurn","onUpdate:modelValue":n[1]||(n[1]=o=>l.value=o)},[(c(!0),u(F,null,D(h.value,(o,S)=>(c(),u("option",{value:S},x(S+1),9,Ae))),256))],512),[[Z,l.value]])],512),[[k,h.value.length>1]])])}}},je=M(Te,[["__scopeId","data-v-279c1c9c"]]),Be={class:"panels"},Me=["onClick"],Ke={__name:"Knowledge",setup(A){const d=I().proxy.screen,_=[{name:"使用说明",component:te},{name:"用户知识库",component:fe},{name:"内置知识库",component:je}],a=K(_[1]),i=K(!1);return(l,h)=>(c(),u("div",{class:L(["area",E(d).type])},[v(e("img",{src:J,class:"floatBtn buttonEffect",onClick:h[0]||(h[0]=p=>i.value=!i.value)},null,512),[[k,E(d).type==="ver"]]),v(e("div",Be,[(c(),u(F,null,D(_,p=>e("div",{class:L(["panel","buttonEffect",{active:a.value.name===p.name}]),onClick:y=>(a.value=p,i.value=!1)},x(p.name),11,Me)),64))],512),[[k,E(d).type==="hor"||i.value]]),(c(),q(W,{class:"content"},[(c(),q(Q(a.value.component)))],1024))],2))}},Le=M(Ke,[["__scopeId","data-v-a5073622"]]);export{Le as default};

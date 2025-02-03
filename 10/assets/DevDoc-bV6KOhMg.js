import{_ as r,e,o as s,c as a,l as t,f as o}from"./index-Ava0Aiw2.js";const c=`# 文档\r
## API\r
### 登录\r
\r
#### 请求样例\r
\`\`\`javascript\r
fetch('http://example.com/api/token",{\r
    method:'POST',\r
    headers:{\r
        "Content-type": "application/json"\r
    }\r
    body:JSON.stringify({\r
        username:"name",\r
        password:"password"\r
    })\r
})\r
\`\`\`\r
\r
| 方法 | POST |\r
|---|---|\r
\r
| 参数 | 类型 | 描述 | 必选 |\r
|---|---|---|---|\r
| username | string | 用户名 | yes |\r
| password | string | 密码 | yes |\r
\r
#### 返回\r
\r
| 参数 | 类型 | 描述 |\r
|---|---|---|\r
| a | string | a |\r
| r | string | r |\r
\r
---\r
\r
### 注册\r
\r
#### 请求样例\r
\`\`\`javascript\r
fetch('http://example.com/api/register",{\r
    method:'POST',\r
    headers:{\r
        "Content-type": "application/json"\r
    }\r
    body:JSON.stringify({\r
        username:"name",\r
        password:"password"\r
    })\r
})\r
\`\`\`\r
\r
| 方法 | POST |\r
|---|---|\r
\r
| 参数 | 类型 | 描述 | 必选 |\r
|---|---|---|---|\r
| username | string | 用户名 | yes |\r
| password | string | 密码 | yes |\r
\r
#### 返回\r
\r
| 参数 | 类型 | 描述 |\r
|---|---|---|\r
| message | string | 信息 |`,p={class:"area"},d={__name:"DevDoc",setup(i){return(m,_)=>{const n=e("Markdown");return s(),a("div",p,[t(n,{class:"md",md:o(c)},null,8,["md"])])}}},g=r(d,[["__scopeId","data-v-3485caa0"]]);export{g as default};

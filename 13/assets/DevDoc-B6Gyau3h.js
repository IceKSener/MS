import{_ as e,g as s,e as t,o as a,c as o,q as c,f as p}from"./index-BHJLfP0B.js";const i=`# 文档\r
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
| message | string | 信息 |`,m={class:"area"},d={__name:"DevDoc",setup(g){return s().proxy.conifg,(n,_)=>{const r=t("Markdown");return a(),o("div",m,[c(r,{class:"md",md:p(i),theme:n.config.settings.theme},null,8,["md","theme"])])}}},l=e(d,[["__scopeId","data-v-952461ad"]]);export{l as default};

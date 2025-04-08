import{_ as $,g as A,r as b,e as q,f as v,h as D,c as g,o as T,i as _,w,j as W,F as C,k as z,n as m,l as H,v as j,u as t,t as P,m as S,p as I,q as x}from"./index-BXNLjCvv.js";const F=""+new URL("../icon/fold2.svg",import.meta.url).href,O=`# API文档\r
\r
## 核心接口\r
\r
### 模型响应生成\r
\r
#### 功能描述\r
\r
​	通过调用模型生成聊天响应，并支持流式返回。用户发送问题后，系统会逐步返回生成的片段，直到最终完整的回答生成并标记为 \`final: true\`。\r
\r
#### 请求头\r
\r
| 参数名称      | 类型   | 必填 | 描述         |\r
| ------------- | ------ | ---- | ------------ |\r
| Authorization | string | 是   | Bearer Token |\r
\r
#### 请求参数（Body）\r
\r
| 参数名称    | 类型    | 必填 | 默认值 | 描述                                                         |\r
| ----------- | ------- | ---- | ------ | ------------------------------------------------------------ |\r
| model       | string  | 是   | 无     | 使用的模型名称，如  qwen2.5-math-7b-instruct 等。            |\r
| messages    | array   | 是   | 无     | 包含消息内容的列表，每个消息为字典格式，必须包含 \`role\`（用户/助手）和 \`content\`（消息内容）。 |\r
| max_tokens  | integer | 否   | 1000   | 最大 token 数，控制回答的最大长度。                          |\r
| temperature | float   | 否   | 1.0    | 控制生成文本的随机性，值越高越随机。                         |\r
| session_id  | string  | 否   | None   | 历史会话的 ID；如果不传入，则只调用模型而不参与上下文。      |\r
\r
#### 请求示例\r
\r
\`\`\`http\r
POST /v1/chat/completions HTTP/1.1\r
Host: 36.111.156.150:8000\r
Authorization: Bearer <your_token>\r
Content-Type: application/json\r
\r
{\r
  "model": "qwen2.5-math-7b-instruct",\r
  "messages": [\r
    {"role": "user", "content": "What is the capital of France?"}\r
  ],\r
  "max_tokens": 150,\r
  "temperature": 0.7\r
}\r
\`\`\`\r
\r
#### 成功响应\r
\r
**流式返回**：  \r
系统会逐步返回多个片段，每个片段的结构如下：\r
\r
\`\`\`json\r
{\r
  "id": "unique_response_id",\r
  "object": "text_completion",\r
  "created": 1640995200,\r
  "model": "qwen2.5-math-7b-instruct",\r
  "choices": [\r
    {\r
      "message": {\r
        "role": "assistant",\r
        "content": "The capital of France is"\r
      },\r
      "finish_reason": "length"\r
    }\r
  ],\r
  "usage": {\r
    "total_tokens": 10,\r
    "prompt_tokens": 5,\r
    "completion_tokens": 5\r
  },\r
  "final": false\r
}\r
\`\`\`\r
\r
**最终响应**：  \r
当完整的回答生成时，返回的最后一个响应会包含 \`final: true\`，示例如下：\r
\r
\`\`\`json\r
{\r
  "id": "unique_response_id_final",\r
  "object": "text_completion",\r
  "created": 1640995200,\r
  "model": "dashscope-v1",\r
  "choices": [\r
    {\r
      "message": {\r
        "role": "assistant",\r
        "content": "The capital of France is Paris."\r
      },\r
      "finish_reason": "stop"\r
    }\r
  ],\r
  "usage": {\r
    "total_tokens": 15,\r
    "prompt_tokens": 5,\r
    "completion_tokens": 10\r
  },\r
  "final": true\r
}\r
\`\`\`\r
\r
#### 响应字段说明\r
\r
- \`id\`: 响应的唯一 ID。\r
- \`object\`: 响应类型，始终为 \`"text_completion"\`。\r
- \`created\`: 响应创建的时间戳。\r
- \`model\`: 使用的模型名称。\r
- \`choices\`: 响应的内容和生成信息。\r
  - \`message\`: 包含生成的内容和角色（\`assistant\`）。\r
  - \`finish_reason\`: 生成停止的原因（如 \`"length"\` 或 \`"stop"\`）。\r
- \`usage\`: 消耗的 token 数量。\r
  - \`total_tokens\`: 总 token 数。\r
  - \`prompt_tokens\`: 输入的 prompt 消耗的 token 数。\r
  - \`completion_tokens\`: 输出的生成内容消耗的 token 数。\r
- \`final\`: 布尔值，表示当前片段是否为最终完整响应。\r
\r
#### 失败响应\r
\r
| 状态码 | 错误信息                    | 描述                                                |\r
| ------ | --------------------------- | --------------------------------------------------- |\r
| 401    | "未提供 Authorization 头！" | 请求头中未提供 \`Authorization\` 字段。               |\r
| 401    | "无效的token!"              | 提供的 \`token\` 无效或无法在数据库中找到匹配的用户。 |\r
\r
### 获取相关问题\r
\r
#### 功能描述\r
\r
根据用户提供的问题查询知识库中的相关问题。\r
\r
#### 请求头\r
\r
| 参数名称      | 类型   | 必填 | 描述         |\r
| ------------- | ------ | ---- | ------------ |\r
| Authorization | string | 是   | Bearer Token |\r
\r
#### 请求参数（Body）\r
\r
| 参数名称 | 类型   | 必填 | 描述               |\r
| -------- | ------ | ---- | ------------------ |\r
| question | string | 是   | 用户输入的查询问题 |\r
\r
#### 请求示例\r
\r
\`\`\`http\r
POST /v1/related_questions HTTP/1.1\r
Authorization: Bearer <your_token>\r
Content-Type: application/json\r
\r
{\r
  "question": "解高次方程x^5+x^2-1=0"\r
}\r
\`\`\`\r
\r
#### 成功响应\r
\r
**状态码**: 200  \r
**响应体结构**:\r
\r
\`\`\`json\r
{\r
  "message": "成功找到相关问题",\r
  "status": "success",\r
  "related_questions": [\r
    "解高次方程x^3-6x^2+11x-6=0.",\r
    "解高次方程x^3+2x+3=0."\r
  ]\r
}\r
\`\`\`\r
\r
#### 失败响应\r
\r
| 状态码 | 错误信息                        | 描述                                                |\r
| ------ | ------------------------------- | --------------------------------------------------- |\r
| 401    | "未提供 Authorization 头!"      | 请求头中未提供 \`Authorization\` 字段。               |\r
| 401    | "无效的token!"                  | 提供的 \`token\` 无效或无法在数据库中找到匹配的用户。 |\r
| 400    | "请求体中缺少 'question' 字段!" | 请求体中未提供 \`question\` 字段。                    |\r
| 404    | "没有找到相关问题!"             | 知识库中未找到与输入问题相关的其他问题。            |\r
\r
### 获取参考文件\r
\r
#### 功能描述\r
\r
​	根据   \`question_id\` 获取与用户查询问题相关的内部文档及外部资源链接。\r
\r
#### 请求头\r
\r
| 参数名称      | 类型   | 必填 | 描述         |\r
| ------------- | ------ | ---- | ------------ |\r
| Authorization | string | 是   | Bearer Token |\r
\r
#### 请求参数（Query）\r
\r
| 参数名称    | 类型   | 必填 | 描述                                                         |\r
| ----------- | ------ | ---- | ------------------------------------------------------------ |\r
| question_id | string | 是   | 用户查询的问题 ID，值为问题对应的模型回答中，final==true的响应的id字段。 |\r
\r
#### 请求示例\r
\r
\`\`\`http\r
GET /v1/reference_files?question_id=12345 HTTP/1.1\r
Authorization: Bearer <your_token>\r
\`\`\`\r
\r
#### 成功响应\r
\r
**状态码**: 200  \r
**响应体结构**: \r
\r
\`\`\`json\r
{\r
  "message": "成功获取相关文档",\r
  "status": "success",\r
  "reference_files": [\r
    {\r
      "type": "internal",\r
      "name": "12345.pdf",\r
      "url": "https://your-oss-bucket-name.oss.your-region.aliyuncs.com/documents/12345.pdf"\r
    },\r
    {\r
      "type": "external",\r
      "name": "CSDN相关文章",\r
      "url": "https://blog.csdn.net/article-12345"\r
    }\r
  ]\r
}\r
\`\`\`\r
\r
####    失败响应\r
\r
| 状态码 | 错误信息                       | 描述                                                |\r
| ------ | ------------------------------ | --------------------------------------------------- |\r
| 401    | "未提供 Authorization 头！"    | 请求头中未提供 \`Authorization\` 字段。               |\r
| 401    | "无效的token!"                 | 提供的 \`token\` 无效或无法在数据库中找到匹配的用户。 |\r
| 404    | "找不到指定question_id的对话!" | 未找到指定的 \`question_id\` 或相关文档。             |\r
| 500    | "服务器内部错误"               | 数据库查询、文件生成或存储过程中出现异常。          |\r
\r
\r
\r
### 系统预热\r
\r
#### 功能描述  \r
系统启动时标识已成功启动并完成预热操作。\r
\r
#### 请求头  \r
无\r
\r
#### 请求参数  \r
无\r
\r
#### 请求示例  \r
\`\`\`http\r
GET /api/pre HTTP/1.1\r
\`\`\`\r
\r
#### 成功响应  \r
**状态码**: 200  \r
**响应体结构**:\r
\`\`\`json\r
{\r
  "code": 200,\r
  "message": "启动成功！"\r
}\r
\`\`\`\r
\r
#### 失败响应  \r
| 状态码 | 描述                                     |\r
| ------ | ---------------------------------------- |\r
| 500    | 服务器内部错误（仅当预热操作异常时返回） |\r
\r
\r
\r
## 身份管理\r
\r
### 用户注册\r
\r
#### 功能描述  \r
用户通过提供符合要求的用户名和密码完成系统注册。\r
\r
#### 请求头  \r
无需特殊请求头（默认 Content-Type: application/json）。\r
\r
#### 请求参数（Body）\r
| 参数名称 | 类型   | 必填 | 描述                 |\r
| -------- | ------ | ---- | -------------------- |\r
| username | string | 是   | 符合格式要求的用户名 |\r
| password | string | 是   | 符合强度要求的密码   |\r
\r
#### 请求示例\r
\`\`\`http\r
POST /api/register HTTP/1.1\r
Content-Type: application/json\r
\r
{\r
  "username": "new_user",\r
  "password": "StrongPassword123!"\r
}\r
\`\`\`\r
\r
#### 成功响应  \r
**状态码**: 201  \r
**响应体结构**:\r
\`\`\`json\r
{\r
  "code": 201,\r
  "message": "注册成功！",\r
  "data": {\r
    "username": "new_user",\r
    "id": 1\r
  }\r
}\r
\`\`\`\r
\r
#### 失败响应  \r
| 状态码 | 错误信息                | 触发条件                     |\r
| ------ | ----------------------- | ---------------------------- |\r
| 409    | "用户名已存在!"         | 用户名已被注册               |\r
| 400    | "用户名格式不合法!"     | 用户名包含非法字符或长度不符 |\r
| 400    | "密码格式不合法!"       | 密码强度不足                 |\r
| 400    | "当注册用户时发生错误!" | 数据库操作失败               |\r
\r
### 用户登录\r
\r
#### 功能描述  \r
用户通过用户名和密码进行身份验证，获取访问令牌。\r
\r
#### 请求参数（Body）\r
| 参数名称 | 类型   | 必填 | 描述         |\r
| -------- | ------ | ---- | ------------ |\r
| username | string | 是   | 已注册用户名 |\r
| password | string | 是   | 用户密码     |\r
\r
#### 请求示例\r
\`\`\`http\r
POST /api/login HTTP/1.1\r
Content-Type: application/json\r
\r
{\r
  "username": "existing_user",\r
  "password": "CorrectPassword123"\r
}\r
\`\`\`\r
\r
#### 成功响应  \r
**状态码**: 200  \r
**响应体结构**:\r
\`\`\`json\r
{\r
  "code": 200,\r
  "message": "登录成功!",\r
  "data": {\r
    "access_token": "your-access-token",\r
    "token_type": "bearer",\r
    "refresh_token": "your-refresh-token"\r
  }\r
}\r
\`\`\`\r
\r
#### 失败响应  \r
| 状态码 | 错误信息        | 触发条件               |\r
| ------ | --------------- | ---------------------- |\r
| 400    | "用户名不存在!" | 用户名未注册           |\r
| 400    | "密码错误!"     | 密码与数据库记录不匹配 |\r
\r
### 令牌刷新\r
\r
#### 功能描述  \r
使用有效的刷新令牌获取新的访问令牌。\r
\r
#### 请求参数（Body）\r
| 参数名称      | 类型   | 必填 | 描述           |\r
| ------------- | ------ | ---- | -------------- |\r
| refresh_token | string | 是   | 有效的刷新令牌 |\r
\r
#### 请求示例\r
\`\`\`http\r
POST /api/refresh HTTP/1.1\r
Content-Type: application/json\r
\r
{\r
  "refresh_token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."\r
}\r
\`\`\`\r
\r
#### 成功响应  \r
**状态码**: 200  \r
**响应体结构**:\r
\`\`\`json\r
{\r
  "code": 200,\r
  "message": "access_token刷新成功!",\r
  "data": {\r
    "access_token": "new-access-token",\r
    "token_type": "bearer"\r
  }\r
}\r
\`\`\`\r
\r
#### 失败响应  \r
| 状态码 | 错误信息                   | 触发条件                 |\r
| ------ | -------------------------- | ------------------------ |\r
| 401    | "refresh token无效!"       | 令牌已过期或与用户不匹配 |\r
| 400    | "refresh_token格式不正确!" | 令牌格式无法解析         |\r
\r
\r
\r
## 会话管理\r
\r
### 新增会话\r
\r
#### 功能描述\r
\r
创建一个新的会话。\r
\r
#### 请求头\r
\r
| 参数名称      | 类型   | 必填 | 描述         |\r
| ------------- | ------ | ---- | ------------ |\r
| Authorization | string | 是   | Bearer Token |\r
\r
#### 请求参数（Body）\r
\r
| 参数名称   | 类型   | 必填 | 描述     |\r
| ---------- | ------ | ---- | -------- |\r
| session_id | string | 是   | 会话 ID  |\r
| name       | string | 是   | 会话名称 |\r
\r
#### 请求示例\r
\r
\`\`\`http\r
POST /add_session HTTP/1.1\r
Authorization: Bearer <your_token>\r
Content-Type: application/json\r
\r
{\r
  "session_id": "abc123",\r
  "name": "测试会话"\r
}\r
\`\`\`\r
\r
#### 成功响应\r
\r
**状态码**: 201  \r
**响应体结构**:\r
\r
\`\`\`json\r
{\r
  "code": 201,\r
  "message": "添加会话成功!",\r
  "data": null\r
}\r
\`\`\`\r
\r
#### 失败响应\r
\r
| 状态码 | 描述                 |\r
| ------ | -------------------- |\r
| 401    | 未提供或无效的 Token |\r
| 500    | 服务器内部错误       |\r
\r
### 删除会话\r
\r
#### 功能描述\r
\r
删除指定会话及其所有关联的对话记录。\r
\r
#### 请求头\r
\r
| 参数名称      | 类型   | 必填 | 描述         |\r
| ------------- | ------ | ---- | ------------ |\r
| Authorization | string | 是   | Bearer Token |\r
\r
#### 路径参数\r
\r
| 参数名称   | 类型   | 必填 | 描述    |\r
| ---------- | ------ | ---- | ------- |\r
| session_id | string | 是   | 会话 ID |\r
\r
#### 请求示例\r
\r
\`\`\`http\r
DELETE /delete_session/abc123 HTTP/1.1\r
Authorization: Bearer <your_token>\r
\`\`\`\r
\r
#### 成功响应\r
\r
**状态码**: 200  \r
**响应体结构**:\r
\r
\`\`\`json\r
{\r
  "code": 200,\r
  "message": "删除会话成功!",\r
  "data": null\r
}\r
\`\`\`\r
\r
#### 失败响应\r
\r
| 状态码 | 描述                 |\r
| ------ | -------------------- |\r
| 401    | 未提供或无效的 Token |\r
| 400    | 无效的会话 ID        |\r
\r
### 查询会话\r
\r
#### 功能描述\r
\r
获取当前用户的所有历史会话列表（按时间降序排序）。\r
\r
#### 请求头\r
\r
| 参数名称      | 类型   | 必填 | 描述         |\r
| ------------- | ------ | ---- | ------------ |\r
| Authorization | string | 是   | Bearer Token |\r
\r
#### 请求示例\r
\r
\`\`\`http\r
GET /get_sessions HTTP/1.1\r
Authorization: Bearer <your_token>\r
\`\`\`\r
\r
#### 成功响应\r
\r
**状态码**: 200  \r
**响应体结构**:\r
\r
\`\`\`json\r
{\r
  "code": 200,\r
  "message": "获取会话列表成功！",\r
  "data": [\r
    {\r
      "session_id": "string",\r
      "name": "string",\r
      "timestamp": "number"\r
    }\r
  ]\r
}\r
\`\`\`\r
\r
#### 失败响应\r
\r
| 状态码 | 描述                 |\r
| ------ | -------------------- |\r
| 401    | 未提供或无效的 Token |\r
\r
### 删除所有会话\r
\r
#### 功能描述\r
\r
删除当前用户的所有会话记录，包括会话列表、对话历史以及 Redis 中的相关数据。\r
\r
#### 请求头\r
\r
| 参数名称      | 类型   | 必填 | 描述         |\r
| ------------- | ------ | ---- | ------------ |\r
| Authorization | string | 是   | Bearer Token |\r
\r
#### 请求参数\r
\r
无\r
\r
#### 请求示例\r
\r
\`\`\`http\r
DELETE /delete_all_sessions HTTP/1.1\r
Authorization: Bearer <your_token>\r
Content-Type: application/json\r
\`\`\`\r
\r
#### 成功响应\r
\r
**状态码**: 200  \r
**响应体结构**:\r
\r
\`\`\`json\r
{\r
  "code": 200,\r
  "message": "删除所有会话成功!",\r
  "data": null\r
}\r
\`\`\`\r
\r
#### 失败响应\r
\r
| 状态码 | 描述                 |\r
| ------ | -------------------- |\r
| 401    | 未提供或无效的 Token |\r
| 500    | 服务器内部错误       |\r
\r
### 重命名会话\r
\r
#### 功能描述\r
\r
重命名指定会话的名称。该操作会更新 MongoDB 中对应会话的名称字段。\r
\r
#### 请求头\r
\r
| 参数名称      | 类型   | 必填 | 描述         |\r
| ------------- | ------ | ---- | ------------ |\r
| Authorization | string | 是   | Bearer Token |\r
\r
#### 请求参数\r
\r
| 参数名称   | 类型   | 必填 | 描述             |\r
| ---------- | ------ | ---- | ---------------- |\r
| session_id | string | 是   | 会话的唯一标识符 |\r
| name       | string | 是   | 新的会话名称     |\r
\r
#### 请求示例\r
\r
\`\`\`http\r
PUT /rename_session HTTP/1.1\r
Authorization: Bearer <your_token>\r
Content-Type: application/json\r
\r
{\r
  "session_id": "12345",\r
  "name": "新的会话名称"\r
}\r
\`\`\`\r
\r
#### 成功响应\r
\r
**状态码**: 200  \r
**响应体结构**:\r
\r
\`\`\`json\r
{\r
  "code": 200,\r
  "message": "重命名成功!",\r
  "data": null\r
}\r
\`\`\`\r
\r
#### 失败响应\r
\r
| 状态码 | 描述                 |\r
| ------ | -------------------- |\r
| 400    | 名称为空             |\r
| 401    | 未提供或无效的 Token |\r
| 500    | 服务器内部错误       |\r
\r
\r
\r
## 对话管理\r
\r
### 删除对话\r
\r
#### 功能描述\r
\r
删除指定会话中的某条问答记录。\r
\r
#### 请求头\r
\r
| 参数名称      | 类型   | 必填 | 描述         |\r
| ------------- | ------ | ---- | ------------ |\r
| Authorization | string | 是   | Bearer Token |\r
\r
#### 请求参数（Body）\r
\r
| 参数名称    | 类型   | 必填 | 描述    |\r
| ----------- | ------ | ---- | ------- |\r
| session_id  | string | 是   | 会话 ID |\r
| question_id | string | 是   | 问题 ID |\r
\r
#### 请求示例\r
\r
\`\`\`http\r
DELETE /delete_qa HTTP/1.1\r
Authorization: Bearer <your_token>\r
Content-Type: application/json\r
\r
{\r
  "session_id": "abc123",\r
  "question_id": "q1"\r
}\r
\`\`\`\r
\r
#### 成功响应\r
\r
**状态码**: 200  \r
**响应体结构**:\r
\r
\`\`\`json\r
{\r
  "code": 200,\r
  "message": "删除历史对话成功!",\r
  "data": null\r
}\r
\`\`\`\r
\r
#### 失败响应\r
\r
| 状态码 | 描述                 |\r
| ------ | -------------------- |\r
| 401    | 未提供或无效的 Token |\r
| 400    | 无效的会话或问题 ID  |\r
\r
### 查询对话\r
\r
#### 功能描述\r
\r
查询指定会话的历史问答记录（按时间升序排序）。\r
\r
#### 请求头\r
\r
| 参数名称      | 类型   | 必填 | 描述         |\r
| ------------- | ------ | ---- | ------------ |\r
| Authorization | string | 是   | Bearer Token |\r
\r
#### 请求参数（Query）\r
\r
| 参数名称   | 类型   | 必填 | 描述    |\r
| ---------- | ------ | ---- | ------- |\r
| session_id | string | 是   | 会话 ID |\r
\r
#### 请求示例\r
\r
\`\`\`http\r
GET /get_qas?session_id=abc123 HTTP/1.1\r
Authorization: Bearer <your_token>\r
\`\`\`\r
\r
#### 成功响应\r
\r
**状态码**: 200  \r
**响应体结构**:\r
\r
\`\`\`json\r
{\r
  "code": 200,\r
  "message": "获取历史对话列表成功!",\r
  "data": [\r
    {\r
      "question_id": "string",\r
      "question": "string",\r
      "answer": "string",\r
      "timestamp": "number",\r
      "num_render": "number"\r
    }\r
  ]\r
}\r
\`\`\`\r
\r
#### 失败响应\r
\r
| 状态码 | 描述                 |\r
| ------ | -------------------- |\r
| 401    | 未提供或无效的 Token |\r
| 400    | 会话不存在           |\r
\r
### 中断对话\r
\r
#### 功能描述\r
\r
中断指定会话的生成任务。\r
\r
#### 请求头\r
\r
| 参数名称      | 类型   | 必填 | 描述         |\r
| ------------- | ------ | ---- | ------------ |\r
| Authorization | string | 是   | Bearer Token |\r
\r
#### 请求参数（Body）\r
\r
| 参数名称   | 类型   | 必填 | 描述         |\r
| ---------- | ------ | ---- | ------------ |\r
| session_id | string | 是   | 会话 ID      |\r
| num_render | number | 是   | 已渲染的字数 |\r
\r
#### 请求示例\r
\r
\`\`\`http\r
POST /stop_qa HTTP/1.1\r
Authorization: Bearer <your_token>\r
Content-Type: application/json\r
\r
{\r
  "session_id": "abc123",\r
  "num_render": 100\r
}\r
\`\`\`\r
\r
#### 成功响应\r
\r
**状态码**: 200  \r
**响应体结构**:\r
\r
\`\`\`json\r
{\r
  "code": 200,\r
  "message": "中断生成成功!",\r
  "data": null\r
}\r
\`\`\`\r
\r
#### 失败响应\r
\r
| 状态码 | 描述                 |\r
| ------ | -------------------- |\r
| 401    | 未提供或无效的 Token |\r
| 404    | 会话不存在           |\r
\r
### 更新对话\r
\r
#### 功能描述\r
\r
更新指定会话中某条问答记录的 \`num_render\` 字段。\r
\r
#### 请求头\r
\r
| 参数名称      | 类型   | 必填 | 描述         |\r
| ------------- | ------ | ---- | ------------ |\r
| Authorization | string | 是   | Bearer Token |\r
\r
#### 请求参数（Body）\r
\r
| 参数名称    | 类型   | 必填 | 描述     |\r
| ----------- | ------ | ---- | -------- |\r
| session_id  | string | 是   | 会话 ID  |\r
| question_id | string | 是   | 问题 ID  |\r
| num_render  | number | 是   | 渲染次数 |\r
\r
#### 请求示例\r
\r
\`\`\`http\r
PUT /update_qa HTTP/1.1\r
Authorization: Bearer <your_token>\r
Content-Type: application/json\r
\r
{\r
  "session_id": "abc123",\r
  "question_id": "q1",\r
  "num_render": 2\r
}\r
\`\`\`\r
\r
#### 成功响应\r
\r
**状态码**: 200  \r
**响应体结构**:\r
\r
\`\`\`json\r
{\r
  "code": 200,\r
  "message": "更新历史对话成功!",\r
  "data": null\r
}\r
\`\`\`\r
\r
#### 失败响应\r
\r
| 状态码 | 描述                 |\r
| ------ | -------------------- |\r
| 401    | 未提供或无效的 Token |\r
| 400    | 无效的会话或问题 ID  |\r
\r
\r
\r
## 账号管理\r
\r
### 上传头像\r
\r
#### 功能描述\r
\r
将用户上传的头像图片存储到阿里云 OSS（对象存储服务），并返回图片的访问 URL。\r
\r
#### 请求头\r
\r
| 参数名称      | 类型   | 必填 | 描述                |\r
| ------------- | ------ | ---- | ------------------- |\r
| Authorization | string | 是   | Bearer Token        |\r
| Content-Type  | string | 是   | multipart/form-data |\r
\r
#### 请求参数\r
\r
| 参数名称 | 类型       | 必填 | 描述               |\r
| -------- | ---------- | ---- | ------------------ |\r
| photo    | UploadFile | 是   | 用户上传的头像文件 |\r
\r
#### 请求示例\r
\r
\`\`\`http\r
POST /upload_image HTTP/1.1\r
Authorization: Bearer <your_token>\r
Content-Type: multipart/form-data; boundary=----WebKitFormBoundary7MA4YWxkTrZu0gW\r
\r
------WebKitFormBoundary7MA4YWxkTrZu0gW\r
Content-Disposition: form-data; name="photo"; filename="avatar.jpg"\r
Content-Type: image/jpeg\r
\r
<binary data>\r
------WebKitFormBoundary7MA4YWxkTrZu0gW--\r
\`\`\`\r
\r
#### 成功响应\r
\r
**状态码**: 201  \r
**响应体结构**:\r
\r
\`\`\`json\r
{\r
  "code": 201,\r
  "message": "上传成功!",\r
  "data": "https://<bucket-name>.<oss-endpoint>/<unique-filename>"\r
}\r
\`\`\`\r
\r
#### 失败响应\r
\r
| 状态码 | 描述                 |\r
| ------ | -------------------- |\r
| 401    | 未提供或无效的 Token |\r
| 500    | 上传失败             |\r
\r
### 注销账号\r
\r
#### 功能描述\r
\r
注销当前用户账号并删除相关的所有数据，包括会话记录、对话历史、Redis中的QA数据以及MySQL中的用户数据。\r
\r
#### 请求头\r
\r
| 参数名称      | 类型   | 必填 | 描述         |\r
| ------------- | ------ | ---- | ------------ |\r
| Authorization | string | 是   | Bearer Token |\r
\r
#### 请求参数\r
\r
无\r
\r
#### 请求示例\r
\r
\`\`\`http\r
DELETE /cancel_account HTTP/1.1\r
Authorization: Bearer <your_token>\r
Content-Type: application/json\r
\`\`\`\r
\r
#### 成功响应\r
\r
**状态码**: 200\r
**响应体结构**:\r
\r
\`\`\`json\r
{\r
  "code": 200,\r
  "message": "注销成功!",\r
  "data": null\r
}\r
\`\`\`\r
\r
#### 失败响应\r
\r
| 状态码 | 描述                 |\r
| ------ | -------------------- |\r
| 401    | 未提供或无效的 Token |\r
| 500    | 服务器内部错误       |\r
\r
### 更新用户信息\r
\r
#### 功能描述\r
\r
更新当前用户的个人信息，包括头像（\`photo\`）和姓名（\`name\`）。如果提供了新的值，会更新相应的字段。\r
\r
#### 请求头\r
\r
| 参数名称      | 类型   | 必填 | 描述         |\r
| ------------- | ------ | ---- | ------------ |\r
| Authorization | string | 是   | Bearer Token |\r
\r
#### 请求参数\r
\r
| 参数名称 | 类型   | 必填 | 描述     |\r
| -------- | ------ | ---- | -------- |\r
| photo    | string | 否   | 新的头像 |\r
| name     | string | 否   | 新的姓名 |\r
\r
#### 请求示例\r
\r
\`\`\`http\r
PUT /update_info HTTP/1.1\r
Authorization: Bearer <your_token>\r
Content-Type: application/json\r
\r
{\r
  "photo": "<new_photo_url>",\r
  "name": "<new_name>"\r
}\r
\`\`\`\r
\r
#### 成功响应\r
\r
**状态码**: 200\r
**响应体结构**:\r
\r
\`\`\`json\r
{\r
  "code": 200,\r
  "message": "更新成功!",\r
  "data": []\r
}\r
\`\`\`\r
\r
#### 失败响应\r
\r
| 状态码 | 描述                 |\r
| ------ | -------------------- |\r
| 401    | 未提供或无效的 Token |\r
| 500    | 服务器内部错误       |\r
\r
------\r
\r
### 修改用户密码\r
\r
#### 功能描述\r
\r
修改当前用户的密码。需要提供新密码，并确保新密码与原密码不同，且符合密码格式要求。\r
\r
#### 请求头\r
\r
| 参数名称      | 类型   | 必填 | 描述         |\r
| ------------- | ------ | ---- | ------------ |\r
| Authorization | string | 是   | Bearer Token |\r
\r
#### 请求参数\r
\r
| 参数名称 | 类型   | 必填 | 描述     |\r
| -------- | ------ | ---- | -------- |\r
| password | string | 是   | 新的密码 |\r
\r
#### 请求示例\r
\r
\`\`\`http\r
PUT /change_password HTTP/1.1\r
Authorization: Bearer <your_token>\r
Content-Type: application/json\r
\r
{\r
  "password": "<new_password>"\r
}\r
\`\`\`\r
\r
#### 成功响应\r
\r
**状态码**: 200\r
**响应体结构**:\r
\r
\`\`\`json\r
{\r
  "code": 200,\r
  "message": "更新成功!",\r
  "data": []\r
}\r
\`\`\`\r
\r
#### 失败响应\r
\r
| 状态码 | 描述                       |\r
| ------ | -------------------------- |\r
| 400    | 密码不能为空或与原密码相同 |\r
| 401    | 未提供或无效的 Token       |\r
| 500    | 服务器内部错误             |\r
\r
------\r
\r
### 获取用户信息\r
\r
#### 功能描述\r
\r
获取当前用户的个人信息，包括用户名、姓名和头像。\r
\r
#### 请求头\r
\r
| 参数名称      | 类型   | 必填 | 描述         |\r
| ------------- | ------ | ---- | ------------ |\r
| Authorization | string | 是   | Bearer Token |\r
\r
#### 请求参数\r
\r
无\r
\r
#### 请求示例\r
\r
\`\`\`http\r
GET /get_info HTTP/1.1\r
Authorization: Bearer <your_token>\r
Content-Type: application/json\r
\`\`\`\r
\r
#### 成功响应\r
\r
**状态码**: 200\r
**响应体结构**:\r
\r
\`\`\`json\r
{\r
  "code": 200,\r
  "message": "查询成功!",\r
  "data": {\r
    "username": "<user_username>",\r
    "name": "<user_name>",\r
    "photo": "<user_photo_url>"\r
  }\r
}\r
\`\`\`\r
\r
#### 失败响应\r
\r
| 状态码 | 描述                 |\r
| ------ | -------------------- |\r
| 401    | 未提供或无效的 Token |\r
| 500    | 服务器内部错误       |\r
\r
## 知识管理\r
\r
### 获取内置知识库列表\r
\r
#### 功能描述\r
\r
获取内置知识库中的所有知识条目列表。\r
\r
#### 请求头\r
\r
| 参数名称      | 类型   | 必填 | 描述         |\r
| ------------- | ------ | ---- | ------------ |\r
| Authorization | string | 是   | Bearer Token |\r
\r
#### 请求方法\r
\r
GET\r
\r
#### 请求路径\r
\r
\`/knowledge/get_inner_knowledges\`\r
\r
#### 请求示例\r
\r
\`\`\`http\r
GET /knowledge/get_inner_knowledges HTTP/1.1\r
Authorization: Bearer <your_token>\r
\`\`\`\r
\r
#### 成功响应\r
\r
**状态码**: 200  \r
**响应体结构**:\r
\r
\`\`\`json\r
{\r
  "code": 200,\r
  "message": "获取内部知识库列表成功!",\r
  "data": [\r
    	{\r
            "id": 16,\r
            "label": "定义",\r
            "name": "三角形的定义",\r
            "desc": "三角形是由三条线段首尾顺次连接组成的平面图形，是几何学中最基本的多边形。数学表达为：三个不共线的点A、B、C及其连线AB、BC、CA构成的图形，记作$\\\\triangle ABC$。",\r
            "relation": "三角形"\r
        },\r
        {\r
            "id": 17,\r
            "label": "性质",\r
            "name": "三角形的基本性质",\r
            "desc": "1) 内角和为$180^{\\\\circ}$；2) 两边之和大于第三边；3) 外角和为$360^{\\\\circ}$；4) 大边对大角；5) 稳定性：三角形是刚性结构。",\r
            "relation": "三角形"\r
        }\r
  ]\r
}\r
\`\`\`\r
\r
#### 失败响应\r
\r
| 状态码 | 描述                 |\r
| ------ | -------------------- |\r
| 401    | 未提供或无效的 Token |\r
\r
### 内置知识的模糊查询\r
\r
#### 功能描述\r
\r
根据名称部分匹配查询内置知识库中的知识条目。\r
\r
#### 请求头\r
\r
| 参数名称      | 类型   | 必填 | 描述         |\r
| ------------- | ------ | ---- | ------------ |\r
| Authorization | string | 是   | Bearer Token |\r
\r
#### 请求方法\r
\r
GET\r
\r
#### 请求路径\r
\r
\`/knowledge/query_inner_knowledge\`\r
\r
#### 请求参数（Query）\r
\r
| 参数名称  | 类型   | 必填 | 描述     |\r
| --------- | ------ | ---- | -------- |\r
| part_name | string | 是   | 名称部分 |\r
\r
#### 请求示例\r
\r
\`\`\`http\r
GET /knowledge/query_inner_knowledge?part_name=三角形 HTTP/1.1\r
Authorization: Bearer <your_token>\r
\`\`\`\r
\r
#### 成功响应\r
\r
**状态码**: 200  \r
**响应体结构**:\r
\r
\`\`\`json\r
{\r
  "code": 200,\r
  "message": "获取内置指定知识成功!",\r
  "data": [\r
    	{\r
            "id": 15,\r
            "label": "virtual",\r
            "name": "三角形",\r
            "desc": "",\r
            "relation": "平面几何图形"\r
        },\r
        {\r
            "id": 16,\r
            "label": "定义",\r
            "name": "三角形的定义",\r
            "desc": "三角形是由三条线段首尾顺次连接组成的平面图形，是几何学中最基本的多边形。数学表达为：三个不共线的点A、B、C及其连线AB、BC、CA构成的图形，记作$\\\\triangle ABC$。",\r
            "relation": "三角形"\r
        },\r
        {\r
            "id": 17,\r
            "label": "性质",\r
            "name": "三角形的基本性质",\r
            "desc": "1) 内角和为$180^{\\\\circ}$；2) 两边之和大于第三边；3) 外角和为$360^{\\\\circ}$；4) 大边对大角；5) 稳定性：三角形是刚性结构。",\r
            "relation": "三角形"\r
        },\r
        {\r
            "id": 18,\r
            "label": "应用",\r
            "name": "三角形的应用",\r
            "desc": "1) 建筑结构：桁架、屋顶设计；2) 工程测量：三角定位法；3) 计算机图形学：三维建模基础；4) 艺术设计：构图基本元素；5) 物理：力的分解与合成。",\r
            "relation": "三角形"\r
        },\r
        {\r
            "id": 19,\r
            "label": "解题技巧",\r
            "name": "三角形问题的解法",\r
            "desc": "1) 角度问题：利用内角和定理；2) 边长问题：运用三角不等式；3) 证明技巧：添加辅助线构造全等/相似三角形；4) 坐标系法：通过顶点坐标计算；5) 综合运用：结合圆、四边形等知识。",\r
            "relation": "三角形"\r
        }\r
  ]\r
}\r
\`\`\`\r
\r
#### 失败响应\r
\r
| 状态码 | 描述                 |\r
| ------ | -------------------- |\r
| 401    | 未提供或无效的 Token |\r
\r
### 获取用户知识库列表\r
\r
#### 功能描述\r
\r
获取当前用户知识库中的所有知识条目列表。\r
\r
#### 请求头\r
\r
| 参数名称      | 类型   | 必填 | 描述         |\r
| ------------- | ------ | ---- | ------------ |\r
| Authorization | string | 是   | Bearer Token |\r
\r
#### 请求方法\r
\r
GET\r
\r
#### 请求路径\r
\r
\`/knowledge/get_user_knowledges\`\r
\r
#### 请求示例\r
\r
\`\`\`http\r
GET /knowledge/get_user_knowledges HTTP/1.1\r
Authorization: Bearer <your_token>\r
\`\`\`\r
\r
#### 成功响应\r
\r
**状态码**: 200  \r
**响应体结构**:\r
\r
\`\`\`json\r
{\r
  "code": 200,\r
  "message": "获取用户知识库列表成功!",\r
  "data": [\r
    	{\r
            "id": 2,\r
            "label": "定义",\r
            "name": "勾股定理的定义",\r
            "desc": "勾股定理指出：在直角三角形中，两条直角边的平方和等于斜边的平方。数学表达式为：若直角边长为$a$和$b$，斜边长为$c$，则$a^2 + b^2 = c^2$。这是欧几里得几何中最著名的定理之一。",\r
            "relation": "勾股定理"\r
        }\r
  ]\r
}\r
\`\`\`\r
\r
#### 失败响应\r
\r
| 状态码 | 描述                 |\r
| ------ | -------------------- |\r
| 401    | 未提供或无效的 Token |\r
\r
### 用户知识的模糊查询\r
\r
#### 功能描述\r
\r
根据名称部分匹配查询当前用户知识库中的知识条目。\r
\r
#### 请求头\r
\r
| 参数名称      | 类型   | 必填 | 描述         |\r
| ------------- | ------ | ---- | ------------ |\r
| Authorization | string | 是   | Bearer Token |\r
\r
#### 请求方法\r
\r
GET\r
\r
#### 请求路径\r
\r
\`/knowledge/query_user_knowledge\`\r
\r
#### 请求参数（Query）\r
\r
| 参数名称  | 类型   | 必填 | 描述     |\r
| --------- | ------ | ---- | -------- |\r
| part_name | string | 是   | 名称部分 |\r
\r
#### 请求示例\r
\r
\`\`\`http\r
GET /knowledge/query_user_knowledge?part_name=勾股 HTTP/1.1\r
Authorization: Bearer <your_token>\r
\`\`\`\r
\r
#### 成功响应\r
\r
**状态码**: 200  \r
**响应体结构**:\r
\r
\`\`\`json\r
{\r
  "code": 200,\r
  "message": "获取用户指定知识成功!",\r
  "data": [\r
    	{\r
            "id": 2,\r
            "label": "定义",\r
            "name": "勾股定理的定义",\r
            "desc": "勾股定理指出：在直角三角形中，两条直角边的平方和等于斜边的平方。数学表达式为：若直角边长为$a$和$b$，斜边长为$c$，则$a^2 + b^2 = c^2$。这是欧几里得几何中最著名的定理之一。",\r
            "relation": "勾股定理"\r
        }\r
  ]\r
}\r
\`\`\`\r
\r
#### 失败响应\r
\r
| 状态码 | 描述                 |\r
| ------ | -------------------- |\r
| 401    | 未提供或无效的 Token |\r
\r
### 删除知识\r
\r
#### 功能描述\r
\r
删除用户知识库中的指定知识条目。\r
\r
#### 请求头\r
\r
| 参数名称      | 类型   | 必填 | 描述         |\r
| ------------- | ------ | ---- | ------------ |\r
| Authorization | string | 是   | Bearer Token |\r
\r
#### 请求方法\r
\r
DELETE\r
\r
#### 请求路径\r
\r
\`/knowledge/del_knowledge/{knowledge_id}\`\r
\r
#### 请求参数（Path）\r
\r
| 参数名称     | 类型 | 必填 | 描述    |\r
| ------------ | ---- | ---- | ------- |\r
| knowledge_id | int  | 是   | 知识 ID |\r
\r
#### 请求示例\r
\r
\`\`\`http\r
DELETE /knowledge/del_knowledge/2 HTTP/1.1\r
Authorization: Bearer <your_token>\r
\`\`\`\r
\r
#### 成功响应\r
\r
**状态码**: 200  \r
**响应体结构**:\r
\r
\`\`\`json\r
{\r
  "code": 200,\r
  "message": "删除知识成功!",\r
  "data": null\r
}\r
\`\`\`\r
\r
#### 失败响应\r
\r
| 状态码 | 描述                 |\r
| ------ | -------------------- |\r
| 401    | 未提供或无效的 Token |\r
| 400    | 无效的知识 ID        |\r
\r
### 上传知识（JSONL格式）\r
\r
#### 功能描述\r
\r
通过上传JSONL格式文件批量添加知识到用户知识库。\r
\r
#### 请求头\r
\r
| 参数名称      | 类型   | 必填 | 描述                |\r
| ------------- | ------ | ---- | ------------------- |\r
| Authorization | string | 是   | Bearer Token        |\r
| Content-Type  | string | 是   | multipart/form-data |\r
\r
#### 请求方法\r
\r
POST\r
\r
#### 请求路径\r
\r
\`/knowledge/upload_jsonl_knowledges\`\r
\r
#### 请求参数（Form）\r
\r
| 参数名称 | 类型 | 必填 | 描述      |\r
| -------- | ---- | ---- | --------- |\r
| file     | file | 是   | JSONL文件 |\r
\r
#### 请求示例\r
\r
\`\`\`http\r
POST /knowledge/upload_jsonl_knowledges HTTP/1.1\r
Authorization: Bearer <your_token>\r
Content-Type: multipart/form-data; boundary=----WebKitFormBoundary7MA4YWxkTrZu0gW\r
\r
------WebKitFormBoundary7MA4YWxkTrZu0gW\r
Content-Disposition: form-data; name="file"; filename="knowledge.jsonl"\r
Content-Type: application/octet-stream\r
\r
[文件内容]\r
{"id": 75, "label": "virtual", "name": "勾股定理", "desc": "", "relation": "直角三角形"}\r
{"id": 76, "label": "定义", "name": "勾股定理的定义", "desc": "勾股定理指出：在直角三角形中，两条直角边的平方和等于斜边的平方。数学表达式为：若直角边长为$a$和$b$，斜边长为$c$，则$a^2 + b^2 = c^2$。这是欧几里得几何中最著名的定理之一。", "relation": "勾股定理"}\r
\`\`\`\r
\r
#### 成功响应\r
\r
**状态码**: 201  \r
**响应体结构**:\r
\r
\`\`\`json\r
{\r
    "code": 201,\r
    "message": "新增知识成功!",\r
    "data": null\r
}\r
\`\`\`\r
\r
#### 失败响应\r
\r
| 状态码 | 描述                 |\r
| ------ | -------------------- |\r
| 401    | 未提供或无效的 Token |\r
| 400    | 文件格式错误         |\r
\r
## 多模态输入\r
\r
### 音频识别文字\r
\r
#### 功能描述\r
\r
将用户上传的音频文件（WAV 格式）转换为文本，并返回识别结果。\r
\r
#### 请求头\r
\r
| 参数名称      | 类型   | 必填 | 描述                |\r
| ------------- | ------ | ---- | ------------------- |\r
| Authorization | string | 是   | Bearer Token        |\r
| Content-Type  | string | 是   | multipart/form-data |\r
\r
#### 请求参数\r
\r
| 参数名称 | 类型       | 必填 | 描述                           |\r
| -------- | ---------- | ---- | ------------------------------ |\r
| file     | UploadFile | 是   | 用户上传的音频文件（WAV 格式） |\r
\r
#### 请求示例\r
\r
\`\`\`http\r
POST /multipart/upload_audio HTTP/1.1\r
Authorization: Bearer <your_token>\r
Content-Type: multipart/form-data; boundary=----WebKitFormBoundary7MA4YWxkTrZu0gW\r
\r
------WebKitFormBoundary7MA4YWxkTrZu0gW\r
Content-Disposition: form-data; name="file"; filename="audio.wav"\r
Content-Type: audio/wav\r
\r
<binary data>\r
------WebKitFormBoundary7MA4YWxkTrZu0gW--\r
\`\`\`\r
\r
#### 成功响应\r
\r
**状态码**: 200  \r
**响应体结构**:\r
\r
\`\`\`json\r
{\r
  "code": 200,\r
  "message": "上传成功!",\r
  "data": "识别后的文本内容"\r
}\r
\`\`\`\r
\r
#### 失败响应\r
\r
| 状态码 | 描述                       |\r
| ------ | -------------------------- |\r
| 400    | 无法识别，请上传清晰的音频 |\r
| 401    | 未提供或无效的 Token       |\r
| 500    | 服务器内部错误             |\r
\r
### 图片OCR转文字\r
\r
#### 功能描述\r
\r
将用户上传的图片文件进行 OCR 处理，提取图片中的文本内容，并返回识别结果。\r
\r
#### 请求头\r
\r
| 参数名称      | 类型   | 必填 | 描述                |\r
| ------------- | ------ | ---- | ------------------- |\r
| Authorization | string | 是   | Bearer Token        |\r
| Content-Type  | string | 是   | multipart/form-data |\r
\r
#### 请求参数\r
\r
| 参数名称 | 类型       | 必填 | 描述               |\r
| -------- | ---------- | ---- | ------------------ |\r
| file     | UploadFile | 是   | 用户上传的图片文件 |\r
\r
#### 请求示例\r
\r
\`\`\`http\r
POST /multipart/upload_image HTTP/1.1\r
Authorization: Bearer <your_token>\r
Content-Type: multipart/form-data; boundary=----WebKitFormBoundary7MA4YWxkTrZu0gW\r
\r
------WebKitFormBoundary7MA4YWxkTrZu0gW\r
Content-Disposition: form-data; name="file"; filename="image.jpg"\r
Content-Type: image/jpeg\r
\r
<binary data>\r
------WebKitFormBoundary7MA4YWxkTrZu0gW--\r
\`\`\`\r
\r
#### 成功响应\r
\r
**状态码**: 200  \r
**响应体结构**:\r
\r
\`\`\`json\r
{\r
  "code": 200,\r
  "message": "上传成功!",\r
  "data": "识别后的文本内容"\r
}\r
\`\`\`\r
\r
#### 失败响应\r
\r
| 状态码 | 描述                       |\r
| ------ | -------------------------- |\r
| 400    | 无法识别，请上传清晰的图片 |\r
| 401    | 未提供或无效的 Token       |\r
| 500    | 服务器内部错误             |\r
\r
\r
\r
# 状态码\r
\r
- **200 OK**: 请求成功，返回相关问题列表。\r
- **201 Created**: 请求已成功处理，并且在服务器上创建了新的资源。适用于用户注册成功的情况。\r
- **200 OK**: 请求成功。适用于用户登录成功、刷新令牌成功等情况。\r
- **409 Conflict**: 请求无法完成，因为资源的当前状态与请求的操作冲突。适用于用户名已存在的情况。\r
- **400 Bad Request**: 请求无效，服务器无法理解请求或请求参数格式不正确。常见于用户名格式不合法、密码格式不合法等情况。\r
- **401 Unauthorized**: 请求未通过身份验证。常见于无效的刷新令牌或缺少授权头时。\r
- **404 Not Found**: 在知识库中没有找到与查询问题相关的问题。\r
- **409 Conflict** :资源已经存在或与其他资源冲突。\r
- **500 Internal Server Error**：服务器错误，可能是数据库查询、文件生成或存储过程中出现异常。\r
\r
# 错误处理\r
\r
- **UnionException**: 所有接口在出现业务逻辑错误时，都会抛出 \`UnionException\`，并返回相应的错误代码和消息。例如，用户名已存在、密码错误、刷新令牌无效等。返回格式示例如下：\r
\r
  \`\`\`json\r
  {\r
      "code": "404",\r
      "message": "没有找到相关问题!",\r
      "data":[]\r
  }\r
  \`\`\`\r
\r
\r
- **IntegrityError**: 在数据库操作中出现完整性错误（如唯一约束冲突时），会回滚事务并抛出错误信息。`,M=["onClick"],G=["onClick"],L={__name:"DevDoc",setup(N){let E=A().proxy.config.settings,l=A().proxy.screen,u=b([]),i=null,d=b([]),p=q(!1);function y(o,e){if(o.localName==="h2"&&l.type==="hor"){d[e]=!d[e];return}o.scrollIntoView(),l.type==="ver"&&i.scrollBy(0,-200)}function f(){const o=i.scrollHeight,e=i.scrollTop,n=l.height;let r=u.map(a=>parseInt(a.dom.offsetTop-e));r.push(parseInt(o-e)),u.forEach((a,s)=>{r[s]<0&&r[s+1]<=0||r[s]>=n&&r[s+1]>n?a.inSight=!1:a.inSight=!0;let c=a.items.map(h=>parseInt(h.dom.offsetTop-e));c.push(parseInt(r[s+1])),a.items.forEach((h,k)=>{c[k]<0&&c[k+1]<=0||c[k]>=n&&c[k+1]>n?h.inSight=!1:h.inSight=!0})})}function B(){x(()=>{if(!i)return;u.length=0;let o=[];i.querySelectorAll("h2").forEach(n=>o.push(n)),i.querySelectorAll("h3").forEach(n=>o.push(n)),o.sort((n,r)=>n.getAttribute("data-line")-r.getAttribute("data-line"));let e=null;o.forEach((n,r)=>{d[r]===void 0&&(d[r]=!0),n.localName==="h2"?(e!==null&&u.push(e),e={title:n.innerText,dom:n,inSight:!1,items:[]}):n.localName==="h3"&&e.items.push({title:n.innerText,dom:n,inSight:!1})}),u.push(e),f()})}return v(()=>{i=document.getElementsByClassName("md-editor-preview-wrapper")[0],i.addEventListener("scroll",f),B()}),(o,e)=>{const n=D("Markdown");return T(),g("div",{class:m(["area",t(l).type])},[_("div",{class:m(["menu",{active:t(p)}])},[(T(!0),g(C,null,z(t(u),(r,a)=>(T(),g("div",null,[_("div",{class:m(["class","buttonEffect",{active:r.inSight}]),onClick:s=>y(r.dom,a)},[w(_("img",{class:m(["icon",{folded:t(d)[a]}]),src:F,alt:">"},null,2),[[j,t(l).type==="hor"]]),H(" "+P(r.title),1)],10,M),_("div",{class:m(["folder",{folded:t(d)[a]&&t(l).type==="hor"}])},[(T(!0),g(C,null,z(r.items,s=>(T(),g("div",{class:m(["item","buttonEffect",{active:s.inSight}]),onClick:c=>y(s.dom)},P(s.title),11,G))),256))],2)]))),256))],2),w(_("img",{class:"menuButton buttonEffect",src:S,onClick:e[0]||(e[0]=r=>I(p)?p.value=!t(p):p=!t(p))},null,512),[[j,t(l).type==="ver"]]),W(n,{class:"md",md:t(O),theme:t(E).theme,onOnHtmlChanged:B},null,8,["md","theme"])],2)}}},U=$(L,[["__scopeId","data-v-cdfaf360"]]);export{U as default};

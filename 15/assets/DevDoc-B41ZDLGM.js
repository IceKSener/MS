import{_ as e,g as t,i as s,o,c as a,y as i,u as c}from"./index-f_SZIbh7.js";const u=`# API文档\r
\r
## 系统启动接口\r
\r
**请求路径**： \`/api/pre\`\r
\r
**请求方式**：\`GET\`\r
\r
**请求参数**： 无\r
\r
**请求示例**：\r
\r
\`\`\`json\r
GET /api/pre\r
\`\`\`\r
\r
**功能描述**：\r
\r
​	该接口用于系统启动时标识系统已成功启动并且准备好运行。触发该接口后，系统将进行必要的预热操作，以确保后续请求能够高效响应。\r
\r
**成功响应**:\r
\r
- **状态码**: \`200 OK\`\r
- **响应体**:\r
\r
\`\`\`json\r
{\r
  "code": 200,\r
  "message": "启动成功！"\r
}\r
\`\`\`\r
\r
## 用户注册\r
\r
**请求路径**：\`/api/register\`\r
\r
**请求方式**： \`POST\`\r
\r
**请求参数**：\r
\r
| 参数名称   | 类型     | 是否必须 | 描述                           |\r
| ---------- | -------- | -------- | ------------------------------ |\r
| \`username\` | \`string\` | 是       | 用户名，必须符合规定的格式。   |\r
| \`password\` | \`string\` | 是       | 密码，必须符合规定的强度要求。 |\r
\r
**请求示例**：\r
\r
\`\`\`json\r
{\r
  "username": "new_user",\r
  "password": "StrongPassword123!"\r
}\r
\`\`\`\r
\r
**功能描述**：\r
\r
​	该接口用于用户注册，用户必须输入符合规定格式的用户名和符合密码强度要求的密码。如果用户名和密码有效，将会在系统中创建新用户，并返回相关信息。\r
\r
**成功响应**：\r
\r
| 状态码        | 描述     |\r
| ------------- | -------- |\r
| \`201 Created\` | 注册成功 |\r
\r
**响应体示例**：\r
\r
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
- \`code\`: 响应状态码，\`201\` 表示创建成功。\r
- \`message\`: 注册成功的提示信息。\r
- \`data\`: 返回新注册用户的信息。\r
  - \`username\`: 注册的用户名。\r
  - \`id\`: 新用户在数据库中的唯一标识符（用户ID）。\r
\r
**失败响应**：\r
\r
| 状态码            | 错误信息                | 描述                                                       |\r
| ----------------- | ----------------------- | ---------------------------------------------------------- |\r
| \`409 Conflict\`    | "用户名已存在!"         | 如果数据库中已存在相同的用户名，则返回该错误。             |\r
| \`400 Bad Request\` | "当注册用户时发生错误!" | 在处理请求过程中发生错误，如数据库操作失败。               |\r
| \`400 Bad Request\` | "用户名格式不合法!"     | 用户名不符合规定的格式，可能包含非法字符或长度不符合要求。 |\r
| \`400 Bad Request\` | "密码格式不合法!"       | 密码不符合规定的强度要求。                                 |\r
\r
## 用户登录\r
\r
**请求路径**：\`/api/login\`\r
\r
**请求方式**：\`POST\`\r
\r
**请求参数**：\r
\r
| 参数名称   | 类型     | 是否必须 | 描述     |\r
| ---------- | -------- | -------- | -------- |\r
| \`username\` | \`string\` | 是       | 用户名   |\r
| \`password\` | \`string\` | 是       | 用户密码 |\r
\r
**请求示例**：\r
\r
\`\`\`json\r
{\r
  "username": "existing_user",\r
  "password": "CorrectPassword123"\r
}\r
\`\`\`\r
\r
**功能描述**：\r
\r
​	该接口用于用户登录，用户通过提供        \`username\` 和 \`password\` 进行身份验证。如果用户名和密码匹配，系统将返回一个 \`access_token\` 和 \`refresh_token\`，用于后续的 API 访问。如果用户名或密码错误，将返回相应的错误信息。\r
\r
**成功响应**\r
\r
| 状态码   | 描述     |\r
| -------- | -------- |\r
| \`200 OK\` | 登录成功 |\r
\r
**响应体示例**:\r
\r
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
- \`code\`：响应状态码，\`200\` 表示成功。\r
- \`message\`： 登录成功的提示信息。\r
- \`data\`： 返回的用户认证数据。\r
  - \`access_token\`: 登录后获取的访问令牌。\r
  - \`token_type\`: 令牌类型，通常为 \`bearer\`。\r
  - \`refresh_token\`: 用于刷新 \`access_token\` 的刷新令牌。\r
\r
**失败响应**：\r
\r
| 状态码            | 错误信息        | 描述                               |\r
| ----------------- | --------------- | ---------------------------------- |\r
| \`400 Bad Request\` | "用户名不存在!" | 用户名在系统中不存在。             |\r
| \`400 Bad Request\` | "密码错误!"     | 提供的密码与数据库中的密码不匹配。 |\r
\r
## 刷新令牌\r
\r
**请求路径**： \`/api/refresh\`\r
\r
**请求方式**： \`POST\`\r
\r
**请求参数**：\r
\r
| 参数名称        | 类型     | 是否必须 | 描述                                          |\r
| --------------- | -------- | -------- | --------------------------------------------- |\r
| \`refresh_token\` | \`string\` | 是       | 用户的刷新令牌，用于获取新的 \`access_token\`。 |\r
\r
**请求示例**：\r
\r
\`\`\`json\r
{\r
    "refresh_token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJhZG1pbiIsImV4cCI6MTczOTc1Njc2OX0.W8UALi4bLcNZTJ7giIJfDg8n4IRLAmuomoibBVbRw7E"\r
}\r
\`\`\`\r
\r
**功能描述**：\r
\r
​	该接口用于刷新      \`access_token\`。用户需要提供有效的 \`refresh_token\`，如果该令牌有效且格式正确，则会返回一个新的 \`access_token\`。若 \`refresh_token\` 无效或格式不正确，将返回相应的错误信息。\r
\r
**成功响应**\r
\r
| 状态码   | 描述                                |\r
| -------- | ----------------------------------- |\r
| \`200 OK\` | 请求成功，\`access_token\` 刷新成功。 |\r
\r
**响应体示例**:\r
\r
\`\`\`json\r
{\r
    "code": 200,\r
    "message": "access_token刷新成功!",\r
    "data": {\r
        "access_token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJhZG1pbiIsImV4cCI6MTczOTE1OTM0MH0.tyf3fjcI1qpeOnuaRkXnYUiinLwFSUz4vnS3GdKgoqU",\r
        "token_type": "bearer"\r
    }\r
}\r
\`\`\`\r
\r
- \`code\`: 响应状态码，\`200\` 表示成功。\r
- \`message\`: 响应消息，表示 \`access_token\` 刷新成功。\r
- \`data \`: 包含新的 \`access_token\` 和\`token_type\`。\r
  - \`access_token\`: 新的访问令牌。\r
  - \`token_type\`: 令牌类型，通常为 \`bearer\`。\r
\r
**失败响应**\r
\r
| 状态码             | 错误信息                   | 描述                                             |\r
| ------------------ | -------------------------- | ------------------------------------------------ |\r
| \`401 Unauthorized\` | "refresh token无效!"       | 提供的刷新令牌无效，可能已过期或与用户名不匹配。 |\r
| \`400 Bad Request\`  | "refresh_token格式不正确!" | 提供的刷新令牌格式不正确，无法解析。             |\r
\r
## 聊天模型响应生成（流式）\r
\r
**请求路径**： \`/v1/chat/completions\`\r
\r
**请求方式**： \`POST\`\r
\r
**请求参数**：\r
\r
| 参数名称      | 类型      | 是否必须 | 默认值 | 描述                                                         |\r
| ------------- | --------- | -------- | ------ | ------------------------------------------------------------ |\r
| \`model\`       | \`string\`  | 是       | 无     | 使用的模型名称，如 GPT-3、Dashscope 等。                     |\r
| \`messages\`    | \`array\`   | 是       | 无     | 包含消息内容的列表，每个消息为字典格式，必须包含 \`role\`（用户/助手）和 \`content\`（消息内容）。 |\r
| \`max_tokens\`  | \`integer\` | 否       | 1000   | 最大 token 数，控制回答的最大长度。                          |\r
| \`temperature\` | \`float\`   | 否       | 1.0    | 控制生成文本的随机性，值越高越随机。                         |\r
\r
**请求头**：\r
\r
| 参数            | 类型     | 是否必须 | 描述                                                         |\r
| --------------- | -------- | -------- | ------------------------------------------------------------ |\r
| \`Authorization\` | \`string\` | 是       | 包含 Bearer token 的授权头，格式为 \`Bearer <token>\`，用于验证用户身份。 |\r
\r
**请求示例**：\r
\r
\`\`\`json\r
POST /v1/chat/completions HTTP/1.1\r
Host: api.example.com\r
Authorization: Bearer <your_token>\r
\r
{\r
  "model": "dashscope-v1",\r
  "messages": [\r
    {"role": "user", "content": "What is the capital of France?"}\r
  ],\r
  "max_tokens": 150,\r
  "temperature": 0.7\r
}\r
\`\`\`\r
\r
**功能描述**：\r
\r
​	此接口用于生成聊天模型的响应，并支持流式返回。用户发送问题后，系统会通过调用模型（如 Dashscope）生成响应，并在响应过程中逐步返回每个片段。当生成完整的回答时，最后一个响应将带有 \`final: true\` 标志，表示流式响应结束。\r
\r
**成功响应**：\r
\r
​	此接口采用流式返回，当用户发送问题后，系统将逐步返回每个生成的片段。响应将包括多次 \`yield\`，直到最终完整的回答返回，并标明 \`final: true\`。每个片段的响应结构如下：\r
\r
**返回数据格式**：\r
\r
​	每个流式返回的片段都将是一个 JSON 对象，结构如下：\r
\r
\`\`\`json\r
{\r
  "id": "unique_response_id",\r
  "object": "text_completion",\r
  "created": 1640995200,\r
  "model": "dashscope-v1",\r
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
- \`id\`: 响应的唯一 ID。\r
- \`object\`: 表示响应类型，始终为 \`"text_completion"\`。\r
- \`created\`: 响应创建的时间戳。\r
- \`model\`: 使用的模型名称。\r
- \`choices\`: 响应的内容和生成信息。每个 \`choice\` 包含一个 \`message\` 字段，表示该片段的内容和生成原因（如 \`"length"\` 表示因为超过长度限制停止生成）。\r
- \`usage\`：表示该响应的 token 使用情况。\r
  - \`total_tokens\`: 消耗的总 token 数。\r
  - \`prompt_tokens\`: 输入的 prompt 消耗的 token 数。\r
  - \`completion_tokens\`: 输出的生成内容消耗的 token 数。\r
- \`final\`: 布尔值，表示当前片段是否为最终完整响应。\`false\` 表示该片段是中间结果，\`true\` 表示响应结束。\r
\r
**流式响应**：\r
\r
​	在流式返回中，系统会逐步发送多个包含   \`final: false\` 的响应片段，直到最终的完整响应带有 \`final: true\`。\r
\r
- **中间片段**：每个中间片段的 \`final\` 字段为 \`false\`，表示这只是完整回答的一部分，尚未结束。\r
- **最终响应**：当完整的回答生成时，返回的最后一个响应会包含 \`final: true\`，表示响应已完成。\r
\r
**最终响应示例**：\r
\r
​	当回答完全生成时，返回的最后一个响应将包含完整的回答并标记为    \`final: true\`：\r
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
**失败响应**：\r
\r
| 状态码             | 错误信息                    | 描述                                                         |\r
| ------------------ | --------------------------- | ------------------------------------------------------------ |\r
| \`401 Unauthorized\` | "未提供 Authorization 头！" | 如果请求头中没有提供 \`Authorization\` 字段，将返回此错误。    |\r
| \`401 Unauthorized\` | "无效的token!"              | 如果提供的 \`token\` 无效或无法在数据库中找到匹配的用户，返回此错误。 |\r
\r
## 查询相关问题\r
\r
**请求路径**： \`/v1/related_questions\`\r
\r
**请求方式**： \`POST\`\r
\r
**请求参数**：\r
\r
| 参数名称        | 类型     | 是否必须 | 描述                                                         |\r
| --------------- | -------- | -------- | ------------------------------------------------------------ |\r
| \`Authorization\` | \`string\` | 是       | 包含 Bearer token 的授权头，格式为 \`Bearer <token>\`，用于验证用户身份。 |\r
| \`question\`      | \`string\` | 是       | 用户输入的查询问题，用于在知识库中进行匹配。                 |\r
\r
**请求体示例**：\r
\r
\`\`\`json\r
{\r
    "question": "解高次方程x^5^+x^2^-1=0"\r
}\r
\`\`\`\r
\r
**功能描述**：\r
\r
​	该接口用于根据用户提供的问题查询相关的知识库问题。如果提供的     \`Authorization\` 头中的\r
 \`token\` 有效且用户存在，则会返回与问题相关的其他问题。\r
\r
**成功响应**：\r
\r
| 状态码   | 描述                       |\r
| -------- | -------------------------- |\r
| \`200 OK\` | 请求成功，返回相关问题列表 |\r
\r
**响应体示例**：\r
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
- \`message\`: 响应消息，表示操作的状态。\r
- \`status\`: 请求的状态，\`success\` 表示请求成功。\r
- \`related_questions\`: 与输入问题相关的知识库问题列表。\r
\r
**失败响应**：\r
\r
| 状态码             | 错误信息                        | 描述                                                         |\r
| ------------------ | ------------------------------- | ------------------------------------------------------------ |\r
| \`401 Unauthorized\` | "未提供 Authorization 头！"     | 如果请求头中没有提供 \`Authorization\` 字段，将返回此错误。    |\r
| \`401 Unauthorized\` | "无效的token!"                  | 如果提供的 \`token\` 无效或无法在数据库中找到匹配的用户，返回此错误。 |\r
| \`400 Bad Request\`  | "请求体中缺少 'question' 字段!" | 如果请求体中没有 \`question\` 字段，将返回此错误。             |\r
| \`404 Not Found\`    | "没有找到相关问题"              | 如果在知识库中没有找到与输入问题相关的其他问题，将返回该错误。 |\r
\r
## 获取参考文件\r
\r
**请求路径**：\`/v1/reference_files\`\r
\r
**请求方式**： \`GET\`\r
\r
**请求参数**：\r
\r
| 参数名称      | 类型     | 是否必须 | 默认值 | 描述                                  |\r
| ------------- | -------- | -------- | ------ | ------------------------------------- |\r
| \`question_id\` | \`string\` | 是       | 无     | 用户查询的问题 ID，用于匹配相关文档。 |\r
\r
**请求头**：\r
\r
| 参数            | 类型     | 是否必须 | 描述                                                         |\r
| --------------- | -------- | -------- | ------------------------------------------------------------ |\r
| \`Authorization\` | \`string\` | 是       | 包含 Bearer token 的授权头，格式为 \`Bearer <token>\`，用于验证用户身份。 |\r
\r
**请求示例**：\r
\r
\`\`\`json\r
GET /v1/reference_files?question_id=12345 HTTP/1.1\r
Host: api.example.com\r
Authorization: Bearer <your_token>\r
\`\`\`\r
\r
**功能描述**：\r
\r
​	根据     \`question_id\` 获取与用户查询问题相关的内部文档以及外部资源链接。\r
\r
**成功响应**：\r
\r
| 状态码   | 描述     |\r
| -------- | -------- |\r
| \`200 OK\` | 请求成功 |\r
\r
**响应体示例**：\r
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
- **message** (string): 响应信息，表示请求是否成功。\r
- **status** (string): 请求状态，\`success\` 表示成功，\`failure\` 表示失败。\r
- **reference_files** (array): 一个包含文档信息的数组，数组内每一项表示一个文档。\r
  - **type** (string): 文档类型，\`internal\` 表示内部文档，\`external\` 表示外部资源。\r
  - **name** (string): 文档名称或描述。\r
  - **url** (string): 文档的链接地址。\r
\r
**失败响应**：\r
\r
| 状态码                      | 描述                                                         |\r
| --------------------------- | ------------------------------------------------------------ |\r
| \`401 Unauthorized\`          | 未提供 \`Authorization\` 头或 \`token\` 无效。                   |\r
| \`404 Not Found\`             | 未找到指定的 \`question_id\` 或相关文档。                      |\r
| \`500 Internal Server Error\` | 服务器错误，可能是数据库查询、文件生成或存储过程中出现异常。 |\r
\r
**响应体示例（失败：未找到相关文档）**:\r
\r
\`\`\`json\r
{\r
  "message": "找不到指定question_id的对话!",\r
  "status": "failure",\r
  "reference_files": []\r
}\r
\`\`\`\r
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
- **IntegrityError**: 在数据库操作中出现完整性错误（如唯一约束冲突时），会回滚事务并抛出错误信息。`,d={class:"area"},_={__name:"DevDoc",setup(l){return t().proxy.conifg,(n,p)=>{const r=s("Markdown");return o(),a("div",d,[i(r,{class:"md",md:c(u),theme:n.config.settings.theme},null,8,["md","theme"])])}}},k=e(_,[["__scopeId","data-v-952461ad"]]);export{k as default};

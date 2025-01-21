import{_ as o,r as s,k as c,M as i,H as a,m as d,o as p,c as m,b as u}from"./index-20SuupcP.js";const _=`## markdown文档\r
\`\`\`cpp\r
#include <opencv/opencv2.hpp>\r
#include <ncnn/net.h>\r
using namespace std;\r
int main(){\r
    cv::Mat img = cv::imread("MyPicture.jpg", cv::ImreadModes::IMREAD_COLOR);\r
    ncnn::Net net;\r
    net.opt.use_vulkan_compute = true;\r
    net.load_param("Model.param");\r
    net.load_model("Model.bin");\r
    ncnn::Mat in = ncnn::Mat::from_pixels(img.data, ncnn::Mat::PIXEL_BGR, img.cols, img.rows);\r
    ncnn::Mat out;\r
    ncnn::Extractor ex = net.create_extractor();\r
    ex.input("in0", in);\r
    ex.extract("out0",out);\r
    out.to_pixels(img.data,ncnn::Mat::PIXEL_BGR);\r
    cv::imshow("output", img);\r
    cv::waitKey();\r
}\r
\`\`\`\r
\r
---\r
\r
# 文档\r
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
| a | string | 用户名 |\r
| r | string | 密码 |`,l={class:"area"},g=["innerHTML"],h={__name:"DevDoc",setup(v){const e=s("");return c(()=>{const n=new i({highlight:(t,r)=>{if(r&&a.getLanguage(r))try{return a.highlight(t,{language:r}).value}catch{}return""}});n.use(d),e.value=n.render(_)}),(n,t)=>(p(),m("div",l,[u("div",{class:"md",innerHTML:e.value},null,8,g)]))}},x=o(h,[["__scopeId","data-v-337295b0"]]);export{x as default};

onmessage=(e)=>{
    e=e.data
    throw Error("123456")
    return
    
}

function query(url){
    fetch(api.path+'/v1/chat/completions',{
        signal:msg.controller.signal,
        method:'POST',
        headers,
        body:JSON.stringify({
            session_id:addTo.session_id,
            model:'qwen2.5-math-7b-instruct',
            messages,
            max_tokens: 1000,
            // temperature: 1.0,
            temperature: config.settings.temperature,
        })
    }).then(r => {
        if(r.status===401){
            //刷新token
            eventBus.emit("refreshToken",{onSuccess(){
                genAns(question, msg, addTo)
            },onFail(){
                answerStr="[登录过期，请重新登录]"
                msg.status="error"
            }})
            return
        }else if(!r.ok) throw Error(r.status+": "+r.statusText)
        let _=new Worker("./js/test.js")
        _.onerror=e=>console.error(e)
        _.postMessage("")
        const reader = r.body.getReader();
        const decoder = new TextDecoder();
        let result=''
        // 循环读取流数据
        function processStream() {
            reader.read().then(({ done, value }) => {
                if (done) {
                    msg.status='finished'
                    return;
                }
                result += decoder.decode(value, {stream:true});
                //手动尝试解析json
                let i=0,j=0
                while(true){
                    j=result.indexOf('}',i)+1
                    if(j==0) break
                    try{
                        let obj=JSON.parse(result.substring(0,j))
                        msg.id=obj['id']
                        if(obj['final']){
                            addTo.timestamp=obj.created
                            sortChats()
                            msg.status='finished'
                            genRelative(msg, addTo)
                            return;
                        }
                        // 解析回答并添加到结果中
                        answerStr += obj['choices'][0]['message']['content'];
                        result=result.substring(j)
                        i=0
                    }catch{
                        i=j
                    }
                }
                // 可以实时更新前端界面，显示部分数据
                // 继续读取
                processStream();
            }).catch(error => {
                if(error.name==='AbortError'){
                    answerStr=''
                    msg.status="finished"
                    return
                }
                answerStr+='[解析异常]'
                msg.status='error'
                console.error(error);
            })
        }
        // 启动流处理
        processStream();
    }).catch(error => {
        if(error.name==='AbortError'){
            answerStr=''
            msg.status="finished"
            return
        }
        answerStr+='[请求异常]'
        msg.status='error'
        console.error(error);
    });
}
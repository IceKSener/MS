itV=null
onmessage=(e)=>{
    e=e.data
    if(e[0]==='setTimer'){
        itV=setInterval(()=>postMessage(itV),e[1])
    }
    if(e[0]==='clearTimer'){
        clearInterval(itV)
        self.close()
    }
    return
    
}
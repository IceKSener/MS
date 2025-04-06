text=[]
onmessage=(e)=>{
    e=e.data
    if(e[0]===0) text.push(e[1])
    else if(e[0]===1){ let x=text; text=[]; postMessage(x.join('')) }
    else if(e[0]===2) text=[]
    return
}
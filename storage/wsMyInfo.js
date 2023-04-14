let wsMyInfo= {
    listInf(p1){
        return `
        <h1>${p1.textos.t1}</h1>
        <p style="font-size: 0.75rem;">${p1.textos.t2}</p>
        <h3>${p1.textos.t3}</h3>`
    },
}
self.addEventListener("message", (e)=>{
    postMessage(wsMyInfo[`${e.data.module}`](e.data.data))
})
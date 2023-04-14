let wsMyDesc= {
    listDesc(p1){
        return `
        <p>${p1.textos.t1}</p>`
    },
}
self.addEventListener("message", (e)=>{
    postMessage(wsMyDesc[`${e.data.module}`](e.data.data))
})
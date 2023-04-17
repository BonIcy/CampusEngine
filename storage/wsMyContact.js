let wsMyContact= {
    justImg(p1){
        return `<img src="${p1.imagee.src}" alt="">`
    },
    justText(p1){
        return `<p>${p1.conta.name}</p>`
    },
    listRedes(p1){
        let plantilla = "";
        p1.forEach((val,id)=>{
            plantilla += `
            <div class="${val.class}"> 
            <img src="${val.logo}" alt="">
            <a href="${val.href}">${val.a}</a>
            </div>`
        });
        return plantilla;
    }
}
self.addEventListener("message",(e)=>{
    postMessage(wsMyContact[`${e.data.module}`](e.data.data));
})
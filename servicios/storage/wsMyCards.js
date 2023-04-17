let wsMyCards= {
    listText(p1){
        return `
        <h1>${p1.textos.t1}</h1>
        <a href="${p1.textos.t2href}">${p1.textos.t2}</a>`
    },
    listCards(p1){
        let plantilla = "";
        p1.forEach((val,id)=>{
            plantilla += `
            <div class="${val.clase}">
            <p>${val.parrafo}</p>
            <img src="${val.img}" alt="">
            <button id="${val.btnId}">${val.btn}</button>
        </div>`
        });
        return plantilla;
    }
}
self.addEventListener("message",(e)=>{
    postMessage(wsMyCards[`${e.data.module}`](e.data.data));
})
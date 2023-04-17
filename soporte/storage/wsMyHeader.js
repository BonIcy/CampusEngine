let wsMyHeader= {
    listImg(p1){
        return `<img id="${p1.imagee.id}" src="${p1.imagee.name2}" alt="">`
    },
    listItems(p1){
        let plantilla = "";
        p1.forEach((val,id)=>{
            plantilla += `
            <a class="${val.class}"href="${val.href}">${val.name}</a>`
        });
        return plantilla;
    }
}
self.addEventListener("message",(e)=>{
    postMessage(wsMyHeader[`${e.data.module}`](e.data.data));
})
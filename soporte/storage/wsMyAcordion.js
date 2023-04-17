let wsMyAcordion={
    listTitle(p1){
        return`
        <h1>${p1.ttl.name}</h1>
        `
    },
    listAcordion(p1){
        let plantilla = "";
        p1.forEach((val,id)=>{
            plantilla += `
            <div class="${val.class}">
              <div class="${val.class2}">${val.title}</div>
              <div class="${val.class3}">
              ${val.rta}<br>
              ${val.rta2}<br>
              ${val.rta3}
              </div>
            </div>
            `
        })
        return plantilla;
    }
}
self.addEventListener("message",(e)=>{
    postMessage(wsMyAcordion[`${e.data.module}`](e.data.data));
})
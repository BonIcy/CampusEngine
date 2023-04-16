import config from "../storage/config.js";

export default {
    show(){
        config.dataMyCards();
         Object.assign(this, JSON.parse(localStorage.getItem("myCards")))
        const ws = new Worker("storage/wsMyCards.js",{type:"module"});
        let id = [];
        let count = 0;
        ws.postMessage({module: "listText",data : this.cadenas});
        ws.postMessage({module : "listCards", data : this.cartas});
        id =[`.textitos`, `#contenedor-tarjetas`];
        ws.addEventListener("message",(e)=>{
            let doc = new DOMParser().parseFromString(e.data, `text/html`);
            document.querySelector(id[count]).append(...doc.body.children);
            (id.length-1==count) ? ws.terminate():count++;
        });
    }
}
import config from "../storage/config.js";
export default {
    show(){
        config.dataMyDesc();
         Object.assign(this, JSON.parse(localStorage.getItem("myDesc")))
        const ws = new Worker("storage/wsMyDesc.js",{type:"module"});
        let id = [`#desx`];
        let count = 0;1
        ws.postMessage({module: "listDesc",data : this.desc});
        id =[`#desx`];
        ws.addEventListener("message",(e)=>{
            let doc = new DOMParser().parseFromString(e.data, `text/html`);
            document.querySelector(id[count]).append(...doc.body.children);
            (id.length-1==count) ? ws.terminate():count++;
        });
    }
}
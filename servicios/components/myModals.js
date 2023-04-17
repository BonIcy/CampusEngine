import config from "../storage/config.js";

export default {
    show(){
        config.dataMyModals();
         Object.assign(this, JSON.parse(localStorage.getItem("myModals")))
        const ws = new Worker("storage/wsMyModals.js",{type:"module"});
        ws.postMessage({module: "listModal",data : this.modal});
        ws.postMessage({module: "listTableP1",data : this.modal});
        ws.postMessage({module: "listTableP2",data : this.modal});
        ws.postMessage({module: "listTableP3",data : this.modal});
        ws.postMessage({module: "listTableP4",data : this.modal});
        let id =[`#modals`, `#miModal`, `#miModal2`, `#miModal3`, `#miModal4`];
        let count = 0;
        ws.addEventListener("message",(e)=>{
            let doc = new DOMParser().parseFromString(e.data, `text/html`);
            document.querySelector(id[count]).append(...doc.body.children);
            (id.length-1==count) ? ws.terminate():count++;
        });
    }
}
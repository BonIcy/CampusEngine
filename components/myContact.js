import config from "../storage/config.js";
export default {
    show(){
        config.dataMyContact();
         Object.assign(this, JSON.parse(localStorage.getItem("myContact")))
        const ws = new Worker("storage/wsMyContact.js",{type:"module"});
        let id = [];
        let count = 0;
        ws.postMessage({module: "justImg",data : this.image});
        ws.postMessage({module : "justText", data : this.cont});
        ws.postMessage({module: "listRedes",data : this.social});
        id =[`.imgSpace`, `.cont`, `.contact-info-container`];
        ws.addEventListener("message",(e)=>{
            let doc = new DOMParser().parseFromString(e.data, `text/html`);
            document.querySelector(id[count]).append(...doc.body.children);
            (id.length-1==count) ? ws.terminate():count++;
        });
    }
}
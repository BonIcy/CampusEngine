import config from "../storage/config.js";
export default {
    show(){
        config.dataMyInfo();
         Object.assign(this, JSON.parse(localStorage.getItem("myInfo")))
        const ws = new Worker("storage/wsMyInfo.js",{type:"module"});
        let id = [`presx`];
        let count = 0;1
        ws.postMessage({module: "listInf",data : this.infos});
        id =[`#presx`];
        ws.addEventListener("message",(e)=>{
            let doc = new DOMParser().parseFromString(e.data, `text/html`);
            document.querySelector(id[count]).append(...doc.body.children);
            (id.length-1==count) ? ws.terminate():count++;
        });
    }
}
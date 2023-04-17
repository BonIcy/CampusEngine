import config from "../storage/config.js";
export default {
    show(){
        config.dataMyHeader();
         Object.assign(this, JSON.parse(localStorage.getItem("myHeader")))
        const ws = new Worker("storage/wsMyHeader.js",{type:"module"});
        let id = [];
        let count = 0;
        ws.postMessage({module: "listImg",data : this.image});
        ws.postMessage({module : "listItems", data : this.headers});
        id =[`.container1`, `.container1`];
        ws.addEventListener("message",(e)=>{
            let doc = new DOMParser().parseFromString(e.data, `text/html`);
            document.querySelector(id[count]).append(...doc.body.children);
            (id.length-1==count) ? ws.terminate():count++;
        });
    }
}
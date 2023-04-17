import config from "../storage/config.js";
export default{
    show(){
        config.dataMyAcordion();
        Object.assign(this, JSON.parse(localStorage.getItem("myAcordion")))
        const ws = new Worker("storage/wsMyAcordion.js", {type:"module"});
        
        ws.postMessage({module: "listTitle", data:this.txt})
        ws.postMessage({module:"listAcordion", data: this.acordion})
        let id=[`.FAQ`,`.accordion`];
        let count = 0;
        ws.addEventListener("message",(e)=>{
            let doc = new DOMParser().parseFromString(e.data, `text/html`);
            document.querySelector(id[count]).append(...doc.body.children);
            (id.length-1==count) ? ws.terminate():count++;
        });
    }
}
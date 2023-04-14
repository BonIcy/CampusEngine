import config from "../storage/config.js";
//los COMENTARIOS solo los voy a hacer en el worker del header para que se entienda un poco
export default {
    show(){
        config.dataMyHeader();
         Object.assign(this, JSON.parse(localStorage.getItem("myHeader")))
        //creamos el worker
        const ws = new Worker("storage/wsMyHeader.js",{type:"module"});
        let id = [];
        let count = 0;
        //enviamos un msg al worker
        ws.postMessage({module: "listImg",data : this.image});
        ws.postMessage({module : "listItems", data : this.headers});
        id =[`.container1`, `.container1`];
        
        //esto es lo que el worker recibe
        ws.addEventListener("message",(e)=>{
            //parseamos lo que trae el evento, es decir, el mensaje
            let doc = new DOMParser().parseFromString(e.data, `text/html`);//recordar poner el html y no el xml

            //insertamos el id de clasicos en nuestro html
            document.querySelector(id[count]).append(...doc.body.children);

            //terminamos el worker
            (id.length-1==count) ? ws.terminate():count++;
        });
    }
}
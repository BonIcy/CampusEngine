let wsMyModals={
    listModal(p1){
        return` 
       `
       //aqui estuve intentando insertar absolutamente todo el html pero tuve muchisimos inconvenientes:(
    },
    listTableP1(p1){
        let plantilla = p1.map((val, id)=>{
            return ` 
            <table class="tabl">
            <thead id="tablita">
            <tr>
              ${val.theader.map((val2, id2)=>{return `<th>${val2.name}</th>`}).join("")}
            </tr>
            </thead>
            <tbody class="bodyTable">
            <tr>
            ${val.hunters.map((val2, id2)=>{return`
            <th>${val2.name}</th>`}).join("")} 
            </tr>`
        })
        return plantilla.join("")
    },
    listTableP2(p1){
        let plantilla = p1.map((val, id)=>{
            return ` 
            <table class="table text-white">
            <thead id="tablita">
            <tr>
              ${val.theader.map((val2, id2)=>{return `<th>${val2.name}</th>`}).join("")}
            </tr>
            </thead>
            <tbody class="bodyTable">
            <tr>
            ${val.cafeteria.map((val2, id2)=>{return`<th>${val2.name}</th>`}).join("")} 
            </tr>`
        })
        return plantilla.join("")
    },
    listTableP3(p1){
        let plantilla = p1.map((val, id)=>{
            return ` 
            <table class="table text-white">
            <thead id="tablita">
            <tr>
              ${val.theader.map((val2, id2)=>{return `<th>${val2.name}</th>`}).join("")}
            </tr>
            </thead>
            <tbody class="bodyTable">
            <tr>
            ${val.octavo.map((val2, id2)=>{return`<th>${val2.name}</th>`}).join("")} 
            </tr>`
        })
        return plantilla.join("")
    },
    listTableP4(p1){
        let plantilla = p1.map((val, id)=>{
            return ` 
            <table class="table text-white">
            <thead id="tablita">
            <tr>
              ${val.theader.map((val2, id2)=>{return `<th>${val2.name}</th>`}).join("")}
            </tr>
            </thead>
            <tbody class="bodyTable">
            <tr>
            ${val.bano.map((val2, id2)=>{return`<th>${val2.name}</th>`}).join("")} 
            </tr>`
        })
        return plantilla.join("")
    },
}
self.addEventListener("message",(e)=>{
    postMessage(wsMyModals[`${e.data.module}`](e.data.data));
})
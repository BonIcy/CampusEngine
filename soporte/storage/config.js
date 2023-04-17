export default {
    dataMyHeader(){
        localStorage.setItem("myHeader", JSON.stringify({
                image: {
                    imagee:{
                    name:"images/logoWhite.png",
                    name2:"../images/logoWhite.png",
                    id:"logo"},
                 },
                headers:[
                {name:"Inicio",
                class:"alink",
                href:"/index.html"},
                {name:"Servicios",
                class:"alink",
                href:"/servicios/index.html"},
                {name:"Soporte",
                class:"alink",
                href:"/soporte/index.html"}
            ]
        }))
    },
    dataMyAcordion(){
        localStorage.setItem("myAcordion", JSON.stringify({
            txt:{
                ttl:{
                    name:"Preguntas frecuentes"
                }
            },
            acordion:[
                {
                    class:"accordion-item",
                    class2:"accordion-header",
                    title:"¿Que servicios ofrece campus?",
                    class3:"accordion-content",
                    rta:"Respuesta 1",
                    rta2:"Respuesta 2",
                    rta3:"Respuesta 3"
                },
                {
                    class:"accordion-item",
                    class2:"accordion-header",
                    title:"Estos servicios y zonas manejan algun tipo de horario? y si es asi, ¿Como se destribuye?",
                    class3:"accordion-content",
                    rta:"Respuesta 1",
                    rta2:"Respuesta 2",
                    rta3:"Respuesta 3"
                },
                {
                    class:"accordion-item",
                    class2:"accordion-header",
                    title:"Puedo solicitar estos servicios en cualquier momento?",
                    class3:"accordion-content",
                    rta:"Respuesta 1",
                    rta2:"Respuesta 2",
                    rta3:"Respuesta 3"
                }
            ]
        }))
    }
}
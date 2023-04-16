export default{
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
    dataMyCards(){
        localStorage.setItem("myCards", JSON.stringify({
            cadenas:{
                textos:{
                    t1:"Servicios",
                    t2:"Cafeteria Virtual",
                    t2href:"#"
                }
            },
            cartas:[
                {clase:"tarjetas",
                parrafo:"Hunters",
                img:"../images/campuslands.jpg",
                btn:"Ver datos",},
                {clase:"tarjetas",
                parrafo:"Cafeteria Hunters",
                img:"../images/campuslands.jpg",
                btn:"Ver datos",},
                {clase:"tarjetas",
                parrafo:"8vo Piso",
                img:"../images/campuslands.jpg",
                btn:"Ver datos",},
                {clase:"tarjetas",
                parrafo:"Baños",
                img:"../images/campuslands.jpg",
                btn:"Ver datos",},
            ]
        }))
    }
}
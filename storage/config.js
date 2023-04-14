export default {
    dataMyHeader(){
        localStorage.setItem("myHeader", JSON.stringify({
                image: {
                    imagee:{
                    name:"/images/logoWhite.png",
                    id:"logo"},
                 },
                headers:[
                {name:"Inicio",
                class:"alink",
                href:"./servicios/index.html"},
                {name:"Servicios",
                class:"alink",
                href:"/servicios/index.html"},
                {name:"Soporte",
                class:"alink",
                href:"./servicios/index.html"}
            ]
        }))
    },
    dataMyInfo(){
        localStorage.setItem("myInfo", JSON.stringify({
            infos:{
                textos:{
                    t1:"Bienvenid@ Camper",
                    t2:"Campus Programers Land",
                    t3:"Acerca de la pagina",
                }
               
            }
    }))
    },
    dataMyDesc(){
        localStorage.setItem("myDesc", JSON.stringify({
            desc:{
                textos:{
                    t1:"Esta es una pagina informativa acerca de nuestros servicios ofrecidos a nuestros queridos clientes"
                }
            }
        }))
    }
}
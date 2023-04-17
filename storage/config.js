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
    },
    dataMyContact(){
        localStorage.setItem("myContact", JSON.stringify({
            image:{
                imagee:{
                    src:"images/Space astronaut cartoon.png"
                },
            },
            cont:{
                conta:{
                    name:"¡Contactanos!"
                }
            },
            social:[
                    {class:"social",
                    logo:"images/whatsapp.svg",
                    a:"+57 3116607659",
                    ahref:"#"},

                    {class:"social",
                    logo:"images/twitter.svg",
                    a:"@CampusLatam",
                    ahref:"#"},

                    {class:"social",
                    logo:"images/facebookF.svg",
                    a:"@Campusland",
                    ahref:"#"},

                    {class:"social",
                    logo:"images/instagram.svg",
                    a:"@campusdevelopers",
                    ahref:"#"},
            ]
        }))
    }
}
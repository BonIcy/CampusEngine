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
                img:"../images/hunters.png",
                btn:"Ver datos",
                btnId:"miBoton"},
                {clase:"tarjetas",
                parrafo:"Cafeteria Hunters",
                img:"../images/Interior-cafeteria-pasteleria-Ofelia-Bakery_1731437050_168755568_1200x675.jpg",
                btn:"Ver datos",
                btnId:"miBoton2"},
                {clase:"tarjetas",
                parrafo:"8vo Piso",
                img:"../images/cafeteria 8vo.jpg",
                btn:"Ver datos",
                btnId:"miBoton3"},
                {clase:"tarjetas",
                parrafo:"Baños",
                img:"../images/aseo.png",
                btn:"Ver datos",
                btnId:"miBoton4"},
            ],
        }))},
        dataMyModals(){
            localStorage.setItem("myModals", JSON.stringify({
            modal:[{
                estruc:[{
                    modalN:"Hunters",
                    modalId:"miModal",
                    modalClass:"modal",
                    divClass:"modal-contenido",
                    classSpam:"cerrar",

                    modalN2:"Cafeteria",
                    modalId2:"miModal2",
                    modalClass2:"modal2",
                    divClass2:"modal-contenido2",
                    classSpam:"cerrar",

                    modalN3:"Octavo piso",
                    modalId3:"miModal3",
                    modalClass3:"modal3",
                    divClass3:"modal-contenido3",
                    classSpam:"cerrar",

                    modalN4:"Baños",
                    modalId4:"miModal4",
                    modalClass4:"modal4",
                    divClass4:"modal-contenido4",
                    classSpam:"cerrar",}],
                theader:[
                  {name: "Nombre"},
                  {name: "Detalles"},
                  {name: "Accesibilidad"},
                ],
                hunters:[
                    {name: "Zona de Hunters"},
                    {name:"Lorem ipsum dolor sit amet. Ex voluptates perferendis sit quae vitae ut facere ipsa aut possimus sapiente At exercitationem dolores id recusandae corrupti qui minus saepe. Nam dolorem explicabo est beatae facere sit omnis error eum sint dolore."},
                    {name:"a"}
                ],
                cafeteria:[
                    {name: "Cafeteria"},
                    {name:"Lorem ipsum dolor sit amet. Ex voluptates perferendis sit quae vitae ut facere ipsa aut possimus sapiente At exercitationem dolores id recusandae corrupti qui minus saepe. Nam dolorem explicabo est beatae facere sit omnis error eum sint dolore. "},
                    {name:"a"}
                ],
                octavo:[
                    {name: "Octavo piso"},
                    {name:"Lorem ipsum dolor sit amet. Ex voluptates perferendis sit quae vitae ut facere ipsa aut possimus sapiente At exercitationem dolores id recusandae corrupti qui minus saepe. Nam dolorem explicabo est beatae facere sit omnis error eum sint dolore. "},
                    {name:"a"}
                ],
                bano:[
                    {name: "Baños"},
                    {name:"Lorem ipsum dolor sit amet. Ex voluptates perferendis sit quae vitae ut facere ipsa aut possimus sapiente At exercitationem dolores id recusandae corrupti qui minus saepe. Nam dolorem explicabo est beatae facere sit omnis error eum sint dolore. "},
                    {name:"a"}
                ]
            }]
        }))
    }
}
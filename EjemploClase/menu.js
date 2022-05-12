const ORDEN_PIZZA = 1;
const ORDEN_MILA = 2;
const ORDEN_COCA = 3;

const IMAGEN_PIZZA = "https://www.lavanguardia.com/files/image_948_465/files/fp/uploads/2021/03/30/6063031b90a87.r_d.1083-871-4663.jpeg"
const IMAGEN_MILA = "https://cdn7.kiwilimon.com/recetaimagen/1654/640x426/13219.jpg.webp"
const IMAGEN_COCA = "https://coca-colafemsa.com/wp-content/uploads/2019/11/2.png"



function mandarOrden(id){
    switch(Number(id)){
        case ORDEN_PIZZA:
            document.querySelector("#ordenPedida").innerHTML=`
                 <h4>Orden de Pizza</h4>
                <img width= "300px" src = ${IMAGEN_PIZZA} alt="imagen de pizza" title="opción de pizza">
                `
            break;
        case ORDEN_MILA:
            document.querySelector("#ordenPedida").innerHTML=`
                 <h4>Orden de Mila</h4>
                <img width= "300px" src = ${IMAGEN_MILA} alt="imagen de mila" title="opción de mila">
                `
            break
        case ORDEN_COCA:
            document.querySelector("#ordenPedida").innerHTML=`
            <h4>Orden de Coca</h4>
           <img width= "300px" src = ${IMAGEN_COCA} alt="imagen de coca" title="opción de coca">
           `
            break
        default:
            document.querySelector("#ordenPedida").innerHTML=`
            <h3>Orden no encontrada</h3>
            <h4>Por favor elija una orden válida</h4>
           `

    }
}

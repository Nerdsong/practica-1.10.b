const SELECCION_PEPPERS = 1;
const SELECCION_WSTRIPES = 2;
const SELECCION_KANYEWEST = 3;



function mandarOrden(id){
    switch(Number(id)){
        case SELECCION_PEPPERS:
            document.querySelector("#eleccionMusica").innerHTML=`
                 <h4>Canción favorita de los Peppers</h4>
                 <iframe style="border-radius:12px" src="https://open.spotify.com/embed/track/3ZOEytgrvLwQaqXreDs2Jx?utm_source=generator&theme=0" width="100%" height="380" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"></iframe>
                `
            break;
        case SELECCION_WSTRIPES:
            document.querySelector("#eleccionMusica").innerHTML=`
                 <h4>Canción favorita de White Stripes</h4>
                 <iframe style="border-radius:12px" src="https://open.spotify.com/embed/track/2LMq1O0NiqGhPOlXo3McYQ?utm_source=generator&theme=0" width="100%" height="380" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"></iframe>
                `
            break
        case SELECCION_KANYEWEST:
            document.querySelector("#eleccionMusica").innerHTML=`
                <h4>Canción favorita de Kanye West</h4>
                <iframe style="border-radius:12px" src="https://open.spotify.com/embed/track/1eQBEelI2NCy7AUTerX0KS?utm_source=generator" width="100%" height="380" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"></iframe>
                `
            break
        default:
            document.querySelector("#eleccionMusica").innerHTML=`
            <h3>Orden no encontrada</h3>
            <h4>Por favor elija una orden válida</h4>
           `

    }
}

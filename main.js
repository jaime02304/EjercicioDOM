import { aniadirTabla } from "./contenido.js";

function mostrar(){
    let tabla=aniadirTabla();
    document.querySelector("#lugarTabla").appendChild(tabla);
}

window.mostrar=mostrar;
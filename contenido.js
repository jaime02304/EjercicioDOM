export function aniadirTabla() {
    let elementos = [];
    let afirmacion = "";
    do {
      let elemento = prompt("Añade un eemento a la tabla");
        elementos.push(elemento);
        afirmacion = prompt("¿Deseas añadir otro elemento a la tabla? si/no");
    } while (afirmacion === "si");
   let tabla= document.createElement('table');
   let tr  =document.createElement('tr');
   console.log(elementos);
    for(let i=0;i<elementos.length;i++){
       let th= document.createElement('th');
       th.innerText=elementos[i];
       tr.appendChild(th);
    }
    tabla.appendChild(tr);

    console.log(tabla);
   return tabla;
}
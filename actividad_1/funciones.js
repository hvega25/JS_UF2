array();

//Primera parte de la actividad
function array() {
  let color_marron = "marro";
  var colores = ["verd", "vermell", "groc", "blau", "negre", "blanc"];

  //ejercicios 1
  colores_menores(colores, color_marron);
  son_todos(colores, color_marron);
  ultimos_dos (colores);
  agrega_turquesa(colores);
  eliminar_verde(colores);

  //ejercicios 2

  var colores2 = ["verd", "vermell", "groc", "blau", "negre", "blanc"];

  //at()
  funcion_at(colores2);
  //concat()
  funcion_concat(colores2);
  //constructor()
  funcion_constructor(colores2);
  //copyWithin()
  funcion_copyWhithin(colores2);
  //entries()
  funcion_entries(colores2);
  //every()
  funcion_every(colores2);
  //fill()
  funcion_fill(colores2);
  //filter()
  funcion_filter(colores2);
  //find()
  funcion_find(colores2);
  //findIndex()
  funcion_findIndex(colores2);
  //flat()
  funcion_flat(colores2);
  //flatMap()
  funcion_flatMap(colores2);
  //forEach()
  funcion_forEach(colores2);
  //from()
  funcion_from(colores2);
  //includes()
  funcion_includes(colores2);
  //indexOf()
  funcion_indexOf(colores2);
  //isArray()
  funcion_isArray(colores2);
  //join()
  funcion_join(colores2);
  //keys()
  funcion_keys(colores2);
  //lastIndexOf()
  funcion_lastIndexOf(colores2);
  //length()
  funcion_length(colores2);
  //map()
  funcion_map(colores2);
  //pop()
  funcion_pop(colores2);
  //prototype()
  funcion_propotype(colores2);
  //push()
  funcion_push(colores2);
  //reduce()
  funcion_reduce(colores2);
  //reduceRight()
  funcion_reduceRigth(colores2);
  //reverse()
  funcion_reverse(colores2);
  //shift()
  funcion_shift(colores2);
  //slice()
  funcion_slice(colores2);
  //some()
  funcion_some(colores2);
  //sort()
  funcion_sort(colores2);
  //splice()
  funcion_splice(colores2);
  //toString()
  funcion_toString(colores2);
  //unshift()
  funcion_entries(colores2);
  //valueOf()
  funcion_valueOF(colores2);



}
//1.a
function colores_menores(colores, color_marron) {


  let mostrar = "";

  for (let f = 0; f < colores.length; f++) {
    let valor = colores[f].charCodeAt(f);
    if (valor < color_marron.charCodeAt(0)) {
      mostrar += `El ${colores[f]} es menor que el marrón <br> `;
    } else {
      mostrar += `El ${colores[f]} es mayor que el marrón <br>`;
    }
  }

  document.write(mostrar);

}

//1.b
function son_todos(colores, color_marron) {

  let lo_es = true;

  for (let f = 0; f < colores.length; f++) {
    let valor = colores[f].charCodeAt(f);
    if (valor > color_marron.charCodeAt(0)) {
      lo_es = false;
    }
  }
  if (lo_es == false) {
    document.write("No todos son menores que el marrón")
  } else {
    document.write(` Todos son menores que el marrón`)
  }
}

//1.c
function ultimos_dos (colores){
     document.getElementById("cambiar3").innerHTML = ` Los ultimos dos son ${colores[colores.length - 2]} y ${colores[colores.length - 1]}`;
}
//1.d
function agrega_turquesa (colores){
  colores.push('turquesa');
  document.getElementById("cambiar4").innerHTML = ` Se ha agregado turquesa: ${colores} `;
}

//1.e
function eliminar_verde (colores){
  colores.shift();
  document.getElementById("cambiar5").innerHTML = ` Se ha eliminado verd: ${colores} `;
}



function  funcion_at(colores){
  let col = colores.at(2)
  document.getElementById("cambiar21").innerHTML = ` Función at: ${col} `;
}

function  funcion_concat(colores){
  let array2 = ["esto", "es", "nuevo"]
  let col = colores.concat(array2);
  document.getElementById("cambiar22").innerHTML = ` Función concat: ${col} `;
}

function  funcion_constructor(colores){
  let col = colores.constructor;
  document.getElementById("cambiar23").innerHTML = ` Función constructor: ${col} `;
}

function  funcion_copyWhithin(colores){
  let col = colores.copyWithin(2,1)
  document.getElementById("cambiar24").innerHTML = ` Función Within: ${col} `;
}

function  funcion_entries(colores){
  const f = colores.entries();

  for (let x of f ){
     document.getElementById("cambiar25").innerHTML += x + "<br>";
  }
}

function  funcion_every(colores){
  document.getElementById("cambiar26").innerHTML = colores.every(checkverd);
}
//funcion auxiliar de funcion_every
function  checkverd (col){
  return col == "verd";
}


function  funcion_fill(colores){
  document.getElementById("cambiar27").innerHTML = ` Función fill inserta un valor en el array ya sea en una posición o en todos ${colores.fill("Negro" ,2, 4)}`;
}

function  funcion_filter(colores){
  let filter = colores.filter(azul);
  document.write(` Función filter retorna si existe algun elemento o compara un elemento: ${filter}`)
}

//funcioon auxilar de funcion_filter
function azul (c){
  return c == "blau";
}
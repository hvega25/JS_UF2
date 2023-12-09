array();
let espacios_entre = "<br><br>";
//Primera parte de la actividad
function array() {
  document.write(`PRIMERA PARTE <br>`);
  let color_marron = "marro";
  var colores = ["verd", "vermell", "groc", "blau", "negre", "blanc"];

  //ejercicios 1
  colores_menores(colores, color_marron);
  son_todos(colores, color_marron);
  ultimos_dos(colores);
  agrega_turquesa(colores);
  eliminar_verde(colores);

  //ejercicios 2
  document.write(`SEGUNDA PARTE EJEMPLO CON CADA MÉTODO <br>`);
  var colores2 = ["verd", "vermell", "groc", "blau", "negre", "blanc"];

  document.write(`Arreglo original usado en los métodos: [ ${colores2} ] <br>`);
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
  //filter() después del método fill me cambio el array y lo volvi a declarar
  var colores2 = ["verd", "vermell", "groc", "blau", "negre", "blanc"];
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
  Array.prototype.mayuscula = function() {
 for (let i = 0; i < this.length; i++) {
    this[i] = this[i].toUpperCase();
  }
};

  const prueba = ["a", "b"];
  prueba.mayuscula();
  document.write(`2.24 Funcion prototype agrega metodos nuevos o propiedades a un objeto o arreglo ${prueba} <br>`);
  //push()


  funcion_push(colores2);
  //reduce()
  funcion_reduce();
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
  funcion_unshift(colores2);
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

  document.write(`1.1 ${mostrar} <br>`);
}

//1.b
function son_todos(colores, color_marron) {
  document.write(`1.2 `);
  let lo_es = true;

  for (let f = 0; f < colores.length; f++) {
    let valor = colores[f].charCodeAt(f);
    if (valor > color_marron.charCodeAt(0)) {
      lo_es = false;
    }
  }
  if (lo_es == false) {
    document.write("No todos son menores que el marrón <br>");
  } else {
    document.write(` Todos son menores que el marrón <br>`);
  }
}

//1.c
function ultimos_dos(colores) {
  document.write(`1.3 `);
  document.write(
    ` Los últimos dos son ${colores[colores.length - 2]} y ${
      colores[colores.length - 1]
    } <br>`
  );
}
//1.d
function agrega_turquesa(colores) {
  colores.push("turquesa");
  document.write(`1.4 Se ha agregado turquesa: ${colores} <br>`);
}

//1.e
function eliminar_verde(colores) {
  colores.shift();
  document.write(`1.5 Se ha eliminado verd: ${colores} <br> <br>`);
}

//Funcón at
function funcion_at(colores) {
  let col = colores.at(2);
  document.write(
    `2.1 Función at retorna el valor de la posición indicada: ${col} <br>`
  );
}
//Función concat
function funcion_concat(colores) {
  let array2 = ["esto", "es", "nuevo"];
  let col = colores.concat(array2);
  document.write(
    `2.2 Función concat agrega al final del array un nuevo array: ${col} <br>`
  );
}
//Función constructor
function funcion_constructor(colores) {
  let col = colores.constructor;
  document.write(`2.3 Funcion constructor: ${col} <br>`);
}
//Función copyWhitin
function funcion_copyWhithin(colores) {
  let col = colores.copyWithin(2, 1);
  document.write(`2.4 Función Within: ${col} <br>`);
}

//Función entries
function funcion_entries(colores) {
  const f = colores.entries();
  document.write(
    `2.5 Función entries retorna su clave y su valor del array <br>`
  );
  for (let x of f) {
    document.write(x + "<br>");
  }
}
//Función every
function funcion_every(colores) {
  document.write(`2.6 Función every: ${colores.every(checkverd)} <br>`);
}
//funcion auxiliar de funcion_every
function checkverd(col) {
  return col == "verd";
}
//Función fill
function funcion_fill(colores) {
  document.write(
    `2.7 Función fill inserta un valor en el array ya sea en una posición o en todos ${colores.fill(
      "Negro",
      2,
      4
    )} <br>`
  );
}
//Función filter
function funcion_filter(colores) {
  let filter = colores.filter(azul);
  document.write(
    `2.8 Función filter retorna si existe algun elemento o compara un elemento: ${filter} <br>`
  );
}

//función auxilar de funcion_filter
function azul(c) {
  return c == "blau";
}

//funcion find encuentra un elemento en un array
function funcion_find(colores) {
  let fi = colores.find(encontrar);
  document.write(
    `2.9 Función find encuentra un elemento en la lista ${fi} <br>`
  );
}

function encontrar(col) {
  return col == "blau";
}

//Función findIndex
function funcion_findIndex(colores) {
  let col = colores.findIndex(encontrar);
  document.write(
    `2.10 Función findIndex retorna la posición del elemento: ${col} <br>`
  );
}

function encontrar(col) {
  return col == "blau";
}

//Función flat
function funcion_flat() {
  let colores = [
    ["verde", "azul"],
    ["negro", "rojo"],
  ];
  let c = colores.flat();

  document.write(`2.11 Función flat crea un nuevo arreglo: ${c} <br>`);
}

//Función flapMap
function funcion_flatMap() {
  let arr = [4, 5, 67, 8];
  const nuevoArr = arr.flatMap((x) => x * 2);
  document.write(
    `2.12 Función flatMap crea un nuevo arreglo según sus especificaciones: ${nuevoArr} <br>`
  );
}
//Función foreach
function funcion_forEach (colores){
  colores.forEach(func);
  document.write(`2.13 Función forEach llama a una funcion por cada elemento del arreglo <br>`);
}

//Función auxiliar de forEach
function func (item, index){
  let texto = "";
   texto += index + " : "  + item  ;
   document.write(` ${texto} <br>`);
}
//Función from
function funcion_from(colores) {
  let texto = colores[0];
  document.write(`2.14 Función from convierte cualquier objeto iterable en array: ${Array.from(texto)} <br>`);
}

function funcion_includes(colores){
  document.write(`2.15 Función includes comprueba que el elemento exista en el array: vermell -> ${colores.includes("vermell")} <br>`);
}
function funcion_indexOf (colores){
  document.write(`2.16 Función IndexOf devuele la posición de un elemento existente en el array: ${colores.indexOf('blanc')} <br>`);
}
function funcion_isArray (colores){
  document.write(`2.17 Función isArray retorna un booleano diciendo si es arreglo o no: ${Array.isArray(colores)} <br>`);
}
function funcion_join (colores){
  document.write(`2.18 Función join retorna un array como String tambien se puede insertar algo entre elementos
 -> ${colores.join( " nueva ")}
 <br>`);
}
function funcion_keys (colores){
   document.write(`2.19 Función key retorna los indices del arreglo: ${Object.keys(colores)} <br>`);
}
function funcion_lastIndexOf (colores){
   document.write(`2.20 Función  lastIndexOf retorna su indice: ${colores.lastIndexOf("blanc")}<br>`);
}
function funcion_length (colores){
   document.write(`2.21 Función length retorna la longitud del arreglo:  ${colores.length} <br>`);
}
function funcion_map (colores){
  document.write(`2.22 Función map crea un nuevo arreglo segun las especificaciones nuevas ${colores.map(prueba_map)} <br>`);
}

//Función auxiliar de map
function  prueba_map(col){
  return col + "nuevo"
}
function funcion_pop (colores){
  document.write(`2.23 Función pop elimina el último elemento del arreglo: ${colores.pop()} <br>`);
}

function funcion_push (colores){
  colores.push('blanc');
  document.write(`2.25 Función push agrega un elemento al final se agrega blanc de nuevo-> ${colores}<br>`)
}

function funcion_reduce (){
  const numeros = [1,2,3,4,5,6];
  document.write(`2.26 Funcion reduce funciona con numeros IMPORTANTE empieza por la izquierda ${numeros.reduce(get_suma , 0)} <br>`);
}

//Funcion auxiliar de reduce
function  get_suma (total, num){
  return total + num;
}
function funcion_reduceRigth (){
   const numeros = [1,2,3,4,5,6];
  document.write(`2.27 Funcion reduce funciona con numeros IMPORTANTE empieza por la derecha ${numeros.reduceRight(get_res , 0)} <br>`);
}

//Funcion auxiliar de reduce
function  get_res (total, num){
  return total - num;
}
function funcion_reverse (colores){
  colores.reverse();
  document.write(`2.28 Funcion reverse ordena de la derecha para la izquierda ${colores}<br>`)
}
function funcion_shift (colores){
  document.write(`2.29 Funcion shift remueve el primer elemento ${colores.shift()}<br>`);
}
function funcion_slice (colores){
  let aux = colores;
  document.write(`2.30 Funcion slice crea un nuevo array ${colores.slice(1,3)}<br>`);
}
function funcion_some (colores){
  document.write(`  2.31 Función some comprueba segun sus requerimientos ${colores.some(existe)}<br>`);
}

//Función auxiliar de some
function  existe (c){
  return c == "verd";
}

function funcion_sort (colores){
  document.write(`2.32 Función sort ordena el array ${colores.sort()}<br>`);
}
function funcion_splice (colores){
  colores.splice(2,0,"Limon", "Kiwi")
  document.write(`2.33 Función splice agrega elementos al arreglo segun como se desee ${colores}<br>`);
}
function funcion_toString (colores){
  let texto = colores.toString();
  document.write(`2.34 Funcion toString convierte cualquier objeto iterable en cadena ${texto}<br>`);
}
function funcion_unshift(colores){
 colores.unshift("Pera");
  document.write(`2.35 Función unshift agrega elementos al inicio del arreglo ${colores}<br>`);
}
function funcion_valueOF (colores){
  const text = colores.valueOf();
  document.write(`2.36 Función valueOf retorna el mismo arreglo -> ${text} <br>`);
}

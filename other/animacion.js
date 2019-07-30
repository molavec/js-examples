// Comentario de 1 línea
/**
 * Comentario de muchas líneas
 * 
 */
/*
function saludo(){};

var b = "hola a todos";
*/

// var gato = "Esto es un gato";

/*
var gato = "Esto es un gato";
var barco = gato;

alert(barco);


DECLARACION
INICIALIZACION
UTILIZACION

function uno(){
    var gato = "Esto es un gato";
}


// var gato = "esto es un gato";
var Gato = "no es un gato";

const PI = Math.PI;

alert(Gato);
document.write(Gato);
console.log(Gato)

NUMERICOS
CADENA (string)
BOOLEANOS (TRUE - FALSE)
FECHAS
SIMBOLOS
OBJECTOS


var primero = new Date();

document.write(primero.getHours() +':' +primero.getMinutes() );

var primero = Symbol();


var uno = (15+15)+(15/3); //precedencia *,/,%,+,-, orden de prioridad
var dos = 10;
//var tres = uno/dos;
var tres = uno%dos; // resto de la división (módulo)
--uno;
++uno;
uno++;
document.write(uno);

*/
/*
var uno = 19;
var dos = 19;

// document.write(uno > dos); // <, >, <=, >=, ==, !=
/**
 *  y = &&
 *  o = ||
 *  negación = !
 * 

document.write( !(uno==20) );
*/
/*
var uno = 30;
// uno = uno - 20;
// uno -= 20;
uno *= 20; 
document.write(uno);

*/
/*
var uno = 10;
var dos = 5;

// condición ? TRUE : FALSE;

document.write(uno == dos ? "ES IGUAL" : "NO ES IGUAL");
*/
/*
var uno = "30";
var dos = 20;

document.write(uno + dos);
*/
/*
if
if - else
if - else if - else
switch
*/
/*
var uno = 5;
var dos = 30;

if (uno==10) {
    document.write("ES IGUAL A 10");
}else if(uno==20){
    document.write("ES IGUAL A 20");
}else if(uno==30){
    document.write("ES IGUAL A 30");
}else if(uno==40){
    document.write("ES IGUAL A 40");
}else{
    document.write("NO ES IGUAL A NINGUNO");
}
*/
/*
var uno = 6;
var dos;
switch (uno) {
    case 0: 
        dos="CERO";
        break;
    case 1: 
        dos="UNO";
        break;
    case 3: 
        dos="TRES";
        break;
    case 4: 
        dos="CUATRO";
        break;
    case 5: 
        dos="CINCO";
        break;
    default:
        dos="NINGUNO";
        break;
}
document.write(dos);
*/

/*
while
do-while
for
break-continue
*/

//var dos = 20;
/*
while(uno > dos){
    document.write(uno + "<br>");
    uno--;
}


var uno = 40;

do {
    document.write(uno + "<br>");
    uno--;
} while (uno >= 20);
*/
/*
for (let i = 1; i <= 20; i++) {
    if (i==5 || i==7) {
        continue;
    }
    document.write(i + "<br>");  
}
*/
/*
for (let i = 1; i <= 20; i++) {
    if (i>=5 && i<=10) {
        continue;
    }
    document.write(i + "<br>");  
}
*/

// ---------------------------------------- funciones
/*
function uno(){
    var saludo = document.write("Hola a todos");
    return saludo;
};

function dos(a, b, c) {
    var datos = document.write("Mi nombre es: "+ a
    +"<br> Mi apellido es: " + b + 
    "<br> Mi edad es: "+ c);
    return datos;
}

function tres(nombre = ""){
    var nombreCompleto = nombre;
    return document.write(nombreCompleto);
}
// tres("Yoney Gallardo");

function cuatro(nombre, apellido){
    if (nombre != null && apellido !=null) {
        respuesta = document.write(nombre + " ", apellido);
    } else {
        respuesta = document.write("No puso sus datos completos");
    }

    return respuesta;
}
// cuatro("Yoney", "Gallardo");

// --------------------------------------------------rest
function cinco(...meses){
    for (let uno of meses) {
        document.write(uno + "<br>");
    }
    
}

// cinco("Enero", "Febrero", "Marzo", "Abril");

function seis(nombre, precio, peso){
    return "Nombre: "+nombre + "<br>Precio: "+precio + 
    "<br>Precio: "+peso;
}

// Spread
var juguete = ['Soldado', 25, 2];

document.write(seis(...juguete));
*/
// ------- funciones anónimas
/*
var siete = function(){
    respuesta = "Hola a todos";
    return respuesta;
}

document.write( siete() );
*/
/*
// ---------------funciones anónimas
var a = function(nombre, uno){
    var e = nombre;
    uno(e);
}

var b = function(i){
    document.write(i);
}

a("Yoney", b); // se entrega una función como parámetro o argumento.
*/
/*
function uno(nombre){
    return nombre;
}

var uno = nombre => nombre;

var dos = (nombre, apellido) => nombre +" "+ apellido;

document.write(dos("Alex", "Serapio"));
*/
/*
function apretar(){
    alert("Hola a todos");
}

function encima(){
    alert("El raton está encima")
}

function fuera(){
    alert("El raton está AFUERA");
}

var eventoUno = document.querySelector(".tres");

eventoUno.addEventListener("mouseout", function(){
    alert("HOLA");
});
*/

/*
keyDown
keyPress
keyUp


window.addEventListener("keypress", function(event){
    alert(String.fromCharCode(event.keyCode))
})


window.addEventListener("load", function(){
    alert("YA CARGÓ")
})
*/
/*
    setInterval
    setTimeout


// setInterval(_, _)
var tiempo = setInterval(function(){
    document.write("TEXTO DE EJEMPLO <br>")
    },
    2000
)

setTimeout(function(){
    document.write("ES OTRO TEXTO")
}, 2000)


var primero = document.querySelector(".uno");

primero.addEventListener("seeking", function(){
    alert(this.currentTime);
});
*/
/*
    alert
    confirm
    prompt
*/

// var saludo = "Hola a todos";
// alert("Hola a todos \ncomo estan")
// a = confirm("Necesita ayuda?");
/*
if (a) {
    document.write("Dijo que SI")
} else {
    document.write("Dijo que NO");
}

if (a) {
    window.location="ayuda.html"
} else {
    document.write("Dijo que NO");
}

var a = prompt("Nombre completo", "Nombre");
// document.write("Tu nombre es: "+ a);
if (a) {
    document.write("Tu nombre es: "+ a);
}else if (a==null) {
    document.write("Usted puso CANCELAR");
}else{
    document.write("USTED NO PUSO NADA");
}


//var a = "10.55";
//var a = "Hola";
// var a = 15.4553345;
// var b = Number.isInteger(a);
// var b = a.toFixed(2);
var a = 15;
var b = a.toString();
var c = 5;

// document.write(typeof b);
document.write(a + c);
*/

// -------------------------------- cadena string

// var saludo = 'Hola a\' todos';
/*
    -------------------
    length
    search
    indexOf
    lastIndexOf
    match
    substr
    substring
    charAt
    startsWith
    endsWith
    includes
    -----------------------
    repeat
    slice
    split
    trim
    toLowerCase
    toUpperCase
    concat
*/
/*
var a = "Hola a todos mis amigos de Youtube, todos estamos alegres... todos";
//var b = a.match(a);
// document.write( a.match(/todos/gi) );
// document.write( a.substr(5, 11) );
// document.write( a.substring(5, 11) );
// document.write( a.charAt(8) );
// document.write( a.startsWith("Hola") );
// document.write( a.endsWith("todos") );
// document.write( a.includes("ami", 10) );
*/

// var a = "Hola a todos <br>";
// var a = "lunes,martes,miercoles,jueves";
// var a = "lunes martes miercoles jueves";
// document.write( a.repeat(10) );
// document.write( a.replace("todos", "mis amigos") );
// document.write( a.replace("todos", "") );
// document.write( a.slice(5) );
// console.log( a.split(" ") );
/*
var a = "    Hola a todos mis amigos           ";
var uno = "Hola a todos ";
var dos = "mis amigos ";
var tres = "que ven mis videos ";

// document.write(a.trim());
// document.write(a.toLowerCase());
// document.write(a.toUpperCase());

var uno = "Youtube";
// document.write(uno.concat(dos, tres, " felices"));
document.write(`Hola a mis amigos de ${uno} que me siguen en mi canal`);
*/

/*
objeto(
    propiedes = patas, cabeza, cola
    métodos = camina, come, maulla
)
*/

// var semana = new Array("Lunes", "Martes", "Miercoles", "Jueves", "Viernes");
// var semana = ["Lunes", "Martes", "Miercoles", "Jueves", "Viernes", 4433];
// document.write(semana);
// document.write(semana[5]);

// -------------------------------------- Arreglos
/*
var uno = [
    100,
    [10, 20, 30, 40,
        [9,8,7,6,5]
    ],
    [11, 22, 33, 44, 55],
    [12, 33, 26, 37, 54],
    200
];

document.write( uno[1][4][3] ) // resultado = 6
*/
/*
    length
    push
    pop
    join // convierte un array en una cadena
    split // convierte una cadena en arreglo
    array.from
    sort
    reverse
    -------------------------
    for in
    forEach
    find
    findIndex
    filter
    some
*/
/*
var uno = [10, 20, 30, 40, 50, "lunes"];

uno.push(60);
uno.push(70);
document.write( uno.pop() );
console.log( uno.join() );


var uno = "Lunes,Martes,Miercoles";
var dos = uno.split(",");

console.log(dos);


var semana = Array.from(document.querySelectorAll(".dias p"));
var creacion = semana.map(dia => dia.textContent)
console.log(creacion);
*/

// var semana = ["lunes", "martes", "miercoles", "jueves", "viernes", "sabado", "domingo"];
// document.write(semana.sort());
// document.write(semana.reverse());
/*
for(let i in semana){ // repasar con casos de for-of
    document.write( semana[i]+ "<br>" );
}
semana.forEach(
    (dos, i) => document.write(i + " - " + dos + "<br>")
);


// var semana = ["lunes", "martes", "miercoles", "jueves", "viernes", "sabado", "domingo", "martes"];
// var buscar = semana.find(dos => dos=="martes");
// var buscar = semana.findIndex(dos => dos=="jueves");
// var buscar = semana.filter(dos => dos=="martes");

var uno = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];
var buscar = uno.some(dos => dos<10);

document.write(buscar);
*/
/*
OBJETO{
    Propiedades (variables)
    - cabeza
    - patas
    - cola
    Metodos (funciones)
    - maullar
    - caminar
    - saltar
}
*/
/*
function Gato(nombre, edad, peso){
    this.nombre = nombre;
    this.edad = edad;
    this.peso = peso;

    this.correr = function(){
        document.write("El gato ", nombre, " corre");
    }
}

var gato1 = new Gato("Peludo", 4, 3);
var gato2 = new Gato("Manchas", 7, 4);

// document.write(gato1.nombre);
gato2.correr();
*/
// ------------------------------------------ clases
/*
class Gato{
    constructor(nombre, edad, peso){
        this.nombre = nombre;
        this.edad = edad;
        this.peso = peso;
    }

    correr(){
        document.write("El gato corre");     
    }
};

var gato1 = new Gato("Peludo", 4, 3);
var gato2 = new Gato("Manchas", 7, 4);

gato1.correr();


class Animal{
    constructor(tipo, raza){
        this.cero = tipo;
        this.raza = raza;
    }
}

class Domesticos extends Animal{
    constructor(cero, nombre, edad, peso){
        super(cero)
        this.uno = nombre;
        this.dos = edad;
        this.tres = peso;
    }
}

var animal1 = new Domesticos("Hogar", "Boby", 8, 6);
var animal2 = new Domesticos("Caza", "Jorge", 7, 5);
var unico = new Animal("Salvaje", "pura");

// document.write(animal1.cero);
document.write( unico.cero );


window.name = "ESTE ES UN NOMBRE DE LA VENTANA";

var dato = "El nombre es: " + window.name + "<br>";
var ancho = "El ancho es: " + window.outerWidth + "<br>";
var alto = "El alto es: " + window.outerHeight+ "<br>";
var anchoInterno = "El ancho interno es: " + window.innerWidth + "<br>";
var altoInterno = "El alto interno es: " + window.innerHeight+ "<br>";
var scrollHorizontal = "El scroll Horizontal es: " + window.pageXOffset + "<br>";
var scrollVertical = "El scroll Vertical es: "+ window.pageYOffset + "<br>";
var distanciaIzquierda = "La distancia desde la Izquierda es: " +window.screenX + "<br>";
var distanciaSuperior = "La distancia desde la Superior es: " +window.screenY + "<br>";

document.write(dato, ancho, alto, anchoInterno, altoInterno,
    scrollHorizontal, scrollVertical, distanciaIzquierda, distanciaSuperior);


function visitar(){
    ventana = window.open("ayuda.html", "_blank", "width=500, height=300");
}

function cerrar(){
    ventana.close();
}

function dimension(){
    // ventana.focus();
    ventana.print();
}


// alert(window.length);

var historial = window.history;
console.log(historial);


var localizacion = window.location;
document.write(localizacion);


var navegador = window.navigator;
// document.write(navegador);
console.log(navegador);


var pantalla = window.screen;
// document.write(pantalla);
console.log(pantalla);
*/
/*
    querySelector

    getElement

    CONTENIDO
    PROPIEDADES
    ESTILOS CSS


// var a = document.querySelector(".primero");
// var a = document.querySelector("#todo");
// var a = document.querySelector("h1");
// var a = document.querySelector(".ultima h1");
// var a = document.querySelector("a[class='vinculo']");
// var a = document.querySelectorAll("p")[2];
// var a = document.getElementById("dos");
// var a = document.getElementsByClassName("primero")[2];
// var a = document.getElementsByTagName("p")[2];
var a = document.getElementsByClassName("primero")[0];

// a.style.color="red";
// a.innerHTML += "<p>NUEVO CONTENIDO</p>";
// a.className = a.className.replace("primero","nueva");

a.style.color = "green";
a.style.border = "1px solid red";
a.style.fontFamily = "Arial";
a.style.fontSize = "15px";
*/

var a = document.getElementById("todo");
// a.style.color = "red";

function fondo(color){
    if (color == "rojo") {
        a.style.backgroundColor = "red";
        a.style.color = "white";
    }else if(color == "verde"){
        a.style.backgroundColor = "green";
        a.style.color = "white";
    }else if(color == "azul"){
        a.style.backgroundColor = "blue";
        a.style.color = "white";
    }
}
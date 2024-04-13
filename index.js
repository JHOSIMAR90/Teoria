var numero1 = 2;
var numero2 = 3;
//Math.pow es para elevar un numero a una potencia
var respuesta1 = Math.pow(numero1, numero2);
console.log("La respuesta es:" + respuesta1);

//numero1**numero2 es para elevar un numero a una potencia
var respuesta2 = numero1 ** numero2;
console.log("La respuesta es:" + respuesta2);
//=============================================================
// Operadores aritmeticos
//Operador + (suma), - (Resta), ++ (Incremento, Suma 1 unidad), * (Multiplicacion), ** (Potencia), / (Division), -- (Decremento, Resta 1 unidad), % (muestra el residuo)
//============================================================
//Operadores Relacionales
// == (Igual que), === (Estrictamente igual que), != (distinto que), !== (Estriciticamente distinto que), < (Menor que), <= (Menor o igual que), > (Mayor que), >= (Mayor o igual que)
//==============================================================
//Operadores LOgicos
// And (&&) -> Se cumple a y b
// Or (||)  -> Se cumple a o b
// Not (!)  -> No a
var respuesta3 = numero1 >= numero2 || numero1 < numero2;
console.log("La respuesta es:" + respuesta3);
//=====================================================
// Operadores de asignacion
var a = 0;
a = a + 5; //  --> es igual a esto a+=5

console.log(a);

// Condicianal IF
var numero = 8;
if (numero == 7) {
  console.log("Si es 7");
} else if (numero == 8) {
  console.log("Es igual a 8");
} else {
  console.log("No lo es");
}

//=====================================================
//Bucles While = mientras
var i = 0;
while (i < 10) {
  console.log(i);
  i += 1;
}

// For = Para

for (var a = 0; a < 10; a += 1) {
  console.log(a);
}

//================================================
//Funciones
let resultado = "Capuchino";
function cafetera(ingrediente1, ingrediente2) {
  if (ingrediente1 == "leche" && ingrediente2 == "cafe") {
    return resultado;
  }
}
let tasa = cafetera("leche", "cafe");
console.log(tasa);

//===================================================
// DOM (document object model) Representa la estructura de html y pude ser modificado por un lenguaje de programacion.

const txtn1 = document.getElementById("n1");
const txtn2 = document.getElementById("n2");
const respuesta = document.getElementById("resp");
const btncalcular = document.getElementById("calcular");
btncalcular.addEventListener("click", calcular);
function calcular() {
  const op1 = parseFloat(txtn1.value);
  const op2 = parseFloat(txtn2.value);
  let resp = op1 + op2;
  respuesta.innerText = resp;
  respuesta.style = "color:red";
}

//=================================================
//control+k+d para formatear el codigo
//Arrays [1,2,5,k,ñ,$]

const respuestaa = document.getElementById("resp2");
const btnejecutar = document.getElementById("ejecuta");
btnejecutar.addEventListener("click", iniciar);

let vocales = ["a", "e", "i", "o", "u"];
function iniciar() {
  vocales.forEach(function (item, index, array) {
    respuestaa.innerText = array;
    respuestaa.style = "color:Blue";
  });
}

//====================================================
// Formato .Json
// se basa en propiedades y valores
//"propiedad": "valor",
//"precio": 12,
//"estado": true,
//"arreglo": ["perea", "fresa"]

//lo real
// {"propiedad":{
//     "precio": 34,

// },
// "prefil":[
//     {"id":3},
//     {"url": https://}
// ]

// }
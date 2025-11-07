console.log("Conexión exitosa!");

const consoler = document.querySelector("#console-visual");

let cola = [];
let escribiendo = false;

function consola(text, type = "normal") {
  const prefix = {
    normal: "",
    info: "[INFO] ",
    warn: "[!] ",
    error: "[X] ",
    title: "[===] "
  }[type] || "";

  cola.push(prefix + text + "\n");
  if (!escribiendo) procesarCola();
}

function procesarCola() {
  if (cola.length === 0) {
    escribiendo = false;
    return;
  }
  escribiendo = true;
  const line = cola.shift();
  let i = 0;

  function escribir() {
    if (i < line.length) {
      consoler.value += line.charAt(i);
      i++;
      consoler.scrollTop = consoler.scrollHeight;
      setTimeout(escribir, 10);
    } else {
      setTimeout(procesarCola, 50);
    }
  }
  escribir();
}



document.querySelector("#clean").addEventListener("click", () => {
  consoler.value = "";
  consola("Consola limpia", "info");
});

function separador() {
  consola("--------------------------------------", "warn");
}

consola("Simulador de algoritmos iniciado", "title");
consola("Seleccione un problema para ejecutar.\n", "info");

document.querySelector(".problema-1").addEventListener("click", () => {
  separador();
  consola("Datos personales", "title");
  let nombre = prompt("Ingrese su nombre:");
  let apellidos = prompt("Ingrese sus apellidos:");
  let edad = prompt("Ingrese su edad:");
  consola(`Nombre: ${nombre} ${apellidos}`);
  consola(`Edad: ${edad} años`);
});

document.querySelector(".problema-2").addEventListener("click", () => {
  separador();
  consola("Operaciones con un número", "title");
  let num = Number(prompt("Ingrese un número:"));
  let resultado = ((num / 3) + 10) * 2;
  consola(`Resultado: ${resultado}`);
});

document.querySelector(".problema-3").addEventListener("click", () => {
  separador();
  consola("Comparar dos números", "title");
  let a = Number(prompt("Primer número:"));
  let b = Number(prompt("Segundo número:"));
  if (a < b) consola("Estado creciente");
  else if (a > b) consola("Estado decreciente");
  else consola("Son iguales");
});

document.querySelector(".problema-4").addEventListener("click", () => {
  separador();
  consola("Promedio de cinco números", "title");
  let suma = 0;
  for (let i = 1; i <= 5; i++) suma += Number(prompt(`Número ${i}:`));
  consola(`Promedio: ${(suma / 5).toFixed(2)}`);
});

document.querySelector(".problema-5").addEventListener("click", () => {
  separador();
  consola("Suma de los N primeros números naturales", "title");
  let N = Number(prompt("Ingrese N:"));
  let suma = (N * (N + 1)) / 2;
  consola(`Suma total: ${suma}`);
});

document.querySelector(".problema-6").addEventListener("click", () => {
  separador();
  consola("Primeros 100 números pares", "title");
  let pares = Array.from({ length: 100 }, (_, i) => (i + 1) * 2);
  consola(pares.join(", "));
});

document.querySelector(".problema-7").addEventListener("click", () => {
  separador();
  consola("Primeros 100 números impares", "title");
  let impares = Array.from({ length: 100 }, (_, i) => i * 2 + 1);
  consola(impares.join(", "));
});

document.querySelector(".problema-8").addEventListener("click", () => {
  separador();
  consola("Suma de cinco números ingresados", "title");
  let suma = 0;
  for (let i = 1; i <= 5; i++) suma += Number(prompt(`Número ${i}:`));
  consola(`Suma total: ${suma}`);
});

document.querySelector(".problema-9").addEventListener("click", () => {
  separador();
  consola("Suma de N números ingresados", "title");
  let N = Number(prompt("¿Cuántos números desea sumar?"));
  let suma = 0;
  for (let i = 1; i <= N; i++) suma += Number(prompt(`Número ${i}:`));
  consola(`Suma total: ${suma}`);
});

document.querySelector(".problema-10").addEventListener("click", () => {
  separador();
  consola("Operaciones básicas", "title");
  let a = Number(prompt("Primer número:"));
  let b = Number(prompt("Segundo número:"));
  let op = prompt("Elija operación (+, -, *, /):");
  let res;
  switch (op) {
    case "+": res = a + b; break;
    case "-": res = a - b; break;
    case "*": res = a * b; break;
    case "/": res = b !== 0 ? a / b : "División por cero"; break;
    default: res = "Operación inválida";
  }
  consola(`Resultado: ${res}`);
});

document.querySelector(".problema-11").addEventListener("click", () => {
  separador();
  consola("Suma de N números pares ingresados", "title");
  let N = Number(prompt("¿Cuántos números pares ingresará?"));
  let suma = 0;
  for (let i = 1; i <= N; i++) {
    let num = Number(prompt(`Número ${i}:`));
    if (num % 2 === 0) suma += num;
  }
  consola(`Suma total: ${suma}`);
});

document.querySelector(".problema-12").addEventListener("click", () => {
  separador();
  consola("Suma de los N primeros números pares", "title");
  let N = Number(prompt("Ingrese N:"));
  let suma = 0;
  for (let i = 1; i <= N; i++) suma += i * 2;
  consola(`Suma total: ${suma}`);
});

document.querySelector(".problema-13").addEventListener("click", () => {
  separador();
  consola("Suma de N números impares ingresados", "title");
  let N = Number(prompt("¿Cuántos números impares ingresará?"));
  let suma = 0;
  for (let i = 1; i <= N; i++) {
    let num = Number(prompt(`Número ${i}:`));
    if (num % 2 !== 0) suma += num;
  }
  consola(`Suma total: ${suma}`);
});

document.querySelector(".problema-14").addEventListener("click", () => {
  separador();
  consola("Suma de los N primeros números impares", "title");
  let N = Number(prompt("Ingrese N:"));
  let suma = 0;
  for (let i = 0; i < N; i++) suma += i * 2 + 1;
  consola(`Suma total: ${suma}`);
});

document.querySelector(".problema-15").addEventListener("click", () => {
  separador();
  consola("Suma de los N primeros múltiplos de 3", "title");
  let N = Number(prompt("Ingrese N:"));
  let suma = 0;
  for (let i = 1; i <= N; i++) suma += i * 3;
  consola(`Suma total: ${suma}`);
});

document.querySelector(".problema-16").addEventListener("click", () => {
  separador();
  consola("Cálculo del factorial", "title");
  let N = Number(prompt("Ingrese N:"));
  let fact = 1;
  for (let i = 1; i <= N; i++) fact *= i;
  consola(`${N}! = ${fact}`);
});

document.querySelector(".problema-17").addEventListener("click", () => {
  separador();
  consola("Conversión de grados Celsius a Fahrenheit", "title");
  let c = Number(prompt("Ingrese grados Celsius:"));
  let f = (c * 9) / 5 + 32;
  consola(`${c}°C = ${f.toFixed(2)}°F`);
});

document.querySelector(".problema-18").addEventListener("click", () => {
  separador();
  consola("Contador de caracteres en una cadena", "title");
  let texto = prompt("Ingrese una cadena de texto:");
  let conteo = {};
  for (let char of texto) conteo[char] = (conteo[char] || 0) + 1;
  for (let [char, cantidad] of Object.entries(conteo)) consola(`'${char}': ${cantidad}`);
});

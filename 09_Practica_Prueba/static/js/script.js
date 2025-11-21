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
    separador()
    consola("Controlador de ingreso de productos:")
    let cont = parseInt(prompt("Cantidad de productos a ingresar: "))
    let lista = []
    let total = 0
    let mayor50 = 0
    let nombre = ""
    let cantidad = 0
    for (let i = 1; i <= cont; i++) {
        nombre = prompt(`Ingrese el nombre del producto ${i}:`);
        cantidad = parseInt(prompt(`Ingrese la cantidad del producto "${nombre}":`));

        lista[nombre] = cantidad;     
        total += cantidad;        

        if (cantidad >= 50) {
            mayor50++;
        }
    }
    consola("=== RESULTADOS DE LA BODEGA ===");
    consola("Total de unidades ingresadas: " + total);
    consola("Productos con 50 o más unidades: " + mayor50);
    if (total > 200){
        consola("Turno de alta carga");
    }else{
        consola("Turno normal");
    }
    for (let nombre in lista) {
    consola(`${nombre}: ${lista[nombre]} unidades`);
    }
})
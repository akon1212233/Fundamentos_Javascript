console.log("Conexión exitosa con el archivo Script :D")

/*Solicita la edad del usuario mediante prompt().
  Muestra con alert() si puede votar (18 años o más) o no.*/
function Votoedad() {
    let edad = prompt("Dime cuantos años tienes.")
    if (edad < 18) {
        alert("Eres menor de edad! \nNo puedes ir a votar.")
    }
    else {
        alert("Eres mayor de edad! \nPuedes ir a votar.")
    }
}

/*Pide una contraseña con prompt().
  Si es igual a "1234", muestra un mensaje de acceso permitido.
  En caso contrario, muestra acceso denegado.*/
function Contraseña() {
    let contra = prompt("Dime tu contraseña\n confia en mi :)");
    if (contra == 1234) {
        alert("Acceso permitido.")
    }
    else {
        alert("CONTRASEÑA INCORRECTA")
    }
}
/*Pide un número por prompt().
  Evalúa si el número es par o impar y muestra el resultado con alert().*/
function Parimpar() {
    let numero = prompt("Dime un numero y te dire si es par o impar")
    if (numero % 2 == 0) {
        alert("Tu numero es par :D")
    }
    else {
        alert("Tu numero no es par...\nES IMPAR!!!")
    }
}
/*Solicita la temperatura actual.
  Si es mayor o igual a 30, muestra “Hace calor”, de lo contrario, muestra “Clima agradable”.*/
function Temp() {
    let temp = prompt("Dime la temperatura del ambiente");
    if (temp >= 30) {
        alert("Hace calor")
    }
    else if (temp >= 5) {
        alert("Clima agradable")
    }
    else {
        alert("Hace mucho frio")
    }
}
/*Solicita dos números al usuario.
  Compara ambos y muestra cuál es mayor o si son iguales.*/
function Comparador() {
    let result = "";
    let comp = { num1: parseInt(prompt("dime tu primer numero")), num2: parseInt(prompt("dime tu segundo numero")) }
    if ((comp.num1 - comp.num2) > 0) {
        result = comp.num2 + " es mayor a " + comp.num1 + "\nY la diferencia es: " + (comp.num2 - comp.num1);

    }
    else if ((comp.num1 - comp.num2) > 0) {
        result = comp.num1 + " es mayor a " + comp.num2 + "\nY la diferencia es: " + (comp.num1 - comp.num2);

    }
    else if (comp.num1 == comp.num2) {
        result = "Los dos numeros son iguales.";

    }
    alert(result)
}

/*Pide una nota entre 1 y 7.
  Si es 4 o más, muestra “Aprobado”, si es menor, muestra “Reprobado”.*/
function Notas() {
    let nota = prompt("Dime tu nota")
    if (nota >= 4.0 && nota <= 7.0) {
        alert("APROBASTE!")
    }
    else if (nota > 7.0) {
        alert("estas en chile?")
    }
    else {
        alert("REPROBASTE!!!")
    }
}
/*Pide un nombre de usuario.
  Si el valor ingresado es "admin", muestra “Bienvenido, administrador”.
  Si no, muestra “Usuario no reconocido”.*/
function a() {
    let nick = prompt("Dime tu nickname")
    let admin = "admin";
    if (nick == admin) {
        alert("Bienvenido, Administrador.")
    }
    else {
        alert("Usuario no reconocido.")
    }
}
/*Pide una palabra al usuario.
  Verifica si empieza con la letra “A” mayúscula y muestra un mensaje acorde.*/
function Palabras() {
    let palabra = prompt("Dime una palabra")
    if (palabra[0] == "A") {
        alert("Tu palabra empieza con A")
    }
}
/*Solicita el precio de un producto.
  Si el precio es mayor a 10000, muestra que aplica descuento.
  Si no, indica precio normal.*/
function Descuento() {
    let iva = 0.19;
    let descuento = parseFloat(prompt("Ingrese el valor de descuento: Ejemplo 20%"));
    descuento /= 100;
    let precio = parseFloat(prompt("Dime el precio del producto"));
    if (precio >= 10000) {
        alert("Su descuento es de: " + (10000 * descuento))
    }
    else {
        alert("No puedes usar el descuento")
    }
}
/*Solicita la edad del usuario y si tiene licencia (por ejemplo, respondiendo "sí" o "no").
  Si tiene 18 o más y respondió que tiene licencia, muestra “Puede conducir”.
  Si no, muestra “No puede conducir”.*/
function Licencia() {


    while (true) {
        let license = prompt("Tienes licencia para conducir?\nsí\nno")
        if (license == "si" || license == "no") {
            while (true) {
                let dad = parseInt(prompt("Cuantos años tienes?"))
                if (dad > 0 && dad < 55) {
                    if (dad >= 18 && license == "si") {
                        alert("Puedes conducir")
                    }
                    else {
                        alert("No puedes conducir")
                    }
                    break
                }
                else {
                    alert("Valor incorrecto")
                }
            }
            break
        }
        else {
            alert("Valor incorrecto")
        }
    }
}
/*Comparar la longitud de dos palabras 
Solicita dos palabras con prompt().
Compara cuántas letras tiene cada una y muestra cuál es más larga o si tienen el mismo largo.*/
function Compa() {
    let letr1 = prompt("Dime una palabra");
    let letr2 = prompt("Dime otra palabra");
    if (letr1.length > letr2.length) {
        alert(`la palabra mas larga es ${letr1}, con un largo de ${letr1.length} de letras.`)
    }
    else if (letr2.length > letr1.length) {
        alert(`la palabra mas larga es ${letr1}, con un largo de ${letr1.length} de letras.`)
    }
    else {
        alert(`los dos son iguales\n${letr1.length} = ${letr2.length}.`)
    }
}
/*Pide al usuario que ingrese un correo.
Verifica si el texto contiene el símbolo @.
Si lo tiene, muestra "Correo válido", si no, "Correo inválido".*/
function Vali() {
    let correo = prompt("dime tu correo")
    if(correo.includes("@")){
        alert("Correo valido")
    }
    else{
        alert("Correo invalido")
    }
}
/*Verificar si un número es positivo o negativo
Solicita un número. Muestra si es positivo, negativo o cero.*/
function Veri() {
    let num = prompt("Dime un numero")
        if(num>0){
            alert(`Tu numero es Positivo : ${num}`)
        }
        else if(num==0){
            alert(`Tu numero es Cero : ${num}`)
        }
        else{
            alert(`Tu numero es Negativo : ${num}`)
        }
}
/*Saludo personalizado según hora
Pide la hora actual (en formato 24 horas).
Si es antes de las 12, muestra "Buenos días", 
si es entre 12 y 18, "Buenas tardes", y si es mayor a 18, "Buenas noches".*/
function Hello() {
    while (true) {
        let hora = parseInt(prompt("dime que hora es (en 24 horas)"))
        if (hora >= 0 && hora < 24) {
            if (hora < 12) {
                alert("Buenos días\nC:")
                break
            }
            else if (hora >= 12 && hora <= 18) {
                alert("Buenas tardes\nC:")
                break
            }
            else if (hora > 18) {
                alert("Buenas noches\nC:")
                break
            }
        }
        else {
            alert("Valores no validos...")
        }
    }

}
/*Verificar si una palabra contiene la letra "e"
Solicita una palabra. 
Verifica si contiene la letra "e" (minúscula).
Si la tiene, muestra "Contiene la letra 'e'", si no, muestra "No contiene la letra 'e'".*/
function Veri2() {
    let palabra = prompt("Dime una palabra");
    if(palabra.includes("e")){
        alert("Tu palabra contiene la letra 'e'")
    }
    else{
        alert("Tu palabra no contiene la letra 'e'")
    }
}


/*mis cositas*/
function randomis() {
    let random = Math.floor(Math.random() * 10)
    let letra = prompt("Dime una letra")
    let palabra = ["Aplastar", "Acorde", "Acustico", "Aplicado", "Ardido", "Arma", "Armason", "Arpa", "Aliado", "Apostar"]
    if (letra == "A") {
        alert(palabra[random])
    }
}
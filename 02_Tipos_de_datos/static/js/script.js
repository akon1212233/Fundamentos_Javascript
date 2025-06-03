let colors = ["Rojo ","Verde ","Azul "]
let usuario = {nombre:"Akon", correo:"akonbustamante@liceovvh.cl", edad:16}
let esestudiante = true;

function Colores(){
    alert(colors);
}
function Identidad(){
    alert(JSON.stringify(usuario));
}
function Estudiante(){
    alert(esestudiante);
}
function Resumen(){
    alert("Hola, Soy: "+usuario.nombre+", tengo: "+usuario.edad+", mi correo es: "+usuario.correo+" y soy estudiante: "+esestudiante+", mis colores favoritos son "+colors)
}

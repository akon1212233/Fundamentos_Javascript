let usuario = {
    nombre:"Akon",
    correo:"akonbustamante@liceovvh.cl",
    edad:16,
    colors:["Rojo ","Verde ","Azul "],
    estudiante:true
}

function Colores(){
    alert(usuario.colors);
}
function Identidad(){
    alert("Nombre: "+usuario.nombre+"\nCorreo: "+usuario.correo+"\nEdad: "+usuario.edad+" años.");
}
function Estudiante(){
    alert(usuario.estudiante);
}
function Resumen(){
    alert("Hola, Soy: "+usuario.nombre+", tengo: "+usuario.edad+", mi correo es: "+usuario.correo+" y soy estudiante: "+usuario.estudiante+", mis colores favoritos son "+usuario.colors)
}

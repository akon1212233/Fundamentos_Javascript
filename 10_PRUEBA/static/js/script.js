
function prueba1(){
    let estudiantes = parseInt(prompt("Cantidad de estudiantes?: "))
    let notas = 0.0
    let promedio = 0.0
    let estudiantespro = 0
    let mensajepro = "Los estudiantes con Mejores notas son:\n"
    let promediofinal = 0.0
    for(let i=1; i <= estudiantes; i++){
        while(true){
            notas = parseFloat(prompt(`Nota del estudiante ${i}`))
            if(notas > 0.9 && notas < 7.1){
                console.log("no problema")
                break;
            }
            console.log("Problema")
        }
        if(notas >= 6.0){
                estudiantespro++
                mensajepro += `El estudiante ${i} con la nota = ${notas} \n`
        }
        promedio += notas
    }
    promediofinal = promedio / parseFloat(estudiantes)
    alert(`Estudiantes= ${estudiantes}\npromedio=${promediofinal}\nEstudiantes de alto rendimiento son=${estudiantespro}\n\n${mensajepro}`)
}
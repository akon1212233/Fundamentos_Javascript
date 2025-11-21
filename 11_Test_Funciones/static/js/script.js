function pregunta(type = String , query = String){
    type = type.toLowerCase();
    if(type == "int"){
        while(true){
            let respuesta = parseInt(prompt(query))
            if(isNaN(respuesta)){
                console.log("respuesta es NaN")
            }
            else{
                console.log(`respuesta de int: ${respuesta}`)
                return respuesta
            }
        }
    }
    if(type == "str"){
        return prompt(query)
    }
    if(type == "float"){
        let respuesta = parseFloat(prompt(query))
            if(isNaN(respuesta)){
                console.log("respuesta es NaN")
            }
            else{
                console.log(`respuesta de int: ${respuesta}`)
                return respuesta
            }
    }
    else{
        return "Problema con funcion pregunta, Revisar"
    }
}
console.log(pregunta("int", "cuanto es 10+10? "))
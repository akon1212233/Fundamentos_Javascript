let count =0;
function usarnombre(){
    let nombre = prompt("Dame tu nombre");
    count=0;
    while (true){
        alert(nombre[count]);
        console.log(count);
        count +=1;
        if(count>nombre.length-1){
            break;
        }
    }
}
function usarapellido(){
    let apellido = prompt("Dame tu apellido");
    count=0;
    while (true){
        alert(apellido[count]);
        console.log(count);
        count +=1;
        if(count>apellido.length-1){
            break;
        }
    }
}
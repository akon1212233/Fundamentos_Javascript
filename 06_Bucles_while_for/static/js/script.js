function consola(text){
    let consoler = document.querySelector("#console-visual")
    consoler.InnerText =  text
}

document.querySelector('.problema-1').addEventListener("click", function(){
    let n = prompt("Dime un numero")
    let contador = 1
    while(contador <= n){
        console.log(contador)
        consola(contador)
        contador+=1
    }
})

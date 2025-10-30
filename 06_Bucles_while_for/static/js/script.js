const consoler = document.querySelector("#console-visual")
function consola(text){
    consoler.value +=  text
    consoler.scrollTop = consoler.scrollHeight
}
document.querySelector("#clean").addEventListener('click', function(){
    consoler.value = " "
})
document.querySelector('.problema-1').addEventListener("click", function(){
    let n = parseInt(prompt("Dime un numero"))
    clear()
    let contador = 0
    while(contador <= n){
        consola(contador + "\n")
        contador+=1
    }
})
document.querySelector('.problema-2').addEventListener("click", function(){
    let n = parseInt(prompt("Dime un numero"))
    clear()
    while(n >= 0){
        console.log(n)
        consola(n + "\n")
        n-=1
    }
})
document.querySelector('.problema-3').addEventListener("click", function(){
    let n = parseInt(prompt("Dime un numero"))
    clear()
    let suma = 0
    for(let con = 1 ; con <= n; con++){
        suma += con
    }
    consola(suma + "\n")
})
document.querySelector('.problema-4').addEventListener("click", function(){
    let n = parseInt(prompt("Dime un numero"))
    clear()
    for(let con = 1; con <= n ; con++){
        if(con % 2 == 0){
            consola(con + "\n")
        }
    }
})

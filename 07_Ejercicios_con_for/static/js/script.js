const consoler = document.querySelector("#console-visual")
function consola(text){
    lol(consoler.value)
    consoler.value +=  text + "\n"
    consoler.scrollTop = consoler.scrollHeight
}
function consolan(text){
    consoler.value +=  text
    consoler.scrollTop = consoler.scrollHeight
}
document.querySelector("#clean").addEventListener('click', function(){
    consoler.value = ""
})
function lol(text){
    console.log(text + "\n")
}
document.querySelector('.problema-5').addEventListener("click", function(){
    let num = parseInt(prompt("Dime un numero"))
    consola(`Tabla del ${num}`)
    for(let i=0;i<=10;i++){
        consola(`${num} x ${i} = ${num * i}`)
    }
})

document.querySelector('.problema-6').addEventListener("click", function(){
    let num = parseInt(prompt("Dime un numero"))
    for(let i=1;i<=num;i++){
        if(i%2==0){
            consola(i + ", ")
        }
    }
})

document.querySelector('.problema-7').addEventListener("click", function(){
    //fue mas dificil no usar length que usar el for
    let word = prompt("dime una palabra")
    let cont = 0;
    for(let i = 0;word[i] !== undefined; i++){
        cont++
    }
    consola(`La palabra "${word}" tiene  ${cont} letras`)
})

document.querySelector('.problema-8').addEventListener("click", function(){
    let num = parseInt(prompt("Dime un numero"))
    let res = 1
    for(let i = 1;i<=num;i++){
        res *=i
    }
    consola(`el resultado de !${num} es ${res}`)
})

document.querySelector('.problema-9').addEventListener("click", function(){
    let num = parseInt(prompt("Dime un numero"))
    let res = 0
    for(let i = 0;i<=num;i++){
        if(i % 2 != 0){
            res += i;
        }
    }
    consola(`la suma de todos los impares de ${num} es ${res}`)
})
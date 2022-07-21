//CODIGO AQUI
//Se eu tenho 15 reais, e recebo mais 22.40. Quanto dinheiro tenho agora?
let saldo = 15 + 22.40
console.log("saldo inicial",saldo)

//gastei 12,40, qual saldo agora?
saldo = saldo - 12.34
console.log("saldo subtraido", saldo)

//precisei dividir igualmente entre eu e meus dois irmãos
saldo = saldo / 3
console.log("saldo por irmão", saldo)

//eu apliquei e meu saldo ficou 3.42 maior
saldo = saldo * 3.42
console.log("saldoinvestido", saldo)

//reparti por 3 e quero o resto pra comprar chiclete
saldo = saldo % 3
console.log("resto chiclete", saldo)

const multieSoma = 2*2+2
console.log(multieSoma)
const multiesoma1 =2*(2+2)
console.log(multiesoma1)

//comparação
let compIgual = 5 === 5 // valor e tipo
console.log(compIgual)
let compDiferente = 5 !== 5 // valor e tipo
console.log(compDiferente)

let comptipos = 5 !== "5"
console.log(comptipos) 
// SE TIRAR O SEGUNDO "=" ELE PARA DE OLHAR O tipo e olha só o valor
// console.log(typeof variavel1 === typeof variavel2) se quiser comparar o tipo

let compTipos2 = "5" === "cinco"
console.log(compTipos2) //false, são string mais os caracteres sao diferentes

let compTipos3 = typeof 5 === typeof 5
console.log(compTipos3) // true pq sao tipos iguais

let compTipos4 = typeof 5 === typeof 20
console.log(compTipos4) //retorna true pq so ta olhando os tipos e nao o number

let compTipos5 = typeof "5" === typeof "cinco"
console.log(compTipos4) //dois tipos iguais

//Maior e Mneor ou igual

const nA = 2
const nB = 8
let result
resut = nA == nB
console.log(resut) // false, 2 nao e igual a 8

result = nA <= nB
console.log(result) // true , 

result = nB >= nB
console.log(resut) // false, 

result = nA < nB
console.log(result)// true , o primeiro é menor q o segundo

// NEGAÇÃO

let a = "Quero dirigir um Celta 2012"
let b = "Sou maior de idade";
let c = "consigo comprar o Celta por 22.000 reais"
let d = "consigo alugar o Celta"
let e = "tenho carteira de motorista"

//a
//!b
//b && !e
//b &&(c||d)
//(b && e) && !a
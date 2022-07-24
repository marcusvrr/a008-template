// EXERCICIO 01
const minhaIdade = number(prompt('Qual sua idade?'))
const idadeAmiga = number(prompt('Qual a idade da sua amiga ou amigo?'))
let comparacao = minhaIdade > idadeAmiga
console.log ("Sua idade é maior do que a do seu melhor amigo?", comparacao)
comparacao = minhaIdade - idadeAmiga
console.log (comparacao)

// EXERCICIO 02
const a = 'vou pra praia'
const b = 'sou maior de idade'
const c = 'posso tomar uma cervejinha'
const d = 'quero passear de carro'
!b && d
b && a && !d
a || d
c && !d

/* Revisao: 
- Operadores
- Lógica de par ou impar
- Diferença entre == e === */

// OPERADORES ARITMETICOS =>
// + SOMA
// - SUBTRAÇAO
// * MULTIPLICACAO
// => / DIVISAO => retorna o numero inteiro
// => % => retorna o numero decimal, o resto

// UM NUMERO MODULO OUTRO, SE O RESTO É 0, ENTAO É PAR
// console.log(10 / 2)
// console.log(10 % 2)

// UM NUMERO MODULO OUTRO, SE O RESTO É 1, ENTAO É IMPAR
// console.log(11 % 2)

// OPERADORES RELACIONAIS OU COMPARADORES
// > >= < <=
// !==
// === IGUALDADE RESTRITA
// IGUALDADE RESTRITA FOI IMPLEMENTADA ES6+

// console.log(5 === '5')
// console.log(5 === 5)

// OPERADORES LÓGICOS
// AND => TODAS AS CONDIÇOES DEVEM SER VERDADEIRAS PRA SER VERDADE
// OU => PELO MENOS UMA CONDIÇAO DEVE SER VERDADEIRA PARA SER VERDADE
// NEGAÇAO => INVERTE O VALOR BOLEANO

// console.log(!0) // 0 => um valor nulo === false
// console.log(!1) // 1 => tem um valor === true

// console.log(!(50 > 30)) // ! (true) => false
// console.log(!50 > 30) // false > 30 => BUG

// console.log(!20 > -50) // (false que é 0 em binário) é maior que um numero negativo

// console.log(!true === false)
// console.log(!false === true)

// PRECEDENCIA é calculado primeiro que todo mundo
// primeiro se calcula => multiplicacao e divisao
// segundo se calcula => soma e subtraçao
// console.log(2 * 2 + 2) // 2 * 2 = 4 + 2 = 6
// console.log(2 + 2 * 2) // 2 * 2 = 4 + 2 = 6
// console.log((2 + 2) * 2) // 2 + 2 = 4 * 2 = 8

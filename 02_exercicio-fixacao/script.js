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

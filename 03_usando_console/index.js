
let idade, altura, peso
const nome = 'Pedro'

console.log(typeof nome)
console.log(nome)

let pessoa = {
    nome: 'Jão',
    altura: 175,
    peso: 90,
    idade: 40
}

let familia = [
    {nome: 'joao', altura: 175, peso: 90, idade: 40},
    {nome: 'janaina', altura: 160, peso: 60, idade: 30}
]

function getPeso(membro){
    return familia[membro]['peso']
}

function setPeso(membro, peso){
    familia[membro]['peso'] = peso 
}

getPeso(0)
setPeso(0,87)
getPeso(0)
console.log(familia[0])
let massa = getPeso(1)
massa += massa
console.log(massa)



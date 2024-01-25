let body = document.body
// Estilizando o body
body.style.backgroundColor = '#282A36'
body.style.color = 'white'
body.style.display = 'flex'
body.style.justifyContent = 'center'
body.style.alignItems = 'center'
body.style.padding = '2rem'
body.style.flexDirection = 'column'
body.style.gap = '1rem'
// Criando Elementos
let title = document.createElement('h1')
let span = document.createElement('span')
let div = document.createElement('div')
let btnAdd = document.createElement('button')
let btnRem = document.createElement('button')
// Estilizando a div
div.style.display = 'flex'
div.style.gap = '1rem'
// Criando contexto dos elementos
title.textContent = 'Criando Elementos com DOM'
span.textContent = 'Todos os elementos foram criados e estilizados unicamente com Javascript. Adicione e Remova elementos com os Botões abaixo'
btnAdd.textContent = 'Adicionar'
btnRem.textContent = 'Remover'
// Adicionando Elementos ao DOM
body.appendChild(title)
body.appendChild(span)
body.appendChild(div)
div.appendChild(btnAdd)
div.appendChild(btnRem)
// Funções de adicionar e remover elementos
const addNewItem = () => {
  let paragraphs = document.getElementsByTagName('p')
  let p = document.createElement('p')
  p.textContent = `Novo Item ${paragraphs.length + 1}`
  body.appendChild(p)
}
const remLastItem = () => {
  let paragraphs = document.getElementsByTagName('p')
  if(paragraphs.length > 0){
    body.lastChild.remove()
  }
}
// Adicionando funções aos botões
btnAdd.onclick = addNewItem
btnRem.onclick = remLastItem

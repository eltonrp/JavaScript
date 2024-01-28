// Funções de criação
let createElement = (name) => {
  let newElement = document.createElement(name)
  return newElement
}

let textContent = (elem, textContent) => {
  elem.textContent = textContent
  return elem
}

let appendElement = (elem, parentElem=body) => {
  return parentElem.appendChild(elem)
}

// Criando Elementos
let body = document.body

let title = createElement('h1')
let span = createElement('span')
let div = createElement('div')
let btnAdd = createElement('button')
let btnRem = createElement('button')

// Estilizando o body
body.style.backgroundColor = '#282A36'
body.style.color = 'white'
body.style.display = 'flex'
body.style.justifyContent = 'center'
body.style.alignItems = 'center'
body.style.padding = '2rem'
body.style.flexDirection = 'column'
body.style.gap = '1rem'

// Estilizando a div
div.style.display = 'flex'
div.style.gap = '1rem'

// Criando contexto dos elementos
title = textContent(title, 'Criando Elementos com DOM')
span = textContent(span, 'Todos os elementos foram criados e estilizados unicamente com Javascript. Adicione e Remova elementos com os Botões abaixo')
btnAdd = textContent(btnAdd,'Mostrar')
btnRem = textContent(btnRem, 'Remover')

// Adicionando Elementos ao DOM
title = appendElement(title)
span = appendElement(span)
div = appendElement(div)
btnAdd = appendElement(btnAdd, div)
btnRem = appendElement(btnRem, div)

// Funções de adicionar e remover elementos
const addNewItem = () => {
  let divDb = createElement('div')
  divDb.id = 'obj-content'
  body.appendChild(divDb)

  for(obj of newList){
    for(item in obj){
      let pDb = createElement('p')
      pDb.textContent = `${item}: ${obj[item]}`
      divDb.appendChild(pDb)
    }
    let p = createElement('p')
    p = textContent(p, '-------------------------')
    p = appendElement(p, divDb)
  }
}

const remLastItem = () => {
  let itemToRemove = document.getElementById('obj-content')
  if(itemToRemove){
    itemToRemove.remove()
  }
}
// Adicionando funções aos botões
btnAdd.onclick = addNewItem
btnRem.onclick = remLastItem

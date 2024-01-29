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

let styleElement = (styleClass, styleAtr, elem=body) => {
  elem.style[styleClass] = styleAtr
  return elem
}

// Criando Elementos
let body = document.body

let title = createElement('h1')
let span = createElement('span')
let div = createElement('div')
let btnAdd = createElement('button')
let btnRem = createElement('button')

// Estilizando o body
styleElement('backgroundColor', '#282A36')
styleElement('color', 'white')
styleElement('display', 'flex')
styleElement('justifyContent', 'center')
styleElement('alignItems', 'center')
styleElement('padding', '2rem')
styleElement('flexDirection', 'column')
styleElement('gap', '1rem')

// Estilizando a div
styleElement('display', 'flex', div)
styleElement('gap', '1rem', div)

// Criando contexto dos elementos
textContent(title, 'Criando Elementos com DOM')
textContent(span, 'Todos os elementos foram criados e estilizados unicamente com Javascript. Adicione e Remova elementos com os Botões abaixo')
textContent(btnAdd,'Mostrar')
textContent(btnRem, 'Remover')

// Adicionando Elementos ao DOM
appendElement(title)
appendElement(span)
appendElement(div)
appendElement(btnAdd, div)
appendElement(btnRem, div)

// Funções de adicionar e remover elementos

// Variável mostra se existe a div
let hasDivDb = false

const addNewItem = () => {
  if(!hasDivDb) {
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
    hasDivDb = true
  }
}

const remLastItem = () => {
  if(hasDivDb){
    let itemToRemove = document.getElementById('obj-content')
    itemToRemove.remove()
    hasDivDb = false
  }
}

// Adicionando funções aos botões
btnAdd.onclick = addNewItem
btnRem.onclick = remLastItem

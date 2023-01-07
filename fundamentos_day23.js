// metodo .addEvetListener('evento', função)


//Para utilizar o evento inline utilizamos o onClick="evento() e criamos a função no javascript"

/* Evento de click */
let teste = 1
teste.addEventListener('click', () => {
    console.log('Olá Mundo!')
})

/* Evento de Double click */

let testeOne = 1
testeOne.addEventListener('dblclick', () => {
    console.log('Olá Mundo!')
})

/* Evento de passar o mouse por dentro */

let testeTwo = 1
testeTwo.addEventListener('mouseenter', () => {
    console.log('Olá Mundo!')
})

//podemos puxar o valor de um input para o JS, utilizando o .value

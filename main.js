'use strict'

const read = require('readline-sync')
const colors = require('colors')
const menu = ['INGRESAR AUTOMOVIL', 'CONSULTAR']

console.log(`${colors.white.bold('================')}`)
console.log(`${colors.white.bold('MENU DE PROPIEDADES')}`)
console.log(`${colors.white.bold('================')}`)

let opcion = 1
let Automovil = require('./automovil')
let auto = new Automovil()

while (menu[opcion] !== undefined) {
  opcion = read.keyInSelect(menu, `${colors.yellow.bold('Elige una opción del menu?')}`)

  switch (menu[opcion]) {
    case 'INGRESAR AUTOMOVIL':

      auto.nserie = read.question('NUMERO DE SERIE : ')
      auto.marca = read.question('MARCA : ')
      auto.modelo = read.question('MODELO : ')
      auto.tipo = read.question('TIPO : ')
      auto.año = read.question('AÑO : ')
      auto.cilindros = read.question('CILINDROS : ')
      auto.color = read.question('COLOR : ')
      auto.agregar()
      break

    case 'CONSULTAR':

      auto.consultar()

      break
  }
}

'use strict'

const colors = require('colors')
const read = require('readline-sync')

class Automovil {
  constructor () {
    this.nserie = 0
    this.marca = 0
    this.modelo = ''
    this.tipo = ''
    this.año = ''
    this.cilindros = ''
    this.color = ''
  }
  agregar () {
    console.log(`${colors.red.bold('NUMERO DE SERIE : ')} ${this.nserie}`)
    console.log(`${colors.red.bold('MARCA :')} ${this.marca}`)
    console.log(`${colors.red.bold('MODELO : ')} ${this.modelo}`)
    console.log(`${colors.red.bold('TIPO : ')} ${this.tipo}`)
    console.log(`${colors.red.bold('AÑO : ')} ${this.año}`)
    console.log(`${colors.red.bold('CILINDRO :')} ${this.cilindros}`)
    console.log(`${colors.red.bold('COLOR :')} ${this.color}`)
  }

  consultar () {
    console.log(`${colors.white.bold('aqui se manda llamar consultar')}`)
  }
}

module.exports = Automovil

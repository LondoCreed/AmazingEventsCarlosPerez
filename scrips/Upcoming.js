
import {mostrarTarjetas, chekeados} from '../Modules/functions.js'

fetch('https://aulamindhub.github.io/amazing-api/events.json')
  .then(response => response.json())
  .then(data => {
    let fechaActual = new Date(data.currentDate)
    let eventosFuturos = data.events.filter(event => new Date(event.date) >= fechaActual)
    mostrarTarjetas(eventosFuturos)
    chekeados(eventosFuturos)
  })


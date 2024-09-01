import { processEvents } from '../Modules/functions.js';

fetch('https://aulamindhub.github.io/amazing-api/events.json')
  .then(response => response.json())
  .then(data => {
    processEvents(data); 
  })
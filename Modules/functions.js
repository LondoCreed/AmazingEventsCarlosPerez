

export let mostrarTarjetas = (events) => {
    let contenido = document.getElementById("almac")
    let TarjetasIncial = ''

    if (events.length === 0) {
        contenido.innerHTML = `
        <p class="msj">Sorry, no matches were found within the requested parameters.</p>
        `
    } else {
        events.forEach(event => {
            TarjetasIncial += `
            <div id="tarjetaP${event._id}" class="card" style="width: 300px">
                <img class="imgcard h-50" src="${event.image}" class="card-img-top" alt="${event.name}" />
                <div class="card-body">
                    <h5 class="card-title">${event.name}</h5>
                    <p class="card-text pt-2">${event.description}</p>
                    <div class="d-flex justify-content-between">
                        <span class = "pt-1">Price: $${event.price}</span>
                        <a href="../Pages/Details.html?_id=${event._id}" class="btn btn-primary w-50">Details</a>
                    </div>
                </div>
            </div>
            `
        })
        contenido.innerHTML = TarjetasIncial
    }
}

export const chekeados = (events) => {
  let desplegue = document.getElementById("chekers")
  desplegue.innerHTML = ''
  let categoriasDuplicadas = []

  events.forEach((event) => {
    if (!categoriasDuplicadas.includes(event.category)) {
      categoriasDuplicadas.push(event.category);
  
      let divChek = document.createElement('div');
      divChek.className = 'form-check d-flex justify-content-center flex-wrap gap-2 ms-3';
  
      let idNew = categoriasDuplicadas.indexOf(event.category);
      divChek.innerHTML = `
        <input class="form-check-input" type="checkbox" value="${event.category}" id="flexCheck${idNew}" />
        <label class="form-check-label" for="flexCheck${idNew}">
          ${event.category}
        </label>
      `;
  
      desplegue.appendChild(divChek);
    }
  });
  

  let form = document.createElement('form')
  form.className = 'xd d-flex me-3'
  form.innerHTML = `
  <input class="form-control me-2" type="search" id="busquedaTexto" placeholder="Write to me please for" aria-label="Search" />
  <button class="xd btn btn-outline-danger" type="button" id="buscar">
      Search
  </button>
  `
  desplegue.appendChild(form)

  // Actualiza los eventos de cambio en los checkboxes
  form.addEventListener('submit', (event) => {
    event.preventDefault();
    conFiltro(events);  // Llama a la función de filtro manualmente
  });

  // Actualiza los eventos de cambio en los checkboxes
  desplegue.addEventListener('change', (event) => {
    if (event.target.classList.contains('form-check-input')) {
      conFiltro(events);  // Actualiza el filtro solo cuando se cambian los checkboxes
    }
  });

  // Actualiza el filtro cuando se hace clic en el botón de búsqueda
  document.getElementById('buscar').addEventListener('click', () => conFiltro(events))
}

export const conFiltro = (events) => {
  let cheksbox = document.querySelectorAll('#chekers .form-check-input:checked')
  let categoriasSeleccionadas = []
  for (let i = 0; i < cheksbox.length; i++) {
      categoriasSeleccionadas.push(cheksbox[i].value)
  }
  let buscar = document.getElementById('busquedaTexto').value.toLowerCase()
  let eventosFiltrados = events.filter(evento => {
      let buscarPorCategoria = categoriasSeleccionadas.includes(evento.category) || categoriasSeleccionadas.length === 0
      let buscarPorTexto = evento.name.toLowerCase().includes(buscar) || evento.description.toLowerCase().includes(buscar)
      return buscarPorCategoria && buscarPorTexto
  })

  mostrarTarjetas(eventosFiltrados)
}

export const obtenerDetallesEvento = (events) => {
  const parametrosUrl = new URLSearchParams(window.location.search);
  const eventoId = parametrosUrl.get('_id');
  const evento = events.find(o => o._id === parseInt(eventoId));
  
  let generar = document.getElementById('contenedorDetails');
  if (!generar) {
    console.error('Contenedor de detalles no encontrado');
    return;
  }

  if (evento) {
    let detalleEventos = `
      <div class="d-flex container-fluid gap-2 flex-wrap justify-content-center align-items-center">
        <div class="card mb-3 cardTamDetail">
          <div class="row">
            <div class="col-md-4">
              <img class="imgpv img-fluid rounded-start" src="${evento.image}" alt="${evento.name}">
            </div>
            <div class="col-md-8">
              <div class="card-body">
                <h5 class="card-title">${evento.name}</h5>
                <p>${evento.description}</p>
                <p>${evento.date}</p>
                <p>Category: ${evento.category}</p>
                <p>Place: ${evento.place}</p>
                <p>Capacity: ${evento.capacity}</p>
                <p>${evento.assistance ? `Assistance: ${evento.assistance}` : `Estimate: ${evento.estimate}`}</p>
                <p>Price: $${evento.price}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    `;
    generar.innerHTML = detalleEventos;
  } else {
    generar.innerHTML = '<h1 class="p-4">Hello, for details please select an item. Oops, you shouldn\'t have gotten here without a button xD.</h1>';
  }
}


export function conseguirPorcentajeAsistido(personasAsistidas, capacidad) {
  return (personasAsistidas / capacidad) * 100;
}

export function generarTabla(events) {
  const mayorAsistencia = events.reduce((mayor, event) => {
    const mayorPorcentaje = conseguirPorcentajeAsistido(mayor.assistance, mayor.capacity);
    const porcentajeEvento = conseguirPorcentajeAsistido(event.assistance, event.capacity);

    if (porcentajeEvento > mayorPorcentaje || 
        (porcentajeEvento === mayorPorcentaje && event.capacity > mayor.capacity)) {
      return event;
    }
    return mayor;
  }, events[0]);

  const menorAsistencia = events.reduce((bajo, event) => {
    const bajoPorcentaje = conseguirPorcentajeAsistido(bajo.assistance, bajo.capacity);
    const porcentajeEvento = conseguirPorcentajeAsistido(event.assistance, event.capacity);

    return porcentajeEvento < bajoPorcentaje ? event : bajo;
  }, events[0]);

  const mayorCapacidad = events.reduce((capacidad, event) => {
    return event.capacity > capacidad.capacity ? event : capacidad;
  }, events[0]);

  const generalTableBody = document.querySelector('#generalTable tbody');

  generalTableBody.innerHTML = `
    <tr>
      <td>${mayorAsistencia.name} (${conseguirPorcentajeAsistido(mayorAsistencia.assistance || mayorAsistencia.estimate, mayorAsistencia.capacity).toFixed(2)}%)</td>
      <td>${menorAsistencia.name} (${conseguirPorcentajeAsistido(menorAsistencia.assistance || menorAsistencia.estimate, menorAsistencia.capacity).toFixed(2)}%)</td>
      <td>${mayorCapacidad.name} (${mayorCapacidad.capacity})</td>
    </tr>
  `;
}

export function generarTablaUpcomingPass(events, tableId, isPast) {
  const categoryStats = events.reduce((cat, event) => {
    if (!cat[event.category]) {
      cat[event.category] = { revenue: 0, attendance: 0, count: 0 };
    }

    const attendance = isPast ? event.assistance : event.estimate;
    cat[event.category].revenue += attendance * event.price;
    cat[event.category].attendance += conseguirPorcentajeAsistido(attendance, event.capacity);
    cat[event.category].count++;
    console.log(event.price);
    
    return cat;
  }, {});

  const tableBody = Object.keys(categoryStats).map(category => {
    const { revenue, attendance, count } = categoryStats[category];
    const averagePercentage = (attendance / count).toFixed(2);
    return `
      <tr>
        <td>${category}</td>
        <td>$${revenue.toFixed(2)}</td>
        <td>${averagePercentage}%</td>
      </tr>
    `;
  }).join('');

  document.querySelector(`#${tableId} tbody`).innerHTML = `${tableBody}`;
}

export function processEvents(data) {
  const events = data.events;
  const currentDate = new Date(data.currentDate);

  const upcomingEvents = events.filter(event => new Date(event.date) >= currentDate);
  const pastEvents = events.filter(event => new Date(event.date) < currentDate);

  generarTabla(events);
  generarTablaUpcomingPass(upcomingEvents, 'upcomingTable', false);
  generarTablaUpcomingPass(pastEvents, 'pastTable', true);
}
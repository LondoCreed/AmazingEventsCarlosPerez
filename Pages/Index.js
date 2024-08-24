//Arreglo Original

const data = {
    currentDate: "2023-01-01",
    events: [
      {
        _id: "639c723b992482e5f2834be9",
        name: "Collectivities Party",
        image: "https://i.postimg.cc/Fs03hQDt/Collectivities-Party.jpg",
        date: "2022-12-12",
        description:
          "Enjoy your favourite dishes, from different countries, in a unique event for the whole family.",
        category: "Food Fair",
        place: "Room A",
        capacity: 45000,
        assistance: 42756,
        price: 5,
        __v: 0,
      },
      {
        _id: "639c723b992482e5f2834beb",
        name: "Korean style",
        image: "https://i.postimg.cc/ZmD3Xf57/Korean-style.jpg",
        date: "2023-08-12",
        description:
          "Enjoy the best Korean dishes, with international chefs and awesome events.",
        category: "Food Fair",
        place: "Room A",
        capacity: 45000,
        price: 10,
        __v: 0,
        estimate: 42756,
      },
      {
        _id: "639c723c992482e5f2834bed",
        name: "Jurassic Park",
        image: "https://i.postimg.cc/GmHRkbNV/Jurassic-Park.jpg",
        date: "2022-11-02",
        description:
          "Let's go meet the biggest dinosaurs in the paleontology museum.",
        category: "Museum",
        place: "Field",
        capacity: 82000,
        price: 15,
        __v: 0,
        assistance: 65892,
      },
      {
        _id: "639c723c992482e5f2834bef",
        name: "Parisian Museum",
        image: "https://i.postimg.cc/c4C2zXm8/Parisian-Museum.jpg",
        date: "2023-11-02",
        description:
          "A unique tour in the city of lights, get to know one of the most iconic places.",
        category: "Museum",
        place: "Paris",
        capacity: 8200,
        estimate: 8200,
        price: 3500,
        __v: 0,
      },
      {
        _id: "639c723c992482e5f2834bf1",
        name: "Comicon",
        image: "https://i.postimg.cc/KYD0jMf2/comicon.jpg",
        date: "2022-02-12",
        description:
          "For comic lovers, all your favourite characters gathered in one place.",
        category: "Costume Party",
        place: "Room C",
        capacity: 120000,
        assistance: 110000,
        price: 54,
        __v: 0,
      },
      {
        _id: "639c723c992482e5f2834bf3",
        name: "Halloween Night",
        image: "https://i.postimg.cc/RZ9fH4Pr/halloween.jpg",
        date: "2023-02-12",
        description: "Come with your scariest costume and win incredible prizes.",
        category: "Costume Party",
        place: "Room C",
        capacity: 12000,
        estimate: 9000,
        price: 12,
        __v: 0,
      },
      {
        _id: "639c723c992482e5f2834bf5",
        name: "Metallica in concert",
        image: "https://i.postimg.cc/PrMJ0ZMc/Metallica-in-concert.jpg",
        date: "2023-01-22",
        description: "The only concert of the most emblematic band in the world.",
        category: "Music Concert",
        place: "Room A",
        capacity: 138000,
        estimate: 138000,
        price: 150,
        __v: 0,
      },
      {
        _id: "639c723c992482e5f2834bf7",
        name: "Electronic Fest",
        image: "https://i.postimg.cc/KvsSK8cj/Electronic-Fest.jpg",
        date: "2022-01-22",
        description:
          "The best national and international DJs gathered in one place.",
        category: "Music Concert",
        place: "Room A",
        capacity: 138000,
        assistance: 110300,
        price: 250,
        __v: 0,
      },
      {
        _id: "639c723d992482e5f2834bf9",
        name: "10K for life",
        image: "https://i.postimg.cc/fyLqZY9K/10-K-for-life.jpg",
        date: "2022-03-01",
        description: "Come and exercise, improve your health and lifestyle.",
        category: "Race",
        place: "Soccer field",
        capacity: 30000,
        assistance: 25698,
        price: 3,
        __v: 0,
      },
      {
        _id: "639c723d992482e5f2834bfb",
        name: "15K NY",
        image: "https://i.postimg.cc/zv67r65z/15kny.jpg",
        date: "2023-03-01",
        description:
          "We'll be raising funds for hospitals and medical care in this unique event held in The Big Apple.",
        category: "Race",
        place: "New York",
        capacity: 3000000,
        price: 3,
        __v: 0,
        estimate: 2569800,
      },
      {
        _id: "639c723d992482e5f2834bfd",
        name: "School's book fair",
        image: "https://i.postimg.cc/Sst763n6/book1.jpg",
        date: "2023-10-15",
        description: "Bring your unused school book and take the one you need.",
        category: "Book Exchange",
        place: "Room D1",
        capacity: 150000,
        estimate: 123286,
        price: 1,
        __v: 0,
      },
      {
        _id: "639c723d992482e5f2834bff",
        name: "Just for your kitchen",
        image: "https://i.postimg.cc/05FhxHVK/book4.jpg",
        date: "2022-11-09",
        description:
          "If you're a gastronomy lover come get the cookbook that best suits your taste and your family's.",
        category: "Book Exchange",
        place: "Room D6",
        capacity: 130000,
        assistance: 90000,
        price: 100,
        __v: 0,
      },
      {
        _id: "639c723d992482e5f2834c01",
        name: "Batman",
        image: "https://i.postimg.cc/vH52y81C/cinema4.jpg",
        date: "2022-3-11",
        description: "Come see Batman fight crime in Gotham City.",
        category: "Cinema",
        place: "Room D1",
        capacity: 11000,
        assistance: 9300,
        price: 225,
        __v: 0,
      },
      {
        _id: "639c723d992482e5f2834c03",
        name: "Avengers",
        image: "https://i.postimg.cc/T3C92KTN/scale.jpg",
        date: "2023-10-15",
        description:
          "Marvel's Avengers Premier in 3d, the start of an epic saga with your favourite superheroes.",
        category: "Cinema",
        place: "Room D1",
        capacity: 9000,
        estimate: 9000,
        price: 250,
        __v: 0,
      },
    ],
  };


// Realizamos la funcion mostrar tarjetas con un parametro definido
let mostrarTarjetas = (events) => {
let contenido = document.getElementById("almac") // Pocicionamos en el contenedor para generar
let TarjetasIncial = '' //Limpieza de contenedor

// Condicionamos que si el arreglo llega a estar vacio nos de un mensaje amable, esto llega a suceder aplicando filtros.
if (events.length === 0) {
  contenido.innerHTML = `
    <p>Sorry, no matches were found within the requested parameters.</p>
  `;
} else {
  //Iteramos el array y por cada elementos creamos una tarjeta con los datos de cada evento
  events.forEach(event => {
    TarjetasIncial += `
      <div id="tarjetaP${event._id}" class="card" style="width: 300px">
        <img class="imgcard h-50" src="${event.image}" class="card-img-top" alt="${event.name}" />
        <div class="card-body">
          <h5 class="card-title">${event.name}</h5>
          <p class="card-text">${event.description}</p>
          <div class="d-flex justify-content-between">
            <span>Price: $${event.price}</span>
            <a href="./Pages/Details.html?_id=${event._id}" class="btn btn-primary w-50">Details</a>
          </div>
        </div>
      </div>
    `;
  });
  contenido.innerHTML = TarjetasIncial // se imprime el contenido
}}

//Creamos la funcion con base a los eventos dentro del arreglo
let chekeados = (cheks = data.events) =>{
  // Pocicionamos en el contenedor para generar
  //Limpieza de contenedor
  let desplegue = document.getElementById("chekers")
  desplegue.innerHTML = ''
  //Creo un nuevo arreglo  para meter solo categorias no duplicadas
  let categoriasDuplicadas = []

  cheks.forEach((chek) => {
    /* uso la negacion para que el funcionamiento sea inverso, 
    si no esta dentro haga el push, dado que si se hace directo se duplican los cheks */
    if (!categoriasDuplicadas.includes(chek.category)) {
      categoriasDuplicadas.push(chek.category);
      //Crea los cheks en base a el nuevo array sin duplicidad
      let divChek = document.createElement('div');
      divChek.className = 'form-check justify-content-center d-flex gap-1'
      let idNew = categoriasDuplicadas.indexOf(chek.category)
      divChek.innerHTML = `
        <input class="form-check-input" type="checkbox" value="${chek.category}" id="flexCheck${idNew}" />
        <label class="form-check-label" for="flexCheck${idNew}">
          ${chek.category}
        </label>
      `
      
      desplegue.appendChild(divChek) // se imprime el contenido
    }
  })


  //debido a que se limpia el contenedor antes de generar, mi busqueda se borraba, solucione desplegandola junto a los cheks(alfinal)
  let form = document.createElement('form')
  form.className = 'xd d-flex'
  form.innerHTML = `
    <input class="form-control me-2" type="search" id="busquedaTexto" placeholder="Write to me please for" aria-label="Search" />
    <button class="xd btn btn-outline-danger" type="button" id="buscar">
      Search
    </button>
  `
  desplegue.appendChild(form)
  /* agrege el escuchador para los cambios con el evento changue. Con el if verifico que el cambio escuchado venga de los cheks
  si no uso el if el escuchador tambien le hace caso al textbox */
  desplegue.addEventListener('change', (event) => {
    if (event.target.classList.contains('form-check-input')) {
      conFiltro();
    }
  })
  //Aca se defini que el escuchador del textbox le haga caso al boton al hacer clik en el
  document.getElementById('buscar').addEventListener('click', conFiltro)
  }


  /* desplegue.addEventListener('change', conFiltro)
  document.getElementById('buscar').addEventListener('click', conFiltro)

} */   // aplicar para que el filtro de texto cambie por changue al salir del input lo deje por si acaso queda mejor al final




//Aca tenemos la funcion que filtra todo y se relaciona

let conFiltro = () =>{
  // Seleccionamos todos los chekbox marcados en el contenedor con id chekers y se hace un array temporal para almacenarlos
  let cheksbox = document.querySelectorAll('#chekers .form-check-input:checked')
  let categoriasSeleccionadas = []
  //Realizamos un for, para agregarles el valor del chek a cada parte del nodelist "el valor es dado al generar el chek"
  for (let i = 0; i < cheksbox.length; i++) {
    categoriasSeleccionadas.push(cheksbox[i].value);
  }
  //Obtenemos el valor de el texto en al busqueda y se normaliza para evitar conflictos tipograficos
  let buscar = document.getElementById('busquedaTexto').value.toLowerCase()
  // Se aplica un filtro en el cual considera lo siguiente
  let eventosFiltrados = data.events.filter(evento => {
    //se verifica en el arreglo si esta la categoria seleccionada o si esta vacio
    let buscarPorCategoria = categoriasSeleccionadas.includes(evento.category) || categoriasSeleccionadas.length === 0;
    // se verifica si lo que escribimos en el textbox esta incluido en el nombre del evento o en al descripcion
    let buscarPorTexto = evento.name.toLowerCase().includes(buscar) || evento.description.toLowerCase().includes(buscar);
    //retornamos los valores del filtro
    return buscarPorCategoria && buscarPorTexto
  })
  //si no aplica ninguno muestra todo lo contenido en data.events
  mostrarTarjetas(eventosFiltrados)


}
// desplegamos tarjetas completas y cheks al cargar la pagina por primera vez
mostrarTarjetas(data.events)
chekeados()




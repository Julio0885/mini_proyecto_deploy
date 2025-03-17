const proyectos = [
    {
        "titulo": "Ecommerce",
        "descripcion": "Aplicación Web Ecommerce",
        "imagen": "./src/images/ecommerce.png",
    },
    {
        "titulo": "Restaurant",
        "descripcion": "Aplicación Web Restaurant",
        "imagen": "./src/images/restaurant1.png",
    },
    {
        "titulo": "Tienda de Computo",
        "descripcion": "Aplicación Web Tienda de Computo",
        "imagen": "./src/images/tiendacomputo.jpg",
    }
]

const proyectos_container = document.querySelector("#proyectos_card")
console.log(proyectos_container);
function loadproyectosCard(items, element) {
  element.innerHTML = ""
  for (let i = 0; i < items.length; i++) {
    const proyectos = items[i];
    const template = `
          <div class="ecommerce">
            <img src="${proyectos.imagen}" alt="ecommerce">
            <h2>${proyectos.titulo}</h2>
        </div>
      
        `;
    element.innerHTML += template;
  }
}

loadproyectosCard(proyectos, proyectos_container);


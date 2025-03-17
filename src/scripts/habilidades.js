

const icons = [
  {
    "icono": "./src/images/assets/html-5.png",
  },
  {
    "icono": "./src/images/assets/css-3.png",
  },
  {
    "icono": "./src/images/assets/js.png",
  },
  {
    "icono": "./src/images/assets/atom.png",
  },
  {
    "icono": "./src/images/assets/nextjs.jpg",
  },
  {
    "icono": "./src/images/assets/programing.png",
  },
  {
    "icono": "./src/images/assets/tailwindcss.png",
  },
  {
    "icono": "./src/images/assets/mongodb.png",
  },

]

const imagenes_container = document.querySelector("#imagenes_card")

function loadimagenCard(items, element) {
  element.innerHTML = ""
  for (let i = 0; i < items.length; i++) {
    const imagenes = items[i];
    const template = `
           <div>
              <img src="${imagenes.icono}" alt="Html" >         
          </div>
      
        `;
    element.innerHTML += template;
  }
}

loadimagenCard(icons, imagenes_container);

// Evento para aparecer y desaparecer con click
// const nombreElement = document.querySelector('#nombre');
// nombreElement.addEventListener('click', function () {
//     nombreElement.classList.toggle('hidden');
// });

// Evento de aparecer y desaparecer
const nombreElement = document.getElementById('nombre');
nombreElement.addEventListener('mouseover', function () {
    nombreElement.style.display = 'none';
});
nombreElement.addEventListener('mouseout', function () {
    nombreElement.style.display = 'inline';
});

// Evento para actualizar el texto de la experiencia
const experienciaElement = document.getElementById('experiencia');
experienciaElement.addEventListener('click', function () {
  experienciaElement.textContent = '1 Año de experiencia en Desarrollo Web'
});


 // Validación del formulario y envío usando EmailJS
 const contactForm = document.getElementById('contactForm');
 contactForm.addEventListener('submit', function (event) {
     event.preventDefault(); // Evita el envío del formulario por defecto

     // Validar que los campos no estén vacíos
     const name = document.getElementById('name').value.trim();
     const email = document.getElementById('email').value.trim();
     const message = document.getElementById('message').value.trim();

     if (name === '' || email === '' || message === '') {
         alert('Por favor, complete todos los campos.');
         return;
     }

     // Enviar el formulario usando EmailJS
     emailjs.sendForm('service_677q6uq', 'template_7s37de6', contactForm)
         .then(function (response) {
             alert('Mensaje enviado con éxito!');
             contactForm.reset(); // Limpiar el formulario
         }, function (error) {
             alert('Error al enviar el mensaje: ' + JSON.stringify(error));
         });
 });

 // metodo onclick
 function showMessage() {
  alert('Descargando CV...');
}

// metodo onchange
function handleNameChange() {
  const name = document.getElementById('name').value;
  alert('El nombre ha cambiado a: ' + name);
}



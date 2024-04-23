// Agrega un evento 'click' al botón con ID 'comparten'
document.getElementById('comparten').addEventListener('click', busqueda);

// Función que se ejecuta cuando se hace clic en el botón
function busqueda() {
  // Obtiene los valores de los inputs
  const n = document.getElementById('char1').value;
  const n2 = document.getElementById('char2').value;

  // Realiza la solicitud a la API con los IDs de los personajes
  fetch('https://rickandmortyapi.com/api/character/' + n + ',' + n2)
    .then(response => response.json())
    .then(data => {
      // Obtiene los datos de los personajes

      if ( n!= n2) {
        var character1 = data[0];
         var character2 = data[1];
       }else{
        var character1= data[0];
        var character2 = data[0];
      }
  

      // Muestra la información de los personajes
      mostrar(character1, 'personaje1');
      mostrar(character2, 'personaje2');

      // Compara los géneros de los personajes
      if (character1.gender == character2.gender) {
        mresultado('es igual');
   
      } else {
        mresultado('no es igual');
        
      }
    })
    .catch(error => console.error('error al obtener los personajes', error));
}

// Función para mostrar la información de un personaje
function mostrar(character, id) {
  let container = document.getElementById(id);
  container.innerHTML = `
    <p>${character.name}</p>
    <img src="${character.image}" alt="${character.name}">
  `;
}
// Función para mostrar la información de un personaje
function mostrar(character, id) {
  let container = document.getElementById(id);
  container.innerHTML = `
    <p>${character.name}</p>
    <img src="${character.image}" alt="${character.name}">
  `;
}

// Función para mostrar el resultado de la comparación
function mresultado(resultado) {
  const resultadodiv = document.getElementById('resultado');
  resultadodiv.innerText = resultado;

  const check = document.getElementById('checkmark');
  const cruz = document.getElementById('cross');

  if (resultado == 'es igual')  {
    check.innerHTML = '<img src="tilde.png" alt="géneros iguales">';
    cruz.innerHTML = '';
  } else {
    cruz.innerHTML = '<img src="cruz.png" alt="géneros diferentes">';
    check.innerHTML = '';
  }
}


 const jugador={
   
    "id": 2,
    "name": "nahuel",
    "apellido": "barriios",
    "apodo": "perrito",
    "edad": "28",
    "clubes":["san lorenzo","U.cay"],
    "activo":true,
    "sueldo":1000000.99

 }
console.log(jugador.name);

//consigna tp2   en html 2 imput    2 id    y el boton buscar   y mostrar 2 fotos  
//si el gender es igual  foto con v y si no una cruz x

    
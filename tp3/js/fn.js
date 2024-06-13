// una pantalla que pueda ingresar mediante 2 imput   3 numeros en cada uno  1 por vez
//y dos boton que diga enviar
//y que aparescan los 3 personajes   3 por cada div
let vec1 = [];
let vec2 = [];

function personaje1() {
    let n1 = Number(document.getElementById('nro').value);
    vec1.push(n1);
    let input1 = document.getElementById('nro');
    
    if (vec1.length < 3) {
        alert('Faltan ingresar datos para el primer personaje');
    } else if (vec1.length === 3) {
        console.log(vec1);
        alert('Se ingresó la cantidad máxima de datos para el primer personaje');
        input1.disabled = true;
    }
}

function personaje2() {
    let n2 = Number(document.getElementById('nro2').value);
    vec2.push(n2);
    let input2 = document.getElementById('nro2');
    
    if (vec2.length < 3) {
        alert('Faltan ingresar datos para el segundo personaje');
    } else if (vec2.length === 3) {
        console.log(vec2);
        alert('Se ingresó la cantidad máxima de datos para el segundo personaje');
        input2.disabled = true;
    }
}

function llamada() {
    let resultado = vec1.concat(vec2); // Combina vec1 y vec2 en un solo vector resultado

    if (resultado.length !== 6) {
        alert('Por favor, ingresa 3 números para cada personaje');
        return;
    }

    if (resultado.some(n => n < 1 || n > 826)) {
        alert('Por favor, ingresa números entre 1 y 826');
        return;
    }

    let URL = "https://rickandmortyapi.com/api/character/" + resultado.join(',');
    console.log("URL:", URL); // Agrega este console.log para verificar el valor de URL
    fetch(URL)
    .then(response => {
        if (!response.ok) {
            throw new Error('Error de red al obtener datos');
        }
        return response.json();
    })
    .then(data => {
        let personajes = Array.isArray(data) ? data : [data];
        let ids = personajes.map(personaje => personaje.id);
        console.log(ids);

        personajes.forEach(personaje => {
            const personajediv = document.createElement('div');
            const imagen = document.createElement('img');
            const nombre = document.createElement('p');
            const id = document.createElement('p');

            // Verifica que la propiedad 'image' exista en los datos del personaje
            imagen.src = personaje.image;
            nombre.textContent = `Nombre: ${personaje.name}`;
            id.textContent = `ID: ${personaje.id}`;

            personajediv.appendChild(imagen);
            personajediv.appendChild(nombre);
            personajediv.appendChild(id);

            const imgDiv = document.getElementById('img');
            imgDiv.appendChild(personajediv);
        });
    })
    .catch(error => {
        document.getElementById("error").innerHTML='Error al cargar los datos.';
        alert(error);
    });
}

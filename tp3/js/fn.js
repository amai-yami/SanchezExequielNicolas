// una pantalla que pueda ingresar mediante 2 imput   3 numeros en cada uno  1 por vez
//y dos boton que diga enviar
//y que aparescan los 3 personajes   3 por cada div
let personajes = {};
let input1Count = 0;
let input2Count = 0;

function validarNumero(n) {
    return n >= 1 && n <= 826;
}

function personaje1() {
    let n1 = Number(document.getElementById('nro').value);
    let input1 = document.getElementById('nro');
    
    if (!validarNumero(n1)) {
        alert('Por favor, ingresa un número entre 1 y 826 para el primer personaje');
        return;
    }
    
    if (Object.keys(personajes).filter(id => personajes[id].input === "input1").length >= 3) {
        alert('Se ingresó la cantidad máxima de datos para el primer input');
        return;
    }
    
    if (personajes[n1]) {
        alert('Este personaje ya ha sido ingresado');
        return;
    }
    
    input1Count++;
    alert(`Se ha ingresado el personaje ${input1Count} del primer input. Aún faltan ingresar ${3 - input1Count} personajes.`);
    
    fetch("https://rickandmortyapi.com/api/character/" + n1)
    .then(response => {
        if (!response.ok) {
            throw new Error('Error de red al obtener datos');
        }
        return response.json();
    })
    .then(data => {
        personajes[n1] = { data: data, input: "input1" };
        if (input1Count === 3 && input2Count === 3) {
            mostrarPersonajes();
        }
        input1.value = '';
        if (input1Count === 3) {
            input1.disabled = true;
        }
    })
    .catch(error => {
        alert(error);
    });
}

function personaje2() {
    let n2 = Number(document.getElementById('nro2').value);
    let input2 = document.getElementById('nro2');
    
    if (!validarNumero(n2)) {
        alert('Por favor, ingresa un número entre 1 y 826 para el segundo personaje');
        return;
    }
    
    if (Object.keys(personajes).filter(id => personajes[id].input === "input2").length >= 3) {
        alert('Se ingresó la cantidad máxima de datos para el segundo input');
        return;
    }
    
    if (personajes[n2]) {
        alert('Este personaje ya ha sido ingresado');
        return;
    }
    
    input2Count++;
    alert(`Se ha ingresado el personaje ${input2Count} del segundo input. Aún faltan ingresar ${3 - input2Count} personajes.`);
    
    fetch("https://rickandmortyapi.com/api/character/" + n2)
    .then(response => {
        if (!response.ok) {
            throw new Error('Error de red al obtener datos');
        }
        return response.json();
    })
    .then(data => {
        personajes[n2] = { data: data, input: "input2" };
        if (input1Count === 3 && input2Count === 3) {
            mostrarPersonajes();
        }
        input2.value = '';
        if (input2Count === 3) {
            input2.disabled = true;
        }
    })
    .catch(error => {
        document.getElementById("error").innerHTML='Error al cargar los datos.';
        alert(error);
    });
}

function mostrarPersonajes() {
    const container1 = document.createElement('div');
    const container2 = document.createElement('div');

    Object.values(personajes).forEach((personajeObj, index) => {
        const personaje = personajeObj.data;
        const input = personajeObj.input;
        
        const personajediv = document.createElement('div');
        const imagen = document.createElement('img');
        const nombre = document.createElement('div');
        const id = document.createElement('div');

        imagen.src = personaje.image;
        imagen.style.display = 'block';
        imagen.style.width = '100px';

        nombre.textContent = `${index + 1}. ${personaje.name}`;
        id.textContent = `ID: ${personaje.id}`;

        nombre.style.textAlign = 'center';
        nombre.style.marginTop = '5px';
        nombre.style.fontWeight = 'bold';

        id.style.textAlign = 'center';
        id.style.marginTop = '5px';

        personajediv.appendChild(imagen);
        personajediv.appendChild(nombre);
        personajediv.appendChild(id);

        if (input === "input1") {
            container1.appendChild(personajediv);
        } else if (input === "input2") {
            container2.appendChild(personajediv);
        }
    });

    const imgDiv = document.getElementById('img');
    imgDiv.innerHTML = '';
    imgDiv.appendChild(container1);
    imgDiv.appendChild(container2);

    container1.style.display = 'flex';
    container1.style.flexDirection = 'row';
    container1.style.flexWrap = 'wrap';
    container1.style.justifyContent = 'space-around';
    container1.style.border = '1px solid black';
    container1.style.padding = '10px';

    container2.style.display = 'flex';
    container2.style.flexDirection = 'row';
    container2.style.flexWrap = 'wrap';
    container2.style.justifyContent = 'space-around';
    container2.style.border = '1px solid black';
    container2.style.padding = '10px';

    const grupo1Label = document.createElement('div');
    grupo1Label.textContent = 'Grupo 1';
    const grupo2Label = document.createElement('div');
    grupo2Label.textContent = 'Grupo 2';

    imgDiv.insertBefore(grupo1Label, container1);
    imgDiv.insertBefore(grupo2Label, container2);
}

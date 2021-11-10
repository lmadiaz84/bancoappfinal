class envioFormulario {
    constructor(nombre, email, mensaje) {
        this.nombre = nombre;
        this.email = email;
        this.mensaje = mensaje;
    }
}
//  Evento para guardar formulario
let formulario = document.getElementById("formulario");
formulario.addEventListener("submit", guardarFormulario);

//  Funcion para cargar listado del localStorage o iniciarlo si no hay
function cargarListado() {
    let listadoFormulario = JSON.parse(localStorage.getItem("listadoFormulario"));
    if (listadoFormulario == null) {
        return [];
    }
    return listadoFormulario;
}
//  Funcion para guardar en localStorage
function guardarListado(listadoFormulario) {
    localStorage.setItem("listadoFormulario", JSON.stringify(listadoFormulario));
    mostrarListado(listadoFormulario);
}
//  Funcion para guardar formulario
function guardarFormulario(e) {
    e.preventDefault();
    let nombre = document.querySelector("#txtNombre").value;
    let email = document.querySelector("#txtEmail").value;
    let mensaje = document.querySelector("#txtMensaje").value;
    
    if (nombre != '' && email != '' && mensaje != ''){
       let listadoFormulario = cargarListado();
       listadoFormulario.push(new envioFormulario(nombre, email, mensaje));
       guardarListado(listadoFormulario); 
    }

    document.getElementById('formulario').reset();
}
//  Funcion para armar una tarjeta
function armarTarjeta(elemento) {
    const tarjeta = document.createElement("div");
    tarjeta.classList.add("tarjeta");

    const nombre = document.createElement("div");
    nombre.textContent = `Nombre: ${elemento.nombre}`;
    tarjeta.appendChild(nombre);

    const email = document.createElement("div");
    email.textContent = `Email: ${elemento.email}`;
    tarjeta.appendChild(email);

    const mensaje = document.createElement("div");
    mensaje.textContent = `Mensaje: ${elemento.mensaje}`;
    tarjeta.appendChild(mensaje);
    return tarjeta;
}

function mostrarListado(listadoFormulario) {
    let listado = document.getElementById("listado");
    listado.textContent = "";
    listadoFormulario.map(elemento => {
        listado.appendChild(armarTarjeta(elemento));
    });
}

mostrarListado(cargarListado());
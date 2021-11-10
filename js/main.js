window.onload = function(){
    this.iniciarSesion();
    cargarNombreEnPantalla();
   
}

function cargarNombreEnPantalla(){
    let nombreUsuario = sessionStorage.getItem('usuarioActivo');
    
    document.getElementById("nombre").innerHTML = "Bienvenido/a " + nombreUsuario;
}

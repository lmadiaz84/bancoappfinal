document.querySelector('#btnIngresar').addEventListener('click', iniciarSesion);

function iniciarSesion(){
    let sCorreo = '';
    let sContrasena = '';
    let bAcceso = false;

    sCorreo = document.querySelector('#txtCorreo').value;

    sContrasena = document.querySelector('#txtContrasena').value;

    bAcceso = validarCredenciales(sCorreo, sContrasena);

    if(bAcceso == true){
        ingresar();
    } else if (bAcceso == false && sCorreo != '' && sContrasena != ''){
        document.getElementById("txtCorreo").value='';
        document.getElementById("txtContrasena").value='';
        alert("Por favor ingrese, correo y contraseña correctos."); 
    }
}

function ingresar(){
    let rol = sessionStorage.getItem('rolUsuarioActivo');
    switch(rol){
        case '1':
            window.location.href = 'home.html';
            break;
        default:
            window.location.href = 'index.html';
            break;
    }   
}

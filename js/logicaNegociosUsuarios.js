function obtenerListaUsuarios(){
    let listaUsuarios = JSON.parse(localStorage.getItem('listaUsuariosLs'));

    if(listaUsuarios == null){
        listaUsuarios = [
            //id, nombre, apellido,correo,       contraseña, fecha nac, rol
            ['1','Leandro','Diaz','ldiaz@pepe.com','1234','1984-01-25','1']
        ]
    }
    return listaUsuarios;
}

function validarCredenciales(pCorreo, pContrasena){
    let listaUsuarios = obtenerListaUsuarios();
    let bAcceso = false;

    for(let i = 0; i < listaUsuarios.length; i++){
        if(pCorreo == listaUsuarios[i][3] && pContrasena == listaUsuarios[i][4]){
            bAcceso = true;
            sessionStorage.setItem('usuarioActivo', listaUsuarios[i][1] + ' ' + listaUsuarios[i][2]);
            sessionStorage.setItem('rolUsuarioActivo', listaUsuarios[i][6]);
        }
    }
    return bAcceso;
}
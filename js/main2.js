//Declaración de variables
var saldoCuenta = 10000;
var limiteExtraccion = 3000;
let num = 0;

cargarNombreEnPantalla();
actualizarSaldoEnPantalla();
actualizarLimiteEnPantalla();

function cargarNombreEnPantalla(){
    let nombreUsuario = sessionStorage.getItem('usuarioActivo');
    
    document.getElementById("nombre").innerHTML = "Bienvenido/a " + nombreUsuario;
}

function actualizarSaldoEnPantalla(){
    document.getElementById("saldo-cuenta").innerHTML = "$" + saldoCuenta;
 }
 
 function actualizarLimiteEnPantalla(){
     document.getElementById("limite-extraccion").innerHTML = "Tu límite de extracción es: $" + limiteExtraccion;
 }
 
 function depositarDinero(){
     let ingresar = document.getElementById("txtDepositar").value;
     ingresar=parseInt(ingresar);
     if(ingresar > 0){
         let saldoAnterior = parseInt(saldoCuenta);
         let sumaNueva = sumaDinero(ingresar);
         alert('Has depositado: $ ' + ingresar +
         '\n Saldo Anterior: $ ' + saldoAnterior +
         '\n Saldo Nuevo: $ ' + saldoCuenta);
         document.getElementById("txtDepositar").value='';        
         actualizarSaldoEnPantalla();
     } else{
         alert('No ingreso un valor');
     }
 }
 function extraerDinero(){
     let ingresar = document.getElementById("txtExtraer").value;
     ingresar=parseInt(ingresar);
     let saldoAnterior = parseInt(saldoCuenta);
     limiteExtraccion= parseInt(limiteExtraccion);
     if(ingresar > 0){
         if(ingresar <= limiteExtraccion && ingresar % 100 == 0){
             if(ingresar < saldoCuenta){
                 let restanueva = restarDinero(ingresar);
                 alert('Has depositado: $ ' + ingresar +
                 '\n Saldo Anterior: $ ' + saldoAnterior +
                 '\n Saldo Nuevo: $ ' + saldoCuenta);
                 document.getElementById("txtExtraer").value=''; 
                 actualizarSaldoEnPantalla();
             } else{
                 alert('Operación Cancelada');
             }
         } else{
             alert('No es multiplo de $100 o la cantidad que pide supera al limite');
             document.getElementById("txtExtraer").value=''; 
         }
     } else{
         alert('Operación cancelada');
     }
 }
 //------------------------------------------------------------------------------------------
 function sumaDinero(num){
     saldoCuenta += parseInt(num);
     actualizarSaldoEnPantalla();
 }
 //------------------------------------------------------------------------------------------
 function restarDinero(num){
    saldoCuenta -= parseInt(num);
    actualizarSaldoEnPantalla(); 
 }
 //------------------------------------------------------------------------------------------
 //Función limite de extracción
function cambiarLimiteDeExtraccion() {
    let ingresar = document.getElementById("txtLimite").value;
    ingresar=parseInt(ingresar);
    if(ingresar > 0 && ingresar != ''){
        var anteslimite = parseInt(limiteExtraccion);
        limiteExtraccion = ingresar;
        alert("El límite anterior era: $ "+ anteslimite +
        "\n Su nuevo límite es: $ " + limiteExtraccion);
        actualizarLimiteEnPantalla();
        document.getElementById("txtLimite").value='';
    }else{
        alert("Operación cancelada. No ingreso ningun valor");
    }
}
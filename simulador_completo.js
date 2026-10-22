
  let clientes = [];
  
  let creditos = [];

  let tasaInteres = 15;
  let clienteSeleccionado = null;
  let cuotaCalculada = 0;
  let montoCalculado = 0;
  let plazoCalculado = 0;
  let creditoAprobado = false;

  
//Para recuperar o mostrar información usar los métodos de la clase utilitarios, puede agregar métodos adicionales en utilitarios


// ocultar secciones
ocultarSecciones = function(){
    document.getElementById("parametros").classList.remove("activa");
    document.getElementById("clientes").classList.remove("activa");
}

//mostrar seccion(id)

mostrarSeccion = function(id){
    ocultarSecciones();
    document.getElementById(id).classList.add("activa");
}   

// guardar tasa

    guardarTasa = function(){

    let tasa = recuperarFloat("tasaInteres");

      if (tasa >= 10 && tasa <= 20){
        tasaInteres = tasa;
        mostrarTexto("mensajeTasa","Tasa configurada correctamente: " + tasa + "%");
    } else {
        mostrarTexto("mensajeTasa","La tasa debe estar entre 10% y 20%");
    }

}

// guardar cliente

guardarCliente = function(){
    let cedula = recuperarTexto("cedula");
    let nombre = recuperarTexto("nombre");
    let apellido = recuperarTexto("apellido");
    let ingresos = recuperarFloat("ingresos");
    let egresos = recuperarFloat("egresos");

    let cliente = {};
    cliente.cedula = cedula;
    cliente.nombre = nombre;
    cliente.apellido = apellido;
    cliente.ingresos = ingresos;
    cliente.egresos = egresos;

    clientes.push(cliente);
    //mostrar en tabla
     pintarClientes();

}


/// Pintar clientes

pintarClientes = function(){
    let contenido = "";
    let cliente;

    for (let i = 0; i < clientes.length; i++){
        cliente = clientes[i];

        contenido += "<tr>" +
            "<td>" + cliente.cedula + "</td>" +
            "<td>" + cliente.nombre + "</td>" +
            "<td>" + cliente.apellido + "</td>" +
            "<td>" + cliente.ingresos + "</td>" +
            "<td>" + cliente.egresos + "</td>" +
            "<td><button>Actualizar</button></td>" +
            "</tr>";
    }
    document.getElementById("tablaClientes").innerHTML = contenido;
}

// buscar clientes

buscarCliente = function(cedula){
      let clienteEncontrado = null;

      for (let i = 0; i < clientes.length; i++){
        if (clientes[i].cedula == cedula){
            clienteEncontrado = clientes[i];
            break;
        }
     } 
    return clienteEncontrado;


}
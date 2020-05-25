function obtenerDeudores(listaClientes) {
  deudores=[]
  
  for (i=0; i<listaClientes.length; i++) {
  	cliente=listaClientes[i]
    
    gastadoPorCliente(cliente)
    sumaPagos=0
    
    for (j=0; j<cliente.pagos.length; j++) {
    	sumaPagos=sumaPagos+cliente.pagos[j].monto
    }

    const deudaDeCliente=totalAPagar-sumaPagos

    if (deudaDeCliente>0) {
    	deudores.push({
    		nombre:cliente.nombreBanda,
    		telefono:cliente.telefono,
    		deuda:deudaDeCliente,
    	})
    }
  }

  return deudores
}

function obtenerMejoresClientes(listaClientes){ 
  const gastadoPorClientes=[]
  const valorHora=100
  
  for (i=0;i<listaClientes.length;i++){
    let cliente=listaClientes[i]
    
    gastadoPorClientes.push({
      nombre: cliente.nombreBanda,
      montoGastado:gastadoPorCliente(cliente),
    })
  }
  
  const gastadoPorClientesOrdenados=gastadoPorClientes.sort(function(a,b){return b.montoGastado-a.montoGastado})
  
  gastadoPorClientesOrdenados.splice(3)

  return gastadoPorClientesOrdenados
}

function obtenerFacturacionPorFecha(listaClientes,mes,anio){
	let montoTotal=0
	fechaABuscar(mes,anio)

	for (i=0;i<listaClientes.length;i++){
   	
    cliente=listaClientes[i]
    
   	for (j=0;j<cliente.pagos.length;j++){
   		
      if(cliente.pagos[j].fecha.includes(aBuscar)){
    	 	montoTotal=montoTotal+cliente.pagos[j].monto
    	}
    }
	}
	
  return ('El total facturado del mes ' + mes + ' del '+ anio+ ' es $' + montoTotal)
}
 

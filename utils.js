function gastadoPorCliente(cliente){
	valorPorHora=100
	sumaGrabaciones=0
	for (j=0;j<cliente.grabaciones.length; j++){
  		sumaGrabaciones=sumaGrabaciones+cliente.grabaciones[j].sesionDuracion
  	}

    totalAPagar=sumaGrabaciones*valorPorHora

    return totalAPagar
}

function fechaABuscar(mes,anio){
  if (mes<9){
    aBuscar = '0' + mes + '/' + anio
  } else {
  
  aBuscar = mes + '/' + anio
  }
  return aBuscar
}
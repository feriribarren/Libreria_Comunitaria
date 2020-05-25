const listaDeClientes = [
  {
  	nombreBanda:'Lets Rock',
    telefono:'3416412166',
    grabaciones: [
        {
          sesionDuracion:3,
          sesionFecha:'12/05/2020',
        }
    ],

  	pagos:[
	  	{
		  	fecha:'13/04/2020',
			  monto:100,
		  },
		  {
			  fecha:'17/04/2020',
			  monto:100,
		  }
	  ],
  },
  {
  	nombreBanda:'Rocket Power',
    telefono:'3414587955',
    grabaciones: [
    	{
    	  sesionDuracion:2,
    	  sesionFecha:'13/05/2020',
        },
              
        {
          sesionDuracion:4,
          sesionFecha:'17/05/2020',
        }
    ],

	  pagos:[
		  {
			  fecha:'15/05/2020',
			  monto:100,
		  },
		  {
			  fecha:'16/05/2020',
			  monto:200,
		  }
	  ],
  },
  {
  	nombreBanda:'Good Time',
    telefono:'3414785211',
    grabaciones: [
    	{
    	  sesionDuracion:2,
    	  sesionFecha:'13/03/2020',
        },
              
        {
          sesionDuracion:2,
          sesionFecha:'17/05/2020',
        }
    ],

	  pagos:[
		  {
			  fecha:'15/04/2020',
			  monto:400,
		  }
	  ],
  },
  {
  	nombreBanda:'Sunny Day',
    telefono:'1136541233',
    grabaciones: [
    	{
    	  sesionDuracion:5,
    	  sesionFecha:'13/03/2020',
        },
        {
          sesionDuracion:6,
          sesionFecha:'17/05/2020',
        },
        {
          sesionDuracion:4,
          sesionFecha:'20/03/2020',
        }
    ],

	  pagos:[
		  {
			  fecha:'17/03/2020',
			  monto:600,
		  },
		  {
			  fecha:'20/03/2020',
			  monto:300,
		  }
	  ],
  },
]

// console.log(obtenerDeudores(listaDeClientes))
// console.log(obtenerMejoresClientes(listaDeClientes))
// console.log(obtenerFacturacionPorFecha(listaDeClientes,3,2020))


const misNumeros= [2,1,100,5,50]
const misNumerosOrdenados=misNumeros.sort(function(a,b){return a-b}) //ORDENA DE MENOR A MAYOR


const misFechas=[
  '03/04/2020',
  '02/01/2019',
  '01/12/2020',
  '05/06/2018',
  '12/11/2019',
  '25/11/2019',
]

function buscarFechas(fechas, mes, anio) {
  fechaABuscar(mes,anio)
  const fechasEncontradas=[]

  for (i=0;i<fechas.length;i++){
    fecha=fechas[i]

    if (fecha.includes(aBuscar)) {
      fechasEncontradas.push(fecha) 
    }
  }
  
  return fechasEncontradas
}


/*
predecir cantidad de bandas que van a tener en la semana.
parametro lista de clientes, mes anio actual.

Tomo la cantidad de bandas que tuve el mes pasado:
voy al primer cliente
recorro la lista de graciones. Si corresponde al mes anterior de la fecha actual, sumo una al contador.

 y dividir por cuatro.
*/

function obtenerPrediccion(listaClientes){
  
  for (i=0;i<listaClientes.length;i++){
    let cliente=listaClientes[i]

    for (j=0;j<cliente.grabaciones.length;j++){
      if (cliente.grabaciones[j].sesionFecha.includes("03/2020")){
        console.log(cliente.grabaciones[j].sesionFecha)
      }
    }
  }  
}

obtenerPrediccion(listaDeClientes)
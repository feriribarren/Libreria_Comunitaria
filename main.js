function consultaLibro(listaLibros,isbn){
  let disponibilidad={}

  for (i=0;i<listaLibros.length;i++){
    libro=listaLibros[i]
    
    if(isbn==libro.isbn){
      
      disponibilidad = {
        libro: libro.titulo,
        isbn: libro.isbn,
        disponibilidad: obtenerDisponibilidad(libro),
      }
    }
  }
  return disponibilidad
}

function consultaPorAutor(listaLibros,autor){
  const listadoDeLibros=[]

  for (i=0;i<listaLibros.length;i++){
  
    libro=listaLibros[i]

    if (libro.autor===autor && obtenerDisponibilidad(libro)==="Disponible para alquilar"){
      listadoDeLibros.push({
        titulo:libro.titulo,
        isbn:libro.isbn,
      }) 
    }
  }

  return {
    autor: autor,
    librosDisponibles:listadoDeLibros,
  }
}

function librosMasPedidos(listaLibros){
  const alquileres=[]
  
  for (i=0;i<listaLibros.length;i++){
    libro=listaLibros[i]
    
    let cantidadAlquileres=0

    for (j=0;j<libro.alquileres.length;j++){
      cantidadAlquileres=cantidadAlquileres+1
    }

    alquileres.push({
      libro:libro.titulo,
      numeroDeAlquileres:cantidadAlquileres,
    })
  }

  const alquileresOrdenados= alquileres.sort(function(a,b){ return b.numeroDeAlquileres - a.numeroDeAlquileres})
  alquileresOrdenados.splice(10)

  return alquileresOrdenados
}


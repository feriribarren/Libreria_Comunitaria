function obtenerDisponibilidad(libro){
  ultimoElemento=libro.alquileres[libro.alquileres.length-1]
  disponibilidad=""

  if (ultimoElemento.devuelto){
    disponibilidad="Disponible para alquilar"
  } else {
    disponibilidad="No disponible. A la espera de su devolucion"
  }
  return disponibilidad
}
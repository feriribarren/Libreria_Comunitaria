# Libreria_Comunitaria
Examen: Librería comunitaria

El listado de libros (ejemplosLibros) será una lista (array) de objetos. 
Cada objeto es un libro. Cada libro tiene la siguiente información:
título (string), autor (string), año de lanzamiento (string), editorial (string), isbn(string), y alquileres (array). 
  Puntualmente "Alquileres", va a tener objetos que indican cada alquiler: cuándo se alquiló (es decir se entregó a un lector), y 
  si éste fue devuelto o no, mediante una variable booleana:
    Cuando se da un libro se anota la fecha en que se lo entrega, y la propiedad "devuelto" queda en "false" hasta que ese libro se 
    devuelve.
    Cuando dan ingreso a un libro devuelto, el valor cambia a true. 
    
    IMPORTANTE: Si el valor de devuelto es "false" es porque el libro no está disponible para alquilar, y por ende debe ser el ULTIMO 
    registro. (Para que haya uno más, hay que esperar que se devuelva para volver a alquilarlo). 



 1- CONSULTA LIBRO
Para saber si un libro está o no disponible, se lo busca entre el listado de libros. Se recibe su nro de isbn, y se devuelve:
El título del libro, su isbn y el mensaje de:
"disponible para alquilar" o "Libro no disponible. A la espera de devolución".

Para esto:
1. recorre el array de libros.
  En cada Libro (cada elemento del array):
  2. se chequea si el isbn es el consultado por el cliente
    3. Si el isbn es el consultado por el cliente, se revisa el último elemento del array "alquileres"
      Si el último elemento del array, tiene el valor de FALSE en la propiedad "devuelto" --> devuelve 
      "Libro no disponible. A la espera de devolución".
      Si el último elemento del array, tiene el valor de TRUE en la propiedad "devuelto" --> devuelve 
      "Libro disponible para alquilar"
      
2- FAN DE AUTORES
Para encontrar todos los libros DISPONIBLES para alquilar de un determinado autor, se busca entre todos los libros, 
se revisa si el autor es el que busca el lector, y se consulta si está disponible. El resultado es un listado de libros disponibles 
para alquilar del autor en cuestión, más su isbn.

Para esto: se recibe como parametro la lista de libros y el autor que se busca.
1. Se recorre el array de libros.
  En cada libro:
    2. Se revisa si el autor coincide con el requerido por el lector.
      Si no coincide, se sigue con el siguiente libro.
      Si coincide, 3. se chequea que esté disponible para alquilar (ver función usada anteriormente)
        4. Si está disponible, se agrega al array de libros del autor (previamente creado): título y su isbn para que lo pueda alquilar.

3- TOP TEN DE LIBROS
Para ver los 10 libros más pedidos, se debería ver de cada libro, la cantidad de veces que se prestó, y ordenarlos, de los más prestados a los menos.

Para esto:
1. Se recorre el array de libros
  En cada libro:
  2. Se cuentan la cantidad de elementos que tiene el array alquileres. Lo agregamos a un arraynuevo
  3. Ordenamos el array de mayor a menor.
  4. Sólo devolvemos los 10 primeros.



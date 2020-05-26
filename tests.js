const ejemplosLibros=[
  {
    titulo:"El amor en tiempos de colera",
    autor:"Gabriel Garcia Marquez",
    anioLanzamiento:'1992',
    editorial:"San Sebastian",
    isbn: "1234593827364",
    alquileres:[
      {
        fecha: "20/05/2020",
        devuelto: true,
      },
    ]  
  },
  {
    titulo:"Funes el memorioso",
    autor:"Jorge Luis Borges",
    anioLanzamiento:'1942',
    editorial:"Artificios y ficciones",
    isbn: "1234512354785",  
    alquileres:[
      {
        fecha: "10/01/2019",
        devuelto: true,
      },
      {
        fecha: "10/01/2020",
        devuelto: true,
      },
      {
        fecha: "10/03/2020",
        devuelto: true,
      },
      {
        fecha: "12/05/2020",
        devuelto: true,
      },
      {
        fecha: "15/05/2020",
        devuelto: true,
      },
      {
        fecha: "17/05/2020",
        devuelto: true,
      },
      {
        fecha: "20/05/2020",
        devuelto: true,
      },
      {
        fecha: "22/05/2020",
        devuelto: true,
      },
    ]
  },
  {
    titulo:"El coronel no tiene quien le escriba",
    autor:"Gabriel Garcia Marquez",
    anioLanzamiento:'1989',
    editorial:"Galaxias",
    isbn: "1234583725361",
    alquileres:[
      {
        fecha: "20/04/2020",
        devuelto: true,
      },
      {
        fecha: "21/05/2020",
        devuelto: false,
      },
    ]
  },
  {
    titulo:"Las ruinas circulares",
    autor:"Jorge Luis Borges",
    anioLanzamiento:'1989',
    editorial:"Galaxias",
    isbn: "1234512365201",
    alquileres:[
      {
        fecha: "20/04/2020",
        devuelto: true,
      },
      {
        fecha: "21/05/2020",
        devuelto: false,
      },
    ]
  },
  {
    titulo:"La isla bajo el mar",
    autor:"Isabel Allende",
    anioLanzamiento:'1980',
    editorial:"Chile ltda",
    isbn: "1234772261251",
    alquileres:[
      {
        fecha: "20/04/2019",
        devuelto: true,
      },
      {
        fecha: "17/03/2020",
        devuelto: true,
      },
      {
        fecha: "14/05/2020",
        devuelto: false,
      },
    ]
  },
  {
    titulo:"En Cambio",
    autor:"Estanislao Bachrach",
    anioLanzamiento:'2010',
    editorial:"Caja de libros",
    isbn: "1234592030095",  
    alquileres:[
      {
        fecha: "10/01/2020",
        devuelto: true,
      },
      {
        fecha: "10/05/2020",
        devuelto: false,
      },
    ]
  },
  {
    titulo:"Cien anios de soledad",
    autor:"Gabriel Garcia Marquez",
    anioLanzamiento:'1967',
    editorial:"Realismo de libro",
    isbn: "1234544117785",  
    alquileres:[
      {
        fecha: "10/01/2020",
        devuelto: true,
      },
      {
        fecha: "10/03/2020",
        devuelto: true,
      },
      {
        fecha: "12/04/2020",
        devuelto: true,
      },
      {
        fecha: "10/05/2020",
        devuelto: true,
      },
    ]
  },
  {
    titulo:"Paula",
    autor:"Isabel Allende",
    anioLanzamiento:'1994',
    editorial:"Eva Luna",
    isbn: "1234599887745",  
    alquileres:[
      {
        fecha: "10/01/2020",
        devuelto: true,
      },
      {
        fecha: "12/01/2020",
        devuelto: true,
      },
      {
        fecha: "20/01/2020",
        devuelto: true,
      },
      {
        fecha: "10/03/2020",
        devuelto: true,
      },
      {
        fecha: "12/04/2020",
        devuelto: true,
      },
      {
        fecha: "10/05/2020",
        devuelto: true,
      },
    ]
  },
  {
    titulo:"La casa de los espiritus",
    autor:"Isabel Allende",
    anioLanzamiento:'1982',
    editorial:"Chile ltda",
    isbn: "1234512365202",
    alquileres:[
      {
        fecha: "20/04/2020",
        devuelto: true,
      },
      {
        fecha: "29/05/2020",
        devuelto: false,
      },
    ]
  },
  {
    titulo:"Comer, rezar, amar",
    autor:"Elizabeth Gilbert",
    anioLanzamiento:'2010',
    editorial:"Singapur",
    isbn: "1234512365448",
    alquileres:[
    ]
  },
]

console.log(consultaLibro(ejemplosLibros,1234544117785)) //Disponible
console.log(consultaLibro(ejemplosLibros,1234772261251)) //No disponible

console.log(consultaPorAutor(ejemplosLibros, 'Isabel Allende')) //Un libro disponible
console.log(consultaPorAutor(ejemplosLibros, 'Gabriel Garcia Marquez')) // dos libros


console.log(librosMasPedidos(ejemplosLibros)) 

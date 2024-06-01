import React from 'react'

<<<<<<< HEAD
const SecondComponent = () => {

  const books = [
    "Cien años de soledad - Gabriel García Márquez",
    "María - Jorge Isaacs",
    "La casa de los espíritus - Isabel Allende",
    "Fervor de Buenos Aires - Jorge Luis Borges",
    "Pedro Páramo - Juan Rulfo",
    "Rayuela - Julio Cortázar",
    "Como agua para chocolate - Laura Esquivel"
  ];

  return (
    <div>
      <hr />
      <h2>listado de libros</h2>
      <ul>
        {
          books.map((book, index) => (
            <li key={index}>{book}</li>
          ))
        }
      </ul>
    </div>
  )
}

export default SecondComponent
=======
export const SecondComponent = () => {
    const books = [
        "Harry Potter y la piedra filosofal",
        "Harry Potter y la cámara secreta",
        "Harry Potter y el prisionero de Azkaban",
        "Harry Potter y el cáliz de fuego",
        "Harry Potter y la Orden del Fénix",
        "Harry Potter y el misterio del príncipe",
        "Harry Potter y las Reliquias de la Muerte"
    ];

    //const books = [];

  return (
    <div>
        <h2>Listado de libros</h2>
        <ul>
            {
                books.length >= 1 ?
                (
                        books.map((book, index) => {
                            return <li key={index}>{book}</li>
                        })
                ) : "No existen libros."
            }
        </ul>
    </div>
  )
}
>>>>>>> 0d50fef5ba3034a10a6d4466538653f7ca205009

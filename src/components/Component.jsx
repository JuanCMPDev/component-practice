import React from 'react'

const Component = () => {

  const name = 'Inés';
  const repository = 'https://github/inesmariao/component-practice'

  const student = {
    name: 'Juan Carlos',
    lastname: 'Muñoz Pico',
    mobile: '3182520552',
    linkedin: 'www.linkedin.com/in/juan-carlos-muñoz'
  }

  return (
    <div>
      <hr />
      <p>Este es mi primer componente de React</p>
      <h2>Temas de react</h2>
      <ul>
        <li>Componentes</li>
        <li>Eventos</li>
        <li>Estados - Hooks</li>
        <li>Comunicación</li>
      </ul>
      <hr />
      <h2>Nombre del docente</h2>
      <p>Nombre: {name}</p>
      <p>Repositorio:</p>
      <p>{repository}</p>
      <hr />
      <h2>Datos del estudiante</h2>
      <p>Name: {student.name}</p>
      <p>Lastname: {student.lastname}</p>
      <p>Mobile number: {student.mobile}</p>
      <p>LinkedIn profile:</p>
      <p>{student.linkedin}</p>
    </div>
  )
}

export default Component
import React from 'react'

import Header from "./components/Header";

function App(){

  const projects = ['Desenvolvimento com React JS', 'Desenvolvimento com PHP']

  function handleAddProject() {
    projects.push(`Novo projeto ${Date.now()}`)
    
  }
  return (
      <>
          <Header title="Curso de React JS" />
          <ul>
            {projects.map(project => <li key={project}>{project}</li>)}
          </ul>
          <button type='button' onClick={handleAddProject}>Adicionar novo projeto</button>
      </>
  );
}

export default App;
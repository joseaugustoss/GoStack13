import React, {useState} from 'react'

import Header from "./components/Header";

function App(){

  const [projects, setProjects] = useState(['Desenvolvimento com React JS', 'Desenvolvimento com PHP'])

  function handleAddProject() {
    setProjects([...projects, `Novo projeto ${Date.now()}`])
    
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
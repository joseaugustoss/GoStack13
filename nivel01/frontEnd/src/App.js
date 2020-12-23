import React, { useState, useEffect } from "react";

import api from "./services/api";
import "./App.css";

import imageBackground from "./assets/logogtech.png";
import Header from "./components/Header";

function App() {
    const [projects, setProjects] = useState([]);

    useEffect(() => {
        api.get("projects").then((response) => {
            setProjects(response.data);
        });
    }, []);

    async function handleAddProject() {
        const response = await api.post("projects", {
            title: `Novo Projeto ${Date.now()}`,
            owner: "José Augusto",
        });
        const project = response.data;
        setProjects([...projects, project]);
    }
    return (
        <>
            <Header title="Curso Rocketseat" />
            <ul>
                {projects.map((project) => (
                    <li key={project.id}>{project.title}</li>
                ))}
            </ul>
            <button type="button" onClick={handleAddProject}>
                Adicionar novo projeto
            </button>{" "}
            <br />
            <img src={imageBackground} alt="logomarca" width={200} />
        </>
    );
}

export default App;

const express = require("express");
const { v4: uuid, validate: isValidate } = require("uuid");

const app = express();
app.use(express.json());

const projects = [];

app.get("/projects", (request, response) => {
    return response.json(projects);
});

app.post("/projects", (request, response) => {
    const { title, owner } = request.body;

    const project = {
        id: uuid(),
        title,
        owner,
    };

    projects.push(project);
    return response.json(project);
});

app.put("/projects/:id", (request, response) => {
    const { id } = request.params;
    const { title, owner } = request.body;

    const projectFind = projects.findIndex(project  => project.id === id);

    if (projectFind < 0) {
        return response.status(400).json({ error: "Project not found." });
    }
    const project = {
        id,
        title,
        owner
    };
    
    projects[projectFind] = project;
    
    return response.status(200).json(project);
});

app.delete("/projects/:id", (request, response) => {
  const {id} = request.params;
  
  const projectFind = projects.findIndex(project => project.id === id);

  if (projectFind < 0) {
    return response.status(400).json({ error: "Project not found." });
  }
  
    projects.splice(projectFind, 1)
    return response.send();
});

app.listen("3333", () => {
    console.log("Back-end started!");
});

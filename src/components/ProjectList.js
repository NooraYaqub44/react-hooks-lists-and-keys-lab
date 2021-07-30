import React from "react";
import ProjectItem from "./ProjectItem";

function ProjectList({projects}) {

  const project=projects.map((projectes)=>{return<div key={projectes.id}>{projectes.name}</div>})
 //{projectes.name}{projectes.about}{projectes.technologies}
  return (
    <div id="projects">
      <h2>My Projects</h2>
      <div id="project-list">{/* render ProjectItem components here */}
         <div>{project}</div>
         
         
      </div>
    </div>
  );
}

export default ProjectList;

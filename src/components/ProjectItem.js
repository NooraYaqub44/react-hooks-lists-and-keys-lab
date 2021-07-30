import React from "react";

function ProjectItem({ name, about, technologies }) {
  const technology= technologies.map((technolog)=>{return<span key={technolog}>{technolog}</span>})

  
  return (
    <div className="project-item">
      <h3>{name}</h3>
      <p>{about}</p>
      <div className="technologies">
        {/* render a <span> for each technology in the technologies array */}
        
        <span>{technology}</span>
        
      </div>
    </div>
  );
}

export default ProjectItem;

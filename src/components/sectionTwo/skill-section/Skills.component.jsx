import React from "react"
import "./skills.style.css"
import SkillSet from "../skills-set/SkillSet.component.jsx"
import SkillList from "../skill-list.jsx"


const Skills = () => {
    return(
        <div className="skills-container">
            <h1>skills Section</h1>
            {SkillList.map(skill => (
            <SkillSet key={skill.id} title={skill.title} description={skill.description}/>
            ))}
        </div>
        
    )
}
export default Skills
import React from "react"
import "./skills.style.css"
import SkillSet from "../skills-set/SkillSet.component.jsx"

const Skills = () => {
    return(
        <div className="skills-container">
            <h1>skills Section</h1>
            <SkillSet/>
            <SkillSet/>
        </div>
        
    )
}
export default Skills
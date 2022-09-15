import React from "react";
import Skill from "./Skill";
import Avatar from "../assets/avatar.png";
import "../App.css";
import "./wilder.css";

const Wilder = ( {firstname, lastname, skills, description, rate} ) => {
    return (
        <article className="card">
            <img src={Avatar} alt={`${firstname} profile`} />
            <h3>{`${firstname} ${lastname}`}</h3>
            <p>
                {description}
            </p>
            <h4>Wild Skills</h4>
            {skills.map((skill) => <Skill key={skill.id} skill={skill}/>)}
        </article>
    );
};

export default Wilder;
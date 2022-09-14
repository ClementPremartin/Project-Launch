import React from 'react';
import "../App.css";

const Skill = ( {skill, rate} ) => {
    return (
        <div>
            <ul className="skills">
              <li>
                {skill.skill_name}
                <span className="votes">{skill.rate}</span>
              </li>
            </ul>
        </div>
    );
};

export default Skill;
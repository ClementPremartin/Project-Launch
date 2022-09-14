import React from 'react';
import "../App.css";

const Skill = ( {skill} ) => {
    return (
        <div>
            <ul className="skills">
              <li>
                {skill.skill_name}
                <span className="votes">3</span>
              </li>
            </ul>
        </div>
    );
};

export default Skill;
import React from 'react';
import "../App.css";

const Skill = ( {skill} ) => {
    return (
        <div>
            <ul className="skills">
              <li>
                {skill}
                <span className="votes">3</span>
              </li>
            </ul>
        </div>
    );
};

export default Skill;
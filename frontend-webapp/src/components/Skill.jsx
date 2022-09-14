import React from 'react';

const Skill = () => {
    return (
        <div>
            <ul className="skills">
              <li>
                HTML
                <span className="votes">3</span>
              </li>
              <li>
                CSS
                <span className="votes">3</span>
              </li>
              <li>
                Typescript
                <span className="votes">3</span>
              </li>
              <li>
                React
                <span className="votes">3</span>
              </li>
              <li>
                Node <span className="votes">2</span>
              </li>
            </ul>
        </div>
    );
};

export default Skill;
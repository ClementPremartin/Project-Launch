import React from 'react';
import Skill from "./Skill";
import Avatar from '../assets/avatar.png';

const Wilder = ( {wilder, firstname, lastname, skills} ) => {
    return (
        <div>
            <section className="card-row">
                <article className="card">
                <img src={Avatar} alt={`${firstname} profile`} />
                <h3>{`${firstname} ${lastname}`}</h3>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                    eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                    enim ad minim veniam, quis nostrud exercitation ullamco laboris
                    nisi ut aliquip ex ea commodo consequat.
                </p>
            <h4>Wild Skills</h4>
            {skills.map((skill) => <Skill key={skill.id} skill={skill}/>)}
          </article>
        </section>
    </div>
    );
};

export default Wilder;
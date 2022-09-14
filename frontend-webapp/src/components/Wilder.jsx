import React from 'react';
import Skill from "./Skill";
import Avatar from '../assets/avatar.png';

const Wilder = ( {name} ) => {
    return (
        <div>
            
            <section className="card-row">
                <article className="card">
                <img src={Avatar} alt="Jane Doe Profile" />
                <h3>{name}</h3>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                    eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                    enim ad minim veniam, quis nostrud exercitation ullamco laboris
                    nisi ut aliquip ex ea commodo consequat.
                </p>
            <h4>Wild Skills</h4>
            <Skill />
          </article>
        </section>
    </div>
    );
};

export default Wilder;
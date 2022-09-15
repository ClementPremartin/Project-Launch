import { useState } from "react";

import { SectionTitle, CardRow } from "./Home.styled";

import Wilder from "../components/Wilder/Wilder";

import wilders from "../data/wilders";

const Home = () => {
    const [wildersStudent] = useState(wilders);

    return (
        <>
            <SectionTitle>Wilders</SectionTitle>
            <CardRow>
              {wildersStudent.map((wilder) => (
                <Wilder
                  key={wilder.id}
                  firstname={wilder.firstname}
                  lastname={wilder.lastname}
                  skills={wilder.skills}
                  description={wilder.description}
                />
              ))}
        </CardRow>
        </>
    );
};

export default Home;
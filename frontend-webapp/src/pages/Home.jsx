import { useEffect, useState } from "react";
import axios from "axios";

import { SectionTitle, CardRow } from "./Home.styled";

import Wilder from "../components/Wilder/Wilder";

const Home = () => {
    const [wildersStudent, setWildersStudent] = useState([]);

    useEffect(() => {
      axios
        .get('/wilders')
          .then((res) => {
            setWildersStudent(res.data)
          }).catch((err) => {
            console.log(err);
          })
      // (async () => {
      //   try {
      //         const response = await axios.get('/wilder')
      //         setWildersStudent(response.data);
      //   } catch (error) {
      //         console.log(error.response.body);
      //   }
      // })
    }, []);

    return (
        <>
        {console.log(wildersStudent)}
            <SectionTitle>Wilders</SectionTitle>
            <CardRow>
              {wildersStudent && wildersStudent.map((wilder) => (
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
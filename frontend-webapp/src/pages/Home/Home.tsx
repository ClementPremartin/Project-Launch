import { useEffect, useState } from "react";
import axios from "axios";

import Wilder from "../../components/Wilder/Wilder";
import Loader from "../../components/Loader/Loader";

import { WilderType } from "../../types";

import { SectionTitle, CardRow } from "./Home_styled";

const Home = () => {
  const [wildersStudent, setWildersStudent] = useState<[] | WilderType[]>([]);
  const [timeOut, setTimeOut] = useState(true);

  useEffect(() => {
    (async () => {
      const response = await axios.get("/wilders");
      setWildersStudent(response.data);
      setTimeOut(false);
    })();
  }, []);

  return (
    <>
      <SectionTitle>Wilders</SectionTitle>

      {timeOut ? (
        <Loader />
      ) : wildersStudent.length > 0 ? (
        <CardRow>
          {wildersStudent &&
            wildersStudent.map((wilder) => (
              <Wilder
                key={wilder.id}
                firstname={wilder.firstname}
                lastname={wilder.lastname}
                skills={wilder.skills}
                description={wilder.description}
                school={wilder.school}
              />
            ))}
        </CardRow>
      ) : (
        "Aucun wilder a afficher"
      )}
    </>
  );
};

export default Home;


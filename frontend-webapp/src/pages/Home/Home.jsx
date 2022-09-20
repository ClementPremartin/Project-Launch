import { useEffect, useState } from "react";
import axios from "axios";

import { SectionTitle, CardRow } from "./Home_styled";

import Wilder from "../../components/Wilder/Wilder";
import Loader from "../../components/Loader/Loader";

const Home = () => {
  const [wildersStudent, setWildersStudent] = useState([]);
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
      {console.log(wildersStudent)}
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


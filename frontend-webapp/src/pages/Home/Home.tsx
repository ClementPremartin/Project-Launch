import { useQuery, gql } from "@apollo/client";

import Wilder from "../../components/Wilder/Wilder";
import Loader from "../../components/Loader/Loader";

import { WildersQuery } from "../../gql/graphql";

import { SectionTitle, CardRow } from "./Home_styled";

const GET_WILDERS = gql`
    query Wilders {
      wilders {
      id
      firstname
      lastname
      skills {
        id
        skill_name
        rate
      }
      description
      school {
        id
        city_name
      }
    }
  }
`;

const Home = () => {
  const {data, loading, error } = useQuery<WildersQuery>(
    GET_WILDERS, {fetchPolicy: "cache-and-network"}
  )

  return (
    <>
      <SectionTitle>Wilders</SectionTitle>

      {loading ? (
        <Loader />
      ) : error ? (error.message)
      : data?.wilders ? (
        <CardRow>
          {data?.wilders &&
            data?.wilders.map((wilder) => (
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


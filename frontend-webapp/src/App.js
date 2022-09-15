import { useState } from "react";
import { Container, Footer, Header, MainContainer, PageTitle} from "./App.styled";
import { Paragraph } from "./styles/base-styles";

import Wilder from "./components/Wilder";
import wilders from "./data/wilders";

function App() {

  const [wildersStudent] = useState(wilders);

  return (
    <div>
      <Header>
        <Container>
            <h1>Wilders Book</h1>
        </Container>
      </Header>
      <MainContainer>
            <PageTitle>Wilders</PageTitle>
            <section className="card-row">
              {wildersStudent.map((wilder) => (
                <Wilder
                  key={wilder.id}
                  firstname={wilder.firstname}
                  lastname={wilder.lastname}
                  skills={wilder.skills}
                  description={wilder.description}
                />
              ))}
        </section>
      </MainContainer>
      <Footer>
        <Container>
          <Paragraph>&copy; 2022 Wild Code School</Paragraph>
        </Container>
      </Footer>
    </div>
  );
}

export default App;

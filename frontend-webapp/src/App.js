import { Container, Footer, Header, MainContainer, PageTitle} from "./App.styled";
import { Paragraph } from "./styles/base-styles";

import Home from "./pages/Home";

function App() {
  return (
    <>
      <Header>
        <Container>
            <PageTitle>Wilders Book</PageTitle>
        </Container>
      </Header>
      <MainContainer>
        <Home />
      </MainContainer>
      <Footer>
        <Container>
          <Paragraph>&copy; 2022 Wild Code School</Paragraph>
        </Container>
      </Footer>
    </>
  );
}

export default App;

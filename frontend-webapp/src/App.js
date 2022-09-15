import { Container, Footer, Header, MainContainer} from "./App.styled";
import { Paragraph } from "./styles/base-styles";

import Home from "./pages/Home";

function App() {
  return (
    <>
      <Header>
        <Container>
            <h1>Wilders Book</h1>
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

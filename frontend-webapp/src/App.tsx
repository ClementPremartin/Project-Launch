
import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home/Home";
import CreateWilder from "./pages/CreateWilder/CreateWilder";
import Navbar from "./components/Navbar/Navbar";

import { Paragraph } from "./styles/base_styles";
import {
Container,
Footer,
Header,
MainContainer,
PageTitle,
GlobalContainer
} from "./App.styled";

function App() {
  return (
    <GlobalContainer>
      <Header>
        <Container>
          <PageTitle>Wilders Book</PageTitle>
          <Navbar />
        </Container>
      </Header>
      <MainContainer>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/create-wilder" element={<CreateWilder />} />
        </Routes>
      </MainContainer>
      <Footer>
        <Container>
          <Paragraph>&copy; 2022 Wild Code School</Paragraph>
        </Container>
      </Footer>
    </GlobalContainer>
  );
}

export default App;


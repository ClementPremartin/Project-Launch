import {
  Container,
  Footer,
  Header,
  MainContainer,
  PageTitle,
} from "./App.styled";

import { Routes, Route } from "react-router-dom";

import { Paragraph } from "./styles/base-styles";

import Home from "./pages/Home/Home";
import CreateWilder from "./pages/CreateWilder/CreateWilder";
import Navbar from "./components/Navbar/Navbar";

function App() {
  return (
    <>
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
    </>
  );
}

export default App;


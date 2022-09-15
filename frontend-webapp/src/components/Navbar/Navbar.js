import { Link } from "react-router-dom";
import { LinkStyled, LinkContainer } from "./Navbar_styled";

const Navbar = () => {
  return (
    <>
      <LinkContainer>
        <LinkStyled>
          <Link to="/">Home</Link>
        </LinkStyled>
        <LinkStyled>
          <Link to="/create-wilder">Nouveau Wilder</Link>
        </LinkStyled>
      </LinkContainer>
    </>
  );
};

export default Navbar;


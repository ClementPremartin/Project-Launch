import { Link } from "react-router-dom";
import { LinkStyled, LinkContainer } from "./Navbar_styled";
import "./Navbar.css";

const Navbar = () => {
  return (
    <>
      <LinkContainer>
        <LinkStyled>
          <Link to="/" className="navbarLink">
            Home
          </Link>
        </LinkStyled>
        <LinkStyled>
          <Link to="/create-wilder" className="navbarLink">
            Nouveau Wilder
          </Link>
        </LinkStyled>
      </LinkContainer>
    </>
  );
};

export default Navbar;


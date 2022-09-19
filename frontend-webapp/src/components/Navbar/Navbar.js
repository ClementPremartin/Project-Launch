import { LinkStyled, LinkContainer, LinkPage } from "./Navbar_styled";

const Navbar = () => {
  return (
    <>
      <LinkContainer>
        <LinkStyled>
          <LinkPage to="/" className="navbarLink">
            Home
          </LinkPage>
        </LinkStyled>
        <LinkStyled>
          <LinkPage to="/create-wilder" className="navbarLink">
            Nouveau Wilder
          </LinkPage>
        </LinkStyled>
      </LinkContainer>
    </>
  );
};

export default Navbar;


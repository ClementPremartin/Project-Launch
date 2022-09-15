import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <Link to="/">Home</Link>
      <Link to="/create-wilder">Nouveau Wilder</Link>
    </div>
  );
};

export default Navbar;


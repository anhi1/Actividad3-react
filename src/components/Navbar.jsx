import { Link } from "react-router-dom";
import logo from "../assets/logo.png";

const Navbar = () => {
  return (
    <nav>
      <Link to="/">
        <img src={logo} alt="Logo" className="logo" />
      </Link>
      <Link to="/activities">Actividades</Link>
    </nav>
  );
};

export default Navbar;

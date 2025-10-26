import { Link } from "react-router-dom";
import logo from "../images/logo.png";
import {Container} from "../utils/Utils";

const Nav = () => {
  const linkStyle = {
    color: "#757575",
    fontFamily: "Golos, sans-serif",
    fontWeight: 400,
    fontSize: "14px",
  };

  return (
    <nav className="bg-[#f4f5f8] py-4">
      <Container>
        <div className="flex justify-between items-center">
          <Link to="/">
            <img src={logo} alt="Okoprom logo" />
          </Link>

          <div className="flex gap-20">
            <div className="flex gap-12">
              <a href="mailto:okoprom@gmail.com" style={linkStyle}>
                okoprom@gmail.com
              </a>
              <a href="tel:+78007073101" style={linkStyle}>
                +7 (800) 707-31-01
              </a>
            </div>

            <div className="flex gap-12">
              <Link to="/delivery" style={linkStyle}>
                Доставка и оплата
              </Link>
              <Link to="/guarantee" style={linkStyle}>
                Гарантия
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </nav>
  );
};

export default Nav;

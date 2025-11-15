import { Container } from "../utils/Utils";
import NavMenu from "./NavMenu";

const Nav = () => {
  return (
    <nav className="bg-[#3C4242] text-white py-4">
      <Container>
        <div className="flex flex-col sm:flex-row justify-between items-center gap-3">

          <NavMenu />

          <div className="flex flex-col sm:flex-row sm:gap-12 text-sm font-light">
            <a
              href="mailto:okoprom@gmail.com"
              className="hover:text-[#f6f6f6] transition-colors duration-200"
            >
              okoprom@gmail.com
            </a>
            <a
              href="tel:+78007073101"
              className="hover:text-[#f6f6f6] transition-colors duration-200"
            >
              +7 (800) 707-31-01
            </a>
          </div>
          
        </div>
      </Container>
    </nav>
  );
};

export default Nav;

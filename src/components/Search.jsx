import { Container } from '../utils/Utils'
import { NavLink } from "react-router-dom";
import search_icon from '../images/Search.svg'
import cart_icon from '../images/Cart.svg' 
import SearchBox from './SearchBox';
import Aside from './Aside';

function Search() {
    const navItems = [
        { path: "/category", label: "Каталог" },
        { path: "/production", label: "Наше производство" },
        { path: "/about", label: "О компании" },
        { path: "/contact", label: "Контакты" },
    ];

    const baseClasses = "py-2 px-4 bg-[#f4f5f8] rounded-[5px] font-[Golos, sans-serif]";
    const activeLink = "text-[#202226] font-semibold";
    const inactiveLink = "text-[#161616] font-normal";

    return (
        <div className="py-8">
            <Container>
                <div className="flex justify-between items-center">
                    <ul className="flex gap-4">
                        {navItems.map((item) => (
                            <li key={item.path} className={baseClasses}>
                                <NavLink
                                    to={item.path}
                                    className={({ isActive }) =>
                                        isActive ? activeLink : inactiveLink
                                    }
                                >
                                    {item.label}
                                </NavLink>
                            </li>
                        ))}
                    </ul>
                    <Aside/>
                    <div className="flex gap-2">
                        <SearchBox/>
                        <button className="p-2 bg-[#f4f5f8] rounded-[5px]"><img src={cart_icon}/></button>
                        <button className="py-2 px-4 bg-[#202226] rounded-[5px] text-[#fff] cursor-pointer">Запросить консультацию</button>
                    </div>
                </div>
            </Container>
        </div>
    );
}

export default Search;

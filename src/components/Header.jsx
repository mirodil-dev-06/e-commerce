import Nav from './Nav'
import Search from './Search'
import { useLocation } from 'react-router-dom';
const exceptionalRoutes = ["/login", "/admin"];


function Header() {
  const location = useLocation();


  return exceptionalRoutes.includes(location.pathname) ?<></> :(
    <header>
        <Nav/>
        <Search/>
    </header>
  )
}

export default Header
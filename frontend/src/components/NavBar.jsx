import { navLinks } from "../constants"
import {Link} from "react-router-dom";
const NavBar = () => {
   
    return (
        <header className="w-full">
            {/* Navigation bar section */}
            <nav className="w-full px-5 2xl:px-0">
                {/* Company logo (Apple logo in this case) */}
                <img src='/logo.svg' alt="Apple Logo" />

                {/* Navigation links list */}
                <ul>
                    {/* We are importing each element of the navbar from the navLink array using map function, making the UI short and clean */}
                    {navLinks.map(({ label,path }) => (
                        // Each label is mapped to a <li> element with unique key
                       
                            <li key={label}>

                            {/* Each label links to its own section (href uses label name) */}
                            <Link to={path}>{label}</Link>
                        </li>
                     
                       
                    ))}
                </ul>

                {/* Right-side icons for search and cart */}
                <div className="flex-center gap-3">
                    {/* Search button with icon */}
                    <button>
                        <img src="/search.svg" alt="Search" />
                    </button>

                    {/* Cart button with icon */}
                    <button>
                        <img src="/cart.svg" alt="Cart" />
                    </button>
                 <Link to="/login"> Login</Link> 
                 <Link to="/register"> Register</Link> 
                   
                </div>
            </nav>
        </header>
    )
}

export default NavBar
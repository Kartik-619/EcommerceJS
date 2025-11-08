//we dont need to write the index.js by default while importing
import { navLinks } from "../constants"

const NavBar = () => {
    return (
        <header className="w-full">
            {/* Navigation bar section */}
            <nav >
                {/* Company logo (Apple logo in this case) */}
                <img src='/logo.svg' alt="Apple Logo" />

                {/* Navigation links list */}
                <ul>
                    {/*We are importing each element of the navbar from the navLink array using map function, making the UI short and clean */}
                    {navLinks.map(({ label }) => (
                        // Each label is mapped to a <li> element with unique key
                        <li key={label}>
                            {/* Each label links to its own section (href uses label name) */}
                            <a href={label}>{label}</a>
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
                </div>
            </nav>
        </header>
    )
}

export default NavBar

const NavBar = () => {
    return (
        <header>
            {/* Navigation bar section */}
            <nav>
                {/* Company logo (Apple logo in this case) */}
                <img src='/logo.svg' alt="Apple Logo" />

                {/* Navigation links list */}
                <ul>
                    {[
                        // Array of navigation menu items
                        { label: 'store' },
                        { label: 'Mac' },
                        { label: 'iPhone' },
                        { label: 'Watch' },
                        { label: 'Vision' },
                        { label: 'Android' },
                    ].map(({ label }) => (
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

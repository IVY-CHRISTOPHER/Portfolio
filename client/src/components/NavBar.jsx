import { Link } from "react-router-dom"

function NavBar() {
    
    
    
    return (
        <nav className="navbar">
            <div className="navbar-brand">
                <Link to="/">Coding LLC</Link>
            </div>
            <div className="navbar-links">
                <a href="https://github.com/IVY-CHRISTOPHER"
                    className="nav-link">
                    See My Code</a>
                <a href="https://www.linkedin.com/in/christopher-ivy-dev/"
                    className="nav-link">
                    Lets Connect</a>
            </div>
        </nav>
    )
}

export default NavBar
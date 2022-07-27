import { Link } from 'react-router-dom';

const Nav = () => {
    return (
        <nav className="Nav">
            <ul>
                <li><Link to="/"> Home </Link></li>
                <li><Link to="/about"> About </Link></li>
                <li><Link to="/programs"> Programs </Link></li>
                <li><Link to="/events"> Events </Link></li>
                <li><Link to="/contact"> Contact Us </Link></li>
           </ul>   
        </nav>
    )
}

export default Nav
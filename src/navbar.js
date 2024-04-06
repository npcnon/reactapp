import { Link } from 'react-router-dom';

const Navbar = () => {
    return ( 
        <nav className="navbar">
            <h1>Student</h1>
            <div className="links">
                <Link to="/">Personal Data</Link>
                <Link to="/family-background">Family Background</Link>
                <Link to="/academic-background">Academic Background</Link>
                <Link to="/academic-history">Academic History</Link>
            </div>
        </nav>
     );
}
 
export default Navbar;

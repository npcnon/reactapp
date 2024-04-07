import { Link } from 'react-router-dom';

const Navbar = ({fetchid, is_undergraduate_true}) => {

    return ( 
        <nav className="navbar">
            <h1>Student</h1>
            <div className="links">
                <Link to="/" onClick={()=>fetchid()}>Personal Data</Link>
                <Link to="/family-background" onClick={()=>fetchid()}>Family Background</Link>
                <Link to="/academic-background" onClick={()=>fetchid()}>Academic Background</Link>
                {/*if enabled_academic history === true show this link below, else hide this link below */}
                {console.log(is_undergraduate_true)}
                    
            </div>
        </nav>
     );
}
 
export default Navbar;

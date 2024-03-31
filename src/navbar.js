const Navbar = () => {
    return ( 
        <nav className="navbar">
            <h1>Student</h1>
            <div className="links">
                <a href="/">Personal Data</a>
                <a href="/family-background">Family Background</a>
                <a href="academic-background/">Academic Background</a>
                <a href="/academic-history">Academic History</a>
            </div>
        </nav>
     );
}
 
export default Navbar;
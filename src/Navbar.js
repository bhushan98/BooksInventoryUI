const Navbar = () => {
    return ( 
        <nav className="navbar">
            <h1>Book Inventory</h1>
            <div className="links ">
                <a href="/" >Home</a>
                <a href="/add" style={{
                    color: 'white',
                    backgroundColor: '#f1356d',
                    borderRadius: '8px'
                }}>Add Book</a>
            </div>
        </nav>
     );
}
 
export default Navbar;


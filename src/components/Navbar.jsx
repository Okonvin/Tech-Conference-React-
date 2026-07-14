import { Link } from "react-router-dom";

function Navbar(){
    return(
        <>
            <nav className="flex bg-green">
                <div className="logo">
                    <Link to="/"> DEVHORIZON_26</Link>
                </div>

                <div className="nav-items">
                    <Link to="/home">HOME</Link>
                    <Link to="/schedule">SCHEDULE</Link>
                    <Link to="/speaker">SPEAKERS</Link>
                </div> 
                 {/* <!----- MENU TOGGLE ------->  */}
                <div className="menu-toggle">&#9776;</div>
            </nav> 
        </>
    )
}

export default Navbar;
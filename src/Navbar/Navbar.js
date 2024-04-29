import './Navbar.css'
import logo from '../assets/logo.png'

function Navbar() {
    return(
        <div className="">
            <nav>
                <div className="logo">
                    <h2><img src={logo} alt="" /></h2>
                </div>
                <ul className="menu">
                    <li><a href="#">Home</a></li>
                    <li><a href="#">About</a></li>
                    <li className="services"><a href="#">Services</a>
                        <ul className="dropdown">
                            <li><a href="#">car</a></li>
                            <li><a href="#">bike</a></li>
                            <li><a href="#">truck</a></li>
                            <li><a href="#">riksha</a></li>
                        </ul>
                    </li>
                    <li><a href="#">Contact</a></li>
                </ul>
            </nav>
        </div>
    )
}

export default Navbar
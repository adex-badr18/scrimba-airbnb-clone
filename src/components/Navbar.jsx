import logo from '/images/airbnb.png';

export default function Navbar() {
    return (
        <header>
            <nav className="nav">
                <img src={logo} alt="Airbnb logo" />
            </nav>
        </header>
    )
}
import heroImage from '../assets/images/hero.png';

export default function Navbar() {
    return (
        <section className='hero--container'>
            <img src={logo} className='hero--img' alt="Airbnb logo" />

            <h1 className="hero--title">Online Experiences</h1>
            <p className="hero--description">
                Join unique interactive activities led by one-of-a-kind hosts—all without leaving home.
            </p>
        </section>
    )
}
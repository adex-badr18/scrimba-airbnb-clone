import cardImage from '../assets/images/card-img.png';

export default function Card() {
    return (
        <div className='card--container'>
            <img src={cardImage} className='card--img' alt="Card" />
            <span className="card--status">SOLD OUT</span>
            <div className="card--rating-container">
                <i className="fa-solid fa-star card--rating-icon"></i>
                <span className="card--rating">5.0</span>
                <span>(6)</span>
                <i className="fa-solid fa-circle card--rating-dot"></i>
                <span className="card--rating-country">USA</span>
            </div>

            <p className="card--description">
                Life lessons with Katie Zaferes
            </p>

            <p className="card--price">
                <span className="">From $136</span> / person
            </p>
        </div>
    )
}
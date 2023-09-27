import cardImage from '../assets/images/card-img.png';

export default function Card(props) {
    const {img, rating, reviewCount, country, title, price} = props;
    return (
        <div className='card--container'>
            <img src={`/${img}`} className='card--img' alt="Card" />
            <span className="card--status">SOLD OUT</span>
            <div className="card--rating-container">
                <i className="fa-solid fa-star card--rating-icon"></i>
                <span className="card--rating">{rating}</span>
                <span>({reviewCount})</span>
                <i className="fa-solid fa-circle card--rating-dot"></i>
                <span className="card--rating-country">{country}</span>
            </div>

            <p className="card--description">
                {title}
            </p>

            <p className="card--price">
                <span className="">From ${price}</span> / person
            </p>
        </div>
    )
}
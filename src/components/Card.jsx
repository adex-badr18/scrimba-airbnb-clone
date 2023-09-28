// import cardImage from '../assets/images/card-img.png';

export default function Card(props) {
    const {img, rating, reviewCount, location, title, price} = props;

    let badgeText;
    if (props.openSpots === 0) {
        badgeText = 'SOLD OUT';
    } else if (props.location === 'Online') {
        badgeText = 'ONLINE';
    }

    return (
        <div className='card--container'>
            <img src={`/images/${img}`} className='card--img' alt="Card" />
            {badgeText && <span className="card--status">{badgeText}</span>}
            <div className="card--rating-container">
                <i className="fa-solid fa-star card--rating-icon"></i>
                <span className="card--rating">{rating}</span>
                <span>({reviewCount})</span>
                <i className="fa-solid fa-circle card--rating-dot"></i>
                <span className="card--rating-country">{location}</span>
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
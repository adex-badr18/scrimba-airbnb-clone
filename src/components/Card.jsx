// import cardImage from '../assets/images/card-img.png';

export default function Card(props) {
    const obj = props.item;

    let badgeText;
    if (obj.openSpots === 0) {
        badgeText = 'SOLD OUT';
    } else if (obj.location === 'Online') {
        badgeText = 'ONLINE';
    }

    return (
        <div className='card--container'>
            <img src={`/images/${obj.coverImg}`} className='card--img' alt="Card" />
            {badgeText && <span className="card--status">{badgeText}</span>}
            <div className="card--rating-container">
                <i className="fa-solid fa-star card--rating-icon"></i>
                <span className="card--rating">{obj.stats.rating}</span>
                <span>({obj.stats.reviewCount})</span>
                <i className="fa-solid fa-circle card--rating-dot"></i>
                <span className="card--rating-country">{obj.location}</span>
            </div>

            <p className="card--description">
                {obj.title}
            </p>

            <p className="card--price">
                <span className="">From ${obj.price}</span> / person
            </p>
        </div>
    )
}
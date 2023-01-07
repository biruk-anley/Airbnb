
import star from '../images/star.svg'
import '../App.css'
// hero component


const Hero = ({item}) => {
    console.log('item', item.openSpots)
    let badgeText
    if (item.openSpots === 0) {
        badgeText = "SOLD OUT"
    }
    else if (item.location === "Online") {
        badgeText = "ONLINE"
    }
    return (
        <div className="card">
            {badgeText && <div className='card-badge'>
                {badgeText}
            </div>}
            
           
            <img src={`../images/${item.coverImg}`} />
            
            
            <div className='card--stats'>
                <span> <img src={star}/></span>
                <span>{item.rating}</span>
                <span className='gray' style={{color:'grey'}}>({item.reviewCount}) . </span>
                <span className='gray' style={{color:'grey'}}> {item.location} </span>

            </div>
            <p>{item.title}</p>
            <p>From <b>{item.price}</b> / person</p>
        </div>
    )
}

export default Hero;


import star from '../images/star.svg'
import '../App.css'



const Hero = (props) => {
    console.log('props', props.openSpots)
    let badgeText
    if (props.openSpots === 0) {
        badgeText = "SOLD OUT"
    }
    else if (props.location === "Online") {
        badgeText = "ONLINE"
    }
    return (
        <div className="card">
            {badgeText && <div className='card-badge'>
                {badgeText}
            </div>}
            
           
            <img src={`../images/${props.imgs}`} />
            
            <div className='card--stats'>
                <span> <img src={star}/>  </span>
                <span>{props.rating}</span>
                <span className='gray' style={{color:'grey'}}>({props.reviewCount}) . </span>
                <span className='gray' style={{color:'grey'}}> {props.location} </span>

            </div>
            <p>{props.title}</p>
            <p>From <b>{props.price}</b> / person</p>
        </div>
    )
}

export default Hero;

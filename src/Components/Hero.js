import Katie from '../images/Katie.png'
import star from '../images/star.svg'



const Hero =(props)=>{
    console.log('props',props)
    return (
        <div className="Hero">
            <img src={Katie} />
            <img src={`../images/${props.img}`} />
            
            <div className='card--status'>
                <span> <img src={star}/>  </span>
                <span>{props.rating}</span>
                <span style={{color:'grey'}}>({props.reviewCount}) . </span>
                <span style={{color:'grey'}}> {props.country} </span>

            </div>
            <p>{props.title}</p>
            <p>From <b>{props.price}</b> / person</p>
        </div>
    )
}

export default Hero;

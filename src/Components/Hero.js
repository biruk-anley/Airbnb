import katie from '../images/katie.png'
import star from '../images/star.svg'



const Hero =()=>{
    return (
        <div className="Hero">
            <img src={katie}/>
            p
            <div className='card--status'>
                <span> <img src={star}/>  </span>
                <span> 5.0 </span>
                <span style={{color:'grey'}}>(6) . </span>
                <span style={{color:'grey'}}> USA </span>

            </div>
            <p>Life lessons with Katie Zaferes</p>
            <p>From $136 / person</p>
        </div>
    )
}

export default Hero;
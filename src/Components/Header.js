import React from "react";
import logo from '../images/airbnb.png'
// adding header component


const Header=()=>{
    return(
      <header>
        <nav>
          <div className='Logo'>
            <img src={logo} style={{ width: "110px" }}/>
            
          
          </div>
        </nav>
      </header>
    )
  }

  export default Header;
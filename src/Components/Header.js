import React from "react";
import logo from '../../src/logo.svg'


const Header=()=>{
    return(
      <header>
        <nav>
          <div className='Logo'>
            <img src={logo} style={{ width: "150px" }}/>
            <h2>React Facts</h2>
          </div>
          
          <ul className='nav-item'>
            <li>Pricing</li>
            <li>About</li>
            <li>Contact</li>
          </ul>
        </nav>
      </header>
    )
  }

  export default Header;
import React from 'react'
import  './navbar.css';
import { Link } from 'react-router-dom';

function Navbar() {
    return (
        <div>
            <div class="preheader">
                <ul>
                    <li class="lg">
                    <a href="/"><i class="fa fa-home fa-1x"></i></a>
                    </li>
                    <li>
                    <i class="fa fa-map-marker fa-1x"></i> <a href="/contactus">Meet us</a>
                    </li>
                    <li>
                    <i class="fa fa-phone"></i><a>+216 22 971 532</a>
                    </li>
                    <li>
                    <i class="fa fa-envelope fa-1x"></i><a href="mailto:dh.benamor@gmail.com">dh.benamor@gmail.com</a>
                    </li>
                </ul>
            </div>
            <div class="header">
                
                <a href="/">
            <img src="logo.png" class="logo" alt="Sotelco"/>
        </a>
                <ul class="flex">
                    <li>
                        <Link  class="bb" to="/"> <b>HOME</b></Link>
                    </li>
                    <li>
                  <Link class="bb" to="/our-infrastructure"><b>OUR INFRASTRUCTURE</b></Link>                     
                    </li>
                    <li>
                        <Link class="bb" to="/software-development"><b>SOFTWARE DEVELOPEMENT</b></Link>
                    </li>
                    <li>
                        <Link class="bb" to="/our-solutions" ><b>OUR SOLUTIONS</b></Link>
                    </li>
                    <li>
                    <div class="dropdown">
  <a class="plus" href="#" role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false">
  <i class="fa fa-plus" aria-hidden="true"></i>
  </a>

  <ul class="dropdown-menu" aria-labelledby="dropdownMenuLink">
    <li><Link to="/startup-accelerator" class="dropdown-item" ><b>STARTUP ACCELERATOR</b></Link></li>
    <li><Link to="/e-learning" class="dropdown-item" ><b>E-LEARNING</b></Link></li>
    <li><Link to="/coworking" class="dropdown-item" ><b>COWORKING</b></Link></li>
    <li><Link to="/contactus" class="dropdown-item" ><b>CONTACT</b></Link></li>
  </ul>
</div>
                    </li>
                </ul>
            </div>
      
        </div>
    )
}

export default Navbar

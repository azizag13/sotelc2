import React from 'react';
import { Link } from 'react-router-dom';
import  './infrastruc.css';
import {carousel} from 'react-bootstrap';

function Infrastruc() {
    return (
        <div class="ourinfra">
     <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="3" aria-label="Slide 4"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="4" aria-label="Slide 5"></button>
  </div>
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src="soo4.jpg" class="d-block w-100" alt="..."/>
      <div class="ourback">
      <h2>E N JO Y A B LE  WORK ENVIRONMENT</h2>
      <p>Sotelco offers a spacious and comfortable work environment, endowed with a cybercafé  cyber robotics and infrastructure meeting Health International Standards and equipped with needed IT and Connectivity hardware  in accordance with the state of the art technology</p>
      <a href="/contactus" class="btn btn-primary">CONTACT US</a>
      </div>
      
    </div>
    <div class="carousel-item">
    <img src="do.jpg" class="d-block w-100" alt="..."/>
        <div class="ourback2">
        <div class="ourback">
      <h2>A LUXURIOUS SETTING</h2>
      <p>SOTELCOO offers a luxurious, sober and professional environment to make you want to work and welcome your customers.</p>
      <a href="/contactus" class="btn btn-primary">CONTACT US</a>
      </div>
        </div>
      
    </div>
    <div class="carousel-item">
      <img src="soo2.jpg" class="d-block w-100" alt="..."/>
      <div class="ourback2">
        <div class="ourback">
      <h2>LARGE PARKING</h2>
      <p>Stop wasting your time looking for a parking space. We offer secure parking that can hold up to 300 spaces for our members and their guests.</p>
      <a href="/contactus" class="btn btn-primary">CONTACT US</a>
      </div>
        </div>
    </div>
    <div class="carousel-item">
      <img src="soo1.jpg" class="d-block w-100" alt="..."/>
      <div class="ourback2">
        <div class="ourback">
      <h2>MEETING ROOMS</h2>
      <p>Our meeting rooms are designed to provide all the comfort necessary for the good conduct of meetings of 2 to 8 people. You can invite up to 7 people free of charge.</p>
      <a href="/contactus" class="btn btn-primary">CONTACT US</a>
      </div>
        </div>

    </div>
    <div class="carousel-item">
      <img src="soo6.jpg" class="d-block w-100" alt="..."/>
      <div class="ourback2">
        <div class="ourback">
      <h2>TRAINING ROOMS</h2>
      <p>ORGANIZE YOUR TRAINING, YOUR EVENTS AND YOUR SEMINARS IN OUR SPACES AT LOW COST.</p>
      <a href="/contactus" class="btn btn-primary">CONTACT US</a>
      </div>
        </div>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
         
              <div class="infoo">
                  <ul>
                 <li> <a href="/contactus">Contact Us</a> </li>
                 <li> <i class="fa fa-phone"></i><a>+216 22 971 532</a> </li>
                <li> <i class="fa fa-envelope fa-1x"></i><a>dh.benamor@gmail.com</a> </li>                  </ul>
                  <p class="rightt">
                      <h1>SOTELCO -</h1> 
                       <a href="/aboutus">À propos</a>
                  </p>
              </div>
              <div class="footerr">
                  <p class="foott">Copyright © SOTELCO</p>
                  <a class="gotop" href="#" ><i class="fa fa-arrow-up" aria-hidden="true"></i> </a>
     
              </div>
              
</div>
        
        
    )
}

export default Infrastruc

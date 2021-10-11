import React from 'react';
import { Link } from 'react-router-dom';
import  './infrastruc.css';
import {carousel} from 'react-bootstrap';
import { useTranslation } from 'react-i18next';

function Infrastruc() {
  const {t, i18n} = useTranslation();
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
      <h2>{t('G1')}</h2>
      <p class="G2">{t('G2')}</p>
      <a href="/contactus" class="btn btn-primary">{t('btn btn-primary')}</a>
      </div>
      
    </div>
    <div class="carousel-item">
    <img src="do.jpg" class="d-block w-100" alt="..."/>
        <div class="ourback2">
        <div class="ourback">
      <h2 class="G3">{t('G3')}</h2>
      <p class="G4">{t('G4')}</p>
      <a href="/contactus" class="btn btn-primary">{t('btn btn-primary')}</a>
      </div>
        </div>
      
    </div>
    <div class="carousel-item">
      <img src="soo2.jpg" class="d-block w-100" alt="..."/>
      <div class="ourback2">
        <div class="ourback">
      <h2 class="G5">{t('G5')}</h2>
      <p class="G60">{t('G6')}</p>
      <a href="/contactus" class="btn btn-primary">{t('btn btn-primary')}</a>
      </div>
        </div>
    </div>
    <div class="carousel-item">
      <img src="soo1.jpg" class="d-block w-100" alt="..."/>
      <div class="ourback2">
        <div class="ourback">
      <h2 class="G7">{t('G7')}</h2>
      <p class="G8">{t('G8')}</p>
      <a href="/contactus" class="btn btn-primary">{t('btn btn-primary')}</a>
      </div>
        </div>

    </div>
    <div class="carousel-item">
      <img src="soo6.jpg" class="d-block w-100" alt="..."/>
      <div class="ourback2">
        <div class="ourback">
      <h2 class="G9">{t('G9')}</h2>
      <p class="G10">{t('G10')}</p>
      <a href="/contactus" class="btn btn-primary">{t('btn btn-primary')}</a>
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

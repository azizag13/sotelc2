import React from 'react'
import  './home.css';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

function Home()
 {
     const {t, i18n} = useTranslation();
    return (
        <div class="home">
            <div class="intro-back">
          <h1>{t('h1')}</h1>  
          <p>{t('p')}</p>
          <a href="/contactus" class="btn btn-primary">{t('btn btn-primary')}</a>
          </div>
          <div class="intro-page">
              <h2>{t('h2')}</h2>
              <p class="bleu">
                  <b>{t('b')}</b>
              </p>
              <ul>
                  <li class="L1">{t('L1')}</li>
                  <li class="L2">{t('L2')} </li>
                  <li class="L3" >{t('L3')}</li>
              </ul>
              <a href="/software-development" ><b>{t('a')}</b></a>     
          </div>
          <div>
              <img class="img1" src="07.jpg" alt=""/>
              </div>
              <img class="img2" src="soo3.jpg" alt=""/>
              <div class="intro-page2">
                  <div class="intro-page">
                  <h2 class="H3">{t('H3')}</h2>
                  <p class="bleu">
                      <b class="H4">{t('H4')}</b>
                  </p>
                  <br/>
                  <p class="dark">
             <p class="L4"> {t('L4')} </p>

 <p class="L5"> {t('L5')} </p>

<p class="L6">{t('L6')}</p>

<p class="L7">{t('L7')}</p> 
                  </p>
                  <a href="/software-development" ><b>{t('a')}</b></a>
                  </div>
              </div>
              <div class="intro-page3">
                  <div class="intro-page">
                      <h2 class="H5">{t('H5')}</h2>
                      <p class="bleu"><b class="L8">{t('L8')}</b></p>
                      <p class="dark">
                  <p class="L9"> {t('L9')} </p> 
                  <p class="L10">{t('L10')}</p>
                  <p class="L11"> {t('L11')}</p>  
                      </p>
                      <a href="/software-development" ><b class="H6">{t('H6')}</b></a>
                  </div>
              </div>
              <img class="img3" src="min.jpg" alt=""/>
              <div><img class="img4" src="06.jpg" alt=""/></div>
              
              <div class="intro-page4">
                  <div class="intro-page">
                      <h2 class="titre">{t('titre')}</h2>
                      <p class="bleu">
                          <b class="F1">{t('F1')}</b>
                      </p>
                      <ul>
                          <li class="F2">{t('F2')}</li>
                          <br/>
                          <li class="F3">{t('F3')}</li>
                      </ul>
                      <a href="/software-development" ><b>{t('H6')}</b></a>
                  </div>
              </div>
              <div class="location">
                  <h1>
                     <b> {t('location')}</b>
                      </h1>
                      <iframe className="gps" src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12762.795216942333!2d10.1914538!3d36.8975531!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x42e63eff2ca14773!2sSOTELCO!5e0!3m2!1sfr!2stn!4v1629988177987!5m2!1sfr!2stn" allowfullscreen="" loading="lazy"></iframe>
              </div>
              <div class="info">
                  <ul>
                 <li> <a href="/contactus">Contact Us</a> </li>
                 <li> <i class="fa fa-phone"></i><a>+216 22 971 532</a> </li>
                <li> <i class="fa fa-envelope fa-1x"></i><a>dh.benamor@gmail.com</a> </li>                  </ul>
                  <p class="right">
                      <h1>SOTELCO -</h1> 
                       <a href="/aboutus">À propos</a>
                  </p>
              </div>
              <div class="footer">
                  <p class="foot">Copyright © SOTELCO</p>
                  <a class="gotop" href="#" ><i class="fa fa-arrow-up" aria-hidden="true"></i> </a>
     
              </div>

        </div>
    )
}

export default Home

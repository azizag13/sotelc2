import React from 'react';
import './software.css';
import { useTranslation } from 'react-i18next';

function Software() {
    const {t, i18n} = useTranslation();

    return (
        <div>
            <div class="softwareintro">
           <div class="soft-title">
               <div class="one">
               <h1>{t('F6')}</h1>
               <p class="K1">{t('K1')} </p>
               <a href="/contactus" class="btn btn-primary">{t('btn btn-primary')}</a>

               </div>
           </div>
            </div>
            <div class="soft-title2">
                <img src="09.jpg" alt=""/>
               <div class="titles">
                <h1 class="K2">{t('K2')}</h1>
                <p>
               <p class="K3">{t('K3')}</p>
                <ul>
                    <li class="K4">{t('K4')}</li>
                    <li class="K5">{t('K5')} </li>
                    <li class="K6">{t('K6')} </li>
                    <li class="K7">{t('K7')}</li>
                    <li class="K8">{t('K8')}</li>
                    <li class="K9">{t('K9')}</li>
                    <li class="K10">{t('K10')}</li>
                    <a href="/our-solutions"><b>{t('a')}</b></a>

                </ul>
                </p>
                </div>
                <div class="imgg">
                <img  src="05.jpg" alt=""/>
                </div>
                
                <div class="soft-title3">
                <div class="titles">
                <h1 class="E1">{t('E1')}</h1>
                <p>
               <p class="E2"> {t('E2')}</p>
                <ul>
                    <li class="E3">{t('E3')}</li>
                    <li class="E4">{t('E4')}</li>
                    <li class="E5">{t('E5')}</li>
                    <li class="E6">{t('E6')} </li>
                    <li class="E7">{t('E7')}</li>
                    <li class="E8">{t('E8')}</li>
                    <a href="/our-solutions"><b>{t('a')}</b></a>

                </ul>
                </p>
                </div>
                </div>
            </div>
            <div class="soft-title4">
            <div class="titles">
                <h1 class="I1">{t('I1')}</h1>
                <p>
            <p class="I2">  {t('I2')}  </p>
                <ul>
                    <li class="I3"> {t('I3')} </li>
                    <li class="I4" > {t('I4')} </li>
                    <li class="I5"> {t('I5')} </li>
                    <li class="I6"> {t('I6')} </li>
                    <li class="I7"> {t('I7')} </li>
                    <a href="/our-solutions"><b>{t('a')}</b></a>

                </ul>
                </p>
                   
                
                </div>
                <div >
                   <img class="imgg2" src="04.jpg" alt=""/>
                   </div>
            </div>
            <div class="soft-title5">
                <h3 class="I8">{t('I8')}</h3>
                <br/>
                <p>
            <p class="I9"> {t('I9')} </p>
                <ul>
                    <li>ICT</li>
                    <li class="M1"> {t('M1')} </li>
                    <li class="M2">{t('M2')}</li>
                    <li class="M3">{t('M3')}</li>
                    <li class="M4"> {t('M4')} </li>
                    <li class="M5"> {t('M5')} </li>
                    <li class="M6">{t('M6')}</li>
                    <li class="M">{t('M')}</li>
                    <li class="M7">{t('M7')}</li>
                    <li class="M8">{t('M8')}</li>
                    <li class="M9">{t('M9')}</li>
                    <li class="M10">{t('M10')}</li>
                    <li class="M11">{t('M11')}</li>
                    <li class="M12">{t('M12')}</li>
                    <li class="M13">{t('M13')}</li>
                    <li class="M14">{t('M14')}</li>
                    <li class="M15">{t('M15')}</li>
                    

                    
                </ul>
                </p>
            </div>
            <div class="infos">
                  <ul>
                 <li> <a href="/contactus">Contact Us</a> </li>
                 <li> <i class="fa fa-phone"></i><a>+216 22 971 532</a> </li>
                <li> <i class="fa fa-envelope fa-1x"></i><a>dh.benamor@gmail.com</a> </li>                  </ul>
                  <p class="rights">
                      <h1>SOTELCO -</h1> 
                       <a href="/aboutus">À propos</a>
                  </p>
              </div>
              <div class="footers">
                  <p class="foots">Copyright © SOTELCO</p>
                  <a class="gotop" href="#" ><i class="fa fa-arrow-up" aria-hidden="true"></i> </a>
     
              </div>
            </div>
        
    )
}

export default Software

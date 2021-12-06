import React from 'react';
import './coworking.css';
import { useTranslation } from 'react-i18next';
import { Link } from "react-router-dom";



function Coworking() {
  const {t, i18n} = useTranslation();

    return (
        <div class="coworking">
            <div class="soft-title">
               <div class="one">
               <h1 class="U"> {t('U')} </h1>
               <p>
             <p class="U1"> {t('U1')} </p>
          <ul>
              <li class="U2"> {t('U2')} </li>
              <li class="U3"> {t('U3')} </li>
              <li class="U4"> {t('U4')} </li>
          </ul>
              </p>
              <Link to="/contactus" class="btn btn-primary">{t('btn btn-primary')}</Link>

               </div>
           </div>
           <div class="grid-cow">
         <div class="cercle">
         <i class="fa fa-flag" aria-hidden="true"></i>
         </div>
         <h4 class="U5">  {t('U5')} </h4>
         <p class="U6"> {t('U6')} </p>
           </div>
           <div class="grid-cow">
         <div class="cercle">
         <i class="fa fa-files-o" ></i>
         </div>
         <h4 class="U7"> {t('U7')} </h4>
         <p class="U8"> {t('U8')} </p>
           </div>
           <div class="grid-cow">
         <div class="cercle">
         <i class="fa fa-trash" aria-hidden="true"></i>
         </div>
         <h4 class="U9"> {t('U9')} </h4>
         <p class="U10"> {t('U10')} </p>
           </div>
           <div class="grid-cow2">
               <div class="rectangle">
           <i class="fa fa-magic" ></i>
         </div>
         <h4 class="U11"> {t('U11')} </h4>
         <p class="U12"> {t('U12')} </p>
           </div>
           <div class="grid-cow2">
               <div class="rectangle">
           <i class="fa fa-eyedropper" ></i>
         </div>
         <h4 class="U13"> {t('U13')} </h4>
         <p class="U14"> {t('U14')} </p>
           </div>
           <div class="grid-cow2">
               <div class="rectangle">
           <i class="fa fa-picture-o" ></i>
         </div>
         <h4 class="U15"> {t('U15')} </h4>
         <p class="U16"> {t('U16')} </p>
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
              <div class="house6">
              <div class="nav">
        <div class="header">
          <a href="/">
            <img src="logo.png" class="logo" alt="Sotelco" />
          </a>
          <ul class="flex">
            <li>
              <Link class="bb" to="/">
                {" "}
                <b class="F4">{t("F4")}</b>
              </Link>
            </li>
            <li>
              <Link class="bb" to="/our-infrastructure">
                <b class="F5">{t("F5")}</b>
              </Link>
            </li>
            <li>
              <Link class="bb" to="/software-development">
                <b class="F6">{t("F6")}</b>
              </Link>
            </li>
            <li>
              <Link class="bb" to="/our-solutions">
                <b class="F7">{t("F7")}</b>
              </Link>
            </li>

            <li>
              <Link to="/startup-accelerator" class="bb">
                <b class="F8">{t("F8")}</b>
              </Link>
            </li>
            <li>
              <Link to="/e-learning" class="bb">
                <b class="F9">{t("F9")}</b>
              </Link>
            </li>
            <li>
              <Link to="/coworking" class="bb">
                <b class="F10">{t("F10")}</b>
              </Link>
            </li>
            <li>
              <Link to="/contactus" class="bb">
                <b>CONTACT</b>
              </Link>
            </li>
          </ul>
        </div>
      </div>
      </div>
              <div class="footer">
                  <p class="foot">Copyright © SOTELCO</p>
                  <a class="gotop" href="#" ><i class="fa fa-arrow-up" aria-hidden="true"></i> </a>
     
              </div>
              
           
        </div>
    )
}

export default Coworking

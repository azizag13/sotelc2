import React from 'react';
import './startup.css';
import { useTranslation } from 'react-i18next';
import { Link } from "react-router-dom";



function Startup() {
    const {t, i18n} = useTranslation();

    return (
        <div>
            <div class="startup">
            <div class="soft-title">
            <div class="one">
               <h1 class="O"> {t('O')} </h1>
               <p>
          <p class="O1" >  {t('O1')} </p>
             </p>
            
             <Link to="/contactus" class="btn btn-primary">{t('btn btn-primary')}</Link>

               </div>
               </div>
               <img class="web" src="website.jpg" alt=""/>
               <div class="start-title">
               <div class="titles">
                <h1 class="O2"><b>{t('O')}</b></h1>
                <p>
             <p class="O3"> {t('O3')} </p>
                
                <ul>
                    <li class="O4"> {t('O4')} </li>
                    <li class="O5"> {t('O5')} </li>
                    <li class="O6"> {t('O6')} </li>
                    <li class="O7"> {t('O7')} </li>
                    <li class="O8"> {t('O8')} </li>
                    <li class="O9"> {t('O9')} </li>
                    <li class="O10"> {t('O10')} </li>
                    <li class="O11"> Integrating collaborative models, simulations using virtual reality; and  servitization business models as well.</li>
                </ul>
                <Link to="/our-solutions"><b>{t('a')}</b></Link>
                </p>
                </div>
               </div>
            </div>
            <div class="opp">
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
              <div class="house4">
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
        </div>
    )
}

export default Startup

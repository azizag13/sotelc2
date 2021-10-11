import React from 'react'
import  './navbar.css';
import { Link } from 'react-router-dom';
import i18n from '../i18n';
import { useTranslation } from 'react-i18next';




const changeLanguage = (ln) => {
    return () => {
        i18n.changeLanguage(ln)
      console.log(`Language changed to ${ln}`)
    }
  }
function Navbar() {
    const {t, i18n} = useTranslation();
    
    return (
        <div>
            <div class="preheader">
                <ul>
                    <li class="lg">
                    <a href="/"><i class="fa fa-home fa-1x"></i></a>
                    </li>
                    <li>
                    <i class="fa fa-map-marker fa-1x"></i> <a href="/contactus">{t('i')}</a>
                    </li>
                    <li>
                    <i class="fa fa-phone"></i><a>+216 22 971 532</a>
                    </li>
                    <li>
                    <i class="fa fa-envelope fa-1x"></i><a href="mailto:dh.benamor@gmail.com">dh.benamor@gmail.com</a>
                    </li>
                </ul>
                <div class="trans">
                
                    <button onClick={changeLanguage("en")} >EN</button>
                    <button onClick={changeLanguage("fr")}>FR</button>
                </div>
                
                
            </div>
            <div class="header">
              
                <a href="/">
            <img src="logo.png" class="logo" alt="Sotelco"/>
        </a>
                <ul class="flex">
                    <li>
                        <Link  class="bb" to="/"> <b class="F4">{t('F4')}</b></Link>
                    </li>
                    <li>
                  <Link class="bb" to="/our-infrastructure"><b class="F5">{t('F5')}</b></Link>                     
                    </li>
                    <li>
                        <Link class="bb" to="/software-development"><b class="F6">{t('F6')}</b></Link>
                    </li>
                    <li>
                        <Link class="bb" to="/our-solutions" ><b class="F7">{t('F7')}</b></Link>
                    </li>
                    <li>
                    <div class="dropdown">
  <a class="plus" href="#" role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false">
  <i class="fa fa-plus" aria-hidden="true"></i>
  </a>

  <ul class="dropdown-menu" aria-labelledby="dropdownMenuLink">
    <li><Link to="/startup-accelerator" class="dropdown-item" ><b class="F8">{t('F8')}</b></Link></li>
    <li><Link to="/e-learning" class="dropdown-item" ><b class="F9">{t('F9')}</b></Link></li>
    <li><Link to="/coworking" class="dropdown-item" ><b class="F10">{t('F10')}</b></Link></li>
    <li><Link to="/contactus" class="dropdown-item" ><b >CONTACT</b></Link></li>
  </ul>
</div>
                    </li>
                </ul>
            </div>
      
        </div>
    )
}

export default Navbar

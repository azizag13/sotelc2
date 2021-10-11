import React from 'react';
import './contact.css';
import { useTranslation } from 'react-i18next';


function Contact() {
    const {t, i18n} = useTranslation();

    return (
        <div class="contact">
            <h1><b>  {t('btn btn-primary')} </b></h1>
            <p class="Z">
                {t('Z')}
            </p>
            <form id="contactus_form" action="/website_form/" method="post" data-model_name="mail.mail" class="s_website_form container-fluid mt32" enctype="multipart/form-data" data-success_page="/contactus-thank-you">
                <div class="form-group row form-field o_website_form_custom o_website_form_required_custom">
                    <div class="col-lg-3 col-md-4">
                        <label class="col-form-label" for="Name"><b class="Z1"> {t('Z1')} </b></label>
                    </div>
                    <div class="col-lg-7 col-md-8">
                        <input type="text" class="form-control o_website_form_input" name="Name" required=""/>
                    </div>
                </div>
                <div class="form-group row form-field o_website_form_custom">
                    <div class="col-lg-3 col-md-4">
                        <label class="col-form-label" for="Phone"><b class="Z2"> {t('Z2')} </b></label>
                    </div>
                    <div class="col-lg-7 col-md-8">
                        <input type="text" class="form-control o_website_form_input" name="Phone"/>
                    </div>
                </div>
                <div class="form-group row form-field o_website_form_required_custom">
                    <div class="col-lg-3 col-md-4">
                        <label class="col-form-label" for="email_from"><b>Email</b></label>
                    </div>
                    <div class="col-lg-7 col-md-8">
                        <input type="email" class="form-control o_website_form_input" name="email_from" required=""/>
                    </div>
                </div>
                <div class="form-group row form-field o_website_form_custom">
                    <div class="col-lg-3 col-md-4">
                        <label class="col-form-label" for="Partner Name"><b class="Z3"> {t('Z3')} </b></label>
                    </div>
                    <div class="col-lg-7 col-md-8">
                        <input type="text" class="form-control o_website_form_input" name="Partner Name"/>
                    </div>
                </div>
                <div class="form-group row form-field o_website_form_required_custom">
                    <div class="col-lg-3 col-md-4">
                        <label class="col-form-label" for="subject"><b class="Z4"> {t('Z4')} </b></label>
                    </div>
                    <div class="col-lg-7 col-md-8">
                        <input type="text" class="form-control o_website_form_input" name="subject" required=""/>
                    </div>
                </div>
                <div class="form-group row form-field o_website_form_custom o_website_form_required_custom">
                    <div class="col-lg-3 col-md-4">
                        <label class="col-form-label" for="Description"><b class="Z5"> {t('Z5')} </b></label>
                    </div>
                    <div class="col-lg-7 col-md-8">
                        <textarea class="form-control o_website_form_input" name="Description" required=""></textarea>
                    </div>
                </div>
                <div class="form-group row form-field d-none">
                    <div class="col-lg-3 col-md-4">
                        <label class="col-form-label" for="email_to"><b>Email To</b></label>
                    </div>
                    <div class="col-lg-7 col-md-8">
                        <input type="hidden" class="form-control o_website_form_input" name="email_to" value="dh.benamor@gmail.com"/>
                    </div>
                </div>
                <div class="form-group row">
                    <div class="offset-lg-3 offset-md-4 col-md-8 col-lg-7">
                        <a href="#" class="btn btn-primary btn-lg o_website_form_send"><b class="Z6"> {t('Z6')} </b></a>
                        <span id="o_website_form_result"></span>
                    </div>
                </div>
            </form>
            <div class="soco">
                
          <div class="port"><p>SOTELCO</p></div>   

             <div class="marker">
             <i class="fa fa-map-marker" aria-hidden="true"></i><a>12, rue Newton, Chotrana 2, Technopole El-Ghazala</a>
                 </div>  
                 <div class="port1">
                 <p>Tunis</p>    
                 <p>Tunisia</p>
                     </div>   
                 

                 <div class="phone">
                 <i class="fa fa-phone" aria-hidden="true"></i><a>216 22 971 532</a>
                 </div>
                 <div class="envlopper">
                 <i class="fa fa-envelope" aria-hidden="true"></i><a>dh.benamor@gmail.com</a>
                 </div>
                 <div class="gg">
                 <i class="fa fa-map-marker" aria-hidden="true"></i><a target="_BLANK" href="https://maps.google.com/maps?q=12%2C+rue+Newton%2C+Chotrana+2%2C+Technopole+El-Ghazala%2C+Tunis+%2C+Tunisia&amp;z=8"> Google Maps</a>
                 </div>
            </div>
            <div class="foot1">
                  <ul>
                 <li> <a href="/contactus">Contact Us</a> </li>
                 <li> <i class="fa fa-phone"></i><a>+216 22 971 532</a> </li>
                <li> <i class="fa fa-envelope fa-1x"></i><a>dh.benamor@gmail.com</a> </li>    
                 </ul>
                 <div class="bang">
                 <h1>SOTELCO -</h1> 
                 <a href="/aboutus">À propos</a>
                 </div>
                      
                  
              </div>
              <div class="goo">
                <div class="poor" ><p>Copyright © SOTELCO</p></div> 
                <a class="gotop" href="#" ><i class="fa fa-arrow-up" aria-hidden="true"></i> </a>
     
              </div>
            </div>
            
    )
}

export default Contact

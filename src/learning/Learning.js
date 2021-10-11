import React from 'react';
import './learning.css';
import { useTranslation } from 'react-i18next';

function Learning() {
    const {t, i18n} = useTranslation();

    return (
        <div class="learn">
            <div class="soft-titlee">
            <div class="one">
               <h1 class="T"> {t('T')} </h1>
               <p>
             <p class="T1"> {t('T1')} </p>
<p class="T2"> {t('T2')} </p>
<p class="T3"> {t('T3')} </p>
<p class="T4"> {t('T4')} </p>
<p class="T5"> {t('T5')} </p>
             </p>
               <a href="/contactus" class="btn btn-primary"> {t('btn btn-primary')} </a>

               </div>
               </div>
               
               <div class="learn-cards">
                   <h1 class="T6"> {t('T6')} </h1>
                   <div class="card-group">
  <div class="card">
    <img src="L1.jpg" class="card-img-top" alt="..."/>
    <div class="card-body">
      <h5 class="card-title"><b class="T7"> {t('T7')} </b></h5>
      <p class="card-text"> <a class="T8"> {t('T8')} </a>  </p>

    </div>
  </div>
  <div class="card">
    <img src="L2.jpg" class="card-img-top" alt="..."/>
    <div class="card-body">
      <h5 class="card-title"><b class="T9"> {t('T9')} </b></h5>
      <p class="card-text"> <a class="T10"> {t('T10')}  </a></p>
      
    </div>
  </div>
  <div class="card">
    <img src="L3.jpg" class="card-img-top" alt="..."/>
    <div class="card-body">
      <h5 class="card-title"><b class="S"> {t('S')} </b></h5>
      <p class="card-text"> <a class="S1"> {t('S1')} </a> </p>
      
    </div>
  </div>
</div>
          <div class="card2">
          <div class="card-group">
  <div class="card">
    <img src="L1.jpg" class="card-img-top" alt="..."/>
    <div class="card-body">
      <h5 class="card-title"><b class="S2"> {t('S2')} </b></h5>
      <p class="card-text"> 
  <a class="S3">    
     {t('S3')}
     </a>
      </p>

    </div>
  </div>
  <div class="card">
    <img src="L2.jpg" class="card-img-top" alt="..."/>
    <div class="card-body">
      <h5 class="card-title"><b class="S4"> {t('S4')} </b></h5>
      <p class="card-text">
    <a class="S5">  
    {t('S5')}
</a>
      </p>
      
    </div>
  </div>
  <div class="card">
    <img src="L3.jpg" class="card-img-top" alt="..."/>
    <div class="card-body">
      <h5 class="card-title"><b class="SS">  </b></h5>
      <p class="card-text"> 
    <a class="S6"> 
    {t('S6')}
</a>
       </p>
      
    </div>
  </div>
</div>
          </div>
          <div class="card3">
          <div class="card-group">
  <div class="card">
    <img src="L1.jpg" class="card-img-top" alt="..."/>
    <div class="card-body">
      <h5 class="card-title"><b class="S7"> {t('S7')} </b></h5>
      <p class="card-text"> 
 <a class="S8">      
  {t('S8')} 
</a>
      </p>

    </div>
  </div>
  <div class="card">
    <img src="L2.jpg" class="card-img-top" alt="..."/>
    <div class="card-body">
      <h5 class="card-title"><b class="S9"> {t('S9')} </b></h5>
      <p class="card-text">
          <a class="S10">
     {t('S10')}
</a>
      </p>
      
    </div>
  </div>
  <div class="card">
    <img src="L3.jpg" class="card-img-top" alt="..."/>
    <div class="card-body">
      <h5 class="card-title"><b class="S11"> {t('S11')} </b></h5>
      <p class="card-text"> 
      <a class="S12">
     {t('S12')}
</a>
      </p>
      
    </div>
  </div>
</div>
          </div>
          <div class="card4">
          <div class="card-group">
  <div class="card">
    <img src="L1.jpg" class="card-img-top" alt="..."/>
    <div class="card-body">
      <h5 class="card-title"><b class="S13"> {t('S13')} </b></h5>
      <p class="card-text"> 
      <a class="S14">
      {t('S14')}
</a>
      </p>

    </div>
  </div>
  <div class="card">
    <img src="L2.jpg" class="card-img-top" alt="..."/>
    <div class="card-body">
      <h5 class="card-title"><b class="X"> {t('X')} </b></h5>
      <p class="card-text">
          <a class="X1">
         {t('X1')}
          </a>
      </p>
      
    </div>
  </div>
  <div class="card">
    <img src="L3.jpg" class="card-img-top" alt="..."/>
    <div class="card-body">
      <h5 class="card-title"><b class="X2"> {t('X2')}  </b></h5>
      <p class="card-text"> 
   <a class="X3">
     {t('X3')}
</a>
      </p>
      
    </div>
  </div>
</div>
          </div>
          <div class="card5">
          <div class="card-group">
  <div class="card">
    <img src="L1.jpg" class="card-img-top" alt="..."/>
    <div class="card-body">
      <h5 class="card-title"><b>SQL</b></h5>
      <p class="card-text">
          <a class="X4">
      {t('X4')}
</a>
      </p>

    </div>
  </div>
  <div class="card">
    <img src="L2.jpg" class="card-img-top" alt="..."/>
    <div class="card-body">
      <h5 class="card-title"><b class="X5"> {t('X5')} </b></h5>
      <p class="card-text">
          <a class="X6">
      {t('X6')}
  </a>
      </p>
      
    </div>
  </div>
  <div class="card">
    <img src="L3.jpg" class="card-img-top" alt="..."/>
    <div class="card-body">
      <h5 class="card-title"><b class="X7"> {t('X7')} </b></h5>
      <p class="card-text">
          <a class="X8">
     {t('X8')}
</a>
      </p>
      
    </div>
  </div>
</div>
          </div>
          <div class="card6">
          <div class="card-group">
  <div class="card">
    <img src="L1.jpg" class="card-img-top" alt="..."/>
    <div class="card-body">
      <h5 class="card-title"><b class="X9"> {t('X9')} </b></h5>
      <p class="card-text">
          <a class="X10">
    {t('X10')}
</a>
      </p>

    </div>
  </div>
  <div class="card">
    <img src="L2.jpg" class="card-img-top" alt="..."/>
    <div class="card-body">
      <h5 class="card-title"><b class="X11"> {t('X11')} </b></h5>
      <p class="card-text">
          <a class="X12">
     {t('X12')}
  </a>
      </p>
      
    </div>
  </div>
  <div class="card">
    <img src="L3.jpg" class="card-img-top" alt="..."/>
    <div class="card-body">
      <h5 class="card-title"><b class="V">JAVA SCRIPT</b></h5>
      <p class="card-text">
          <a class="V1">
      {t('V1')}
 </a>
      </p>
      
    </div>
  </div>
</div>
          </div>
          <div class="card7">
          <div class="card-group">
  <div class="card">
    <img src="L1.jpg" class="card-img-top" alt="..."/>
    <div class="card-body">
      <h5 class="card-title"><b class="V2"> {t('V2')} </b></h5>
      <p class="card-text">
          <a class="V3">
      {t('V3')} 
</a>
      </p>

    </div>
  </div>
  <div class="card">
    <img src="L2.jpg" class="card-img-top" alt="..."/>
    <div class="card-body">
      <h5 class="card-title"><b>C++  PROGRAMMING</b></h5>
      <p class="card-text">
          <a class="V4">
       {t('V4')}
</a>
      </p>
      
    </div>
  </div>
  <div class="card">
    <img src="L3.jpg" class="card-img-top" alt="..."/>
    <div class="card-body">
      <h5 class="card-title"><b class="V5"> {t('V5')} </b></h5>
      <p class="card-text"> 
      <a class="V6">
      {t('V6')}
</a>
      </p>
      
    </div>
  </div>
</div>
          </div>
          <div class="card8">
          <div class="card-group">
  <div class="card">
    <img src="L1.jpg" class="card-img-top" alt="..."/>
    <div class="card-body">
      <h5 class="card-title"><b class="V7"> {t('V7')} </b></h5>
      <p class="card-text">
          <a class="V8">
      {t('V8')}
</a>
      </p>

    </div>
  </div>
  <div class="card">
    <img src="L2.jpg" class="card-img-top" alt="..."/>
    <div class="card-body">
      <h5 class="card-title"><b class="V9"> {t('V9')} </b></h5>
      <p class="card-text">
          <a class="V10">
    {t('V10')}
</a>
      </p>
      
    </div>
  </div>
  <div class="card">
    <img src="L3.jpg" class="card-img-top" alt="..."/>
    <div class="card-body">
      <h5 class="card-title"><b class="V11"> {t('V11')} </b></h5>
      <p class="card-text">
          <a class="V12">
      {t('V12')}
</a>
      </p>
      
    </div>
  </div>
</div>
          </div>
          <div class="card9">
          <div class="card-group">
  <div class="card">
    <img src="L1.jpg" class="card-img-top" alt="..."/>
    <div class="card-body">
      <h5 class="card-title"><b class="V13"> {t('V13')} </b></h5>
      <p class="card-text"> 
      <a class="V14">
      {t('V14')}
</a>
      </p>

    </div>
  </div>
  <div class="card">
    <img src="L2.jpg" class="card-img-top" alt="..."/>
    <div class="card-body">
      <h5 class="card-title"><b class="V15"> {t('V15')} </b></h5>
      <p class="card-text">
          <a class="V16">
     {t('V16')}
</a>
      </p>
      
    </div>
  </div>
  <div class="card">
    <img src="L3.jpg" class="card-img-top" alt="..."/>
    <div class="card-body">
      <h5 class="card-title"><b class="V17"> {t('V17')} </b></h5>
      <p class="card-text"> 
      <a class="V18">
      {t('V18')}
</a>
      </p>
      
    </div>
  </div>
</div>
</div>
                   
               <div class="foot-card">
               <div class="info">
                  <ul>
                 <li> <a href="/contactus">Contact Us</a> </li>
                 <li> <i class="fa fa-phone"></i><a>+216 22 971 532</a> </li>
                <li> <i class="fa fa-envelope fa-1x"></i><a>dh.benamor@gmail.com</a> </li>                  </ul>
                  <p class="right">
                      <h1 class="low">SOTELCO -</h1> 
                       <a href="/aboutus">À propos</a>
                  </p>
              </div>
              <div class="footer">
                  <p class="foot">Copyright © SOTELCO</p>
                  <a class="gotop" href="#" ><i class="fa fa-arrow-up" aria-hidden="true"></i> </a>
     
              </div>
              </div>
              </div>

        </div>
    )
}

export default Learning

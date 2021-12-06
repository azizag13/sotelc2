import React from "react";
import "./home.css";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

function Home() {
  const { t, i18n } = useTranslation();
  return (
    <div class="home">
      <div class="intro-back">
        <h1>{t("h1")}</h1>
        <p>{t("p")}</p>
        {/* <a href="/contactus" class="btn btn-primary">{t('btn btn-primary')}</a> */}
        <div class="bflex">
      <Link to="/software-development" >
        <button type="button" class="btn btn-primary">
            Software Development 
        </button>
     </Link>
      <Link to ="coworking" >    
          <button type="button" class="btn btn-primary">
            Coworking Space 
          </button>
     </Link>
      <Link to="/startup-accelerator">     
          <button type="button" class="btn btn-primary">
            Start-ups’ Accelerator 
          </button>
     </Link>     
      <Link to="/e-learning">
          <button type="button" class="btn btn-primary">
            E-Learning 
          </button>
     </Link>     
        </div>
      </div>
      <div  className="container">
      <div class="accordion" id="accordionPanelsStayOpenExample">
  <div class="accordion-item">
    <h2 class="accordion-header" id="panelsStayOpen-headingOne">
      <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseOne" aria-expanded="true" aria-controls="panelsStayOpen-collapseOne">
      {t("h2")}
      </button>
    </h2>
    <div id="panelsStayOpen-collapseOne" class="accordion-collapse collapse show" aria-labelledby="panelsStayOpen-headingOne">
      <div class="accordion-body">
        <div class="intro-page">
      <p class="bleu">
          <b>{t("b")}</b>
        </p>
        
        <ul>
          <li class="L1">{t("L1")}</li>
          <li class="L2">{t("L2")} </li>
          <li class="L3">{t("L3")}</li>
        </ul>
        <img class="img1" src="07.jpg" alt="" />
      </div>
    </div>
  </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header" id="panelsStayOpen-headingTwo">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseTwo" aria-expanded="false" aria-controls="panelsStayOpen-collapseTwo">
      {t("H3")}
      </button>
    </h2>
    <div id="panelsStayOpen-collapseTwo" class="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingTwo">
      <div class="accordion-body">
      <div class="intro-page">
     < div  class="intro-page2">
      <p class="bleu">
            <b class="H4">{t("H4")}</b>
          </p>
          
          <p class="dark">
            <p class="L4"> {t("L4")} </p>

            <p class="L5"> {t("L5")} </p>

            <p class="L6">{t("L6")}</p>

            <p class="L7">{t("L7")}</p>
          </p>
          <img class="img2" src="soo3.jpg" alt="" />
      </div>
      </div>
      </div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header" id="panelsStayOpen-headingThree">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseThree" aria-expanded="false" aria-controls="panelsStayOpen-collapseThree">
      {t("H5")}
      </button>
    </h2>
    <div id="panelsStayOpen-collapseThree" class="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingThree">
      <div class="accordion-body">
      <div class="intro-page">
     <div  class="intro-page3">
     <p class="bleu">
            <b class="L8">{t("L8")}</b>
          </p>
          <p class="dark">
            <p class="L9"> {t("L9")} </p>
            <p class="L10">{t("L10")}</p>
            <p class="L11"> {t("L11")}</p>
          </p>
          <img class="img3" src="min.jpg" alt="" />
      </div>
    </div>
  </div>
  </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header" id="panelsStayOpen-headingFour">
      <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseFour" aria-expanded="true" aria-controls="panelsStayOpen-collapseFour">
      {t("titre")}
      </button>
    </h2>
    <div id="panelsStayOpen-collapseFour" class="accordion-collapse collapse show" aria-labelledby="panelsStayOpen-headingFour">
      <div class="accordion-body">
      <div class="intro-page">
     <div  class="intro-page4">
     <p class="bleu">
            <b class="F1">{t("F1")}</b>
          </p>
          <ul>
            <li class="F2">{t("F2")}</li>
            <br />
            <li class="F3">{t("F3")}</li>
          </ul>
          <img class="img4" src="06.jpg" alt="" />
          </div>
          </div>
      </div>
    </div>
  </div>
  
</div>
</div>
      {/*
      <div class="accordion" id="accordionPanelsStayOpenExample">
      <div class="accordion-item" class="intro-page">
        <h2 class="accordion-header" id="panelsStayOpen-headingOne">
        <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseOne" aria-expanded="true" aria-controls="panelsStayOpen-collapseOne">
          {t("h2")}
          </button>
          </h2>
          <div id="panelsStayOpen-collapseOne" class="accordion-collapse collapse show" aria-labelledby="panelsStayOpen-headingOne">
          <div class="accordion-body">
        <p class="bleu">
          <b>{t("b")}</b>
        </p>
        
        <ul>
          <li class="L1">{t("L1")}</li>
          <li class="L2">{t("L2")} </li>
          <li class="L3">{t("L3")}</li>
        </ul>
        <a href="/software-development">
          <b>{t("a")}</b>
        </a>
        <img class="img1" src="07.jpg" alt="" />
        </div>
        </div>
        </div>
        </div>
      
      <div  class="intro-page2">
      <div class="accordion" id="accordionPanelsStayOpenExample">
        <div class="accordion-item" class="intro-page">
          <h2 class="accordion-header" id="panelsStayOpen-headingOne" class="H3">
          <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseOne" aria-expanded="false" aria-controls="panelsStayOpen-collapseOne">
            {t("H3")}
            </button>
            </h2>
            <div id="panelsStayOpen-collapseOne" class="accordion-collapse collapse show" aria-labelledby="panelsStayOpen-headingOne">
          <div class="accordion-body">
          <p class="bleu">
            <b class="H4">{t("H4")}</b>
          </p>
          
          <p class="dark">
            <p class="L4"> {t("L4")} </p>

            <p class="L5"> {t("L5")} </p>

            <p class="L6">{t("L6")}</p>

            <p class="L7">{t("L7")}</p>
          </p>
          <a href="/software-development">
            <b>{t("a")}</b>
          </a>
          <img class="img2" src="soo3.jpg" alt="" />
          </div>
          </div>
          </div>
          </div>
        </div>
      
      <div class="intro-page3">
        <div class="accordion-item"  class="intro-page">
          <h2 class="accordion-header" id="flush-headingThree" class="H5">
          <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
            {t("H5")}
            </button>
            </h2>
         <div id="flush-collapseThree" class="accordion-collapse collapse" aria-labelledby="flush-headingThree" data-bs-parent="#accordionFlushExample">
         <div class="accordion-body">
          <p class="bleu">
            <b class="L8">{t("L8")}</b>
          </p>
          <p class="dark">
            <p class="L9"> {t("L9")} </p>
            <p class="L10">{t("L10")}</p>
            <p class="L11"> {t("L11")}</p>
          </p>
          <a href="/software-development">
            <b class="H6">{t("H6")}</b>
          </a>
          <img class="img3" src="min.jpg" alt="" />
          </div>
          </div>
        </div>
      </div>
    

      <div class="intro-page4">
        <div class="accordion-item" class="intro-page">
          <h2 class="accordion-header" id="panelsStayOpen-headingFour" class="titre">
        <button  class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseFour" aria-expanded="false" aria-controls="panelsStayOpen-collapseFour">
            {t("titre")}
            </button>
            </h2>
            <div id="panelsStayOpen-collapseFour" class="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingFour">
            <div class="accordion-body">
          <p class="bleu">
            <b class="F1">{t("F1")}</b>
          </p>
          <ul>
            <li class="F2">{t("F2")}</li>
            <br />
            <li class="F3">{t("F3")}</li>
          </ul>
          <a href="/software-development">
            <b>{t("H6")}</b>
          </a>
          <img class="img4" src="06.jpg" alt="" />
          </div>
          </div>
        </div>
      </div>
      */}
      
      
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>

      <div>
      <div class="location">
        <h1>
          <b> {t("location")}</b>
        </h1>
        <div>
        
        </div>
        <iframe
          className="gps"
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12762.795216942333!2d10.1914538!3d36.8975531!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x42e63eff2ca14773!2sSOTELCO!5e0!3m2!1sfr!2stn!4v1629988177987!5m2!1sfr!2stn"
          allowfullscreen=""
          loading="lazy"
        ></iframe>
      </div>
      <div className="end">
      <div class="info">
        <ul>
          <li>
            {" "}
            <a href="/contactus">Contact Us</a>{" "}
          </li>
          <li>
            {" "}
            <i class="fa fa-phone"></i>
            <a>+216 22 971 532</a>{" "}
          </li>
          <li>
            {" "}
            <i class="fa fa-envelope fa-1x"></i>
            <a>dh.benamor@gmail.com</a>{" "}
          </li>{" "}
        </ul>
        <p class="right">
          <h1>SOTELCO -</h1>
          <a href="/aboutus">À propos</a>
        </p>
      </div>
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
      <div class="footer">
        <p class="foot">Copyright © SOTELCO</p>
        <a class="gotop" href="#">
          <i class="fa fa-arrow-up" aria-hidden="true"></i>{" "}
        </a>
      </div>
    </div>
    </div>
    </div>
  );
}

export default Home;

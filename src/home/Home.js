import React from 'react'
import  './home.css';
import { Link } from 'react-router-dom';

function Home()
 {
    return (
        <div class="home">
            <div class="intro-back">
          <h1>Your partner in Business Intelligence, Digital Marketing and Finance</h1>  
          <p>SOTELCO is a platform for innovative digitalization services for Finance, e-commerce, e-learning, e-health and Industry 4.0.</p>
          <a href="/contactus" class="btn btn-primary">CONTACT US</a>
          </div>
          <div class="intro-page">
              <h2>Software Development</h2>
              <p class="bleu">
                  <b>In partnership with international platforms, Sotelco,  will support your outsourcing :</b>
              </p>
              <ul>
                  <li>Digitizing of your  Data Mining and Business Intelligence</li>
                  <li>Digital Marketing and Finance </li>
                  <li>Industry 4.0: Billing and invoicing, production management, CAO/DAO, Engineering &Methods, Quality Control, Logistics, delivery and shipping</li>
              </ul>
              <a href="/software-development" ><b>READ MORE</b></a>     
          </div>
          <div>
              <img class="img1" src="07.jpg" alt=""/>
              </div>
              <img class="img2" src="soo3.jpg" alt=""/>
              <div class="intro-page2">
                  <div class="intro-page">
                  <h2>Coworking Space</h2>
                  <p class="bleu">
                      <b>Sotelco provides startups and foreign investors who are starting their business and Consultants: </b>
                  </p>
                  <br/>
                  <p class="dark">
                  Dedicated desk in a shared office,  or a standard or a full floor office with needed flexibility to help your business adapt with uncertainty,  reduce your starting cost and achieve a quick and risk-free immersion
<br/>
<br/>
Administrative and professional services:  Accounting, tax payment and bank relation  services and coaching, Omni channels communication facilities and secretarial and company creation  services
<br/>
<br/>
High-speed internet connexion, meeting rooms, networking platform, relaxations areas through our community development platform, cyber café and catering, events’ organization, sports activities and robotics
<br/>
<br/>
Immersion in the Tunisian and Global business environment and building networking opportunities in Tunisia, EU and the Middle East and North African countries without any commitments except the payment of your subscriptions for the time you need. 
                  </p>
                  <a href="/software-development" ><b>READ MORE</b></a>
                  </div>
              </div>
              <div class="intro-page3">
                  <div class="intro-page">
                      <h2>Start-ups’ Accelerator</h2>
                      <p class="bleu"><b>Sotelco, will support your start-ups throughout the life cycle of your development process:</b></p>
                      <p class="dark">
                      Early stage from idea conceptualization till the adoption of the technology for creating your project  
<br/>
<br/>
Incubation stage till the complete development of your product and testing and getting orders from  your first clients
<br/>
<br/>
Scalability stage since the adoption of your detailed Business Model and till the scaling up of  your production and widespread commercial implementation  
                      </p>
                      <a href="/software-development" ><b>DISCOVER MORE</b></a>
                  </div>
              </div>
              <img class="img3" src="min.jpg" alt=""/>
              <div><img class="img4" src="06.jpg" alt=""/></div>
              
              <div class="intro-page4">
                  <div class="intro-page">
                      <h2 class="titre">Training and E-Learning Centre</h2>
                      <p class="bleu">
                          <b>Sotelco, provides for developing your talents   on-site and remotely training,  e-learning and blended education on :</b>
                      </p>
                      <ul>
                          <li>Robotic Process Automation “RPA” programming, IA,  Deep Machine Learning, Big Data, Cloud computing, Market Analytics, Data mining, Web programming, Business Intelligence and Digital finance and Marketing</li>
                          <br/>
                          <li>Soft skills training to cover: Leadership, team building, communication techniques, IT  office  tools, multi-culture development within target markets environment</li>
                      </ul>
                      <a href="/software-development" ><b>DISCOVER MORE</b></a>
                  </div>
              </div>
              <div class="location">
                  <h1>
                     <b> Our Location </b>
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

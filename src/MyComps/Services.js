import React from "react";
import myImg from "../MyComps/images/cc.jpg"
import { FaPhone, FaEnvelope, FaLinkedin, FaGithub,FaLocationArrow } from 'react-icons/fa';
function MyServices() {
  return (
    <section className="section service" id="service" aria-label="service">
      <div className="cntainer">
       <div className="bx1">
       <img
      src={myImg}
      alt="cc"
      style={{ height: '170px', width: '150px', borderRadius:"3px", margin:'0 AUTO',boxShadow: "-3px 1px 10px -5px rgba(4, 4, 4, -2), 8px 0 10px -7px rgba(98, 98, 96, 0.5)"}}

    />
     <h2 >DEEKSHITHA BHUPATHI</h2>
       <p >|  Aspiring Architect  <br></br>| Bachelor's of Architecture Student </p><br></br>

      
       
       <p className="c"><FaPhone />&nbsp; +91 9515190530</p>
       <p className="c"><FaEnvelope />&nbsp; naguuuuuu@gmail.com</p>
       <p className="c"><FaLinkedin />&nbsp; https:linkedin-bhupathi.com</p>
       <p className="c"><FaGithub />&nbsp; https://github-bhup.com</p>
       <p className="c" style={{ paddingBottom:"20px",borderBottom:"1px solid grey"}}><FaLocationArrow/>&nbsp; Warnagla, tlanagna</p>
       <br></br>
       <h4>SUMMARY</h4>
       <p >Dedicated Bachelor of Architecture student with a strong passion for creating innovative and sustainable designs. Possessing a keen eye for detail and a deep understanding of architectural principles, I am committed to delivering thoughtful and aesthetically pleasing solutions. Seeking opportunities to contribute to the field of architecture and make a positive impact through creative and sustainable design practices.</p>
       </div>
      

       <div className="bx2"><h4>TECHNICAL SKILLS</h4>
      
      <ul>
        <li>bb</li>

      </ul>
        </div>
       <div className="bx3">de</div>
       </div>
    

      
    </section>
  );
}

export default MyServices;

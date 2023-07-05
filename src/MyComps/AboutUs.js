import React from "react";
import myImg from "../MyComps/images/arch.png"


function MyAboutUs() {
  return (
    <section className="section about" id="about" aria-label="about">
      <div className="container">
        <div className="about-banner img-holder" style={{ "--width": "720px", "--height": "960px" }}>
        
              <h2 className="h2 section-title">About Me</h2>
          <p className="section-text">
          Welcome to my architecture portfolio! I am <b>Deekshitha Bhupathi</b>, a visionary architect with a relentless passion for creating extraordinary spaces that shape the way we live, work, and interact with the built environment.
          </p>
       
          <h3 className="h3" style={{ display: 'flex', alignItems: 'center' }}>
  <ion-icon name="checkmark-circle" aria-hidden="true" style={{ marginRight: '5px' }} />
  Design Approach
</h3>

          <p className="section-text">
              My design approach is characterized by a balance between creativity and practicality. I embrace innovative thinking and seek to push the boundaries of traditional design concepts while ensuring that the resulting spaces are functional, efficient, and sustainable.       
            <br></br>  Through a meticulous attention to detail and a focus on craftsmanship, I aim to create spaces that exude quality and timelessness.            </p>
          
            <h3 className="h3" style={{ display: 'flex', alignItems: 'center' }}>
  <ion-icon name="checkmark-circle" aria-hidden="true" style={{ marginRight: '5px' }} />
  Design Philosophy
</h3>

              <p className="section-text">
          My design philosophy is rooted in the belief that architecture should respond to its context and purpose while embodying a sense of beauty and functionality. I approach each project as a unique opportunity to create something meaningful and enduring.
        <br></br>
         I believe that architecture is a language that communicates and resonates with people on a visceral level. It should evoke emotions, tell stories, and provide a sense of place.</p>
        </div>

        <div className="about-content">
      
          

        
<br></br><br></br>
          
         <img src={myImg} alt="cccc" className="scroll-animation" style={{height:"310px",width:"460px", boxShadow:"5px 5px 20px 0px gray"}}></img>
       
      <br></br><br></br> <p><i><b>Immerse yourself in my architectural portfolio and discover the essence of my design approach. Explore a collection of captivating projects that showcase my passion for creating remarkable spaces. Let the portfolio speak for itself as you witness the fusion of creativity and functionality. Step into a world where architecture tells its own story. Experience it firsthand by delving into my portfolio.</b></i></p>

        </div>
      </div>
    </section>
  );
}

export default MyAboutUs;

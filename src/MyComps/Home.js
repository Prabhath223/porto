import React from "react";
import myImg from "../MyComps/images/ab.png"
function MyHome()
{
    return(
<section className="section hero" id="home" aria-label="hero">
<div className="container">

  <div className="hero-content">

  

    <h1 className="h2 hero-title">Design Portfolio</h1><br></br>
    <p className="hero-subtitle">DEEKSHITHA BHUPATHI</p>
    <p className="hero-text">
    Aspiring Architect | Bachelor's of Architecture Student 
    </p>


  </div>

  <figure className="hero-banner">
    <img src={myImg} width="720" height="673" alt="hero-banner" className="w-100"></img>
  </figure>

</div>
</section>

    
);
}
export default MyHome;
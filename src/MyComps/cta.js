import React from "react";
import ctaImg from "../MyComps/images/ctaImg.jpg"
function MyCta()
{

return(
<section className="section cta" aria-label="cta" style={{ backgroundImage: `url(${ctaImg})` }}>

<div class="container">

  <p class="cta-subtitle">So What is Next?</p>

  <h2 class="h2 section-title">Are You Ready? Let's get to Work!</h2>

  <a href="#" class="btn btn-secondary">Get Started</a>

</div>
</section>
);
}
export default MyCta;
import React from "react";
import img1 from "../MyComps/images/project-1.jpg"
import img2 from "../MyComps/images/project-2.jpg"
import img3 from "../MyComps/images/project-3.jpg"
import img4 from "../MyComps/images/project-4.png"
import img5 from "../MyComps/images/project-5.jpg"
import img6 from "../MyComps/images/project-6.jpg"
function MyProjects() {
  return (
    <section className="section project" id="project" aria-label="project">
      <div className="container">
        <h2 className="h2 section-title">Our Recent Projects</h2>

        <p className="section-text">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>

        <ul className="grid-list">
          <li>
            <div className="project-card">
              <figure className="card-banner img-holder" style={{ "--width": 510, "--height": 700 }}>
                <img src= {img1} width="510" height="700" loading="lazy" alt="Designing a better cinema experience" className="img-cover" />
              </figure>

              <div className="card-content">
                <p className="card-subtitle">SEO Optimization</p>
                <h3 className="h3">
                  <a href="javascript:void(0)" className="card-title">Designing a better cinema experience</a>
                </h3>
                <a href="javascript:void(0)" className="btn btn-primary">View Details</a>
              </div>
            </div>
          </li>

          <li>
            <div className="project-card">
              <figure className="card-banner img-holder" style={{ "--width": 510, "--height": 700 }}>
                <img src={img2} width="510" height="700" loading="lazy" alt="Building design process within teams" className="img-cover" />
              </figure>

              <div className="card-content">
                <p className="card-subtitle">Digital Marketing</p>
                <h3 className="h3">
                  <a href="#" className="card-title">Building design process within teams</a>
                </h3>
                <a href="#" className="btn btn-primary">View Details</a>
              </div>
            </div>
          </li>

          <li>
            <div className="project-card">
              <figure className="card-banner img-holder" style={{ "--width": 510, "--height": 700 }}>
                <img src={img3} width="510" height="700" loading="lazy" alt="How intercom brings play into their design process" className="img-cover" />
              </figure>

              <div className="card-content">
                <p className="card-subtitle">Keyword Targeting</p>
                <h3 className="h3">
                  <a href="#" className="card-title">How intercom brings play into their design process</a>
                </h3>
                <a href="#" className="btn btn-primary">View Details</a>
              </div>
            </div>
          </li>

          <li>
            <div className="project-card">
              <figure className="card-banner img-holder" style={{ "--width": 510, "--height": 700 }}>
                <img src={img4} width="510" height="700" loading="lazy" alt="Stuck with to-do list, I created a new app for" className="img-cover" />
              </figure>

              <div className="card-content">
                <p className="card-subtitle">Email Marketing</p>
                <h3 className="h3">
                  <a href="#" className="card-title">Stuck with to-do list, I created a new app for</a>
                </h3>
                <a href="#" className="btn btn-primary">View Details</a>
              </div>
            </div>
          </li>

          <li>
            <div className="project-card">
              <figure className="card-banner img-holder" style={{ "--width": 510, "--height": 700 }}>
                <img src={img5} width="510" height="700" loading="lazy" alt="Examples of different types of sprints" className="img-cover" />
              </figure>

              <div className="card-content">
                <p className="card-subtitle">Marketing & Reporting</p>
                <h3 className="h3">
                  <a href="#" className="card-title">Examples of different types of sprints</a>
                </h3>
                <a href="#" className="btn btn-primary">View Details</a>
              </div>
            </div>
          </li>

          <li>
            <div className="project-card">
              <figure className="card-banner img-holder" style={{ "--width": 510, "--height": 700 }}>
                <img src={img6} width="510" height="700" loading="lazy" alt="Redesigning the New York times app" className="img-cover" />
              </figure>

              <div className="card-content">
                <p className="card-subtitle">Development</p>
                <h3 className="h3">
                  <a href="#" className="card-title">Redesigning the New York times app</a>
                </h3>
                <a href="#" className="btn btn-primary">View Details</a>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
}

export default MyProjects;

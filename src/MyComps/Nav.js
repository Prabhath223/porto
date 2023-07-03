// import React, { useEffect, useState } from 'react';

// const NavBar = () => {
//   const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

//   useEffect(() => {
//     const toggleMobileMenu = () => {
//       setMobileMenuOpen(prevState => !prevState);
//     };

//     const closeMobileMenu = () => {
//       setMobileMenuOpen(false);
//     };

//     const navToggler = document.querySelector("[data-nav-toggler]");
//     const navbarLinks = document.querySelectorAll("[data-nav-link]");

//     navToggler.addEventListener("click", toggleMobileMenu);
//     navbarLinks.forEach(link => link.addEventListener("click", closeMobileMenu));

//     return () => {
//       navToggler.removeEventListener("click", toggleMobileMenu);
//       navbarLinks.forEach(link => link.removeEventListener("click", closeMobileMenu));
//     };
//   }, []);

//   return (
//     <header className="header" data-header>
//       <div className="container">
//         <a href="#" className="logo">Pra Marketing Agency</a>

//         <nav className={`navbar container ${isMobileMenuOpen ? 'active' : ''}`} data-navbar>
//           <ul className="navbar-list">
//             <li>
//               <a href="#home" className="navbar-link" data-nav-link>Home</a>
//             </li>
//             <li>
//               <a href="#service" className="navbar-link" data-nav-link>Services</a>
//             </li>
//             <li>
//               <a href="#project" className="navbar-link" data-nav-link>Project</a>
//             </li>
//             <li>
//               <a href="#about" className="navbar-link" data-nav-link>About Us</a>
//             </li>
//             <li>
//               <a href="#blog" className="navbar-link" data-nav-link>Blog</a>
//             </li>
//             <li>
//               <a href="#contact" className="navbar-link" data-nav-link>Contact Us</a>
//             </li>
//             <li>
//               <a href="#" className="btn btn-primary">Get Started</a>
//             </li>
//           </ul>
//         </nav>

//         <button className="nav-toggle-btn" aria-label="Toggle menu" data-nav-toggler>
//           <ion-icon
//             name={`menu-outline ${isMobileMenuOpen ? 'hidden' : ''}`}
//             className={`open ${isMobileMenuOpen ? 'hidden' : ''}`}
//           ></ion-icon>
//           <ion-icon
//             name={`close-outline ${isMobileMenuOpen ? '' : 'hidden'}`}
//             className={`close ${isMobileMenuOpen ? '' : 'hidden'}`}
//           ></ion-icon>
//         </button>
//       </div>
//     </header>
//   );
// };

// export default NavBar;




import React, { useEffect, useState } from 'react';

const NavBar = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const toggleMobileMenu = () => {
      setMobileMenuOpen(prevState => !prevState);
    };

    const closeMobileMenu = () => {
      setMobileMenuOpen(false);
    };

    const navToggler = document.querySelector("[data-nav-toggler]");
    const navbarLinks = document.querySelectorAll("[data-nav-link]");

    navToggler.addEventListener("click", toggleMobileMenu);
    navbarLinks.forEach(link => link.addEventListener("click", closeMobileMenu));

    return () => {
      navToggler.removeEventListener("click", toggleMobileMenu);
      navbarLinks.forEach(link => link.removeEventListener("click", closeMobileMenu));
    };
  }, []);

  return (
    <header className="header" data-header>
      <div className="container">
    

        <nav className={`navbar container ${isMobileMenuOpen ? 'active' : ''}`} data-navbar>
          <ul className="navbar-list">
            <li>
              <a href="#home" className="navbar-link" data-nav-link>Home</a>
            </li>
            <li>
              <a href="#about" className="navbar-link" data-nav-link>About</a>
            </li>
            <li>
              <a href="#service" className="navbar-link" data-nav-link>Resume</a>
            </li>
            <li>
              <a href="#project" className="navbar-link" data-nav-link>Content</a>
            </li>
            <li>
              <a href="#blog" className="navbar-link" data-nav-link>Highlights</a>
            </li>
            <li>
              <a href="#contact" className="navbar-link" data-nav-link>Contact</a>
            </li>
          
          </ul>
        </nav>

        <button className="nav-toggle-btn" aria-label="Toggle menu" data-nav-toggler>
          {!isMobileMenuOpen ? (
            <ion-icon name="menu-outline" className="open"></ion-icon>
          ) : (
            <ion-icon name="close-outline" className="close"></ion-icon>
          )}
        </button>
      </div>
    </header>
  );
};

export default NavBar;

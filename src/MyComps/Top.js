// import React from "react";

// function MyTop()
// {
//     return(
// <a href="#top" aria-label="back to top" data-back-top-btn className="back-top-btn">
//     <ion-icon name="chevron-up" aria-hidden="true"></ion-icon>
//   </a>


//     );
// }

// export default MyTop;
import React, { useState, useEffect } from "react";
// import "./MyTop.css"; // Import the CSS file with the necessary styles

function MyTop() {
  const [isTopVisible, setTopVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setTopVisible(true);
      } else {
        setTopVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      {isTopVisible && (
        <a href="#top" aria-label="back to top" data-back-top-btn className="back-top-btn" onClick={scrollToTop}>
          <ion-icon name="chevron-up" aria-hidden="true"></ion-icon>
        </a>
      )}
    </>
  );
}

export default MyTop;

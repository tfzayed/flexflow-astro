(function () {
  "use strict";

  // ########################## HEADER SCROLL LISTENER ##########################
  function addFixedStyleOnScroll(
    elementSelector,
    responsiveStickyHeader,
    minWidth,
  ) {
    const element = document.querySelector(elementSelector);

    if (!element) {
      return;
    }

    window.addEventListener("scroll", () => {
      const scrollTop = window.scrollY || document.documentElement.scrollTop;
      const isLargeScreen = window.innerWidth > minWidth;

      const style = isLargeScreen
        ? scrollTop > 20
          ? responsiveStickyHeader.large.sticky
          : responsiveStickyHeader.large.fixed
        : scrollTop > 20
          ? responsiveStickyHeader.small.sticky
          : responsiveStickyHeader.small.fixed;

      Object.assign(element.style, style);
    });
  }

  const responsiveStickyHeader = {
    large: {
      sticky: {
        backgroundColor: "white",
        top: "0",
        boxShadow: "rgba(149, 157, 165, 0.15) 0px 8px 24px",
      },
      fixed: {
        backgroundColor: "transparent",
        top: "25px",
        boxShadow: "none",
      },
    },
    small: {
      sticky: {
        backgroundColor: "white",
        top: "0",
        boxShadow: "rgba(149, 157, 165, 0.15) 0px 8px 24px",
      },
      fixed: {
        backgroundColor: "transparent",
        top: "10px",
        boxShadow: "none",
      },
    },
  };

  addFixedStyleOnScroll(".header", responsiveStickyHeader, 1535);
})();

(function () {
  "use strict";

  // ########################## Accordion ##########################
  const accordion = document.querySelectorAll("[data-accordion]");
  accordion.forEach((header) => {
    header.addEventListener("click", () => {
      const accordionItem = header.parentElement;
      accordionItem.classList.toggle("active");
    });
  });

  // ########################## YOUTUBE CUSTOM THUMBNAIL ##########################
  const customBtn = document.getElementById("yt-custom-thumb-btn");
  const ytIframe = document.getElementById("yt-iframe");

  if (customBtn && ytIframe) {
    customBtn.addEventListener("click", () => {
      customBtn.style.display = "none";
      ytIframe.style.display = "block";
    });
  }
})();

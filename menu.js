document.addEventListener("DOMContentLoaded", function() {
  const sectionHeaders = document.querySelectorAll(".section-header");

  sectionHeaders.forEach(header => {
    header.addEventListener("click", function() {
      const sectionContent = this.nextElementSibling;
      this.classList.toggle("active");
      if (sectionContent.style.display === "block") {
        sectionContent.style.display = "none";
      } else {
        sectionContent.style.display = "block";
      }
    });
  });
});

 
  const previewImage = document.getElementById('previewImage');
  const hoverItems = document.querySelectorAll('.hover-preview');
 
  hoverItems.forEach(item => {
    item.addEventListener('mouseover', () => {
      const imgSrc = item.getAttribute('data-img');
      previewImage.setAttribute('src', imgSrc);
    });
  });
   AOS.init();

  

   const toggle = document.getElementById('menu-toggle');
    const menu = document.getElementById('menu');
    toggle.addEventListener('click', () => {
      menu.classList.toggle('active');
    });


    

  const readMore = document.getElementById("readMore");
  const readLess = document.getElementById("readLess");
  const hiddenContent = document.getElementById("hiddenContent");

  readMore.addEventListener("click", () => {
    hiddenContent.style.display = "block";
    readMore.style.display = "none";
  });

  readLess.addEventListener("click", () => {
    hiddenContent.style.display = "none";
    readMore.style.display = "inline";
    window.scrollTo({
      top: document.querySelector(".third-section").offsetTop,
      behavior: "smooth"
    });
  });

   document.addEventListener("DOMContentLoaded", function () {
    const buttons = document.querySelectorAll(".accordion-button");

    buttons.forEach((button) => {
      button.addEventListener("click", function () {
        const id = this.getAttribute("data-id");
        const targetPanel = document.getElementById("collapse" + id);
        const isOpen = !this.classList.contains("collapsed");

        // Close all
        document.querySelectorAll(".accordion-collapse").forEach(p => p.style.display = "none");
        document.querySelectorAll(".accordion-button").forEach(b => b.classList.add("collapsed"));

        // Toggle selected
        if (!isOpen) {
          this.classList.remove("collapsed");
          targetPanel.style.display = "block";
        }
      });
    });
  });
 
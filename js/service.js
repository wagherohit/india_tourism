const destinationss = [
    { image: "images/del.jpg", packages: "25 Tour Packages", name: "Weekend Trips From Delhi" },
    { image: "images/mum.jpg", packages: "20 Tour Packages", name: "Weekend Trips From Mumbai" },
    { image: "image/ben.jpg", packages: "25 Tour Packages", name: "Weekend Trips From Bangalore" },
    { image: "image/che.jpg", packages: "25 Tour Packages", name: "Weekend Trips From Chennai" },
    { image: "image/hy.jpg", packages: "15 Tour Packages", name: "Weekend Trips From Hyderabad" },
    { image: "image/pun.jpg", packages: "10 Tour Packages", name: "Weekend Trips From Pune" },
    { image: "image/kol.jpg", packages: "18 Tour Packages", name: "Weekend Trips From Kolkata" },
    { image: "image/ahe.jpg", packages: "12 Tour Packages", name: "Weekend Trips From Ahmedabad" }
  ];
  
  const carouselRow = document.getElementById("carouselRow");
  let currentSlide = 0;
  const itemsPerSlide = 4;
  
  function renderCards() {
    destinationss.forEach(dest => {
      const col = document.createElement("div");
      col.className = "col text-center";
      col.innerHTML = `
        <div class="card-item">
          <img src="${dest.image}" class="img-fluid w-100" alt="${dest.name}">
          <p class="mt-2 text-muted">${dest.packages}</p>
          <h5 class="fw-semibold">${dest.name}</h5>
        </div>
      `;
      carouselRow.appendChild(col);
    });
  }
  
  function updateCarousel() {
    const slideWidth = carouselRow.querySelector(".col").offsetWidth + 16; // Add gap (g-4 = 1.5rem = 16px)
    const offset = slideWidth * currentSlide;
    carouselRow.style.transform = `translateX(-${offset}px)`;
  }
  
  // Button functionality
  document.getElementById("nextBtn").addEventListener("click", () => {
    const maxSlide = Math.ceil(destinationss.length / itemsPerSlide) - 1;
    if (currentSlide < maxSlide) {
      currentSlide++;
      updateCarousel();
    }
  });
  
  document.getElementById("prevBtn").addEventListener("click", () => {
    if (currentSlide > 0) {
      currentSlide--;
      updateCarousel();
    }
  });
  
  // Init
  renderCards();
  updateCarousel();


  const footerTexts = document.querySelectorAll('.footer-navbar p');
  let lastScrollTop = 0;

  window.addEventListener("wheel", function (event) {
    const scrollDown = event.deltaY > 0;

    if (scrollDown) {
      // Scrolling down: hide text
      footerTexts.forEach(p => p.style.display = "none");
    } else {
      // Scrolling up: show text
      footerTexts.forEach(p => p.style.display = "block");
    }
  });
  
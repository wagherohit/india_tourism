const exploreBtn = document.getElementById("exploreBtn");
const infoWindow = document.getElementById("infoWindow");
const closeInfo = document.getElementById("closeInfo");

// exploreBtn.addEventListener("click", () => {
//     infoWindow.style.display = "block";
// });

closeInfo.addEventListener("click", () => {
    infoWindow.style.display = "none";
});

// Optional: Close on outside click
window.addEventListener("click", (e) => {
    if (e.target === infoWindow) {
        infoWindow.style.display = "none";
    }
});

const exploreData = {
    birds: {
      title: "🐦 Birds of South India",
      intro: "South India hosts 500+ bird species across forests, wetlands, and hills.",
      slides: [
        { img: "./assets/images/Img/peaccock.jpg", name: "Indian Peafowl", info: "Vivid tail fan; often seen near forest edges." },
        { img: "./assets/images/Img/bird2.jpg", name: "White-throated Kingfisher", info: "Bright blue wings; common near water & fields." },
        { img: "./assets/images/Img/bird3.jpg", name: "Malabar Whistling Thrush", info: "‘Whistling schoolboy’ of the Western Ghats." }
      ]
    },
    temples: {
      title: "🛕 Temples of South India",
      intro: "Ancient Dravidian marvels known for gopurams, sculptures, and living traditions.",
      slides: [
        { img: "./assets/images/Img/lotus-mahal-209924_1280.jpg", name: "Hampi (Vijayanagara)", info: "UNESCO ruins with ornate temple structures." },
        { img: "./assets/images/Img/temple1.jpeg", name: "Meenakshi Amman Temple", info: "Madurai icon; towering painted gopurams." },
        { img: "./assets/images/Img/temple2.jpg", name: "Brihadeeswarar Temple", info: "Chola granite masterpiece at Thanjavur." }
      ]
    },
    cuisine: {
      title: "🍛 Amazing Cuisine of South India",
      intro: "Spiced, fermented, coconut-rich dishes from Tamil Nadu, Kerala, Karnataka & more.",
      slides: [
        { img: "./assets/images/Img/meal-52075_1280 (1).jpg", name: "Traditional Thali", info: "Rice, sambar, rasam, curd & regional sides." },
        { img: "./assets/images/Img/food1.jpg", name: "Masala Dosa", info: "Crisp fermented crepe with spiced potato masala." },
        { img: "./assets/images/Img/food2.jpg", name: "Idli & Chutney", info: "Steamed rice cakes; soft, light & gluten-free." }
      ]
    },
    beaches: {
      title: "🏖️ Beaches of Kerala",
      intro: "Arabian Sea coastlines with palms, backwaters & sunset views.",
      slides: [
        { img: "./assets/images/Img/beach-6292382_1280.jpg", name: "Kovalam Beach", info: "Iconic lighthouse & calm swimming areas." },
        { img: "./assets/images/Img/beach1.jpg", name: "Varkala Cliff", info: "Red cliffs over turquoise water; laid-back vibe." },
        { img: "./assets/images/Img/beach2.jpg", name: "Marari Beach", info: "Quiet sands; local fishing village charm." }
      ]
    },
    crafts: {
      title: "🎨 Handicrafts & Art",
      intro: "Silks, paintings, textiles & woodcraft reflecting centuries of artistry.",
      slides: [
        { img: "./assets/images/Img/blanket-224367_1280.jpg", name: "Kalamkari Textiles", info: "Hand-painted natural dye cloth art." },
        { img: "./assets/images/Img/craft1.jpeg", name: "Mysore Silk", info: "Rich zari borders; ceremonial saris." },
        { img: "./assets/images/Img/craft2.jpeg", name: "Tanjore Painting", info: "Gold foil, glass inlay devotional art." }
      ]
    },
    experiences: {
      title: "🚣‍♂️ Unique Experiences",
      intro: "Culture, wellness & nature — only in South India.",
      slides: [
        { img: "./assets/images/Img/family-591579_1280.jpg", name: "Kerala Backwater Cruise", info: "Houseboats glide past villages & paddies." },
        { img: "./assets/images/Img/k1.jpg", name: "Kathakali Performance", info: "Classical dance-drama with vivid makeup." },
        { img: "./assets/images/Img/k2.jpeg", name: "Ayurvedic Retreat", info: "Holistic therapies in lush surroundings." }
      ]
    }
  };

  // ----- UTIL: build carousel inner HTML from slide array -----
  function buildCarouselSlides(slides) {
    return slides.map((s, i) => `
      <div class="carousel-item ${i === 0 ? 'active' : ''} text-center">
        <img src="${s.img}" class="d-block w-100" alt="${s.name}">
        <div class="mt-2">
          <h6>${s.name}</h6>
          <p class="small mb-0">${s.info}</p>
        </div>
      </div>
    `).join('');
  }

  // ----- OPEN POPUP -----
  function openInfoWindow(category) {
    const data = exploreData[category];
    if (!data) return;

    // Remove any existing window
    const existing = document.getElementById("infoWindow");
    if (existing) existing.remove();

    // Create outer
    const infoWindow = document.createElement("div");
    infoWindow.className = "info-window";
    infoWindow.id = "infoWindow";

    // Build inner HTML
    infoWindow.innerHTML = `
      <div class="info-content position-relative">
        <span id="closeInfo" class="close-btn" aria-label="Close">&times;</span>
        <h4 class="text-center mb-2">${data.title}</h4>
        <p class="mb-3">${data.intro}</p>
        <div id="carousel-${category}" class="carousel slide" data-bs-ride="carousel">
          <div class="carousel-inner">
            ${buildCarouselSlides(data.slides)}
          </div>
          <button class="carousel-control-prev" type="button" data-bs-target="#carousel-${category}" data-bs-slide="prev">
            <span class="carousel-control-prev-icon bg-dark rounded-circle" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
          </button>
          <button class="carousel-control-next" type="button" data-bs-target="#carousel-${category}" data-bs-slide="next">
            <span class="carousel-control-next-icon bg-dark rounded-circle" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
          </button>
        </div>
      </div>
    `;

    document.body.appendChild(infoWindow);

    // Close handlers
    document.getElementById("closeInfo").addEventListener("click", closeInfoWindow);
    document.addEventListener("keydown", escCloseOnce);
    setTimeout(() => {
      document.addEventListener("click", backdropCloseOnce);
    }, 0); // allow event to bubble after click
  }

  function closeInfoWindow() {
    const el = document.getElementById("infoWindow");
    if (el) el.remove();
    document.removeEventListener("keydown", escCloseOnce);
    document.removeEventListener("click", backdropCloseOnce);
  }

  function escCloseOnce(e) {
    if (e.key === "Escape") closeInfoWindow();
  }

  function backdropCloseOnce(e) {
    const win = document.getElementById("infoWindow");
    if (!win) return;
    // Close if click is outside content box (by comparing target)
    if (e.target === win) closeInfoWindow();
  }

  // ----- ATTACH LISTENERS TO ALL EXPLORE BUTTONS -----
  document.querySelectorAll(".explore-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      const cat = btn.getAttribute("data-explore");
      openInfoWindow(cat);
    });
  });
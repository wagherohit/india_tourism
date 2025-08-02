AOS.init();

window.addEventListener("load", () => {
  const preloader = document.getElementById("preloader");
  const content = document.querySelector(".content");

  // Add fade-out class
  preloader.classList.add("fade-out");

  // Wait for animation to finish, then remove
  setTimeout(() => {
    preloader.style.display = "none";
    content.style.display = "block";
  }, 600);
});

const previewImage = document.getElementById('previewImage');
  const hoverItems = document.querySelectorAll('.hover-preview');

  hoverItems.forEach(item => {
    item.addEventListener('mouseover', () => {
      const imgSrc = item.getAttribute('data-img');
      previewImage.setAttribute('src', imgSrc);
    });
  });

const images = [
    "https://images.unsplash.com/photo-1710609942195-b9dab8f48fc6?q=80&w=327&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
    "https://images.unsplash.com/photo-1528909514045-2fa4ac7a08ba?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80"
];

let currentIndex = 0;

function changeImage() {
    const imageElement = document.getElementById("image");
    setInterval(() => {
        currentIndex = (currentIndex + 1) % images.length;
        imageElement.src = images[currentIndex];
    }, 3000);
}

const previewImagePackages = document.getElementById('previewImagePackages');
const packageItems = document.querySelectorAll('.hover-preview2');

packageItems.forEach(item => {
  item.addEventListener('mouseover', () => {
    const newImg = item.getAttribute('data-img');
    previewImagePackages.setAttribute('src', newImg);
  });
});

// Start image slideshow on page load
window.onload = changeImage;

const destinationsByRegion = {
    north: [
      {
        name: "Uttarakhand",
        packages: "40+ PACKAGES",
        image: "https://www.tourmyindia.com/imagess/uttarakhand01-package.webp"
      },
      {
        name: "Rajasthan",
        packages: "30+ PACKAGES",
        image: "https://www.tourmyindia.com/imagess/rajasthan-package.webp"
      },
      {
        name: "Himachal",
        packages: "60+ PACKAGES",
        image: "https://www.tourmyindia.com/imagess/himachal-package.webp"
      },
      {
        name: "Jammu & Kashmir",
        packages: "30+ PACKAGES",
        image: "https://www.tourmyindia.com/imagess/j&k-package.webp"
      },
      {
        name: "Uttar Pradesh",
        packages: "20+ PACKAGES",
        image: "https://www.tourmyindia.com/imagess/up-package.webp"
      },
      {
        name: "Delhi",
        packages: "15+ PACKAGES",
        image: "https://www.tourmyindia.com/imagess/delhi-package.webp"
      }
    ],
    south: [
      {
        name: "Kerala",
        packages: "50+ PACKAGES",
        image: "images/ker.jpg"
      },
      {
        name: "Tamil Nadu",
        packages: "25+ PACKAGES",
        image: "images/ta.jpg"
      },
      {
        name: "Karnataka",
        packages: "30+ PACKAGES",
        image: "images/karna.jpg"
      },
      {
        name: "Andhra Pradesh",
        packages: "20+ PACKAGES",
        image: "images/andra.jpg"
      }
    ],
    east: [
      {
        name : "West Bengal",
        packages: "35+ PACKAGES",
        image: "images/web.jpg"
      },

      {
        name: "Odisha",
        packages: "30+ PACKAGES",
        image: "images/odi.jpg"
      },
      {
        name: "Assam",
        packages: "20+ PACKAGES",
        image: "images/ass.jpg"
      },
      {
        name: "Sikkim",
        packages: "15+ PACKAGES",
        image: "images/ski.jpg"
      },
      {
        name: "Tripura",
        packages: "10+ PACKAGES",
        image: "images/tri.jpg"
      },
      {
        name: "Meghalaya",
        packages: "12+ PACKAGES",
        image: "images/megha.jpg"
      }
    ],
    west: [
      {
        name: "Gujarat",
        packages: "40+ PACKAGES",
        image: "images/guj.jpg"
      },
      {
        name: "Maharashtra",
        packages: "50+ PACKAGES",
        image: "images/maha.jpg"
      },
      {
        name: "Goa",
        packages: "30+ PACKAGES",
        image: "images/goa.jpg"
      },
      {
        name: "Madhya Pradesh",
        packages: "20+ PACKAGES",
        image: "images/mp.jpg"
      },
      {
        name: "Chhattisgarh",
        packages: "15+ PACKAGES",
        image: "images/ctsg.jpg"
      },
      {
        name: "Dadra and Nagar Haveli",
        packages: "5+ PACKAGES",
        image: "images/dandra.jpg"
      }
    ],
    central: [
      {
        name: "Punjab",
        packages: "30+ PACKAGES",
        image: "images/pun.jpg"
      },
      {
        name: "Haryana",
        packages: "20+ PACKAGES",
        image: "images/haryana.jpg"
      },
      {
        name: "Chandigarh",
        packages: "10+ PACKAGES",
        image: "images/chandi.jpg"
      },
      {
        name: "Uttar Pradesh",
        packages: "25+ PACKAGES",
        image: "images/up.jpg"
      },
      {
        name: "Bihar",
        packages: "15+ PACKAGES",
        image: "images/bihar.jpg"
      },
      {
        name: "Jharkhand",
        packages: "10+ PACKAGES",
        image: "images/jar.jpg"
      }
    ]
  };

  const container = document.getElementById("destinationGrid");
  const tabs = document.querySelectorAll('[data-region]');

  function renderDestinations(region) {
    const destinations = destinationsByRegion[region] || [];
    container.innerHTML = '';

    destinations.forEach((dest, index) => {
      const div = document.createElement("div");
      div.className = index === 0 ? "big-card" : "small-card";
      div.innerHTML = `
        <div class="destination-card shadow-sm">
          <img src="${dest.image}" alt="${dest.name}">
          <div class="destination-overlay">
            ${dest.name}
            <small>${dest.packages}</small>
          </div>
        </div>
      `;
      container.appendChild(div);
    });

    if (destinations.length === 0) {
      container.innerHTML = '<p class="text-center text-muted w-100">Destinations Coming Soon...</p>';
    }
  }

  // Initial load
  renderDestinations('north');

  // Tab click listener
  tabs.forEach(tab => {
    tab.addEventListener('click', function () {
      document.querySelectorAll('.nav-link').forEach(t => t.classList.remove('active'));
      this.classList.add('active');
      const region = this.getAttribute('data-region');
      renderDestinations(region);
    });
  });

  const destinations = [
    { name: "Uttarakhand", packages: "50+ Packages", image: "images/up.jpg" },
    { name: "Kerala", packages: "40+ Packages", image: "images/ker.jpg" },
    { name: "Sikkim", packages: "40+ Packages", image: "images/ski.jpg" },
    { name: "Bhutan", packages: "20+ Packages", image: "images/bhu.jpg" },
    { name: "Thailand", packages: "10+ Packages", image: "images/thai.jpg" },
    { name: "Rajasthan", packages: "60+ Packages", image: "images/raj.jpg" },
    { name: "Goa", packages: "30+ Packages", image: "images/goa.jpg" },
    { name: "Himachal", packages: "55+ Packages", image: "images/him.jpg" },
    { name: "Delhi", packages: "25+ Packages", image: "images/del.jpg" },
    { name: "Mumbai", packages: "35+ Packages", image: "images/mum.jpg" },
    { name: "Andaman", packages: "18+ Packages", image: "images/anda.jpg" },
    { name: "Karnataka", packages: "22+ Packages", image: "images/karna.jpg" },
    { name: "Assam", packages: "12+ Packages", image: "images/ass.jpg" },
    { name: "Punjab", packages: "16+ Packages", image: "images/pun.jpg" },
    { name: "Ladakh", packages: "14+ Packages", image: "images/lad.jpg" }
  ];

  const container2 = document.getElementById("carouselContent");
  const cardsPerSlide = 5;
  const totalSlides = Math.ceil(destinations.length / cardsPerSlide);

  for (let i = 0; i < totalSlides; i++) {
    const slide = document.createElement("div");
    slide.className = `carousel-item ${i === 0 ? "active" : ""}`;

    const row = document.createElement("div");
    row.className = "row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-5 g-4 justify-content-center";

    for (let j = i * cardsPerSlide; j < Math.min((i + 1) * cardsPerSlide, destinations.length); j++) {
      const dest = destinations[j];
      const col = document.createElement("div");
      col.className = "col text-center";

      col.innerHTML = `
        <img src="${dest.image}" alt="${dest.name}" class="destination-img">
        <p class="mt-2 fw-bold">${dest.name}</p>
        <small class="text-muted">${dest.packages}</small>
      `;

      row.appendChild(col);
    }

    slide.appendChild(row);
    container2.appendChild(slide);
  }

  const services = [
    {
      icon: "fas fa-map-marker-alt",
      title: "Destination Weddings",
      subheading: "INDIA WEDDING PLANNER",
      description: "Design Your Fairy-Tale Wedding In Dreamlike Locations.",
     image: "images/pun.jpg"
    },
    {
      icon: "fas fa-heartbeat",
      title: "Medical Tourism",
      subheading: "HEALTH & CARE",
      description: "Access world-class treatment and wellness centers across India.",
      image: "images/web.jpg"
    },
    {
      icon: "fas fa-mortar-pestle",
      title: "Ayurveda Tourism",
      subheading: "HOLISTIC HEALING",
      description: "Rejuvenate with ancient Indian therapies and spiritual wellness.",
      image: "images/up.jpg"
    }
  ];
  
  let currentIndex2 = 0;

const heading = document.getElementById("heading");
const subheading = document.getElementById("subheading");
const description = document.getElementById("description");
const heroSection = document.getElementById("heroSection");
const carouselBox = document.getElementById("carouselBox");

function updateContent(index) {
  const item = services[index];
  heading.textContent = item.title;
  subheading.textContent = item.subheading;
  description.textContent = item.description;
  heroSection.style.backgroundImage = item.image;

  heroSection.style.backgroundImage = `url(${item.image})`;

  // Update service cards (single visible)
  carouselBox.innerHTML = `
    <div class="service-card active text-white d-flex flex-column align-items-center justify-content-center rounded shadow"
         style="min-width: 250px; height: 300px; background: url(${item.image}) center center/cover no-repeat;">
      <i class="${item.icon} fa-2x mb-2"></i>
      <h6 class="fw-semibold">${item.title}</h6>
    </div>
  `;
}

document.getElementById("nextBtn").addEventListener("click", () => {
  currentIndex2 = (currentIndex2 + 1) % services.length;
  updateContent(currentIndex2);
});

document.getElementById("prevBtn").addEventListener("click", () => {
  currentIndex2 = (currentIndex2 - 1 + services.length) % services.length;
  updateContent(currentIndex2);
});

// Initial load
updateContent(currentIndex2);

const imageSources = [
    "images/1.jpg",
        "images/2.jpg",
    "images/3.jpg",
    "images/4.jpg",

  ];

  let currentImgIndex = 0;
  const imageElement = document.getElementById("aboutImage");

  setInterval(() => {
    imageElement.classList.add("fade-out");

    setTimeout(() => {
        currentImgIndex = (currentImgIndex + 1) % imageSources.length;
      imageElement.src = imageSources[currentImgIndex];
      imageElement.classList.remove("fade-out");
    }, 500); // matches the CSS transition duration
  }, 3000);

  const data = {
    regions: [
      {
        title: "North India",
        desc1: "North India is known for majestic mountains and heritage sites.",
        desc2: "Famous places include Delhi, Agra, Jaipur, and Kashmir.",
        image: "images/del.jpg"
      },
      {
        title: "South India",
        desc1: "South India offers temples, beaches, and spice plantations.",
        desc2: "Explore Kerala, Tamil Nadu, Karnataka, and Andhra Pradesh.",
        image: "images/andra.jpg"
      },
      {
        title: "East India",
        desc1: "East India is known for tea, spices, and historical heritage.",
        desc2: "Visit Goa, Orissa, Tamil Nadu, and Karnataka.",
        image: "images/ker.jpg"
      },
        {
            title: "West India",
            desc1: "West India is famous for deserts, beaches, and vibrant culture.",
            desc2: "Explore Rajasthan, Gujarat, Maharashtra, and Goa.",
            image: "images/goa.jpg"
        },
        {
            title: "Central India",
            desc1: "Central India is known for wildlife, temples, and cultural diversity.",
            desc2: "Visit Madhya Pradesh, Chhattisgarh, and Jharkhand.",
            image: "images/mp.jpg"
        },
    ],
    things: [
      {
        title: "Trekking",
        desc1: "Experience thrilling treks in the Himalayas and Western Ghats.",
        desc2: "Top spots: Manali, Sikkim, Coorg.",
        image: "image/man.jpg"
      },
      {
        title: "Wildlife Safari",
        desc1: "India is home to tigers, elephants, and rhinos.",
        desc2: "Visit Ranthambore, Jim Corbett, and Kaziranga.",
        image: "image/rant.jpg"
      },
        {
            title: "Cultural Tours",
            desc1: "Explore India's rich heritage through temples, forts, and palaces.",
            desc2: "Must-visit: Jaipur, Varanasi, Khajuraho.",
            image: "image/Varansai.jpg"
        },
        {
            title: "Adventure Sports",
            desc1: "Try paragliding, river rafting, and scuba diving.",
            desc2: "Best spots: Rishikesh, Goa, Andaman Islands.",
            image: "image/rishi.jpg"
        }
    ],
    places: [
      {
        title: "Taj Mahal",
        desc1: "The Taj Mahal is a symbol of love and architectural beauty.",
        desc2: "Located in Agra, it’s a UNESCO World Heritage Site.",
        image: "Taj.jpg"
      },
      {
        title: "Kerala Backwaters",
        desc1: "Cruise on houseboats through the tranquil backwaters.",
        desc2: "Enjoy peace, nature, and culture.",
        image: "image/kera.jpg"
      },
        {
            title: "Goa Beaches",
            desc1: "Goa is famous for its stunning beaches and vibrant nightlife.",
            desc2: "Relax, party, and enjoy water sports.",
            image: "image/goa.jpg"
        },
        {
            title: "Rajasthan Forts",
            desc1: "Explore majestic forts and palaces in Rajasthan.",
            desc2: "Must-visit: Jaipur, Udaipur, Jodhpur.",
            image: "image/Udaipur.jpg"
        }
    ],
    arts: [
      {
        title: "Indian Classical Dance",
        desc1: "Experience the grace of Bharatanatyam, Kathak, and Odissi.",
        desc2: "Each dance form tells a unique story through movements.",
        image: "image/barat.jpg"
      },
      {
        title: "Traditional Handicrafts",
        desc1: "Discover intricate crafts like pottery, weaving, and jewelry.",
        desc2: "Support local artisans and bring home unique souvenirs.",
        image: "image/jewelry.jpg"
      },
        {
            title: "Sangeet",
            desc1: "Sangeet is a form of classical music from India.",
            desc2: "Listen to the melodies of classical composers.",
            image: "image/Sangeet.jpg"
        },
        {
            title: "Indian Painting",
            desc1: "Explore the rich tradition of Indian painting styles.",
            desc2: "From Madhubani to Warli, each style has a unique story.",
            image: "image/painting.jpg"
        }
    ],
    fairs: [
      {
        title: "Pushkar Camel Fair",
        desc1: "A vibrant fair in Rajasthan with camel trading, music, and dance.",
        desc2: "Experience the rich culture and traditions of Rajasthan.",
        image: "image/pushkar.jpg"
      },
      {
        title: "Durga Puja",
        desc1: "A grand festival in West Bengal celebrating the goddess Durga.",
        desc2: "Witness elaborate decorations, rituals, and cultural performances.",
        image: "image/durga.jpg"
      },
        {
            title: "Navratri",
            desc1: "A nine-night festival celebrating the goddess Durga.",
            desc2: "Enjoy Garba dance, music, and traditional food.",
            image: "image/Navratri.jpg"
        },
        {
            title: "Kumbh Mela",
            desc1: "The largest religious gathering in the world.",
            desc2: "Experience spirituality, rituals, and cultural diversity.",
            image: "image/kumbh.jpg"
        }
    ],
    festivals: [
      {
        title: "Diwali",
        desc1: "The Diwali festival is a colorful celebration in India.",
        desc2: "Celebrate with lights, music, and cultural performances.",
        image: "https://source.unsplash.com/400x300/?diwali"
      },
        {
            title: "Holi",
            desc1: "Holi is a vibrant festival of colors celebrated across India.",
            desc2: "Join in the fun with music, dance, and traditional sweets.",
            image: "https://source.unsplash.com/400x300/?holi"
        },
        {
            title: "Pongal",
            desc1: "Pongal is a harvest festival celebrated in Tamil Nadu.",
            desc2: "Experience traditional rituals, music, and dance.",
            image: "https://source.unsplash.com/400x300/?pongal"
        },
        {
            title: "Onam",
            desc1: "Onam is a harvest festival celebrated in Kerala.",
            desc2: "Enjoy traditional feasts, boat races, and cultural performances.",
            image: "https://source.unsplash.com/400x300/?onam"
        }
    ],
    museum: [
      {
        title: "National Museum, Delhi",
        desc1: "Explore India's rich history and culture at the National Museum.",
        desc2: "Home to artifacts from ancient civilizations to modern art.",
        image: "image/"
      },
      {
        title: "Chhatrapati Shivaji Maharaj Vastu Sangrahalaya, Mumbai",
        desc1: "A premier museum showcasing Indian heritage and art.",
        desc2: "Features collections of sculptures, paintings, and decorative arts.",
        image: "https://source.unsplash.com/400x300/?museum,mumbai"
      },
        {
            title: "Indian Museum, Kolkata",
            desc1: "The oldest museum in India with a vast collection of artifacts.",
            desc2: "Explore natural history, archaeology, and art from across the country.",
            image: "https://source.unsplash.com/400x300/?museum,kolkata"
        },
        {
            title: "Salar Jung Museum, Hyderabad",
            desc1: "One of the largest museums in India with a diverse collection.",
            desc2: "Features art, textiles, and artifacts from around the world.",
            image: "https://source.unsplash.com/400x300/?museum,hyderabad"
        }
    ]   
  };
  
  let currentCategory = "regions";
  
  // Load region list and default content
  function renderList(category) {
    const regionList = document.getElementById("regionList");
    regionList.innerHTML = "";
  
    data[category].forEach((item, index) => {
      const div = document.createElement("div");
      div.className = "region-item";
      div.dataset.index = index;
      div.innerHTML = `<span>${String(index + 1).padStart(2, "0")}</span> <h6>${item.title}</h6>`;
      if (index === 0) div.classList.add("active");
      regionList.appendChild(div);
    });
  
    // Load first item data initially
    loadContent(category, 0);
  }
  
  function loadContent(category, index) {
    const item = data[category][index];
    document.getElementById("description1").textContent = item.desc1;
    document.getElementById("description2").textContent = item.desc2;
  
    const img = document.getElementById("regionImage");
    img.style.opacity = 0;
    setTimeout(() => {
      img.src = item.image;
      img.onload = () => img.style.opacity = 1;
    }, 200);
  
    // Highlight selected
    document.querySelectorAll(".region-item").forEach(el => el.classList.remove("active"));
    const regionItems = document.querySelectorAll(".region-item");
    if (regionItems[index]) regionItems[index].classList.add("active");
  }
  
  // Event: Region Click
  document.getElementById("regionList").addEventListener("click", function (e) {
    const item = e.target.closest(".region-item");
    if (!item) return;
    const index = +item.dataset.index;
    loadContent(currentCategory, index);
  });
  
  // Event: Filter Button Click
  document.querySelectorAll(".filter-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      document.querySelectorAll(".filter-btn").forEach(b => {
        b.classList.remove("btn-primary");
        b.classList.add("btn-outline-secondary");
      });
      btn.classList.add("btn-primary");
      btn.classList.remove("btn-outline-secondary");
  
      currentCategory = btn.dataset.filter;
      renderList(currentCategory);
    });
  });
  
  // Init
  renderList("regions");

  const tourData = {
    trekking: {
      heading: "Trekking in Ladakh",
      items: [
        {
          img: "https://source.unsplash.com/400x300/?ladakh,trek",
          duration: "10 Nights - 11 Days",
          title: "Markha Valley Trek"
        },
        {
          img: "https://source.unsplash.com/400x300/?snow,leopard",
          duration: "12 Nights - 13 Days",
          title: "Snow Leopard Trek"
        },
        {
          img: "https://source.unsplash.com/400x300/?frozen,river",
          duration: "12 Nights - 13 Days",
          title: "Frozen River Trek"
        },
        {
          img: "https://source.unsplash.com/400x300/?mountain,landscape",
          duration: "24 Nights - 25 Days",
          title: "Darcha Lamayuru Trek"
        },
        {
          img: "https://source.unsplash.com/400x300/?valley,trek",
          duration: "6 Nights - 7 Days",
          title: "Sham Valley Trek"
        }
      ]
    },
    biking: {
      heading: "Mountain Biking Tours",
      items: [
        {
          img: "https://source.unsplash.com/400x300/?mountain,bike",
          duration: "5 Nights - 6 Days",
          title: "Himalayan Biking Expedition"
        },
        {
          img: "https://source.unsplash.com/400x300/?cycling,india",
          duration: "4 Nights - 5 Days",
          title: "Leh to Manali Cycle Tour"
        }
      ]
    },
    jeep: {
      heading: "Jeep Safari in India",
      items: [
        {
          img: "https://source.unsplash.com/400x300/?jeep,safari",
          duration: "6 Nights - 7 Days",
          title: "Rajasthan Jeep Safari"
        },
        {
          img: "https://source.unsplash.com/400x300/?desert,jeep",
          duration: "3 Nights - 4 Days",
          title: "Thar Desert Safari"
        }
      ]
    },
    climbing: {
      heading: "Peak Climbing Adventures",
      items: [
        {
          img: "https://source.unsplash.com/400x300/?mountain,peak",
          duration: "14 Nights - 15 Days",
          title: "Stok Kangri Climb"
        }
      ]
    },
    motorbike: {
      heading: "Motor Biking Tours",
      items: [
        {
          img: "https://source.unsplash.com/400x300/?motorbike,ladakh",
          duration: "10 Nights - 11 Days",
          title: "Leh Ladakh Bike Ride"
        }
      ]
    },
    rafting: {
      heading: "River Rafting Tours",
      items: [
        {
          img: "https://source.unsplash.com/400x300/?river,rafting",
          duration: "2 Nights - 3 Days",
          title: "Rishikesh White Water Rafting"
        }
      ]
    },
    skiing: {
      heading: "Skiing Adventures",
      items: [
        {
          img: "https://source.unsplash.com/400x300/?snow,skiing",
          duration: "4 Nights - 5 Days",
          title: "Gulmarg Ski Tour"
        }
      ]
    },
    fishing: {
      heading: "Fishing & Angling Tours",
      items: [
        {
          img: "https://source.unsplash.com/400x300/?fishing,river",
          duration: "3 Nights - 4 Days",
          title: "Angling in Himachal"
        }
      ]
    }
  };

  function renderTours(category) {
    const sectionHeader = document.getElementById("sectionHeader");
    const tourContainer = document.getElementById("tourContainer");
    const selected = tourData[category];

    sectionHeader.textContent = selected.heading;
    tourContainer.innerHTML = "";

    selected.items.forEach(item => {
      const div = document.createElement("div");
      div.className = "tour-card";
      div.innerHTML = `
        <img src="${item.img}" alt="${item.title}" />
        <p>${item.duration}</p>
        <h6>${item.title}</h6>
      `;
      tourContainer.appendChild(div);
    });
  }

  // Initial render
  renderTours("trekking");

  // Handle button clicks
  document.querySelectorAll(".category-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      document.querySelectorAll(".category-btn").forEach(b => b.classList.remove("active"));
      btn.classList.add("active");

      const category = btn.getAttribute("data-category");
      renderTours(category);
    });
  });

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

    


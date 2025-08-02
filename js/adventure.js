document.addEventListener('DOMContentLoaded', function () {
    const adventureData = [
      {
        title: "Trekking",
        description: "Experience the adrenaline rush while trekking to some of the most breathtaking trails at top adventure destinations in India.",
        image: "./../images/trek.jpg",
        link: "#"
      },
      {
        title: "Mountain Biking",
        description: "Peddle through the meandering roads and rugged terrains...",
        image: "./../image/t1.jpg",
        link: "#"
      },
      {
        title: "Peak Climbing",
        description: "Listen to the call of the Himalayan mountains...",
        image: "./../image/t3.jpg",
        link: "#"
      },
      {
        title: "Rafting",
        description: "Experience the thrill of floating down a river...",
        image: "./../image/raf.jpg",
        link: "#"
      },
      {
        title: "Water Sports",
        description: "Dive into the azure waters of India's coasts...",
        image: "./../image/wa.jpg",
        link: "#"
      },
      {
        title: "Adventure Sports",
        description: "Try paragliding, river rafting, and scuba diving...",
        image: "./../image/ad.jpg",
        link: "#"
      },
        {
            title: "Wildlife Safari",
            description: "Explore the rich biodiversity of India's national parks...",
            image: "./../image/wi.jpg",
            link: "#"
        },
       
    ];
  
    const carousel = document.getElementById('adventureCarousel');
  
    adventureData.forEach(activity => {
      const col = document.createElement('div');
      col.className = 'adventure-card';
      col.innerHTML = `
        <div class="card">
          <img src="${activity.image}" class="card-img-top" alt="${activity.title}">
          <div class="card-body">
            <h6 class="fw-bold">${activity.title}</h6>
            <p class="text-muted small">${activity.description}</p>
            <a href="${activity.link}" class="text-primary fw-bold">View more</a>
          </div>
        </div>`;
      carousel.appendChild(col);
    });
  
    // Scroll Control
    let scrollAmount = 0;
    const scrollStep = 320;
  
    document.getElementById('prevBtn').onclick = () => {
      carousel.scrollBy({ left: -scrollStep, behavior: 'smooth' });
    };
  
    document.getElementById('nextBtn').onclick = () => {
      carousel.scrollBy({ left: scrollStep, behavior: 'smooth' });
    };
  });
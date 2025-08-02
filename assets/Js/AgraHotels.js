 const container = document.getElementById("cardContainer");

    const images = [
      "https://res.cloudinary.com/dcxza1ixh/image/upload/v1752740016/amarvila_mskaft.jpg",
      "https://res.cloudinary.com/dcxza1ixh/image/upload/v1752740663/itc_k6liny.jpg",
      "https://res.cloudinary.com/dcxza1ixh/image/upload/v1752741290/radison_lkha1y.jpg",
      "https://res.cloudinary.com/dcxza1ixh/image/upload/v1752741506/jaypee_jzqgtv.jpg",
      "https://res.cloudinary.com/dcxza1ixh/image/upload/v1752741602/gateway_mjnbrx.jpg",
      "https://res.cloudinary.com/dcxza1ixh/image/upload/v1752741691/shiraz_cing6i.jpg",
      "https://res.cloudinary.com/dcxza1ixh/image/upload/v1752741807/trident_k1jdea.jpg"
    ];

    const names = ["Amar vilas Palace", "Itc Mughal Sheraton", "Hotel Radisson Blu", "Jaypee Palace", 
        "Taj Gateway", "Hotel Clarks Shiraz", "Hotel Trident"];

    for (let i = 0; i < 7; i++) {
      const card = document.createElement("div");
      card.className = "card";
      card.innerHTML = `
        <img src="${images[i]}" alt="Image ${i + 1}">
        <div class="card-name">${names[i]}</div>
      `;
      container.appendChild(card);
    }


    
  // ---------- 4 Star Hotels ----------
  const fourStarContainer = document.getElementById("fourStarCardContainer");

  const fourStarImages = [
    "https://res.cloudinary.com/dcxza1ixh/image/upload/v1752743302/howard_vncsga.jpg",
    "https://res.cloudinary.com/dcxza1ixh/image/upload/v1752743387/marina_uxubs8.jpg",
    "https://res.cloudinary.com/dcxza1ixh/image/upload/v1752743546/mansingh_nu11ik.jpg"
  ];

  const fourStarNames = [
    "Hotel Howard Plaza",
    "Hotel Marina",
    "Hotel Mansingh Palace"
  ];

  for (let i = 0; i < fourStarImages.length; i++) {
    const card = document.createElement("div");
    card.className = "card";
    card.innerHTML = `
      <img src="${fourStarImages[i]}" alt="Image ${i + 1}">
      <div class="card-name">${fourStarNames[i]}</div>
    `;
    fourStarContainer.appendChild(card);
  }


  // threeStar images
  const threeStarContainer = document.getElementById("threeStarCardContainer");

  const threeStarImages = [
    "https://res.cloudinary.com/dcxza1ixh/image/upload/v1752744087/siris_jjftan.jpg",
    "https://res.cloudinary.com/dcxza1ixh/image/upload/v1752744201/crystal_jl2a9u.jpg",
     "https://res.cloudinary.com/dcxza1ixh/image/upload/v1752744293/tajVilas_xuzxtl.jpg",
    "https://res.cloudinary.com/dcxza1ixh/image/upload/v1752744399/pushp_vkvjiu.jpg",
    "https://res.cloudinary.com/dcxza1ixh/image/upload/v1752744487/royal_pusf4i.jpg"
  ];

  const threeStarNames = [
    "Hotel Siris 18",
    "Hotel Crystal Inn",
    "Hotel Taj Vilas",
    "Hotel Pushp Vila",
    "Hotel Royal Residency"
  ];

  for (let i = 0; i < threeStarImages.length; i++) {
    const card = document.createElement("div");
    card.className = "card";
    card.innerHTML = `
      <img src="${threeStarImages[i]}" alt="Image ${i + 1}">
      <div class="card-name">${threeStarNames[i]}</div>
    `;
    threeStarContainer.appendChild(card);
  }


  // ******************************************************************

  function toggleSection(id) {
  const section = document.getElementById(id);
  section.style.display = section.style.display === 'block' ? 'none' : 'block';
}

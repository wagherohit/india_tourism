
const previewImage = document.getElementById('previewImage');
const hoverItems = document.querySelectorAll('.hover-preview');

hoverItems.forEach(item => {
  item.addEventListener('mouseover', () => {
    const imgSrc = item.getAttribute('data-img');
    previewImage.setAttribute('src', imgSrc);
  });
});

union ={
    ladakh:{
        heading1:"Ladakh",
        img1:"https://www.tourmyindia.com/states/ladakh/imagess/ladakh-banner.jpg",
        link1:"Ladakh",
        tittle1:"Ladakh Tourism",
        descripation1:"Unmatched Beauty and Unlimited Adventure at the Land of High Passes.",
        img2:"https://www.tourmyindia.com/states/ladakh/imagess/trekking.png",
        heading2:"Treking",
        descripation2:"Home to numerous treks, Ladakh is one of the best place for trekking in the Himalayas.",
        img3:"https://www.tourmyindia.com/states/ladakh/imagess/moterbiking.png",
        heading3:"Mountain Bike",
        descripation3:"The rugged trails and the winding roads are perfect for mountain biking adventure.",
        img4:"https://www.tourmyindia.com/states/ladakh/imagess/peak-climbing.png",
        heading4:"Peak Climbing",
        descripation4:"Ladhak is home to many mountain peak, and is perfect for peak climbing",
        heading5:"About Leh Ladakh Tourism",
        descripation5:"The Land of High Passes, Ladakh, the newly created Union Territory in India (previously a part of Jammu & Kashmir), boasts a landscape that can leave you with your jaws dropped. It is a place where the landscape changes dramatically; it is truly astonishing to see the mountains, snow, cold desert, alpine meadows and lakes at a short distance from each other. Tourism in Ladakh is an absolute delight for nature lovers as well as adventurers.Adorned with the lofty barren mountains, Ladakh is home to some of the highest motorable passes like Khardung La (5359 m), Marsimik La (5582 m), and Chang La (5360 m), and alpine lakes like Pangong Tso (4350 m) and Tso Moriri (4522 m). Ladakh is further divided into three regions - Leh, Nubra, and Zanskar, and each region has several places to see.",
        heading6:"Ladhak Packages",
        img5:"https://cdn.pixabay.com/photo/2022/10/26/14/49/valley-7548674_1280.jpg",
        img6:"https://cdn.pixabay.com/photo/2019/05/18/15/58/road-4212028_1280.jpg",
        img7:"https://cdn.pixabay.com/photo/2020/04/04/05/19/ladakh-5000873_1280.jpg",
        img8:"https://cdn.pixabay.com/photo/2015/04/14/17/40/the-monks-722463_1280.jpg",
        tittle2:"",
        tittle3:"",
        tittle4:"",
        tittle5:"",
    },
    andhman:{
        heading1:"ANDHMAN & NICOBAR ICELAND",
        img1:"https://www.tourmyindia.com/states/kerala/image/kerala-tourism.webp",
        link1:"Andhman & Nicobar Iceland",
        tittle1:"Andhman & Nicobar Iceland Tourism",
        descripation1:"Andaman and Nicobar Islands are a group of picturesque islands located in the Bay of Bengal. . ",
        img2:"https://www.tourmyindia.com/states/ladakh/imagess/trekking.png",
        heading2:"Treking",
        descripation2:"Trekking is a long, adventurous walk or hike through natural landscapes.",
        img3:"https://www.tourmyindia.com/states/ladakh/imagess/moterbiking.png",
        heading3:"Mountain Bike",
        descripation3:"The rugged trails and the winding roads are perfect for mountain biking adventure.",
        img4:"https://www.tourmyindia.com/states/ladakh/imagess/peak-climbing.png",
        heading4:"Peak Climbing",
        descripation4:"Ladhak is home to many mountain peak, and is perfect for peak climbing",
        heading5:"About Andhman & Nicobar IceLand",
        descripation5:"The Andaman and Nicobar Islands are a stunning group of over 500 islands located in the Bay of Bengal, far off the eastern coast of India. These islands are known for their pristine beaches, crystal-clear turquoise waters, dense tropical forests, and diverse marine life, making them one of India’s most exotic destinations.",
        heading6:"Andhman & Nicobar IceLand Packages",
        img5:"https://www.tourmyindia.com/states/andaman/images/port-blair.jpg",
        img6:"https://www.tourmyindia.com/states/andaman/images/havelock-island.jpg",
        img7:"https://www.tourmyindia.com/states/andaman/images/neil-island.jpg",
        img8:"https://www.tourmyindia.com/states/andaman/images/baratang-island.jpg",
        tittle2:"PORT BILAR",
        tittle3:"HEAYLOCK ICELAND ",
        tittle4:"NEIL ICELAND ",
        tittle5:"BARATANG ISLAND",

    },
    chandighar:{
        heading1:"CHANDIGARH",
        img1:"https://s7ap1.scene7.com/is/image/incredibleindia/hand-monument-chandigarh-chandigarh-city-1-hero?qlt=82&ts=1726739006101",
        link1:"Chandigarh",
        tittle1:"Chandigarh Tourism",
        descripation1:"Chandigarh is one of the earliest planned cities in post independence India and is internationally known for its architecture and urban design. ",
        img2:"https://www.tourmyindia.com/states/ladakh/imagess/trekking.png",
        heading2:"Treking",
        descripation2:"Trekking is a long, adventurous walk or hike through natural landscapes.",
        img3:"https://www.tourmyindia.com/states/ladakh/imagess/moterbiking.png",
        heading3:"Mountain Bike",
        descripation3:"The rugged trails and the winding roads are perfect for mountain biking adventure.",
        img4:"https://www.tourmyindia.com/states/ladakh/imagess/peak-climbing.png",
        heading4:"Peak Climbing",
        descripation4:"Ladhak is home to many mountain peak, and is perfect for peak climbing",
        heading5:"About Chandigarh",
        descripation5:"Chandigarh, the capital of the northern Indian states of Punjab and Haryana, was designed by the Swiss-French modernist architect, Le Corbusier. His buildings include the Capitol Complex with its High Court, Secretariat and Legislative Assembly, as well as the giant Open Hand Monument. The nearby Rock Garden is a park featuring sculptures made of stones, recycled ceramics and industrial relics.",
        heading6:"Chandigarh Packages",
        img5:"https://www.tourmyindia.com/states/chandigarh/images/capitol-complex.jpg",
        img6:"https://www.tourmyindia.com/states/chandigarh/images/rock-garden.jpg",
        img7:"https://www.tourmyindia.com/states/chandigarh/images/rose-garden.jpg",
        img8:"https://www.tourmyindia.com/states/chandigarh/images/sukhna-lake.jpg",
        tittle2:"COPITAL COMPLEX",
        tittle3:"ROCK GARDEN ",
        tittle4:"ROSE GARDEN ",
        tittle5:"SUKHNA LAKE",
    },
    pondicherry:{
        heading1:"PONDICHERRY",
        img1:"https://upload.wikimedia.org/wikipedia/commons/thumb/8/8c/Pondicherry-Rock_beach_aerial_view.jpg/500px-Pondicherry-Rock_beach_aerial_view.jpg",
        link1:"Pondicherry",
        tittle1:"Pondicherry Tourism", 
        descripation1:"Pondicherry, [a] officially known as Puducherry, [b] is the capital and most populous city of the Union Territory of Puducherry in India.",
        img2:"https://www.tourmyindia.com/states/ladakh/imagess/trekking.png",
        heading2:"Treking",
        descripation2:"Trekking is a long, adventurous walk or hike through natural landscapes.",
        img3:"https://www.tourmyindia.com/states/ladakh/imagess/moterbiking.png",
        heading3:"Mountain Bike",
        descripation3:"The rugged trails and the winding roads are perfect for mountain biking adventure.",
        img4:"https://www.tourmyindia.com/states/ladakh/imagess/peak-climbing.png",
        heading4:"Peak Climbing",
        descripation4:"Ladhak is home to many mountain peak, and is perfect for peak climbing",
        heading5:"About Pondicherry",
        descripation5:"Pondicherry (or Puducherry), a French colonial settlement in India until 1954, is now a Union Territory town bounded by the southeastern Tamil Nadu state. Its French legacy is preserved in its French Quarter, with tree-lined streets, mustard-colored colonial villas and chic boutiques. A seaside promenade runs along the Bay of Bengal and passes several statues, including a 4m-high Gandhi Memorial.",
        heading6:"Pondicherry Packages",
        img5:"https://www.tourmyindia.com/states/puducherry/images/short-tour-pondicherry.jpg",
        img6:"https://www.tourmyindia.com/states/puducherry/images/chennai-mahabalipuram-pondicherry.jpg",
        img7:"https://www.tourmyindia.com/states/puducherry/images/kanchipuram-mahabalipuram-tour.jpg",
        img8:"https://www.tourmyindia.com/states/puducherry/images/pondicherry-chennai-tour.jpg",
        tittle2:"SEE THE BEST OF PONDICHERRY",
        tittle3:"PUNDICHERRY TOUR WITH CHENNAI AND MAHABALIPURAM",
        tittle4:"KANCHIPURAM ",
        tittle5:"WONDERFUL PUDUCHEERY- CHENNAI TOUR",

    }
    
}




function ladkhchange(){
    document.getElementById("heading1").innerText = union.ladakh.heading1
    document.getElementById("img1").src = union.ladakh.img1
    document.getElementById("link1").innerText = union.ladakh.link1
    document.getElementById("tittle1").innerText = union.ladakh.tittle1
    document.getElementById("descripation1").innerText = union.ladakh.descripation1
    document.getElementById("img2").src = union.ladakh.img2
    document.getElementById("heading2").innerText = union.ladakh.heading2
    document.getElementById("descripation2").innerText = union.ladakh.descripation2
     document.getElementById("img3").src = union.ladakh.img3
    document.getElementById("heading3").innerText = union.ladakh.heading3
    document.getElementById("descripation3").innerText = union.ladakh.descripation3
     document.getElementById("img4").src = union.ladakh.img4
    document.getElementById("heading4").innerText = union.ladakh.heading4
    document.getElementById("descripation4").innerText = union.ladakh.descripation4
    document.getElementById("heading5").innerText = union.ladakh.heading5
    document.getElementById("descripation5").innerText = union.ladakh.descripation5
    document.getElementById("heading6").innerText = union.ladakh.heading6
    document.getElementById("img5").src = union.ladakh.img5
    document.getElementById("img6").src = union.ladakh.img6
    document.getElementById("img7").src = union.ladakh.img7
    document.getElementById("img8").src = union.ladakh.img8
    document.getElementById("tittle2").innerText = union.ladakh.tittle2
    document.getElementById("tittle3").innerText = union.ladakh.tittle3
    document.getElementById("tittle4").innerText = union.ladakh.tittle4
    document.getElementById("tittle5").innerText = union.ladakh.tittle5

}
function andhmanchange(){
    document.getElementById("heading1").innerText = union.andhman.heading1
    document.getElementById("img1").src = union.andhman.img1
    document.getElementById("link1").innerText = union.andhman.link1
    document.getElementById("tittle1").innerText = union.andhman.tittle1
    document.getElementById("descripation1").innerText = union.andhman.descripation1
    document.getElementById("img2").src = union.andhman.img2
    document.getElementById("heading2").innerText = union.andhman.heading2
    document.getElementById("descripation2").innerText = union.andhman.descripation2
     document.getElementById("img3").src = union.andhman.img3
    document.getElementById("heading3").innerText = union.andhman.heading3
    document.getElementById("descripation3").innerText = union.andhman.descripation3
     document.getElementById("img4").src = union.andhman.img4
    document.getElementById("heading4").innerText = union.andhman.heading4
    document.getElementById("descripation4").innerText = union.andhman.descripation4
    document.getElementById("heading5").innerText = union.andhman.heading5
    document.getElementById("descripation5").innerText = union.andhman.descripation5
    document.getElementById("heading6").innerText = union.andhman.heading6
    document.getElementById("img5").src = union.andhman.img5
    document.getElementById("img6").src = union.andhman.img6
    document.getElementById("img7").src = union.andhman.img7
    document.getElementById("img8").src = union.andhman.img8
    document.getElementById("tittle2").innerText = union.andhman.tittle2
    document.getElementById("tittle3").innerText = union.andhman.tittle3
    document.getElementById("tittle4").innerText = union.andhman.tittle4
    document.getElementById("tittle5").innerText = union.andhman.tittle5

}

function chandigharchnage(){
    document.getElementById("heading1").innerText = union.chandighar.heading1
    document.getElementById("img1").src = union.chandighar.img1
    document.getElementById("link1").innerText = union.chandighar.link1
    document.getElementById("tittle1").innerText = union.chandighar.tittle1
    document.getElementById("descripation1").innerText = union.chandighar.descripation1
    document.getElementById("img2").src = union.chandighar.img2
    document.getElementById("heading2").innerText = union.chandighar.heading2
    document.getElementById("descripation2").innerText = union.chandighar.descripation2
     document.getElementById("img3").src = union.chandighar.img3
    document.getElementById("heading3").innerText = union.chandighar.heading3
    document.getElementById("descripation3").innerText = union.chandighar.descripation3
     document.getElementById("img4").src = union.chandighar.img4
    document.getElementById("heading4").innerText = union.chandighar.heading4
    document.getElementById("descripation4").innerText = union.chandighar.descripation4
    document.getElementById("heading5").innerText = union.chandighar.heading5
    document.getElementById("descripation5").innerText = union.chandighar.descripation5
    document.getElementById("heading6").innerText = union.chandighar.heading6
    document.getElementById("img5").src = union.chandighar.img5
    document.getElementById("img6").src = union.chandighar.img6
    document.getElementById("img7").src = union.chandighar.img7
    document.getElementById("img8").src = union.chandighar.img8
    document.getElementById("tittle2").innerText = union.chandighar.tittle2
    document.getElementById("tittle3").innerText = union.chandighar.tittle3
    document.getElementById("tittle4").innerText = union.chandighar.tittle4
    document.getElementById("tittle5").innerText = union.chandighar.tittle5

}

function pondicheerychnage(){
    document.getElementById("heading1").innerText = union.pondicherry.heading1
    document.getElementById("img1").src = union.pondicherry.img1
    document.getElementById("link1").innerText = union.pondicherry.link1
    document.getElementById("tittle1").innerText = union.pondicherry.tittle1
    document.getElementById("descripation1").innerText = union.pondicherry.descripation1
    document.getElementById("img2").src = union.pondicherry.img2
    document.getElementById("heading2").innerText = union.pondicherry.heading2
    document.getElementById("descripation2").innerText = union.pondicherry.descripation2
     document.getElementById("img3").src = union.pondicherry.img3
    document.getElementById("heading3").innerText = union.pondicherry.heading3
    document.getElementById("descripation3").innerText = union.pondicherry.descripation3
     document.getElementById("img4").src = union.pondicherry.img4
    document.getElementById("heading4").innerText = union.pondicherry.heading4
    document.getElementById("descripation4").innerText = union.pondicherry.descripation4
    document.getElementById("heading5").innerText = union.pondicherry.heading5
    document.getElementById("descripation5").innerText = union.pondicherry.descripation5
    document.getElementById("heading6").innerText = union.pondicherry.heading6
    document.getElementById("img5").src = union.pondicherry.img5
    document.getElementById("img6").src = union.pondicherry.img6
    document.getElementById("img7").src = union.pondicherry.img7
    document.getElementById("img8").src = union.pondicherry.img8
    document.getElementById("tittle2").innerText = union.pondicherry.tittle2
    document.getElementById("tittle3").innerText = union.pondicherry.tittle3
    document.getElementById("tittle4").innerText = union.pondicherry.tittle4
    document.getElementById("tittle5").innerText = union.pondicherry.tittle5

}
// ***********************************
function scrollCarousel(direction) {
      const carousel = document.getElementById('carousel');
      const cardWidth = carousel.querySelector('.card2').offsetWidth + 10; // 10px for margin
      carousel.scrollBy({ left: direction * cardWidth * 4, behavior: 'smooth' });
    }
 

//   AOS.init();
//  const previewImage = document.getElementById('previewImage');
//  const hoverItems = document.querySelectorAll('.hover-preview');

//  hoverItems.forEach(item => {
//    item.addEventListener('mouseover', () => {
//      const imgSrc = item.getAttribute('data-img');
//      previewImage.setAttribute('src', imgSrc);
//    });
//  });
 
 function scrollCarousel(direction) {
      const carousel = document.getElementById('carousel');
      const cardWidth = carousel.querySelector('.card2').offsetWidth + 10; // 10px for margin
      carousel.scrollBy({ left: direction * cardWidth * 4, behavior: 'smooth' });
    }
    // ******************************

const obj ={
    Assam:{
       Title:"ASSAM TRAVEL GUIDE",
       descripation:"Soothing beauty, offbeat tourists attractions, spiritual ambiance, the sacred river, humble people, and zealous culture, Assam boasts plenty of fascinating secrets. Being one of the Northeast India’s iconic seven sisters, a holiday in Assam is about witnessing a heady mix of history, culture, and nature at the same time. The state happens to be the land of many wildlife reserves, which are further home to the one-horned rhino, one of Assam's tourism best-known mascots.",
       heading1:"BEST TIME TO VISIT ASSAM:",
       months:"November To March",
       heading2:"WHY VISIT ASSAM:",
       heading3:"Popular Tour Packages for Assam",
       descripation3:"Assam is filled with religious atmosphere, simple people, and enthusiastic culture and it flaunts a plethora of engaging and captivating destinations and attractions. With Tour My India, we can help you spend a grand time amidst many wildlife reserves, temples and historical sites. With our best travel experts, expect to get well appointed hotels with comfortable transportation and entertaining itinerary for the tour.",
       descripation2:"To be a part of the euphoric festival celebration; check out one of the kind nature phenomena - river island at Majuli; sample scrumptious Machor Tenga and Duck Roast; visit the oldest temple in the history of India; go boat cruising on Brahmaputra river; purchase traditional silk garment and raft over ferocious Jia Bhorali River",
       btn:"LET'S PLAN YOUR TRIP",
        h1:"GUWAHATI",
        h2:"SHIVASAGER",
        h3:"TEZPUR",
        h4:"JORHAT",
        h5:"MAJULI",
        h6:"DIGBOI",
        h7:"DIBRUGARH",
        h8:"HALFLONG",
       img1:"https://www.tourmyindia.com/states/assam/images/guwahati.jpg",
       img2:"https://www.tourmyindia.com/states/assam/images/sibsagar.jpg",
       img3:"https://www.tourmyindia.com/states/assam/images/tezpur.jpg",
       img4:"https://www.tourmyindia.com/states/assam/images/jorhat.jpg",
       img5:"https://www.tourmyindia.com/states/assam/images/majuli.jpg",
       img6:"https://www.tourmyindia.com/states/assam/images/digboi.jpg",
       img7:"https://www.tourmyindia.com/states/assam/images/dibrugarh.jpg",
       img8:"https://www.tourmyindia.com/states/assam/images/haflong.jpg",
       img9:"https://www.tourmyindia.com/states/assam/images/tea-testing.jpg",
       img10:"https://www.tourmyindia.com/states/assam/images/assam-national-parks.jpg",
       img11:"https://www.tourmyindia.com/states/assam/images/the-wild-assam.jpg",
       img12:"https://www.tourmyindia.com/states/assam/images/birding-assam.jpg"

    },
    Nagaland:{
       Title:"NAGALAND TRAVEL GUIDE",
       descripation:"Nagaland offers unending exploration possibilities from heritage villages to wildlife sanctuaries. Beautifully nestled amidst the lush and verdant sub-tropical and sub-alpine climate, Nagaland treasures an overabundance of wild flora and fauna and even some medicinal plants. Nagaland is a beautiful destination in India and it stores some popular places to visit. You can soak in the freshness of fine scent in the air, the calming yet buzzing sound of wild cicadas and beautiful rolling ranch lands and white fluffy clouds hovering above.",
       heading1:"BEST TIME TO VISIT NAGALAND:",
       months:"Winters from October to February are an ideal time to visit Nagaland.",
       heading2:"WHY VISIT NAGALAND:",
       descripation2:"Nagaland can be visited to experience holiday destination and witness unique heritage sites, rich wildlife, local festivals, delicious cuisines, beautiful handicrafts, cultural shopping, attractive places, attractions and more.",
       heading3:"Best Holiday Packages For Nagaland",
       descripation3:"Nagaland tourism will blow every individual's mind with unique attractions and destinations to visit. Allow us to introduce you to this amazing destination through our Nagaland travel packages. We will help you spend an exotic holiday in this one-stop destination where you can see all that you have missed throughout your life. Check out Tour My India holiday packages to get good deals and services.",
       btn:"LET'S PLAN YOUR TRIP",
         h1:"DIMAPUR",
        h2:"KOHIMA",
        h3:"WOKHA",
        h4:"MOKAKCHUNG",
        h5:"MON",
        h6:"TUENSANG",
        h7:"PHEK",
        h8:"ZUNHEBOTO",
       img1:"https://www.tourmyindia.com/states/nagaland/images/dimapur.jpg",
       img2:"https://www.tourmyindia.com/states/nagaland/images/kohima.jpg",
       img3:"https://www.tourmyindia.com/states/nagaland/images/wokha.jpg",
       img4:"https://www.tourmyindia.com/states/nagaland/images/mokokchung.jpg",
       img5:"https://www.tourmyindia.com/states/nagaland/images/mon.jpg",
       img6:"https://www.tourmyindia.com/states/nagaland/images/tuensang.jpg",
       img7:"https://www.tourmyindia.com/states/nagaland/images/phek.jpg",
       img8:"https://www.tourmyindia.com/states/nagaland/images/zunheboto.jpg",
       img9:"https://www.tourmyindia.com/states/nagaland/images/dzukou-valley-trek-1.jpg",
       img10:"https://www.tourmyindia.com/states/nagaland/images/tribal-tour-1.jpg",
       img11:"https://www.tourmyindia.com/states/nagaland/images/hornbill-festival-tour-1.jpg",
       img12:"https://www.tourmyindia.com/states/nagaland/images/cultural-tour-1.jpg"

    },
    Tripura:{
      Title:"TRIPURA TRAVEL GUIDE",
      descripation:"Tripura is a cultural reservoir among all the northeastern states of India. Heritage and historical sites, temples going back hundreds of years, wildlife destinations and a thriving arts and crafts industry, these are the most popular tourism attractions in Tripura. Those looking for biodiversity hotspots during their Tripura holidays will not be disappointed, this state has plenty of those. Tripura is one of those travel destinations in India that attract families, friends, couples and solo travellers.",
      heading1:"BEST TIME TO VISIT TRIPURA:",
       months:"October to February are the best months to visit Tripura.",
       heading2:"WHY VISIT TRIPURA:",
       descripation2:"You should visit Tripura for its landscape, culture, cuisine, palaces, heritage sites, sightseeing, viewpoints, temples, archaeological sites, wildlife, boating, waterfalls, handicrafts, birding, lakes and landscape.",
       heading3:"Best Holiday Packages For Tripura",
       descripation3:"Plan a trip with Tripura tour packages and get an incredible travel experience in the royal state of Tripura. Explore the most popular tourist attractions in Tripura with our holiday packages. Enjoy the top things to do like sightseeing, boating, wildlife, exploring heritage sites while admiring its amazing landscape.",
       btn:"LET'S PLAN YOUR TRIP",
         h1:"AGARTALA",
        h2:"MELAGHAR",
        h3:"DHARMANAGER",
        h4:"UDAIPUR",
        h5:"AMBASSA",
        h6:"KUMARGHAT",
        h7:"DEVTAMURA",
        h8:"PILAK",
       img1:"https://www.tourmyindia.com/states/tripura/images/agartala.jpg",
       img2:"https://www.tourmyindia.com/states/tripura/images/melaghar.jpg",
       img3:"https://www.tourmyindia.com/states/tripura/images/dharmanagar.jpg",
       img4:"https://www.tourmyindia.com/states/tripura/images/udaipur.jpg",
       img5:"https://www.tourmyindia.com/states/tripura/images/ambassa.jpg",
       img6:"https://www.tourmyindia.com/states/tripura/images/kumarghat.jpg",
       img7:"https://www.tourmyindia.com/states/tripura/images/devtamura.jpg",
       img8:"https://www.tourmyindia.com/states/tripura/images/pilak.jpg",
       img9:"https://www.tourmyindia.com/states/tripura/images/tripura-state-museum.jpg",
       img10:"https://www.tourmyindia.com/states/tripura/images/sepahijala-wildlife-sanctuary.jpg",
       img11:"https://www.tourmyindia.com/states/tripura/images/neermahal-water-palace.jpg",
       img12:"https://www.tourmyindia.com/states/tripura/images/bhubaneswari-temple.jpg"

    },
    Jharkhand:{
        Title:"JHARKHAND TRAVEL GUIDE",
        descripation:"A land with a vast bounty of towering mountains, dense forests and gushing waterfalls, Jharkhand is a place for the nature lovers and wildlife aficionados. The lesser explored destination of India will let the travellers witness a plethora of natural scenic vistas that are unperturbed or untouched. Other than scenic landscapes, a trip to Jharkhand will let one explore several museums and temples that are scattered around the state. Jharkhand will not only introduce the tourists to the unparalleled beauties of nature but will give an opportunity to explore and learn about the diverse culture and lifestyle of the tribal community living here. For those planning to visit the state, the travel guide will let one know what all is to be covered when holidaying in Jharkhand.",
        heading1:"BEST TIME TO VISIT JHARKHAND:",
       months:"A trip to Jharkhand can be planned during the winter season between October and March when the weather is cool and pleasant making it favourable for a sightseeing tour and exploring the tourist attractions.",
       heading2:"WHY VISIT JHARKHAND?",
       descripation2:"For cultural tourism, waterfall and dam, eco-tourism, heritage walks, sightseeing tour, religious tour, rural tourism, adventure, fairs and festivals.",
       heading3:"Best Holiday Packages For Jharkhand",
       descripation3:"The unparalleled beauty of Jharkhand is dotted with majestic hills, cascading waterfalls, lush greenery and rich culture. When in Jharkhand, tourists can head to the rural areas that will introduce to the tribal community. Besides this, Jharkhand is also a paradise for the nature lovers, peace seekers, wildlife buffs who can make the most of their visit to Jharkhand.",
       btn:"LET'S PLAN YOUR TRIP",
        h1:"RANCHI",
        h2:"JAMSHEDPUR",
        h3:"DEOGHAR",
        h4:"HAZARIBAGH",
        h5:"DHANBAD",
        h6:"BOKARA",
        h7:"GIRIDIH",
        h8:"NETARHAT",
       img1:"https://www.tourmyindia.com/states/jharkhand/images/ranchi.jpg",
       img2:"https://www.tourmyindia.com/states/jharkhand/images/jamshedpur.jpg",
       img3:"https://www.tourmyindia.com/states/jharkhand/images/deoghar.jpg",
       img4:"https://www.tourmyindia.com/states/jharkhand/images/hazaribagh.jpg",
       img5:"https://www.tourmyindia.com/states/jharkhand/images/dhanbad.jpg",
       img6:"https://www.tourmyindia.com/states/jharkhand/images/bokaro.jpg",
       img7:"https://www.tourmyindia.com/states/jharkhand/images/giridih.jpg",
       img8:"https://www.tourmyindia.com/states/jharkhand/images/netarhat.jpg",
       img9:"https://www.tourmyindia.com/states/jharkhand/images/jonha-falls.jpg",
       img10:"https://www.tourmyindia.com/states/jharkhand/images/dassam-falls.jpg",
       img11:"https://www.tourmyindia.com/states/jharkhand/images/jamshedpur.jpg",
       img12:"https://www.tourmyindia.com/states/jharkhand/images/deoghar.jpg"
    }
}

function changeassam(){
    document.getElementById("title").innerHTML = obj.Assam.Title
    document.getElementById("descripation").innerText = obj.Assam.descripation
    document.getElementById("heading1").innerText = obj.Assam.heading1
    document.getElementById("months").innerText = obj.Assam.months
    document.getElementById("heading2").innerText = obj.Assam.heading2
    document.getElementById("descripation2").innerText = obj.Assam.descripation2
    document.getElementById("heading3").innerText = obj.Assam.heading3
    document.getElementById("descripation3").innerHTML = obj.Assam.descripation3
    document.getElementById("btn1").innerHTML =  obj.Assam.btn
    document.getElementById("h1").innerText = obj.Assam.h1
    document.getElementById("h2").innerText = obj.Assam.h2
    document.getElementById("h3").innerText = obj.Assam.h3
    document.getElementById("h4").innerText = obj.Assam.h4
    document.getElementById("h5").innerText = obj.Assam.h5
    document.getElementById("h6").innerText = obj.Assam.h6
    document.getElementById("h7").innerText = obj.Assam.h7
    document.getElementById("h8").innerText = obj.Assam.h8
    document.getElementById("img1").src = obj.Assam.img1
    document.getElementById("img2").src = obj.Assam.img2
    document.getElementById("img3").src = obj.Assam.img3
    document.getElementById("img4").src = obj.Assam.img4
    document.getElementById("img5").src = obj.Assam.img5
    document.getElementById("img6").src = obj.Assam.img6
    document.getElementById("img7").src = obj.Assam.img7
    document.getElementById("img8").src = obj.Assam.img8
    document.getElementById("img9").src = obj.Assam.img9
    document.getElementById('img10').src = obj.Assam.img10
    document.getElementById("img11").src = obj.Assam.img11
    document.getElementById('img12').src = obj.Assam.img12
}

function changenagaland(){
    document.getElementById("title").innerHTML = obj.Nagaland.Title
    document.getElementById("descripation").innerText = obj.Nagaland.descripation
    document.getElementById("heading1").innerText = obj.Nagaland.heading1
    document.getElementById("months").innerText = obj.Nagaland.months
    document.getElementById("heading2").innerText = obj.Nagaland.heading2
    document.getElementById("descripation2").innerText = obj.Nagaland.descripation2
    document.getElementById("heading3").innerText = obj.Nagaland.heading3
    document.getElementById("descripation3").innerHTML = obj.Nagaland.descripation3
    document.getElementById("btn1").innerHTML =  obj.Nagaland.btn
     document.getElementById("h1").innerText = obj.Nagaland.h1
    document.getElementById("h2").innerText = obj.Nagaland.h2
    document.getElementById("h3").innerText = obj.Nagaland.h3
    document.getElementById("h4").innerText = obj.Nagaland.h4
    document.getElementById("h5").innerText = obj.Nagaland.h5
    document.getElementById("h6").innerText = obj.Nagaland.h6
    document.getElementById("h7").innerText = obj.Nagaland.h7
    document.getElementById("h8").innerText = obj.Nagaland.h8
    document.getElementById("img1").src = obj.Nagaland.img1
    document.getElementById("img2").src = obj.Nagaland.img2
    document.getElementById("img3").src = obj.Nagaland.img3
    document.getElementById("img4").src = obj.Nagaland.img4
    document.getElementById("img5").src = obj.Nagaland.img5
    document.getElementById("img6").src = obj.Nagaland.img6
    document.getElementById("img7").src = obj.Nagaland.img7
    document.getElementById("img8").src = obj.Nagaland.img8
    document.getElementById("img9").src = obj.Nagaland.img9
    document.getElementById("img10").src = obj.Nagaland.img10
     document.getElementById("img11").src = obj.Nagaland.img11
      document.getElementById("img12").src = obj.Nagaland.img12
}

function changetripura(){
    document.getElementById("title").innerHTML = obj.Tripura.Title
    document.getElementById("descripation").innerText = obj.Tripura.descripation
    document.getElementById("heading1").innerText = obj.Tripura.heading1
    document.getElementById("months").innerText = obj.Tripura.months
    document.getElementById("heading2").innerText = obj.Tripura.heading2
    document.getElementById("descripation2").innerText = obj.Tripura.descripation2
    document.getElementById("heading3").innerText = obj.Tripura.heading3
    document.getElementById("descripation3").innerHTML = obj.Tripura.descripation3
    document.getElementById("btn1").innerHTML =  obj.Tripura.btn
     document.getElementById("h1").innerText = obj.Tripura.h1
    document.getElementById("h2").innerText = obj.Tripura.h2
    document.getElementById("h3").innerText = obj.Tripura.h3
    document.getElementById("h4").innerText = obj.Tripura.h4
    document.getElementById("h5").innerText = obj.Tripura.h5
    document.getElementById("h6").innerText = obj.Tripura.h6
    document.getElementById("h7").innerText = obj.Tripura.h7
    document.getElementById("h8").innerText = obj.Tripura.h8
    document.getElementById("img1").src = obj.Tripura.img1
    document.getElementById("img2").src = obj.Tripura.img2
    document.getElementById("img3").src = obj.Tripura.img3
    document.getElementById("img4").src = obj.Tripura.img4
    document.getElementById("img5").src = obj.Tripura.img5
    document.getElementById("img6").src = obj.Tripura.img6
    document.getElementById("img7").src = obj.Tripura.img7
    document.getElementById("img8").src = obj.Tripura.img8
    document.getElementById("img9").src = obj.Tripura.img9
    document.getElementById("img10").src = obj.Tripura.img10
     document.getElementById("img11").src = obj.Tripura.img11
      document.getElementById("img12").src = obj.Tripura.img12
}

function changejharkhand(){
    document.getElementById("title").innerHTML = obj.Jharkhand.Title
    document.getElementById("descripation").innerText = obj.Jharkhand.descripation
    document.getElementById("heading1").innerText = obj.Jharkhand.heading1
    document.getElementById("months").innerText = obj.Jharkhand.months
    document.getElementById("heading2").innerText = obj.Jharkhand.heading2
    document.getElementById("descripation2").innerText = obj.Jharkhand.descripation2
    document.getElementById("heading3").innerText = obj.Jharkhand.heading3
    document.getElementById("descripation3").innerHTML = obj.Jharkhand.descripation3
    document.getElementById("btn1").innerHTML =  obj.Jharkhand.btn
     document.getElementById("h1").innerText = obj.Jharkhand.h1
    document.getElementById("h2").innerText = obj.Jharkhand.h2
    document.getElementById("h3").innerText = obj.Jharkhand.h3
    document.getElementById("h4").innerText = obj.Jharkhand.h4
    document.getElementById("h5").innerText = obj.Jharkhand.h5
    document.getElementById("h6").innerText = obj.Jharkhand.h6
    document.getElementById("h7").innerText = obj.Jharkhand.h7
    document.getElementById("h8").innerText = obj.Jharkhand.h8
    document.getElementById("img1").src = obj.Jharkhand.img1
    document.getElementById("img2").src = obj.Jharkhand.img2
    document.getElementById("img3").src = obj.Jharkhand.img3
    document.getElementById("img4").src = obj.Jharkhand.img4
    document.getElementById("img5").src = obj.Jharkhand.img5
    document.getElementById("img6").src = obj.Jharkhand.img6
    document.getElementById("img7").src = obj.Jharkhand.img7
    document.getElementById("img8").src = obj.Jharkhand.img8
    document.getElementById("img9").src = obj.Jharkhand.img9
    document.getElementById("img10").src = obj.Jharkhand.img10
     document.getElementById("img11").src = obj.Jharkhand.img11
      document.getElementById("img12").src = obj.Jharkhand.img12
}

// *****************************************************************************


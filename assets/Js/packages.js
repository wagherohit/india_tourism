 
 const previewImage = document.getElementById('previewImage');
 const hoverItems = document.querySelectorAll('.hover-preview');

 hoverItems.forEach(item => {
   item.addEventListener('mouseover', () => {
     const imgSrc = item.getAttribute('data-img');
     previewImage.setAttribute('src', imgSrc);
   });
 });
 
 obj = {
    chopta:{
        heading1:"Chopta-Chandrashila Trek with Deoria Tal",
        heading2:"Duration:",
        des1:"04 Nights - 05 Days",
        heading3:"Destinations :",
        des2:" Delhi - Haridwar - Ukhimath - Deoria Tal - Sari - Chopta - Tungnath - Chandrashila - Chopta - Haridwar - Delhi",
        heading4:"Highlght of The Trip :",
        des3:"The changing landscapes add to the charm of the vistas.",
        heading5:"Chandrashila :",
        des4:"Situated above the Tungnath temple is Chandrashila, a rock face. A hike to this summit is short but rigorous. However, the enchanting views of the Nanda Devi, Trishul, Kedar and Chaukhamba peaks are worth the tiring expedition.",
        heading6:"Day 01: Delhi - Haridwar - Ukhimath (200 kilometers/7-8 hours)",
        des5:"Board a train to Haridwar in the morning. Upon arrival, our tour guide along with the rest of the trekking team will receive you, and then we will head towards Ukhimath via Rishikesh, Devprayag and Rudraprayag. En-route we will take care of your breakfast and lunch. Check in to the hotel on reaching. Later, enjoy a scrumptious dinner and relaxing overnight stay at Ukhimath.",
        heading7:"Day 02 : Ukhimath – Deoria Tal (2438 meters/7998 feet)",
        des6:"Post breakfast, trek towards the Deoria Tal. The trek is loaded with dense forests of Rhododendron and various wild yet beautiful flowers and ferns. Reaching the Deoria Tal is just a matter of 3 to 4 hours. Upon arrival, explore the natural exquisiteness of the place and get ready to spend some time in the lap of Mother Nature, as it will be an overnight stay in the tent near the lake.",
        heading8:"Day 03: Deoria Tal – Sari - Chopta",
        des7:"In morning, the trekking trail heads off to the Sari Village (3 kilometers) and then you will be driven to Chopta. En-route, dense woods and lush meadows will stand as the main highlight. We will be spending a night at Chopta, and thus set up the tents upon arrival. Further, take pleasure in witnessing the spectacular vista of the Himalayas.",
        heading9:"Day 04: Chopta –Tungnath (3680 meters/12070 feet) – Chandrashila (4090 meters/13415 feet) - Chopta",
        des8:"Leave early in the morning for Tungnath temple. Reaching Tungnath temple is an uphill battle as it stands at an altitude of 3680 meters from the sea level (the highest temple in India). Further, lush green meadows and snow-dressed Himalayan ranges will offer a treat to the eyes. Upon arrival, pay homage to lord Shiva in the temple. Later, relax for some time and then trek ahead towards the Chandrashila summit. Soak in the beauty of the place and then move back to Chopta for dinner and overnight stay.",
        heading10:"Day 05: Chopta – Haridwar - Delhi",
        des9:"",
        heading11:"End of the services",
        des10:"",
        img1:"https://www.tourmyindia.com/images/chopta-chandashila-fd2.jpg"
    },
    ladhak:{
         heading1:"Ladakh - The Land of Snow Leopard",
        heading2:"Duration:",
        des1:" 12 Nights - 13 Days",
        heading3:"Destinations :",
        des2:" Leh - Leh - Phey - Hemis National Park - Leh - Delhi",
        heading4:"Area:",
        des3:"Ladakh Himalaya",
        heading5:"Altitude :",
        des4:"4700 mts",
        heading6:"Grade",
        des5:"Moderate to Challenging",
        heading7:"Best Season: ",
        des6:"December to March",
        heading8:"Day 01: Delhi - Leh (11,500 ft)",
        des7:"Upon arrival at Leh airport our representative will pick and transfer you to the hotel. While in the hotel, our expert guide will brief you about the tour and acclimatization (adaptation to a new climate). For the rest of the day all you need to do is acclimatize, followed by a scrumptious dinner and overnight stay in the hotel.",
        heading9:"Day 02: Leh (the day is free to explore the local market)",
        des8:"Post breakfast, a wonderful tour amid the local market of Leh. There is something very special concealed in the small lanes of this market, and tourists simply love to unveil this treasure. Later, enjoy a comfy overnight stay in the hotel.",
        heading10:"Day 03: Leh Local sight seeing",
        des9:"After a delicious and healthy breakfast in the morning, our guide will take you to the local attractions of the place. To name a few: the Victory Peak, Leh Palace, old quarter and offices (a local conservation organization). Return to the hotel for an overnight stay.",
        heading11:"End of the services",
        des10:"",
        img1:"https://www.tourmyindia.com/images/snow-leopard-fd2.jpg"
    },
    Dozangiri:{
         heading1:"Dzongri Goecha La Trek",
        heading2:"Duration:",
        des1:"11 Nights - 12 Days",
        heading3:"Destinations :",
        des2:"Yuksom - Tsokha - Dzongri -Thangsing - Lamoni - Goecha La - Yuksom - Bagdogra",
        heading4:"Area:",
        des3:"Sikkim Himalaya",
        heading5:"Best Season:",
        des4:"March – June & Aug - November",
        heading6:"Grade",
        des5:"Moderate to Challenging",
        heading7:"Day 01: Arrive Delhi ",
        des6:"On arrival at Delhi international airport, our representative meet you at the arrival lounge of airport, and will assist you for your smooth transfer to prebooked hotel. Over night stay at hotel.",
        heading8:"Day 02: Delhi – Bagdogra – Gangtok (124 kms/3-4 hrs)",
        des7:"Morning after breakfast transfer to domestic airport time to catch an internal flight for Bagdogra airport. Upon arrival at Bagdogra airport our representative will meet you and drive towards Gangtok. On arrival transfer into hotel. Evening free to do your own activity. Dinner & overnight stay at hotel.",
        heading9:"Day 03: Gangtok – Yuksom (123 kms/6-7 hrs)",
        des8:"Morning our team will meet you at the hotel and brief you about the your trek, after breakfast we will drive to Yuksom. The base of our trek. Dinner and overnight stay in guesthouse.",
        heading10:"Day 04: Yuksam (1785 mts/5854 ft) – Tsokha (3000 mts/9840 ft) (14 kms/5-6 hrs)",
        des9:"The trail from Yuksam starts at the local market and follows main road towards the north. The trail climbs gently out of the valley and hugs the right bank of the Ratong Chu River, which can be heard thundering through the gorge below. The trail crosses over four bridges to climb steeply towards north-west to the small settlement of Bakkhim. Continue for another 3 kms through forest of magnolia and rhododendron to reach Tsokha. On arrival set campsite for dinner and overnight stay.",
        heading11:"End of the services",
        des10:"",
        img1:"https://www.tourmyindia.com/images/dzongri-goecha-la-fd2.jpg"
        
    }
}


function change(){
    document.getElementById("heading1").innerText = obj.chopta.heading1
    document.getElementById("heading2").innerText = obj.chopta.heading2
    document.getElementById("des1").innerText = obj.chopta.des1
    document.getElementById("heading3").innerText = obj.chopta.heading3
    document.getElementById("des2").innerText = obj.chopta.des2
    document.getElementById("heading4").innerText = obj.chopta.heading4
    document.getElementById("des3").innerText = obj.chopta.des3
    document.getElementById("heading5").innerText = obj.chopta.heading5
    document.getElementById("des4").innerText = obj.chopta.des4
    document.getElementById("heading6").innerText = obj.chopta.heading6
    document.getElementById("des5").innerText = obj.chopta.des5
    document.getElementById("heading7").innerText = obj.chopta.heading7
    document.getElementById("des6").innerText = obj.chopta.des6
    document.getElementById("heading8").innerText = obj.chopta.heading8
    document.getElementById("des7").innerText = obj.chopta.des7
    document.getElementById("heading9").innerText = obj.chopta.heading9
    document.getElementById("des8").innerText = obj.chopta.des8
    document.getElementById("heading10").innerText = obj.chopta.heading10
    document.getElementById("des9").innerText = obj.chopta.des9
    document.getElementById("heading11").innerText = obj.chopta.heading11
    document.getElementById("des10").innerText = obj.chopta.des10
    document.getElementById("img1").src = obj.chopta.img1
}

function changeladhak(){
    document.getElementById("heading1").innerText = obj.ladhak.heading1
    document.getElementById("heading2").innerText = obj.ladhak.heading2
    document.getElementById("des1").innerText = obj.ladhak.des1
    document.getElementById("heading3").innerText = obj.ladhak.heading3
    document.getElementById("des2").innerText = obj.ladhak.des2
    document.getElementById("heading4").innerText = obj.ladhak.heading4
    document.getElementById("des3").innerText = obj.ladhak.des3
    document.getElementById("heading5").innerText = obj.ladhak.heading5
    document.getElementById("des4").innerText = obj.ladhak.des4
    document.getElementById("heading6").innerText = obj.ladhak.heading6
    document.getElementById("des5").innerText = obj.ladhak.des5
    document.getElementById("heading7").innerText = obj.ladhak.heading7
    document.getElementById("des6").innerText = obj.ladhak.des6
    document.getElementById("heading8").innerText = obj.ladhak.heading8
    document.getElementById("des7").innerText = obj.ladhak.des7
    document.getElementById("heading9").innerText = obj.ladhak.heading9
    document.getElementById("des8").innerText = obj.ladhak.des8
    document.getElementById("heading10").innerText = obj.ladhak.heading10
    document.getElementById("des9").innerText = obj.ladhak.des9
    document.getElementById("heading11").innerText = obj.ladhak.heading11
    document.getElementById("des10").innerText = obj.ladhak.des10
    document.getElementById("img1").src = obj.ladhak.img1
}

function dzongiri(){
    document.getElementById("heading1").innerText = obj.Dozangiri.heading1
    document.getElementById("heading2").innerText = obj.Dozangiri.heading2
    document.getElementById("des1").innerText = obj.Dozangiri.des1
    document.getElementById("heading3").innerText = obj.Dozangiri.heading3
    document.getElementById("des2").innerText = obj.Dozangiri.des2
    document.getElementById("heading4").innerText = obj.Dozangiri.heading4
    document.getElementById("des3").innerText = obj.Dozangiri.des3
    document.getElementById("heading5").innerText = obj.Dozangiri.heading5
    document.getElementById("des4").innerText = obj.Dozangiri.des4
    document.getElementById("heading6").innerText = obj.Dozangiri.heading6
    document.getElementById("des5").innerText = obj.Dozangiri.des5
    document.getElementById("heading7").innerText = obj.Dozangiri.heading7
    document.getElementById("des6").innerText = obj.Dozangiri.des6
    document.getElementById("heading8").innerText = obj.Dozangiri.heading8
    document.getElementById("des7").innerText = obj.Dozangiri.des7
    document.getElementById("heading9").innerText = obj.Dozangiri.heading9
    document.getElementById("des8").innerText = obj.Dozangiri.des8
    document.getElementById("heading10").innerText = obj.Dozangiri.heading10
    document.getElementById("des9").innerText = obj.Dozangiri.des9
    document.getElementById("heading11").innerText = obj.Dozangiri.heading11
    document.getElementById("des10").innerText = obj.Dozangiri.des10
    document.getElementById("img1").src = obj.Dozangiri.img1
}

 
  const previewImage = document.getElementById('previewImage');

  const hoverItems = document.querySelectorAll('.hover-preview');
 
  hoverItems.forEach(item => {

    item.addEventListener('mouseover', () => {
      const imgSrc = item.getAttribute('data-img');
      previewImage.setAttribute('src', imgSrc);
    });
  });
 
 function scrollCarousel(direction) {
      const carousel = document.getElementById('carousel');
      const cardWidth = carousel.querySelector('.card2').offsetWidth + 10; // 10px for margin
      carousel.scrollBy({ left: direction * cardWidth * 4, behavior: 'smooth' });
    }
    

    // ******************************************
    function scrollbar(direction) {
      const carousel = document.getElementById('carousel1');
      const cardWidth = carousel.querySelector('.card').offsetWidth + 10; // 10px for margin
      carousel.scrollBy({ left: direction * cardWidth * 4, behavior: 'smooth' });
    }


    // ***************************************************************************************************


    const wildlife = {

           northwildlife:{
            img1:"https://www.tourmyindia.com/packages-tour-india/wildlife-tour-packages/tmimg/wildlife-img/ranthambore-north.webp",
            img2:"https://www.tourmyindia.com/packages-tour-india/wildlife-tour-packages/tmimg/wildlife-img/classic-north.webp",
            img3:"https://www.tourmyindia.com/packages-tour-india/wildlife-tour-packages/tmimg/wildlife-img/golden-north.webp",
            img4:"https://www.tourmyindia.com/packages-tour-india/wildlife-tour-packages/tmimg/wildlife-img/jim-corbett-north.webp",
            img5:"https://www.tourmyindia.com/packages-tour-india/wildlife-tour-packages/tmimg/wildlife-img/triangle-north.webp",
            img6:"https://www.tourmyindia.com/packages-tour-india/wildlife-tour-packages/tmimg/wildlife-img/india-north.webp",
            img7:"https://www.tourmyindia.com/packages-tour-india/wildlife-tour-packages/tmimg/wildlife-img/tiger-safari-north.webp",
            heading1:"Golden Triangle Tour With Ranthambore",
            heading2:"Classical India Life",
            heading3:"Goldan Traingle With Tigers",
            heading4:"Corbett With Golden Triangle",
            heading5:"Tigers & Goldan Triangle",
            heading6:"India Tiger Tour",
            heading7:"Tiger Safari Expedition"

           },
           southwildlife:{
            img1:"https://www.tourmyindia.com/packages-tour-india/wildlife-tour-packages/tmimg/wildlife-img/bandipur-south.webp",
            img2:"https://www.tourmyindia.com/packages-tour-india/wildlife-tour-packages/tmimg/wildlife-img/madumalai-south.webp",
            img3:"https://www.tourmyindia.com/packages-tour-india/wildlife-tour-packages/tmimg/wildlife-img/karnataka-south.webp",
            img4:"https://www.tourmyindia.com/packages-tour-india/wildlife-tour-packages/tmimg/wildlife-img/nagarhole-south.webp",
            img5:"https://www.tourmyindia.com/packages-tour-india/wildlife-tour-packages/tmimg/wildlife-img/heritage-south.webp",
            img6:"https://www.tourmyindia.com/packages-tour-india/wildlife-tour-packages/tmimg/wildlife-img/bird-watching-south.webp",
            img7:"https://www.tourmyindia.com/packages-tour-india/wildlife-tour-packages/tmimg/wildlife-img/bandipur-safari-south.webp",
            heading1:"Bandipur Wild Life",
            heading2:"Banidipur & Madhumalai Safari",
            heading3:"Karnataka Wildlife Tour",
            heading4:"South Heritage & Wildlife",
            heading5:"South India Birding",
            heading6:"Bandipur Weekend Safari",
            heading7:"Nagarhole Safari Tour"
           },
           eastwildlife:{
            img1:"https://www.tourmyindia.com/packages-tour-india/wildlife-tour-packages/tmimg/wildlife-img/kaziranga-east.webp",
            img2:"https://www.tourmyindia.com/packages-tour-india/wildlife-tour-packages/tmimg/wildlife-img/sundarban-east.webp",
            img3:"https://www.tourmyindia.com/packages-tour-india/wildlife-tour-packages/tmimg/wildlife-img/north-east.webp",
            img4:"https://www.tourmyindia.com/packages-tour-india/wildlife-tour-packages/tmimg/wildlife-img/assam-east.webp",
            img5:"https://www.tourmyindia.com/packages-tour-india/wildlife-tour-packages/tmimg/wildlife-img/nameri-north.webp",
            img6:"https://www.tourmyindia.com/packages-tour-india/wildlife-tour-packages/tmimg/wildlife-img/manas-east.webp",
            img7:"https://www.tourmyindia.com/packages-tour-india/wildlife-tour-packages/tmimg/wildlife-img/arunachal-east.webp",
            heading1:"Kaziranga Wildlife Safari",
            heading2:"Sundarban Wildlife Safari",
            heading3:"Northeast India Wildlife",
            heading4:"Assam Wildlife Tour",
            heading5:"Nameri & Kaziranga Wildlife",
            heading6:"Assam's Wild Gems",
            heading7:"Eastern Wildlife Adventure"

           },
           westwildlife:{
            img1:"https://www.tourmyindia.com/packages-tour-india/wildlife-tour-packages/tmimg/wildlife-img/tadoba-west.webp",
            img2:"https://www.tourmyindia.com/packages-tour-india/wildlife-tour-packages/tmimg/wildlife-img/gir-west.webp",
            img3:"https://www.tourmyindia.com/packages-tour-india/wildlife-tour-packages/tmimg/wildlife-img/pench-west.webp",
            img4:"https://www.tourmyindia.com/packages-tour-india/wildlife-tour-packages/tmimg/wildlife-img/lion-safari-west.webp",
            img5:"https://www.tourmyindia.com/packages-tour-india/wildlife-tour-packages/tmimg/wildlife-img/gujarat-heritage-west.webp",
            img6:"https://www.tourmyindia.com/packages-tour-india/wildlife-tour-packages/tmimg/wildlife-img/expedition-west.webp",
            img7:"https://www.tourmyindia.com/packages-tour-india/wildlife-tour-packages/tmimg/wildlife-img/nagzira-west.webp",
            heading1:"Todoba Tiger Terrain",
            heading2:"Gujarat Lion Quest",
            heading3:"Forest Trio Safari",
            heading4:"Big Cat Adventure",
            heading5:"Gujarat's Wild Lagacy",
            heading6:"WildLife Expedition India",
            heading7:"Todoba & Nagzira Tour"

           }

    }


   function northindia(){
      document.getElementById("img1").src = wildlife.northwildlife.img1
      document.getElementById("img2").src = wildlife.northwildlife.img2
      document.getElementById("img3").src = wildlife.northwildlife.img3
      document.getElementById("img4").src = wildlife.northwildlife.img4
      document.getElementById("img5").src = wildlife.northwildlife.img5
      document.getElementById("img6").src = wildlife.northwildlife.img6
      document.getElementById("img7").src = wildlife.northwildlife.img7
      document.getElementById("heading1").innerText = wildlife.northwildlife.heading1
      document.getElementById("heading2").innerText = wildlife.northwildlife.heading2
      document.getElementById("heading3").innerText = wildlife.northwildlife.heading3
      document.getElementById("heading4").innerText = wildlife.northwildlife.heading4
      document.getElementById("heading5").innerText = wildlife.northwildlife.heading5
      document.getElementById("heading6").innerText = wildlife.northwildlife.heading6
      document.getElementById("heading7").innerText = wildlife.northwildlife.heading7

    }

    function southindia(){
      document.getElementById("img1").src = wildlife.southwildlife.img1
      document.getElementById("img2").src = wildlife.southwildlife.img2
      document.getElementById("img3").src = wildlife.southwildlife.img3
      document.getElementById("img4").src = wildlife.southwildlife.img4
      document.getElementById("img5").src = wildlife.southwildlife.img5
      document.getElementById("img6").src = wildlife.southwildlife.img6
      document.getElementById("img7").src = wildlife.southwildlife.img7
      document.getElementById("heading1").innerText = wildlife.southwildlife.heading1
      document.getElementById("heading2").innerText = wildlife.southwildlife.heading2
      document.getElementById("heading3").innerText = wildlife.southwildlife.heading3
      document.getElementById("heading4").innerText = wildlife.southwildlife.heading4
      document.getElementById("heading5").innerText = wildlife.southwildlife.heading5
      document.getElementById("heading6").innerText = wildlife.southwildlife.heading6
      document.getElementById("heading7").innerText = wildlife.southwildlife.heading7

    }

    function eastindia(){
      document.getElementById("img1").src = wildlife.eastwildlife.img1
      document.getElementById("img2").src = wildlife.eastwildlife.img2
      document.getElementById("img3").src = wildlife.eastwildlife.img3
      document.getElementById("img4").src = wildlife.eastwildlife.img4
      document.getElementById("img5").src = wildlife.eastwildlife.img5
      document.getElementById("img6").src = wildlife.eastwildlife.img6
      document.getElementById("img7").src = wildlife.eastwildlife.img7
      document.getElementById("heading1").innerText = wildlife.eastwildlife.heading1
      document.getElementById("heading2").innerText = wildlife.eastwildlife.heading2
      document.getElementById("heading3").innerText = wildlife.eastwildlife.heading3
      document.getElementById("heading4").innerText = wildlife.eastwildlife.heading4
      document.getElementById("heading5").innerText = wildlife.eastwildlife.heading5
      document.getElementById("heading6").innerText = wildlife.eastwildlife.heading6
      document.getElementById("heading7").innerText = wildlife.eastwildlife.heading7

    }
        function westindia(){
      document.getElementById("img1").src = wildlife.westwildlife.img1
      document.getElementById("img2").src = wildlife.westwildlife.img2
      document.getElementById("img3").src = wildlife.westwildlife.img3
      document.getElementById("img4").src = wildlife.westwildlife.img4
      document.getElementById("img5").src = wildlife.westwildlife.img5
      document.getElementById("img6").src = wildlife.westwildlife.img6
      document.getElementById("img7").src = wildlife.westwildlife.img7
      document.getElementById("heading1").innerText = wildlife.westwildlife.heading1
      document.getElementById("heading2").innerText = wildlife.westwildlife.heading2
      document.getElementById("heading3").innerText = wildlife.westwildlife.heading3
      document.getElementById("heading4").innerText = wildlife.westwildlife.heading4
      document.getElementById("heading5").innerText = wildlife.westwildlife.heading5
      document.getElementById("heading6").innerText = wildlife.westwildlife.heading6
      document.getElementById("heading7").innerText = wildlife.westwildlife.heading7

    }

    // ****************************************************************************************************************


    const wildlifepackages = {
      wildlifesafari:{
        pic1:"https://www.tourmyindia.com/packages-tour-india/wildlife-tour-packages/tmimg/wildlife-img/north-east-wildlife.webp",
        pic2:"https://www.tourmyindia.com/packages-tour-india/wildlife-tour-packages/tmimg/wildlife-img/jaldapara-wildlife.webp",
        pic3:"https://www.tourmyindia.com/packages-tour-india/wildlife-tour-packages/tmimg/wildlife-img/kaziranga1-wildlife.webp",
        pic4:"https://www.tourmyindia.com/packages-tour-india/wildlife-tour-packages/tmimg/wildlife-img/nameri-wildlife.webp",
        pic5:"https://www.tourmyindia.com/packages-tour-india/wildlife-tour-packages/tmimg/wildlife-img/hoolock-wildlife.webp",
        pic6:"https://www.tourmyindia.com/packages-tour-india/wildlife-tour-packages/tmimg/wildlife-img/three-parks-wildllife.webp",
        pic7:"https://www.tourmyindia.com/packages-tour-india/wildlife-tour-packages/tmimg/wildlife-img/tribe-wildlife.webp",
        pic8:"https://www.tourmyindia.com/packages-tour-india/wildlife-tour-packages/tmimg/wildlife-img/rhino-tiger.webp",
        pic9:"https://www.tourmyindia.com/packages-tour-india/wildlife-tour-packages/tmimg/wildlife-img/meghalaya-wildlife.webp",
        pic10:"https://www.tourmyindia.com/packages-tour-india/wildlife-tour-packages/tmimg/wildlife-img/arunachal-wildlife.webp",
        pic11:"https://www.tourmyindia.com/packages-tour-india/wildlife-tour-packages/tmimg/wildlife-img/jim-corbett-tiger.webp",
        pic12:"https://www.tourmyindia.com/packages-tour-india/wildlife-tour-packages/tmimg/wildlife-img/bangalore-tiger.webp"
      },
      Rhinosafari:{
         pic1:"https://www.tourmyindia.com/packages-tour-india/wildlife-tour-packages/tmimg/wildlife-img/north-east-wildlife.webp",
        pic2:"https://www.tourmyindia.com/packages-tour-india/wildlife-tour-packages/tmimg/wildlife-img/rhino-wildlife.webp",
        pic3:"https://www.tourmyindia.com/packages-tour-india/wildlife-tour-packages/tmimg/wildlife-img/north-nepal-wildlife.webp",
        pic4:"https://www.tourmyindia.com/packages-tour-india/wildlife-tour-packages/tmimg/wildlife-img/jaldapara-wildlife.webp",
        pic5:"https://www.tourmyindia.com/packages-tour-india/wildlife-tour-packages/tmimg/wildlife-img/kaziranga1-wildlife.webp",
        pic6:"https://www.tourmyindia.com/packages-tour-india/wildlife-tour-packages/tmimg/wildlife-img/nameri-wildlife.webp",
        pic7:"https://www.tourmyindia.com/packages-tour-india/wildlife-tour-packages/tmimg/wildlife-img/hoolock-wildlife.webp",
        pic8:"https://cdn.pixabay.com/photo/2021/11/16/00/43/rhinoceros-6799726_1280.jpg",
        pic9:"https://cdn.pixabay.com/photo/2016/11/18/22/26/rhinoceros-1837164_1280.jpg",
        pic10:"https://cdn.pixabay.com/photo/2018/10/19/10/35/rhino-3758352_1280.jpg",
        pic11:"https://cdn.pixabay.com/photo/2014/09/16/01/31/white-rhinoceros-447709_1280.jpg",
        pic12:"https://cdn.pixabay.com/photo/2014/09/19/13/53/white-rhinoceros-452512_1280.jpg",

     
      },
      lionsafari:{
        pic1:"https://www.tourmyindia.com/packages-tour-india/wildlife-tour-packages/tmimg/wildlife-img/gir1-wildlife.webp",
        pic2:"https://www.tourmyindia.com/packages-tour-india/wildlife-tour-packages/tmimg/wildlife-img/gir-forest.webp",
        pic3:"https://www.tourmyindia.com/packages-tour-india/wildlife-tour-packages/tmimg/wildlife-img/gujarat-wildlife.webp",
        pic4:"https://cdn.pixabay.com/photo/2019/02/14/18/57/male-lion-3997167_1280.jpg",
        pic5:"https://cdn.pixabay.com/photo/2014/12/12/19/45/lion-565820_1280.jpg",
        pic6:"https://cdn.pixabay.com/photo/2019/12/22/09/31/lion-4712141_1280.jpg",
        pic7:"https://cdn.pixabay.com/photo/2023/06/29/10/33/lion-8096155_1280.png",
        pic8:"https://cdn.pixabay.com/photo/2018/04/13/21/24/lion-3317670_1280.jpg",
        pic9:"https://cdn.pixabay.com/photo/2012/03/04/00/09/lions-21787_1280.jpg",
        pic10:"https://cdn.pixabay.com/photo/2023/03/05/17/58/lion-7831966_1280.jpg",
        pic11:"https://cdn.pixabay.com/photo/2020/05/15/15/13/baby-lion-5173894_1280.jpg",
        pic12:"https://cdn.pixabay.com/photo/2019/05/14/14/31/white-lion-family-4202566_1280.jpg"
      },
      birds:{
         pic1:"https://www.tourmyindia.com/packages-tour-india/wildlife-tour-packages/tmimg/wildlife-img/assam-birding.webp",
        pic2:"https://www.tourmyindia.com/packages-tour-india/wildlife-tour-packages/tmimg/wildlife-img/namdapha-birding.webp",
        pic3:"https://www.tourmyindia.com/packages-tour-india/wildlife-tour-packages/tmimg/wildlife-img/eaglenest-birding.webp",
        pic4:"https://www.tourmyindia.com/packages-tour-india/wildlife-tour-packages/tmimg/wildlife-img/lava-birding.webp",
        pic5:"https://www.tourmyindia.com/packages-tour-india/wildlife-tour-packages/tmimg/wildlife-img/north-east-birding.webp",
        pic6:"https://www.tourmyindia.com/packages-tour-india/wildlife-tour-packages/tmimg/wildlife-img/west-bengal-birding.webp",
        pic7:"https://www.tourmyindia.com/packages-tour-india/wildlife-tour-packages/tmimg/wildlife-img/north-india-birding.webp",
        pic8:"https://www.tourmyindia.com/packages-tour-india/wildlife-tour-packages/tmimg/wildlife-img/east-india-birding.webp",
        pic9:"https://www.tourmyindia.com/packages-tour-india/wildlife-tour-packages/tmimg/wildlife-img/gujarat-birding.webp",
        pic10:"https://www.tourmyindia.com/packages-tour-india/wildlife-tour-packages/tmimg/wildlife-img/corbett-birding.webp",
        pic11:"https://www.tourmyindia.com/packages-tour-india/wildlife-tour-packages/tmimg/wildlife-img/jim-birding.webp",
        pic12:"https://www.tourmyindia.com/packages-tour-india/wildlife-tour-packages/tmimg/wildlife-img/jim-corbett-birding.webp"

      },
      photography:{
        pic1:"https://www.tourmyindia.com/packages-tour-india/wildlife-tour-packages/tmimg/wildlife-img/bandhavgarh-photography.webp",
        pic2:"https://www.tourmyindia.com/packages-tour-india/wildlife-tour-packages/tmimg/wildlife-img/pench-photography.webp",
        pic3:"https://www.tourmyindia.com/packages-tour-india/wildlife-tour-packages/tmimg/wildlife-img/india-tiger.webp",
        pic4:"https://www.tourmyindia.com/packages-tour-india/wildlife-tour-packages/tmimg/wildlife-img/jim-corbett-tiger.webp",
        pic5:" https://cdn.pixabay.com/photo/2017/12/17/15/58/mouflon-3024471_1280.jpg",
        pic6:"https://cdn.pixabay.com/photo/2016/11/29/07/24/amphibian-1868079_1280.jpg",
        pic7:"https://cdn.pixabay.com/photo/2016/11/23/01/15/red-panda-1851650_1280.jpg",
        pic8:"https://cdn.pixabay.com/photo/2016/11/20/11/09/winter-1842508_1280.jpg",
        pic9:"https://cdn.pixabay.com/photo/2016/09/30/11/54/owl-1705112_1280.jpg",
        pic10:"https://cdn.pixabay.com/photo/2017/08/19/10/00/eagle-2657888_1280.jpg",
        pic11:"https://cdn.pixabay.com/photo/2019/03/09/16/43/meerkat-4044441_1280.jpg",
        pic12:"https://cdn.pixabay.com/photo/2017/06/21/13/37/lizard-2427248_1280.jpg",
      },
      snow:{
        pic1:"https://cdn.pixabay.com/photo/2023/06/13/12/10/snow-leopard-baby-8060809_1280.jpg",
        pic2:"https://cdn.pixabay.com/photo/2015/04/16/10/22/snow-leopard-725384_1280.jpg",
        pic3:"https://cdn.pixabay.com/photo/2015/09/09/08/40/snow-leopard-931222_1280.jpg",
        pic4:"https://cdn.pixabay.com/photo/2023/06/04/08/35/snow-leopard-baby-8039147_1280.jpg",
        pic5:"https://cdn.pixabay.com/photo/2015/04/16/10/22/snow-leopard-725385_1280.jpg",
        pic6:"https://cdn.pixabay.com/photo/2017/07/04/09/33/snow-leopard-2470440_1280.jpg",
        pic7:"https://cdn.pixabay.com/photo/2016/11/24/00/44/snow-leopard-1855168_1280.jpg",
        pic8:"https://cdn.pixabay.com/photo/2015/08/19/20/27/snow-leopard-896603_1280.jpg",
        pic9:"https://cdn.pixabay.com/photo/2017/07/19/06/42/animals-2518152_1280.jpg",
        pic10:"https://cdn.pixabay.com/photo/2018/05/14/18/52/snow-leopard-3401238_1280.jpg",
        pic11:"https://cdn.pixabay.com/photo/2017/10/26/05/05/snow-leopard-2890067_1280.jpg",
        pic12:"https://cdn.pixabay.com/photo/2023/02/04/18/23/amur-leopard-7767847_1280.jpg",

      }
    }


    function wildlifesafari() {
      document.getElementById("pic1").src = wildlifepackages.wildlifesafari.pic1
      document.getElementById("pic2").src = wildlifepackages.wildlifesafari.pic2
      document.getElementById("pic3").src = wildlifepackages.wildlifesafari.pic3
      document.getElementById("pic4").src = wildlifepackages.wildlifesafari.pic4
      document.getElementById("pic5").src = wildlifepackages.wildlifesafari.pic5
      document.getElementById("pic6").src = wildlifepackages.wildlifesafari.pic6
      document.getElementById("pic7").src = wildlifepackages.wildlifesafari.pic7
      document.getElementById("pic8").src = wildlifepackages.wildlifesafari.pic8
      document.getElementById("pic9").src = wildlifepackages.wildlifesafari.pic9
      document.getElementById("pic10").src = wildlifepackages.wildlifesafari.pic10
      document.getElementById("pic11").src = wildlifepackages.wildlifesafari.pic11
      document.getElementById("pic12").src = wildlifepackages.wildlifesafari.pic12
    }

     function Rhinosafari() {
      document.getElementById("pic1").src = wildlifepackages.Rhinosafari.pic1
      document.getElementById("pic2").src = wildlifepackages.Rhinosafari.pic2
      document.getElementById("pic3").src = wildlifepackages.Rhinosafari.pic3
      document.getElementById("pic4").src = wildlifepackages.Rhinosafari.pic4
      document.getElementById("pic5").src = wildlifepackages.Rhinosafari.pic5
      document.getElementById("pic6").src = wildlifepackages.Rhinosafari.pic6
      document.getElementById("pic7").src = wildlifepackages.Rhinosafari.pic7
      document.getElementById("pic8").src = wildlifepackages.Rhinosafari.pic8
      document.getElementById("pic9").src = wildlifepackages.Rhinosafari.pic9
      document.getElementById("pic10").src = wildlifepackages.Rhinosafari.pic10
      document.getElementById("pic11").src = wildlifepackages.Rhinosafari.pic11
      document.getElementById("pic12").src = wildlifepackages.Rhinosafari.pic12
      
      
    }

    function lionsafari() {
      document.getElementById("pic1").src = wildlifepackages.lionsafari.pic1
      document.getElementById("pic2").src = wildlifepackages.lionsafari.pic2
      document.getElementById("pic3").src = wildlifepackages.lionsafari.pic3
      document.getElementById("pic4").src = wildlifepackages.lionsafari.pic4
      document.getElementById("pic5").src = wildlifepackages.lionsafari.pic5
      document.getElementById("pic6").src = wildlifepackages.lionsafari.pic6
      document.getElementById("pic7").src = wildlifepackages.lionsafari.pic7
      document.getElementById("pic8").src = wildlifepackages.lionsafari.pic8
      document.getElementById("pic9").src = wildlifepackages.lionsafari.pic9
      document.getElementById("pic10").src = wildlifepackages.lionsafari.pic10
      document.getElementById("pic11").src = wildlifepackages.lionsafari.pic11
      document.getElementById("pic12").src = wildlifepackages.lionsafari.pic12
    }    

   function Birds() {
      document.getElementById("pic1").src = wildlifepackages.birds.pic1
      document.getElementById("pic2").src = wildlifepackages.birds.pic2
      document.getElementById("pic3").src = wildlifepackages.birds.pic3
      document.getElementById("pic4").src = wildlifepackages.birds.pic4
      document.getElementById("pic5").src = wildlifepackages.birds.pic5
      document.getElementById("pic6").src = wildlifepackages.birds.pic6
      document.getElementById("pic7").src = wildlifepackages.birds.pic7
      document.getElementById("pic8").src = wildlifepackages.birds.pic8
      document.getElementById("pic9").src = wildlifepackages.birds.pic9
      document.getElementById("pic10").src = wildlifepackages.birds.pic10
      document.getElementById("pic11").src = wildlifepackages.birds.pic11
      document.getElementById("pic12").src = wildlifepackages.birds.pic12
    }    

  function photography(){
    document.getElementById("pic1").src = wildlifepackages.photography.pic1
      document.getElementById("pic2").src = wildlifepackages.photography.pic2
      document.getElementById("pic3").src = wildlifepackages.photography.pic3
      document.getElementById("pic4").src = wildlifepackages.photography.pic4
       document.getElementById("pic5").src = wildlifepackages.photography.pic5
      document.getElementById("pic6").src = wildlifepackages.photography.pic6
      document.getElementById("pic7").src = wildlifepackages.photography.pic7
      document.getElementById("pic8").src = wildlifepackages.photography.pic8
      document.getElementById("pic9").src = wildlifepackages.photography.pic9
      document.getElementById("pic10").src = wildlifepackages.photography.pic10
      document.getElementById("pic11").src = wildlifepackages.photography.pic11
      document.getElementById("pic12").src = wildlifepackages.photography.pic12
  }  

  function snow(){
    document.getElementById("pic1").src = wildlifepackages.snow.pic1
      document.getElementById("pic2").src = wildlifepackages.snow.pic2
      document.getElementById("pic3").src = wildlifepackages.snow.pic3
      document.getElementById("pic4").src = wildlifepackages.snow.pic4
       document.getElementById("pic5").src = wildlifepackages.snow.pic5
      document.getElementById("pic6").src = wildlifepackages.snow.pic6
      document.getElementById("pic7").src = wildlifepackages.snow.pic7
      document.getElementById("pic8").src = wildlifepackages.snow.pic8
      document.getElementById("pic9").src = wildlifepackages.snow.pic9
      document.getElementById("pic10").src = wildlifepackages.snow.pic10
      document.getElementById("pic11").src = wildlifepackages.snow.pic11
      document.getElementById("pic12").src = wildlifepackages.snow.pic12
  }  

  // ******************************************************************************************

  const packages = {
    life:{
      title1:"The majesty and allure of the tiger, India's iconic big cat, have drawn wildlife enthusiasts from around the world for decades. While these magnificent creatures inhabit various national parks and tiger reserves throughout India, the optimal time for sighting them is during the warmer months of April to June. During this period, the scorching heat causes water bodies within the reserves to shrink, prompting tigers to frequently visit the few remaining waterholes. Such predictability increases the chances of spotting them.",
      title2:"The foliage is less dense too, making the orange and black stripes of the tiger stand out amidst the golden-brown landscapes. Parks like Ranthambhore, Bandhavgarh, and Kanha become bustling hubs for photographers and nature lovers during these months. Venturing on a safari during this window not only heightens the chance of a tiger encounter but also immerses visitors in the rich tapestry of Indian wildlife. So, for an unforgettable tiger experience, time your visit to these peak months.",
      pitures1:"https://www.tourmyindia.com/packages-tour-india/wildlife-tour-packages/tmimg/wildlife-img/tiger-sighting-img.webp"
    },
    birdswatching:{
      title1:"India is a paradise for bird enthusiasts, offering a rich tapestry of avian wonders. For those seeking the ultimate birding experience in India, the months between November and March are the prime season for bird watching. During this period, resident birds display vibrant activities, and migratory species from Central Asia and Europe flock to India, enhancing its allure.",
      title2:"Embarking on a bird-watching tour during these cooler months allows enthusiasts to witness an array of colorful and exotic species in all their splendor. Popular birding sanctuaries in India, such as Keoladeo National Park in Bharatpur, Nal Sarovar Bird Sanctuary, and Sultanpur National Park, become bustling hubs of activity. The serene mornings, accompanied by melodious calls echoing in the crisp air, amplify the bird-watching experience. Plan your visit to capture the avian magic of India at its finest.",
      pitures1:"https://www.tourmyindia.com/packages-tour-india/wildlife-tour-packages/tmimg/wildlife-img/bird-watching-img.webp"
    },
    tigher:{
      title1:"India is a haven for wildlife enthusiasts and photographers, offering a plethora of national parks and tiger reserves. From 1st October to June, India's doors open wide to the world of wildlife tourism. During these months, the country's diverse landscapes - spanning from the chilly northern regions to the warm southern coasts, and from the lush eastern forests to the rugged western terrains - become a hotspot for jungle safaris.",
      title2:"The weather conditions during this period are most favorable for exploring, and every national park and tiger reserve in India is ready to welcome wildlife enthusiasts. It's the perfect time to embark on a journey through India's rich natural heritage, witnessing the majestic beauty that resides within its boundaries.",
      pitures1:"https://www.tourmyindia.com/packages-tour-india/wildlife-tour-packages/tmimg/wildlife-img/wildlife-safari-img.webp"
    }
  }


  function tigher(){
    document.getElementById("btn").style.fontWeight = "bolder"
    document.getElementById("btn1").style.fontWeight = "100"
    document.getElementById("btn2").style.fontWeight = "100"
    document.getElementById("title1").innerText = packages.tigher.title1
    document.getElementById("title2").innerText = packages.tigher.title2
    document.getElementById("pitures").src = packages.tigher.pitures1

  }




  function visit(){
    document.getElementById("btn1").style.fontWeight = "bolder"
    document.getElementById("btn").style.fontWeight = "100"
    document.getElementById("btn2").style.fontWeight = "100"
    document.getElementById("title1").innerText = packages.life.title1
    document.getElementById("title2").innerText = packages.life.title2
    document.getElementById("pitures").src = packages.life.pitures1
   
  }

   function birdswatching(){
    document.getElementById("btn").style.fontWeight = "100"
    document.getElementById("btn1").style.fontWeight = "100"
    document.getElementById("btn2").style.fontWeight = "bolder"
    document.getElementById("title1").innerText = packages.birdswatching.title1
    document.getElementById("title2").innerText = packages.birdswatching.title2
    document.getElementById("pitures").src = packages.birdswatching.pitures1
   
  }
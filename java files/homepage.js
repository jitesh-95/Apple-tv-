
$('.small_best_pictures').slick({
  infinite: false,
  slidesToShow: 4,
  slidesToScroll: 3
});

var seasonsData=[
  {Image : "https://is2-ssl.mzstatic.com/image/thumb/GT66HoV8VJL1IZwaqos_TQ/738x416.webp"},
  {Image : "https://is3-ssl.mzstatic.com/image/thumb/AWDRdQz0nepFpnsUNiTDuw/738x416.webp"},
  {Image : "https://is2-ssl.mzstatic.com/image/thumb/qYEYYvFXN2O4zEuCcBSbjw/738x416.webp"},
  {Image : "https://is4-ssl.mzstatic.com/image/thumb/UPoQbHoPte_TFJXEvKIIsw/738x416.webp"},
  {Image : "https://is4-ssl.mzstatic.com/image/thumb/AmQ1cNEzc1DMKH25B5J9aQ/738x416.webp"},
  {Image : "https://is5-ssl.mzstatic.com/image/thumb/Dulsu9pd-BdMQHgEvp2z_A/738x416.webp"},
  {Image : "https://is2-ssl.mzstatic.com/image/thumb/6tJakyTEtS0vrgdc9POZpg/738x416.webp"},
  {Image : "https://is3-ssl.mzstatic.com/image/thumb/kVTKGnVvCdFlB1sZeKa8YQ/738x416.webp"},
  {Image : "https://is2-ssl.mzstatic.com/image/thumb/dbEKo7rp5RGNNDrCbA7AUQ/738x416.webp"},
  {Image : "https://is4-ssl.mzstatic.com/image/thumb/L4WNJNV3nbmyAL6MQSeGuw/738x416.webp"},
  {Image : "https://is2-ssl.mzstatic.com/image/thumb/SEsiWD2cTDShiJqUtRPAxg/738x416.webp"},
  {Image : "https://is4-ssl.mzstatic.com/image/thumb/vWs6dt5xDhG_DjIoc-89tA/738x416.webp"},
  {Image : "https://is2-ssl.mzstatic.com/image/thumb/vB48H4eBprLJ-WdCBTA6cw/738x416.webp"},
  {Image : "https://is3-ssl.mzstatic.com/image/thumb/_VWBeTzPLn6LeyUjlTaSiQ/738x416.webp"},
  {Image : "https://is4-ssl.mzstatic.com/image/thumb/Iz8wdsRXYRysnRRCY0yMrA/738x416.webp"},
  {Image : "https://is3-ssl.mzstatic.com/image/thumb/3iAbZQ4pznOpDRenkvOhNA/738x416.webp"},
  {Image : "https://is1-ssl.mzstatic.com/image/thumb/VXktJkcnADdcq8RjZVT_nw/738x416.webp"},
  {Image : "https://is1-ssl.mzstatic.com/image/thumb/yXhlXOFkS9yJ1kMmOhfIbg/738x416.webp"},
  {Image : "https://is4-ssl.mzstatic.com/image/thumb/rZ34KsuVSjdutVP-0HO95A/738x416.webp"},
  {Image : "https://is5-ssl.mzstatic.com/image/thumb/y-GzfKyC0y6x5Dd8254GpQ/738x416.webp"},
  {Image : "https://is2-ssl.mzstatic.com/image/thumb/le6mxqLNaXH47MHIH7stzw/738x416.webp"},
  {Image : "https://is1-ssl.mzstatic.com/image/thumb/RHDyosPjHXJc01IiulkQSg/738x416.webp"},
  {Image : "https://is1-ssl.mzstatic.com/image/thumb/mqP1mK0HzuFhIBXsd_Q_SA/738x416.webp"},
  {Image : "https://is4-ssl.mzstatic.com/image/thumb/h8oGFN-jdPeHY8j3EM_WnQ/738x416.webp"},
  {Image : "https://is4-ssl.mzstatic.com/image/thumb/EjmCDwq97jEEe9RuKY7aNw/738x416.webp"},
  {Image : "https://is5-ssl.mzstatic.com/image/thumb/Cof8vC9vaCH-GYX6JltrQA/738x416.webp"},
  {Image : "https://is3-ssl.mzstatic.com/image/thumb/_ODFuW8DJbcFSHL_yhHuVA/738x416.webp"},
  {Image : "https://is3-ssl.mzstatic.com/image/thumb/hMPxF7vkj44eqAbnFymHDQ/738x416.webp"},
  {Image : "https://is3-ssl.mzstatic.com/image/thumb/D8bOyY8jg5hymGMxt1LSZg/738x416.webp"},
  {Image : "https://is3-ssl.mzstatic.com/image/thumb/eGnsZyr_h0ivXT0r4jbaew/738x416.webp"},
  {Image : "https://is5-ssl.mzstatic.com/image/thumb/NHLksWLSZpTcIw36-n7vWA/738x416.webp"},
  
];

seasonsData.map(function(elem){
  var innerdiv = document.createElement("div");
  var img = document.createElement("img");
  img.src = elem.Image;
  innerdiv.append(img)
  innerdiv.setAttribute("class","inner_seasons")
  document.querySelector(".all_seasons_div").append(innerdiv);
})


$('.all_seasons_div').slick({
  dots: false,
  infinite: false,
  speed: 650,
  slidesToShow: 5,
  slidesToScroll: 5,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
});

var latest_original = [
  {image : "https://is1-ssl.mzstatic.com/image/thumb/Tb1jarRHaWN_SFiMjZcDHw/1478x832.webp",
  head : "DRAMA",
  subhead : "Pachinko",
  description : "Take a powerful journey with four generations of a Korean immigrant family."},

  {image : "https://is1-ssl.mzstatic.com/image/thumb/lN-bUPh0Botn7U7jKgbnFg/1478x832.webp",
  head : "DRAMA",
  subhead : "WeCrashed",
  description : "Jared Leto and Anne Hathaway star in a series inspired by actual events."},

  {image : "https://is3-ssl.mzstatic.com/image/thumb/HGw-QzsXlYUDp68NCOvxZQ/1478x832.webp",
  head : "KIDS & FAMILY",
  subhead : "Stillwater",
  description : "Marvel in a new season of beautiful and engaging stories—and meet Koo."},

  {image : "https://is4-ssl.mzstatic.com/image/thumb/Ro6cUnMcHLf3sEVL38YlRg/1478x832.webp",
  head : "DRAMA",
  subhead : "The Last Days of Ptolemy Grey",
  description : "Samuel L. Jackson stars in a gripping series about family, memory, and legacy."},

  {image : "https://is1-ssl.mzstatic.com/image/thumb/UtRuOihF2zNFPo4g5zUwdA/1478x832.webp",
  head : "KIDS & FAMILY",
  subhead : "The Snoopy Show",
  description : "The world-famous beagle is back for a new season of adventures with his pals."},

  {image : "https://is2-ssl.mzstatic.com/image/thumb/qAk-30MspnyIG9hVKJ1qKQ/1478x832.webp",
  head : "DOCUMENTRY",
  subhead : "Dear...",
  description : "Profiles of society's most iconic figure and the lives of those they've inspired."},

  {image : "https://is1-ssl.mzstatic.com/image/thumb/RHDyosPjHXJc01IiulkQSg/1478x832.webp",
  head : "ANIMATION",
  subhead : "Central Park",
  description : "The Tillerman family returns with new episodes of the toe-tapping musical fun."},

  {image : "https://is1-ssl.mzstatic.com/image/thumb/a99v9iRDYcIGof0CvxUUoA/1478x832.webp",
  head : "COMEDY",
  subhead : "The Problem With Jon Stewart",
  description : "Jon Stewart brings people together to highlight solutions for a problem."},

  {image : "https://is2-ssl.mzstatic.com/image/thumb/78-I7VenST4ztZYfwMf6AQ/1478x832.webp",
  head : "THRILLER",
  subhead : "Severance",
  description : "Adam Scott start in this darkly gripping series from director Ben Stiller."},

  {image : "https://is1-ssl.mzstatic.com/image/thumb/L79If4rL5GAF2ffGc7jBRg/1478x832.webp",
  head : "DOCUMENTRY",
  subhead : "Lincoln's Dilemma",
  description : "Diverse voices offer a 21st-century take on Lincoln's legacy and stance on slavery."},

  {image : "https://is3-ssl.mzstatic.com/image/thumb/cyRvgYnPlaVn3rN2SDdW1Q/1478x832.webp",
  head : "DRAMA",
  subhead : "The Sky Is Everywhere",
  description : "A conflicted teen navugates first love-and first loss-using her vivid imagination."},

  {image : "https://is5-ssl.mzstatic.com/image/thumb/_Kq-GgPdDxxqWtSZ9GbHug/1478x832.webp",
  head : "KIDS & FAMILY",
  subhead : "Pretzel and the Puppies",
  description : "Meet a lovable dachshund family ready to make their bark on the world."},
];

latest_original.map(function(elem){
  var bigdiv = document.createElement("div");
  bigdiv.setAttribute("class", "d-flex bigdiv");

  var imagediv = document.createElement("div")
  var img = document.createElement("img");
  img.src = elem.image;
  imagediv.append(img);
  imagediv.setAttribute("class","imagediv");
  
  var details = document.createElement("div")
  details.setAttribute("class","latest_details")
  var heading = document.createElement("p")
  heading.innerText = elem.head;
  heading.setAttribute("class","originals_head")

  var sub = document.createElement("p")
  sub.innerText = elem.subhead;
  var desc = document.createElement("p");
  desc.innerText= elem.description;
  desc.setAttribute("class", "originals_head");

  details.append(heading,sub,desc);

  bigdiv.append(imagediv,details);

  document.querySelector(".inside_latest").append(bigdiv);
});

$('.inside_latest').slick({
  dots: false,
  infinite: false,
  speed: 650,
  slidesToShow: 3,
  slidesToScroll: 3,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
});

var coming_soon = [
  {image : "https://is2-ssl.mzstatic.com/image/thumb/Features126/v4/07/84/03/0784035e-8529-ffc8-2152-4552c5c8e8bc/U0YtVFZBLVdXLVNsb3dfSG9yc2VzLUNTLUJyaWNrX25vQnVnLmxzcg.lsr/1478x832fe.webp",
  link : "",
  tag : "New Series Premieres Friday"},
  {image : "https://is1-ssl.mzstatic.com/image/thumb/Features116/v4/20/24/bb/2024bb46-c79a-08ee-0d54-536bc624fe18/U0YtVFZBLVdXLVBpbmVjb25lX2FuZF9Qb255LVMxLUNTLmxzcg.lsr/1478x832fe.webp",
  link : "",
  tag : "New Series Premieres April 8"},
  {image : "https://is5-ssl.mzstatic.com/image/thumb/Features122/v4/b6/e4/1b/b6e41bbb-cc70-9c67-f3d3-367cb732d23d/U0YtVFZBLVdXLVJvYXItQ1MtQnJpY2tfbm9CdWcubHNy.lsr/1478x832fe.webp",
  link : "",
  tag : "New Series Premieres April 15"},
  {image : "https://is4-ssl.mzstatic.com/image/thumb/Features116/v4/9c/7e/a8/9c7ea8d7-803f-c799-a00d-93c04f2a1266/U0YtVFZBLVdXLVRoZXlfQ2FsbF9NZV9NYWdpYy1DU19Ccmlja19ub0J1Zy5sc3I.lsr/1478x832fe.webp",
  link : "",
  tag : "New Docuseries Premieres April 22"},
  {image : "https://is3-ssl.mzstatic.com/image/thumb/Features116/v4/25/ee/d1/25eed172-b1de-32c4-ea17-be19f53cf21e/U0YtVFZBLVdXLVNoaW5pbmdfR2lybHMtQ1MubHNy.lsr/1478x832fe.webp",
  link : "",
  tag : "New Series Premieres April 29"},
  {image : "https://is2-ssl.mzstatic.com/image/thumb/Features116/v4/62/5d/d9/625dd97e-ae80-5a29-b7db-da054b5d5934/U0YtVFZBLVdXLVRlaHJhbi1TMi1DU19Ccmljay5sc3I.lsr/1478x832fe.webp",
  link : "",
  tag : "New Series Premieres May 6"},
  {image : "https://is4-ssl.mzstatic.com/image/thumb/Features126/v4/6e/a6/98/6ea698d3-a82a-9c96-e56c-07172d95a9a6/U0YtVFZBLVdXLVRoZV9CaWdfQ29ubi1DUy1Ccmljay5sc3I.lsr/1478x832fe.webp",
  link : "",
  tag : "New Series Premieres May 6"},
  {image : "https://is4-ssl.mzstatic.com/image/thumb/Features126/v4/db/02/15/db02156e-e046-638c-0fc0-45fd048535df/U0YtVFZBLVdXLUhhcnJpZXRfdGhlX1NweS0xQi1DU19Ccmljay5sc3I.lsr/1478x832fe.webp",
  link : "",
  tag : "New Series Premieres May 20"},
  {image : "https://is5-ssl.mzstatic.com/image/thumb/Features126/v4/94/24/cd/9424cde4-ab7b-772e-53f4-e4982d50d9d5/U0YtVFZBLVdXLUNoYV9DaGFfUmVhbF9TbW9vdGgtQ1MtQnJpY2subHNy.lsr/1478x832fe.webp",
  link : "",
  tag : "New Series Premieres June 17"},
  {image : "https://is1-ssl.mzstatic.com/image/thumb/Features116/v4/7e/e4/05/7ee40559-a590-1c90-9057-d9e14c76af6d/U0YtVFZBLVdXLUx1Y2stQ1MtQnJpY2stbm9CdWcubHNy.lsr/1478x832fe.webp",
  link : "",
  tag : "New Series Premieres August 5"},
  {image : "https://is1-ssl.mzstatic.com/image/thumb/Features116/v4/45/6e/b2/456eb26a-fd01-665d-ddaa-60558c888f40/U0YtVFZBLVdXLVJheW1vbmRfQW5kX1JheS1DU19Ccmlja19ub0J1Zy5sc3I.lsr/1478x832fe.webp",
  link : "",
  tag : "New Film Coming Soon"},
  {image : "https://is4-ssl.mzstatic.com/image/thumb/Features112/v4/fe/dd/51/fedd5169-db23-fe26-5388-2dccfca3f8bf/VTBZdFZGWkJMVmRYTFZOd2FYSnBkR1ZrTFVOVExVSnlhV05yWDI1dlFuVm5MbXh6Y2cubHNy.lsr/1478x832fe.webp",
  link : "",
  tag : "New Film Coming Soon"},
];

coming_soon.map(function(elem){

  var div = document.createElement("div");
  div.setAttribute("class", "comingSoonData");

  var img = document.createElement("img");
  img.src= elem.image;
  var a_tag = document.createElement("a");
  a_tag.href = elem.link;
  var title = document.createElement("p");
  title.innerText= elem.tag;

  div.append(img,title);
  a_tag.append(div)
  document.querySelector(".inner_coming_soon").append(a_tag);
});

$('.inner_coming_soon').slick({
  dots: false,
  infinite: false,
  speed: 650,
  slidesToShow: 4,
  slidesToScroll: 4,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
});

var big_slides = [
  {image :"https://is2-ssl.mzstatic.com/image/thumb/Features122/v4/cf/08/c2/cf08c2dc-09de-7051-8f45-26bc88e35ec3/5869a9d8-e575-417f-a315-5d78822f6886.png/1320x495sr.png",
  tag : "Every family has its own language.",
  link : ""},
  {image :"https://is3-ssl.mzstatic.com/image/thumb/Features122/v4/67/ad/d0/67add023-9baa-9f3c-3999-0232ee7ab869/07dec570-b1ae-4348-bce7-3ae353ce335b.png/1320x495sr.png",
  tag : "Four generations. One destiny.",
  link : ""},
  {image :"https://is3-ssl.mzstatic.com/image/thumb/Features116/v4/5f/13/62/5f136213-6138-eab4-a3a8-30e56364ac56/RVNXLVRWQS1XVy1UZWRfTGFzc29fUzItQ0NBX0F3YXJkLnBuZw.png/1320x495sr.png",
  tag : "Kindness makes a comeback.",
  link : ""},
  {image :"https://is3-ssl.mzstatic.com/image/thumb/Features126/v4/38/ea/d8/38ead8ac-0cb6-a41f-fcc4-25b0e3e92ff1/RVNXLVRWQS1XVy1Ucm9waHlfQ2FzZV9RdW90ZV9TZXZlcmFuY2UucG5n.png/1320x495sr.png",
  tag : "We’re all different people at work.",
  link : ""},
  {image :"https://is5-ssl.mzstatic.com/image/thumb/Features116/v4/9d/ba/f8/9dbaf8be-aa79-eece-b465-497c7d9fd1fa/RVNXLVRWQS1XVy1Ucm9waHlfQ2FzZV9RdW90ZS1UaGVfQWZ0ZXJwYXJ0eS5wbmc.png/1320x495sr.png",
  tag : "You’d kill for an invite.",
  link : ""},
  {image :"https://is1-ssl.mzstatic.com/image/thumb/Features126/v4/85/3c/c0/853cc067-fb76-5346-2411-705fcc8203de/RVNXLVRWQS1XVy1Td2FuX1NvbmctTkFBQ1BfQXdhcmQucG5n.png/1320x495sr.webp",
  tag : "A thought-provoking exploration of love, loss, and sacrifice.",
  link : ""},
  {image :"https://is1-ssl.mzstatic.com/image/thumb/Features116/v4/7f/50/36/7f5036da-fcf2-21b0-5c22-e1a137459a90/RVNXLVRWQS1XVy1Ucm9waHlfQ2FzZV9RdW90ZS1GaW5jaC1sYW5nPWVuX3VzLnBuZw.png/1320x495sr.webp",
  tag : "Take an unforgettable journey.",
  link : ""},
  {image :"https://is4-ssl.mzstatic.com/image/thumb/Features115/v4/b0/e3/6e/b0e36ee0-6bd7-107d-a106-f06c28c5607e/RVNXLVRWQS1XVy1Ucm9waHlfQ2FzZV9RdW90ZS1Gb3JfQWxsX01hbmtpbmQtbGFuZz1lbl91cy5wbmc.png/1320x495sr.webp",
  tag : "The race continues.",
  link : ""},
];

big_slides.map(function(elem){
  var div = document.createElement("div");
  div.setAttribute("class", "innerBigSlides");

  var img = document.createElement("img");
  img.src= elem.image;
  var a_tag = document.createElement("a");
  a_tag.href = elem.link;
  var title = document.createElement("p");
  title.innerText= elem.tag;

  div.append(img,title);
  a_tag.append(div)

  document.querySelector(".big_slides").append(a_tag);
});

$('.big_slides').slick({
  dots: false,
  infinite: false,
  speed: 650,
  slidesToShow: 1,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
});


var bestpicture=[
  {image: "https://is2-ssl.mzstatic.com/image/thumb/Features112/v4/6f/b7/62/6fb7628d-679f-17db-dbf6-ac52a7debb06/d97eccb1-2dbf-45b5-a35d-452d9496715f.lsr/300x170fe.webp",
  link:""},
  {image: "https://is5-ssl.mzstatic.com/image/thumb/Features112/v4/de/3a/28/de3a2812-29b3-1e25-7941-a99ecb0e327c/851040fe-d937-4c50-b7d2-1188d59a022e.lsr/300x170fe.webp",
  link:""},
  {image: "https://is3-ssl.mzstatic.com/image/thumb/Features116/v4/4d/5e/12/4d5e12e1-9063-1e07-62be-b209b75401ff/19aac7af-1170-4a01-9f9e-b281b54f78df.lsr/300x170fe.webp",
  link:""},
  {image: "https://is4-ssl.mzstatic.com/image/thumb/Features122/v4/6e/6b/c5/6e6bc5c0-0329-5915-f402-3dd9e31b0ad1/0b0c78ef-1abb-44c5-af22-d7f46c5425f1.lsr/300x170fe.webp",
  link:""},
  {image: "https://is4-ssl.mzstatic.com/image/thumb/Features122/v4/ec/04/37/ec04376f-cf86-af1b-c914-444ef8236722/fdd6d9eb-204a-4a18-b69c-1f44af47b952.lsr/300x170fe.webp",
  link:""},
];

bestpicture.map(function(elem){
  var innerdiv = document.createElement("div");
  var img = document.createElement("img");
  img.src = elem.image;
  var a_tag = document.createElement("a");
  a_tag.href = elem.link;
  innerdiv.append(img)
  
  a_tag.append(innerdiv)

  innerdiv.setAttribute("class","picture")
  document.querySelector(".small_best_pictures").append(a_tag);
})

$('.small_best_pictures').slick({
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
        slidesToScroll: 2,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 800,
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
  link : "https://tv.apple.com/us/show/slow-horses/umc.cmc.2szz3fdt71tl1ulnbp8utgq5o?ctx_brand=tvs.sbd.4000",
  tag : "New Series Premieres Friday"},
  {image : "https://is1-ssl.mzstatic.com/image/thumb/Features116/v4/20/24/bb/2024bb46-c79a-08ee-0d54-536bc624fe18/U0YtVFZBLVdXLVBpbmVjb25lX2FuZF9Qb255LVMxLUNTLmxzcg.lsr/1478x832fe.webp",
  link : "ponycartoon.html",
  tag : "New Series Premieres April 8"},
  {image : "https://is5-ssl.mzstatic.com/image/thumb/Features122/v4/b6/e4/1b/b6e41bbb-cc70-9c67-f3d3-367cb732d23d/U0YtVFZBLVdXLVJvYXItQ1MtQnJpY2tfbm9CdWcubHNy.lsr/1478x832fe.webp",
  link : "https://tv.apple.com/us/show/roar/umc.cmc.2os8kmimhw58fqxcu7xcmx8hd?ctx_brand=tvs.sbd.4000",
  tag : "New Series Premieres April 15"},
  {image : "https://is2-ssl.mzstatic.com/image/thumb/Features112/v4/0f/4b/ea/0f4bead0-e7ae-e445-b28a-00124b9703d7/11cc5cd7-dba6-4d5d-9952-b9912731587b.lsr/1478x832fe.webp",
  link : "https://tv.apple.com/us/movie/snoopy-presents-its-the-small-things-charlie-brown/umc.cmc.gr1rsr9lp2tzfwb0w6zhq9y3?ctx_brand=tvs.sbd.4000",
  tag : "New Docuseries Premieres April 15"},
  {image : "https://is4-ssl.mzstatic.com/image/thumb/Features116/v4/9c/7e/a8/9c7ea8d7-803f-c799-a00d-93c04f2a1266/U0YtVFZBLVdXLVRoZXlfQ2FsbF9NZV9NYWdpYy1DU19Ccmlja19ub0J1Zy5sc3I.lsr/1478x832fe.webp",
  link : "",
  tag : "New Docuseries Premieres April 22"},
  {image : "https://is5-ssl.mzstatic.com/image/thumb/Features116/v4/01/0c/45/010c45c3-2154-818a-a638-bb69a5175c7e/40d705cb-3f14-4339-993f-87937a7cad9e.lsr/1478x832fe.webp",
  link : "",
  tag : "New Series Premieres April 22"},
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
  link : "https://tv.apple.com/us/show/pachinko/umc.cmc.17vf6g68dy89kk1l1nnb6min4?ctx_brand=tvs.sbd.4000"},
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

var pageToScreen=[
  {Image : "https://is1-ssl.mzstatic.com/image/thumb/Tb1jarRHaWN_SFiMjZcDHw/738x416.webp",
  link:"https://tv.apple.com/us/show/pachinko/umc.cmc.17vf6g68dy89kk1l1nnb6min4?ctx_brand=tvs.sbd.4000"},
  {Image : "https://is4-ssl.mzstatic.com/image/thumb/Ro6cUnMcHLf3sEVL38YlRg/738x416.webp",
  link:"https://tv.apple.com/us/show/the-last-days-of-ptolemy-grey/umc.cmc.bj6odozsws1abio4bkiy69g5?ctx_brand=tvs.sbd.4000"},
  {Image : "https://is2-ssl.mzstatic.com/image/thumb/8593WFOGVTTA1ncIGrL37g/738x416.webp",
  link:"https://tv.apple.com/us/movie/the-tragedy-of-macbeth/umc.cmc.4wpfk1xmi22h3zyv4a10lj1tw?ctx_brand=tvs.sbd.4000"},
  {Image : "https://is2-ssl.mzstatic.com/image/thumb/qYEYYvFXN2O4zEuCcBSbjw/738x416.webp",
  link:"https://tv.apple.com/us/show/foundation/umc.cmc.5983fipzqbicvrve6jdfep4x3?ctx_brand=tvs.sbd.4000"},
  {Image : "https://is4-ssl.mzstatic.com/image/thumb/Iz8wdsRXYRysnRRCY0yMrA/738x416.webp",
  link:"https://tv.apple.com/us/show/the-mosquito-coast/umc.cmc.5nghmxp88xe0qxhtlhfiu5r2h?ctx_brand=tvs.sbd.4000"},
  {Image : "https://is3-ssl.mzstatic.com/image/thumb/cyRvgYnPlaVn3rN2SDdW1Q/738x416.webp",
  link:""},
  {Image : "https://is1-ssl.mzstatic.com/image/thumb/oANBVngpEJDvHRhdyozySA/738x416.webp",
  link:""},
  {Image : "https://is2-ssl.mzstatic.com/image/thumb/vB48H4eBprLJ-WdCBTA6cw/738x416.webp",
  link:""},
  {Image : "https://is4-ssl.mzstatic.com/image/thumb/L4WNJNV3nbmyAL6MQSeGuw/738x416.webp",
  link:""},
  {Image : "https://is5-ssl.mzstatic.com/image/thumb/Cof8vC9vaCH-GYX6JltrQA/738x416.webp",
  link:""},
  {Image : "https://is3-ssl.mzstatic.com/image/thumb/D8bOyY8jg5hymGMxt1LSZg/738x416.webp",
  link:""},
  {Image : "https://is1-ssl.mzstatic.com/image/thumb/jRVuOiECbTmzx3HEVkbreA/738x416.webp",
  link:""},
  {Image : "https://is5-ssl.mzstatic.com/image/thumb/KdlcNbBUOtf7sUXH5z9N8A/738x416.webp",
  link:""},
];

pageToScreen.map(function(elem){
  var innerdiv = document.createElement("div");
  var img = document.createElement("img");
  img.src = elem.Image;
  var a_tag = document.createElement("a");
  a_tag.href = elem.link;
  innerdiv.append(img)
  
  a_tag.append(innerdiv)

  innerdiv.setAttribute("class","pageToScreenData")
  document.querySelector(".insidePageToScreen").append(a_tag);
})

$('.insidePageToScreen').slick({
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

var ambitionAndDetermination=[
  {Image : "https://is1-ssl.mzstatic.com/image/thumb/lN-bUPh0Botn7U7jKgbnFg/738x416.webp",
  link:"https://tv.apple.com/us/show/wecrashed/umc.cmc.6qw605uv2rwbzutk2p2fsgvq9?ctx_brand=tvs.sbd.4000"},
  {Image : "https://is3-ssl.mzstatic.com/image/thumb/AWDRdQz0nepFpnsUNiTDuw/738x416.webp",
  link:"morningshow.html"},
  {Image : "https://is1-ssl.mzstatic.com/image/thumb/VXktJkcnADdcq8RjZVT_nw/738x416.webp",
  link:"https://tv.apple.com/us/show/swagger/umc.cmc.63e208601mwndrxpmguc5stbo?ctx_brand=tvs.sbd.4000"},
  {Image : "https://is2-ssl.mzstatic.com/image/thumb/8593WFOGVTTA1ncIGrL37g/738x416.webp",
  link:"https://tv.apple.com/us/movie/the-tragedy-of-macbeth/umc.cmc.4wpfk1xmi22h3zyv4a10lj1tw?ctx_brand=tvs.sbd.4000"},
  {Image : "https://is2-ssl.mzstatic.com/image/thumb/SEsiWD2cTDShiJqUtRPAxg/738x416.webp",
  link:"https://tv.apple.com/us/show/the-shrink-next-door/umc.cmc.jov1gljmqnux0i15rbqsoyfk?ctx_brand=tvs.sbd.4000"},
  {Image : "https://is3-ssl.mzstatic.com/image/thumb/_VWBeTzPLn6LeyUjlTaSiQ/738x416.webp",
  link:""},
  {Image : "https://is4-ssl.mzstatic.com/image/thumb/vWs6dt5xDhG_DjIoc-89tA/738x416.webp",
  link:""},
  
];

ambitionAndDetermination.map(function(elem){
  var innerdiv = document.createElement("div");
  var img = document.createElement("img");
  img.src = elem.Image;
  innerdiv.append(img)

  var a_tag = document.createElement("a");
  a_tag.href = elem.link;
  a_tag.append(innerdiv)
  innerdiv.setAttribute("class","ambitionData")
  document.querySelector(".innerAmbition").append(a_tag);
})

$('.innerAmbition').slick({
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

var findingVoices=[
  {Image : "https://is1-ssl.mzstatic.com/image/thumb/zRCSBlp0LjwClRXsjyDNYQ/738x416.webp",
  link:""},
  {Image : "https://is3-ssl.mzstatic.com/image/thumb/cyRvgYnPlaVn3rN2SDdW1Q/738x416.webp",
  link:"https://tv.apple.com/us/movie/the-sky-is-everywhere/umc.cmc.22xahad7xeqkok7u24xk0e788?ctx_brand=tvs.sbd.4000"},
  {Image : "https://is3-ssl.mzstatic.com/image/thumb/3iAbZQ4pznOpDRenkvOhNA/738x416.webp",
  link:"Dickinson.html"},
  {Image : "https://is1-ssl.mzstatic.com/image/thumb/VXktJkcnADdcq8RjZVT_nw/738x416.webp",
  link:"https://tv.apple.com/us/show/swagger/umc.cmc.63e208601mwndrxpmguc5stbo?ctx_brand=tvs.sbd.4000"},
  {Image : "https://is4-ssl.mzstatic.com/image/thumb/rZ34KsuVSjdutVP-0HO95A/738x416.webp",
  link:"https://tv.apple.com/us/show/acapulco/umc.cmc.8xrkg9zywke7g6a9ahmvpr3l?ctx_brand=tvs.sbd.4000"},
  {Image : "https://is2-ssl.mzstatic.com/image/thumb/D1SCGzM1ESBh-SIkHwcvUQ/738x416.webp",
  link:""},
  {Image : "https://is3-ssl.mzstatic.com/image/thumb/_ODFuW8DJbcFSHL_yhHuVA/738x416.webp",
  link:""},
  {Image : "https://is5-ssl.mzstatic.com/image/thumb/Ru8FEVLXR20CLzgnt9UXOQ/738x416.webp",
  link:""},
  
];

findingVoices.map(function(elem){
  var innerdiv = document.createElement("div");
  var img = document.createElement("img");
  img.src = elem.Image;
  var a_tag = document.createElement("a");
  a_tag.href = elem.link;
  innerdiv.append(img)

  a_tag.append(innerdiv)
  innerdiv.setAttribute("class","findingVoicesData")
  document.querySelector(".innerFindingVoices").append(a_tag);
})

$('.innerFindingVoices').slick({
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

var conversationObj = [
  {image : "https://is1-ssl.mzstatic.com/image/thumb/a99v9iRDYcIGof0CvxUUoA/1478x832.webp",
  head : "COMEDY",
  subhead : "The Problem With Jon Stewart",
  description : "Jon Stewart brings people together to highlight solutions for a problem."},

  {image : "https://is3-ssl.mzstatic.com/image/thumb/6MFkEmAhzwoAZfThq0xWHA/1478x832.webp",
  head : "TALK SHOW",
  subhead : "The Oprah Conversation",
  description : "Intimate discussion with newsmakers, thought leaders, and masers of craft."},

  {image : "https://is3-ssl.mzstatic.com/image/thumb/fS85BR5uGUlTFLXLAWAMsg/1478x832.webp",
  head : "DOCUMENTRY",
  subhead : "The Year Earth Changed",
  description : "David Attenborough narrates an astonishing look to how lockdown set nature free."},

  {image : "https://is5-ssl.mzstatic.com/image/thumb/uBU112xIP48X2tW5EbpGGQ/1478x832.webp",
  head : "DOCUMENTRY",
  subhead : "The Me You Can't See",
  description : "Oprah and Prince Harry guide honest discussions about mental health."},

  {image : "https://is3-ssl.mzstatic.com/image/thumb/izP6zMmzs-m3VCjcOvM-DQ/1478x832.webp",
  head : "DOCUMENTRY",
  subhead : "The Line",
  description : "Dive into the biggest war crimes trial in a generation in this four-part docusries."},

  {image : "https://is5-ssl.mzstatic.com/image/thumb/RMn-3IiFm6XMOJZT3tP8fA/1478x832.webp",
  head : "DOCUMENTRY",
  subhead : "Visible: Out of Television",
  description : "Explore the history of LGBTQ movement through the lens of TV."},

  {image : "https://is5-ssl.mzstatic.com/image/thumb/97liMx1hwAc7jcp5zDXp8Q/1478x832.webp",
  head : "DOCUMENTRY",
  subhead : "9/11: Inside the President's War Room",
  description : "See the crisis unfold through the eyes of president and his closest advisors."},

  {image : "https://is1-ssl.mzstatic.com/image/thumb/CwpcQl754x9lwddZ9TXqmQ/1478x832.webp",
  head : "DOCUMENTRY",
  subhead : "Fathom",
  description : "Two marine biologists seek meaning in the beautifully hauntion sounds of whale."},

  {image : "https://is1-ssl.mzstatic.com/image/thumb/VlRkLTAvxgEml_ZmCcmP1Q/1478x832.webp",
  head : "DOCUMENTRY",
  subhead : "1971: The Year That Music Changed Everything",
  description : "A tumultuous era sparked a year of unprecedented musical innovation."},

];

conversationObj.map(function(elem){
  var bigdiv = document.createElement("div");
  bigdiv.setAttribute("class", "d-flex bigdiv");

  var imagediv = document.createElement("div")
  var img = document.createElement("img");
  img.src = elem.image;
  imagediv.append(img);
  imagediv.setAttribute("class","imagediv");
  
  var details = document.createElement("div")
  details.setAttribute("class","conversation_details")
  var heading = document.createElement("p")
  heading.innerText = elem.head;
  heading.setAttribute("class","conversation_head")

  var sub = document.createElement("p")
  sub.innerText = elem.subhead;
  var desc = document.createElement("p");
  desc.innerText= elem.description;
  desc.setAttribute("class", "conversation_head");

  details.append(heading,sub,desc);

  bigdiv.append(imagediv,details);

  document.querySelector(".inside_conversation").append(bigdiv);
});

$('.inside_conversation').slick({
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

var powerOFfriendship=[
  {Image : "https://is3-ssl.mzstatic.com/image/thumb/HGw-QzsXlYUDp68NCOvxZQ/738x416.webp",
  link:"https://tv.apple.com/us/show/stillwater/umc.cmc.3czcagetjq31vvbgkkyp1xiao?ctx_brand=tvs.sbd.4000"},
  {Image : "https://is1-ssl.mzstatic.com/image/thumb/UtRuOihF2zNFPo4g5zUwdA/738x416.webp",
  link:"https://tv.apple.com/us/show/the-snoopy-show/umc.cmc.5iswprrvjjw6ab020a17x4ca3?ctx_brand=tvs.sbd.4000"},
  {Image : "https://is5-ssl.mzstatic.com/image/thumb/owNSUO3F109RC75YDPMY7A/738x416.webp",
  link:"https://tv.apple.com/us/show/fraggle-rock-back-to-the-rock/umc.cmc.2r077021gw7fu0noml0hln2yq?ctx_brand=tvs.sbd.4000"},
  {Image : "https://is2-ssl.mzstatic.com/image/thumb/2lfdtvo9bvduvVLrbcASow/738x416.webp",
  link:"https://tv.apple.com/us/show/wolfboy-and-the-everything-factory/umc.cmc.6f1xxgn2dg52deawakawg20r9?ctx_brand=tvs.sbd.4000"},
  {Image : "https://is3-ssl.mzstatic.com/image/thumb/3J1XDMDhXrh-VCuraBUQJg/738x416.webp",
  link:"https://tv.apple.com/us/show/get-rolling-with-otis/umc.cmc.3tql7vmqfmedyw1ab7efys3z?ctx_brand=tvs.sbd.4000"},
  {Image : "https://is4-ssl.mzstatic.com/image/thumb/RP47edx-hRW2rCun48Lx2w/738x416.webp",
  link:""},
  {Image : "https://is5-ssl.mzstatic.com/image/thumb/PsLk5RQuPoAqWJ-lVe1gLQ/738x416.webp",
  link:""},
  {Image : "https://is2-ssl.mzstatic.com/image/thumb/tvBkfH_Ojxnmaod8KMGs_g/738x416.webp",
  link:""},
  {Image : "https://is1-ssl.mzstatic.com/image/thumb/f2vtGOjht_s3h3tBMlDHSg/738x416.webp",
  link:""},
  {Image : "https://is1-ssl.mzstatic.com/image/thumb/AS1GpWWwwGwHxrXD7Sny5A/738x416.webp",
  link:""},
  
];

powerOFfriendship.map(function(elem){
  var innerdiv = document.createElement("div");
  var img = document.createElement("img");
  img.src = elem.Image;
  innerdiv.append(img)
  var a_tag = document.createElement("a");
  a_tag.href = elem.link;
  a_tag.append(innerdiv)

  innerdiv.setAttribute("class","friendshipData")
  document.querySelector(".innerFriendship").append(a_tag);
})

$('.innerFriendship').slick({
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

var video = document.getElementById("video_background");
video.addEventListener("canplay", function() {
  setTimeout(function() {
    video.play();
  }, 5000);
});



var dramaseries=[
  {Image : "https://is1-ssl.mzstatic.com/image/thumb/lN-bUPh0Botn7U7jKgbnFg/738x416.webp"},
  {Image : "https://is1-ssl.mzstatic.com/image/thumb/Tb1jarRHaWN_SFiMjZcDHw/738x416.webp"},
  {Image : "https://is2-ssl.mzstatic.com/image/thumb/78-I7VenST4ztZYfwMf6AQ/738x416.webp"},
  {Image : "https://is3-ssl.mzstatic.com/image/thumb/AWDRdQz0nepFpnsUNiTDuw/738x416.webp"},
  {Image : "https://is3-ssl.mzstatic.com/image/thumb/kVTKGnVvCdFlB1sZeKa8YQ/738x416.webp"},
  {Image : "https://is4-ssl.mzstatic.com/image/thumb/Ro6cUnMcHLf3sEVL38YlRg/738x416.webp"},
  {Image : "https://is2-ssl.mzstatic.com/image/thumb/6tJakyTEtS0vrgdc9POZpg/738x416.webp"},
  {Image : "https://is5-ssl.mzstatic.com/image/thumb/NHLksWLSZpTcIw36-n7vWA/738x416.webp"},
  {Image : "https://is2-ssl.mzstatic.com/image/thumb/qYEYYvFXN2O4zEuCcBSbjw/738x416.webp"},
  {Image : "https://is4-ssl.mzstatic.com/image/thumb/UPoQbHoPte_TFJXEvKIIsw/738x416.webp"},
  {Image : "https://is4-ssl.mzstatic.com/image/thumb/AmQ1cNEzc1DMKH25B5J9aQ/738x416.webp"},
  {Image : "https://is2-ssl.mzstatic.com/image/thumb/SEsiWD2cTDShiJqUtRPAxg/738x416.webp"},
  {Image : "https://is2-ssl.mzstatic.com/image/thumb/vB48H4eBprLJ-WdCBTA6cw/738x416.webp"},
  {Image : "https://is4-ssl.mzstatic.com/image/thumb/Iz8wdsRXYRysnRRCY0yMrA/738x416.webp"},
  {Image : "https://is1-ssl.mzstatic.com/image/thumb/VXktJkcnADdcq8RjZVT_nw/738x416.webp"},
  {Image : "https://is5-ssl.mzstatic.com/image/thumb/Cof8vC9vaCH-GYX6JltrQA/738x416.webp"},
  {Image : "https://is5-ssl.mzstatic.com/image/thumb/Dulsu9pd-BdMQHgEvp2z_A/738x416.webp"},
  {Image : "https://is1-ssl.mzstatic.com/image/thumb/yXhlXOFkS9yJ1kMmOhfIbg/738x416.webp"},
  {Image : "https://is4-ssl.mzstatic.com/image/thumb/h8oGFN-jdPeHY8j3EM_WnQ/738x416.webp"},
  {Image : "https://is4-ssl.mzstatic.com/image/thumb/EjmCDwq97jEEe9RuKY7aNw/738x416.webp"},
  {Image : "https://is3-ssl.mzstatic.com/image/thumb/_ODFuW8DJbcFSHL_yhHuVA/738x416.webp"},
  {Image : "https://is4-ssl.mzstatic.com/image/thumb/L4WNJNV3nbmyAL6MQSeGuw/738x416.webp"},
  {Image : "https://is3-ssl.mzstatic.com/image/thumb/hMPxF7vkj44eqAbnFymHDQ/738x416.webp"},
  {Image : "https://is1-ssl.mzstatic.com/image/thumb/mqP1mK0HzuFhIBXsd_Q_SA/738x416.webp"},
  
];

dramaseries.map(function(elem){
  var innerdiv = document.createElement("div");
  var img = document.createElement("img");
  img.src = elem.Image;
  innerdiv.append(img)
  innerdiv.setAttribute("class","dramaSeriesData")
  document.querySelector(".innerDramaSeries").append(innerdiv);
})

$('.innerDramaSeries').slick({
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

// for pachinko is here 
$('.small_pachinko').slick({
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

var featurefilm=[
  {Image : "https://is1-ssl.mzstatic.com/image/thumb/oANBVngpEJDvHRhdyozySA/738x416.webp"},
  {Image : "https://is1-ssl.mzstatic.com/image/thumb/Epzt9WNlE21aE-FNCoVj2w/738x416.webp"},
  {Image : "https://is2-ssl.mzstatic.com/image/thumb/D1SCGzM1ESBh-SIkHwcvUQ/738x416.webp"},
  {Image : "https://is3-ssl.mzstatic.com/image/thumb/fS85BR5uGUlTFLXLAWAMsg/738x416.webp"},
  {Image : "https://is2-ssl.mzstatic.com/image/thumb/DCj5c2CndQsWCj9zkGGa5Q/738x416.webp"},
  {Image : "https://is5-ssl.mzstatic.com/image/thumb/KdlcNbBUOtf7sUXH5z9N8A/738x416.webp"},
  {Image : "https://is4-ssl.mzstatic.com/image/thumb/iNMKAaCahjd4PPdXo0D5iA/738x416.webp"},
  {Image : "https://is2-ssl.mzstatic.com/image/thumb/3UIt7-edNvHDrXR_FkZd6A/738x416.webp"},
  {Image : "https://is4-ssl.mzstatic.com/image/thumb/K-nsm8mEVNAAnevMTyya7g/738x416.webp"},
  {Image : "https://is5-ssl.mzstatic.com/image/thumb/97liMx1hwAc7jcp5zDXp8Q/738x416.webp"},
  {Image : "https://is1-ssl.mzstatic.com/image/thumb/CwpcQl754x9lwddZ9TXqmQ/738x416.webp"},
  {Image : "https://is1-ssl.mzstatic.com/image/thumb/fwOVLEMoZhr-wkppMR12XA/738x416.webp"},
  {Image : "https://is1-ssl.mzstatic.com/image/thumb/6fu6YRITQhblYxAGDfPR3A/738x416.webp"},
  {Image : "https://is4-ssl.mzstatic.com/image/thumb/2kwDdUMkGYVufGBF3g1hdA/738x416.webp"},
  {Image : "https://is5-ssl.mzstatic.com/image/thumb/QYnchKIdrKG_b0lkikPUSw/738x416.webp"},
  {Image : "https://is1-ssl.mzstatic.com/image/thumb/jRVuOiECbTmzx3HEVkbreA/738x416.webp"},
  {Image : "https://is1-ssl.mzstatic.com/image/thumb/jvpbfkNAZaLIN3DZJUDX8Q/738x416.webp"},
  {Image : "https://is5-ssl.mzstatic.com/image/thumb/Ru8FEVLXR20CLzgnt9UXOQ/738x416.webp"},
  {Image : "https://is5-ssl.mzstatic.com/image/thumb/iDoRIny_hEKEOksP68uLYQ/738x416.webp"},
  {Image : "https://is3-ssl.mzstatic.com/image/thumb/CurGU6004wvloeDxunoxyA/738x416.webp"},
  {Image : "https://is2-ssl.mzstatic.com/image/thumb/jbuAq3KUPjh27XucTemVxg/738x416.webp"},
  
];

featurefilm.map(function(elem){
  var innerdiv = document.createElement("div");
  var img = document.createElement("img");
  img.src = elem.Image;
  innerdiv.append(img)
  innerdiv.setAttribute("class","featureFilmData")
  document.querySelector(".innerFeatureFilm").append(innerdiv);
})


$('.innerFeatureFilm').slick({
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

var comedyseries=[
  {Image : "https://is2-ssl.mzstatic.com/image/thumb/GT66HoV8VJL1IZwaqos_TQ/738x416.webp"},
  {Image : "https://is2-ssl.mzstatic.com/image/thumb/dbEKo7rp5RGNNDrCbA7AUQ/738x416.webp"},
  {Image : "https://is1-ssl.mzstatic.com/image/thumb/RHDyosPjHXJc01IiulkQSg/738x416.webp"},
  {Image : "https://is4-ssl.mzstatic.com/image/thumb/rZ34KsuVSjdutVP-0HO95A/738x416.webp"},
  {Image : "https://is3-ssl.mzstatic.com/image/thumb/_VWBeTzPLn6LeyUjlTaSiQ/738x416.webp"},
  {Image : "https://is2-ssl.mzstatic.com/image/thumb/le6mxqLNaXH47MHIH7stzw/738x416.webp"},
  {Image : "https://is4-ssl.mzstatic.com/image/thumb/vWs6dt5xDhG_DjIoc-89tA/738x416.webp"},
  {Image : "https://is5-ssl.mzstatic.com/image/thumb/y-GzfKyC0y6x5Dd8254GpQ/738x416.webp"},
  {Image : "https://is3-ssl.mzstatic.com/image/thumb/3iAbZQ4pznOpDRenkvOhNA/738x416.webp"},
  {Image : "https://is3-ssl.mzstatic.com/image/thumb/eGnsZyr_h0ivXT0r4jbaew/738x416.webp"},
  {Image : "https://is3-ssl.mzstatic.com/image/thumb/D8bOyY8jg5hymGMxt1LSZg/738x416.webp"},
 
];

comedyseries.map(function(elem){
  var innerdiv = document.createElement("div");
  var img = document.createElement("img");
  img.src = elem.Image;
  innerdiv.append(img)
  innerdiv.setAttribute("class","comedySeriesData")
  document.querySelector(".innerComedySeries").append(innerdiv);
})


$('.innerComedySeries').slick({
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

$('.small_amazing_planet').slick({
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

var nonfictionSeries=[
  {Image : "https://is1-ssl.mzstatic.com/image/thumb/a99v9iRDYcIGof0CvxUUoA/738x416.webp"},
  {Image : "https://is2-ssl.mzstatic.com/image/thumb/qAk-30MspnyIG9hVKJ1qKQ/738x416.webp"},
  {Image : "https://is3-ssl.mzstatic.com/image/thumb/izP6zMmzs-m3VCjcOvM-DQ/738x416.webp"},
  {Image : "https://is5-ssl.mzstatic.com/image/thumb/RFbs1Kj9CJgtWAYKwmOEig/738x416.webp"},
  {Image : "https://is1-ssl.mzstatic.com/image/thumb/VlRkLTAvxgEml_ZmCcmP1Q/738x416.webp"},
  {Image : "https://is1-ssl.mzstatic.com/image/thumb/xW-YFC38wO80XQewW5Mn7A/738x416.webp"},
  {Image : "https://is5-ssl.mzstatic.com/image/thumb/uBU112xIP48X2tW5EbpGGQ/738x416.webp"},
  {Image : "https://is5-ssl.mzstatic.com/image/thumb/KS0pkmrVEdO4uYZA5CpRZA/738x416.webp"},
  {Image : "https://is3-ssl.mzstatic.com/image/thumb/6kPVBOcFxH5eWRVp9Vy9BA/738x416.webp"},
  {Image : "https://is1-ssl.mzstatic.com/image/thumb/L79If4rL5GAF2ffGc7jBRg/738x416.webp"},
  {Image : "https://is4-ssl.mzstatic.com/image/thumb/qth_eNoJqMWbjMUyn16jpA/738x416.webp"},
  {Image : "https://is1-ssl.mzstatic.com/image/thumb/04JyAIWtM1q-61kfjf6BsQ/738x416.webp"},
  {Image : "https://is2-ssl.mzstatic.com/image/thumb/nMny0tR8aTkNRR3FHWQcAw/738x416.webp"},
  {Image : "https://is3-ssl.mzstatic.com/image/thumb/6MFkEmAhzwoAZfThq0xWHA/738x416.webp"},
  {Image : "https://is2-ssl.mzstatic.com/image/thumb/jER5ceAuuLVFije5LmLVLw/738x416.webp"},
  {Image : "https://is1-ssl.mzstatic.com/image/thumb/1hOcr3gchtyju9nzwvFcAg/738x416.webp"},
  {Image : "https://is5-ssl.mzstatic.com/image/thumb/KL014j7cDAvmHE0IXLfC5Q/738x416.webp"},
  {Image : "https://is5-ssl.mzstatic.com/image/thumb/IpgXC7UdAxwRnIwu9nuZBg/738x416.webp"},
  {Image : "https://is5-ssl.mzstatic.com/image/thumb/RMn-3IiFm6XMOJZT3tP8fA/738x416.webp"},
 
];

nonfictionSeries.map(function(elem){
  var innerdiv = document.createElement("div");
  var img = document.createElement("img");
  img.src = elem.Image;
  innerdiv.append(img)
  innerdiv.setAttribute("class","nonfictionData")
  document.querySelector(".innerNonfiction").append(innerdiv);
})


$('.innerNonfiction').slick({
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

$('.small_kid_family').slick({
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


var funforall=[
  {Image : "https://is1-ssl.mzstatic.com/image/thumb/UtRuOihF2zNFPo4g5zUwdA/738x416.webp"},
  {Image : "https://is5-ssl.mzstatic.com/image/thumb/owNSUO3F109RC75YDPMY7A/738x416.webp"},
  {Image : "https://is3-ssl.mzstatic.com/image/thumb/HGw-QzsXlYUDp68NCOvxZQ/738x416.webp"},
  {Image : "https://is5-ssl.mzstatic.com/image/thumb/_Kq-GgPdDxxqWtSZ9GbHug/738x416.webp"},
  {Image : "https://is1-ssl.mzstatic.com/image/thumb/Ir_hJwmfJ4AcT2TtAYbciA/738x416.webp"},
  {Image : "https://is3-ssl.mzstatic.com/image/thumb/7bpqOTRk7jFXrAFvrvx-MQ/738x416.webp"},
  {Image : "https://is2-ssl.mzstatic.com/image/thumb/FQV5QO8Xa5gbRlB8jXX9rw/738x416.webp"},
  {Image : "https://is5-ssl.mzstatic.com/image/thumb/y7Tj8Ig4DTzSgbm4DcoFyw/738x416.webp"},
  {Image : "https://is5-ssl.mzstatic.com/image/thumb/PsLk5RQuPoAqWJ-lVe1gLQ/738x416.webp"},
  {Image : "https://is3-ssl.mzstatic.com/image/thumb/6f5y-DYx9UvvcJ-gpqAufw/738x416.webp"},
  {Image : "https://is3-ssl.mzstatic.com/image/thumb/3J1XDMDhXrh-VCuraBUQJg/738x416.webp"},
  {Image : "https://is2-ssl.mzstatic.com/image/thumb/2lfdtvo9bvduvVLrbcASow/738x416.webp"},
  {Image : "https://is2-ssl.mzstatic.com/image/thumb/kdFsyPb7mK7T8-k6YrXdYQ/738x416.webp"},
  {Image : "https://is2-ssl.mzstatic.com/image/thumb/tvBkfH_Ojxnmaod8KMGs_g/738x416.webp"},
  {Image : "https://is4-ssl.mzstatic.com/image/thumb/RP47edx-hRW2rCun48Lx2w/738x416.webp"},
  {Image : "https://is1-ssl.mzstatic.com/image/thumb/AS1GpWWwwGwHxrXD7Sny5A/738x416.webp"},
  {Image : "https://is1-ssl.mzstatic.com/image/thumb/f2vtGOjht_s3h3tBMlDHSg/738x416.webp"},
  {Image : "https://is2-ssl.mzstatic.com/image/thumb/BU-tGneZEJEFJ_BFNu-UGA/738x416.webp"},
  {Image : "https://is4-ssl.mzstatic.com/image/thumb/_la1XaWrle1sDMnXFf_D1Q/738x416.webp"},
  {Image : "https://is4-ssl.mzstatic.com/image/thumb/3RaVxdFY2twAFSDtW_2yIA/738x416.webp"},
  {Image : "https://is2-ssl.mzstatic.com/image/thumb/B3GupTTnEPs6-RZrpzJYXg/738x416.webp"},
  {Image : "https://is2-ssl.mzstatic.com/image/thumb/RdODNXnO5_zaltg5tp8nig/738x416.webp"},
  {Image : "https://is1-ssl.mzstatic.com/image/thumb/Sy6yivO7EftulDxSpyo__Q/738x416.webp"},
  {Image : "https://is3-ssl.mzstatic.com/image/thumb/ZYv1Yo9zcK029EjWlyRSYg/738x416.webp"},
  {Image : "https://is2-ssl.mzstatic.com/image/thumb/IZLh7W9XMi2iYTPqqFwRYg/738x416.webp"},
  {Image : "https://is3-ssl.mzstatic.com/image/thumb/n2S3A7xaoY_tP8wngoLBTw/738x416.webp"},
  {Image : "https://is5-ssl.mzstatic.com/image/thumb/htJoSCg_9CML6hANmTrQlg/738x416.webp"},
  {Image : "https://is2-ssl.mzstatic.com/image/thumb/7QggTvk_fHz-FE9Pru2GxA/738x416.webp"},
  {Image : "https://is3-ssl.mzstatic.com/image/thumb/vElmOL1u_pwE-YiCQsXncg/738x416.webp"},
  {Image : "https://is2-ssl.mzstatic.com/image/thumb/Mv8zQCROSnN0fW_jMixewA/738x416.webp"},
  {Image : "https://is4-ssl.mzstatic.com/image/thumb/v6GmzIllgUll8qcuTDHwnA/738x416.webp"},
 
];

funforall.map(function(elem){
  var innerdiv = document.createElement("div");
  var img = document.createElement("img");
  img.src = elem.Image;
  innerdiv.append(img)
  innerdiv.setAttribute("class","funForAllData")
  document.querySelector(".innerFunForAll").append(innerdiv);
})


$('.innerFunForAll').slick({
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

var invasion=[
  {Image : "https://is1-ssl.mzstatic.com/image/thumb/oANBVngpEJDvHRhdyozySA/738x416.webp",
  link:"https://tv.apple.com/us/movie/greyhound/umc.cmc.o5z5ztufuu3uv8lx7m0jcega?ctx_brand=tvs.sbd.4000"},
  {Image : "https://is2-ssl.mzstatic.com/image/thumb/78-I7VenST4ztZYfwMf6AQ/1478x832.webp",
  link:"https://tv.apple.com/us/show/severance/umc.cmc.1srk2goyh2q2zdxcx605w8vtx?ctx_brand=tvs.sbd.4000"},
  {Image : "https://is3-ssl.mzstatic.com/image/thumb/kVTKGnVvCdFlB1sZeKa8YQ/738x416.webp",
  link:"https://tv.apple.com/us/show/suspicion/umc.cmc.64yj71dmrdihhmo96h0lgjmw5?ctx_brand=tvs.sbd.4000"},
  {Image : "https://is2-ssl.mzstatic.com/image/thumb/vB48H4eBprLJ-WdCBTA6cw/738x416.webp",
  link:"https://tv.apple.com/us/show/truth-be-told/umc.cmc.6hegr60w8pjyfcblgocjek7oo?ctx_brand=tvs.sbd.4000"},
  {Image : "https://is4-ssl.mzstatic.com/image/thumb/Iz8wdsRXYRysnRRCY0yMrA/738x416.webp",
  link:"https://tv.apple.com/us/show/the-mosquito-coast/umc.cmc.5nghmxp88xe0qxhtlhfiu5r2h?ctx_brand=tvs.sbd.4000"},
  {Image : "https://is5-ssl.mzstatic.com/image/thumb/y-GzfKyC0y6x5Dd8254GpQ/738x416.webp",
  link:"https://tv.apple.com/us/show/trying/umc.cmc.6muy4la7lj1omu5nci4bt2m66?ctx_brand=tvs.sbd.4000"},
  
];

invasion.map(function(elem){
  var innerdiv = document.createElement("div");
  var img = document.createElement("img");
  img.src = elem.Image;
  innerdiv.append(img)

  var a_tag = document.createElement("a");
  a_tag.href = elem.link;
  a_tag.append(innerdiv)
  innerdiv.setAttribute("class","invasionData")
  document.querySelector(".sliderBox").append(a_tag);
})


window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 30 || document.documentElement.scrollTop > 30) {
    document.querySelector(".bottom_bar").style.bottom = "0";
  } else {
    document.querySelector(".bottom_bar").style.bottom = "-100px";
  }
}
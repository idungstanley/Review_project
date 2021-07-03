// local reviews data
const reviews = [ 
  {
    id: 1,
    name: "stanley sunday",
    job: "web developer",
    img:
      "https://scontent.fabb1-1.fna.fbcdn.net/v/t1.6435-9/193261111_3019698501597796_2958086655427127219_n.jpg?_nc_cat=110&_nc_rgb565=1&ccb=1-3&_nc_sid=8bfeb9&_nc_eui2=AeGEwMd4_pUgLWbVIL-Sgs4Z-t_uQjzc8EH63-5CPNzwQWy3nXHlTCligN88NjR3WCftyLWIRiXeVLeYaL1xCyOs&_nc_ohc=Q4mcRmJY-OIAX8m2tQN&_nc_ht=scontent.fabb1-1.fna&oh=b25482aa9a3e1c42e75ff3b0cdea931b&oe=60E5425E",
    text:
      "I'm web developer and a statistician, i love fashion but money never show yet to pepper una, so i just dey lay low +1. make una no mind me i just dey jones.... To my brownie, i love yaaaa"
  },
  {
    id: 2,
    name: "anna johnson",
    job: "web designer",
    img:
      "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883409/person-2_np9x5l.jpg",
    text:
      "Helvetica artisan kinfolk thundercats lumbersexual blue bottle. Disrupt glossier gastropub deep v vice franzen hell of brooklyn twee enamel pin fashion axe.photo booth jean shorts artisan narwhal.",
  },
  {
    id: 3,
    name: "peter jones",
    job: "intern",
    img:
      "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883417/person-3_ipa0mj.jpg",
    text:
      "Sriracha literally flexitarian irony, vape marfa unicorn. Glossier tattooed 8-bit, fixie waistcoat offal activated charcoal slow-carb marfa hell of pabst raclette post-ironic jianbing swag.",
  },
  {
    id: 4,
    name: "bill anderson",
    job: "the boss",
    img:
      "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883423/person-4_t9nxjt.jpg",
    text:
      "Edison bulb put a bird on it humblebrag, marfa pok pok heirloom fashion axe cray stumptown venmo actually seitan. VHS farm-to-table schlitz, edison bulb pop-up 3 wolf moon tote bag street art shabby chic. ",
  },
];
const img = document.getElementById("person-img");
const author = document.getElementById("author");
const job = document.getElementById("job");
const info = document.getElementById("info");


const prevBtn = document.querySelector(".prev-btn");
const nextBtn = document.querySelector(".next-btn");
const randomBtn = document.querySelector(".random-btn");

// set starting item
let currentItem = 0;

window.addEventListener("DOMContentLoaded", function (){
  showPerson();
})

function showPerson(person){
  const item = reviews[currentItem];
  img.src = item.img;
  author.textContent = item.name;
  job.textContent = item.job;
  info.textContent = item.text;
}

nextBtn.addEventListener("click", function(){
   currentItem++;
   if(currentItem> reviews.length - 1){
     currentItem = 0
  }
  showPerson();
})

prevBtn.addEventListener("click", function(){
  currentItem--;
  if(currentItem < 0){
    currentItem = reviews.length - 1
  }
  showPerson();
})

randomBtn.addEventListener("click", function(){
  currentItem = Math.floor(Math.random()* reviews.length);
  showPerson();
})

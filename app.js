const btnSp = document.querySelector('.btn-sp'),
      hide = document.querySelector('.hide'),
      tabContainer = document.querySelector('.tabs-container'),
      tabSidebar = document.querySelector('.tab-sidebar'),

      tabContacts = document.querySelector('.tab-contact'),
      call = document.querySelector('.call');
      backX = document.querySelector('.back-x');



      btnSp.addEventListener('click', () => {
      tabContainer.classList.toggle('tab-swiper');
      tabSidebar.classList.toggle('tab-swiper');
    })


      hide.addEventListener('click', () => {
      tabContainer.classList.toggle('tab-swiper');
      tabSidebar.classList.toggle('tab-swiper');
    })

//tab contact uchun kod


call.addEventListener('click', () => {
  tabContacts.classList.toggle('hide_update');
})

backX.addEventListener('click', () => {
  tabContacts.classList.toggle('hide_update');
})

// scroll events

const navbarB = document.querySelector('.navbar-bottom');
navbarT = document.querySelector('.navbar-top');



window.addEventListener('scroll', () => {

  let top = Math.floor(window.scrollY);
  if (top > 300) {
    navbarB.style.position = "fixed";
    navbarB.style.top = "0px";
    navbarB.style.background = "black";
    navbarB.style.color = "crimson";

  }

  if (top === 0) {
    navbarB.style.position = "relative";
    navbarB.style.background = "linear-gradient(0deg, rgb(250, 88, 33) 14%, rgb(179, 0, 161) 100%)";

  }
})

// mini slider products

const productBox = document.querySelector('.product_box'),
  proItem = document.querySelectorAll('.pro_item'),
  prev = document.querySelector('.prev'),
  next = document.querySelector('.next');
let num = 0;




prev.addEventListener('click', () => {
  num--;

  if (num < 0) {
    num = proItem.length - 10;
  }
  if (num > proItem.length - 10) {
    num = 0;
  }


  productBox.style.transform = `translateX(${-num * 140}px)`;
});

next.addEventListener('click', () => {
  num++;

  if (num < 0) {
    num = proItem.length - 7;
  }
  if (num > proItem.length - 10) {
    num = 0;
  }


  productBox.style.transform = `translateX(${-num * 140}px)`;
});




// banner section for js code


const slideFeed = document.querySelector('.slide-feed'),
  banner = document.querySelectorAll('.banner'),
  pban = document.querySelector('.p-ban'),
  nban = document.querySelector('.n-ban');

let ban = 0;

function bannerSlide() {

  if (ban < 0) {
    ban = banner.length - 1;
  }

  if (ban > banner.length - 1) {
    ban = 0;
  }

  slideFeed.style.transform = `translateX(${-ban * 1377}px)`;

}


pban.addEventListener('click', () => {
  ban--;
  bannerSlide();
});

nban.addEventListener('click', () => {
  ban++;
  bannerSlide();
});

const nextB = function autoNext() {
  ban++;
  bannerSlide();
}




setInterval(nextB, 3000);


// step 5


const like=document.querySelectorAll('.like'),
      tooltip=document.querySelector('.tooltip'),
      tooltype=document.querySelector('.tooltype'),
      toolteep=document.querySelector('.toolteep'),
      tool=document.querySelector('.tool'),
      tooltap=document.querySelector('.tooltap');




      function showTooltip(){
        tooltip.style.display='inline-block';
      }
      function hideTooltip(){
        tooltip.style.display='none';
      }


      function showTooltype(){
        tooltype.style.display='inline-block';
      }
      function hideTooltype(){
        tooltype.style.display='none';
      }


      function showToolteep(){
        toolteep.style.display='inline-block';
      }
      function hideToolteep(){
        toolteep.style.display='none';
      }

      function showTool(){
        tool.style.display='inline-block';
      }
      function hideTool(){
        tool.style.display='none';
      }

      function showTooltap(){
        tooltap.style.display='inline-block';
      }
      function hideTooltap(){
        tooltap.style.display='none';
      }



      like [0].addEventListener('mouseover', showTooltip);
      like [0].addEventListener('mouseout', hideTooltip);
      like [1].addEventListener('mouseover', showTooltype);
      like [1].addEventListener('mouseout', hideTooltype);
      like [2].addEventListener('mouseover', showToolteep);
      like [2].addEventListener('mouseout', hideToolteep);
      like [3].addEventListener('mouseover', showTool);
      like [3].addEventListener('mouseout', hideTool);
      like [4].addEventListener('mouseover', showTooltap);
      like [4].addEventListener('mouseout', hideTooltap);







// like [2].addEventListener('mouseover', showTooltip);
//       // like [2].addEventListener('mouseout', hideTooltip);
  

    

      
  
  
     



 




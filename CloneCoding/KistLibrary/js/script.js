{
  document.querySelectorAll('.menu-li').forEach((li)=>{
    li.addEventListener('mouseover',(e)=>{
      e.currentTarget.classList.add('active')
    })
    li.addEventListener('mouseout',(e)=>{
      e.currentTarget.classList.remove('active')
    })
  })
  // document.querySelectorAll('.menu-li').forEach((li)=>{
  // })
}//menu-active
{
  document.querySelectorAll('.menu-a').forEach((a)=>{
    a.addEventListener('focus',(e)=>{
      e.currentTarget.parentElement.classList.add('active')
    })
    a.parentElement.lastElementChild.lastElementChild.firstElementChild.addEventListener('blur',(e)=>{
      e.target.parentElement.parentElement.parentElement.classList.remove('active')
      
    })
  })//menu-a foreach
  // document.querySelectorAll('.menu-a').forEach((li)=>{
  // })
}//menu

{
  window.addEventListener('DOMContentLoaded', () => {
    const swiper = new Swiper('.carousel', {
      //autoplay:false,
      autoplay: { delay: 5000,},
      loop: true,
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      // freemode:false,
      // spaceBetween:  100,
      slidesPerView: 3,
      slidesPerGroup : 3,
      breakpoints: {
      767: {
        spaceBetween: 30,
        slidesPerView: 3,
        slidesPerGroup : 3,
      }
      },
    });
  })
  
  
}//swiper

{
  let main = document.querySelector('.main-container');
  let mainT = main.offsetTop;
  let scry = window.scrollY
  window.addEventListener('scroll',()=>{
    scry = window.scrollY
      scroll()
  })
  function scroll(){
    if(scry >= mainT){document.querySelector('.menu-section-wrap').classList.add("active")}
    else{document.querySelector('.menu-section-wrap').classList.remove("active")}
  }
}//scroll 이벤트

{
  if(sessionStorage.getItem('closeGuide')){
    document.querySelector('.guide-section').style.display = 'none';
  }
}
{
  const guideClose = () => {
    let check = document.querySelector('#dontlook').checked
    if(check){sessionStorage.setItem('closeGuide',true)}
    document.querySelector('.guide-section').style.display = 'none';
  }
  document.querySelector('.closebtn').onclick = guideClose;
}//local storage 활용
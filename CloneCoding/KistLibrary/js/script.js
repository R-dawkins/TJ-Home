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
}

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
      spaceBetween:  30,
      slidesPerView: 3,
      slidesPerGroup : 3,
    });
    // swiper()
  })
  
}
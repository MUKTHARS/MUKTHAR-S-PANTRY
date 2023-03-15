let searchForm = document.querySelector('.search-form');
document.querySelector('#search-btn').onclick=()=>{
    searchForm.classList.toggle('active');
    shoppingCart.classList.remove('active');
    loginform.classList.remove('active');
    mediamenu.classList.remove('active');
}
let shoppingCart = document.querySelector('.shopping-cart');
document.querySelector('#cart-button').onclick=()=>{
    searchForm.classList.remove('active');
    shoppingCart.classList.toggle('active');
    loginform.classList.remove('active');
    mediamenu.classList.remove('active');
}

let loginform = document.querySelector('.login-form');
document.querySelector('#log-btn').onclick=()=>{
    loginform.classList.toggle('active');
    searchForm.classList.remove('active');
    shoppingCart.classList.remove('active');
    mediamenu.classList.remove('active');
}

let mediamenu = document.querySelector('.navbar');
document.querySelector('#menu-btn').onclick=()=>{
    searchForm.classList.remove('active');
    shoppingCart.classList.remove('active');
    loginform.classList.remove('active');
    mediamenu.classList.toggle('active');
}

window.scroll=() =>{
    searchForm.classList.toggle('active');
    searchForm.classList.remove('active');
    shoppingCart.classList.remove('active');
    loginform.classList.remove('active');
    mediamenu.classList.remove('active');
}

var swiper = new Swiper(".product-slider", {
    loop:true,
    spaceBetween: 20, 
    autoplay:{
        delay:2500,
        disableOnInteractions: false,
    },
    centeredSlides:true,
    breakpoints: {
      0: {
        slidesPerView: 1,
        
      },
      768: {
        slidesPerView: 2
        
      },
      1020: {
        slidesPerView: 3,
        
      },
    },
  });

var swiper = new Swiper(".review-slider", {
    loop:true,
    spaceBetween: 20, 
    autoplay:{
        delay:5500,
        disableOnInteractions: false,
    },
    centeredSlides:true,
    breakpoints: {
      0: {
        slidesPerView: 1,
        
      },
      768: {
        slidesPerView: 2
        
      },
      1020: {
        slidesPerView: 3,
        
      },
    },
  });  

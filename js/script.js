(function(){
  const swiper = new Swiper('.banner-main-aria', {
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    spaceBetween: 30,
    loop: true,
    autoplay: {
      delay: 5500,
      disableOnInteraction: false
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });

  var link = document.querySelector('[data-toggle-menu]');
  var menu = document.querySelector('.menu');
  link.addEventListener('click', function() {
    if (link.classList.contains('toggle-menu--clicked')) {
      link.classList.remove('toggle-menu--clicked');
      menu.classList.remove('active');
    } else {
      link.classList.add('toggle-menu--clicked');
      menu.classList.add('active');
    }
  }, false);
}());

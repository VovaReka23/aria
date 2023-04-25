(function () {
  const swiper = new Swiper(".banner-main-aria", {
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    spaceBetween: 30,
    loop: true,
    // autoplay: {
    //   delay: 5500,
    //   disableOnInteraction: false
    // },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });

  var link = document.querySelector("[data-toggle-menu]");
  var menu = document.querySelector(".menu");
  link.addEventListener(
    "click",
    function () {
      if (link.classList.contains("toggle-menu--clicked")) {
        link.classList.remove("toggle-menu--clicked");
        menu.classList.remove("active");
      } else {
        link.classList.add("toggle-menu--clicked");
        menu.classList.add("active");
      }
    },
    false
  );
})();
(function () {
  const smoothScroll = function (targetEl, duration) {
    const headerElHeight = document.querySelector(".menu").clientHeight;
    let target = document.querySelector(targetEl);
    let targetPosition = target?.getBoundingClientRect().top - headerElHeight;
    let startPosition = window.pageYOffset;
    let startTime = null;

    const ease = function (t, b, c, d) {
      t /= d / 2;
      if (t < 1) return (c / 2) * t * t + b;
      t--;
      return (-c / 2) * (t * (t - 2) - 1) + b;
    };

    const animation = function (currentTime) {
      if (startTime === null) startTime = currentTime;
      const timeElapsed = currentTime - startTime;
      const run = ease(timeElapsed, startPosition, targetPosition, duration);
      window.scrollTo(0, run);
      if (timeElapsed < duration) requestAnimationFrame(animation);
    };
    requestAnimationFrame(animation);
  };

  const scrollTo = function () {
    const links = document.querySelectorAll(".js-scroll");
    links.forEach((each) => {
      each.addEventListener("click", function () {
        const currentTarget = this.getAttribute("href");
        smoothScroll(currentTarget, 1000);
      });
    });
  };
  scrollTo();
})();

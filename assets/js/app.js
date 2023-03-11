// mobile menu
$('.mobile-menu-icon').on('click',function(){
    $('i').toggleClass('bi-list bi-x-lg');
  
    // $('.navbar-collapse').toggleClass('hide show');
  
    // $(this).toggleClass('rotate');
    // $('.bi-x-lg').toggleClass('rotate');
  });
  
  
  // $('.desktop-drop-menu-icon').on('click',function(){
  //   $('.desktop-drop-menu-icon i').toggleClass('bi-list bi-x-lg');
  //   $('.desktop-drop-menu-container').addClass('show');
  // });
  
  $('.desktop-drop-menu-icon').click(function() {
    $('.desktop-drop-menu-icon i').toggleClass('bi-list bi-x-lg');
    $('.desktop-drop-menu-container').addClass('show');
    if ($('.desktop-drop-menu-container ul li a').hasClass('fade-up')) {
      $('.desktop-drop-menu-container ul li a').removeClass('fade-up').addClass('fade-down');
      $('.desktop-drop-menu-container .section-sub-title').removeClass('fade-up').addClass('fade-down');
      $('.desktop-drop-menu-container .horizontal-line').removeClass('fade-up').addClass('fade-down');
      $('.home-link-list li').removeClass('fade-up').addClass('fade-down');
    } else {
      $('.desktop-drop-menu-container ul li a').removeClass('fade-down').addClass('fade-up');
      $('.desktop-drop-menu-container .section-sub-title').removeClass('fade-down').addClass('fade-up');
      $('.desktop-drop-menu-container .horizontal-line').removeClass('fade-down').addClass('fade-up');
      $('.home-link-list li').removeClass('fade-down').addClass('fade-up');
    }
    if ($('.desktop-drop-menu-container ul li a').hasClass('fade-down')) {
      $('.desktop-drop-menu-container').removeClass('show');
    }
  });
  
  
  // fixed footer
  function footer_behind_ctn(){
    var footerHeight = $('.footer').outerHeight();
    $('.footer-top').css('margin-bottom', footerHeight);
  }
  $(window).on('load',footer_behind_ctn);
  $(window).resize(footer_behind_ctn);
  
  
  // cursor
  $(document).ready(function(){
    const cursor = document.querySelector('#cursor');
    let mouse = { x: 300, y: 300 };
    let pos = { x: 0, y: 0 };
    const speed = 0.1; // between 0 and 1
  
    const updatePosition = () => {
      pos.x += (mouse.x - pos.x) * speed;
      pos.y += (mouse.y - pos.y) * speed;
      cursor.style.transform = 'translate3d(' + pos.x + 'px ,' + pos.y + 'px, 0)';
    };
  
    const updateCoordinates = e => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    }
  
    window.addEventListener('mousemove', updateCoordinates);
  
    function loop() {
      updatePosition();
      requestAnimationFrame(loop);
    }
    requestAnimationFrame(loop);
  
  });
  
  
  // mobile sub-menu
  $(document).ready(function(){
    var activeNavItem = $('.nav-item'); 
    activeNavItem.click(function(){
      activeNavItem.removeClass('active');
      $(this).addClass('active');  
    });
    $(document).ready(function(){
      $('.business-dropdown>a:nth-child(1)').click(function(){
        $('.business-dropdown .sub-menu').toggleClass('dropdown-active')
      });
      
      $('.about-dropdown>a:nth-child(1)').click(function(){
        $('.about-dropdown .sub-menu').toggleClass('dropdown-active')
      })
    })
  
  });
  
  
  
  // Precounter
  new PureCounter();
  
  // AOS init
  AOS.init();
  // AOS.init({disable: 'mobile'});
  
  
  // banner height
  $(document).ready(function(){
      $('.banner').css('height', $(window).height());
      $('.banner-wrapper').css('height', $(window).height());
      // $('.banner').css('margin-top', $('nav').outerHeight()-"10px");
  });
  $(window).resize(function(){
      $('.banner').css('height', $(window).height());
      $('.banner-wrapper').css('height', $(window).height());
  });
  
  $(document).ready(function(){
    let halfBanner = $(window).height() / 2;
  
      $('.banner.half-banner').css('height', halfBanner);
      $('.banner-wrapper.half-banner-wrapper').css('height', halfBanner);
      // $('.banner').css('margin-top', $('nav').outerHeight()-"10px");
  });
  $(window).resize(function(){
      $('.banner').css('height', $(window).height());
      $('.banner-wrapper').css('height', $(window).height());
  });
  
  
  //mobile about image
  $(document).ready(function(){
    if($(window).width() <992){
      $('.about-image-wrapper').addClass('container');
      
      $('.container .story-content').removeClass('container');
    }
  });
  
  
  
  
  // teamSwiper
  $(document).ready(function(){
    var swiper = new Swiper(".teamSwiper", {
      slidesPerView: 1,
      loop: true,
      effect: "fade",
      pagination: {
        el: ".swiper-pagination",
        type: "progressbar",
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
    });
  });
  
  
  // historySwiper
  $(document).ready(function(){
    var swiper = new Swiper(".historySwiper", {
      slidesPerView: 2,
      spaceBetween: 10,
      loop:true,
      pagination: {
        el: ".swiper-pagination",
        type: "progressbar",
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
  
      breakpoints:{
        640: {
          slidesPerView: 2,
          spaceBetween: 10,
        },
        768: {
          slidesPerView: 3,
          spaceBetween: 40,
        },
        1024: {
          slidesPerView: 4,
          spaceBetween: 50,
        },
      }
    });
  })
  
  $(document).ready(function(){
    if($(window).width() <992){
      $('.historySwiper .swiper-slide.container').removeClass('container');
    }
  });
  
  
  // business mobile only slider
  $(document).ready(function(){
  
    var swiper= Swiper;
    var init = false;
    function swiperMode() {
      let mobile = window.matchMedia('(min-width: 0px) and (max-width: 768px)');
      let tablet = window.matchMedia('(min-width: 769px) and (max-width: 1024px)');
      let desktop = window.matchMedia('(min-width: 1025px)');
  
      // Enable (for mobile)
      if(mobile.matches) {
          if (!init) {
              init = true;
              swiper = new Swiper('.businessSlider', {
                  slidesPerView: 1.2,
                  spaceBetween: 10,
                  loop:true,
                  direction: 'horizontal',
                  
                  pagination: {
                    el: ".swiper-pagination",
                    type: "progressbar",
                  },
                  navigation: {
                    nextEl: ".swiper-button-next",
                    prevEl: ".swiper-button-prev",
                  },
                  
                  breakpoints:{
                    640: {
                      slidesPerView: 1,
                      spaceBetween: 10,
                    },
                    768: {
                      slidesPerView: 3,
                      spaceBetween: 40,
                    },
                    1024: {
                      slidesPerView: 5,
                      spaceBetween: 50,
                    },
                  }
  
                });
              }
  
      }
      
      // Disable (for tablet)
      else if(tablet.matches) {
          swiper.destroy();
          init = false;
      }
  
      // Disable (for desktop)
      else if(desktop.matches) {
        swiper.destroy();
        init = false;
      }
    }
    window.addEventListener('load', function() {
      swiperMode();
    });
    window.addEventListener('resize', function() {
      swiperMode();
    });
    
  })
  
  // updates mobile only slider
  $(document).ready(function(){
    var swiper= Swiper;
    var init = false;
    function swiperMode() {
      let mobile = window.matchMedia('(min-width: 0px) and (max-width: 768px)');
      let tablet = window.matchMedia('(min-width: 769px) and (max-width: 1024px)');
      let desktop = window.matchMedia('(min-width: 1025px)');
  
      // Enable (for mobile)
      if(mobile.matches) {
          if (!init) {
              init = true;
              swiper = new Swiper('.updatesSlider', {
                slidesPerView: 1.2,
                spaceBetween: 10,
                loop:true,
                direction: 'horizontal',
                
                pagination: {
                  el: ".swiper-pagination",
                  type: "progressbar",
                },
                navigation: {
                  nextEl: ".swiper-button-next",
                  prevEl: ".swiper-button-prev",
                },
                
                breakpoints:{
                  640: {
                    slidesPerView: 1,
                    spaceBetween: 10,
                  },
                  768: {
                    slidesPerView: 3,
                    spaceBetween: 40,
                  },
                  1024: {
                    slidesPerView: 5,
                    spaceBetween: 50,
                  },
                }
                  
                });
              }
              
            }
            
            // Disable (for tablet)
            else if(tablet.matches) {
              swiper.destroy();
              init = false;
            }
            
            // Disable (for desktop)
            else if(desktop.matches) {
              swiper.destroy();
              init = false;
            }
          }
          window.addEventListener('load', function() {
            swiperMode();
          });
          window.addEventListener('resize', function() {
            swiperMode();
          });
  })
  
  
  // teamMembers mobile only slider
  $(document).ready(function(){
    var swiper= Swiper;
    var init = false;
    function swiperMode() {
        let mobile = window.matchMedia('(min-width: 0px) and (max-width: 768px)');
        let tablet = window.matchMedia('(min-width: 769px) and (max-width: 1024px)');
        let desktop = window.matchMedia('(min-width: 1025px)');
  
        // Enable (for mobile)
        if(mobile.matches) {
            if (!init) {
                init = true;
                swiper = new Swiper('.teamMembersSlider', {
                  loop:true,
                  direction: 'horizontal',
                  pagination: {
                    el: ".swiper-pagination",
                    type: "progressbar",
                  },
                  navigation: {
                    nextEl: ".swiper-button-next",
                    prevEl: ".swiper-button-prev",
                  },
  
                  breakpoints:{
                    640: {
                      slidesPerView: 1,
                    },
                    768: {
                      slidesPerView: 1.2,
                    },
                    1024: {
                      slidesPerView: 5,
                    },
                  }
  
                });
            }
  
        }
  
        // Disable (for tablet)
        else if(tablet.matches) {
            swiper.destroy();
            init = false;
        }
  
        // Disable (for desktop)
        else if(desktop.matches) {
            swiper.destroy();
            init = false;
        }
    }
    window.addEventListener('load', function() {
        swiperMode();
    });
    window.addEventListener('resize', function() {
        swiperMode();
    });
  
  })
  
  
  // Investment sectors mobile slider
  $(document).ready(function(){
    var swiper= Swiper;
    var init = false;
    function swiperMode() {
        let mobile = window.matchMedia('(min-width: 0px) and (max-width: 768px)');
        let tablet = window.matchMedia('(min-width: 769px) and (max-width: 1024px)');
        let desktop = window.matchMedia('(min-width: 1025px)');
  
        // Enable (for mobile)
        if(mobile.matches) {
            if (!init) {
                init = true;
                swiper = new Swiper('.investmentsectorsSlider', {
                    slidesPerView: 1,
                    spaceBetween: 10,
                    effect:'fade',
                    autoplay: {
                        delay: 3000,
                        disableOnInteraction: false,
                    },
                    centeredSlides: true,
                    loop: true,
                    spaceBetween: 10,
                    direction: 'horizontal',
  
                    pagination: {
                      el: ".swiper-pagination",
                      type: "progressbar",
                    },
                    navigation: {
                      nextEl: ".swiper-button-next",
                      prevEl: ".swiper-button-prev",
                    },
  
                    breakpoints: {
  
                        767: {
                          slidesPerView: 2,
                          spaceBetween: 20,
                        }
  
                    }
  
                });
            }
  
        }
  
        // Disable (for tablet)
        else if(tablet.matches) {
            swiper.destroy();
            init = false;
        }
  
        // Disable (for desktop)
        else if(desktop.matches) {
            swiper.destroy();
            init = false;
        }
    }
    window.addEventListener('load', function() {
        swiperMode();
    });
    window.addEventListener('resize', function() {
        swiperMode();
    });
  
  })
  
  
  // Reveal Block Images
  $(document).ready(function(){
  
    function isScrolledIntoView(elem) {
    var docViewTop = $(window).scrollTop();
    var docViewBottom = docViewTop + $(window).height();
  
    var elemTop = $(elem).offset().top -250;
    var elemBottom = elemTop + $(elem).height();
  
    return ((elemBottom <= docViewBottom) && (elemTop >= docViewTop));
  }
  
  $(window).scroll(function () {
    $('.unreveal-block').each(function () {
      if (isScrolledIntoView(this) === true) {
           $(this).addClass('reveal-block');
          }
        });
        
        $('.unreveal-block-nobg').each(function () {
          if (isScrolledIntoView(this) === true) {
            $(this).addClass('reveal-block');
          }
        });
      });
      
  })
  
  // Preloader
  $(window).on('load', function() { 
    $('#preloader-overlay').css({"transform":"translateY(-100%)","height":$(window).height()});
    $('#preloader').css({'height':$(window).height(),'transform': 'translateY(-100%)'})
    $('#status').fadeOut(); 
    // $('#preloader').delay(350).fadeOut(1500);
    // $('body').delay(350).css({'overflow':'visible'});
  });
  
  
  // counter progress-bar
  $(document).ready(function(){
  
    function isScrolledIntoView(elem) {
      var docViewTop = $(window).scrollTop();
      var docViewBottom = docViewTop + $(window).height();
  
      var elemTop = $(elem).offset().top -250;
      var elemBottom = elemTop + $(elem).height();
  
      return ((elemBottom <= docViewBottom) && (elemTop >= docViewTop));
    }
  
  $(window).scroll(function () {
    $('.counts').each(function () {
      if (isScrolledIntoView('.count-progress-bar') === true) {
           $('.count-progress-bar').addClass('reveal-progress');
          }
        });
      });
  });
  
  
  
  // horizontal-line
  $(document).ready(function(){
  
    function isScrolledIntoView(elem) {
      var docViewTop = $(window).scrollTop();
      var docViewBottom = docViewTop + $(window).height();
  
      var elemTop = $(elem).offset().top;
      var elemBottom = elemTop + $(elem).height();
  
      return ((elemBottom <= docViewBottom) && (elemTop >= docViewTop));
    }
  
    $(window).scroll(function () {
      $('.horizontal-line').each(function () {
        if (isScrolledIntoView(this) === true) {
          $(this).addClass('reveal-horizontal-line');
        }
      });
    });
  });
  
  
  // reveal-contents initially
  $(window).on('load',function(){
    $('#all-updates-cards .card-col:nth-child(1) .unreveal-block').addClass('reveal-block');
    $('#all-updates-cards .card-col:nth-child(2) .unreveal-block').addClass('reveal-block');
    $('#all-updates-cards .card-col:nth-child(3) .unreveal-block').addClass('reveal-block');
    
    $('.team-page .swiper-slide:nth-child(1) .unreveal-block').addClass('reveal-block');
    $('.team-page .swiper-slide:nth-child(2) .unreveal-block').addClass('reveal-block');
    $('.team-page .swiper-slide:nth-child(3) .unreveal-block').addClass('reveal-block');
  })
  
  
  // window scroll smooth
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: 'smooth'
  });
  
  
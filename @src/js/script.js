












/**
 * валидация формы на странице contacts
 */


var contactForm = document.getElementById('contact-form');
var user_name = document.querySelector('[name=user_name]');
var phone = document.querySelector('[name=user_phone]');
var email = document.querySelector('[name=user_email]');
var message = document.querySelector('[name=user_message]');

let error = false

// let regName = /^[\w\s^А-я_][^0-9\s_]+$/ // разрешаем ввод только большим/маленьким латинксим и русским буква, без цифр и запрещаем ввод букв с цифрами
let regName2 = /^[A-zА-я\s^_][^0-9\s_]+$/ // тоже самое, что и первое
let regPhone = /^[0-9\s][^A-zА-я\s_\.\,]+$/


if (contactForm) {
   contactForm.addEventListener('submit', function (e) {
      e.preventDefault()
      /* имя */
      if (user_name.value == '') {
         setError(user_name, 'Заполните поле')
         error = true
      }
      else if (!regName.test(user_name.value)) {
         setError(user_name, 'Введите корректное имя')
         error = true
      }  else {
         removeError(user_name)
         error = false
      }
      
      /* телефон */
      if (phone.value == '') {
         setError(phone, 'Введите Ваш телефон')
         error = true
      } else if (!regPhone.test(phone.value)) {
         setError(phone, 'Введите корректный номер телефона')
      } else {
         removeError(phone)
         error = false
      }

      /* email */
      if (email.value == '') {
         setError(email, 'Введите Ваш email')
         error = true
      } else if (!isEmail(email.value)) {
         setError(email, 'Введите корректный email')
      } else {
         removeError(email)
         error = false
      }
   })
}
   




  
function setError(input, errorMessage) {
   let parent = input.parentElement
   let mess = parent.querySelector('.input-message')

   parent.classList.add('error')
   mess.innerHTML = errorMessage
}

function removeError(input) {
   let parent = input.parentElement
   let mess = parent.querySelector('.input-message')

   parent.classList.remove('error')
   mess.innerHTML = ''
}

function isEmail(email) {
   return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}


window.addEventListener('load', function() {
   var pageLoad = document.querySelector('.page-load')
   var loadSquare = document.querySelectorAll('.load-square')

   if (pageLoad != null || (loadSquare && loadSquare.length > 0)) {
      for (let i = 0; i < 9; i++) {
         setTimeout(() => {
            body.style.overflow = 'auto'
            loadSquare[i].classList.add('hide')
            loadSquare[i].style.transitionDelay = `${i * 0.05}s`
         }, 500)
            
      
         setTimeout(() => {
            pageLoad.style.zIndex = 0
         }, 1300)
      }
   }
})
            
/**
 * Menu - nav
 */
$('.menu-list__1').hide()
$('.menu-list__2').hide()
$('.menu-list > li').has('ul').addClass('has-children')
$('.menu-list__1 > li').has('ul').addClass('has-children')

$('.menu-list.one > li').on('mouseenter', accordionMenuHover )
$('.menu-list.one > li').on('mouseleave', accordionMenuHover)
$('.menu-list__1 > li').on('mouseenter', accordionSubmenuHover )
$('.menu-list__1 > li').on('mouseleave', accordionSubmenuHover)

function accordionMenuHover() {
   $('.menu-list.one > li').not($(this)).removeClass('active')
   $('.menu-list__1').not($(this).children('.menu-list__1')).slideUp()
   $(this).toggleClass('active').children('.menu-list__1').slideToggle();
}

function accordionSubmenuHover() {
   // $('.menu-list.one > li').not($(this)).removeClass('active')
   $('.menu-list__1 > li').not($(this)).removeClass('active')
   $('.menu-list__2').not($(this).children('.menu-list__2')).slideUp()
   $(this).toggleClass('active').children('.menu-list__2').slideToggle();
}






/**
 * активные элементы меню
 */
var menuLink = document.querySelectorAll('.menu-list > li > a')
var currentUrl = window.location.pathname

for (let i = 0; i < menuLink.length; i++) {
   menuLink[i].addEventListener('click', function() {
      localStorage.setItem('currentPage', menuLink[i].getAttribute('href'))
   })
   if (menuLink[i].getAttribute('href') == localStorage.currentPage) {
      menuLink[i].classList.add('active')
   } else {
      menuLink[i].classList.remove('active')
   }
}

/**
 * здесь будет анимация загрузки страниц
 */
document.addEventListener("DOMContentLoaded", function() {
   // alert("DOM готов!");
 });




/**
 * слайдер на главной
 */ 
$(function() {
   
})


   // $('.main-slider-for').css({ height: '100%' })
   // настройка счетчика слайдов 
   $('.main-slider-for').on('init', function(event, slick) {
      $('.slide-count').text(slick.slideCount)
      if (slick.slideCount < 10) {
         $('.slide-count').text('0' + slick.slideCount)
      }

      $('.current-slide').text(slick.currentSlide + 1)
      if (slick.currentSlide < 10) {
         $('.current-slide').text('0' + (slick.currentSlide + 1).toString())
      }
   })
   // настройки слайдера
   .slick({ 
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: true,
      prevArrow: '<button type="button" class="main-prev prev"><svg><use xlink:href="img/dist/svg-sprite.svg#slick-prev"></use></svg></button>',
      nextArrow: '<button type="button" class="main-next next"><svg><use xlink:href="img/dist/svg-sprite.svg#slick-next"></use></svg></button>',
      fade: false,
      useTransform: true,
      cssEase: 'cubic-bezier(.19,.74,0,1.01)',
      asNavFor: '.main-slider-nav',
      accessibility: true,
      dots: true,
      autoplay: false,
      autoplaySpeed: 8000,
      speed: 2300,
      infinite: true,
      pauseOnFocus: false,
      pauseOnHover: false,
      // adaptiveHeight: true
      // customPaging: function(slick, index) {
      //    console.log(slick.slideCount);
      // }
   })

   // настройка счетчика слайдов
   .on('beforeChange', function(event, slick, currentSlide, nextSlide) {
      $('.current-slide').text(nextSlide + 1)
      if (nextSlide < 10) {
         $('.current-slide').text('0' + (nextSlide + 1).toString())
      }
   })
   $('.main-slider-nav').slick({
      slidesToShow: 4,
      slidesToScroll: 1,
      asNavFor: '.main-slider-for',
      dots: false,
      arrows: false,
      centerMode: true,
      focusOnSelect: true
   })
   

   $('.main-slider-for .slick-dots').css({
      style: {
         display: 'flex'
      }
   })

   /* группировка slick arrows */
   $('.slick-arrows').append($('.main-prev, .main-next'))


window.addEventListener('resize', function () {
   $('.main-slider-for').slick('setPosition');
   $('.main-slider-nav').slick('setPosition');
})


















/**
 * открытие меню при ширине <= 1200px
 */
$('.mobile-menu-icon').on('click', function() {
   $(this).toggleClass('active')
   $('.menu').toggleClass('active')
   $('.page-resize').toggleClass('active')

   if ( $('.page-resize').hasClass('active') && $(window).width() > '870') {
      $('.page-resize').addClass('one-column')
   } else {
      $('.page-resize').removeClass('one-column')
   }
})





/**
 * мой lightbox
 */

var lightboxIcon = document.querySelectorAll('.lightbox-icon')
var lightbox = document.querySelector('.lightbox')
var lightboxContent = document.querySelector('.lightbox-content')
var lightboxImg = document.querySelector('.lightbox img')
var lightboxOverlay = document.querySelector('.lightbox-overlay')
var lightboxClose = document.querySelector('.lightbox-close')
var body = document.querySelector('body')


for (let i = 0; i < lightboxIcon.length; i++) {
   lightboxIcon[i].onclick = function (e) {
      e.preventDefault()

      var getAttr = ''
      getAttr = this.getAttribute('href')

      if (getAttr && getAttr != '') {
         console.log(lightboxImg);
         lightboxImg.setAttribute('src', getAttr)
         lightbox.classList.add('show')
         lightboxContent.classList.add('show')
         lightboxOverlay.classList.add('show')
         body.classList.add('no-scroll')
      }
   }
}

function close() {
   lightbox.classList.remove('show')
   lightboxOverlay.classList.remove('show')
   lightboxContent.classList.remove('show')
   body.classList.remove('no-scroll')
}

if (lightboxClose || lightboxOverlay) {
   lightboxClose.addEventListener('click', close)
   lightboxOverlay.addEventListener('click', close)
}











/**
 * Анимация компонента skills
 */

window.addEventListener('scroll', skillsAnimateScroll)
window.addEventListener('load', skillsAnimateLoad)

// анимация при скролле страницы
let firstSkillsIteration = false
function skillsAnimateScroll() {
   let skill = document.querySelectorAll('.skills .skill')
   let skills = document.querySelector('.skills')

   if (skills && skills.classList.contains('animate-show')) {
      for (let i = 0; i < skill.length; i++) {
         let skillValue = skill[i].querySelector('.value')
         let line = skill[i].querySelector('.inside-line')
         let percent = skillValue.getAttribute('data-percent')
      
         line.style.width = percent + '%'
         if (!firstSkillsIteration) {
            counter(percent, skillValue, 1500, 1)
         }
      }
      firstSkillsIteration = true
   } else {
      for (let i = 0; i < skill.length; i++) {
         let line = skill[i].querySelector('.inside-line')
         line.style.width = 0
      }
   }
}


// анимация skills при загрузки страницы
function skillsAnimateLoad() {
   let skill = document.querySelectorAll('.skills .skill')
   let skills = document.querySelector('.skills')

   setTimeout(() => {
      if (skills) {
         for (let i = 0; i < skill.length; i++) {
            let skillValue = skill[i].querySelector('.value')
            let line = skill[i].querySelector('.inside-line')
            let percent = skillValue.getAttribute('data-percent')
         
            line.style.width = percent + '%'
            counter(percent, skillValue, 1500, 1)
         }
      }
   }, 2000)
}











/**
 * Табы на странице Services
 */

 $(function() {
   $('.services-block').not(':first').hide();
   $('.services-tab').on('click', function () {
      $('.services-tab').removeClass('active').eq($(this).index()).addClass('active');
      $('.services-block').hide().removeClass('show').eq($(this).index()).fadeIn(500).addClass('show');
   //   $('.products-slider').slick('setPosition');  // Этот метод "встряхивает" слайдер переинициализирует его после каждого изменения страницы или переключении вкладок
   });
})









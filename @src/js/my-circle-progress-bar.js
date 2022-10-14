/**
 * Анимация circle progress bar
 */

window.addEventListener('load', animateCircleProgressBar(2000))
window.addEventListener('scroll', animateCircleProgressBarScroll)



/**
 * Функция клика по табам для анимации кругов и счетчика
 */

function onClickServicesTabs() {
   let tabs = document.querySelectorAll('.services-tab')

   if (tabs && tabs.length > 0) {
      for (let i = 0; i < tabs.length; i++) {
         tabs[i].addEventListener('click', function(e) {
            changeTabWithAnimationcircles(e)
         }) 
      }
      tabs[0].onclick = function(e) {
         changeTabWithAnimationcircles(e)
      }
   }
}
onClickServicesTabs()



/**
 * Переключение между вкладками c анимацией заполнения кругов и счетчика
 */
function changeTabWithAnimationcircles(e) {
   let circleBtnTab = document.querySelector('.what-we-do-tab')
   let circle = document.querySelectorAll('.circle')

   setTimeout(() => {
      if (circle) {
         for (let i = 0; i < circle.length; i++) {
            let percentElement = circle[i].querySelector('.circle .percent')
            let percent = percentElement.getAttribute('data-circle-percent')
            let progressCircle = circle[i].querySelector('.progress-circle')

            if (e.target == circleBtnTab) {
               progressCircle.style.strokeDasharray = percent + ', 100'
               counter(percent, percentElement, 1500, 1)
            } else {
               progressCircle.style.strokeDasharray = 0 + ', 100'
            }
         }
      }
   }, 500)
}












/**
 * Анимация circle progress bar + counter при загрузке страницы
 */
function animateCircleProgressBar(time) {
   let circle = document.querySelectorAll('.circle')

   setTimeout(() => {
      if (circle) {
         for (let i = 0; i < circle.length; i++) {
            let percentElement = circle[i].querySelector('.circle .percent')
            let percent = percentElement.getAttribute('data-circle-percent')
            let progressCircle = circle[i].querySelector('.progress-circle')

            progressCircle.style.strokeDasharray = percent + ', 100' 
            counter(percent, percentElement, 1500, 1)
         }
      }
   }, time)
}









/**
 * Анимация circle progress bar + counter при скролле страницы
 */
let firstCircleIteration = false
function animateCircleProgressBarScroll() {
   let circle = document.querySelectorAll('.circle')
   let circles = document.querySelector('.circles')

   if (circles && circles.classList.contains('animate-show')) {
      for (let i = 0; i < circle.length; i++) {
         let percentElement = circle[i].querySelector('.circle .percent')
         let percent = percentElement.getAttribute('data-circle-percent')
         let progressCircle = circle[i].querySelector('.progress-circle')
         

         progressCircle.style.strokeDasharray = percent + ', 100' 
         if (!firstCircleIteration) {
            counter(percent, percentElement, 1500, 1)
         }
      }
      firstCircleIteration = true
   } else {
      for (let i = 0; i < circle.length; i++) {
         let progressCircle = circle[i].querySelector('.progress-circle')

         progressCircle.style.strokeDasharray = 0 + ', 100' 
      }
   }
}
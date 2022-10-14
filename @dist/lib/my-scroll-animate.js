/**
 * Событие скролла
 * offsetHeight содержит полную высоту элемента (включает собственно высоту элемента, высоту границ, padding, полосы прокрутки)
 * функция offset вычисляет расстояние от верхней точки элемента до верха документа
 * animateStart - коэффициент, который регулирует момент старта анимации - им можно регулировать видимую область, в которй произойдет анимация. В данном случае это 1/3 блока
 * animateItemPoint - начало анимации. высота окна - высота элемента / коэффициент
 * pageYOffset - кол-во пикселей, на которое прокручен документ по вертикали
 */

/**
 * Редактирование animateStart изменяет видимую часть блока, при которой будет происходить анимация
 */

let animate = document.querySelectorAll('.animate')

if (animate) {
   window.addEventListener('scroll', onScroll)

   function onScroll() {
      for (let i = 0; i < animate.length; i++) {
         let item = animate[i]
         let itemHeight = item.offsetHeight
         let itemOffset = offset(item).top
         let animateStart = 3

         let animateItemPoint = window.innerHeight - itemHeight / animateStart 

         /* если высота элемента больше высоты окна браузера, то 
         * animateItemPoint = высота окна - высота окна / коэффициент
         */
         if (itemHeight > window.innerHeight) 
            animateItemPoint = window.innerHeight - window.innerHeight / animateStart
         
         if ((pageYOffset > itemOffset - animateItemPoint) && pageYOffset < (itemOffset + itemHeight)) 
            item.classList.add('animate-show')
         else 
            /* если нужно убрать анимацию при скролле вверх, добавить блоку дополнительный класс animate-hide в html */
            if (!item.classList.contains('animate-hide')) 
               item.classList.remove('animate-show')
            
      }
   }
}

function  offset (el) {
   var rect = el.getBoundingClientRect(),
   scrollLeft =  window.pageXOffset ||  document.documentElement.scrollLeft,
   scrollTop =  window.pageYOffset ||  document.documentElement.scrollTop;
   return {top: rect.top + scrollTop, left: rect.left + scrollLeft}
}

window.onload = function() {
   setTimeout(() => {
      onScroll()
   }, 1500)
}
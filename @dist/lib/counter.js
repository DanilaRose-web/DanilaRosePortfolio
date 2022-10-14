/**
 * Анимация счетчика чисел
 */
 function counter(count, elem, duration, step) {
   let n = 0;
   let t = Math.round(duration / (count / step));
   let interval = setInterval(() => {
      firstAnimate = true
      n = n + step;
      elem.innerHTML = n + '%';
      if (n == count) {
         clearInterval(interval);
      } 
   }, t); 
}
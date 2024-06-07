// plugins/scroll.js
export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.directive('scroll-to', {
    mounted(el, binding) {
      el.addEventListener('click', (event) => {
        const headerHeight = document.querySelector('.nav-header').offsetHeight;
        event.preventDefault();
        const target = document.getElementById(binding.value);
        if (target) {
          // target.scrollIntoView({ behavior: 'smooth' });
          window.scrollTo({
            top: target.offsetTop - headerHeight,
            behavior: 'smooth'
          })
        }
        
      });
    }
  });
});

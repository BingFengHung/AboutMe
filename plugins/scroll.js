// plugins/scroll.js
export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.directive('scroll-to', {
    mounted(el, binding) {
      el.addEventListener('click', (event) => {
        event.preventDefault();
        const target = document.getElementById(binding.value);
        if (target) {
          target.scrollIntoView({ behavior: 'smooth' });
        }
      });
    }
  });
});

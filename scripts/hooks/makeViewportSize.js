export default function (el) {
  window.addEventListener('resize', onResize);
  onResize();

  function onResize() {
    document.documentElement.style.setProperty('--vw', `${vw}px`);
    document.documentElement.style.setProperty('--vh', `${vh}px`);
  }
}
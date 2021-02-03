function init() {
  document.querySelectorAll('.vehicles .vehicle').forEach(element => {
    element.addEventListener('mouseenter', hoverEffect.bind(element));
    element.addEventListener('mouseleave', hoverEffect.bind(element));
  });

  function hoverEffect() {
    this.classList.toggle('hover');
  }

  const intro = document.querySelector('.intro');
  if (intro) {
    window.onscroll = (e) => {
      window.scrollY > 0
        ? intro.classList.add('scrolled')
        : intro.classList.remove('scrolled')
    }
  }
}

document.onload = init();
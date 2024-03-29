const hamburgerIcon = document.getElementById('hamburger-icon');
const navBarTwo = document.querySelector('.nav-bar-two');
const body = document.querySelector('body')
const navLinks = document.querySelectorAll('.nav-item');
const navLinksTwo = document.querySelectorAll('.nav-item-two')

hamburgerIcon.addEventListener('click', () => {
  navBarTwo.classList.toggle('open');
});

body.addEventListener('click', function(event) {
    console.log(event.target)
    if (!navBarTwo.contains(event.target) && !hamburgerIcon.contains(event.target)) {
      navBarTwo.classList.remove('open');
    }
  });


if (location.pathname === '/' || location.pathname === "/index.html") {
  navLinks.forEach(link => {
    link.addEventListener('click', e => {
      e.preventDefault()
      const href = link.getAttribute('href');
      const target = document.querySelector(href);
      const offsetTop = target.offsetTop;
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      });
    });
  });
}

if (location.pathname === '/' || location.pathname === "/index.html") {
  navLinksTwo.forEach(link => {
    link.addEventListener('click', e => {
      e.preventDefault()
      const href = link.getAttribute('href');
      const target = document.querySelector(href);
      const offsetTop = target.offsetTop;
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      });
    });
  });
}
const hamburgerIcon = document.getElementById('hamburger-icon');
const navBarTwo = document.querySelector('.nav-bar-two');
const body = document.querySelector('body')

hamburgerIcon.addEventListener('click', () => {
  navBarTwo.classList.toggle('open');
});

body.addEventListener('click', function(event) {
    console.log(event.target)
    if (!navBarTwo.contains(event.target) && !hamburgerIcon.contains(event.target)) {
      navBarTwo.classList.remove('open');
    }
  });
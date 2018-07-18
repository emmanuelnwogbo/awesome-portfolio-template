import '../scss/main.scss';
const aboutCheck = document.getElementById('navigation__checkbox-about');
const servicesCheck = document.getElementById('navigation__checkbox-services');
const workCheck = document.getElementById('navigation__checkbox-work');
const aboutBtn = document.getElementById('about-btn');
const servicesBtn = document.getElementById('services-btn');
const workBtn = document.getElementById('work-btn');
const nameDiv = document.getElementById('name-div');

nameDiv.addEventListener('click', function () {
  if (aboutCheck.checked || servicesCheck.checked || workCheck.checked) {
    aboutCheck.checked = false;
    servicesCheck.checked = false;
    workCheck.checked = false;
  }
});

aboutBtn.addEventListener('click', function (e) {
  e.preventDefault();

  if (servicesCheck.checked || workCheck.checked) {
    servicesCheck.checked = false;
    workCheck.checked = false;
  }

  if (!aboutCheck.checked) {
    aboutCheck.checked = true;
  }
});

servicesBtn.addEventListener('click', function (e) {
  e.preventDefault();

  if (aboutCheck.checked || workCheck.checked) {
    aboutCheck.checked = false;
    workCheck.checked = false;
  }

  if (!servicesCheck.checked) {
    servicesCheck.checked = true;
  }
});

workBtn.addEventListener('click', function (e) {
  e.preventDefault();

  if (aboutCheck.checked || servicesCheck.checked) {
    aboutCheck.checked = false;
    servicesCheck.checked = false;
  }

  if (!workCheck.checked) {
    workCheck.checked = true;
  }
})
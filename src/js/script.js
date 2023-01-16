let searchBtn = document.querySelector('.search-btn');
let searchBlock = document.querySelector('.header__search');
let searchBtnClose = document.querySelector('.search__btn-close');
let contactsBtnClose = document.querySelector('.contacts__btn-close');
let contactsMapDescr = document.querySelector('.contacts__map-descr');
let contactsMapMarker = document.querySelector('.contacts__map-marker');
let navBtn = document.querySelector('.nav-btn');
let navBlock = document.querySelector('.header__burger');
let navBtnClose = document.querySelector('.nav__btn-close');
let navLinks = document.querySelectorAll('.header__burger .nav__link');

searchBtn.addEventListener('click', function() {
  searchBlock.classList.toggle('header__search_active');
})

searchBtnClose.addEventListener('click', function() {
  searchBlock.classList.remove('header__search_active');
})

contactsBtnClose.addEventListener('click', function() {
  contactsMapDescr.classList.remove('contacts__map-descr_open');
})

contactsMapMarker.addEventListener('click', function() {
  contactsMapDescr.classList.toggle('contacts__map-descr_open');
})

navBtn.addEventListener('click', function() {
  navBlock.classList.toggle('header__burger_open');
  document.body.classList.toggle('stop-scroll');
})

navBtnClose.addEventListener('click', function() {
  navBlock.classList.remove('header__burger_open');
  document.body.classList.remove('stop-scroll');
})

navLinks.forEach(function(elem) {
  elem.addEventListener('click', function() {
    navBlock.classList.remove('header__burger_open');
    document.body.classList.remove('stop-scroll');
  })
})

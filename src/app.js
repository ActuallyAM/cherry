jQuery(document).ready(function ($) {
  $('.banner').unslider({
    autoplay: true,
    infinite: true,
  });
});

jQuery(document).ready(function () {
  jQuery('.cookie-close').on('click', function (event) {
    jQuery('.cookie').toggle('show');
  });
});

$(document).ready(function () {
  $('.search-bar').mouseenter(function () {
    $('.search-bar').stop().show();
  });

  $('.search-bar, .search-bar').mouseleave(function () {
    if (!$('.search-bar').is(':hover')) {
      $('.search-bar').hide();
    }
  });
});
document.querySelector('.menu-dots').addEventListener('click', function () {
  document.querySelector('.header-mobile').style.display = 'none';
  document.querySelector('.mobile').style.display = 'block';
  document.body.classList.add('hide');
});
document.querySelector('.fa-times').addEventListener('click', function () {
  document.querySelector('.header-mobile').style.display = 'flex';
  document.querySelector('.mobile').style.display = 'none';
  document.body.classList.remove('hide');
});

document.querySelector('.fa-search').addEventListener('click', function () {
  document.querySelector('.search-bar').style.display = 'flex';
});

const menuMobile = document.querySelectorAll('.mobile-menu');
const menuPlus = document.querySelectorAll('.sub-plus');
const menuMinus = document.querySelectorAll('.sub-minus');
const menuSubPlus = document.querySelectorAll('.sub-sub-plus');
const menuSubMinus = document.querySelectorAll('.sub-sub-minus');
const menuSub = document.querySelectorAll('.mobile-sub-menu');
const menuSubTitle = document.querySelectorAll('.sub-menu-title');
const menuSubMenu = document.querySelectorAll('.mobile-sub-sub-menu');

for (let i = 0; i < menuPlus.length; i++) {
  menuPlus[i].addEventListener('click', function () {
    menuPlus[i].style.display = 'none';
    menuMinus[i].style.display = 'flex';
    menuSub[i].style.display = 'block';
    menuMobile[i].style.color = '#d41217';
    menuMobile[i].style.background = '#d4121733';
    menuMobile[i].classList.add('active');
  });
}

for (let i = 0; i < menuMinus.length; i++) {
  menuMinus[i].addEventListener('click', function () {
    menuMinus[i].style.display = 'none';
    menuPlus[i].style.display = 'flex';
    menuSub[i].style.display = 'none';
    menuMobile[i].style.color = '#4a4a4a';
    menuMobile[i].style.background = '#fff';
    menuMobile[i].classList.remove('active');
  });
}
for (let i = 0; i < menuSubPlus.length; i++) {
  menuSubPlus[i].addEventListener('click', function () {
    menuSubTitle[i].style.color = '#d41217';
    menuSubPlus[i].style.display = 'none';
    menuSubMinus[i].style.display = 'block';
    menuSubMenu[i].style.display = 'block';
  });
}
for (let i = 0; i < menuSubMinus.length; i++) {
  menuSubMinus[i].addEventListener('click', function () {
    menuSubPlus[i].style.display = 'block';
    menuSubMinus[i].style.display = 'none';
    menuSubMenu[i].style.display = 'none';
    menuSubTitle[i].style.color = '#4a4a4a';
  });
}

const menu = document.querySelectorAll('.menu');
const menuSecondary = document.querySelectorAll('.secondary-menu');

for (let i = 0; i < menu.length; i++) {
  menu[i].addEventListener('mouseover', function () {
    menuSecondary[i].style.display = 'block';
  });
}
for (let i = 0; i < menuSecondary.length; i++) {
  menuSecondary[i].addEventListener('mousemove', function () {
    menuSecondary[i].style.display = 'block';
  });
}
for (let i = 0; i < menuSecondary.length; i++) {
  menuSecondary[i].addEventListener('mouseout', function () {
    menuSecondary[i].style.display = 'none';
  });
}
for (let i = 0; i < menu.length; i++) {
  menu[i].addEventListener('mouseout', function () {
    menuSecondary[i].style.display = 'none';
  });
}

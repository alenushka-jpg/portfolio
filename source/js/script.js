const header = document.querySelector('.page-header');
const burger = document.querySelector('.page-header__burger');
const certificates = document.querySelector('.certificates');
const certificatesOpen = document.querySelector('.promo___certificates');
const certificatesClose = document.querySelector('.certificates__button');
const overlay = document.querySelector('.overlay');
const body = document.querySelector('body');
const promo = document.querySelector('.promo__container');

function bodyHidden() {
  document.body.style.overflowY = 'scroll';
  document.body.style.position = 'fixed';
}

function bodyVisible() {
  document.body.style.overflowY = 'scroll';
  document.body.style.position = 'inherit';
}

//drop-down menu script
function showMenu() {
  header.classList.toggle('page-header--open');
};

function onHeaderClick() {
  showMenu();
};

burger.addEventListener('click', onHeaderClick);


//certificates script
function showCertificates() {
  certificates.classList.add('certificates--open');
};

function onCertificatesClick() {
  showCertificates();
  // bodyHidden();
};

function hiddenCertificates() {
  certificates.classList.remove('certificates--open');
};

function onCloseCertificatesClick() {
  hiddenCertificates();
  bodyVisible();
};

certificatesOpen.addEventListener('click', onCertificatesClick);
certificatesClose.addEventListener('click', onCloseCertificatesClick);

if (overlay) {
  overlay.addEventListener('click', hiddenCertificates);
};

if (overlay) {
  overlay.addEventListener('click', bodyVisible);
};

window.addEventListener('keydown', function (evt) {
  if (evt.keyCode === 27) {
    if (header.classList.contains('page-header--open')) {
      evt.preventDefault();
      header.classList.remove('page-header--open');
      bodyVisible();
    }
    if (certificates.classList.contains('certificates--open')) {
      evt.preventDefault();
      certificates.classList.remove('certificates--open');
      bodyVisible();
    }
  }
});

//gsap
gsap.registerPlugin(ScrollTrigger, ScrollSmoother)

function showHeader() {
  gsap.from(header, {opacity: 0, delay: 0, y: 30});
};

function showPromo() {
  gsap.from(promo, {opacity: 0, delay: 1, y: 30});
};

setTimeout(showHeader, 300);
setTimeout(showPromo, 600);


if (ScrollTrigger.isTouch !== 1) {
  if (!certificates.classList.contains('certificates--open')) {
    ScrollSmoother.create({
      wrapper: '.wrapper',
      content: '.content',
      smooth: 1.5,
      effects: true,
    });

    gsap.fromTo('.promo', {opacity: 1}, {
      opacity: 0,
      scrollTrigger: {
        trigger: '.promo',
        start: 'center',
        end: 'bottom',
        scrub: true,
      }
    })

    gsap.fromTo('.about-me', { opacity: 0}, {
      opacity: 1,
      scrollTrigger: {
        trigger: '.about-me',
        scrub: true,
      }
    })

    gsap.fromTo('.projects', { opacity: 0}, {
      opacity: 1,
      scrollTrigger: {
        trigger: '.projects',
        scrub: true,
      }
    })
  }

};

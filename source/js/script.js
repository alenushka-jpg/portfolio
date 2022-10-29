const header = document.querySelector('.page-header');
const burger = document.querySelector('.page-header__burger');
const certificates = document.querySelector('.certificates');
const certificatesOpen = document.querySelector('.promo___certificates');
const certificatesClose = document.querySelector('.certificates__button');
const overlay = document.querySelector('.overlay');
const body = document.querySelector('body');

function bodyHidden() {
  document.body.style.overflowY = 'scroll';
  document.body.style.position = 'fixed';
}

function bodyVisible() {
  document.body.style.overflowY = 'scroll';
  document.body.style.position = 'inherit';
}

//drop-down menu script
function showHeader() {
  header.classList.toggle('page-header--open');
};

function onHeaderClick() {
  showHeader();
};

burger.addEventListener('click', onHeaderClick);


//certificates script
function showCertificates() {
  certificates.classList.add('certificates--open');
};

function onCertificatesClick() {
  showCertificates();
  bodyHidden();
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

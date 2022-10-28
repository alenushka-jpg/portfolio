const header = document.querySelector('.page-header');
const burger = document.querySelector('.page-header__burger');
const certificates = document.querySelector('.certificates');
const certificatesOpen = document.querySelector('.promo___certificates');
const certificatesClose = document.querySelector('.certificates__button');

function showHeader() {
  header.classList.toggle('page-header--open');
};

function onHeaderClick() {
  showHeader();
};

burger.addEventListener('click', onHeaderClick);


function showCertificates() {
  certificates.classList.add('certificates--open');
};

function onCertificatesClick() {
  showCertificates();
};

function hiddenCertificates() {
  certificates.classList.remove('certificates--open');
};

function onCloseCertificatesClick() {
  hiddenCertificates();
};

certificatesOpen.addEventListener('click', onCertificatesClick);
certificatesClose.addEventListener('click', hiddenCertificates);

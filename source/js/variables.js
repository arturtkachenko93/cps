const page = document.querySelector('.page__body');
const minWIdthDesktop = window.matchMedia('(min-width: 1440px)');
const headerWrapper = document.querySelector('.header__wrapper')
const btnSetting = document.querySelector('.button-round--settings');
const btnToogle = document.querySelector('.header__button-menu');
const overlay = document.querySelector('.page__background-modal');
const btnList = document.querySelector('.header__buttons-list');
const headerBody = document.querySelector('.header__body');

const buttonBrands = document.querySelector('.brands__button');
const listBrands = document.querySelector('.brands__list');
const buttonBrandsIcon = document.querySelector('.brands__button svg');
const buttonBrandsText = document.querySelectorAll('.brands__button span');
const textServices = document.querySelector('.services__text-body');
const buttonServices = document.querySelector('.services__button');
const buttonServicesIcon = document.querySelector('.services__button svg');
const buttonServicesText = document.querySelectorAll('.services__button span');
const buttonRepair = document.querySelector('.repair__button');
const listRepair = document.querySelector('.repair__list');
const buttonRepairIcon = document.querySelector('.repair__button svg');
const buttonRepairText = document.querySelectorAll('.repair__button span');
let fixBlocks = document.querySelectorAll('.fix-block');


export {page, minWIdthDesktop, headerWrapper, btnSetting, btnToogle, overlay, btnList, headerBody, buttonBrands, buttonBrandsIcon, buttonBrandsText, listBrands, buttonServices, buttonServicesIcon, buttonServicesText, buttonRepair, listRepair, buttonRepairIcon, buttonRepairText, textServices, fixBlocks}
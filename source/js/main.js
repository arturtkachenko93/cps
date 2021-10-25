import Swiper, {Pagination} from 'swiper';
Swiper.use([Pagination]);
import '../../node_modules/swiper/swiper.scss';
import '../../node_modules/swiper/modules/pagination/pagination.scss';
import '../index.html';
import 'focus-visible';
import '../scss/style.scss';
import {page, minWIdthDesktop, headerWrapper, btnSetting, btnToogle, overlay, btnList, headerBody, buttonBrands, listBrands, buttonServices, buttonRepair, listRepair,textServices} from './variables';

/* Navigation */

const menuShowDesktop = (e) => {
  if (e.matches) {
    headerWrapper.classList.remove('header__wrapper--closed');
    headerBody.classList.remove('header__body--border-bottom');
    return;
  }

  if (!headerWrapper.classList.contains('header__wrapper--closed')) {
    headerWrapper.classList.add('header__wrapper--closed');
    overlay.classList.remove('page__background-modal--visible');
    btnList.classList.remove('header__buttons-list--offset');
    btnToogle.classList.remove('header__button-menu--open');
    headerBody.classList.add('header__body--border-bottom');
  }
}

minWIdthDesktop.addListener(menuShowDesktop);
menuShowDesktop(minWIdthDesktop);

const menuClose = () => {
  btnToogle.classList.toggle('header__button-menu--open')
  headerWrapper.classList.toggle('header__wrapper--closed');
  btnList.classList.toggle('header__buttons-list--offset');
  btnSetting.classList.toggle('button-round--search');
  overlay.classList.toggle('page__background-modal--visible');
  page.classList.remove('page__body--lock');
}

btnToogle.addEventListener('click', () => {
  menuClose();
})

overlay.addEventListener('click', (e) => {
  menuClose();
})

page.addEventListener('keyup', (e) => {
  if (e.keyCode === 27) {
    menuClose();
  }
})


/* Buttons "Показать все/Скрыть все" */

const buttonTextToogle = (element, textVisible, textHidden, show) => {
  if (element.textContent === textVisible) {
    element.textContent = textHidden;
    element.classList.add(show);
  } else if (element.textContent === textHidden) {
    element.textContent = textVisible;
    element.classList.remove(show);
  }
};

buttonServices.addEventListener('click', (e) => {
  e.preventDefault();
  textServices.classList.toggle('services__text-content--visible');
  buttonTextToogle(buttonServices, 'Читать далее', 'Скрыть', 'services__button--rotate');
  buttonServices.classList.toggle('services__button--bottom');
});

buttonBrands.addEventListener('click', (e) => {
  e.preventDefault();
  listBrands.classList.toggle('brands__list--visible');
  buttonTextToogle(buttonBrands, 'Показать все', 'Скрыть', 'brands__button--rotate');
});

buttonRepair.addEventListener('click', (e) => {
  e.preventDefault();
  listRepair.classList.toggle('repair__list--visible');
  buttonTextToogle(buttonRepair, 'Показать все', 'Скрыть', 'repair__button--rotate');
});

/* Swiper slider */

const breakpoint = window.matchMedia( '(min-width: 768px)' );
let swiper

const dissableSwiper = () => {
  swiper.forEach(elem => {
    elem.destroy(true, true);
  });
}

const breakpointChecker = function() {
  if (breakpoint.matches === true) {
    if(swiper !== undefined) {
      dissableSwiper();
      return;
    }
  } else if ( breakpoint.matches === false ) {
    return enableSwiper();
  }
};

const enableSwiper = () => {
    swiper = new Swiper(".swiper", {
    loop: true,
    loopedSlides: 3,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    slidesPerView: "auto",
    speed: 800,
  });
}

breakpoint.addListener(breakpointChecker);
breakpointChecker();


/* Modals */

const modals = document.querySelectorAll('.modal')
const modalOverlay = document.querySelector('.modals-overlay');
const buttonsModal = document.querySelectorAll(`[data-modal-path]`);
const buttonModalClose = document.querySelectorAll('.modal__close-btn');

buttonsModal.forEach((el) => {
  el.addEventListener('click', (e) => {
    const modalPath = e.currentTarget.getAttribute('data-modal-path');
    modals.forEach((el) => {
      el.classList.remove('modal--visible');
    });
    modalOverlay.classList.toggle('modals-overlay--visible');
    document.querySelector(`[data-modal=${modalPath}]`).classList.add('modal--visible');
    page.classList.add('page__body--lock');
  })
});

buttonModalClose.forEach((el) => {
  el.addEventListener('click', (e) => {
    modalOverlay.classList.toggle('modals-overlay--visible');
    page.classList.remove('page__body--lock');
  })
})

modalOverlay.addEventListener('click', (e) => {
  e.target === modalOverlay ? modalOverlay.classList.toggle('modals-overlay--visible') : null;
})

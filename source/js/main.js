import Swiper, {Pagination} from 'swiper';
Swiper.use([Pagination]);
import '../../node_modules/swiper/swiper.scss';
import '../../node_modules/swiper/modules/pagination/pagination.scss';
import '../index.html';
import 'focus-visible';
import '../scss/style.scss';
import {page, minWIdthDesktop, headerWrapper, btnSetting, btnToogle, overlay, btnList, headerBody, buttonBrands, buttonBrandsIcon, buttonBrandsText, listBrands, buttonServices, buttonServicesIcon, buttonServicesText, buttonRepair, listRepair, buttonRepairIcon, buttonRepairText, textServices, fixBlocks} from './variables';

/* Navigation */

const menuShowDesktop = (e) => {
  const expandedBtn = btnToogle.getAttribute('aria-expanded') === 'true' || false;

  if (e.matches) {
    btnToogle.setAttribute('aria-expanded', !expandedBtn);
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
  const expandedBtn = btnToogle.getAttribute('aria-expanded') === 'true' || false;
  btnToogle.setAttribute('aria-expanded', !expandedBtn);
  btnToogle.classList.toggle('header__button-menu--open');
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


const servicesContentTextShow = () => {
  const blockShow = () => {
    const expandedBtn = buttonServices.getAttribute('aria-expanded') === 'true' || false;
    textServices.style.maxHeight = `${textServices.scrollHeight}px`;
    buttonServicesIcon.classList.add('svg-rotate');
    buttonServices.setAttribute('aria-expanded', !expandedBtn);
    buttonServicesText.forEach((el) => {
      el.classList.toggle('services__button-toggle');
    })
  }

  const blockHide = () => {
    const expandedBtn = buttonServices.getAttribute('aria-expanded') === 'true' || false;
    textServices.removeAttribute('style');
    buttonServicesIcon.classList.remove('svg-rotate');
    buttonServices.setAttribute('aria-expanded', !expandedBtn);
    buttonServicesText.forEach((el) => {
      el.classList.toggle('services__button-toggle');
    })
  }

  buttonServices.addEventListener('click', () => {
    if (textServices.hasAttribute('style')) {
      blockHide()
    } else {
      blockShow();
    }
  });
}

servicesContentTextShow();

const brandsBlockShow = () => {
  const blockShow = () => {
    const expandedBtn = buttonBrands.getAttribute('aria-expanded') === 'true' || false;
    listBrands.style.maxHeight = `${listBrands.scrollHeight}px`;
    buttonBrandsIcon.classList.add('svg-rotate');
    buttonBrands.setAttribute('aria-expanded', !expandedBtn);
    buttonBrandsText.forEach((el) => {
      el.classList.toggle('brands__button-toggle');
    })
  }

  const blockHide = () => {
    const expandedBtn = buttonServices.getAttribute('aria-expanded') === 'true' || false;
    listBrands.removeAttribute('style');
    buttonBrandsIcon.classList.remove('svg-rotate');
    buttonBrands.setAttribute('aria-expanded', !expandedBtn);
    buttonBrandsText.forEach((el) => {
      el.classList.toggle('brands__button-toggle');
    })
  }

  buttonBrands.addEventListener('click', () => {
    if (listBrands.hasAttribute('style')) {
      blockHide()
    } else {
      blockShow();
    }
  });
}

brandsBlockShow();

const repairBlockShow = () => {
  const blockShow = () => {
    const expandedBtn = buttonRepair.getAttribute('aria-expanded') === 'true' || false;
    listRepair.style.maxHeight = `${listRepair.scrollHeight}px`;
    buttonRepairIcon.classList.add('svg-rotate');
    buttonRepair.setAttribute('aria-expanded', !expandedBtn);
    buttonRepairText.forEach((el) => {
      el.classList.toggle('repair__button-toggle');
    })
  }

  const blockHide = () => {
    const expandedBtn = buttonRepair.getAttribute('aria-expanded') === 'true' || false;
    listRepair.removeAttribute('style');
    buttonRepairIcon.classList.remove('svg-rotate');
    buttonRepair.setAttribute('aria-expanded', !expandedBtn);
    buttonRepairText.forEach((el) => {
      el.classList.toggle('repair__button-toggle');
    })
  }

  buttonRepair.addEventListener('click', () => {
    if (listRepair.hasAttribute('style')) {
      blockHide()
    } else {
      blockShow();
    }
  });
}

repairBlockShow();

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

const disableScroll = () => {
  let paddingOffset = window.innerWidth - page.offsetWidth + 'px';
  page.style.paddingRight = paddingOffset;
  fixBlocks.forEach((el) => {
    el.style.paddingRight = paddingOffset;
  })
}

const enableScroll = () => {
  page.style.paddingRight = '0px';
  fixBlocks.forEach((el) => {
    el.style.paddingRight = '0px';
  })
}

buttonsModal.forEach((el) => {
  el.addEventListener('click', (e) => {
    const modalPath = e.currentTarget.getAttribute('data-modal-path');
    disableScroll()
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
    enableScroll();
    modalOverlay.classList.toggle('modals-overlay--visible');
    page.classList.remove('page__body--lock');
  })
})

modalOverlay.addEventListener('click', (e) => {
  e.target === modalOverlay ? modalOverlay.classList.toggle('modals-overlay--visible') : null;
})
import { activeProduct } from './components/activeProduct.js'
import { cartMenu } from './components/cartMenu.js'
import { darkTheme } from './components/darkTheme.js'
import { headerScroll } from './components/headerScroll.js'
import { load } from './components/load.js'
import { navMenu } from './components/navMenu.js'
import { sectionActive } from './components/sectionActive.js'

window.addEventListener('load', function () {
  load()
})

document.addEventListener('DOMContentLoaded', function () {
  darkTheme()
  headerScroll()
  navMenu()
  cartMenu()
  sectionActive()
  activeProduct()
  mixitup('.products__content', {
    selectors: {
      target: '.products__card'
    },
    animation: {
      duration: 300
    }
  }).filter('all')
})



const carrousel = document.querySelector('.carrousel-items');

let maxScrollLeft = carrousel.scrollWidth - carrousel.clientWidth;
let intervalo = null;
let step = 1;

const start = () => {
   intervalo = setInterval(function () {
      carrousel.scrollLeft = carrousel.scrollLeft + step;
    if(carrousel.scrollLeft === maxScrollLeft ) {
      step = step * -1;
    } else if(carrousel.scrollLeft === 0){
      step = step * -1;
    }
  }, 10);
};

const stop = () => {
  clearInterval(intervalo);
};

carrousel.addEventListener('mouseover', () => {
  stop()
});

carrousel.addEventListener('mouseout', () => {
  start()
});

start()

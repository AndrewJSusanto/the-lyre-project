// import { addDotBtnsAndClickHandlers } from './buttons.js';
import { addPrevNextBtnsClickHandlers } from './buttons.js';

const emblaNode = document.querySelector('.embla');
const options = { loop: true };
const autoplayOptions = { delay: 10000, stoponInteraction: true};
const plugins = [EmblaCarouselAutoplay(autoplayOptions)];

const rootNode = document.querySelector('.embla');
const viewportNode = rootNode.querySelector('.embla__viewport');

const buttonContainer = document.getElementById('button-container');
const prevButtonNode = rootNode.querySelector('.embla__button--prev')
const nextButtonNode = rootNode.querySelector('.embla__button--next')

// const dotsNode = rootNode.querySelector('.embla__dots');
const emblaApi = EmblaCarousel(viewportNode, options, plugins);

const onNavButtonClick = (emblaApi) => {
  const autoplay = emblaApi?.plugins()?.autoplay
  if (!autoplay) return

  const resetOrStop =
    autoplay.options.stopOnInteraction === false
      ? autoplay.reset
      : autoplay.stop

  resetOrStop()
}

// const removeDotBtnsAndClickHandlers = addDotBtnsAndClickHandlers(
//     emblaApi,
//     dotsNode,
//     onNavButtonClick
// )

const removePrevNextBtnsClickHandlers = addPrevNextBtnsClickHandlers(emblaApi, prevButtonNode, nextButtonNode)


// emblaApi.on('destroy', removeDotBtnsAndClickHandlers)
emblaApi.on('destroy', removePrevNextBtnsClickHandlers)

// prevButtonNode.addEventListener('click', embla.scrollPrev, false);
// nextButtonNode.addEventListener('click', embla.scrollNext, false);

import { addDotBtnsAndClickHandlers } from './buttons.js';

const emblaNode = document.querySelector('.embla');
const options = { loop: false };
const autoplayOptions = { delay: 5000, stoponInteraction: true};
const plugins = [EmblaCarouselAutoplay(autoplayOptions)];

const rootNode = document.querySelector('.embla');
const viewportNode = rootNode.querySelector('.embla__viewport');

// const buttonContainer = document.getElementById('button-container');
// const prevButtonNode = rootNode.querySelector('.embla__prev')
// const nextButtonNode = rootNode.querySelector('.embla__next')

const dotsNode = rootNode.querySelector('.embla__dots');
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

const removeDotBtnsAndClickHandlers = addDotBtnsAndClickHandlers(
    emblaApi,
    dotsNode,
    onNavButtonClick
)

emblaApi.on('destroy', removeDotBtnsAndClickHandlers)

// prevButtonNode.addEventListener('click', embla.scrollPrev, false);
// nextButtonNode.addEventListener('click', embla.scrollNext, false);

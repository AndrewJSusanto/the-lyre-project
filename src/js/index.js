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


// Autoplay onClick event to pause/play background video (click anywhere on landing)
var bgv = document.getElementById("IWLME");
var landing = document.getElementById("landing");

bgv.pause();
bgv.style.filter = "blur(5px) brightness(0.4)";
bgv.style.transition = "all 1s ease-in-out";

landing.addEventListener("click", function(e) {
    if (bgv.paused) {
      bgv.play();
      bgv.style.filter = "none";
    }
    else {
      bgv.pause();
      bgv.style.filter = "blur(5px) brightness(0.4)";
      bgv.style.transition = "all 0.6s ease-in-out";
    }
})

// Prevents autoplay onclick event from triggering when clicking the link redirect
// Was causing an issue with mobile navbar interaction when concert-redirect was missing.
// Remove when no concert redirect, readd later when needed.

// var concertRedirect = document.getElementById("concert-redirect");
// concertRedirect.addEventListener("click", function(e) {
//   e.stopPropagation();
// })



// NavBar mobile interaction (injected instead)

let navbar = document.getElementById("navbar-mobile");
let popout = document.getElementById("navbar-mobile-pop-up");
let overlay = document.getElementById("overlay");
navbar.addEventListener("click", function(e) {
  navbar.classList.toggle("change");
  popout.classList.toggle("change");
  overlay.classList.toggle("change");
  console.log(popout);
})

// Tap-on/tap-off concert card mobile interaction

// document.addEventListener("DOMContentLoaded", () => {
//   const concertCard = document.querySelectorAll(".concert-hover");

//   if(window.matchMedia("(hover: none)").matches) { // hover: none describes touch devices that cannot use hover controls. 
//     concertCard.forEach(card => { // for each member within the concert card, toggle desktop elements off and mobile/touch elements on.
//       card.addEventListener("click", () => {
//         card.classList.toggle("active");
//       })
//     })
//   }
// })
const gallery = document.getElementById("cloud-gallery");

function populateGallery() {
  const CLOUD_NAME = "dzvswz1rz";
  const ASSET_FOLDER = "tlp";
  const THUMB = "c_fill,w_320,h_320,f_auto,q_auto";

  if (gallery.children.length > 0) {
    console.log('wat');
  }
  
  const galleryURLs = Array.from({length: 18}, (_, i) => 
    `https://res.cloudinary.com/${CLOUD_NAME}/image/upload/tlp/gallery/${String(i+1).padStart(2,'0')}.jpg`
  );
  const thumbURLs = Array.from({length: 18}, (_, i) =>
    `https://res.cloudinary.com/${CLOUD_NAME}/image/upload/${THUMB}/tlp/gallery/${String(i+1).padStart(2,'0')}.jpg`
  );

  galleryURLs.forEach((url, idx) => {
    const lblink = document.createElement("a");
    lblink.setAttribute("href", url);
    lblink.setAttribute("data-fslightbox", "gallery");
    
    const img = new Image();
    img.src = thumbURLs[idx];
    img.alt = `Gallery image ${idx+1}`;
    img.className = "gallery-img";
    img.loading = "lazy";

    lblink.appendChild(img);
    gallery.appendChild(lblink);
    refreshFsLightbox();

    img.onerror = () => {
      console.warn(`Image not found: ${url}`);
      resolve(false);
    }

  })
}

window.addEventListener("DOMContentLoaded", populateGallery);
window.addEventListener("pageshow", (e) => {
  if(e.persisted) {
    populateGallery();
  }
});

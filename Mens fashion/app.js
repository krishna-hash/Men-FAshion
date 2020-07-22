const hamberger = document.querySelector(".humberger");
const links = document.querySelector(".links");
const fading = document.querySelectorAll(".links li");

hamberger.addEventListener("click", () => {
  links.classList.toggle("open");
  fading.forEach((fades) => {
    fades.classList.toggle("fade");
  });
});

window.addEventListener("scroll", function () {
  var header = document.querySelector("ul");
  header.classList.toggle("sticky", window.scrollY > 0);
});

const demo = document.querySelector("#demo");
const video = demo.querySelector("video");
const text = demo.querySelector("h2");

const controller = new ScrollMagic.Controller();

let scene = new ScrollMagic.Scene({
  duration: 10000,
  triggerElement: demo,
  triggerHook: 0,
})

  .setPin(demo)
  .addTo(controller);
const animation = TweenMax.fromTo(text, 2, { opacity: 5 }, { opacity: 0 });

let scene1 = new ScrollMagic.Scene({
  duration: 2000,
  triggerElement: demo,
  triggerHook: 0,
})

  .setTween(animation)
  .addTo(controller);

let accelamount = 0.1;
let scrollpos = 0;
let delay = 0;

scene.on("update", (e) => {
  scrollpos = e.scrollPos / 1000;
});

setInterval(() => {
  delay += (scrollpos - delay) * accelamount;
  video.currentTime = delay;
}, 33.333);

const els = document.querySelectorAll("[data-aos]");
// console.log(els);

els.forEach((el) => {
  if (el.getAttribute("data-entrypoint")) {
    var options = {
      rootMargin: `${el.getAttribute("data-entrypoint")}`,
    };
  } else {
    var options = {
      rootMargin: "-15%",
    };
  }

  if (el.getAttribute("data-delay")) {
    el.style.animationDelay = el.getAttribute("data-delay") + "ms";
  }
  const aosObs = new IntersectionObserver((entries, aosObs) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        el.classList.add("anim");
        aosObs.unobserve;
      } else {
        console.log(`${el.className} is out of range`);
        if (el.getAttribute("data-reanimate")) {
          el.classList.remove("anim");
        }
      }
    });
  }, options);
  aosObs.observe(el);
});

const images = document.querySelectorAll(".lazy");
const lazyOptions = {
  rootMargin: "40% 0%",
};
images.forEach((image) => {
  const imageObs = new IntersectionObserver((entries, imageObs) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        image.src = image.getAttribute("data-src");
        image.classList.add("lazy-in");
        imageObs.unobserve;
      }
    });
  }, lazyOptions);
  imageObs.observe(image);
});

-- INSTRUCTIONS --

- link to stylesheet at "https://darrenharroff.github.io/animate-on-scroll/aos.css"

- link to js at "https://darrenharroff.github.io/animate-on-scroll/aos.js"

- add interaction by adding a "data-aos" custom attribute to html elements. Set this property to one of the available settings for different animations:

  - in
  - in-still
  - up
  - left
  - right
  - scaleX-left
  - scaleX-right

- add optional animation delay by adding "data-delay" custom attribute to the html element, set to any number in ms without unit label (ex: "data-delay = 100" for 100ms, "data-delay = 1000" for 1s).

- add lazy loading to images by appending the class ".lazy" to an element, and setting it's "src" to nothing, storing it's file path in a "data-src" custom attribute.

* all animations make use of the IntersectionObserver api, and are therefore suited for modern browsers. A fallback is coded into CSS using "@supports (display: grid)" as a modern-browser filter. Those that do not support it will bypass the animations. If is not supported by a browser, images will currently not load.

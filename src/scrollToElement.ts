function scrollTo(targetPosition: number, scrollDistance: number, duration: number, easing: Function) {
  let time = 0;
  const minTime = 0;
  const diff = Math.min(scrollDistance, 100);

  for (let i = 0, len = diff; i <= len; i++) {
    // eslint-disable-next-line no-loop-func
    (s => {
      setTimeout(() => {
        // eslint-disable-next-line no-mixed-operators
        const y = Math.abs(targetPosition - (scrollDistance - (scrollDistance / diff) * s));
        window.scrollTo(0, -y);
      }, time);
    })(i);

    time = easing(i, minTime, duration, diff);
  }
}

function scrollToElement(node: HTMLElement, duration: number, easing: Function) {
  const targetPosition = node.getBoundingClientRect().top + (window.pageYOffset || window.scrollY);
  const scrollDistance = node.getBoundingClientRect().top;
  scrollTo(targetPosition, scrollDistance, duration, easing);
}

// http://stackoverflow.com/questions/12081547/applying-easing-to-settimeout-delays-within-a-loop
// eslint-disable-next-line
function easeInQuad(t: number, b: number, c: number, d: number) {
  return c * (t /= d) * t + b;
}

const easing = {
  easeInQuad
};

export { scrollTo, scrollToElement, easing };

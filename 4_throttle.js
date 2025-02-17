function throttle(fn, delay) {
  let lastCall = 0;
  let timeoutId = null;

  return function (...args) {
    let now = Date.now();

    if (now - lastCall >= delay) {
      fn.apply(this, args);
      lastCall = now;
    } else if (!timeoutId) {
      timeoutId = setTimeout(() => {
        fn.apply(this, args);
        lastCall = Date.now();
        timeoutId = null;
      }, delay - (now - lastCall));
    }
  };
}

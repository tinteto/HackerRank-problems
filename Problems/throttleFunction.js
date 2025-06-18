function throttle(func, delay) {
  let lastCall = 0;

  return function(...args) {
    const now = Date.now();

    if (now - lastCall >= delay) {
      lastCall = now;
      func.apply(this, args);
    }
  };
}

const throttledLog = throttle(console.log, 1000);
throttledLog("Hi");      // logs immediately
throttledLog("Hello");   // ignored if within 1000ms

setTimeout(() => throttledLog("After 1.1s"), 1100);  // logs "After 1.1s"



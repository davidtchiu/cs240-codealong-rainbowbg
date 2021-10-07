const DELAY = 1000; // 1 sec

// // Version 1: Why does this skip to violet?
// delayedChangeBGColor("red", DELAY);
// delayedChangeBGColor("orange", DELAY);
// delayedChangeBGColor("yellow", DELAY);
// delayedChangeBGColor("blue", DELAY);
// delayedChangeBGColor("green", DELAY);
// delayedChangeBGColor("indigo", DELAY);
// delayedChangeBGColor("violet", DELAY);

// Version 2: nested promises (pyramid of doom)
delayedChangeBGColor("red", DELAY).then(() => {
  delayedChangeBGColor("orange", DELAY).then(() => {
    delayedChangeBGColor("yellow", DELAY).then(() => {
      delayedChangeBGColor("green", DELAY).then(() => {
        delayedChangeBGColor("blue", DELAY).then(() => {
          delayedChangeBGColor("indigo", DELAY).then(() => {
            delayedChangeBGColor("violet", DELAY).then(() => {});
          });
        });
      });
    });
  });
});

// Version 3: With Chaining (Better!)
// delayedChangeBGColor("red", DELAY)
//   .then(() => delayedChangeBGColor("orange", DELAY))
//   .then(() => delayedChangeBGColor("yellow", DELAY))
//   .then(() => delayedChangeBGColor("blue", DELAY))
//   .then(() => delayedChangeBGColor("green", DELAY))
//   .then(() => delayedChangeBGColor("indigo", DELAY))
//   .then(() => delayedChangeBGColor("violet", DELAY));

// // Version 4: With async + await (SO MUCH Better!)
// doRainbow();
// async function doRainbow() {
//   await delayedChangeBGColor("red", DELAY);
//   await delayedChangeBGColor("orange", DELAY);
//   await delayedChangeBGColor("yellow", DELAY);
//   await delayedChangeBGColor("blue", DELAY);
//   await delayedChangeBGColor("green", DELAY);
//   await delayedChangeBGColor("indigo", DELAY);
//   await delayedChangeBGColor("violet", DELAY);
// }

// Version 5: With async + await (SO MUCH Better!)
// doRainbow();
// async function doRainbow() {
//   await sleep(1000);
//   changeBGColor("red");
//   await sleep(1000);
//   changeBGColor("orange");
//   await sleep(1000);
//   changeBGColor("yellow");
//   await sleep(1000);
//   changeBGColor("green");
//   await sleep(1000);
//   changeBGColor("blue");
//   await sleep(1000);
//   changeBGColor("indigo");
//   await sleep(1000);
//   changeBGColor("violet");
// }

// function sleep(delayInMillis) {
//   return new Promise((resolve) => setTimeout(resolve, delayInMillis));
// }

// function changeBGColor(color) {
//   let node = document.querySelector("body");
//   node.style.backgroundColor = color;
// }

/**
 * Delayed change of background color
 * @param {string} color
 * @param {number} delayInMillis
 * @returns a promise object that resolves a delayed
 * change in background color
 */
function delayedChangeBGColor(color, delayInMillis) {
  return new Promise((resolve) => {
    setTimeout(() => {
      let node = document.querySelector("body");
      node.style.backgroundColor = color;
      resolve(); // promise is resolved
    }, delayInMillis);
  });
}

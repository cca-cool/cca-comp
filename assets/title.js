let titleInterval;
let title = ["_", "c", "cc", "cca", "o", "ow", "own", "owns", "owns ", "owns y", "owns yo", "owns you", "_", ];

let iter = 0;
setInterval(() => {
    document.title = title[iter++ % title.length]
    if (iter >= title.length + 1) { iter = 0; }
}, 350)
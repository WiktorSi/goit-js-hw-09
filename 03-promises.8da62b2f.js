!function(){function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},o={},r=t.parcelRequired7c6;null==r&&((r=function(e){if(e in n)return n[e].exports;if(e in o){var t=o[e];delete o[e];var r={id:e,exports:{}};return n[e]=r,t.call(r.exports,r,r.exports),r.exports}var u=new Error("Cannot find module '"+e+"'");throw u.code="MODULE_NOT_FOUND",u}).register=function(e,t){o[e]=t},t.parcelRequired7c6=r);var u=r("6JpON");document.querySelector('input[name="delay"]'),document.querySelector('input[name="step"]'),document.querySelector('input[name="amount"]'),document.querySelector('button[type="submit"]');function a(e,t){var n=Math.random()>.3;return new Promise((function(o,r){setTimeout((function(){n?o({position:e,delay:t}):r({position:e,delay:t})}),t)}))}document.querySelector(".form").addEventListener("submit",(function(t){t.preventDefault();var n=t.currentTarget.elements;n.amount,n.delay,n.step,console.log(t.currentTarget.step.value);for(var o=t.currentTarget.amount.value,r=Number(t.currentTarget.delay.value),i=Number(t.currentTarget.step.value),c=1;c<=o;c++)a(c,r).then((function(t){var n=t.position,o=t.delay;e(u).Notify.success("Fulfilled promise ".concat(n," in ").concat(o,"ms"))})).catch((function(t){var n=t.position,o=t.delay;e(u).Notify.failure("Rejected promise ".concat(n," in ").concat(o,"ms"))})),r+=i}))}();
//# sourceMappingURL=03-promises.8da62b2f.js.map
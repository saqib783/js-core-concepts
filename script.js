function createCounter() {
let count = 0;
return function () {
count++;
document.getElementById("count").innerText = count;
};
}
const counter = createCounter();
document.getElementById("btn").addEventListener("click", counter);




// ----------------- HIGH ORDER FUNCTION -----------------
function applyStyle(element, styleFn) {
styleFn(element);
}
document.getElementById("styleBtn").addEventListener("click", () => {
applyStyle(document.body, (el) => {
el.style.background = "#001f3f";
el.style.color = "#fff";
});
});




// ----------------- CALLBACK FUNCTION -----------------
function showDelayed(msg, callback) {
setTimeout(() => {
document.getElementById("callbackMsg").innerText = msg;
callback();
}, 1000);
}
document.getElementById("callbackBtn").addEventListener("click", () => {
showDelayed("Processing...", () => {
document.getElementById("callbackMsg").innerText += " Done!";
});
});




// ----------------- IIFE -----------------
(function () {
console.log("IIFE executed - Private variable hidden");
})();
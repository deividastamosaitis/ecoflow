let home = document.querySelector(".home");
let products = document.querySelector(".products");
home.addEventListener("mousewheel", function (e) {
  e.preventDefault();
  window.scrollTo(products, 5000);
});

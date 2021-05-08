const $ = document;

//select
let container = $.querySelector(".container");
let inp = $.querySelector("input");
let section = $.querySelector("section");

//events
container.addEventListener("mouseover", () => {
  inp.style.width = "20rem";
  inp.style.marginRight = "2rem";
  inp.style.padding = "1rem 0 1rem 1rem";
  inp.focus();
});
section.addEventListener("click", () => {
  inp.style.width = "0rem";
  inp.style.marginRight = "0rem";
  inp.style.padding = "0";
});

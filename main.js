// let driversLink = document.getElementById("driversLink");
// let driversLink02 = document.getElementById("driversLink02");
// let driversLink03 = document.getElementById("driversLink03");
// let background = document.querySelector("header");
// let originalBackgroundImage = background.style.backgroundImage;

// driversLink.addEventListener("click", function () {
//   background.style.backgroundImage = "url(images/help.jpg)";
// });

// driversLink02.addEventListener("click", function () {
//   background.style.backgroundImage = "url(images/statistics.jpg)";
// });

// driversLink03.addEventListener("click", function () {
//   background.style.backgroundImage = originalBackgroundImage;
// });
// const allElement = document.querySelectorAll("#prices , .btn-2 , .Check_Title");
// console.log(allElement);
// const observer = new IntersectionObserver((enteries) => {
//   enteries.forEach((entry) => {
//     console.log(entry);
//     if (entry.isIntersecting) {
//       entry.target.classList.add("show");
//     } else {
//       entry.target.classList.remove("show");
//     }
//   });
// });
// allElement.forEach((element) => {
//   observer.observe(element);
// }); //
// const allElements = document.querySelectorAll(
//   "#prices , .btn-2 , .Check_Title"
// );

// const observer = new IntersectionObserver((entries) => {
//   entries.forEach((entry) => {
//     if (entry.isIntersecting) {
//       const delay = entry.target.dataset.delay || 0;
//       setTimeout(() => {
//         entry.target.classList.add("show");
//       }, delay);
//     } else {
//       entry.target.classList.remove("show");
//     }
//   });
// });

// allElements.forEach((element) => {
//   observer.observe(element);
// });
// const numbers = [
//   1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 2, 3, 5, 4, 6, 7, 8, 9, 10, 2, 3,
// ];
// const num = numbers.filter((value, index, arr) => {
//   return arr.indexOf(value) === index;
// });
// console.log(num);
const numbers = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 2, 3, 5, 4, 6, 7, 8, 9, 10, 2, 3,
];

const uniqueNumbers = [...new Set(numbers)];

console.log(uniqueNumbers);

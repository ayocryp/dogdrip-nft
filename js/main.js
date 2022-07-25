// Random Dogdrip
let img = document.getElementById("image");
let imageData = [
  "/assets/dog1.png",
  "/assets/dog2.png",
  "/assets/dog3.png",
  "/assets/dog4.png",
  "/assets/dog5.png",
  "/assets/dog.png",
  "/assets/dog6.png",
  "/assets/dog7.png",
];
setInterval(function () {
  let random = Math.floor(Math.random() * 8);
  img.src = imageData[random];
}, 400);

// Countdown
let countDown = new Date("Oct 2, 2022 00:00:00").getTime();
let launchDate = setInterval(function () {
  // current date
  let currentDate = new Date().getTime();

  // Time difference between current date and launch date
  let timeDifference = countDown - currentDate;

  // Days, Hours, Minuntes and Sec calculation
  let days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
  let hours = Math.floor(
    (timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  let minuntes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
  let seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

  // display to the DOM
  document.querySelector("#days").innerText = `${days}`;
  document.querySelector("#hours").innerText = `${hours}`;
  document.querySelector("#minutes").innerText = `${minuntes}`;
  document.querySelector("#sec").innerText = `${seconds}`;

  if (timeDifference < 0) {
    clearInterval(launchDate);
    document.querySelector("#days").innerText = `00`;
    document.querySelector("#hours").innerText = `00`;
    document.querySelector("#minutes").innerText = `00`;
    document.querySelector("#sec").innerText = `00`;
  }
}, 1000);

let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides((slideIndex += n));
}

// Slick carousel

$(".slide-inner-container").slick({
  centerMode: true,
  centerPadding: "60px",
  slidesToShow: 3,
  responsive: [
    {
      breakpoint: 768,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: "40px",
        slidesToShow: 3,
      },
    },
    {
      breakpoint: 480,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: "40px",
        slidesToShow: 1,
      },
    },
  ],
});

const playPauseBtn = document.querySelector(".play-pause");
const audio = document.querySelector(".audio");
const progressBar = document.querySelector("#progress");
const preloader = document.getElementById("preloader");

playPauseBtn.addEventListener("click", () => {
  if (audio.paused) {
    audio.play();
    playPauseBtn.innerHTML = '<i class="fa-solid fa-pause"></i>';
  } else {
    audio.pause();
    playPauseBtn.innerHTML = '<i class="fa-solid fa-play"></i>';
  }
});

audio.addEventListener("timeupdate", () => {
  const progress = (audio.currentTime / audio.duration) * 100;
  progressBar.value = progress;
});

progressBar.addEventListener("input", () => {
  const progress = (progressBar.value * audio.duration) / 100;
  audio.currentTime = progress;
});
const darkModeToggle = document.getElementById("dark-mode-toggle");
const body = document.body;

if (localStorage.getItem("darkMode") === "enabled") {
  body.classList.add("dark-mode");
} else {
  body.classList.remove("dark-mode");
}
darkModeToggle.addEventListener("click", () => {
  if (body.classList.contains("dark-mode")) {
    body.classList.remove("dark-mode");
    localStorage.setItem("darkMode", "disabled");
  } else {
    body.classList.add("dark-mode");
    localStorage.setItem("darkMode", "enabled");
  }
});
window.addEventListener("load", () => {
  preloader.style.display = "none"; 
});

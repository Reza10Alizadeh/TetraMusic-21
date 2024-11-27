const playPauseBtn = document.querySelector(".play-pause"),
  songProgress = document.querySelector(".song-progress"),
  songTime = document.querySelector(".song-time");
let wavesurfer,
  lastUpdateTime = 0;
function playPauseSong() {
  wavesurfer.isPlaying()
    ? (wavesurfer.pause(),
      (playPauseBtn.innerHTML = '<i class="fas fa-play"></i>'))
    : (wavesurfer.play(),
      (playPauseBtn.innerHTML = '<i class="fas fa-pause"></i>'));
}
window.addEventListener("load", () => {
  (wavesurfer = WaveSurfer.create({
    container: "#waveform",
    waveColor: "#ddd",
    progressColor: "#a1a6a5",
    url: "music/Shahram Shabpareh - Mossafer (online-audio-converter.com).mp3",
    borderWidth: 4,
    responsive: !0,
    height: 60,
    barRadius: 4,
  })).on("audioprocess", () => {
    let e = wavesurfer.getCurrentTime();
    e - lastUpdateTime > 0.1 &&
      ((songProgress.value = e), updateSongTime(), (lastUpdateTime = e));
  }),
    songProgress.addEventListener("input", () => {
      wavesurfer.seekTo(songProgress.value / songProgress.max);
    });
}),
  playPauseBtn.addEventListener("click", playPauseSong);
const darkModeToggle = document.getElementById("dark-mode-toggle");
"enabled" === localStorage.getItem("darkMode") &&
  document.body.classList.add("dark-mode"),
  darkModeToggle.addEventListener("click", () => {
    document.body.classList.contains("dark-mode")
      ? (document.body.classList.remove("dark-mode"),
        localStorage.setItem("darkMode", "disabled"))
      : (document.body.classList.add("dark-mode"),
        localStorage.setItem("darkMode", "enabled"));
  });
  window.addEventListener('load', function() {
    document.body.classList.add('loaded');
});

$(document).ready(function () {
  $('.carousel').owlCarousel({
    margin: 20,
    loop: true,
    autoplayTimeout: 2000,
    autoplayHoverPause: true,
    responsive: {
      0: {
        items: 1,
        nav: false
      },
      600: {
        items: 2,
        nav: false
      },
      1000: {
        items: 3,
        nav: false
      }
    }

  });
});

const music = document.querySelector("audio");
const play = document.getElementById("play");

let isPlaying = false;

const playMusic = () => {
  isPlaying = true;
  music.play();
  play.classList.replace("fa-circle-play", "fa-circle-pause");

};
const pauseMusic = () => {
  isPlaying = false;
  music.pause();
  play.classList.replace("fa-circle-pause", "fa-circle-play");

};

play.addEventListener("click", () => {

  isPlaying ? pauseMusic() : playMusic();
 
});



const video = document.querySelector("video");
const title = document.getElementById("title");
const pla = document.getElementById("pla");
const prev = document.getElementById("prev");
const next = document.getElementById("next");


const videos = [
  {
    title: "Chalti Ka Naam Gaadi",

  },
  {
    title: "Amar",

  },

  {
    title: "Mughal-e-Azam",

  },

];



const playVideo = () => {
  isPlaying = true;
  video.play();
  pla.classList.replace("fa-play", "fa-pause");

};
const pauseVideo = () => {
  isPlaying = false;
  video.pause();
  pla.classList.replace("fa-pause", "fa-play");

};

pla.addEventListener("click", () => {

  isPlaying ? pauseVideo() : playVideo();
});



const loadVideos = (videos) => {
  title.textContent = videos.title;
  video.src = "videos/" + videos.title + ".mp4";
};

videoIndex = 0;
loadVideos(videos[0]);
const nextVideo = () => {
  videoIndex = (videoIndex + 1) % videos.length;
  loadVideos(videos[videoIndex]);
  pauseVideo();
};

const prevVideo = () => {
  videoIndex = (videoIndex - 1 + videos.length) % videos.length;
  loadVideos(videos[videoIndex]);
  pauseVideo();

};

next.addEventListener("click", nextVideo);
prev.addEventListener("click", prevVideo);          
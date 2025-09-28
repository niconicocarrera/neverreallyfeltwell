const container = document.getElementById("video-container");
  const video = document.getElementById("teaser-video");

  container.addEventListener("click", () => {
    if (video.paused) {
      video.play();
    } else {
      video.pause();
    }
  });
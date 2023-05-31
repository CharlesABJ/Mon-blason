window.addEventListener("load", function () {
  const triggers = document.querySelectorAll(".trigger");
  const audios = document.querySelectorAll(".audio");

  triggers.forEach(function (trigger, index) {
    trigger.addEventListener("click", function () {
      audios.forEach(function (audio, audioIndex) {
        if (audioIndex !== index) {
          audio.pause();
        }
      });
      audios[index].paused ? audios[index].play() : audios[index].pause();
    });
  });
});

$("#btn-gallery").on("click", openGallery);
function openGallery() {
  $(".gallery").addClass("active");
  $(".close").on("click", function() {
    $(".gallery").removeClass("active")
  })
}

var music = new Audio("bs.mp3");
music.loop = true;
music.volume = 0.7;
music.play()
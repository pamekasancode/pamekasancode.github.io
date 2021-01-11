$("#btn-gallery").on("click", openGallery);
function openGallery() {
  $(".gallery").addClass("active");
  $(".close").on("click", function() {
    $(".gallery").removeClass("active")
  })
}

function ost() {
  var music = new Audio("https://b.top4top.io/m_1837rjfrl0.mp3");
  music.loop = true;
  music.volume = 0.7;
  music.play()
}

ost();

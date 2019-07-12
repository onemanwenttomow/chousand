console.log("sanity check");

var vid = document.getElementById('bgvid');
var playBtn = document.getElementById('btn');
console.log(playBtn);

document.getElementsByClassName('container')[0].addEventListener("click", function(e) {
    e.stopPropagation();
    console.log("clicked");
    vid.paused ? vid.play() : vid.pause();
});

setTimeout(function(){
    console.log("timeout");
    if (vid.paused) {
        vid.play();
        vid.muted = true;
    }
},300);

playBtn.addEventListener("click", function() {
    if (vid.muted === false) {
        vid.muted = true;
        playBtn.innerHTML = '<i id="play" class="fas fa-volume-mute fa-4x"></i>';
    } else {
        vid.muted = false;
        playBtn.innerHTML = '<i id="play" class="fas fa-volume-up fa-4x"></i>';
    }
});

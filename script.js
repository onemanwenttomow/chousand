console.log("sanity check");

document.addEventListener('DOMContentLoaded', function() {
    var vid = document.getElementById('bgvid');
    var playBtn = document.getElementById('btn');
    console.log(playBtn);

    document.querySelector('h1').addEventListener("click", function(e) {
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
    }, 500);

    playBtn.addEventListener("click", function() {
        if (vid.muted === false) {
            vid.muted = true;
            playBtn.innerHTML = '<i id="play" class="fas fa-volume-mute fa-4x"></i>';
        } else {
            vid.muted = false;
            playBtn.innerHTML = '<i id="play" class="fas fa-volume-up fa-4x"></i>';
        }
    });

    const dialog = document.getElementById('dialog');
    const openBtn = document.getElementById('tourbtn');
    const closeBtn = document.getElementById('closeBtn');

    openBtn.addEventListener('click', function() {
        dialog.setAttribute('open', true);
    });

    closeBtn.addEventListener('click', function() {
        dialog.removeAttribute('open');
    });

}, false);

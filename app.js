$(document).ready(function() {

    var sounds = [{
        id: "snare",
        src: "audio/snare.wav"
    }, {
        id: "kick",
        src: "audio/808.wav"
    }, {
        id: "hat",
        src: "audio/hat.mp3"
    }, {
        id: "clap",
        src: "audio/clap.wav"
    }, {
        id: "crunch",
        src: "audio/crunch.wav"
    }, {
        id: "guitar",
        src: "audio/guitarLoop.wav"
    }, {
        id: "tom_hi",
        src: "audio/tom_hi.wav"
    }, {
        id: "tom",
        src: "audio/tom.wav"
    }, {
        id: "vox.wav",
        src: "audio/vox.wav"
    }];
//******************************************************************************
    var audioElement = document.createElement('audio');
    audioElement.setAttribute('src', sounds[8].src);
    window.addEventListener("keydown", checkKeyPressed, false);
    function checkKeyPressed(e) {
        if (e.keyCode == "82") {
          audioElement.play();
          audioElement.currentTime = 0;
        }
    }
    $('.vox').click(function() {
        audioElement.play()
        audioElement.currentTime = 0;
    });
    $('#pause').click(function() {
        audioElement.pause();
      });
//******************************************************************************
    $(document).ready(function() {
        var audioElement = document.createElement('audio');
        audioElement.setAttribute('src', sounds[1].src);
        window.addEventListener("keydown", checkKeyPressed, false);
        function checkKeyPressed(e) {
            if (e.keyCode == "86") {
              audioElement.play();
              audioElement.currentTime = 0;
            }
        }
        $('.808').click(function() {
            audioElement.play();
            audioElement.currentTime = 0;
        });
    });
//******************************************************************************
    $(document).ready(function() {
        var audioElement = document.createElement('audio');
        audioElement.setAttribute('src', sounds[0].src);
        window.addEventListener("keydown", checkKeyPressed, false);
        function checkKeyPressed(e) {
            if (e.keyCode == "78") {
              audioElement.play();
              audioElement.currentTime = 0;
            }
        }
        $('.snare').click(function() {
            audioElement.play();
            audioElement.currentTime = 0;
        });
    });
//******************************************************************************
    $(document).ready(function() {
        var audioElement = document.createElement('audio');
        audioElement.setAttribute('src', sounds[2].src);
        window.addEventListener("keydown", checkKeyPressed, false);
        function checkKeyPressed(e) {
            if (e.keyCode == "66") {
              audioElement.play();
              audioElement.currentTime = 0;
            }
        }
        $('.hat').click(function() {
            audioElement.play();
            audioElement.currentTime = 0;
        });
    });
//******************************************************************************
    $(document).ready(function() {
        var audioElement = document.createElement('audio');
        audioElement.setAttribute('src', sounds[3].src);
        window.addEventListener("keydown", checkKeyPressed, false);
        function checkKeyPressed(e) {
            if (e.keyCode == "72") {
              audioElement.play();
              audioElement.currentTime = 0;
            }
        }
        $('.clap').click(function() {
            audioElement.play();
            audioElement.currentTime = 0;
        });
    });
//******************************************************************************
    $(document).ready(function() {
        var audioElement = document.createElement('audio');
        audioElement.setAttribute('src', sounds[4].src);
        window.addEventListener("keydown", checkKeyPressed, false);
        function checkKeyPressed(e) {
            if (e.keyCode == "89") {
              audioElement.play();
              audioElement.currentTime = 0;
            }
        }
        $('.crunch').click(function() {
            audioElement.play();
            audioElement.currentTime = 0;
        });
    });
//******************************************************************************
    $(document).ready(function() {
        var audioElement = document.createElement('audio');
        audioElement.setAttribute('src', sounds[5].src);
        window.addEventListener("keydown", checkKeyPressed, false);
        function checkKeyPressed(e) {
            if (e.keyCode == "84") {
              audioElement.play();
              audioElement.currentTime = 0;
            }
        }
        $('.guitar').click(function() {
            audioElement.play();
            audioElement.currentTime = 0;

        });
        $('#pause').click(function() {
            audioElement.pause();
        });
    });


//******************************************************************************
    $(document).ready(function() {
        var audioElement = document.createElement('audio');
        audioElement.setAttribute('src', sounds[6].src);
        window.addEventListener("keydown", checkKeyPressed, false);
        function checkKeyPressed(e) {
            if (e.keyCode == "70") {
              audioElement.play();
              audioElement.currentTime = 0;
            }
        }
        $('.tom_hi').click(function() {
            audioElement.play();
            audioElement.currentTime = 0;
        });
    });
//******************************************************************************
    $(document).ready(function() {
        var audioElement = document.createElement('audio');
        audioElement.setAttribute('src', sounds[7].src);
        window.addEventListener("keydown", checkKeyPressed, false);
        function checkKeyPressed(e) {
            if (e.keyCode == "71") {
              audioElement.play();
              audioElement.currentTime = 0;
            }
        }
        $('.tom').click(function() {
            audioElement.play();
            audioElement.currentTime = 0;
        });
    });
});


//******************************************************************************

var sounds = [{
    id: "snare",
    src: "audio/snare.wav",
    keycode: "78"
}, {
    id: "kick",
    src: "audio/808.wav",
    keycode: "86"
}, {
    id: "hat",
    src: "audio/hat.mp3",
    keycode: "66"
}, {
    id: "clap",
    src: "audio/clap.wav",
    keycode: "72"
}, {
    id: "crunch",
    src: "audio/crunch.wav",
    keycode: "89"
}, {
    id: "guitar",
    src: "audio/guitarLoop.wav",
    keycode: "84"
}, {
    id: "tom_hi",
    src: "audio/tom_hi.wav",
    keycode: "70"
}, {
    id: "tom",
    src: "audio/tom.wav",
    keycode: "71"
}, {
    id: "vox.wav",
    src: "audio/vox.wav",
    keycode: "82"
}];
//******************************************************************************
// $(document).ready(function(){
//   var audioElement = document.createElement('audio');
//   for (var i = 0; i < sounds.length; i++) {
//     audioElement.setAttribute('src', this.sounds[i].src);
//     window.addEventListener("keydown", checkKeyPressed, false);
//     function checkKeyPressed(e) {
//         if (e.keyCode == this.sounds[i].id) {
//             audioElement.play();
//             audioElement.currentTime = 0;
//         }
//     }
//   }
// })


$(document).ready(function() {
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
//******************random words generated below********************************

$(document).ready(function() {
    $.getJSON('http://hipsterjesus.com/api/', function(data) {

        var arr = data.text.replace(/\<p\>|\<\/p\>|,|\./g, "").split(" ")
        var rand = Math.floor(Math.random() * arr.length)

        window.addEventListener("keydown", checkKeyPressed, false);

        function checkKeyPressed(e) {
            if (e.keyCode == "67") {
                var randomWord = getRandomWord(arr)
                $('#content').html(randomWord);
                console.log(randomWord);
            }
        }
        $("#next").click(function() {
            // event.preventDefault();
            var randomWord = getRandomWord(arr)
            $('#content').html(randomWord);
            console.log(randomWord);
        });
    });
});
function getRandomWord(words) {
    var rand = Math.floor(Math.random() * words.length)

    if (words[rand].trim() !== "") {
        return words[rand];
    } else {
        return getRandomWord(words)
    }
}
//******************rhyme the given word from above*****************************

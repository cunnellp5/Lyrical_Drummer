var sounds = [{
  class: '.snare',
  src: 'audio/punchSnare.wav',
  keycode: '78'
}, {
  class: '.kick',
  src: 'audio/808.wav',
  keycode: '86'
}, {
  class: '.hat',
  src: 'audio/hat.mp3',
  keycode: '66'
}, {
  class: '.clap',
  src: 'audio/clapMix.wav',
  keycode: '72'
}, {
  class: '.crunch',
  src: 'audio/crunch.wav',
  keycode: '89'
}, {
  class: '.guitar',
  src: 'audio/guitar.wav',
  keycode: '84',
  isLoop: true
}, {
  class: '.tom_hi',
  src: 'audio/tommy.wav',
  keycode: '70'
}, {
  class: '.tom',
  src: 'audio/tommy2.wav',
  keycode: '71'
}, {
  class: '.vox',
  src: 'audio/vox.wav',
  keycode: '82',
  isLoop: true
}];
//************************DRUMPAD***********************************************
$(document).ready(function(){
  sounds.forEach(function(sound){

    var audioElement = document.createElement('audio');
    audioElement.setAttribute('src', sound.src);
    audioElement.setAttribute('keycode', sound.keycode);

    window.addEventListener("keydown", checkKeyPressed, false);
    function checkKeyPressed(key) {
        if (key.keyCode == sound.keycode) {
          // playSound();
          $(sound.class).click();
        }
    }
    function playSound (){
      audioElement.play()
      audioElement.currentTime = 0;
      if (sound.isLoop) {
        sounds.forEach(function(otherSound){
          if (otherSound.isLoop && otherSound !== sound) {
            $(otherSound.class + ' audio')[0].pause()
          }
        })
      }
    }
    $(sound.class).click(playSound);
    $(sound.class).append(audioElement)
  })
    $('#pause').click(function() {
        $('audio').each(function(){
          this.pause();
        })
    });
})
//******************random words generated below********************************
$(document).ready(function() {
  var currentRandomWord = ''
    $.getJSON('https://galvanize-cors.herokuapp.com/http://hipsterjesus.com/api/', function(data) {
        var arr = data.text.replace(/\<p\>|\<\/p\>|,|\./g, "").split(" ")
        var rand = Math.floor(Math.random() * arr.length)
        window.addEventListener("keydown", checkKeyPressed, false);
        function checkKeyPressed(key) {
            if (key.keyCode == "67") {
                var randomWord = getRandomWord(arr)
                $('#content').html(randomWord);
                currentRandomWord = randomWord;
            }
        }
        $("#next").click(function(event) {
            event.preventDefault();
            var randomWord = getRandomWord(arr)
            $('#content').html('');
            $('#content').html(randomWord);
            currentRandomWord = randomWord;
        });
        $("#next2").click(function() {
            var rhyme = ('https://galvanize-cors.herokuapp.com/http://rhymebrain.com/talk?function=getRhymes&word=' + currentRandomWord)

            $.get(rhyme, function(word){
                $('#content2').html('');
              for (var i = 0; i < 5; i++) {
                $('#content2').append(word[i].word + " " + "<br>").css('border-radius','90%');
              }
                $('#content3').html('');
              for (var i = 5; i < 10; i++) {
                $('#content3').append(word[i].word + " " + "<br>").css('border-radius','90%');
              }
                $('#content4').html('');
              for (var i = 10; i < 15; i++) {
                $('#content4').append(word[i].word + " " + "<br>").css('border-radius','90%');
              }
                $('#content5').html('');
              for (var i = 15; i < 20; i++) {
                $('#content5').append(word[i].word + " " + "<br>").css('border-radius','90%');
              }
            })
        })
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
timer = setInterval( function()
{
	var randomColor = 'rgb(' +
 	(Math.floor(Math.random() * ((256-30)+1) + 30)) + ',' +
	(Math.floor(Math.random() * ((256-30)+1) + 30)) + ',' +
	(Math.floor(Math.random() * ((256-30)+1) + 30)) + ')';
	$('.snare').css('backgroundColor', randomColor);
  // $('#content2').css('backgroundColor', randomColor);
}, Math.floor(Math.random() * ((2500-1500)+1) + 1500));
timer = setInterval( function()
{
	var randomColor = 'rgb(' +
 	(Math.floor(Math.random() * ((256-30)+1) + 30)) + ',' +
	(Math.floor(Math.random() * ((256-30)+1) + 30)) + ',' +
	(Math.floor(Math.random() * ((256-30)+1) + 30)) + ')';
	$('.kick').css('backgroundColor', randomColor);
  // $('#content3').css('backgroundColor', randomColor);
}, Math.floor(Math.random() * ((2500-1500)+1) + 1500));
timer = setInterval( function()
{
	var randomColor = 'rgb(' +
 	(Math.floor(Math.random() * ((256-30)+1) + 30)) + ',' +
	(Math.floor(Math.random() * ((256-30)+1) + 30)) + ',' +
	(Math.floor(Math.random() * ((256-30)+1) + 30)) + ')';
	$('.hat').css('backgroundColor', randomColor);
  // $('#content4').css('backgroundColor', randomColor);
}, Math.floor(Math.random() * ((2500-1500)+1) + 1500));
timer = setInterval( function()
{
	var randomColor = 'rgb(' +
 	(Math.floor(Math.random() * ((256-30)+1) + 30)) + ',' +
	(Math.floor(Math.random() * ((256-30)+1) + 30)) + ',' +
	(Math.floor(Math.random() * ((256-30)+1) + 30)) + ')';
	$('.vox').css('backgroundColor', randomColor);
  // $('#content5').css('backgroundColor', randomColor);
}, Math.floor(Math.random() * ((2500-1500)+1) + 1500));
timer = setInterval( function()
{
	var randomColor = 'rgb(' +
 	(Math.floor(Math.random() * ((256-30)+1) + 30)) + ',' +
	(Math.floor(Math.random() * ((256-30)+1) + 30)) + ',' +
	(Math.floor(Math.random() * ((256-30)+1) + 30)) + ')';
	$('.tom_hi').css('backgroundColor', randomColor);
}, Math.floor(Math.random() * ((2500-1500)+1) + 1500));
timer = setInterval( function()
{
	var randomColor = 'rgb(' +
 	(Math.floor(Math.random() * ((256-30)+1) + 30)) + ',' +
	(Math.floor(Math.random() * ((256-30)+1) + 30)) + ',' +
	(Math.floor(Math.random() * ((256-30)+1) + 30)) + ')';
	$('.guitar').css('backgroundColor', randomColor);
}, Math.floor(Math.random() * ((2500-1500)+1) + 1500));
timer = setInterval( function()
{
	var randomColor = 'rgb(' +
 	(Math.floor(Math.random() * ((256-30)+1) + 30)) + ',' +
	(Math.floor(Math.random() * ((256-30)+1) + 30)) + ',' +
	(Math.floor(Math.random() * ((256-30)+1) + 30)) + ')';
	$('.tom').css('backgroundColor', randomColor);
}, Math.floor(Math.random() * ((2500-1500)+1) + 1500));
timer = setInterval( function()
{
	var randomColor = 'rgb(' +
 	(Math.floor(Math.random() * ((256-30)+1) + 30)) + ',' +
	(Math.floor(Math.random() * ((256-30)+1) + 30)) + ',' +
	(Math.floor(Math.random() * ((256-30)+1) + 30)) + ')';
	$('.crunch').css('backgroundColor', randomColor);
}, Math.floor(Math.random() * ((2500-1500)+1) + 1500));
timer = setInterval( function()
{
	var randomColor = 'rgb(' +
 	(Math.floor(Math.random() * ((256-30)+1) + 30)) + ',' +
	(Math.floor(Math.random() * ((256-30)+1) + 30)) + ',' +
	(Math.floor(Math.random() * ((256-30)+1) + 30)) + ')';
	$('.clap').css('backgroundColor', randomColor);
}, Math.floor(Math.random() * ((2500-1500)+1) + 1500));

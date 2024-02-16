function changeImage() {
    var image = document.getElementById('mysound');
    var audio = document.getElementById('myAudio'); // Add an ID to your audio element, assuming its ID is 'myAudio'

    if (image.src.endsWith('asset/off.png')) {
        image.src = 'asset/on.png';
        playAudio();
        audio.volume = 1; // Mute the audio
    } else {
        image.src = 'asset/off.png';
        audio.volume = 0; // Set the audio volume back to normal (1)
    }
}
function playAudio(){
    var audio =document.getElementById('myAudio');
    audio.play();
}
function transition() {
    var tl = new TimelineMax();

    tl.to(CSSRulePlugin.getRule('body:before'), 0.2, { cssRule: { top: '50%' }, ease: Power2.easeOut }, 'close')
        .to(CSSRulePlugin.getRule('body:after'), 0.2, { cssRule: { bottom: '50%' }, ease: Power2.easeOut }, 'close')
        .to($('.loader'), 0.2, { opacity: 1 })
        .to(CSSRulePlugin.getRule('body:before'), 0.2, { cssRule: { top: '0%' }, ease: Power2.easeOut }, '+=1.5', 'open')
        .to(CSSRulePlugin.getRule('body:after'), 0.2, { cssRule: { bottom: '0%' }, ease: Power2.easeOut }, '-=0.2', 'open')
        .to($('.loader'), 0.2, { opacity: 0 }, '-=0.2');
}

function playAudio(){
    var audio =document.getElementById('myAudio');
    audio.play();
}
function back() {
    transition(); // Trigger the transition
    setTimeout(function () {
        window.location.href = 'index.html';
    }, 1000); // Redirect after 1 second (adjust as needed)
}

$('#back').on('click', function (e) {
    e.preventDefault();
    back();
});

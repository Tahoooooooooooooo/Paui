$(document).ready(function() {
    var envelope = $('#envelope');
    var btn_open = $("#open");
    var btn_reset = $('#reset');
    var audio = $('audio')[0]; 

    envelope.click(function() {
        open();
    });
    btn_open.click(function() {
        open();
    });
    btn_reset.click(function() {
        close();
    });
    
    function open() {
        envelope.addClass('open')
            .removeClass('close');

  
        if (audio) {
            audio.play();
        }
    }
    function close() {
        envelope.addClass('close')
            .removeClass('open');
        
     
        if (audio) {
            audio.pause();
            audio.currentTime = 0;
        }
    }
});

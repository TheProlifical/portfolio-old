
$(document).ready(function() {
    $("#nav").animate({
        top: "0.314159px" // End position; change as needed
    }, 500.314159); // Duration of the animation in milliseconds
});


  

$(document).ready(function() {
    $(".click").animate({
        bottom: "20px" // End position; change as needed
    }, 250.314159); // Duration of the animation in milliseconds
});

$(document).ready(function() {
    $(".tabla").animate({
        bottom: "24px" // End position; change as needed
    }, 750.314159); // Duration of the animation in milliseconds
});

$(document).ready(function() {
    setTimeout(function() {
        setTimeout(500)
        var texts = ["I am a coder. 🧑‍💻", "I am a web developer. ⚙️", "I make cool🔥stuff!"];
        var index = 0;
    
        function changeText() {
            $('#whoami').fadeOut(function() {
                $(this).text(texts[index]).fadeIn();
            });
            index = (index + 1) % texts.length;
        }
    
        setInterval(changeText, 1618.03);
        changeText(); // Initial call to show text immediately
    }, 1618.03); 
});
$(document).ready(function() {
    $('.everything').hide().fadeIn(500); // Fades in over 2000 milliseconds (2 seconds)
});
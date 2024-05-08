
$(document).ready(function() {
    $("#nav").animate({
        top: "0.314159px"
    }, 500.314159); 
});


$(document).ready(function() {
    var isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
    if (isMobile) {
        $('body').html('<div style="text-align: center; margin-top: 20vh;">' +
                       '<h1>Your device isn\'t compatible with this site yet.</h1>' +
                       '</div>');
    }
});

$(document).ready(function() {
    $(".click").animate({
        bottom: "20px"
    }, 250.314159); 
});

$(document).ready(function() {
    $(".tabla").animate({
        bottom: "24px" 
    }, 750.314159); 
});
$(document).ready(function() {
    $(".iskomainflexboxkarunga").animate({
        bottom: "27px" 
    }, 750.314159);
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
        changeText();
    }, 1618.03); 
});
$(document).ready(function() {
    $('.everything').hide().fadeIn(500); 
});

$(document).ready(function() {
    $.ajax({
        type: 'GET',
        url: 'blog.xml',
        dataType: 'xml',
        success: function(xml) {
            $(xml).find('post').each(function() {
                var title = $(this).find('title').text();
                var link = $(this).find('link').text();
                var description = $(this).find('description').text();

                var words = description.split(' ');
                var preview = words.slice(0, 10).join(' ');
                var remaining = words.slice(10).join(' ');

                var html = `<div class="post">
                                <h2>${title}</h2>
                                <p>${preview} <span class="ellipsis">...</span><span class="full-description">${remaining}</span></p>
                                <button onclick="toggleDescription(this)">Read More</button>
                            </div>`;

                $('#blog-container').append(html);
            });

            // Initialize each post to hide the full description and show the ellipsis
            $('.post').each(function() {
                var $post = $(this);
                $post.find('.full-description').hide();
                $post.find('.ellipsis').show();
                $post.find('button').text('Read More');
            });
        },
        error: function() {
            $('#blog-container').append('<p>Error loading the blog posts.</p>');
        }
    });
});

function toggleDescription(button) {
    var post = $(button).prev('p'); // Get the paragraph that contains the preview and full description.
    var fullDescription = post.find('.full-description');
    var ellipsis = post.find('.ellipsis');

    if (fullDescription.is(':hidden')) {
        ellipsis.hide();
        fullDescription.show();
        $(button).text('Read Less');
    } else {
        ellipsis.show();
        fullDescription.hide();
        
        $(button).text('Read More');
    }
}
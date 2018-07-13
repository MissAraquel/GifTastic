//Create an array of strings related to the topic 
//Save to variable named "topics"
//Topics in array should make buttons and use loop to append them
//When buttons are clicked, 10 Gifs should appear
//When Gifs are clicked they should play and should stop when clicked again
//Each Gif should also display rating 
//Add form that takes value and adds to the "topics array" and adds a new btn to the page

$(document).ready(function(){

    var dogBreeds = ["Schnauzer", "Poodle", "Yorkshire Terrier", "Doberman Pincher", "Bulldog", "Pitbull", "Golden Retriever",]

    function renderButtons() {

        $("#dogBreed-view").empty();

        for (var i = 0; i < dogBreeds.length; i++) {
            
            var a = $('<button>');

            a.addClass('dog');

            a.attr('data-name', dogBreeds[i]);

            a.text(dogBreeds[i]);

            $("#dogBreed-view").append(a);
        }
    }

    renderButtons();

    $("#addDog").on('click', function (){

        event.preventDefault();

        var dog = $("#inputDog").val().trim();

        dogBreeds.push(dog);

        renderButtons();

    });

    $(document).on('click', 'button', function() {
        
        var b = $(this).attr('data-name');
        
        var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + b + "&api_key=dZE10cIifycYlAL2gVrSIYnSwaH0YTgV";  

        console.log(queryURL); 

        $.ajax({
            data: {
                limit: 10,
            },
            url: queryURL,
            method: 'GET'
        })

            .done(function (response) {

                console.log(response);

                var results = response.data;
                
                for (var i = 0; i < results.length; i++) {

                    var gifDiv = $('<div class="item">');

                    var rating = results[i].rating;

                    var r = $('<p>').text("Rating: " + rating);

                    var gifImage = $('<img>'); 

                    gifImage.attr('src', results[i].images.fixed_height_still.url)
                        .attr('data-still', results[i].images.fixed_height_still.url)
                        .attr('data-animate', results[i].images.fixed_height.url)
                        .attr('data-state', "still")
                        .addClass("showImage");

                    gifDiv.append(r)
                        .append(gifImage);

                    $('#GIFs').prepend(gifDiv);
                }
            });
    });

    $(document).on('click', '.showImage', function () {

        var state = $(this).data('state');

        if (state == "still") {
            console.log("still image works");

            $(this).attr('src', $(this).data('animate'))
                .data('state', 'animate');

        } else {
            console.log("animated image works");
            $(this).attr('src', $(this).data('still'))
                .data('state', 'still');
        }
    });

    
});

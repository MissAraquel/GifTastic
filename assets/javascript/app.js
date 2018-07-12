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

    
});

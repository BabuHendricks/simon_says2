$(document).ready(function(){

  $('#get_color').on('click', function (event){
    event.preventDefault();

    $.post('/color', function(response) {
        console.log(response);
        var cellNumber = "ul li:nth-child(" + response.cell + ")"
        var color = response.color
        $(cellNumber).css("background-color", color)
    })
  })
});


$("#logo-img").click(function(){
      $('#nav').toggle()})

$("#slide-up").click(function(){
    $('#sbr-img').slideUp()})

$('#slide-down').click(function(){
    $('#sbr-img').slideDown()})

$('#fade').click(function(){
    $('.pbody,.mid-breaks').fadeToggle()})

$('#add').click(function(){
    $('.m-p').after(function(){
        $('.m-p').append( "<p>Test</p>")})})
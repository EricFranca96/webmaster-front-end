$(function () {

    var timer;

    $('body').click(function () {
        console.log("Intervalo cancelado");
        clearInterval(timer);
    })
    timer = setInterval(function () {
        alert('Olá mundo');
    },3000);





    /*
    var timeOut = function(){
        $('.box2').animate({
            'width' : '40%',
            'height' : '500px',
            'marginLeft' : '100px',
            'marginTop' : '200px'
        },2000);
    }

    $('.box1').animate({
        'width' : '40%',
        'height' : '500px',
        'marginLeft' : '100px',
        'paddingTop' : '200px'
    },2000, function () {
        setTimeout(timeOut,3000);
    });
    */


});
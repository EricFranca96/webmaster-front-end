$(function(){
    
    var func = function(){
        $('input[type=text').eq($(this).index()).css('background','green');
    }

    $('input[type=text]').keyup(func);




    /*
    $('a').click(function(){
        alert('Olá Mundo!');
    });

    $('body').on('click', 'a', function(){
        alert('Olá Mundo!');
        return false;
    })

    setTimeout(function(){
        $('body').html('<a href="">Meu Link!</a>');
    },3000)
    */

});
$(function () {

    $('.box').click(function (e) {
        e.stopPropagation();
    });


    $('body').click(function () {
        $('.box').css('background-color','green');
    });







});
    /*
    var timer;

    $('window').scroll(function(){
        //Evento de quando o scroll ocorre.
    });
    
    $(window).resize(function(){
        //Evento de quando redimensionamos a tela.
        //console.log("Minha tela está sendo redimensionada!");
        clearTimeout(timer);
        timer = setTimeout(function(){
            location.href = "http://localhost/dankiCode/front-end/webmaster-front-end/jquery/";
        },1000);
        

    });

    $('a').click(function(e){
        
        e.preventDefault();	
        return false;
       
    });
});*/
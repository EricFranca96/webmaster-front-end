$(function(){
    
    
    $('.box1').fadeOut(2000, function(){
        $('.box2').fadeIn(3000, function(){
            console.log("Terminamos nossa animação!");
        });
    });
    

});
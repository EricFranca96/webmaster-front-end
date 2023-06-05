$(function(){




    //var elWidht = $('.box').width();

    //Pegamos a largura do nosso elemento.
    $('.box').width();

    //Setamos a largura.
    $('.box').width('900');

    console.log("Width: "+$('.box').width());
    console.log("Inner Width: "+$('.box').innerWidth());
    console.log("Outer Width: "+$('.box').outerWidth());
    //Para altura é a mesma logica acima.
});
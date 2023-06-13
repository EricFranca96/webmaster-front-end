$(function () {

    $('.box1').addClass('minhaclasse');

    //$('.minhaClasse').remove();

    $('.box1').removeClass('minhaclasse');

    var el = $('.box1').find('.child1').find('.child2');

    el.css('color','green');

});
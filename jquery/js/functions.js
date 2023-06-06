$(function(){
    //Função append() para adicionar conteúdo/elementos no final do elemento que selecionarmos.
    //$('.box div').eq(1).append('<h3>Meu elemento adicionado dinamicamente</h3>');

    var el = $('<h3>Meu Conteúdo</h3>').appendTo($('.box'));

    el.css('color','red');
});
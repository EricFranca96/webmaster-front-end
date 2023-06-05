$(function () {


    function validarCliqueHover() {
        $('.artigo1').click(function () {
            $('.artigo2').css('background-color', 'purple');
        });

        $('.artigo1').hover(function () {
            $('.artigo2').css('background-color', 'red');
        }, function () {
            $('.artigo2').css('background-color', 'rgb(100,100,100)');
        });
    }

    function validarFormulario() {
        $('select').change(function () {
            console.log("meu select foi alterado!");
        });
    }
    validarFormulario();
    validarCliqueHover();


    /*
        $('textarea').focus(function() {
            alert('Estou dentro do textarea');
        })
    
        $('textarea').blur(function() {
            alert('Estou fora do textarea!');
        });
    */
});
// 메인 JS

$('.hambtn').click(function(){
    let isOn = $(this).is('.on');
    $('.smenu').css({translate: isOn?'0':'0 -170%'});
    $('body').toggleClass('on');
})

const $cartBox = $('.minicart');
$('.right-menu').click(function(){
    let isOn = $cartBox.css('translate');
    console.log(isOn);
    $cartBox.css({translate: isOn=='100%'?'0':'100%'});
    $('body').toggleClass('on');
})
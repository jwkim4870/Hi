function fnMove(seq){
    var offset = $('#div' + seq).offset();
    $('html, body').animate({scrollTop : offset.top}, 1000);
}

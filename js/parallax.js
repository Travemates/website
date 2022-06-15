// Fungsi Actionbar Scroll
$(window).scroll(function() {
    if($(this).scrollTop() > 10) 
    {
        $('#mainNav').addClass('luncur');
        $('#mainNav').addClass('shadow-sm');
        
    } else {
        $('#mainNav').removeClass('luncur');
        $('#mainNav').removeClass('shadow-sm');
    }
});
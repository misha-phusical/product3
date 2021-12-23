$('.knopka_info').on('click', function(e) {
    e.preventDefault()
    $('.knopka_info').removeClass('knopka_info--active')
    $('.nonek').removeClass('nonek--show')
    $(this).addClass('knopka_info--active')
    $($(this).attr('href')).addClass('nonek--show')
})
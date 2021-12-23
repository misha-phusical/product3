$('.vubor_color_krug').on('click', function(e) {
    e.preventDefault()
    $('.vubor_color_krug').removeClass('vubor_color_krug--active')
    $('.shirt_image').removeClass('shirt_image--show')
    $(this).addClass('vubor_color_krug--active')
    $($(this).attr('href')).addClass('shirt_image--show')
})
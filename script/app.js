(function() {
    const controlls = document.querySelectorAll(".vubor_size_word__link");
    const activeClass = "vubor_size_word--active";
    controlls.forEach(function(control) {
    control.addEventListener("click", function(e) {
    e.preventDefault();
    controlls.forEach(function(link) {
    link.closest(".vubor_size_word__link").classList.remove(activeClass);
    })
    control.closest(".vubor_size_word__link").classList.add(activeClass);
    })
    })
    })();
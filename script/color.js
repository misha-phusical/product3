(function() {
    const controlls = document.querySelectorAll(".vubor_color_krug");
    const activeClass = "vubor_color_krug--active";
    controlls.forEach(function(control) {
    control.addEventListener("click", function(e) {
    e.preventDefault();
    controlls.forEach(function(link) {
    link.closest(".vubor_color_krug").classList.remove(activeClass);
    })
    control.closest(".vubor_color_krug").classList.add(activeClass);
    })
    })
    })();
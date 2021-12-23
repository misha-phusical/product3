(function() {
    const controlls = document.querySelectorAll(".knopka_info");
    const activeClass = "knopka_info--active";
    controlls.forEach(function(control) {
    control.addEventListener("click", function(e) {
    e.preventDefault();
    controlls.forEach(function(link) {
    link.closest(".knopka_info").classList.remove(activeClass);
    })
    control.closest(".knopka_info").classList.add(activeClass);
    })
    })
    })();

function toggleMenu() {
    var menuLinks = document.getElementById("menu-links");
    menuLinks.classList.toggle("hidden");
}

function showPage(pageId) {
    var pages = document.getElementsByClassName("page");
    for (var i = 0; i < pages.length; i++) {
        pages[i].classList.add("hidden");
    }
    document.getElementById(pageId).classList.remove("hidden");
}

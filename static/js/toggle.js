function toggleMenu() {
    var menuWindow = document.getElementById("menu-window");
    var windowWidth = window.innerWidth || document.documentElement.clientWidth;

    if (windowWidth <= 768) {
        if (menuWindow.style.display === "block") {
            menuWindow.style.display = "none";
        } else {
            menuWindow.style.display = "block";
        }
    }
}

function closeMenu() {
    var menuWindow = document.getElementById("menu-window");
    menuWindow.style.display = "none";
}

window.onload = () => {
    document.querySelector(".load").style.display = "none";
};

window.addEventListener("click", (event) => {
    let el = event.target;
    let more_icon = document.getElementsByClassName("navbar-toggler-icon")[0];
    if (el != more_icon) {
        document.getElementById("navbarSupportedContent").classList.remove("show");
    }
});
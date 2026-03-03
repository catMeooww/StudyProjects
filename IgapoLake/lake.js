function redirect(to) {
    if (to == 0) {
        window.location = "./";
    } else if (to == 1) {
        window.location = "./example.html";
    } else if (to == 2) {
        window.location = "./register.html";
    }
}

function toggleUi() {
    if (document.getElementsByClassName("toggable-ui").item(0).style.visibility == "hidden") {
        document.getElementById("toggle-btn").innerHTML = "←";
        document.getElementsByClassName("menu").item(0).style.width = "100%";
        for (e = 0; e < document.getElementsByClassName("toggable-ui").length; e++) {
            document.getElementsByClassName("toggable-ui").item(e).style.opacity = "100%";
            document.getElementsByClassName("toggable-ui").item(e).style.visibility = "visible";
        }
    } else {
        document.getElementById("toggle-btn").innerHTML = "→";
        document.getElementsByClassName("menu").item(0).style.width = "70px";
        for (e = 0; e < document.getElementsByClassName("toggable-ui").length; e++) {
            document.getElementsByClassName("toggable-ui").item(e).style.opacity = "0%";
            document.getElementsByClassName("toggable-ui").item(e).style.visibility = "hidden";
        }
    }
}
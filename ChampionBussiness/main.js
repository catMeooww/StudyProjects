account = localStorage.getItem("accountType");
if (account == undefined) {
    account = "normal";
}
console.log(account);

function loadData() {
    if (account == "premium" || account == "organization") {
        document.getElementById("accountbtn").lastElementChild.style.borderColor = "orange";
        document.getElementsByClassName("advertisement").item(0).style.visibility = "hidden";
        document.getElementsByClassName("premium").item(0).style.visibility = "visible";
        document.getElementsByClassName("premium").item(0).style.position = "static";
    }
    if (account == "organization") {
        document.getElementById("accountbtn").lastElementChild.style.borderColor = "purple";
        document.getElementsByClassName("organization").item(0).style.visibility = "visible";
        document.getElementsByClassName("organization").item(0).style.position = "static";
        document.getElementById("accountbtn").firstElementChild.innerHTML = "ORG";
    }

    var testMobile = /iPhone|Android|iPad/i.test(navigator.userAgent);
    if (testMobile) {
        for (i = 0; i < document.getElementsByTagName("button").length; i++) {
            document.getElementsByTagName("button").item(i).style.margin = "0px";
            document.getElementsByTagName("button").item(i).style.padding = "0px";
        }
    }
}

function redirect(n) {
    if (n == 1) {
        window.location = "games.html";
    } else if (n == 2) {
        window.location = "lives.html";
    } else if (n == 3) {
        window.location = "subscriptions.html";
    } else if (n == 4) {
        window.location = "gamble.html";
    } else if (n == 5) {
        window.location = "config.html";
    } else if (n == 6) {
        window.location = "pos.html";
    } else {
        window.location = "index.html";
    }
}

function changeAccount() {
    if (account == "normal") {
        localStorage.setItem("accountType", "premium");
    } else if (account == "premium") {
        localStorage.setItem("accountType", "organization");
    } else {
        localStorage.setItem("accountType", "normal");
    }
    location.reload();
}
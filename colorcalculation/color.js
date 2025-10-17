colors = [
    [255, 255, 255, 100]
]

function appendColor(c) {
    if (c == "REST") {
        document.getElementById("list").innerHTML = "";
    } else {
        document.getElementById("list").innerHTML += "<div class='item'><label>Color: " + c[0] + "," + c[1] + "," + c[2] + "</label> <label>Oppacity: " + c[3] + "</label>";
    }
}

function update() {
    totalcolor = [0, 0, 0, 0];
    appendColor("REST")
    for (color of colors) {
        const alpha = color[3]/100;
        appendColor(color);
        console.info("+" + color);

        const r = Math.floor((color[0] * alpha) + (totalcolor[0] * (1 - alpha)));
        const g = Math.floor((color[1] * alpha) + (totalcolor[1] * (1 - alpha)));
        const b = Math.floor((color[2] * alpha) + (totalcolor[2] * (1 - alpha)));

        totalcolor = [r, g, b];
        console.log("=" + totalcolor);
    }
    document.getElementById("resultmap").style.backgroundColor = "rgb(" + totalcolor[0] + "," + totalcolor[1] + "," + totalcolor[2] + ")";
    document.getElementById("resultlog").innerHTML = "<p>" + totalcolor[0] + "," + totalcolor[1] + "," + totalcolor[2] + "</p>";
}

function randstart() {
    sel = Math.floor(Math.random() * 3);
    if (sel == 0) {
        document.getElementById("newcolor").value = "#ff0000";
    } else if (sel == 1) {
        document.getElementById("newcolor").value = "#00ff00";
    } else {
        document.getElementById("newcolor").value = "#0000ff";
    }
    document.getElementById("newopacity").value = Math.floor(Math.random() * 100);
    update();
}

function transformHex(a, b) {
    a = a.replace("a", "10").replace("b", "11").replace("c", "12").replace("d", "13").replace("e", "14").replace("f", "15");
    b = b.replace("a", "10").replace("b", "11").replace("c", "12").replace("d", "13").replace("e", "14").replace("f", "15");
    return Number(a) * 16 + Number(b);
}

function addcolor() {
    hex = document.getElementById("newcolor").value;
    console.info(hex)
    r = transformHex(hex[1], hex[2])
    g = transformHex(hex[3], hex[4])
    b = transformHex(hex[5], hex[6])
    a = document.getElementById("newopacity").value;
    colors.push([r, g, b, a]);
    update();
}
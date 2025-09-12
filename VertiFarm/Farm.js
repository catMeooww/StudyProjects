function loadBody(){
    var testMobile = /iPhone|Android|iPad/i.test(navigator.userAgent);
    if (testMobile){
        document.getElementById("project-showcaser").style.display = "block";
        document.getElementById("farmview").style.width = "100%";
        document.getElementById("farmview").style.height = "150px";
        document.getElementById("farmdescript").style.width = "100%";
        document.getElementById("farmdescript").style.height = "300px";
        document.getElementById("menu").innerHTML = "<button onclick='mobileMenu()'>Mais</button>";
    }
}

slide = 0;
slides = {
    "images":[
        "slide_1.png",
        "slide_2.png",
        "slide_3.png",
        "slide_4.png"
    ],
    "text":[
        "<p>Imagem representativa do projeto gerada por IA</p><p>Mostra o conceito da pequena fazenda vertical controlada por computador.</p>",
        "<p>Estrutura Base</p><p>Mostra estrutura com a terra e as plantas, mostra também as <i>Glow Lights</i>, responsáveis por simular iluminação solar para as plantas.</p>",
        "<p>Sistema Interno</p><p>Mostra detalhes da prateleira, como reservatório de agua, sistema de irrigação e sensores como umidade do solo/ar, temperatura, iluminação, ph, etc...</p><p>Esta parte do sistema é vital para que a IA consiga verificar o estado das plantas e fazer ajustes nescessários para manter-las vivas.</p>",
        "<p>Controle</p><p>Mostra o sistema que conecta a IA no computador com a mini fazenda vertical.</p><p>O Ardruino é responsável por permitir a IA ler os sensores e controlar bombas e iluminação. O código é escrito e executado no computador, conectado ao sistema por cabos ou Wi-Fi.</p>"
    ]
}

function updateSlide(){
    image = "../icons/"+slides["images"][slide];
    text = slides["text"][slide];
    document.getElementById("viewimage").src = image;
    document.getElementById("farmdescript").innerHTML = text;
}

function nextslide(){
    slide += 1;
    if (slide > 3){
        slide = 0;
    }
    updateSlide();
}

function backslide(){
    slide -= 1;
    if (slide < 0){
        slide = 3;
    }
    updateSlide();
}

function mobileMenu(){
    document.getElementById("menu").style.height = "100%";
    document.getElementById("menu").innerHTML = '<button onclick="closeMenu()">Fechar</button><br><br><br><a href="https://docs.google.com/document/d/1jCiAykNMrb5-mVNDbZW3jvAXNWw17NgQSs3xEMppY_Y/edit?usp=sharing">Pré-Projeto</a><br><br><br><a href="">Artigo</a><br><br><br>';
}

function closeMenu(){
    document.getElementById("menu").style.height = "auto";
    document.getElementById("menu").innerHTML = "<button onclick='mobileMenu()'>Mais</button>";
}
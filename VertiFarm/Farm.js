function loadBody(b) {
    var testMobile = /iPhone|Android|iPad/i.test(navigator.userAgent);
    if (testMobile) {
        document.getElementById("menu").innerHTML = "<button onclick='mobileMenu()'>Mais</button>";
        document.getElementById("body").style.marginTop = "18%";
        if (b == "index") {
            document.getElementById("project-showcaser").style.display = "block";
            document.getElementById("farmview").style.width = "100%";
            document.getElementById("farmview").style.height = "250px";
            document.getElementById("farmdescript").style.width = "100%";
            document.getElementById("farmdescript").style.height = "300px";

            for (frame of document.getElementsByTagName("iframe")) {
                frame.style.width = "100%";
            }
            for (frame of document.getElementsByClassName("table")) {
                frame.style.width = "100%";
            }
            document.getElementById("plants").style.width = "100%";
            document.getElementById("plants").style.margin = "0%";
        } else if (b == "extra") {
            document.getElementById("plants").style.width = "100%";
            document.getElementById("plants").style.margin = "0%";
            document.getElementById("others").style.backgroundColor = "white";
            document.getElementById("others").style.borderWidth = "2px";
            document.getElementById("others").style.borderColor = "black";
            document.getElementById("others").style.borderStyle = "double";
            document.getElementById("others").style.marginTop = "5%";
            document.getElementById("others").innerHTML = "<a href='https://www.archdaily.com.br/br/1014322/fazenda-vertical-beijing-van-bergen-kolpa-architects'>Exemplo de Projeto Urbano</a><br><a href='https://www.ultimationinc.com/wp-content/uploads/2022/03/Advantages-of-Vertical-Farming.jpg'>Prédio</a><br><a href='Fazenda_Vertical_Recursos.pdf'>Recursos</a><br><a href='Fazenda_Vertical_Banner.png'>Banner</a><br><a href='Fazenda_Vertical_Maquete.jpeg'>Maquete</a><br><a href='Fazenda_Vertical_Exemplos.png'>Exemplos</a>";
        }
    }
}

slide = 0;
slides = {
    "images": [
        "slide_1.png",
        "slide_2.png",
        "slide_3.png",
        "slide_4.png",
        "slide_5.png"
    ],
    "text": [
        "<p>Imagem representativa do projeto gerada por IA</p><p>Mostra o conceito da pequena fazenda vertical controlada por computador.</p>",
        "<p>Estrutura Base</p><p>Mostra estrutura com a terra e as plantas, mostra também as <i>Glow Lights</i>, responsáveis por simular iluminação solar para as plantas.</p>",
        "<p>Sistema Interno</p><p>Mostra detalhes da prateleira, como reservatório de agua, sistema de irrigação e sensores como umidade do solo/ar, temperatura, iluminação, ph, etc...</p><p>Esta parte do sistema é vital para que a IA consiga verificar o estado das plantas e fazer ajustes nescessários para manter-las vivas.</p>",
        "<p>Controle</p><p>Mostra o sistema que conecta a IA no computador com a mini fazenda vertical.</p><p>O Ardruino é responsável por permitir a IA ler os sensores e controlar bombas e iluminação. O código é escrito e executado no computador, conectado ao sistema por cabos ou Wi-Fi.</p>",
        "<p>Fazenda Urbana</p><p>Mostra como a Horta Vertical pode facilmente se encaixar no ambiente urbano.</p>"
    ]
}

function updateSlide() {
    image = "./" + slides["images"][slide];
    text = slides["text"][slide];
    document.getElementById("viewimage").src = image;
    document.getElementById("farmdescript").innerHTML = text;

    colorR = Math.floor(Math.random() * 255);
    colorG = Math.floor(Math.random() * 255);
    colorB = Math.floor(Math.random() * 255);

    document.getElementById("viewimage").style.borderColor = "rgb(" + colorR + "," + colorG + "," + colorB + ")";
}

function nextslide() {
    slide += 1;
    if (slide > 4) {
        slide = 0;
    }
    updateSlide();
}

function backslide() {
    slide -= 1;
    if (slide < 0) {
        slide = 4;
    }
    updateSlide();
}

function mobileMenu() {
    document.getElementById("menu").style.height = "100%";
    document.getElementById("menu").innerHTML = '<button onclick="closeMenu()">Fechar</button><br><br><br><a href="./">Página Inicial</a><br><br><br><a href="https://docs.google.com/document/d/1jCiAykNMrb5-mVNDbZW3jvAXNWw17NgQSs3xEMppY_Y/edit?usp=sharing">Pré-Projeto</a><br><br><br><a href="Fazenda_Vertical_Artigo.pdf">Artigo</a><br><br><br><a href="./model.html">Model</a><br><br><br><a href="./extra.html">Outros</a><br><br><br>';
}

function closeMenu() {
    document.getElementById("menu").style.height = "auto";
    document.getElementById("menu").innerHTML = "<button onclick='mobileMenu()'>Mais</button>";
}

plantas = {
    "alface": {
        "tipo_cultivo": "solo/hidroponia",
        "luz_horas_por_dia": {
            "min": 12,
            "max": 16,
            "espectro": "full_spectrum (branco/frio)"
        },
        "temperatura_C": {
            "min": 18,
            "max": 24
        },
        "umidade_ar_percent": {
            "min": 60,
            "max": 80
        },
        "umidade_solo_percent": {
            "min": 60,
            "max": 70
        },
        "pH": {
            "min": 6.0,
            "max": 6.5
        },
        "tempo_ate_colheita_dias": {
            "min": 30,
            "max": 45
        },
        "observacoes": "Evitar calor excessivo; boa circulação de ar para reduzir pragas e bolores."
    },
    "morango": {
        "tipo_cultivo": "solo/hidroponia",
        "luz_horas_por_dia": {
            "min": 12,
            "max": 16,
            "espectro": "full_spectrum (ênfase em vermelho/azul)"
        },
        "temperatura_C": {
            "min": 18,
            "max": 26
        },
        "umidade_ar_percent": {
            "min": 60,
            "max": 75
        },
        "umidade_solo_percent": {
            "min": 65,
            "max": 75
        },
        "pH": {
            "min": 5.5,
            "max": 6.5
        },
        "tempo_ate_colheita_dias": {
            "min": 90,
            "max": 120
        },
        "observacoes": "Pode necessitar de polinização manual em ambiente fechado; prefira variedades remontantes para produção contínua."
    },
    "tomate": {
        "tipo_cultivo": "solo/hidroponia",
        "luz_horas_por_dia": {
            "min": 14,
            "max": 18,
            "espectro": "alto em vermelho para frutificação + azul para vigor vegetativo"
        },
        "temperatura_C": {
            "min": 20,
            "max": 28
        },
        "umidade_ar_percent": {
            "min": 55,
            "max": 70
        },
        "umidade_solo_percent": {
            "min": 70,
            "max": 80
        },
        "pH": {
            "min": 6.0,
            "max": 6.8
        },
        "tempo_ate_colheita_dias": {
            "min": 90,
            "max": 120
        },
        "observacoes": "Requer alta luminosidade e tutoramento; monitorar irrigação para evitar apodrecimento e problemas fúngicos."
    },
    "hortelã": {
        "tipo_cultivo": "solo/hidroponia",
        "luz_horas_por_dia": {
            "min": 10,
            "max": 14,
            "espectro": "full_spectrum"
        },
        "temperatura_C": {
            "min": 18,
            "max": 26
        },
        "umidade_ar_percent": {
            "min": 60,
            "max": 80
        },
        "umidade_solo_percent": {
            "min": 70,
            "max": 80
        },
        "pH": {
            "min": 6.0,
            "max": 7.0
        },
        "tempo_ate_colheita_dias": {
            "min": 60,
            "max": 75
        },
        "observacoes": "Cresce rápido e é excelente para propagação por estacas; manter controle para não dominar canteiros."
    },
    "cebolinha": {
        "tipo_cultivo": "solo/hidroponia",
        "luz_horas_por_dia": {
            "min": 12,
            "max": 14,
            "espectro": "full_spectrum"
        },
        "temperatura_C": {
            "min": 16,
            "max": 24
        },
        "umidade_ar_percent": {
            "min": 55,
            "max": 75
        },
        "umidade_solo_percent": {
            "min": 65,
            "max": 75
        },
        "pH": {
            "min": 6.0,
            "max": 7.0
        },
        "tempo_ate_colheita_dias": {
            "min": 60,
            "max": 80
        },
        "observacoes": "Planta resistente e ideal para cultivo em vasos; tolera meia-sombra."
    }
}

function plant(p) {
    document.getElementById("plantShow").innerHTML = "<label>Planta: " + p + "</label>";
    document.getElementById("plantShow").innerHTML += "<p>Cultivo: " + plantas[p]["tipo_cultivo"] + "</p>";
    document.getElementById("plantShow").innerHTML += "<p>Luz por Dia: " + plantas[p]["luz_horas_por_dia"]["min"] + "-" + plantas[p]["luz_horas_por_dia"]["max"] + "|" + plantas[p]["luz_horas_por_dia"]["espectro"] + "</p>";
    document.getElementById("plantShow").innerHTML += "<p>Temperatura: " + plantas[p]["temperatura_C"]["min"] + "-" + plantas[p]["temperatura_C"]["max"] + "</p>";
    document.getElementById("plantShow").innerHTML += "<p>Umidade (ar): " + plantas[p]["umidade_ar_percent"]["min"] + "-" + plantas[p]["umidade_ar_percent"]["max"] + "</p>";
    document.getElementById("plantShow").innerHTML += "<p>Umidade (solo): " + plantas[p]["umidade_solo_percent"]["min"] + "-" + plantas[p]["umidade_solo_percent"]["max"] + "</p>";
    document.getElementById("plantShow").innerHTML += "<p>pH: " + plantas[p]["pH"]["min"] + "-" + plantas[p]["pH"]["max"] + "</p>";
    document.getElementById("plantShow").innerHTML += "<p>colheita: " + plantas[p]["tempo_ate_colheita_dias"]["min"] + "-" + plantas[p]["tempo_ate_colheita_dias"]["max"] + "</p>";
}
Poemas = [
    {
        "title":"AMOR",
        "body":"Amor, então,<br>também, acaba?<br>Não, que eu saiba.<br>O que eu sei<br>é que se transforma<br>numa matéria-prima<br>que a vida se encarrega<br>de transformar em raiva.<br>Ou em rima."
    },
    {
        "title":"INCENSO FOSSE MÚSICA",
        "body":"isso de querer ser<br>exatamente aquilo<br>que a gente é<br>ainda vai<br>nos levar além"
    },
    {
        "title":"Dor elegante",
        "body":"Um homem com uma dor<br>É muito mais elegante<br>Caminha assim de lado<br>Como se chegando atrasado<br>Andasse mais adiante<br><br>Carrega o peso da dor<br>Como se portasse medalhas<br>Uma coroa, um milhão de dólares<br>Ou coisa que os valha<br><br>Ópios, édens, analgésicos<br>Não me toquem nessa dor<br>Ela é tudo o que me sobra<br>Sofrer vai ser a minha última obra"
    },
    {
        "title":"Objeto",
        "body":"de meu mais desesperado desejo<br>não seja aquilo<br>por quem ardo e não vejo<br><br>seja estrela que me beija<br>oriente que me reja<br>azul amor beleza<br><br>faça qualquer coisa<br>mas pelo amor de deus<br>ou de nós dois<br><br>SEJA"
    },
    {
        "title":"AMOR BASTANTE",
        "body":"quando eu vi você<br>tive uma idéia brilhante<br>foi como se eu olhasse<br>de dentro de um diamante<br>e meu olho ganhasse<br>mil faces num só instante<br><br>basta um instante<br>e você tem amor bastante"
    },
    {
        "title":"Por um lindésimo de segundo",
        "body":"tudo em mim<br>anda a mil<br>tudo assim<br>tudo por um fio<br>tudo estivesse no cio<br>tudo pisando macio<br>tudo psiu<br><br>tudo em minha volta<br>anda às tontas<br>como se todas as coisas<br>fossem todas<br>afinal das contas"
    },
    {
        "title":"Apagar-me",
        "body":"Apagar-me<br>diluir-me<br>desmanchar-me<br>até que depois de mim<br>de nós<br>de tudo<br>não reste mais<br>que o charme."
    },
    {
        "title":" ÓPERA FANTASMA",
        "body":"Nada tenho.Nada me pode ser tirado.<br>Eu sou o ex-estranho,<br>o que veio sem ser chamado<br>e, gato se foi<br>sem fazer nenhum ruído"
    },
    {
        "title":"Além Alma<br>(uma grama depois)",
        "body":"Meu coração lá longe<br>faz sinal que quer voltar<br>Já no peito trago em bronze<br>NÃO HÁ VAGA NEM LUGAR<br>Pra que me serve esse negócio<br>que não cessa de bater?<br>Mais parece um relógio<br>que acabar de enlouquecer<br>Pra que é que eu quero quem chora,<br>se estou tão bm assim,<br>e o vazio que vai lá lá fora<br>cai macio dentro de mim?"
    },
    {
        "title":"o que te espera",
        "body":"você pára<br>a fim de ver<br>o que te espera<br><br>só uma nuvem<br>te separa<br>das estrelas"
    },
]

function generatePoem(){
    Poem = Math.floor(Math.random() * Poemas.length);
    console.log(Poem)
    r = Math.floor(Math.random() * 200) + 55;
    g = Math.floor(Math.random() * 200) + 55;
    b = Math.floor(Math.random() * 200) + 55;
    document.getElementById("Poema-Title").innerHTML = Poemas[Poem]["title"];
    document.getElementById("Poema-Body").innerHTML = Poemas[Poem]["body"];
    document.getElementById("Paulo-Poemas").style.backgroundColor = "rgb("+r+","+g+","+b+")";
}

function redirectPoem(){
    window.location = "https://www.pensador.com/poemas_paulo_leminski/";
}

generatePoem();

document.getElementById("MENU-Options").style.visibility = "hidden";
function toggleMenu(){
    menu = document.getElementById("MENU-Options")
    if (menu.style.visibility == "hidden"){
        menu.style.visibility = "visible";
        menu.style.height = String(window.innerHeight) + "px";
        document.getElementById("Paulo-MENU").style.backgroundColor = "rgba(0, 0, 0, 0.700)";
        document.getElementById("Paulo-MENU").style.width = String(window.innerWidth) + "px";
    }else{
        menu.style.visibility = "hidden";
        menu.style.height = "0px";
        document.getElementById("Paulo-MENU").style.backgroundColor = "rgba(0, 0, 0, 0.100)";
        document.getElementById("Paulo-MENU").style.width = "50px";
    }
}

function wikihover(){
    //document.getElementById("wiki").style.marginBottom = "0px";
    document.getElementById("wikiframe").style.width = "420px";
    document.getElementById("wikiframe").style.height = "300px";
    document.getElementById("wiki").style.height = "304px";
    document.getElementById("wikitext").style.width = "200px";
    document.getElementById("wikitext").style.height = "304px";
    document.getElementById("wikitext").style.visibility = "visible";
}
function wikileave(){
    //document.getElementById("wiki").style.marginBottom = "400px";
    document.getElementById("wikiframe").style.width = "250px";
    document.getElementById("wikiframe").style.height = "150px";
    document.getElementById("wiki").style.height = "154px";
    document.getElementById("wikitext").style.width = "0px";
    document.getElementById("wikitext").style.height = "0px";
    document.getElementById("wikitext").style.visibility = "hidden";
}

function frasehover(){
    //document.getElementById("frase").style.marginBottom = "0px";
    document.getElementById("fraseframe").style.width = "420px";
    document.getElementById("fraseframe").style.height = "300px";
    document.getElementById("frase").style.height = "304px";
    document.getElementById("frasetext").style.width = "200px";
    document.getElementById("frasetext").style.height = "304px";
    document.getElementById("frasetext").style.visibility = "visible";
}
function fraseleave(){
    //document.getElementById("wiki").style.marginBottom = "400px";
    document.getElementById("fraseframe").style.width = "250px";
    document.getElementById("fraseframe").style.height = "150px";
    document.getElementById("frase").style.height = "154px";
    document.getElementById("frasetext").style.width = "0px";
    document.getElementById("frasetext").style.height = "0px";
    document.getElementById("frasetext").style.visibility = "hidden";
}

function livroshover(){
    //document.getElementById("livro").style.marginBottom = "0px";
    document.getElementById("livrosframe").style.width = "420px";
    document.getElementById("livrosframe").style.height = "300px";
    document.getElementById("livro").style.height = "304px";
    document.getElementById("livrostext").style.width = "200px";
    document.getElementById("livrostext").style.height = "304px";
    document.getElementById("livrostext").style.visibility = "visible";
}
function livrosleave(){
    //document.getElementById("livro").style.marginBottom = "400px";
    document.getElementById("livrosframe").style.width = "250px";
    document.getElementById("livrosframe").style.height = "150px";
    document.getElementById("livro").style.height = "154px";
    document.getElementById("livrostext").style.width = "0px";
    document.getElementById("livrostext").style.height = "0px";
    document.getElementById("livrostext").style.visibility = "hidden";
}

function redirect(n){
    if (n == 0){
        location = "#Paulo-Biografia";
    }else if (n == 1){
        location = "#Paulo-Poemas";
        generatePoem()
    }else if (n == 2){
        location = "#Paulo-Campanha";
    }else if (n == 3){
        location = "#Paulo-Links";
    }
    toggleMenu();
}

var testMobile = /iPhone|Android|iPad/i.test(navigator.userAgent);
if (testMobile){
    document.getElementById("Paulo-Links").innerHTML = "<h1>Mais sobre Paulo</h1>";
    document.getElementById("Paulo-Links").innerHTML += "<br><br><a style='color: purple;' href='https://www.instagram.com/paulo_leminski_uni/'>Instagram do Projeto</a>";
    document.getElementById("Paulo-Links").innerHTML += "<br><br><a style='color: green;' href='https://pt.wikipedia.org/wiki/Paulo_Leminski'>Wiki de Paulo Leminski</a>";
    document.getElementById("Paulo-Links").innerHTML += "<br><br><a style='color: green;' href='https://brasilescola.uol.com.br/literatura/paulo-leminski.htm#Frases+de+Paulo+Leminski'>Frases de Paulo Leminski</a>";
    document.getElementById("Paulo-Links").innerHTML += "<br><br><a style='color: green;' href='https://www.estadao.com.br/web-stories/cultura/literatura/paulo-leminski-6-livros-para-ler-nos-35-anos-da-morte-do-escritor/?srsltid=AfmBOooLQOGmSGhA--ludLn9gllH7bW7jxVd-d7y0S8HTD1NrY2nokbD'>Livros de Paulo Leminski</a>";
    document.getElementById("Paulo-Documents").innerHTML = "<hr>";
    for (i=0;i < document.getElementById("Paulo-Videos").children.length;i++){
        document.getElementById("Paulo-Videos").children.item(i).style.width = "92%";
        document.getElementById("Paulo-Videos").children.item(i).style.height = "170px";
        document.getElementById("Paulo-Videos").children.item(i).style.borderStyle = "inset";
        document.getElementById("Paulo-Videos").children.item(i).style.borderWidth = "1px";
        document.getElementById("Paulo-Videos").children.item(i).style.borderColor = "white";
    }
    document.getElementById("Paulo-Biografia").style.backgroundRepeat = "repeat-y";
    document.getElementById("Paulo-Biografia").style.backgroundSize = "100%";
}
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
    }
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

function wikihover(){
    document.getElementById("wiki").style.marginBottom = "0px";
    document.getElementById("wikiframe").style.width = "420px";
    document.getElementById("wikiframe").style.height = "300px";
    document.getElementById("wikitext").style.width = "200px";
    document.getElementById("wikitext").style.height = "300px";
    document.getElementById("wikitext").style.visibility = "visible";
}
function wikileave(){
    document.getElementById("wiki").style.marginBottom = "400px";
    document.getElementById("wikiframe").style.width = "250px";
    document.getElementById("wikiframe").style.height = "150px";
    document.getElementById("wikitext").style.width = "0px";
    document.getElementById("wikitext").style.height = "0px";
    document.getElementById("wikitext").style.visibility = "hidden";
}

function frasehover(){
    document.getElementById("frase").style.marginBottom = "0px";
    document.getElementById("fraseframe").style.width = "420px";
    document.getElementById("fraseframe").style.height = "300px";
    document.getElementById("frasetext").style.width = "200px";
    document.getElementById("frasetext").style.height = "300px";
    document.getElementById("frasetext").style.visibility = "visible";
}
function fraseleave(){
    document.getElementById("wiki").style.marginBottom = "400px";
    document.getElementById("fraseframe").style.width = "250px";
    document.getElementById("fraseframe").style.height = "150px";
    document.getElementById("frasetext").style.width = "0px";
    document.getElementById("frasetext").style.height = "0px";
    document.getElementById("frasetext").style.visibility = "hidden";
}

function livroshover(){
    document.getElementById("livro").style.marginBottom = "0px";
    document.getElementById("livrosframe").style.width = "420px";
    document.getElementById("livrosframe").style.height = "300px";
    document.getElementById("livrostext").style.width = "200px";
    document.getElementById("livrostext").style.height = "300px";
    document.getElementById("livrostext").style.visibility = "visible";
}
function livrosleave(){
    document.getElementById("livro").style.marginBottom = "400px";
    document.getElementById("livrosframe").style.width = "250px";
    document.getElementById("livrosframe").style.height = "150px";
    document.getElementById("livrostext").style.width = "0px";
    document.getElementById("livrostext").style.height = "0px";
    document.getElementById("livrostext").style.visibility = "hidden";
}

var testMobile = /iPhone|Android|iPad/i.test(navigator.userAgent);
if (testMobile){
    document.getElementById("Paulo-Links").innerHTML = "<h1>Mais sobre Paulo</h1>";
    document.getElementById("Paulo-Links").innerHTML += "<br><br><a href='https://pt.wikipedia.org/wiki/Paulo_Leminski'>Wiki de Paulo Leminski</a>";
    document.getElementById("Paulo-Links").innerHTML += "<br><br><a href='https://brasilescola.uol.com.br/literatura/paulo-leminski.htm#Frases+de+Paulo+Leminski'>Frases de Paulo Leminski</a>";
    document.getElementById("Paulo-Links").innerHTML += "<br><br><a href='https://www.estadao.com.br/web-stories/cultura/literatura/paulo-leminski-6-livros-para-ler-nos-35-anos-da-morte-do-escritor/?srsltid=AfmBOooLQOGmSGhA--ludLn9gllH7bW7jxVd-d7y0S8HTD1NrY2nokbD'>Livros de Paulo Leminski</a>";
}
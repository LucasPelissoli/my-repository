
function leiamais(){             // chama a funçao no "onclick" do botao no codigo html
    var botao = document.querySelector(".lermais")
    var conteudolermais = document.querySelector(".conteudo_lore2")
    var conteudoreduzido = document.querySelector(".conteudo_lore")
    conteudoreduzido.style.display = "none";
    conteudolermais.style.display = "block";
    botao.style.display = "none";
}
 

/*
var botaoleiamais=document.querySelector(".lermais")
var conteudolermais=document.querySelector(".conteudo_lore2")

botaoleiamais.addEventListener('click', function(){
    botaoleiamais.style.display = "none";
    conteudolermais.style.display = "block";

})  descobrir erro no addeventlistener */
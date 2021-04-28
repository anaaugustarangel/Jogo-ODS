var video = document.querySelector('.video-yt');
var xMinBotao = 138
var larguraBotao = 223
var xMaxBotao = xMinBotao + larguraBotao
var yMinBotao = 271
var alturaBotao = 30
var yMaxBotao = yMinBotao + alturaBotao

var yMinBotao2 = yMaxBotao + 9
var yMaxBotao2 = yMinBotao2 + 30

var yMinBotao3 = yMaxBotao2 + 9
var yMaxBotao3 = yMinBotao3 + 30




var tela = 0;
// tela 0: menu
// tela 1: instruções
// tela 2: créditos
// tela 3: play
// tela 4: fases
// tela 5: pergunta 1
// tela 6: pergunta 2
// tela 7: pergunta 3
// tela 8: pergunta 4
// tela 9: pergunta 5
// tela 10: pergunta 6
// tela 11: pergunta 7
// tela 12: pergunta 8
// tela 13: bom trabalho
// tela 20: tente novamente

function telaMenu (){
background(imageminicio);
textSize (25);
fill ("FFFFFF");
text ("Nome do Jogo", 160, 225);
fill(73, 4, 66);
rect(xMinBotao, yMinBotao, larguraBotao, alturaBotao, 10);
rect(138, 310, 223, 30, 10);
rect(138, 349, 223, 30, 10);



if ( mouseX > xMinBotao && mouseX < xMaxBotao && mouseY > yMinBotao && mouseY < yMaxBotao ){
  fill (0)
  rect(xMinBotao, yMinBotao, larguraBotao, alturaBotao, 10);
  if (mouseIsPressed)
    tela = 3
}

if ( mouseX > xMinBotao && mouseX < xMaxBotao && mouseY > yMinBotao2 && mouseY < yMaxBotao2){
  fill (0)
  rect(xMinBotao, yMinBotao2, larguraBotao, alturaBotao, 10);
  if (mouseIsPressed)
    tela = 2
}

if ( mouseX > xMinBotao && mouseX < xMaxBotao && mouseY > yMinBotao3 && mouseY < yMaxBotao3){
  fill (0)
  rect(xMinBotao, yMinBotao3, larguraBotao, alturaBotao, 10);
  if (mouseIsPressed)
    tela = 1
}




textSize (15);
fill (255,255,255);
textStyle(BOLD);
text ("Play", xMinBotao + 90, 290);
text ("Créditos", xMinBotao + 80, 330);
text ("Instruções", xMinBotao + 70, 370);

}

function telaInstrucoes() {
  background ("#FF7A13");
  noStroke ()
  fill ("#FFC96B");
  image (imagemBackJogar , 0, 270)
  rect(0,0,500, 30);
  rect(0,90,500, 280);
  textSize (20);
  fill ("#FFFFFF");
  text ("Instruções", 40, 130);
  textSize (12);
  textStyle(NORMAL);
  fill (0);
  text ("Passo 1: Click com o mouse sobre o Objetivo de DesenvolvimentoSustentável (ODS) que você quer aprender!", 40, 150 ,420);
  text ("Passo 2: Quando o jogo começar, leia com atenção a pergunta e responda com base nas informações que foi aprendida", 40, 190 ,420);
  text ("Passo 3: Na parte de baixo da tela aparecerá botões e um deles terá a resposta correta.", 40, 230 ,420);
  text ("Passo 4: Depois de escolher, você irá saber qual a resposta daquele pergunta, ficando cada vez mais confiante para conversar com outras pessoas sobre como podemos tornar o mundo mais sustentávele melhor para todos.", 40, 270,420);
  text ("Depois disso, se aventure nessa jornada de conhecimento e faça outras missões dos ODS!", 40, 330,420);
  image (seta , 0, 0 , 30 , 30)
  if ( mouseX > 0 && mouseX < 30 && mouseY > 0 && mouseY < 30){
    fill ("#FFC96B")
    image (seta , 0, 0 , 30 , 30)
    rect(0, 0, 30, 30);
    image (seta , 0, 0 , 30 , 30)
    if (mouseIsPressed)
      tela = 0
  }
}




function telaCreditos() {
  background (imagemdecréditos);
  textSize (9);
  textStyle(NORMAL);
  fill (244, 243, 243);
  text ("Unidas com o objetivo de contribuir para a formação de humanos mais conscientes sobre si e o mundo que vivem.", 22, 410 ,460);
  textStyle(BOLD);
  textSize (10);
  fill (141, 141, 141);
  text ("Ana Augusta Rangel", 47, 262 ,108);
  text ("Isabelelle dos Santos", 198, 262 ,108);
  text ("Larissa de Alcântara", 350, 262 ,108);
  textStyle(NORMAL);
  textSize (9);
  text ("Graduanda em Ciências e Tecnologia pela UFRN.", 51, 279 ,110);
  text ("Programadora", 51, 301 ,110);
  text ("Pesquisadora sobre Literatura Infanto-Juvenil na perspectiva antirracista", 202, 279 ,110);
  text ("Graduanda em Ciências e Tecnologia pela UFRN.", 354, 279 ,110);
  text ("Programadora",354, 301 ,110);
  
  if ( mouseX > 20 && mouseX < 50 && mouseY > 10 && mouseY < 50){
    if (mouseIsPressed)
      tela = 0
  }
}




function telaPlay (){

 
  background (imagemintrodução);
  noStroke ()
  fill (30, 0, 27);
  rect(78, 84, 345, 282, 10);
  fill (73, 4, 66);
  rect(78, 326, 345, 40, 0, 0, 10, 10);
  textSize (10);
  textStyle(BOLD);
  fill ("#FFFFFF");
  text ("PRÓXIMO", 225, 340 ,420);
  textStyle(NORMAL);
  text ("Nosso lema é não deixar ningém para trás e pensando globalmete e agindo localmente. Aperte próximo para continuar", 92, 120,300)
  textSize (15);
  textStyle(BOLD);
  text ("Geração do Amanhã,", 90, 100,420);

  
  if ( mouseX > 0 && mouseX < 30 && mouseY > 0 && mouseY < 30){
    fill ("#FFFFFF")
    image (seta , 0, 0 , 15 , 15)
    image (seta , 0, 0 , 15 , 15)
    rect(0, 0, 15, 15);
    image (seta , 0, 0 , 15 , 15)
    if (mouseIsPressed)
      tela = 0
  }
  
  if ( mouseX > 78 && mouseX < 345+78 && mouseY > 326 && mouseY < 326 + 40){
    fill ("#FFFFFF")
    rect(78, 326, 345, 40, 0, 0, 10, 10);
    textSize (10);
    textStyle(BOLD);
    fill (73, 4, 66); 
    text ("PRÓXIMO", 225, 340 ,420);
    if (mouseIsPressed)
      tela = 4
  }


}

function telaFases (){
  background (imagemfases);
  noStroke ()
  fill (30, 0, 27);
  rect(78, 84, 345, 282, 10);
  fill (73, 4, 66);
  rect(78, 326, 345, 40, 0, 0, 10, 10);
  textSize (10);
  textStyle(BOLD);
  fill ("#FFFFFF");
  text ("PRÓXIMO", 225, 340 ,420);
  textStyle(NORMAL);
  text ("Nosso lema é não deixar ningém para trás e pensando globalmete e agindo localmente. Aperte próximo para continuar", 92, 120,300)
  textSize (15);
  textStyle(BOLD);
  text ("Geração do Amanhã,", 90, 100,420);
  if ( mouseX > 20 && mouseX < 50 && mouseY > 10 && mouseY < 50){
    fill ("#FFFFFF")
    rect(0, 0, 15, 15);
    if (mouseIsPressed){
      tela = 3
  }
  }
  if ( mouseX > 78 && mouseX < 345+78 && mouseY > 326 && mouseY < 326 + 40){
    fill ("#FFFFFF")
    rect(78, 326, 345, 40, 0, 0, 10, 10);
    textSize (10);
    textStyle(BOLD);
    fill (73, 4, 66); 
    text ("PRÓXIMO", 225, 340 ,420);
    if (mouseIsPressed)
      tela = 5
  }
}

function telaP1 (){
  background (imagempergunta1);
  textSize (10);
  textStyle(BOLD);
  fill (199, 33, 47); 
  text ("Lorem ipsum dolor sit amet,consectetur adipiscing elit,sed do eiusmod tempor incididunt ut labore et dolore magna aliqua?", 110, 80,265)

  textSize (9);
  textStyle(NORMAL);
  fill (141, 141, 141); 
  text ("erradoLskamdomdvodsvkovm opodskc okd oo kkdf kodf ", 110, 260,265)
  text ("certoLskamdomdvodsvkovm opodskc okd oo kkdf kodf ", 110, 300,265)
  text ("erradoLskamdomdvodsvkovm opodskc okd oo kkdf kodf ", 110, 340,265)
  text ("erradoLskamdomdvodsvkovm opodskc okd oo kkdf kodf ", 110, 380,265)
  
  if ( mouseX > 102 && mouseX < 102 + 300 && mouseY > 249 && mouseY < 249+26){
    fill (236, 201, 201); 
    rect(101, 249, 300, 26,5);
    fill (0); 
    text ("erradoLskamdomdvodsvkovm opodskc okd oo kkdf kodf ", 110, 260,265)
    if (mouseIsPressed){
      tela = telaTenteNovamente
    }
  }

  if ( mouseX > 102 && mouseX < 102 + 300 && mouseY > 290 && mouseY < 290+26){
    fill (236, 201, 201); 
    rect(101, 290, 300, 26,5);
    fill (0); 
    text ("certoLskamdomdvodsvkovm opodskc okd oo kkdf kodf ", 110, 300,265)
    if (mouseIsPressed){
      tela = 6
    }
  }
  if ( mouseX > 102 && mouseX < 102 + 300 && mouseY > 331 && mouseY < 331+26){
    fill (236, 201, 201); 
    rect(101, 331, 300, 26,5);
    fill (0); 
    text ("erradoLskamdomdvodsvkovm opodskc okd oo kkdf kodf ", 110, 340,265)
    if (mouseIsPressed){
      tela = 20
    }
  }

  if ( mouseX > 102 && mouseX < 102 + 300 && mouseY > 372 && mouseY < 372+26){
    fill (236, 201, 201); 
    rect(101, 372, 300, 26,5);
    fill (0); 
    text ("erradoLskamdomdvodsvkovm opodskc okd oo kkdf kodf ", 110, 380,265)
    if (mouseIsPressed){
      tela = 20
    }
  }
  
  if ( mouseX > 20 && mouseX < 50 && mouseY > 10 && mouseY < 50){
    if (mouseIsPressed)
      tela = 4
  }
}


function telaTenteNovamente (){
  background (imagemTenteNovamente);
  textStyle(BOLD);
  textSize (10);
  fill (199, 33, 47); 
  text ("Essa é não é a resposta correta", 173, 265,265)
  
  textStyle(BOLD);
  fill ("#FFFFFF"); 
  textSize (12);
  text ("Tente Novamente", 200, 295,265)

  if ( mouseX > 171 && mouseX < 171 + 158 && mouseY > 287 && mouseY < 285+29){
    fill ("#FFFFFF"); 
    noStroke ()
    rect(171, 287, 158, 28,5);
    textSize (12);
    textStyle(BOLD);
    fill (73, 4, 66,); 
    text ("Tente Novamente", 200, 295,265)
    if (mouseIsPressed){
      tela = 5
    }
  }
}

function telaP2 (){
  background (imagempergunta2);

}

function telaBomTrabalho(){
  
}






function preload (){
  imageminicio = loadImage ("imagemdoinicio.png")
  imagemfases = loadImage ("imagemdasfases.png")
  imagemintrodução = loadImage ("imagemdovideointrodução.png")
  larisjogo = loadImage ("larisjogo.png")
  anajogo = loadImage ("ana.png")
  isabelejogo = loadImage ("isabelejogo.png")
  seta = loadImage ("setaaa.png")
  imagemdecréditos = loadImage ("imagemdecréditos.png")
  imagempergunta1 = loadImage ("imagemPergunta1.png")
  imagempergunta2 = loadImage ("imagemPergunta2.png")
  imagempergunta3 = loadImage ("imagemPergunta3.png")
  imagempergunta4 = loadImage ("imagemPergunta4.png")
  imagempergunta5 = loadImage ("imagemPergunta5.png")
  imagempergunta6 = loadImage ("imagemPergunta6.png")
  imagempergunta7 = loadImage ("imagemPergunta7.png")
  imagempergunta8 = loadImage ("imagemPergunta8.png")
  imagemTenteNovamente = loadImage ("ImagemTenteNovamente.png")
}

function setup (){
  createCanvas (500,450);
}


function draw (){
  
  if (tela == 0){
    telaMenu ()
    video.style.display = 'none';
    if ( mouseX > xMinBotao && mouseX < xMaxBotao ){
      fill (250)
    }
    }  
  if (tela == 1){
    telaInstrucoes ()
    video.style.display = 'none'; 
  }
  if (tela == 2){
    telaCreditos ()
  }
  if (tela == 3){
    telaPlay ()
    video.style.display = 'flex'; 

  }
  if  (tela == 4){
   telaFases  () 
   video.style.display = 'none'; 
  }
  if  (tela == 5){
    telaP1 () 
    video.style.display = 'none'; 
   }
   if  (tela == 6){
    telaP2 () 
    video.style.display = 'none'; 
   }
   if  (tela == 7){
    telaP3 () 
    video.style.display = 'none'; 
   }
   if  (tela == 8){
    telaP4 () 
    video.style.display = 'none'; 
   }
   if  (tela == 9){
    telaP5 () 
    video.style.display = 'none'; 
   }
   if  (tela == 10){
    telaP6 () 
    video.style.display = 'none'; 
   }
   if  (tela == 11){
    telaP7 () 
    video.style.display = 'none'; 
  }
  if  (tela == 12){
    telaP8 () 
    video.style.display = 'none'; 
  }
  if  (tela == 13){
    telaBomTrabalho () 
    video.style.display = 'none'; 
   }
   if  (tela == 20){
    telaTenteNovamente () 
    video.style.display = 'none'; 
   }
   

}
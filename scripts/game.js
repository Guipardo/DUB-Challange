var introTexts = [
  "- Olá terráqueo, ainda bem que acordou!",
  "- Onde estou? Quem é você? Você vai tirar o meu cérebro?",
  "- Calma meu amigo, são muitas perguntas de uma vez, eu não farei"+
  " nada contigo, meu nome é DUB e eu sou da galáxia Hiperfi, eu vi que você precisa da minha ajuda.",
  "- Sua ajuda? Pra que?",
  "- Você me parece ser muito tímido, já fui como você e sei como é difícil"+
  " ter medo, mas estou aqui para te tornar o maior conquistador de corações da galáxia.",
  "- Eu duvido, nem consigo chegar na helô.",
  "- Depois de aprender como paquerar as fêmeas do meu planeta você"+
  " será capaz de conversar com qualquer humana, está disposto?",
  "- Vai ter que fazer um milagre porque sou um caso perdido.",
  "- É exatamente o que vou fazer."
];

function showScreen(id)
{
  document.getElementById(id).style.display = "block";
}

function hideScreen(id)
{
  document.getElementById(id).style.display = "none";
}

function changeScreen(screen1,screen2)
{
  document.getElementById(screen1).style.display = "none";
  document.getElementById(screen2).style.display = "block";
}

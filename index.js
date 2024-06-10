document.getElementById('menu').style.display = 'none';
var prv = false;

window.addEventListener('click', function () {
  var audio = document.getElementById("music");
  audio.play();
})

document.getElementById('menulogo').addEventListener('click', function(){
  if (prv === false) {
    document.getElementById('menu').style.display = 'block';
    prv = true;
  } else {
    document.getElementById('menu').style.display = 'none';
    prv = false;
  }
})

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  // Fonction pour choisir un mot au hasard dans une liste
  function getRandomWord(words) {
    const randomIndex = getRandomInt(0, words.length - 1);
    return words[randomIndex];
  }

function getRandomInt2(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  // Fonction pour choisir un mot au hasard dans une liste
  function getRandomWord2(words) {
    const randomIndex2 = getRandomInt2(0, words.length - 1);
    return words[randomIndex2];
  }

document.getElementById('générer').addEventListener('click', function(){
    const wordList2 = ["ton baobab", "ton arbre", "ton gourmand", "ton gras", "ton seum", "ton caca", "ton sylvain", "ton baka", "pays", "ton saperlipopette", "ton neuille ", "ta gourmandise", "ton argument", "ton infection", "ton pensement", "ton dimanche", "ta salopette", "ton C15", "ton singe", "ton bouffon", "ta morve", "ton pupitre", "ton bonjour", "ton coucou", "ton hirondelle" ];
    const randomWord2 = getRandomWord2(wordList2);
    console.log("Mot choisi au hasard :", randomWord2);

    const wordList = ["va dormir dans ", "ravale ", "va manger ", "déguste ", "reste dans ", "retourne dans ", "Lis dans ", "va courir dans ", "va nager dans ", "Chante dans ", "va jouer dans ", "Graille ", "témoigne ", "édifie "];
    const randomWord = getRandomWord(wordList);
    console.log("Mot choisi au hasard :", randomWord);
    document.getElementById('debtxt').textContent = randomWord + randomWord2;
})

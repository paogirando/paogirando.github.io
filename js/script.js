      var video = document.getElementById("my-video");

    function showConfirmationDialog() {

      Swal.fire({

        title: 'Você quer sair desse site?',

        text: 'Você será redirecionado para fora desse site, e irá perder todo o tempo acumulado.',

        icon: 'question',

        showCancelButton: true,

        confirmButtonColor: '#3085d6',

        cancelButtonColor: '#d33',

        confirmButtonText: 'Sim, ir para o server do Discord!',

        cancelButtonText: 'Cancelar'

      }).then((result) => {

        if (result.isConfirmed) {

          window.location.href = 'https://discord.gg/2K6GpmGkKs';

        }

      });

    }

const myVideo = document.getElementById("my-video");

const ErrorTimer = document.getElementById("timer");


myVideo.onerror = function() {

  ErrorTimer.innerHTML = "Ocorreu um erro ao abrir o vídeo. <button onclick='location.reload()'>Recarregar</button>";

  ErrorTimer.style.fontSize = "24px";

  ErrorTimer.style.textAlign = "center";

  ErrorTimer.style.marginTop = "20px";

  myVideo.style.display = "none";

};

let timerInterval1 = null;

let pauseTime = null;

myVideo.addEventListener("play", function() {

  if (!pauseTime) {

    startTime = new Date().getTime();

    timerInterval1 = setInterval(updateTimer, 10);

  } else {

    // Se o vídeo foi despausado, subtrai o tempo que ficou pausado do tempo total

    const currentTime = new Date().getTime();

    startTime += currentTime - pauseTime;

    pauseTime = null;

    timerInterval1 = setInterval(updateTimer, 10); // Inicia o timer novamente

  }

});

myVideo.addEventListener("pause", function() {

  clearInterval(timerInterval1);

  pauseTime = new Date().getTime(); // Atualiza o tempo em que o vídeo foi pausado

});

myVideo.addEventListener("waiting", function() {

  clearInterval(timerInterval1);

  pauseTime = new Date().getTime(); // Atualiza o tempo em que o vídeo foi pausado

});

myVideo.addEventListener("playing", function() {

  if (pauseTime) {

    const currentTime = new Date().getTime();

    startTime += currentTime - pauseTime;

    pauseTime = null;

    timerInterval1 = setInterval(updateTimer, 10); // Inicia o timer novamente

  }

});

const body = document.querySelector('body');

function setLightTheme() {

  document.body.style.backgroundColor = "#F8F8FF";

  document.body.style.color = "black";

  body.classList.toggle('dark-mode');

  // outras propriedades CSS

}

function setDarkTheme() {

  document.body.style.backgroundColor = "black";

  document.body.style.color = "black";

  body.classList.toggle('dark-mode');

  // outras propriedades CSS

}

const themeToggle = document.getElementById("theme-toggle");

themeToggle.addEventListener("click", function() {

  if (document.body.style.backgroundColor === "black") {

    setLightTheme();

    console.log("tema alterado para claro")

  } else {

    setDarkTheme();

    console.log("tema alterado para escuro")

  }

});

var startTime;

var timerInterval;

myVideo.addEventListener("play", function() {

  if (!startTime) {

    startTime = new Date().getTime();

    timerInterval = setInterval(updateTimer, 1000);

  }

});

function startVideo() {

    myVideo.play()

}

function updateTimer() {

  var currentTime = new Date().getTime();

  var elapsedTime = Math.round((currentTime - startTime) / 1000);

  var hours = Math.floor(elapsedTime / 3600);

  var minutes = Math.floor((elapsedTime - (hours * 3600)) / 60);

  var seconds = elapsedTime - (hours * 3600) - (minutes * 60);

  var timeString = ""

  if (hours > 0) {

    timeString += hours + " hora" + (hours > 1 ? "s" : "") + ", ";

  }

  if (minutes > 0 || hours > 0) {

    timeString += minutes + " minuto" + (minutes > 1 ? "s" : "") + " e ";

  }

  timeString += seconds + " segundo" + (seconds > 1 ? "s" : "");

  timer.innerHTML = "Você está aqui há " + timeString

}

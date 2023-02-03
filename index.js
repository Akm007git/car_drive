
// var audio = document.createElement('audio');
// audio.setAttribute('src', 'sound.mp3');
// audio.loop = true;
// audio.play();
  
// var myAudio = new Audio('sound.mp3');
// document.getElementById("myAudio").loop = true;
// myAudio.play();

// $("car").on("click" , function()
// {

// var  a = new Audio('sound.mp3');
// a.loop = true;
// a.play();
// })


var car = document.querySelector(".car");
car.addEventListener("click", function()
                     { var a = new Audio('sound.mp3');
                      a.loop = true;
                      a.play();
                     });
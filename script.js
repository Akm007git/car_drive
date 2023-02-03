var car = document.querySelector(".car");
car.addEventListener("click", function()
                     { var a = new Audio('sound.mp3');
                      a.loop = true;
                      a.play();
                     });

const arrName = ['Oliver', 'Jack', 'Harry', 'Jacob', 'Charley', 'Thomas', 'George', 'Oscar', 'Calvin', 'Carl', 'Clifford', 'Donald', 'Ernest', 'Gregory', 'Hugh', 'Jonathan', 'Lucas', 'Miles', 'Oscar', 'Tobias', 'Winston'];
  
let counterPrice = 70;

function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min; 
}

function listenNatification (flag) {
    let audio = new Audio();
    audio.src = 'audio/natif.mp3'; 
    audio.autoplay = flag; 
}

let timerId = setTimeout(function widget() { 
  let randomNameNumber = getRandomIntInclusive(0, arrName.length-1);
  let popup = document.getElementById("popup-cust");
  popup.innerHTML = `${arrName[randomNameNumber]} купил товар. Товара осталось всего: ${counterPrice}. Внимание! Скидка скоро закончится!`;
  
  let icon = document.createElement('i');
  icon.className = 'fas fa-shopping-cart custom-icon';
  popup.appendChild(icon);

  popup.classList.toggle("show");

  if (popup.classList.contains('show')) {
    listenNatification(true);
  } else {
    listenNatification(false);
  }

  if (counterPrice == 1) {
    counterPrice = 70;
  }

  let counterTimeline = getRandomIntInclusive(1, 3);

  counterPrice = counterPrice-counterTimeline;

  timerId = setTimeout(widget, 20000); // (*)
}, 60000);
let firstCard = null;
let secondCard = null;
let moveCount = 0;
let pairsCount = 0;
let main = document.querySelector("main");
let images2 = ["bug.png", "bug.png", "cap.png", "cap.png", "chip.png", "chip.png", "gears.png", "gears.png", "keyboard.png", "keyboard.png", "logic.png", "logic.png", "rocket.png", "rocket.png", "satellite.png", "satellite.png"];
let images = [
    "chlopiec.jpg", "chlopiec.jpg",
    "mucha.jpg", "mucha.jpg",
    "somasz.jpg", "somasz.jpg",
    "szewc.jpg", "szewc.jpg",
    "gutenberg.png", "gutenberg.png",
    "kebab.jpg", "kebab.jpg",
    "drwal.jpg", "drwal.jpg",
    "karpin.jpg", "karpin.jpg" ];
const cards = document.querySelectorAll(".card");
console.log(images);
console.log(cards);
const playAgain = document.getElementById("play-again");
const info = document.getElementById("info");


function count(){
    moveCount += 1;
    info.textContent = "Liczba kroków: "+ moveCount;
}

function flipCard(e){
    if (e.target == firstCard){
        return;
    }
    if (firstCard == null){
        firstCard = e.target;
        firstCard.style.backgroundImage = "url("+images[firstCard.id]+")";
        count();
    }
    else{
        if (secondCard == null){
                secondCard = e.target;
                secondCard.style.backgroundImage = "url("+images[secondCard.id]+")";
                count();
                setTimeout(hideCards, 500);
            }
    }
    
    
}

function hideCards(){
    if (firstCard.style.backgroundImage == secondCard.style.backgroundImage){
        firstCard.style.backgroundImage = "url(dobre.png)";
        secondCard.style.backgroundImage = "url(dobre.png)";
        pairsCount += 1;
        firstCard.removeEventListener("click", flipCard);
        secondCard.removeEventListener("click", flipCard);
        firstCard = null;
        secondCard = null;
        if (pairsCount == 8){
            playAgain.style.display = "inline-block";
            info.textContent = `Gra wygrana w ${moveCount} krokach!`;
            main.style.height = "657px";
        }
    }
    else {
        firstCard.style.backgroundImage = "";
        secondCard.style.backgroundImage = "";
        firstCard = null;
        secondCard = null;
    }
}

function startGame(){
    moveCount = 0;
    pairsCount = 0;
    for (const karta of cards) {
        karta.addEventListener("click", flipCard);
        karta.style.backgroundColor = "rgb(245,245,245";
        karta.style.backgroundImage = "";
        playAgain.style.display = "none";
        main.style.height = "615px";
        
    }
    for (let i = 0; i < 16; i++) {
        let losowa = Math.floor(Math.random()*16);
        let pomocna = images[i];
        images[i] = images[losowa];
        images[losowa] = pomocna;

    }
    

}
playAgain.addEventListener("click", startGame);




startGame()

window.onload = main;

//Global Variables
const gameText = document.getElementById("text");
const gameInput = document.getElementById("input");
const gameButton = document.getElementById("btn");
const gameButtonTwo = document.getElementById("btn-two");
const gameButtonThree = document.getElementById("btn-three");
const colorObjekts = ["röd", "blå", "grön"];

/**
 * Funktionen aktiveras så fort sidan har laddats och 
 */
function main() {
  addEventListeners();
}

//Eventlisteners
function addEventListeners() {
  gameButton.onclick = stageOne; 
}

//Funktionalitet
function stageOne() {
  gameText.innerHTML = `${gameInput.value}, du har fått möjlighet att resa enkelväg med NASA till Mars, vad svarar du?`;

  gameInput.style.display = "none";
  gameButton.innerHTML = "Ja";
  gameButtonTwo.style.display = "unset";
  gameButtonTwo.innerHTML = "Nej";

  gameButton.onclick = stageTwo;
  gameButtonTwo.onclick = stageTwoGameOver;
}

function stageTwoGameOver () {
  gameText.innerHTML = "Du tackade nej, återgick till vardagen och levde lycklig i alla dina dagar...eller?";

  gameButton.innerHTML = "Börja om";
  gameButtonTwo.style.display = "none";

  gameButton.onclick = function() {
    window.location.reload();
  }
}

function stageTwo() {
  gameText.innerHTML = "2 år senare... Mars är inom räckhåll när ett oidentifierat objekt plötsligt dyker upp från ingenstans. vad gör du nu?"
  
  gameButton.innerHTML = "Skjut rymdmissiler";
  gameButtonTwo.innerHTML = "Landa på objektet";
  gameButtonThree.style.display = "unset";
  gameButtonThree.innerHTML = "Manöverera skeppet";

  gameButton.onclick = stageThreeGameOver;
  gameButtonTwo.onclick = stageThreeLand;
  gameButtonThree.onclick = stageThreeHonk;
}

function stageThreeGameOver() {
  gameText.innerHTML = "Din handling påverkade inte objektet men gick inte förbi obemärkt. Det oidentifierade objektet vecklar ut vad som ser ut som en gigantisk metallbanan och skjuter iväg en laserstråle som upplöser dig och ditt skepp till atomer...Aj"

  gameButton.innerHTML = "Börja om"
  gameButtonTwo.style.display = "none";
  gameButtonThree.style.display = "none";

  gameButton.onclick = function() {
    window.location.reload();
  }
}

function stageThreeLand() {
  gameText.innerHTML = "Du landar skeppet på objektet och genomför en rymdpromenad för att ta lite prover. Väl ute på objektet dyker en varelse upp framför dig. vad gör du?"

  gameButton.innerHTML = "Skjuter varelsen";
  gameButtonTwo.innerHTML = "Hälsar på varelsen";
  gameButtonThree.style.display = "none";

  gameButton.onclick = stageFourGameOver;
  gameButtonTwo.onclick = stageFour;
}

function stageThreeHonk() {
  gameText.innerHTML = "Du manövererar skeppet för att inte kollidera, men det visar sig att objektet ändrar sin position så att du inte kan ta dig förbi. Intressant tänker du och försöker ta kontakt med objektet genom att sända ut ett meddelande. Vad skriver du?"

  gameInput.style.display = "unset";
  gameInput.value = "";
  gameButton.innerHTML = "Sänd meddelande";
  gameButtonTwo.style.display = "none";
  gameButtonThree.style.display = "none";

  gameButton.onclick = stageThreeHonkNext;
}

function stageThreeHonkNext() {
  gameText.innerHTML = `Ditt meddelande "${gameInput.value}" verkar ha mottagits eftersom skeppet automatiskt styrs ner på objektet. Du tar på din rymddräckt och går ut där en varelse står och väntar på dig. Vad gör du nu?`

  gameInput.style.display = "none";
  gameButton.innerHTML = "Skjuter varelsen";
  gameButtonTwo.style.display = "unset";
  gameButtonTwo.innerHTML = "Hälsar på varelsen";
  gameButtonThree.style.display = "none";

  gameButton.onclick = stageFourGameOver;
  gameButtonTwo.onclick = stageFour;

}

function stageFourGameOver() {
  gameText.innerHTML = "Varelsen verkar ha någon form av sköld runt sig eftersom skottet bara stutsade iväg. Varlsen suckar, tar fram sitt vapen och skjuter dig... du fallet ihop och slocknar till ...ajajajaj"

  gameButton.innerHTML = "Börja om"
  gameButtonTwo.style.display = "none";
  gameButtonThree.style.display = "none";

  gameButton.onclick = function() {
    window.location.reload();
  }
}

function stageFour() {
  gameText.innerHTML = "Det visar sig att varelsen förstår ditt språk och tar fram tre liknande objekt: en dosa med en röd, en blå och en grön knapp, Sedan säger varlsen välj en färg. Vilken färg väljer du?"

  gameInput.style.display = "unset";
  gameInput.value = "";
  gameButton.innerHTML = "Välj";
  gameButtonTwo.style.display = "none";
  gameButtonThree.style.display = "none";
  gameButton.onmouseenter = function() {
    for (let i = 0; i < colorObjekts.length; i++) {
      if (gameInput.value === "röd") {
        gameButton.onclick = stageFiveRed;
      } else if (gameInput.value === "blå") {
        gameButton.onclick = stageFiveBlue;
      } else if (gameInput.value === "grön") {
        gameButton.onclick = stageFiveGreen;
      } else {
        gameButton.onclick = function() {
          gameText.innerHTML = "Du kan välja mellan röd, blå och grön";
          gameButton.onclick = stageFour;
        }
      }
    }
    }
}

function stageFiveRed() {
  gameText.innerHTML = "Du väljer den röda dosan. Varelsen ger dig den och knäpper sedan med fingret...Du vaknar upp i ditt skepp och insåg att allt var en dröm tills du ser dosan i sätet bredvid dig. Du tar upp dosan, kollar lite på den och trycker sedan på den röda knappen...BOOM! du och hela skeppet sprängs i tusen bitar...ajajajaj...THE END"

  gameInput.style.display = "none";
  gameButton.style.display = "none";
}

function stageFiveBlue() {
  gameText.innerHTML = "Du väljer den blåa dosan. Varelsen ger dig den och knäpper sedan med fingret...Du vaknar upp i ditt skepp och insåg att allt var en dröm tills du ser dosan i sätet bredvid dig. Du tar upp dosan, kollar lite på den och trycker sedan på den blåa knappen...jaha tänker du, vilket skämt och åker vidare mot Mars... THE END"
  
  gameInput.style.display = "none";
  gameButton.style.display = "none";
}

function stageFiveGreen() {
  gameText.innerHTML = "Du väljer den röda dosan. Varelsen ger dig den och knäpper sedan med fingret...Du vaknar upp i ditt skepp och insåg att allt var en dröm tills du ser dosan i sätet bredvid dig. Du tar upp dosan, kollar lite på den och trycker sedan på den gröna knappen..."

  gameInput.style.display = "none";
  gameButton.style.display = "none";
}
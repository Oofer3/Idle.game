let money = 0;
let fish = 0;
let greyfish = 0;
let market = 1.5;
let marketprice = 222
let marketamount = 0;
let pricemultiplier = 1.3;
let fishermanprice = 10;
let boatprice = 800;
let beachprice = 9998;
let bottleprice = 92340;
let taxiprice = 762034;

function roundToTwoDecimalPlaces(num) {
    return Math.round(num * 100) / 100;
}

function toggleDarkMode() {
    document.body.classList.toggle("dark-mode");
}

let darkModeButton = document.querySelector("#dark-mode-button");

let fishDisplay = document.querySelector("#fish-count");

fishing = () => {
    if (Math.random() < (0.02 + fishermans * 0.01)) {
        fish++
        fishDisplay.textContent = fish;
        console.log("leidsin kala")
    }

}
a = setInterval(fishing, 100)
function sellFish() {
    money += (fish * market) + (greyfish * market * 3)
    fish = 0;
    greyfish = 0;
    fishDisplay.textContent = fish;
}

function buyMarket() {
    if (money >= marketprice) {
        marketamount++
        market = market * 1.2
        money -= marketprice
        marketprice = marketprice * pricemultiplier
        console.log("Sa arendasid enda turgu:", marketamount)
        let marketDisplay = document.querySelector("#market");
        marketDisplay.textContent = market;
    } else { alert("sul on vaja " + marketprice + " münti"); }

}

let fishermans = 0;
function buyFisherman() {
    if (money >= fishermanprice && fishermans < 100) {
        fishermans++;
        money -= fishermanprice;
        fishermanprice = fishermanprice * pricemultiplier;
        console.log("Sa ostsid kalamehe:", fishermans);
    } else if (fishermans >= 100) {
        alert("You can only buy a maximum of 100 fishermen.");
    } else {
        alert("You need " + fishermanprice + " coins.");
    }
}

let boats = 0;
function buyBoat() {
    if (money >= boatprice && boats < 10) {
        boats++;
        money -= boatprice;
        boatprice = boatprice * pricemultiplier;
        clearInterval(a);
        a = setInterval(fishing, Math.max(10, 100 / boats));
    } else if (boats >= 10) {
        alert("You can only buy a maximum of 10 boats.");
    } else {
        alert("You need " + boatprice + " coins.");
    }
}


function catchFish() {
    fish++;
    fishDisplay.textContent = fish;
    
    
}


let beach = 0;
function buybeach() {
    if (money >= beachprice && beach < 100) {
        beach++;
        money -= beachprice;
        beachprice = beachprice * pricemultiplier;
        console.log("Ostsid ühe ranna:", beach);
    } else if (beach >= 100) {
        alert("You can only buy a maximum of 100 beaches.");
    } else {
        alert("You need " + beachprice + " coins.");
    }
}

fishing1 = () => {
    if (Math.random() < (0.00 + beach * 0.01)) {
        greyfish++
        console.log("leidsin hõbedase kala")
    }

}

b = setInterval(fishing1, 100)

let bottle = 0;
function buyBottle() {
    if (money >= bottleprice && bottle < 10) {
        bottle++;
        money -= bottleprice;
        bottleprice = bottleprice * pricemultiplier;
        clearInterval(b);
        b = setInterval(fishing1, Math.max(10, 100 / bottle));
    } else if (bottle >= 10) {
        alert("You can only buy a maximum of 10 bottles.");
    } else {
        alert("You need " + bottleprice + " coins.");
    }
}
let taxi = 0;

function orderTaxi() {
    if (money >= taxiprice) {
        taxi++;
        money -= taxiprice;
        taxiprice *= pricemultiplier;

        switch (taxi) {
            case 1:
                console.log("congrats, saad nüüd koju minna");
                break;
            case 2:
                console.log("congrats, ma saan ka nüüd koju minna");
                break;
            case 3:
                console.log("congrats, karu saab ka nüüd koju minna");
                break;
            case 4:
                console.log("congrats, taksojuht saab nüüd puhkusele minna");
                break;
            case 7:
                console.log("congrats, taksojuht ostsis Pariisi korteri");
                break;
            case 11:
                console.log("congrats, taksojuht on reisinud juba kaheksasse eri riiki");
                break;
            case 16:
                console.log("congrats, taksojuht lämbus rahahunniku alla ära, puhaku ta rahus");
                break;
            case 19:
                console.log("keep going you are close ");
                break;
            default:
                console.log("congrats, taksojuht saab nüüd kauem puhkusel olla");
                break;
        }
    } else {
        console.log("sul on vaja " + taxiprice + " raha");
    }
    updateDisplay();
}

function updateDisplay() {
    const elements = {
        money: roundToTwoDecimalPlaces(money),
        fish: roundToTwoDecimalPlaces(fish),
        market: roundToTwoDecimalPlaces(market),
        fishermans: roundToTwoDecimalPlaces(fishermans),
        boats: roundToTwoDecimalPlaces(boats),
        beach: roundToTwoDecimalPlaces(beach),
        greyfish: roundToTwoDecimalPlaces(greyfish),
        bottle: roundToTwoDecimalPlaces(bottle),
        taxi: roundToTwoDecimalPlaces(taxi),
        marketprice: roundToTwoDecimalPlaces(marketprice),
        fishermanprice: roundToTwoDecimalPlaces(fishermanprice),
        boatprice: roundToTwoDecimalPlaces(boatprice),
        beachprice: roundToTwoDecimalPlaces(beachprice),
        bottleprice: roundToTwoDecimalPlaces(bottleprice),
        taxiprice: roundToTwoDecimalPlaces(taxiprice),
        marketamount: roundToTwoDecimalPlaces(marketamount)
    };

    Object.entries(elements).forEach(([key, value]) => {
        const display = document.querySelector(`#${key}`);
        if (display) {
            display.textContent = value;
        }
    });
}

setInterval(updateDisplay, 10);

let music = new Audio("Zen_Idle.mp3");
music.loop = true;
music.volume = 0.1;
music.play();

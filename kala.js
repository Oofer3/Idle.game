let money = 0;
let fish = 0;
let greyfish = 0;
let market = 1.5;
let marketprice = 100;
let marketamount = 0;
let pricemultiplier = 1.8;
let fishermanprice = 10;
let boatprice = 1000;
let beachprice = 100000;
let bottleprice = 1000000;
let taxiprice = 10000000;


function roundToTwoDecimalPlaces(num) {
    return Math.round(num * 100) / 100;
}

marketprice = roundToTwoDecimalPlaces(marketprice);
fish = roundToTwoDecimalPlaces(fish);
greyfish = roundToTwoDecimalPlaces(greyfish);
fishermanprice = roundToTwoDecimalPlaces(fishermanprice);
boatprice = roundToTwoDecimalPlaces(boatprice);
beachprice = roundToTwoDecimalPlaces(beachprice);
bottleprice = roundToTwoDecimalPlaces(bottleprice);
taxiprice = roundToTwoDecimalPlaces(taxiprice);

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
    console.log("money:", money)
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
    } else console.log("sul on vaja " + marketprice + " raha")
}

let fishermans = 0
function buyFisherman() {
    if (money >= fishermanprice) {
        fishermans++
        money -= fishermanprice
        fishermanprice = fishermanprice * pricemultiplier
        console.log("Sa ostsid kalamehe:", fishermans)
        clearInterval(a)
        a = setInterval(fishing, Math.max(10, 100 / fishermans))
        let moneyDisplay = document.querySelector("#money");
        moneyDisplay.textContent = money;
    } else console.log("sul on vaja 10 raha")
}

let boats = 0
function buyBoat() {
    if (money >= boatprice) {
        boats++
        money -= boatprice
        boatprice = boatprice * pricemultiplier
        clearInterval(a)
        a = setInterval(fishing, Math.max(10, 100 / boats))
    } else console.log("sul on vaja 1000 raha")
}

let beach = 0
function buybeach() {
    if (money >= beachprice) {
        beach++
        money -= beachprice
        beachprice = beachprice * pricemultiplier
        console.log("Ostsid ühe ranna:", beach)
    } else console.log("sul on vaja 100000 raha")
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
    if (money >= bottleprice) {
        bottle++;
        money -= bottleprice;
        bottleprice = bottleprice * pricemultiplier;
        clearInterval(b);
        b = setInterval(fishing1, Math.max(10, 100 / bottle));
    } else {
        console.log("sul on vaja 1000000 raha");
    }
    updateDisplay();
}

taxi = 0;
function orderTaxi() {
    if (money >= taxiprice) {
        taxi++;
        money -= taxiprice;
        taxiprice = taxiprice * pricemultiplier;

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
    let moneyDisplay = document.querySelector("#money");
    if (moneyDisplay) {
        moneyDisplay.textContent = roundToTwoDecimalPlaces(money);
    }

    let fishDisplay = document.querySelector("#fish");
    if (fishDisplay) {
        fishDisplay.textContent = roundToTwoDecimalPlaces(fish);
    }

    let marketDisplay = document.querySelector("#market");
    if (marketDisplay) {
        marketDisplay.textContent = roundToTwoDecimalPlaces(market);
    }

    let fishermansDisplay = document.querySelector("#fishermans");
    if (fishermansDisplay) {
        fishermansDisplay.textContent = roundToTwoDecimalPlaces(fishermans);
    }

    let boatsDisplay = document.querySelector("#boats");
    if (boatsDisplay) {
        boatsDisplay.textContent = boats;
    }

    let beachDisplay = document.querySelector("#beach");
    if (beachDisplay) {
        beachDisplay.textContent = beach;
    }

    let greyfishDisplay = document.querySelector("#greyfish");
    if (greyfishDisplay) {
        greyfishDisplay.textContent = greyfish;
    }

    let bottleDisplay = document.querySelector("#bottle");
    if (bottleDisplay) {
        bottleDisplay.textContent = bottle;
    }

    let taxiDisplay = document.querySelector("#taxi");
    if (taxiDisplay) {
        taxiDisplay.textContent = taxi;
    }

    let marketpriceDisplay = document.querySelector("#marketprice");
    if (marketpriceDisplay) {
        marketpriceDisplay.textContent = marketprice;
    }

    let fishermanpriceDisplay = document.querySelector("#fishermanprice");
    if (fishermanpriceDisplay) {
        fishermanpriceDisplay.textContent = fishermanprice;
    }

    let boatpriceDisplay = document.querySelector("#boatprice");
    if (boatpriceDisplay) {
        boatpriceDisplay.textContent = boatprice;
    }

    let beachpriceDisplay = document.querySelector("#beachprice");
    if (beachpriceDisplay) {
        beachpriceDisplay.textContent = beachprice;
    }

    let bottlepriceDisplay = document.querySelector("#bottleprice");
    if (bottlepriceDisplay) {
        bottlepriceDisplay.textContent = bottleprice;
    }

    let taxipriceDisplay = document.querySelector("#taxiprice");
    if (taxipriceDisplay) {
        taxipriceDisplay.textContent = taxiprice;
    }

    let marketamountDisplay = document.querySelector("#marketamount");
    if (marketamountDisplay) {
        marketamountDisplay.textContent = marketamount;
    }
}

setInterval(updateDisplay, 10);

// Try to load game state from local storage
let loadedState = JSON.parse(localStorage.getItem("state"))
let state = loadedState || {
    money: 0,
    fish: 0,
    market: 1.5,
    fisherman: 0,
    boat: 0,
    beach: 0,
    greyfish: 0,
    bottle: 0,
    taxi: 0,
}

// Save game state to local storage every 5 seconds
setInterval(() => {
    localStorage.setItem("state", JSON.stringify(state));
}, 5000);

let prices = {
    market: 222,
    fisherman: 10,
    boat: 800,
    beach: 9998,
    bottle: 92340,
    taxi: 762034,
}

let multipliers = {
    market: 0.2,
    fisherman: 0.3,
    boat: 0.3,
    beach: 0.3,
    bottle: 0.3,
    taxi: 0.3,
}

function calculatePrice(itemName) {
    return prices[itemName] + prices[itemName] * multipliers[itemName] * state[itemName];
}

function roundToTwoDecimalPlaces(num) {
    return Math.round(num * 100) / 100;
}

let fishDisplay = document.querySelector("#state-fish");

fishing = () => {
    if (Math.random() < (0.02 + state.fisherman * 0.01)) {
        state.fish++
        fishDisplay.textContent = state.fish;
        console.log("leidsin kala")
    }
}
a = setInterval(fishing, 100)
function sellFish() {
    state.money += (state.fish * state.market) + (state.greyfish * state.market * 12)
    state.fish = 0;
    state.greyfish = 0;
    fishDisplay.textContent = state.fish;
}

function buyMarket() {
    // TODO näita kuidas need kaks rida teha funktsiooniks
    let itemName = "market";
    let price = calculatePrice(itemName);
    if (state.money >= price) {
        state.market++;
        state.market = state.market * 1.2;
        state.money -= price;
        console.log("Sa arendasid enda turgu:", state.market);
        let marketDisplay = document.querySelector("#market");
        marketDisplay.textContent = state.market;
    } else {
        alert("sul on vaja " + price + " münti");
    }

}

function buyFisherman() {
    let itemName = "fisherman"
    let price = calculatePrice(itemName);
    if (state.money >= price && state.fisherman < 100) {
        state.fisherman++;
        state.money -= price;
        console.log("Sa ostsid kalamehe:", state.fisherman);
    } else if (state.fisherman >= 100) {
        alert("You can only buy a maximum of 100 fishermen.");
    } else {
        alert("You need " + price + " coins.");
    }
}

function buyBoat() {
    let itemName = "boat"
    let price = calculatePrice(itemName);
    if (state.money >= price && state.boat < 10) {
        state.boat++;
        state.money -= price;
        clearInterval(a);
        a = setInterval(fishing, Math.max(10, 100 / state.boat));
    } else if (state.boat >= 10) {
        alert("You can only buy a maximum of 10 boat.");
    } else {
        alert("You need " + price + " coins.");
    }
}

function catchFish() {
    state.fish++;
    fishDisplay.textContent = state.fish;
}

function buybeach() {
    let itemName = "beach"
    let price = calculatePrice(itemName);
    if (state.money >= price && state.beach < 100) {
        state.beach++;
        state.money -= price;
        console.log("Ostsid ühe ranna:", state.beach);
    } else if (state.beach >= 100) {
        alert("You can only buy a maximum of 100 beaches.");
    } else {
        alert("You need " + price + " coins.");
    }
}

fishing1 = () => {
    if (Math.random() < (0.00 + state.beach * 0.01)) {
        state.greyfish++
        console.log("leidsin hõbedase kala")
    }
}

b = setInterval(fishing1, 100)
function buyBottle() {
    let itemName = "bottle"
    let price = calculatePrice(itemName);
    if (state.money >= price && state.bottle < 10) {
        state.bottle++;
        state.money -= price;
        clearInterval(b);
        b = setInterval(fishing1, Math.max(10, 100 / bottle));
    } else if (bottle >= 10) {
        alert("You can only buy a maximum of 10 bottles.");
    } else {
        alert("You need " + price + " coins.");
    }
}
function orderTaxi() {
    let itemName = "taxi"
    let price = calculatePrice(itemName);
    if (state.money >= price) {
        state.taxi++;
        state.money -= price;

        switch (taxi) {
            case 1: alert("Congrats, saad nüüd koju minna"); break;
            case 2: alert("Congrats, ma saan ka nüüd koju minna"); break;
            case 3: alert("Congrats, karu saab ka nüüd koju minna"); break;
            case 4: alert("Congrats, taksojuht saab nüüd puhkusele minna"); break;
            case 7: alert("Congrats, taksojuht ostsis Pariisi korteri"); break;
            case 11: alert("Congrats, taksojuht on reisinud juba kaheksasse eri riiki"); break;
            case 16: alert("Congrats, taksojuht lämbus rahahunniku alla ära, puhaku ta rahus"); break;
            case 19: alert("Keep going you are close "); break;
            default: alert("Congrats, taksojuht saab nüüd kauem puhkusel olla"); break;
        }
    } else { alert("sul on vaja " + price + " raha"); }
    updateDisplay();
}

function updateDisplay() {
    Object.entries(state).forEach(([key, value]) => {
        let display = document.querySelector(`#state-${key}`);
        if (display) {
            display.textContent = roundToTwoDecimalPlaces(value);
        }
    });
    Object.entries(prices).forEach(([key, value]) => {
        let display = document.querySelector(`#price-${key}`);
        if (display) {
            display.textContent = roundToTwoDecimalPlaces(value + prices[key] * multipliers[key] * state[key]);
        }
    });
}
setInterval(updateDisplay, 10);

let music = new Audio("Zen_Idle.mp3");
music.loop = true;
music.volume = 0.1;
music.play();
money = 0
fish = 0
greyfish = 0
market = 1.5
marketprice = 100
marketamount = 0

let fishDisplay = document.querySelector("#fish-count");

fishing = () => {
   if (Math.random() < (0.02+fishermans*0.01)) {
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
    let moneyDisplay = document.querySelector("#money");
    moneyDisplay.textContent = money;
    console.log("money:",money)
}

function buyMarket() {
    if (money >= marketprice) {
        marketamount++
        market = market * 1.2
        money -= marketprice
        marketprice = marketprice * 1.8
        console.log ("Sa arendasid enda turgu:",marketamount)
        let marketDisplay = document.querySelector("#market");
        marketDisplay.textContent = market;
    } else console.log("sul on vaja "+marketprice+" raha")
}

fishermans = 0
function buyFisherman() {
    if (money >= 10) {
        fishermans++
        money -= 10 
        console.log ("Sa ostsid kalamehe:",fishermans)
    } else console.log("sul on vaja 10 raha")
}

boats=0
function buyBoat() {
    if (money >= 1000) {
        boats++
        money -= 1000
        clearInterval(a)
        a = setInterval(fishing, Math.max(10,100/boats))
    } else console.log("sul on vaja 1000 raha")
}

beach=0
function buybeach() {
    if (money >= 100000) {
        beach++
        money -= 100000
        console.log("Ostsid +1 beach:",beach)
    } else console.log("sul on vaja 100000 raha")
}

fishing1 = () => {
    if (Math.random() < (0.00+beach*0.01)) {
     greyfish++
        console.log("leidsin hõbedase kala")
    }
     
 }
 b = setInterval(fishing1, 100)

 bottle = 0;
 function buyBottle() {
     if (money >= 1000000) {
         bottle++;
         money -= 1000000;
         clearInterval(b);
         b = setInterval(fishing1, Math.max(10, 100 / bottle));
     } else {
         console.log("sul on vaja 1000000 raha");
     }
     updateDisplay();
 }
 
 taxi = 0;
 function orderTaxi() {
     if (money >= 1000000) {
         taxi++;
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
         money -= 1000000;
     } else {
         console.log("sul on vaja 1000000 raha");
     }
     updateDisplay();
 }
 
 function updateDisplay() {
     document.querySelector("#money").textContent = money;
     document.querySelector("#fish").textContent = fish;
     document.querySelector("#greyfish").textContent = greyfish;
     document.querySelector("#bottle").textContent = bottle;
     document.querySelector("#taxi").textContent = taxi;
 }
let curStockPrices = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
let yourMoney = 1000;
let yourStock = 0;
let frameForMurderModifier = 1;
let unrealisticOutlookModifier = 1;
function doTheLine(newLine) {
    clearCanvas();
    const c = document.getElementById("myCanvas");
    const ctx = c.getContext("2d");
    var interval = 30;
    var minCeiled = Math.ceil(0);
    var maxFloored = Math.floor(150);
    var theStockPrice = Math.floor((Math.random() * (maxFloored - minCeiled + 1) + minCeiled) * frameForMurderModifier * unrealisticOutlookModifier);
    var whereAreWe = 0;
    if (newLine == true) {
        ctx.beginPath();
        ctx.moveTo(0, theStockPrice);
        for (var key in curStockPrices) {
            curStockPrices[key] = theStockPrice;
            theStockPrice = Math.floor(Math.random() * (maxFloored - minCeiled + 1) + minCeiled);
            theStockPoint = 150 - theStockPrice;
            ctx.lineTo(whereAreWe + interval, theStockPoint);
            ctx.stroke();
            whereAreWe += interval;
        }
    }
    else {
        ctx.beginPath();
        ctx.moveTo(0, curStockPrices[0]);
        for (i = 0; i < curStockPrices.length; i++) {
            if (i == curStockPrices.length - 1) {
                curStockPrices[i] = theStockPrice;
            }
            else {
                curStockPrices[i] = curStockPrices[i + 1];
            }
            ctx.lineTo(whereAreWe + interval, 150 - curStockPrices[i]);
            ctx.stroke();
            whereAreWe += interval;
        }
    }
    document.getElementById('yuh').innerHTML = "Stock Price: $" + curStockPrices[curStockPrices.length-1];
}

function clearCanvas() {
    const c = document.getElementById("myCanvas");
    const ctx = c.getContext("2d");
    ctx.clearRect(0, 0, c.width, c.height);
}

function buyStock() {
    if (yourMoney >= curStockPrices[curStockPrices.length - 1]) {
        yourMoney -= curStockPrices[curStockPrices.length - 1];
        document.getElementById('yourMoney').innerHTML = "$" + yourMoney;
        yourStock += 1;
        document.getElementById('yourStock').innerHTML = "You have: " + yourStock + " stock";
    }
}

function sellStock() {
    if (yourStock > 0) {
        yourMoney += curStockPrices[curStockPrices.length - 1];
        document.getElementById('yourMoney').innerHTML = "$" + yourMoney;
        yourStock -= 1;
        document.getElementById('yourStock').innerHTML = "You have: " + yourStock + " stock";
    }
}

function updateYourMoney() {
    document.getElementById('yourMoney').innerHTML = "$" + yourMoney;
}

function setModifier(cost, ending, modifier, modifierName) {
    if (ending == true) {
        if (modifierName == "framedForMurderModifier") {
            frameForMurderModifier = modifier;
            document.getElementById('framedForMurder').innerHTML = "";
        }
        if (modifierName == "unrealisticOutlookModifier") {
            unrealisticOutlookModifier = modifier;
            document.getElementById('unrealisticOutlook').innerHTML = "";
        }
    }
    else if (cost <= yourMoney) {
        yourMoney -= cost;
        if (modifierName == "framedForMurderModifier") {
            frameForMurderModifier = modifier;
            document.getElementById('framedForMurder').innerHTML = "CEO committed a ghastly murder! Stock price down " + ((1.0 - modifier) * 100) + "%";
        }
        if (modifierName == "unrealisticOutlookModifier") {
            unrealisticOutlookModifier = modifier;
            document.getElementById('unrealisticOutlook').innerHTML = "This year the company will make a bajillion dabloons! Stock price up " + ((modifier - 1.0) * 100) + "%";
        }
    }

    updateYourMoney();
    setTimeout(() => setModifier(0, true, 1, modifierName), 6000);
}

/*
function frameForMurder(cost, ending, modifier, modifierName) {
    if (ending == true) {
        frameForMurderModifier = modifier;
        document.getElementById('activeModifiers').innerHTML = "";
    }
    else if (cost <= yourMoney) {
        frameForMurderModifier = modifier;
        document.getElementById('activeModifiers').innerHTML = "CEO committed a ghastly murder! Stock price down " + (1 - modifier * 100) + "%";
    }
    setTimeout(() => frameForMurder(0, true, 1), 5000);
}

function priceFixing(cost, ending, modifier) {
    if (ending == true) {
        frameForMurderModifier = modifier;
        document.getElementById('activeModifiers').innerHTML = "";
    }
    else if (cost <= yourMoney) {
        frameForMurderModifier = modifier;
        document.getElementById('activeModifiers').innerHTML = "CEO committed a ghastly murder! Stock price down " + (1 - modifier * 100) + "%";
    }
    setTimeout(() => frameForMurder(0, true, 1), 5000);
}
*/

let timerId = setInterval(() => doTheLine(false), 500);

setTimeout(() => { clearInterval(timerId); }, 600000);
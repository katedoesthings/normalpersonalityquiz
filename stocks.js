let curStockPrices = [0, 0, 0, 0, 0, 0, 0, 0, 0, -1];
let theStocks = [
    {
        "name": "Old Pennyworth's Butterscotch",
        "stockPrices": [0, 0, 0, 0, 0, 0, 0, 0, 0, -1],
        "color": [255, 0, 0],
        "curPrice": -1,
        "element": "pennyworthPrice",
    },
    {
        "name": "Literally Cloning Dinosaurs",
        "stockPrices": [0, 0, 0, 0, 0, 0, 0, 0, 0, -1],
        "color": [0, 102, 0],
        "curPrice": -1,
        "element": "dinoCloning",
    },
    {
        "name": "Eggulon: The New, Improved Egg",
        "stockPrices": [0, 0, 0, 0, 0, 0, 0, 0, 0, -1],
        "color": [76, 0, 153],
        "curPrice": -1,
        "element": "eggulon",
    },
    {
        "name": "ChimpCorp (Their President Is A Literal Chimpanzee)",
        "stockPrices": [0, 0, 0, 0, 0, 0, 0, 0, 0, -1],
        "color": [0, 102, 204],
        "curPrice": -1,
        "element": "chimpcorp",
    },

    {
    "name": "It's Just The Moon",
    "stockPrices": [0, 0, 0, 0, 0, 0, 0, 0, 0, -1],
    "color": [0, 102, 204],
    "curPrice": -1,
    "element": "themoon",
    },
]
let yourMoney = 1000;
let yourStock = 0;
let frameForMurderModifier = 1;
let unrealisticOutlookModifier = 1;
let prevStockPrice = -1000;
let theStockPrice = -1;
function doTheLine(newLine) {
    clearCanvas();
    const c = document.getElementById("myCanvas");
    const ctx = c.getContext("2d");

    var interval = 30;

    for (var j in theStocks) {
        if (theStocks[j].name == "Old Pennyworth's Butterscotch") {
            theStocks[j].curPrice = generateStockPrice(1, 150, theStocks[j].curPrice, 40)
        }
        if (theStocks[j].name == "Literally Cloning Dinosaurs") {
            theStocks[j].curPrice = generateStockPrice(75, 150, theStocks[j].curPrice, 40)
        }
    }


    var whereAreWe = 0;
    if (newLine == true) {
        for (var key in theStocks) {
            whereAreWe = 0;
            ctx.beginPath();
            ctx.moveTo(0, theStocks[key].curPrice);
            if (theStocks[key].name == "Old Pennyworth's Butterscotch") {
                for (var k in theStocks[key].stockPrices) {
                    theStocks[key].stockPrices[k] = theStockPrice;
                    theStockPrice = generateStockPrice(1, 150, -1, 40);
                    theStockPoint = 200 - theStockPrice;
                    ctx.lineTo(whereAreWe + interval, theStockPoint);
                    ctx.strokeStyle = "rgb(" + theStocks[key].color[0] + " " + theStocks[key].color[1] + " " + theStocks[key].color[2] + ")";
                    ctx.stroke();
                    whereAreWe += interval;
                }
            }
            if (theStocks[key].name == "Literally Cloning Dinosaurs") {
                for (var k in theStocks[key].stockPrices) {
                    theStocks[key].stockPrices[k] = theStockPrice;
                    theStockPrice = generateStockPrice(1, 150, -1, 40);
                    theStockPoint = 200 - theStockPrice;
                    ctx.lineTo(whereAreWe + interval, theStockPoint);
                    ctx.strokeStyle = "rgb(" + theStocks[key].color[0] + " " + theStocks[key].color[1] + " " + theStocks[key].color[2] + ")";
                    ctx.stroke();
                    whereAreWe += interval;
                }
            }
        }
    }
    else {
        for (var y in theStocks) {
            whereAreWe = 0;
            ctx.beginPath();
                ctx.moveTo(0, 200 - theStocks[y].curPrice);
                for (i = 0; i <= theStocks[y].stockPrices.length - 1; i++) {
                    if (i == theStocks[y].stockPrices.length - 1) {
                        theStocks[y].stockPrices[i] = theStocks[y].curPrice;
                    }
                    else {
                        theStocks[y].stockPrices[i] = theStocks[y].stockPrices[i + 1];
                    }
                    ctx.lineTo(whereAreWe + interval, 200 - theStocks[y].stockPrices[i]);
                    ctx.strokeStyle = "rgb(" + theStocks[y].color[0] + " " + theStocks[y].color[1] + " " + theStocks[y].color[2] + ")";
                    ctx.stroke();
                    whereAreWe += interval;
            }
            document.getElementById(theStocks[y].element).innerHTML = theStocks[y].name + " Price: $" + theStocks[y].stockPrices[theStocks[y].stockPrices.length - 1];

        }
    }
}


function generateStockPrice(min, max, compare=-1, threshold, modifier1=1, modifier2=1, modifier3=1, modifier4=1, modifier5=1) {
    var minCeiled = Math.ceil(min);
    var maxFloored = Math.floor(max);
    var theStockPrice = Math.floor((Math.random() * (maxFloored - minCeiled + 1) + minCeiled) * modifier1 * modifier2 * modifier3 * modifier4 * modifier5);
    if (compare > 0) {
        var x = 0;
        while (x < 5 || theStockPrice < compare - threshold || theStockPrice > compare + threshold) {
            theStockPrice = Math.floor((Math.random() * (maxFloored - minCeiled + 1) + minCeiled) * modifier1 * modifier2 * modifier3 * modifier4 * modifier5);
            x++;
        }
    }
    return theStockPrice;
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

function setModifier(cost, ending, modifier, modifierName, time) {
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
    setTimeout(() => setModifier(0, true, 1, modifierName), time);
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
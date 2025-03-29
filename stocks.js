let curStockPrices = [0, 0, 0, 0, 0, 0, 0, 0, 0, -1];
let theStocks = [
    {
        "name": "Old Pennyworth's Butterscotch",
        "abbrv": "PWB",
        "stockPrices": [0, 0, 0, 0, 0, 0, 0, 0, 0, -1],
        "margin": 30,
        "fluxchance": 0,
        "fluxthreshold": 60,
        "bouncebackthreshold": 80,
        "bouncebackmargin": 20,
        "bounceback": -3,
        "color": [255, 0, 0],
        "curPrice": -1,
        "element": "pennyworthPrice",
        "numYouHave": 0,
        "modifiers": 1,
    },
    {
        "name": "Literally Cloning Dinosaurs",
        "abbrv": "DINO",
        "stockPrices": [0, 0, 0, 0, 0, 0, 0, 0, 0, -1],
        "color": [0, 102, 0],
        "fluxchance": 3,
        "fluxthreshold": -100,
        "bouncebackthreshold": 140,
        "bouncebackmargin": 20,
        "bounceback": 5,
        "margin": 10,
        "curPrice": -1,
        "element": "dinoCloning",
        "numYouHave": 0,
        "modifiers": 1,
    },
    {
        "name": "Eggulon: The New, Improved Egg",
        "abbrv": "EGG",
        "stockPrices": [0, 0, 0, 0, 0, 0, 0, 0, 0, -1],
        "color": [76, 0, 153],
        "margin": 10,
        "fluxchance": 3,
        "fluxthreshold": 150,
        "bouncebackthreshold": 20,
        "bouncebackmargin": 20,
        "bounceback": -5,
        "curPrice": -1,
        "element": "eggulon",
        "numYouHave": 0,
        "modifiers": 1,
    },
    {
        "name": "ChimpCorp (Their President Is A Literal Chimpanzee)",
        "abbrv": "CHMP",
        "stockPrices": [0, 0, 0, 0, 0, 0, 0, 0, 0, -1],
        "color": [204, 204, 0],
        "margin": 100,
        "fluxchance": 0,
        "fluxthreshold": 60,
        "bouncebackthreshold": 0,
        "bouncebackmargin": 0,
        "bounceback": 0,
        "curPrice": -1,
        "element": "chimpcorp",
        "numYouHave": 0,
        "modifiers": 1,
    },
    {
        "name": "It's Just The Moon",
        "abbrv": "MOON",
        "stockPrices": [0, 0, 0, 0, 0, 0, 0, 0, 0, -1],
        "color": [30, 144, 255],
        "margin": 10,
        "fluxchance": 0,
        "fluxthreshold": 0,
        "bouncebackthreshold": 170,
        "bouncebackmargin": 10,
        "bounceback": 5,
        "curPrice": -1,
        "element": "themoon",
        "numYouHave": 0,
        "modifiers": 1,
    },
]

let curMax = 200;
let yourMoney = 10000;
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
        var generateMin;
        var generateMax;

        if ((theStocks[j].curPrice - theStocks[j].margin) > 0) {
            generateMin = theStocks[j].curPrice - theStocks[j].margin;
        }
        else {
            generateMin = 1;
        }

        /*if (generateMin + theStocks[j].bounceback > 0 && (generateMin < theStocks[j].bouncebackthreshold - theStocks[j].bouncebackmargin)) {
            generateMin += theStocks[j].bounceback;
        }*/

        if ((theStocks[j].curPrice + theStocks[j].margin) < curMax) {
            generateMax = theStocks[j].curPrice + theStocks[j].margin;
        }
        else {
            generateMax = curMax;
        }
        /*
        if (generateMax + theStocks[j].bounceback < curMax && (generateMax < theStocks[j].bouncebackthreshold - theStocks[j].bouncebackmargin)) {
            generateMax += theStocks[j].bounceback;
        }
        */
        if (theStocks[j].bounceback > 0) {
            if ((generateMax < theStocks[j].bouncebackthreshold - theStocks[j].bouncebackmargin)) {
                generateMax += theStocks[j].bounceback;
                generateMin += theStocks[j].bounceback;
            }
            else if (generateMax > theStocks[j].bouncebackthreshold - theStocks[j].bouncebackmargin && theStocks[j].abbrv == "MOON") {
                if (theStocks[j].bouncebackthreshold == 170) {
                    theStocks[j].bouncebackthreshold = 10;
                    theStocks[j].bounceback = -5;
                }
            }
        }
        else {
            if ((generateMin > theStocks[j].bouncebackthreshold + theStocks[j].bouncebackmargin)) {
                generateMax += theStocks[j].bounceback;
                generateMin += theStocks[j].bounceback;
            }
            else if (generateMin < theStocks[j].bouncebackthreshold + theStocks[j].bouncebackmargin && theStocks[j].abbrv == "MOON") {
                if (theStocks[j].bouncebackthreshold == 10) {
                    theStocks[j].bouncebackthreshold = 170;
                    theStocks[j].bounceback = 5;
                }
            }
        }

        theStocks[j].curPrice = generateStockPrice(generateMin, generateMax, theStocks[j].fluxchance, theStocks[j].fluxthreshold, theStocks[j].modifiers);

    }


    var whereAreWe = 0;
    if (newLine == true) {
        for (var j in theStocks) {
            if (theStocks[j].name == "Old Pennyworth's Butterscotch") {
                theStocks[j].curPrice = generateStockPrice(1, 75, theStocks[j].curPrice, 40)
            }
            if (theStocks[j].name == "Literally Cloning Dinosaurs") {
                theStocks[j].curPrice = generateStockPrice(75, 150, theStocks[j].curPrice, 40)
            }
        }
        /*
        for (var key in theStocks) {
            whereAreWe = 0;
            ctx.beginPath();
            ctx.moveTo(0, 200 - theStocks[key].stockPrices[0]);
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
        */
    }
    else {
        for (var y in theStocks) {
            whereAreWe = 0;
            ctx.beginPath();
            ctx.moveTo(0, 200 - theStocks[y].stockPrices[0]);
                for (i = 0; i <= theStocks[y].stockPrices.length - 1; i++) {
                    if (i == theStocks[y].stockPrices.length - 1) {
                        theStocks[y].stockPrices[i] = theStocks[y].curPrice;
                    }
                    else {
                        theStocks[y].stockPrices[i] = theStocks[y].stockPrices[i + 1];
                    }
                    ctx.lineTo(whereAreWe + interval, 200 - theStocks[y].stockPrices[i]);
                    ctx.lineWidth = 3;
                    ctx.strokeStyle = "rgb(" + theStocks[y].color[0] + " " + theStocks[y].color[1] + " " + theStocks[y].color[2] + ")";
                    ctx.stroke();
                    whereAreWe += interval;
            }
            document.getElementById(theStocks[y].element).innerHTML = theStocks[y].name + " (" + theStocks[y].abbrv + ") " + "Price: $" + theStocks[y].stockPrices[theStocks[y].stockPrices.length - 1];

        }
    }
}


function generateStockPrice(min, max, fluxchance, fluxthreshold, modifier1=1, modifier2=1, modifier3=1, modifier4=1, modifier5=1) {
    var minCeiled;
    var maxFloored;
    minCeiled = Math.ceil(min);
    maxFloored = Math.floor(max);
    var chaoschaos = Math.floor(Math.random() * 100) + 1;
    if (chaoschaos < fluxchance) {
        if (min + fluxthreshold <= 0) {
            minCeiled = Math.ceil(1);
        }
        else if (min + fluxthreshold >= curMax) {
            minCeiled = Math.ceil(curMax - 1);
        }
        else {
            minCeiled = Math.ceil(min + fluxthreshold);
        }

        if (max + fluxthreshold <= 0) {
            maxCeiled = Math.floor(2);
        }
        else if (max + fluxthreshold >= curMax) {
            maxCeiled = Math.floor(curMax);
        }
        else {
            maxCeiled = Math.floor(max + fluxthreshold + 1);
        }
    }

    var theStockPrice = Math.floor((Math.random() * (maxFloored - minCeiled + 1) + minCeiled) * modifier1 * modifier2 * modifier3 * modifier4 * modifier5);
    /*if (compare > 0) {
        var x = 0;
        while (x < 5 || theStockPrice < compare - threshold || theStockPrice > compare + threshold) {
            theStockPrice = Math.floor((Math.random() * (maxFloored - minCeiled + 1) + minCeiled) * modifier1 * modifier2 * modifier3 * modifier4 * modifier5);
            x++;
        }
    } */
    if (theStockPrice <= 0) {
        theStockPrice = 1;
    }
    if (theStockPrice >= curMax) {
        theStockPrice = curMax;
    }

    return theStockPrice;
}
function clearCanvas() {
    const c = document.getElementById("myCanvas");
    const ctx = c.getContext("2d");
    ctx.clearRect(0, 0, c.width, c.height);
}

function buyStock(stockName) {
    for (var key in theStocks)
        if (theStocks[key].abbrv == stockName) {
            if (yourMoney >= theStocks[key].stockPrices[theStocks[key].stockPrices.length - 1]) {
                yourMoney -= theStocks[key].stockPrices[theStocks[key].stockPrices.length - 1];
                document.getElementById('yourMoney').innerHTML = "$" + yourMoney;
                theStocks[key].numYouHave += 1;
                document.getElementById(stockName + "CurStock").innerHTML = "You have: " + theStocks[key].numYouHave + " " + stockName + " stock";
            }
        }
}

function sellStock(stockName) {
    for (var key in theStocks)
        if (theStocks[key].abbrv == stockName) {
            if (theStocks[key].numYouHave > 0) {
                yourMoney += theStocks[key].stockPrices[theStocks[key].stockPrices.length - 1];
                document.getElementById('yourMoney').innerHTML = "$" + yourMoney;
                theStocks[key].numYouHave -= 1;
                document.getElementById(stockName + "CurStock").innerHTML = "You have: " + theStocks[key].numYouHave + " " + stockName + " stock";
            }
        }
}

function updateYourMoney() {
    document.getElementById('yourMoney').innerHTML = "$" + yourMoney;
}

function setModifier(stockName, cost, ending, modifier, modifierName, time) {
    for (var key in theStocks)
        if (theStocks[key].abbrv == stockName) {
            if (ending == true) {
                theStocks[key].modifiers = modifier;
                document.getElementById('framedForMurder').innerHTML = "";
                document.getElementById(stockName + 'UpButton').disabled = false;
                document.getElementById(stockName + 'DownButton').disabled = false;
            }
            else if (ending != true && cost <= yourMoney) {
                yourMoney -= cost;
                theStocks[key].modifiers *= modifier;
                document.getElementById('framedForMurder').innerHTML = stockName + " CEO committed a ghastly murder! Stock price down " + ((1.0 - modifier) * 100) + "%";
                document.getElementById(stockName + 'UpButton').disabled = true;
                document.getElementById(stockName + 'DownButton').disabled = true;
                /*
                if (modifierName == "framedForMurderModifier") {
                    document.getElementById('framedForMurder').innerHTML = stockName + " CEO committed a ghastly murder! Stock price down " + ((1.0 - modifier) * 100) + "%";
                }
                if (modifierName == "unrealisticOutlookModifier") {
                    document.getElementById('unrealisticOutlook').innerHTML = "This year " + stockName + " will make a bajillion dabloons! Stock price up " + ((modifier - 1.0) * 100) + "%";
                }*/
            }
        }

    updateYourMoney();
    if (!ending) {
        setTimeout(() => setModifier(stockName, 0, true, 1, modifierName), time);
    }
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
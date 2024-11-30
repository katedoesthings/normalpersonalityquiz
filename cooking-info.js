// JavaScript source code]
let theRecipes = [
    {
        "name": "Jello Surprise",
        "ingredients": ["plimbo", "grug", "potato", "tomato"]
    },
    {
        "name": "Gorgo",
        "ingredients": ["plimbo", "grug", "pemberton farms", "tomato"]
    },
    {
        "name": "splimpo",
        "ingredients": ["plimborrrtrrr", "grug", "pemberton farms", "tomato"]
    },
    {
        "name": "Devilish Eggs",
        "ingredients": ["plimborrrtrrr", "gaaaaaaag", "pemberton farms", "tomato"]
    }
]

function testFunction() {
    document.getElementById('ingredientslist').innerHTML = theRecipes[1].ingredients;
}

function testFunction2(theRecipeName) {
    for (var key in theRecipes) {
        if (theRecipes[key].name == theRecipeName) {
            document.getElementById('recipeBehavior').innerHTML = theRecipes[key].name;
            //document.getElementById('ingredientslist').innerHTML = theRecipes[key].ingredients;
            populateIngredients(key);
            sortAndHighlightIngredients();
            return;
        }
    }
}

function populate() {
    const newDiv = document.createElement("div");

  // and give it some content
  const newContent = document.createTextNode(theRecipes[0].name);

  // add the text node to the newly created div
  newDiv.appendChild(newContent);

  // add the newly created element and its content into the DOM
  const currentDiv = document.getElementById("column middle");
  document.body.insertBefore(newDiv, currentDiv);
}

function populateIngredients(theKey) {
    var ingredientListInternal = [];
    var holdoverIngredients = [];

    for (var key in document.getElementById('ingredientslist').children) {
        if (document.getElementById('ingredientslist').children[key].type == "checkbox" && document.getElementById('ingredientslist').children[key].checked == true) {
            holdoverIngredients.push(document.getElementById('ingredientslist').children[key].id);
        }
    }

    while (document.getElementById('ingredientslist').hasChildNodes()) {
        document.getElementById('ingredientslist').removeChild(document.getElementById('ingredientslist').firstChild);
    }

    for (var key in holdoverIngredients) {
        createCheckboxes(holdoverIngredients[key], true);
    }

    for (var ingredient in theRecipes[theKey].ingredients)
    {
        isHoldover = false;
        for (var key in holdoverIngredients) {
            if (holdoverIngredients[key] == theRecipes[theKey].ingredients[ingredient]) {
                isHoldover = true;
            }
        }
        if (!isHoldover) {
            createCheckboxes(theRecipes[theKey].ingredients[ingredient], false);
        }
        /*
        var checkbox = document.createElement('input');
        checkbox.type = "checkbox";
        checkbox.value = "false";
        checkbox.id = theRecipes[theKey].ingredients[ingredient];
        //checkbox.addEventListener("click", onCheckboxChange);

        var label = document.createElement('label')
        label.htmlFor = theRecipes[theKey].ingredients[ingredient];
        label.id = theRecipes[theKey].ingredients[ingredient] + "label";
        label.appendChild(document.createTextNode(theRecipes[theKey].ingredients[ingredient]));

        linebreak = document.createElement("br");

        document.getElementById('ingredientslist').appendChild(checkbox);
        document.getElementById('ingredientslist').appendChild(label);
        document.getElementById('ingredientslist').appendChild(linebreak);
        */
    }
    var selectAllBtn = document.createElement('button');
    selectAllBtn.innerHTML = "Select All";
    selectAllBtn.onclick = onSelectAllBtnClicked;

    var deselectAllBtn = document.createElement('button');
    deselectAllBtn.onclick = onDeselectAllBtnClicked;
    deselectAllBtn.innerHTML = "Deselect All";

    document.getElementById('ingredientslist').appendChild(selectAllBtn);
    document.getElementById('ingredientslist').appendChild(deselectAllBtn);
}

function createCheckboxes(theID, theValue) {
    var checkbox = document.createElement('input');
    checkbox.type = "checkbox";
    checkbox.id = theID;
    checkbox.addEventListener("click", onCheckboxChange);
    checkbox.checked = theValue;

    var label = document.createElement('label')
    label.htmlFor = theID;
    label.id = theID + "label";
    label.appendChild(document.createTextNode(theID));

    linebreak = document.createElement("br");

    document.getElementById('ingredientslist').appendChild(checkbox);
    document.getElementById('ingredientslist').appendChild(label);
    document.getElementById('ingredientslist').appendChild(linebreak);
}

function sortAndHighlightIngredients() {
    var holdoverIngredients = [];
    var numOfHoldoverIngredients = [];

    for (var key in document.getElementById('ingredientslist').children) {
        if (document.getElementById('ingredientslist').children[key].type == "checkbox" && document.getElementById('ingredientslist').children[key].checked == true) {
            holdoverIngredients.push(document.getElementById('ingredientslist').children[key].id);
        }
    }

    for (var recipe in theRecipes) {
        for (var theName in document.getElementById('recipeNames').children) {
            var individualNum = 0;
            for (var i in theRecipes[recipe].ingredients) {
                for (var x in holdoverIngredients)
                    if (theRecipes[recipe].ingredients[i] == holdoverIngredients[x]) {
                        individualNum++;
                    }
            }
            if (document.getElementById('recipeNames').children[theName].type == "button" && document.getElementById('recipeNames').children[theName].id == theRecipes[recipe].name) {
                numOfHoldoverIngredients.push(individualNum);

                if (individualNum != 0) {
                    document.getElementById('recipeNames').children[theName].value = document.getElementById('recipeNames').children[theName].id + " - " + individualNum;
                }
                else {
                    document.getElementById('recipeNames').children[theName].value = document.getElementById('recipeNames').children[theName].id;
                }

            }
        }
    }

    
    var list, y, switching, b, shouldSwitch;
    list = document.getElementById('recipeNames');
    switching = true;
    while (switching) {
        // start by saying: no switching is done:
        switching = false;
        b = list.getElementsByTagName("input");
        // Loop through all list-items:
        for (y= 0; y < (b.length - 1); y++) {
            // start by saying there should be no switching:
            shouldSwitch = false;
            if (b[y].value.length > b[y].id.length)
            {
                if (b[y + 1].value.length > b[y + 1].id.length) {
                    if (Number(b[y].value.substring(b[y].id.length + 2)) < Number(b[y + 1].value.substring(b[y + 1].id.length + 2))) {
                        shouldSwitch = true;
                        break;
                    }
                }
                /*else {
                    shouldSwitch = true;
                    break;
                }
                */
            }
        }
        if (shouldSwitch) {
            b[y].parentNode.insertBefore(b[y + 1], b[y]);
            //numOfHoldoverIngredients.insertBefore(numOfHoldoverIngredients[y + 1], numOfHoldoverIngredients[y])
            switching = true;
        }
    }
    
}

function onSelectAllBtnClicked() {
    for (var key in document.getElementById('ingredientslist').children) {
        if (document.getElementById('ingredientslist').children[key].type == "checkbox") {
            document.getElementById('ingredientslist').children[key].checked = true;
        }
    }
    sortAndHighlightIngredients();
}

function onDeselectAllBtnClicked() {
    for (var key in document.getElementById('ingredientslist').children) {
        if (document.getElementById('ingredientslist').children[key].type == "checkbox") {
            document.getElementById('ingredientslist').children[key].checked = false;
        }
    }
    sortAndHighlightIngredients();
}

function onCheckboxChange() {
    sortAndHighlightIngredients();
}
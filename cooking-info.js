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

var curRecipeKey = 0;

function testFunction() {
    document.getElementById('ingredientslist').innerHTML = theRecipes[1].ingredients;
}

function testFunction2(theRecipeName) {
    for (var key in document.getElementById("recipeNames").children) {
        if (theRecipeName == document.getElementById("recipeNames").children[key].id) {
            //document.getElementById("recipeNames").children[key].classList.add("itme");
        }
    }


    for (var key in theRecipes) {
        if (theRecipes[key].name == theRecipeName) {
            document.getElementById('recipeHeader').innerHTML = theRecipes[key].name;
            curRecipeKey = key;
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

    for (var key in document.getElementById('groceryList').children) {
        if (document.getElementById('groceryList').children[key].type == "checkbox") {
            holdoverIngredients.push(document.getElementById('groceryList').children[key].id);
        }
    }

    while (document.getElementById('ingredientslist').hasChildNodes()) {
        document.getElementById('ingredientslist').removeChild(document.getElementById('ingredientslist').firstChild);
    }

    for (var ingredient in theRecipes[theKey].ingredients)
    {
        createCheckboxes(theRecipes[theKey].ingredients[ingredient], false, 'ingredientslist');
        isHoldover = false;
        for (var key in holdoverIngredients) {
            if (holdoverIngredients[key] == theRecipes[theKey].ingredients[ingredient]) {
                isHoldover = true;
                document.getElementById(theRecipes[theKey].ingredients[ingredient] + 'label').style.color = "green";
            }
        }
    }
    var selectAllBtn = document.createElement('button');
    selectAllBtn.innerHTML = "Select All";
    selectAllBtn.onclick = onSelectAllBtnClicked;

    var deselectAllBtn = document.createElement('button');
    deselectAllBtn.onclick = onDeselectAllBtnClicked;
    deselectAllBtn.innerHTML = "Deselect All";

    var addToListBtn = document.createElement('button');
    addToListBtn.onclick = onAddToListBtnClicked;
    addToListBtn.innerHTML = "Add to Grocery List";

    document.getElementById('ingredientslist').appendChild(selectAllBtn);
    document.getElementById('ingredientslist').appendChild(deselectAllBtn);
    document.getElementById('ingredientslist').appendChild(addToListBtn);
}

function createCheckboxes(theID, theValue, theOverallID) {
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

    document.getElementById(theOverallID).appendChild(checkbox);
    document.getElementById(theOverallID).appendChild(label);
    document.getElementById(theOverallID).appendChild(linebreak);
}

function removeSelectedItems(theID) {
    var holdoverIngredients = [];

    for (var key in document.getElementById(theID).children) {
        if (document.getElementById(theID).children[key].type == "checkbox" && document.getElementById(theID).children[key].checked != true) {
            holdoverIngredients.push(document.getElementById(theID).children[key].id);
        }
    }

    while (document.getElementById(theID).hasChildNodes()) {
        document.getElementById(theID).removeChild(document.getElementById(theID).firstChild);
    }

    for (var key in holdoverIngredients) {
        createCheckboxes(holdoverIngredients[key], false, theID);
    }

    populateIngredients(curRecipeKey);
    
}

function sortAndHighlightIngredients() {
    var holdoverIngredients = [];
    var numOfHoldoverIngredients = [];

    //removeNonSelectedItems("groceryList");

    for (var key in document.getElementById('groceryList').children) {
        if (document.getElementById('groceryList').children[key].type == "checkbox") {
            holdoverIngredients.push(document.getElementById('groceryList').children[key].id);
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

function onAddToListBtnClicked() {
    var thereAreButtons = false;
    var theresGroceries = false;

    for (var key in document.getElementById('ingredientslist').children) {
        isHoldover = false;
        if (document.getElementById('ingredientslist').children[key].type == "checkbox" && document.getElementById('ingredientslist').children[key].checked) {
            for (var i in document.getElementById('groceryList').children) {
                if (document.getElementById('groceryList').children[i].type == "checkbox") {
                    if (document.getElementById('groceryList').children[i].id == document.getElementById('ingredientslist').children[key].id) {
                        isHoldover = true;
                    }
                }
            }
            if (document.getElementById('ingredientslist').children[key].checked == true && !isHoldover) {
                createCheckboxes(document.getElementById('ingredientslist').children[key].id, false, 'groceryList');
            }
            theresGroceries = true;
        }
    }

    for (var key in document.getElementById('groceryListOverall').children) {
        if (document.getElementById('groceryListOverall').children[key].id == "removeButton" && document.getElementById('groceryListOverall').children[key].id == "selectAllGroceriesButton" && 
            document.getElementById('groceryListOverall').children[key].id == "deselectAllGroceriesButton") {
            thereAreButtons = true;
        }
    }

    if (!thereAreButtons && theresGroceries){
        var removeButton = document.createElement('button');
        removeButton.onclick = onRemoveFromListBtnClicked;
        removeButton.innerHTML = "Remove From Grocery List";
        removeButton.id = "removeButton";

        var selectButton = document.createElement('button');
        selectButton.onclick = onSelectAllBtnClickedGroceries;
        selectButton.innerHTML = "Select All";
        selectButton.id = "selectAllGroceriesButton";

        var deselectButton = document.createElement('button');
        deselectButton.onclick = onDeselectAllBtnClickedGroceries;
        deselectButton.innerHTML = "Deselect All";
        deselectButton.id = "deselectAllGroceriesButton";

        document.getElementById('groceryListOverall').appendChild(selectButton);
        document.getElementById('groceryListOverall').appendChild(deselectButton);
        document.getElementById('groceryListOverall').appendChild(removeButton);
    }

    sortAndHighlightIngredients();
    populateIngredients(curRecipeKey);
}

function onRemoveFromListBtnClicked() {
    removeSelectedItems("groceryList");
    var howManyItems = 0;
    for (var i in document.getElementById('groceryList').children) {
        if (document.getElementById('groceryList').children[i].type == "checkbox") {
            howManyItems++;
        }
    }
    if (howManyItems == 0) {
        var removeThisButton = document.getElementById("removeButton");
        document.getElementById('groceryListOverall').removeChild(removeThisButton);
        removeThisButton = document.getElementById("selectAllGroceriesButton");
        document.getElementById('groceryListOverall').removeChild(removeThisButton);
        removeThisButton = document.getElementById("deselectAllGroceriesButton");
        document.getElementById('groceryListOverall').removeChild(removeThisButton);
    }
    sortAndHighlightIngredients();
}

function onSelectAllBtnClicked() {
    selectAll('ingredientslist');
}

function onSelectAllBtnClickedGroceries(theID) {
    selectAll('groceryList');
}

function selectAll(theID) {
    for (var key in document.getElementById(theID).children) {
        if (document.getElementById(theID).children[key].type == "checkbox") {
            document.getElementById(theID).children[key].checked = true;
        }
    }
    sortAndHighlightIngredients();
}

function deselectAll(theID) {
    for (var key in document.getElementById(theID).children) {
        if (document.getElementById(theID).children[key].type == "checkbox") {
            document.getElementById(theID).children[key].checked = false;
        }
    }
    sortAndHighlightIngredients();
}

function onDeselectAllBtnClicked() {
    deselectAll('ingredientslist');
}

function onDeselectAllBtnClickedGroceries() {
    deselectAll('groceryList');
}

function onCheckboxChange() {
    //sortAndHighlightIngredients();
}
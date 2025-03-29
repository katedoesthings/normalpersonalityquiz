// JavaScript source code]
let theRecipes = [
    {
        "name": "Southwestern Scramble",
        "ingredients": ["Ground Chicken", "Kale", "Lemon Juice", "Soy Sauce", "Salt", "Frozen Corn", "Smoked Paprika", "Adobo", "Onion Powder", "Garlic Powder", "Red Bell Pepper", "Gold Potato", "Tomatillo Salsa"],
        "numIngredients": [1, 1, 2, 2, null, 1, null, null, null, null, 2, 3, 1],
        "units": ["lb", "large bag", "tbsp", "tbsp", null, "large bag", null, null, null, null, null, "medium", "jar"],
        "recipe": "1. Preheat the oven to 425F and slice the bell pepper into medium strips (about half the width of your finger). Place the bell pepper on a baking sheet lined with parchment paper or tinfoil and drizzle heavily with olive oil. Season with the adobo, onion powder, garlic powder, and smoked paprika and bake until tender, about 15 mins. <br><br>" +
            "2. Prepare the frozen corn by adding it to a pan with a neutral oil and seasoning it with adobo, onion powder, garlic powder, and smoked paprika. Stir frequently once the corn is defrosted to prevent burning, and cook until the corn shows signs of crispiness.<br><br>" +
            "3. Prepare the potato by dicing it and addint it to a pan with a neutral oil and seasoning it with adobo, onion powder, garlic powder, and smoked paprika. Stir infrequently, enough to let them crisp up on the pan but not so infrequently that it burns. Cook until the edges are browned and a bit crispy.<br><br>" +
            "4. Prepare the ground chicken by adding it to a pan with a neutral oil and seasoning it with adobo, onion powder, garlic powder, and smoked paprika. Fry on medium until cooked through.<br><br>" +
            "5. Prepare the kale by removing the stems of the kale and adding the leaves to a bowl. Once de-stemmed, add lemon juice, salt, and soy sauce. Combine until the kale is coated.<br><br>" +
            "6. Assemble your bowl by adding corn, potato, ground chicken, and kale, and topping with tomatillo salsa. Store ingredients separately."
    },
    {
        "name": "Thai-Inspired Noodle Bowl",
        "ingredients": ["Ground Beef", "Red Onion", "Red Cabbage", "Peanuts", "Shredded Carrots", "Mango", "Cilantro", "Bean Sprouts", "Rice Noodles", "Soy Sauce", "Garlic", "Onion Powder"],
        "numIngredients": [1, 1, .5, .5, 1, 1, null, 1, null, null, null, null],
        "units": ["lb", null, "head", "cup", "bag", null, null, "bag", null, null, null, null, null],
        "recipe": "1. Prepare the ground beef by adding it to a pan and seasoning it with soy sauce, garlic, and onion powder. Stir infrequently, enough to let it crisp up on the pan but not so infrequently that it burns. Fry on medium until cooked through.<br><br>" +
            "2. Prepare the rice noodles according to their packaging. <br><br>" +
            "3. Dice the red onion, mango, and cabbage. The red onion should be a small dice, the mango should be a medium dice, and the cabbage should be a large dice. Crush the peanuts and chop the cilantro, including the stems. <br><br>" +
            "4. Assemble the bowl by adding noodles, red onion, red cabbage, shredded carrots, mango, and bean sprouts, topping with cilantro and crushed peanuts. Store ingredients separately.<br><br>" +
            "Serve with preferred dressing. I highly recommend the peanut sauce also found on this recipe list."
    },
    {
        "name": "Thai Peanut Sauce",
        "ingredients": ["Peanut Butter", "Soy Sauce", "Rice Vinegar", "Brown Sugar", "Chili Garlic Sauce", "Lime Juice", "Garlic", "Ginger", "Water"],
        "numIngredients": [.5, 2, 1, 2, 2, 1, 3, 1, 4],
        "units": ["cup", "tbsp", "tbsp", "tbsp", "tsp", "tbsp", "cloves", "tbsp", "tbsp"],
        "recipe": "From Fox and Briar <br><br>" +
            "1. Combine all ingredients except water and stir. <br><br>" +
            "2. Add water, 1 tablespoon at a time, until desired consistency is reached. <br><br>" +
            "Note: The chili garlic sauce referred to in the ingredients list is called that verbatim in the grocery store. It's in a little jar in the Asian food aisle. " +
            "Also, it's best if you can use fresh ginger or garlic, but it's also fine to substitute ginger or garlic powder. The flavor just won't be as strong."
    },
    {
        "name": "Potato Soup",
        "ingredients": ["White Onion", "Salt", "Garlic", "Wine Vinegar", "Vegetable Broth", "Gold Potato", "Cooked White Beans", "Dijon Mustard", "Lemon Juice", "Smoked Paprika", "Black Pepper", "Ground Chicken", "Garlic Powder", "Onion Powder"],
        "numIngredients": [1, null, 7, 1, 4, 5, 1.5, 1, 1, 1, null, 1],
        "units": [null, null, "cloves", "tbsp", "cup", "medium", "cup", "tbsp", "tbsp", "tsp", null, "lb"],
        "recipe": "Largely from Love and Lemons <br><br>" + 
            "1. Roughly dice the onion. Saute the onion with a neutral oil and some salt and pepper until soft. <br><br>" +
            "2. Roughly chop the garlic and add to the onion. Saute it for about 2 more minutes until garlic is fragrant, stirring frequently. <br><br>" +
            "3. Add wine vinegar (red or white is fine), broth, potatoes, and white beans. Bring to a boil, then reduce the heat and simmer for 30 minutes or until potatoes are soft, whichever happens last. <br><br>" +
            "4. While the soup is cooking, cook the ground chicken in a separate pan with a neutral oil, garlic powder, salt, pepper, and onion powder. When finished, set aside. <br><br>" +
            "5. Add mustard, lemon juice, and paprika. Blend in a blender or with an immersion blender. If you want to be really fancy you can blend half of it and mash the chunks in the other half, then recombine depending on your texture preference.<br><br>" +
            "6. Season to taste with salt and pepper. Top with your desired amount of the ground chicken for protein, and store soup and ground chicken separately. I recommend enjoying it with a nice crusty bread as well!"
    },
    {
        "name": "Cilantro Lime Crema",
        "ingredients": ["Sour Cream", "Mayo", "Lime Juice", "Garlic", "Salt", "Onion Powder", "Cilantro"],
        "numIngredients": [1, 2, 1, 1, 1, .5, 1],
        "units": ["cup", "tbsp", "tbsp", "clove", "tsp", "tsp", "cup"],
        "recipe": "From Love and Lemons. You can also substitute with dairy free sour cream or yogurt if you're like me and can't do the dairy thing. <br><br>" +
        "1. Combine that jazz in a food processor until creamy! Easy peasy. Sauce should be smooth but green flecks of cilantro should still be visible."
    },
    {
        "name": "Mango Mambo Turkey Sandwich",
        "ingredients": ["Sourdough", "Turkey", "Tomato", "Arugula", "Sharp Cheddar", "Honey Mustard", "Mango Chutney", "Butter"],
        "numIngredients": [null, null, 1, 1, null, null, null, null],
        "units": [null, "Deli", null, "Block", null, null, null, null],
        "recipe": "Honey mustard should be the zestiest you can find. Mango chutney can also be replaced with some kind of mango or peach jam if the people at the grocery store look at you weird when you ask where the chutney is. Which has definitely never happened to me once. <br><br>" +
            "1. Slice the tomato and sharp cheddar cheese. <br><br>" +
            "2. Assemble one half of the sandwich with the following, in this order: Turkey, Cheddar, Arugula, Tomato. <br><br>" +
            "3. Slather the other half with mango chutney and honey mustard in a 1:1 ratio. <br><br>" +
            "4. Heat a pan and grease it with butter. Place the sandwich in the pan. When one side is crispy, take the sandwich off of the pan, re-grease the pan with more butter, then return the sandwich to the pan, crispy side up. <br><br>" +
            "5. Once both sides are crispy to your liking, remove from heat and enjoy! <br><br>" +
            "Also, you don't need to use butter, but that's my preferred grease for making sandwiches crispy."
    },
    {
        "name": "",
        "ingredients": [],
        "numIngredients": [],
        "units": [],
        "recipe": ""
    },
    {
        "name": "Devilish Eggs",
        "ingredients": ["plimborrrtrrr", "gaaaaaaag", "pemberton farms", "tomato"],
        "numIngredients": [1, null, 2, 3, 1, 6, 9, 2],
        "units": [],
        "recipe": "Fuckin I dunno, recommend serve with thai peanut sauce"
    }
]

var curRecipeKey = 0;

function testFunction() {
    document.getElementById('ingredientslist').innerHTML = theRecipes[1].ingredients;
}

function selectRecipe(theRecipeName) {
    for (var key in document.getElementById("recipeNames").children) {
        if (theRecipeName == document.getElementById("recipeNames").children[key].id) {
            //document.getElementById("recipeNames").children[key].classList.add("itme");
        }
    }


    for (var key in theRecipes) {
        if (theRecipes[key].name == theRecipeName) {
            document.getElementById('recipeHeader').innerHTML = theRecipes[key].name;
            document.getElementById('recipeBehavior').innerHTML = theRecipes[key].recipe;
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
        createCheckboxes(theRecipes[theKey].ingredients[ingredient], theRecipes[theKey].numIngredients[ingredient], false, 'ingredientslist', theRecipes[theKey].units[ingredient]);
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

function createCheckboxes(theID, theNum, theValue, theOverallID, theUnit) {
    var checkbox = document.createElement('input');
    checkbox.type = "checkbox";
    checkbox.id = theID;
    checkbox.addEventListener("click", onCheckboxChange);
    checkbox.checked = theValue;

    var label = document.createElement('label')
    label.htmlFor = theID;
    label.id = theID + "label";
    if (theUnit != null) {
        label.appendChild(document.createTextNode(" " + theUnit + " " + theID));
    }
    else {
        label.appendChild(document.createTextNode(" " + theID));
    }

    if (theOverallID == "groceryList") {

        var numberOfIngredient = document.createElement('input');
        numberOfIngredient.type = "number";
        numberOfIngredient.min = 0;
        if (theNum > 0) {
            numberOfIngredient.value = theNum;
        }
        else {
            numberOfIngredient.value = 1;
        }
        numberOfIngredient.id = theID + 'number';
    }

    else if (theOverallID == "ingredientslist") {
        var numberOfIngredient = document.createElement('label');
        if (theNum != null) {
            numberOfIngredient.innerHTML = theNum;
        }
        numberOfIngredient.id = theID + 'number';
    }

    linebreak = document.createElement("br");

    document.getElementById(theOverallID).appendChild(checkbox);
    document.getElementById(theOverallID).appendChild(numberOfIngredient);
    document.getElementById(theOverallID).appendChild(label);
    document.getElementById(theOverallID).appendChild(linebreak);
}

function removeSelectedItems(theID) {
    var holdoverIngredients = [];
    var holdoverIngredientsNum = [];

    for (var key in document.getElementById(theID).children) {
        if (document.getElementById(theID).children[key].type == "checkbox" && document.getElementById(theID).children[key].checked != true) {
            holdoverIngredients.push(document.getElementById(theID).children[key].id);
            holdoverIngredientsNum.push(document.getElementById(document.getElementById(theID).children[key].id + 'number').value);
        }
    }

    while (document.getElementById(theID).hasChildNodes()) {
        document.getElementById(theID).removeChild(document.getElementById(theID).firstChild);
    }

    for (var key in holdoverIngredients) {
        createCheckboxes(holdoverIngredients[key], holdoverIngredientsNum[key], false, theID, null);
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
                theresGroceries = true;
            }
            if (document.getElementById('ingredientslist').children[key].checked == true && !isHoldover) {
                createCheckboxes(document.getElementById('ingredientslist').children[key].id, Number(document.getElementById(document.getElementById('ingredientslist').children[key].id + "number").innerHTML), false, 'groceryList', null);
            }
        }
    }

    for (var key in document.getElementById('groceryListOverall').children) {
        if (document.getElementById('groceryListOverall').children[key].id == "removeButton" || document.getElementById('groceryListOverall').children[key].id == "selectAllGroceriesButton" || 
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
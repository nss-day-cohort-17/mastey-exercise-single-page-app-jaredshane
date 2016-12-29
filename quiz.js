var carData;
var inventory;
var insertData = document.getElementById('insertData')
var inventoryList = "";
loadInventory();
var targetCard;
// console.log(targetCard)
var carCard;
var inputField;
var description;
var button;


function populatePage (inventory) {
  // Loop over the inventory and populate the page
  for (var i = 0; i < carData.cars.length; i++) {
    inventoryList = `
                      <div class="carCard col-xs-4">
                        <div>Make: ${carData.cars[i].make}</div>
                        <div>Model: ${carData.cars[i].model}</div>
                        <div>Year: ${carData.cars[i].year}</div>
                        <div>Price: ${carData.cars[i].price}</div>
                        <div class="description">Description: ${carData.cars[i].description}</div>
                      </div>
                      `
    insertData.innerHTML += inventoryList;


      }

  // Now that the DOM is loaded, establish all the event listeners needed
  activateEvents();
}

// Load the inventory and send a callback function to be
// invoked after the process is complete

function loadInventory (callback) {
  var inventoryLoader = new XMLHttpRequest();
  inventoryLoader.open("GET", "inventory.json");
  inventoryLoader.send();

  inventoryLoader.addEventListener("load", function (e) {
    carData = JSON.parse(e.target.responseText);
    populatePage(carData);
  });


}

function activateEvents() {
  // targetCard = document.getElementById('insertData').getElementsByClassName('carCard')

  carCard = document.getElementsByClassName('carCard')
  inputField = document.getElementById('inputField')
  description = document.getElementsByClassName('description')
  button = document.getElementById('btn')
  var target;

  for (var i = 0; i < carCard.length; i++) {
    carCard[i].addEventListener('click', function (e) {
        target = e.target;
        removeClass();
        addClass(e.target, "green")


      document.getElementById("inputField").focus()

      // console.dir(e.target)

      inputField.value = "";
    })

    inputField.addEventListener('keyup', function(e) {
        if (target.classList.contains('green')) {
          target.children[4].innerHTML = "Description: " + inputField.value
          // console.log(inputField.value)
        }

    })

    }

  }

  function addClass (element, color) {
    if (element.parentNode.classList.contains("carCard")) {
      // console.log(element.parentNode)
      element.parentNode.classList.add(color);
    } else if (element.classList.contains("carCard")) {
      // console.log(element.classList.contains(color));
      element.classList.add(color)
    }
  }

function removeClass () {
   for (var i = 0; i < carCard.length; i++) {
     carCard[i].classList.remove("green")
  }
}

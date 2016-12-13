var carData;
var inventory;
var insertData = document.getElementById('insertData')
var inventoryList = "";
loadInventory();
var targetCard;
console.log(targetCard)


function populatePage (inventory) {
  // Loop over the inventory and populate the page
  for (var i = 0; i < carData.cars.length; i++) {
    inventoryList = `
                      <div class = "carCard col-xs-4">
                        <div>Make: ${carData.cars[i].make}</div>
                        <div>Model: ${carData.cars[i].model}</div>
                        <div>Year: ${carData.cars[i].year}</div>
                        <div>Year: ${carData.cars[i].price}</div>
                        <div>Year: ${carData.cars[i].description}</div>
                      </div>
                      `
    insertData.innerHTML += inventoryList;


      }
    targetCard = document.getElementById('insertData').getElementsByClassName('carCard')

    for (var i = 0; i < targetCard.length; i++) {
      console.log(targetCard[i])
      targetCard[i].addEventListener('click', function (e) { console.dir(e.target.parentElement)
        if (e.target.parentElement = ) {
          console.log('hello')

        }
      })
    }
  // Now that the DOM is loaded, establish all the event listeners needed
  // activateEvents();
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

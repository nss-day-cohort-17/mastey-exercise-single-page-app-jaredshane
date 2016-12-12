var inventory;
var data;
var insertData = document.getElementById('insertData')
loadInventory();

function populatePage (inventory) {
  // Loop over the inventory and populate the page

  // Now that the DOM is loaded, establish all the event listeners needed
  activateEvents();
}

// Load the inventory and send a callback function to be
// invoked after the process is complete

function loadInventory (callback) {
  var inventoryLoader = new XMLHttpRequest();
  var inventoryList = "";
  inventoryLoader.addEventListener("load", function (e) {
    data = JSON.parse(e.target.responseText);
    console.log(data);
    for (var i = 0; i < data.cars.length; i++) {
      inventoryList = `<div class="col-xs-4 carCard">
                          <div>Make: ${data.cars[i].make}</div>
                          <div>Model: ${data.cars[i].model}</div>
                          <div>Year: ${data.cars[i].year}</div>
                          <div>Year: ${data.cars[i].price}</div>
                          <div>Year: ${data.cars[i].description}</div>
                        </div>`
      insertData.innerHTML += inventoryList;

    }

  });
  inventoryLoader.open("GET", "inventory.json")
  inventoryLoader.send()
}

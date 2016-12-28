var carData;
var inventory;
var insertData = document.getElementById('insertData')
var inventoryList = "";
loadInventory();
var targetCard;
console.log(targetCard)
var carCard;


function populatePage (inventory) {
  // Loop over the inventory and populate the page
  for (var i = 0; i < carData.cars.length; i++) {
    inventoryList = `
                      <div class = "carCard col-xs-4">
                        <div>Make: ${carData.cars[i].make}</div>
                        <div>Model: ${carData.cars[i].model}</div>
                        <div>Year: ${carData.cars[i].year}</div>
                        <div>Price: ${carData.cars[i].price}</div>
                        <div>Description: ${carData.cars[i].description}</div>
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
  targetCard = document.getElementById('insertData').getElementsByClassName('carCard')

  carCard = document.getElementsByClassName('carCard')

  for (var i = 0; i < carCard.length; i++) {
    // console.log(targetCard[i])
    carCard[i].addEventListener('click', function (e) {
      for (var i = 0; i < carCard.length; i++) {

      //   console.dir(e.target.parentElement)
      //  console.log(e)
         if (e.target.parentNode === carCard[i]) {
           carCard[i].classList.add("onClickEvent");
         } else if (e.target === carCard[i]) {
           carCard[i].classList.add("onClickEvent")
         } else if (e.target.parentNode != carCard[i]) {
           carCard[i].classList.remove("onClickEvent");
         }
      }
      document.getElementById("inputField").focus()

    })

  }
}

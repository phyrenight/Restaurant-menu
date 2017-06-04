var foodItems = [{
	name: "food1",
	price: "20.00",
	image: "images/pasta.jpg",
	description: "Morbi quis leo mattis, dignissim orci at, elementum libero. Sed sed semper tellus, et blandit sapien." 
},{
	name: "food2",
    price: "9.99",
    image: "images/pasta.jpg",
    description: "Nunc ac mollis tortor. Phasellus rhoncus auctor eros quis interdum. Nam urna odio, faucibus nec luctus nec, pellentesque sit amet erat"
},{
	name: "food3",
	price: "10.49",
	image: "images/pasta.jpg",
	description: "Proin ac nisi malesuada orci rhoncus laoreet. Nam in ornare tortor."
},{
	name: "food4",
	price: "12.59",
	image: "images/pasta.jpg",
	description: "Morbi quis leo mattis, dignissim orci at, elementum libero. Sed sed semper tellus, et blandit sapien."
},{
	name: "food5",
	price: "5.99",
	image: "images/pasta.jpg",
	descripption: "Proin ac nisi malesuada orci rhoncus laoreet. Nam in ornare tortor."
}, {
	name: "food6",
	price: "8.00",
	image: "images/pasta.jpg",
	description: "Nunc ac mollis tortor. Phasellus rhoncus auctor eros quis interdum. Nam urna odio, faucibus nec luctus nec, pellentesque sit amet erat."
}, {
	name: "food7",
	price: "9.00",
	image: "images/pasta.jpg",
	description:"Morbi quis leo mattis, dignissim orci at, elementum libero. Sed sed semper tellus, et blandit sapien."
}]

var foodOrder = [];

var foodIdNumber;

var food1 = document.getElementById("food1");
var food2 = document.getElementById("food2");
var food3 = document.getElementById("food3");
var food4 = document.getElementById("food4");
var food5 = document.getElementById("food5");
var food6 = document.getElementById("food6");
var food7 = document.getElementById("food7");
var foodModal = document.getElementById("foodModal-container");
var cartButton = document.getElementById("cartButton");
var cartModal = document.getElementById("cartModal-container");
var foodClose = document.getElementsByClassName("close")[0];
var cartClose = document.getElementsByClassName("close")[1];
var addItemButton = document.getElementById("addItem");

food1.onclick = openFoodModal;
food2.onclick = openFoodModal;
food3.onclick = openFoodModal;
food4.onclick = openFoodModal;
food5.onclick = openFoodModal;
food6.onclick = openFoodModal;
food7.onclick = openFoodModal;
cartButton.onclick = openCart;
foodClose.onclick = closeFoodModal;
cartClose.onclick = closeCartModal;
addItemButton.onclick = addItemToOrder;

function openFoodModal(){
  foodIdNumber = this.id.slice(-1);
  foodModal.style.display = "block";
  var foodImage = document.getElementById("foodImage");
  var foodDescription = document.getElementById("foodDescription");
  var foodPrice = document.getElementById("foodPrice");
  var foodName = document.getElementById("foodName");
  foodImage.src = foodItems[foodIdNumber-1]["image"];
  foodName.innerHTML = foodItems[foodIdNumber-1]["name"];
  foodPrice.innerHTML = foodItems[foodIdNumber-1]["price"];
  foodDescription.innerHTML = foodItems[foodIdNumber-1]["description"];
}

function openCart(){
  cartModal.style.display = "block";
  var i = 0;
  var total = 0.00;
  console.log("hello")
  var foodOrderLength = foodOrder.length;
  if(foodOrderLength > 0){
	while(i < foodOrderLength){
		var itemcontainer = document.createElement("DIV")
		var itemName = document.createElement("SPAN");
		var itemPrice = document.createElement("SPAN");
		var priceNode = document.createTextNode(foodOrder[i]["price"]);
		var nameNode = document.createTextNode(foodOrder[i]["name"])
	    var cartItems = document.getElementById("cartItems");
	    total += parseFloat(foodOrder[i]["price"]);
	    var cartTotal = document.getElementById("cartTotal");
	    var totalNode = document.createTextNode(total);
	    itemName.appendChild(nameNode);
	    itemPrice.appendChild(priceNode);
	    itemcontainer.appendChild(itemName);
	    itemcontainer.appendChild(itemPrice);
	    cartItems.appendChild(itemcontainer);
	    cartTotal.innerHTML = total;
		i++;
	}
  }
}

function closeFoodModal(){
	foodModal.style.display = "none";
}

function closeCartModal(){
	cartModal.style.display = "none";
}

window.onclick = function(event) {
	if(event.target == foodModal){
		foodModal.style.display = "none";
	}
	else if(event.target == cartModal){
		cartModal.style.display = "none";
	}
}

function addItemToOrder(){
    console.log("ooooooo")
    foodModal.style.display = "none";
    var newItem = {name: foodItems[foodIdNumber-1]["name"],
    price: foodItems[foodIdNumber-1]["price"]};

    foodOrder.push(newItem);
    console.log("LLLLL")
}

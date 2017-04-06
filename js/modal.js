var foodItems = [{
	name: "food1",
	price: "20.00",
	image: "",
	description: "" 
},{
	name: "food2",
    price: "9.99",
    image: "",
    description: ""
},{
	name: "food3",
	price: "10.49",
	image: "",
	description: ""
},{
	name: "food4",
	price: "12.59",
	image: "",
	description: ""
},{
	name: "food5",
	price: "5.99",
	image: "",
	descripption: ""
}, {
	name: "food6",
	price: "8.00",
	image: "",
	description: ""
}, {
	name: "food7",
	price: "9.00",
	image: "",
	description:""
}]


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

console.log(cartClose)
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

function openFoodModal(){
  var num = this.id.slice(-1);
  foodModal.style.display = "block";
  var foodImage = document.getElementById("foodImage");
  var foodDescription = document.getElementById("foodDescription");
  var foodPrice = document.getElementById("foodPrice");
  var foodName = document.getElementById("foodName");
  foodImage.innerHTML = foodItems[num-1]["image"];
  foodName.innerHTML = foodItems[num-1]["name"];
  foodPrice.innerHTML = foodItems[num-1]["price"];
  foodDescription.innerHTML = foodItems[num-1]["description"];
}

function openCart(){
	cartModal.style.display = "block";
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

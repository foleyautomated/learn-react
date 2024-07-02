React is a lib for web and native interfaces.
Its a javascript lib; Netflix uses React
Does a ton of stuff on the webpage to keep it smooooooth.
 
 Jetbrains 6 month free-pass: ACADEMIND_JETBRAINS
 
 React Projects use a Build Process.
 
 //24. Destructuring
 
 really useful syntax to avoid pulling values out of an array by index:
 
 # Destructuring Arrays:
 const [firstName, lastName] = ["David", "Foley"]
 
 # Destructuring Objects (No Alias)
 cosnt {
	userName, 
	age
	} = {
		name: "David",
		age: 34
		};
 
 # Destructuring Objects (With Alias)
  cosnt {user: userName, yearsAlive: age} = {
	name: "David",
	age: 34
 };
 
 # Destructuring object params in functions:
*Instead of this*
 function storeOrder(order) {
	let itemNameDisplayText = "Item" + order.itemName;
	let itemCostDisplayText = "$" + order.itemCost;
 }
 *Do this to avoid using dot syntax*
 function storeOrder({itemName, itemCost}) {
	let itemNameDisplayText = "Item" + itemName;
	let itemCostDisplayText = "$" + itemCost;
 }
 
 # The Spread Operator
 const hobbies = ["Operating Heavy Machinery", "Driving", "Scuba Diving"]
 const AdditionalHobbies = ["Drinking Heavily", "Staying Up Late"]
 
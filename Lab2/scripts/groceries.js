	// Array of products, each product is an object with different fieldset
	// A set of ingredients should be added to products		 

	var products = [
	    {
	        name: "Brocoli",
	        vegetarian: true,
	        glutenFree: true,
	        price: 1.99,
	        organic: true
	},
	    {
	        name: "Bread",
	        vegetarian: true,
	        glutenFree: false,
	        price: 2.35,
	        organic: false
	},
	    {
	        name: "Salmon",
	        vegetarian: false,
	        glutenFree: true,
	        price: 10.00,
	        organic: true
	},
	    {
	        name: "Milk",
	        vegetarian: true,
	        glutenFree: true,
	        price: 2.99,
	        organic: false
    },
	    {
	        name: "Apple",
	        vegetarian: true,
	        glutenFree: true,
	        price: 0.45,
	        organic: true
    },
	    {
	        name: "Orange",
	        vegetarian: true,
	        glutenFree: true,
	        price: 0.60,
	        organic: true
    },
	    {
	        name: "Chicken",
	        vegetarian: false,
	        glutenFree: true,
	        price: 11.36,
	        organic: true
    },
	    {
	        name: "Zucchini",
	        vegetarian: true,
	        glutenFree: true,
	        price: 0.75,
	        organic: true
    },
	    {
	        name: "Muffin",
	        vegetarian: true,
	        glutenFree: false,
	        price: 1.20,
	        organic: false
    },
	    {
	        name: "Coffee",
	        vegetarian: true,
	        glutenFree: true,
	        price: 2.45,
	        organic: false
    }

];



	// given restrictions provided, make a reduced list of products
	// prices should be included in this list, as well as a sort based on price

	function restrictListProducts(prods, restriction, orgChoice) {
	    let products = [];
	    for (let i = 0; i < prods.length; i += 1) {
	        if (orgChoice == "No Preference") {
	            if ((restriction == "Vegetarian") && (prods[i].vegetarian == true)) {
	                products.push(prods[i]);
	            } else if ((restriction == "GlutenFree") && (prods[i].glutenFree == true)) {
	                products.push(prods[i]);
	            } else if ((restriction == "Vegetarian & GlutenFree") && (prods[i].vegetarian == true) && (prods[i].glutenFree == true)) {
	                products.push(prods[i]);
	            } else if (restriction == "None") {
	                products.push(prods[i]);
	            }
	        } else if (orgChoice == "Organic") {
	            if ((restriction == "Vegetarian") && (prods[i].vegetarian == true) && (prods[i].organic == true)) {
	                products.push(prods[i]);
	            } else if ((restriction == "GlutenFree") && (prods[i].glutenFree == true) && (prods[i].organic == true)) {
	                products.push(prods[i]);
	            } else if ((restriction == "Vegetarian & GlutenFree") && (prods[i].vegetarian == true) && (prods[i].glutenFree == true) && (prods[i].organic == true)) {
	                products.push(prods[i]);
	            } else if ((restriction == "None") && (prods[i].organic == true)) {
	                products.push(prods[i]);
	            }

	        }
	    }
        for (i = 0; i < prods.length)
        
	    return products;
	}

	// Calculate the total price of items, with received parameter being a list of products
	function getTotalPrice(chosenProducts) {
	    totalPrice = 0;
	    for (let i = 0; i < products.length; i += 1) {
	        if (chosenProducts.indexOf(products[i].name) > -1) {
	            totalPrice += products[i].price;
	        }
	    }
	    return totalPrice;
	}

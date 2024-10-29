const Recipes = [
	{
		id: 0,
		name: "American Meat",
		description:
			"Soup, buiscuits, and a piece of chicken with the American flag on it. Delicious.",
		cookTime: 10,
		cuisineCategory: "American",
		ingredients: [
			{title: "Ribeye Steak", quantity: 8},
			{title: "Golden Potatoes", quantity: 12},
			{title: "Beans - Fine", quantity: 42},
			{title: "Irish Cream - Baileys", quantity: 13},
			{title: "Pork - Suckling Pig", quantity: 27},
			{title: "Muffin Batt - Choc Chk", quantity: 80},
			{title: "Island Oasis - Raspberry", quantity: 96},
			{title: "External Supplier", quantity: 77},
			{title: "Tarragon - Fresh", quantity: 67},
			{title: "Trueblue - Blueberry Cranberry", quantity: 79},
			{title: "Icecream - Dstk Super Cone", quantity: 84}
		],
		instructions: [
			{
				cooking_step:
					"Morbi non quam nec dui luctus rutrum. Nulla tellus. In sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus. Suspendisse potenti."
			},
			{cooking_step: "In eleifend quam a odio."},
			{
				cooking_step:
					"Mauris ullamcorper purus sit amet nulla. Quisque arcu libero, rutrum ac, lobortis vel, dapibus at, diam. Nam tristique tortor eu pede."
			},
			{
				cooking_step:
					"Vivamus vel nulla eget eros elementum pellentesque."
			},
			{
				cooking_step:
					"Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat. Praesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede."
			}
		],
		difficulty: 45,
		rating: 89,
		thumbnailImage: null,
		likeButton: null,
		likeCount: 798324,
		bookmark: false,
		author: "Alea Bergquist",
		image: require("./american_food_category.jpg"),
		comments: ["Good.", "Ok", "It was hard to make"]
	},
	{
		id: 1,
		name: "Chicken Parm",
		description:
			"My version of chicken Parmesan is a little different than what they do in the restaurants, with less sauce and a crispier crust.",
		cookTime: 10,
		ingredients: [
			{title: "Soup - Campbells, Minestrone", quantity: 88},
			{title: "Carbonated Water - Wildberry", quantity: 82},
			{title: "Beef - Ground, Extra Lean, Fresh", quantity: 13},
			{title: "Sprouts - Brussel", quantity: 50},
			{title: "Pepper - Green, Chili", quantity: 67},
			{title: "Beer - Original Organic Lager", quantity: 54},
			{title: "Yogurt - Raspberry, 175 Gr", quantity: 10},
			{title: "Silicone Paper 16.5x24", quantity: 3},
			{title: "Beer - Alexander Kieths, Pale Ale", quantity: 73},
			{title: "Chilli Paste, Ginger Garlic", quantity: 96},
			{title: "Whmis Spray Bottle Graduated", quantity: 44},
			{title: "Yogurt - French Vanilla", quantity: 37},
			{title: "Cheese - Le Cru Du Clocher", quantity: 70},
			{title: "Soup - Campbells Chicken", quantity: 82}
		],
		instructions: [
			{
				cooking_step:
					"Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque. Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus."
			},
			{
				cooking_step:
					"Etiam justo. Etiam pretium iaculis justo. In hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus. Nulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi."
			},
			{
				cooking_step:
					"Nulla tempus. Vivamus in felis eu sapien cursus vestibulum. Proin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem. Duis aliquam convallis nunc."
			},
			{
				cooking_step:
					"Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum. In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo."
			},
			{cooking_step: "Pellentesque eget nunc."}
		],
		cuisineCategory: "Italian",
		difficulty: 38,
		rating: 74,
		thumbnailImage: null,
		likeButton: null,
		likeCount: 90484,
		bookmark: false,
		author: "Alea Bergquist",
		image: require("./chikyParm.png"),
		comments: ["Good.", "Ok", "It was hard to make"]
	},
	{
		id: 2,
		name: "Orange Chicken and White Rice",
		description:
			"Authentic Beijing orange chicken with broccoli and white rice.",
		cookTime: 25,
		ingredients: [
			{title: "Pork - Sausage Casing", quantity: 28},
			{title: "Bread - Pita", quantity: 94},
			{title: "Table Cloth 72x144 White", quantity: 9},
			{title: "Snapple Lemon Tea", quantity: 51},
			{title: "Peach - Halves", quantity: 28},
			{title: "Beef Flat Iron Steak", quantity: 70},
			{title: "Capers - Ox Eye Daisy", quantity: 31},
			{title: "Soup - Knorr, Classic Can. Chili", quantity: 98},
			{title: "Puree - Pear", quantity: 81},
			{title: "Shrimp - 31/40", quantity: 39},
			{title: "Cheese - Boursin, Garlic / Herbs", quantity: 5},
			{title: "Flour - Bread", quantity: 22},
			{title: "Vermouth - White, Cinzano", quantity: 12}
		],
		instructions: [
			{
				cooking_step:
					"In quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet. Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui. Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam."
			},
			{
				cooking_step:
					"Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero. Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh."
			},
			{
				cooking_step:
					"Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est. Phasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum."
			},
			{
				cooking_step:
					"Aenean sit amet justo. Morbi ut odio. Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl."
			},
			{
				cooking_step:
					"Vivamus vel nulla eget eros elementum pellentesque."
			},
			{cooking_step: "Vivamus vestibulum sagittis sapien."},
			{
				cooking_step:
					"Donec dapibus. Duis at velit eu est congue elementum. In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo. Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis. Sed ante. Vivamus tortor."
			}
		],
		cuisineCategory: "Chinese",
		difficulty: 19,
		rating: 93,
		thumbnailImage: null,
		likeButton: null,
		likeCount: 23432,
		bookmark: false,
		author: "Connor Bergquist",
		image: require("./chinese_food_category.jpg"),
		comments: ["Good.", "Ok", "It was hard to make"]
	},
	{
		id: 3,
		name: "French Chicken with potatoes and tomatoes.",
		description: "French dish with a tomato reduction and breaded chicken.",
		cookTime: 45,
		cuisineCategory: "French",
		ingredients: [
			{title: "Wine - Barossa Valley Estate", quantity: 38},
			{title: "Wine - Red, Cooking", quantity: 76},
			{title: "Coconut Milk - Unsweetened", quantity: 69},
			{title: "Chips - Assorted", quantity: 85},
			{title: "Pancetta", quantity: 79},
			{title: "Nantucket - Kiwi Berry Cktl.", quantity: 24},
			{title: "Carbonated Water - Strawberry", quantity: 21},
			{title: "Pea - Snow", quantity: 33},
			{title: "Chinese Foods - Thick Noodles", quantity: 4},
			{title: "Trueblue - Blueberry 12x473ml", quantity: 52},
			{title: "Eggplant - Baby", quantity: 32},
			{title: "Coriander - Ground", quantity: 21},
			{title: "Wine - Red, Colio Cabernet", quantity: 53}
		],
		instructions: [
			{
				cooking_step:
					"Aliquam erat volutpat. In congue. Etiam justo. Etiam pretium iaculis justo."
			},
			{
				cooking_step:
					"Curabitur convallis. Duis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus. Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis."
			},
			{
				cooking_step:
					"Nullam molestie nibh in lectus. Pellentesque at nulla. Suspendisse potenti."
			},
			{
				cooking_step:
					"In hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus. Nulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi. Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit."
			},
			{
				cooking_step:
					"Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh. Quisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros. Vestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue."
			},
			{
				cooking_step:
					"Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin risus. Praesent lectus. Vestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis. Duis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus. Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis."
			},
			{
				cooking_step:
					"Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl. Aenean lectus."
			},
			{
				cooking_step:
					"Phasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum. Proin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem. Duis aliquam convallis nunc."
			}
		],
		difficulty: 83,
		rating: 68,
		thumbnailImage: null,
		likeButton: null,
		likeCount: 23432,
		bookmark: false,
		author: "King Louis XIV",
		image: require("./french_food_category.jpg"),
		comments: ["Good.", "Ok", "It was hard to make"]
	},
	{
		id: 4,
		name: "Orange Chicken Masala with Basmati Rice and curry sauce.",
		description: "French dish with a tomato reduction and breaded chicken.",
		cookTime: 60,
		cuisineCategory: "Indian",
		ingredients: [
			{title: "Chicken - White Meat With Tender", quantity: 72},
			{title: "Pasta - Cappellini, Dry", quantity: 4},
			{title: "Wine - Chianti Classica Docg", quantity: 78},
			{title: "Chicken - Leg, Fresh", quantity: 46},
			{title: "Chervil - Fresh", quantity: 88},
			{title: "Grouper - Fresh", quantity: 93},
			{title: "Pasta - Fettuccine, Dry", quantity: 26},
			{title: "Turnip - Mini", quantity: 51},
			{title: "Tobasco Sauce", quantity: 20},
			{title: "Soup - Campbells, Spinach Crm", quantity: 38},
			{title: "Pork - Inside", quantity: 51},
			{title: "Pepper - Paprika, Hungarian", quantity: 29}
		],
		instructions: [
			{
				cooking_step:
					"Phasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum. Proin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem. Duis aliquam convallis nunc."
			},
			{
				cooking_step:
					"Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl. Aenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum. Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est. Phasellus sit amet erat. Nulla tempus."
			},
			{
				cooking_step:
					"Sed ante. Vivamus tortor. Duis mattis egestas metus. Aenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh. Quisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros. Vestibulum ac est lacinia nisi venenatis tristique."
			},
			{
				cooking_step:
					"Nulla tempus. Vivamus in felis eu sapien cursus vestibulum. Proin eu mi."
			},
			{
				cooking_step:
					"Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros. Vestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat. In congue. Etiam justo. Etiam pretium iaculis justo. In hac habitasse platea dictumst. Etiam faucibus cursus urna."
			},
			{
				cooking_step:
					"In est risus, auctor sed, tristique in, tempus sit amet, sem. Fusce consequat. Nulla nisl. Nunc nisl. Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa."
			},
			{
				cooking_step:
					"Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl. Aenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum."
			},
			{
				cooking_step:
					"Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin risus. Praesent lectus. Vestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis. Duis consequat dui nec nisi volutpat eleifend."
			},
			{cooking_step: "Sed sagittis."},
			{
				cooking_step:
					"Sed accumsan felis. Ut at dolor quis odio consequat varius. Integer ac leo. Pellentesque ultrices mattis odio."
			}
		],
		difficulty: 92,
		rating: 78,
		thumbnailImage: null,
		likeButton: null,
		likeCount: 23432,
		bookmark: false,
		author: "Burka Salam",
		image: require("./indian_food_category.jpg"),
		comments: ["Good.", "Ok", "It was hard to make"]
	},
	{
		id: 5,
		name: "Spaghetti.",
		description: "Spaghetti with basil and tomato.",
		cookTime: 35,
		cuisineCategory: "Italian",
		ingredients: [
			{title: "Bacardi Breezer - Tropical", quantity: 11},
			{title: "Nut - Almond, Blanched, Sliced", quantity: 91},
			{title: "Long Island Ice Tea", quantity: 82},
			{title: "Wine - Chateau Timberlay", quantity: 82},
			{title: "Stainless Steel Cleaner Vision", quantity: 63},
			{title: "Lamb - Leg, Boneless", quantity: 91},
			{title: "Lentils - Green, Dry", quantity: 61},
			{title: "Beets", quantity: 24},
			{title: "Toothpick Frilled", quantity: 14},
			{title: "White Baguette", quantity: 24},
			{title: "Tart - Lemon", quantity: 25},
			{title: "Appetizer - Smoked Salmon / Dill", quantity: 9},
			{title: "Wine - Fino Tio Pepe Gonzalez", quantity: 17},
			{title: "Beer - Sleemans Cream Ale", quantity: 39},
			{title: "Wine - Marlbourough Sauv Blanc", quantity: 35},
			{title: "Peach - Halves", quantity: 84},
			{title: "Wine - Pinot Noir Latour", quantity: 60},
			{title: "Bread - Multigrain Oval", quantity: 12},
			{title: "Jerusalem Artichoke", quantity: 3}
		],
		instructions: [
			{
				cooking_step:
					"Etiam justo. Etiam pretium iaculis justo. In hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus. Nulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi."
			},
			{
				cooking_step:
					"In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem. Integer tincidunt ante vel ipsum."
			},
			{
				cooking_step:
					"Suspendisse accumsan tortor quis turpis. Sed ante. Vivamus tortor. Duis mattis egestas metus. Aenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh. Quisque id justo sit amet sapien dignissim vestibulum."
			},
			{
				cooking_step:
					"Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat. Praesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede. Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem. Fusce consequat."
			},
			{
				cooking_step:
					"Aliquam non mauris. Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis. Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem. Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus."
			},
			{
				cooking_step:
					"Aenean auctor gravida sem. Praesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio. Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo."
			},
			{cooking_step: "Nulla nisl."},
			{cooking_step: "Ut at dolor quis odio consequat varius."},
			{
				cooking_step:
					"Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi."
			},
			{
				cooking_step:
					"Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede. Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem. Fusce consequat. Nulla nisl. Nunc nisl. Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus."
			},
			{
				cooking_step:
					"Duis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus. Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis."
			}
		],
		difficulty: 23,
		rating: 72,
		thumbnailImage: null,
		likeButton: null,
		likeCount: 23432,
		bookmark: false,
		author: "Burka Salam",
		image: require("./italian_food_category.jpg"),
		comments: ["Good.", "Ok", "It was hard to make"]
	},
	{
		id: 6,
		name: "Sushi with egg drop soup and white rice.",
		description: "Salmon nigiri with white rice and egg drop soup.",
		cookTime: 75,
		cuisineCategory: "Japanese",
		ingredients: [
			{title: "Corn Syrup", quantity: 58},
			{title: "Tortillas - Flour, 8", quantity: 5},
			{title: "Carbonated Water - Blackcherry", quantity: 19},
			{title: "Lettuce - Frisee", quantity: 70},
			{title: "Roe - Flying Fish", quantity: 25},
			{title: "Strawberries - California", quantity: 61},
			{title: "Wine - Red, Wolf Blass, Yellow", quantity: 77},
			{title: "Cherries - Fresh", quantity: 42},
			{title: "Cabbage - Green", quantity: 63},
			{title: "Sauce - Fish 25 Ozf Bottle", quantity: 44},
			{title: "Soup - Tomato Mush. Florentine", quantity: 29},
			{title: "Squash - Sunburst", quantity: 33}
		],
		instructions: [
			{
				cooking_step:
					"Duis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus. Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis."
			},
			{
				cooking_step:
					"Fusce consequat. Nulla nisl. Nunc nisl. Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa."
			},
			{
				cooking_step:
					"Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui. Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc."
			},
			{
				cooking_step:
					"Suspendisse potenti. Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris. Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet."
			},
			{
				cooking_step:
					"Morbi quis tortor id nulla ultrices aliquet. Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui. Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti. Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum."
			},
			{
				cooking_step:
					"In est risus, auctor sed, tristique in, tempus sit amet, sem. Fusce consequat."
			},
			{
				cooking_step:
					"Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui. Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti. Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum."
			},
			{cooking_step: "Integer ac leo."},
			{
				cooking_step:
					"Donec semper sapien a libero. Nam dui. Proin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius. Integer ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi. Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla."
			},
			{
				cooking_step:
					"Nullam varius. Nulla facilisi. Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque. Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus. Phasellus in felis. Donec semper sapien a libero."
			},
			{
				cooking_step:
					"Vestibulum rutrum rutrum neque. Aenean auctor gravida sem. Praesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio. Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo."
			},
			{
				cooking_step:
					"In sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus."
			}
		],
		difficulty: 83,
		rating: 52,
		thumbnailImage: null,
		likeButton: null,
		likeCount: 23432,
		bookmark: false,
		author: "Burka Salam",
		image: require("./japanese_food_category.jpg"),
		comments: ["Good.", "Ok", "It was hard to make"]
	},
	{
		id: 7,
		name: "Carne Asada Burrito.",
		description: "Carne asada burrito with rice and beans.",
		cookTime: 15,
		cuisineCategory: "Mexican",
		ingredients: [
			{title: "Beef - Inside Round", quantity: 58},
			{title: "Pasta - Cappellini, Dry", quantity: 21},
			{title: "Loquat", quantity: 57},
			{title: "Rice - 7 Grain Blend", quantity: 63},
			{title: "Fish - Atlantic Salmon, Cold", quantity: 1},
			{title: "Wine - Red, Concha Y Toro", quantity: 63},
			{title: "Tomatoes - Vine Ripe, Red", quantity: 81},
			{title: "Compound - Strawberry", quantity: 69},
			{title: "Dried Cranberries", quantity: 99},
			{title: "Southern Comfort", quantity: 3},
			{title: "Bowl 12 Oz - Showcase 92012", quantity: 62},
			{title: "Onions - Vidalia", quantity: 1},
			{title: "Pasta - Shells, Medium, Dry", quantity: 48},
			{title: "Pear - Halves", quantity: 9},
			{title: "Munchies Honey Sweet Trail Mix", quantity: 86},
			{title: "Glaze - Clear", quantity: 81},
			{title: "Couscous", quantity: 84},
			{title: "Cheese - Mascarpone", quantity: 99}
		],
		instructions: [
			{
				cooking_step:
					"Nunc rhoncus dui vel sem. Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus. Pellentesque at nulla."
			},
			{
				cooking_step:
					"Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus. Phasellus in felis. Donec semper sapien a libero. Nam dui. Proin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis."
			},
			{
				cooking_step:
					"Nullam varius. Nulla facilisi. Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque. Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla."
			},
			{
				cooking_step:
					"Quisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est."
			},
			{
				cooking_step:
					"Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc."
			},
			{
				cooking_step:
					"Nulla tempus. Vivamus in felis eu sapien cursus vestibulum. Proin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem. Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit."
			},
			{
				cooking_step:
					"Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet. Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui. Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam."
			},
			{
				cooking_step:
					"Sed accumsan felis. Ut at dolor quis odio consequat varius. Integer ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi."
			},
			{
				cooking_step:
					"Suspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst. Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat. Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem. Integer tincidunt ante vel ipsum."
			},
			{
				cooking_step:
					"Pellentesque ultrices mattis odio. Donec vitae nisi. Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus."
			}
		],
		difficulty: 11,
		rating: 61,
		thumbnailImage: null,
		likeButton: null,
		likeCount: 23432,
		bookmark: false,
		author: "Burka Salam",
		image: require("./mexican_food_category.jpg"),
		comments: ["Good.", "Ok", "It was hard to make"]
	}
]

export default Recipes

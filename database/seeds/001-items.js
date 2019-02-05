exports.seed = function(knex, Promise) {
	// Deletes ALL existing entries
	return knex('items')
		.del()
		.then(function() {
			// Inserts seed entries
			return knex('items').insert([
				{
					name: 'apples',
					amount: 100,
					unit: 'oz',
          imageUrl: 'https://i.imgur.com/pMfBRRt.jpg',
          categoryID:2
				},
				{
					name: 'bananas',
					amount: 200,
					unit: 'oz',
          imageUrl: 'https://i.imgur.com/9ny4c0E.jpg',
          categoryID:2
				},
				{
					name: 'potatoes',
					amount: 10,
					unit: 'lb(s)',
          imageUrl: 'https://i.imgur.com/dRF2mfc.jpg',
          categoryID: 1
				},
				{
					name: 'carrots',
					amount: 13,
					unit: 'lb(s)',
          imageUrl: 'https://i.imgur.com/RTZ0qFP.jpg',
          categoryID: 1
				},
				{
					name: 'eggs',
					amount: 31,
					unit: 'dozen',
					imageUrl: 'https://i.imgur.com/bQYFZjw.jpg'
				},
				{
					name: 'broccoli',
					amount: 30,
					unit: 'oz',
          imageUrl: 'https://i.imgur.com/47fHnED.jpg',
          categoryID: 1
				}
				// {name: 'butter', amount: '1', unit: 'lb', imageURL: , categoryID:4},
				// {name: 'milk', amount: '1', unit: 'gal', imageID: 3, categoryID:4},
				// {name: 'yogurt', amount: '64', unit: 'oz', imageID: 4, categoryID:4},
				// {name: 'eggs', amount: '3', unit: 'dozen', imageID: 5, categoryID:5},
				// {name: 'cheese', amount: '5', unit: 'lbs', imageID: 6, categoryID:4},
				// {name: 'carrots', amount: '2', unit: 'lbs', imageID: 7, categoryID:1},
				// {name: 'broccoli', amount: '3', unit: 'lbs', imageID: 8, categoryID:1},
				// {name: 'potatoes', amount: '10', unit: 'lbs', imageID: 9, categoryID:1},
				// {name: 'garlic powder', amount: '3', unit: 'oz', imageID: 10, categoryID:9},
				// {name: 'beans', amount: '12', unit: 'cans', imageID: 11, categoryID:2},
				// {name: 'bread', amount: '3', unit: 'loaves', imageID: 12, categoryID:8},
				// {name: 'rice', amount: '20', unit: 'lbs', imageID: 13, categoryID:8},
				// {name: 'spaghetti', amount: '5', unit: 'lbs', imageID: 14, categoryID:8},
				// {name: 'bacon', amount: '3', unit: 'lbs', imageID: 15, categoryID:5},
				// {name: 'chicken', amount: '10', unit: 'lbs', imageID: 16, categoryID:5},
				// {name: 'ground beef', amount: '15', unit: 'lbs', imageID: 17, categoryID:5},
				// {name: 'bananas', amount: '2', unit: 'lbs', imageID: 4, categoryID:2},
				// {name: 'blueberries', amount: '12', unit: 'oz', imageID: 4, categoryID:2},
				// {name: 'grapes', amount: '3', unit: 'lbs', imageID: 4, categoryID:2},
				// {name: 'strawberries', amount: '1', unit: 'lb', imageID: 4, categoryID:2},
				// {name: 'salt', amount: '10', unit: 'oz', imageID: 4, categoryID:9},
				// {name: 'pepper', amount: '2', unit: 'oz', imageID: 4, categoryID:9},
				// {name: 'plates', amount: '50', unit: '', imageID: 4, categoryID:7},
				// {name: 'forks', amount: '50', unit: '', imageID: 4, categoryID:3},
				// {name: 'knives', amount: '50', unit: '', imageID: 4, categoryID:3},
				// {name: 'bowls', amount: '50', unit: '', imageID: 4, categoryID:7},
				// {name: 'spoons', amount: '50', unit: '', imageID: 4, categoryID:3},
				// {name: 'cups', amount: '50', unit: '', imageID: 4, categoryID:7},
				// {name: 'orange juice', amount: '64', unit: 'oz', imageID: 4, categoryID:6},
				// {name: 'apple juice', amount: '64', unit: 'oz', imageID: 4, categoryID:6},
			]);
		});
};

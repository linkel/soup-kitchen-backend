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
					imageURL: 'https://i.imgur.com/pMfBRRt.jpg',
					categoryID: 2
				},
				{
					name: 'bananas',
					amount: 200,
					unit: 'oz',
					imageURL: 'https://i.imgur.com/9ny4c0E.jpg',
					categoryID: 2
				},
				{
					name: 'potatoes',
					amount: 10,
					unit: 'lb(s)',
					imageURL: 'https://i.imgur.com/dRF2mfc.jpg',
					categoryID: 1
				},
				{
					name: 'carrots',
					amount: 13,
					unit: 'lb(s)',
					imageURL: 'https://i.imgur.com/RTZ0qFP.jpg',
					categoryID: 1
				},
				{
					name: 'eggs',
					amount: 31,
					unit: 'dozen',
					imageURL: 'https://i.imgur.com/bQYFZjw.jpg',
					categoryID: 5
				},
				{
					name: 'broccoli',
					amount: 30,
					unit: 'oz',
					imageURL: 'https://i.imgur.com/47fHnED.jpg',
					categoryID: 1
				},
				{ name: 'butter', amount: '1', unit: 'lb', imageURL: '', categoryID: 4 },
				{ name: 'milk', amount: '1', unit: 'gal', imageURL: '', categoryID: 4 },
				{
					name: 'yogurt',
					amount: '64',
					unit: 'oz',
					imageURL: '',
					categoryID: 4
				},
				{
					name: 'cheese',
					amount: '5',
					unit: 'lbs',
					imageURL: '',
					categoryID: 4
				},
				{
					name: 'garlic powder',
					amount: '3',
					unit: 'oz',
					imageURL: '',
					categoryID: 9
				},
				{
					name: 'beans',
					amount: '12',
					unit: 'cans',
					imageURL: '',
					categoryID: 2
				},
				{
					name: 'bread',
					amount: '3',
					unit: 'loaves',
					imageURL: '',
					categoryID: 8
				},
				{
					name: 'rice',
					amount: '20',
					unit: 'lbs',
					imageURL: '',
					categoryID: 8
				},
				{
					name: 'spaghetti',
					amount: '5',
					unit: 'lbs',
					imageURL: '',
					categoryID: 8
				},
				{
					name: 'bacon',
					amount: '3',
					unit: 'lbs',
					imageURL: '',
					categoryID: 5
				},
				{
					name: 'chicken',
					amount: '10',
					unit: 'lbs',
					imageURL: '',
					categoryID: 5
				},
				{
					name: 'ground beef',
					amount: '15',
					unit: 'lbs',
					imageURL: '',
					categoryID: 5
				},
				{
					name: 'blueberries',
					amount: '12',
					unit: 'oz',
					imageURL: '',
					categoryID: 2
				},
				{
					name: 'grapes',
					amount: '3',
					unit: 'lbs',
					imageURL: '',
					categoryID: 2
				},
				{
					name: 'strawberries',
					amount: '1',
					unit: 'lb',
					imageURL: '',
					categoryID: 2
				},
				{ name: 'salt', amount: '10', unit: 'oz', imageURL: '', categoryID: 9 },
				{ name: 'pepper', amount: '2', unit: 'oz', imageURL: '', categoryID: 9 },
				{ name: 'plates', amount: '50', unit: '', imageURL: '', categoryID: 7 },
				{ name: 'forks', amount: '50', unit: '', imageURL: '', categoryID: 3 },
				{ name: 'knives', amount: '50', unit: '', imageURL: '', categoryID: 3 },
				{ name: 'bowls', amount: '50', unit: '', imageURL: '', categoryID: 7 },
				{ name: 'spoons', amount: '50', unit: '', imageURL: '', categoryID: 3 },
				{ name: 'cups', amount: '50', unit: '', imageURL: '', categoryID: 7 },
				{
					name: 'orange juice',
					amount: '64',
					unit: 'oz',
					imageURL: '',
					categoryID: 6
				},
				{
					name: 'apple juice',
					amount: '64',
					unit: 'oz',
					imageURL: '',
					categoryID: 6
				}
			]);
		});
};

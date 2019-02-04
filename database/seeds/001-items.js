
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('items').del()
    .then(function () {
      // Inserts seed entries
      return knex('items').insert([
        {name: 'butter', amount: '1', unit: 'lb', imageURL: '../../assets/butter.jpg', categoryID:4},
        {name: 'milk', amount: '1', unit: 'gal', imageURL: '../../assets/milk.jpg', categoryID:4},
        {name: 'yogurt', amount: '64', unit: 'oz', imageURL: '../../assets/yogurt.jpg', categoryID:4},
        {name: 'eggs', amount: '3', unit: 'dozen', imageURL: '../../assets/eggs.jpg', categoryID:5},
        {name: 'cheese', amount: '5', unit: 'lbs', imageURL: '../../assets/cheese.jpg', categoryID:4},
        {name: 'carrots', amount: '2', unit: 'lbs', imageURL: '../../assets/carrots.jpg', categoryID:1},
        {name: 'broccoli', amount: '3', unit: 'lbs', imageURL: '../../assets/broccoli.jpg', categoryID:1},
        {name: 'potatoes', amount: '10', unit: 'lbs', imageURL: '../../assets/potatoes.jpg', categoryID:1},
        {name: 'garlic powder', amount: '3', unit: 'oz', imageURL: '../../assets/dish-icon.jpg', categoryID:9},
        {name: 'beans', amount: '12', unit: 'cans', imageURL: '../../assets/beans.png', categoryID:2},
        {name: 'bread', amount: '3', unit: 'loaves', imageURL: '../../assets/bread.jpg', categoryID:8},
        {name: 'rice', amount: '20', unit: 'lbs', imageURL: '../../assets/rice.jpg', categoryID:8},
        {name: 'spaghetti', amount: '5', unit: 'lbs', imageURL: '../../assets/dish-icon.jpg', categoryID:8},
        {name: 'bacon', amount: '3', unit: 'lbs', imageURL: '../../assets/bacon.jpg', categoryID:5},
        {name: 'chicken', amount: '10', unit: 'lbs', imageURL: '../../assets/dish-icon.jpg', categoryID:5},
        {name: 'ground beef', amount: '15', unit: 'lbs', imageURL: '../../assets/dish-icon.jpg', categoryID:5},
        {name: 'bananas', amount: '2', unit: 'lbs', imageURL: '../../assets/bananas.jpg', categoryID:2},
        {name: 'blueberries', amount: '12', unit: 'oz', imageURL: '../../assets/blueberries.jpg', categoryID:2},
        {name: 'grapes', amount: '3', unit: 'lbs', imageURL: '../../assets/grapes.jpg', categoryID:2},
        {name: 'strawberries', amount: '1', unit: 'lb', imageURL: '../../assets/strawberries.jpg', categoryID:2},
        {name: 'salt', amount: '10', unit: 'oz', imageURL: '../../assets/dish-icon.jpg', categoryID:9},
        {name: 'pepper', amount: '2', unit: 'oz', imageURL: '../../assets/dish-icon.jpg', categoryID:9},
        {name: 'plates', amount: '50', unit: '', imageURL: '../../assets/dish-icon.jpg', categoryID:7},
        {name: 'forks', amount: '50', unit: '', imageURL: '../../assets/dish-icon.jpg', categoryID:3},
        {name: 'knives', amount: '50', unit: '', imageURL: '../../assets/dish-icon.jpg', categoryID:3},
        {name: 'bowls', amount: '50', unit: '', imageURL: '../../assets/dish-icon.jpg', categoryID:7},
        {name: 'spoons', amount: '50', unit: '', imageURL: '../../assets/dish-icon.jpg', categoryID:3},
        {name: 'cups', amount: '50', unit: '', imageURL: '../../assets/dish-icon.jpg', categoryID:7},
        {name: 'orange juice', amount: '64', unit: 'oz', imageURL: '../../assets/dish-icon.jpg', categoryID:6},
        {name: 'apple juice', amount: '64', unit: 'oz', imageURL: '../../assets/dish-icon.jpg', categoryID:6},
      ]);
    });
};

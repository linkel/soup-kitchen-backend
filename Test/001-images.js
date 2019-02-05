const {encodeImageFileAsURL} = require('../../middleware/imageMiddleware')
const images = require('../../assets/images.js')


exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('images').del()
    .then(function () {
      // Inserts seed entries
      return knex('images').insert([
        {data: encodeImageFileAsURL(images)},
        // {data: encodeImageFileAsURL(images.bacon)},
        // {data: encodeImageFileAsURL(images.bananas)},
        // {data: encodeImageFileAsURL(images.beans)},
        // {data: encodeImageFileAsURL(images.blueberries)},
        // {data: encodeImageFileAsURL(images.bread)},
        // {data: encodeImageFileAsURL(images.broccoli)},
        // {data: encodeImageFileAsURL(images.butter)},
        // {data: encodeImageFileAsURL(images.carrots)},
        // {data: encodeImageFileAsURL(images.cheese)},
        // {data: encodeImageFileAsURL(images.eggs)},
        // {data: encodeImageFileAsURL(images.grapes)},
        // {data: encodeImageFileAsURL(images.milk)},
        // {data: encodeImageFileAsURL(images.potatoes)},
        // {data: encodeImageFileAsURL(images.rice)},
        // {data: encodeImageFileAsURL(images.strawberries)},
        // {data: encodeImageFileAsURL(images.yogurt)}
      ]);
    });
};

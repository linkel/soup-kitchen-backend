const dbEngine = process.env.DB || 'development';
const config = require('../knexfile.js')[dbEngine];
module.exports = require('knex')(config);

// const dbEngine = process.env.DB || 'development';

// const knexConfig = require('../knexfile.js')[dbEngine];

// module.exports = knex(knexConfig);

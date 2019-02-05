const express = require('express');
const router = express.Router();
const db = require('../database/helpers/imagesHelper')
const {encodeImageFileAsURL} = require('../middleware/imageMiddleware')
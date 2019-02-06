const express = require('express');
const router = express.Router();
const responseStatus = require('../config/responseStatuses');
const { protects, imageCheck } = require('../middleware/authMiddleware');
const db = require('../database/helpers/itemsHelper');

//Create
//create a new item for a category
router.post('/', imageCheck, (req, res, next) => {
	const { body } = req;
	let { name, amount } = req.body;
	 if (typeof amount !== 'string' && name !== ''){
		db.addItem(body)
		.then((id) => {
			return res.status(responseStatus.created).json({ itemID: id });
		})
		.catch((err) => {
			next(err);
		});
	} else {
		next(responseStatus.badRequest)
	}	
});
//Read
//get all items
router.get('/', protects, (req, res, next) => {
	db.getItems()
		.then((items) => {
			items.forEach((item) => {
				if (item.imageURL === '') {
					item.imageURL = 'https://i.imgur.com/zpw4lgT.png';
				} 
			});
			return res
				.status(responseStatus.successful)
				.json({ items, decodedToken: req.decodedToken });
		})
		.catch((err) => {
			// console.log(err);
			next(err);
		});
});

//Read
//get a specific item
router.get('/:id', protects, (req, res, next) => {
	const { id } = req.params;
	db.getItems(id)
		.then((item) => {
			if (item.imageURL === '') {
				item.imageURL = 'https://i.imgur.com/zpw4lgT.png';
			}
			res
				.status(responseStatus.successful)
				.json({ item, decodedToken: req.decodedToken });
		})
		.catch((err) => {
			if (TypeError) {
				next(responseStatus.notFound);
			} else {
				next(err);
			}
		});
});

//Update
//update an items string name or amount
router.put('/:id', imageCheck, (req, res, next) => {
	
	const { id } = req.params;
	const { body } = req;
	let {amount, name} = req.body
	if ( typeof amount !== 'string' && name !== ''){
	db.updateItem(id, body)
		.then((count) => {
			if (count === 1) {
				res.status(responseStatus.successful).json({ updatedRecords: count });
			} else {
				next(responseStatus.notFound);
			}
		})
		.catch((err) => {
			next(err);
		});
	} else {
		next(responseStatus.badRequest)
	}	
});

//Delete
//delete an item
router.delete('/:id', (req, res, next) => {
	const { id } = req.params;
	db.deleteItem(id)
		.then((count) => {
			if (count === 1) {
				res.status(responseStatus.successful).json({ deletedRecords: count });
			} else {
				next(responseStatus.notFound);
			}
		})
		.catch((err) => {
			// console.log(err);
			next(err);
		});
});

module.exports = router;

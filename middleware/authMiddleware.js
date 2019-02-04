const jwt = require('jsonwebtoken');
const fs = require('fs');
const responseStatus = require('../config/responseStatuses');
// const private = fs.readFileSync('middleware/private.key', 'utf8');

require('dotenv').config();
// require('custom-env').env('staging')

module.exports = {
	protects: (req, res, next) => {
		const token = req.headers.authorization;
		if (token) {
			jwt.verify(token, process.env.SECUREKEY_AMBER_KEY, (err, decodedToken) => {
				if (err) {
					//token is invalid
					next(responseStatus.forbiddenAccess);
				} else {
					//token is valid
					req.decodedToken = decodedToken;
					next();
				}
			});
		} else {
			next(responseStatus.badCredentials);
		}
	},

	emptyCheck: (req, res, next) => {
		const { body } = req;
		for (key in body) {
			if (body[key] === '') {
				next(responseStatus.badRequest);
			}
		}
		next()
	},

	generateToken: (user) => {
		const payload = {
			email: user.email
		};
		const secret = process.env.SECUREKEY_AMBER_KEY
		const options = {
			expiresIn: '1h',
			jwtid: '12345'
		};
		return jwt.sign(payload, secret, options);
	}
};

const db = require('../../config/dbConfig');

module.exports = {
    getImage: (id) => {
        const image = await db('images').select('id', 'data').where({ id }).first()
    },

	addImage: async (data) => {
		const IDs = await db('images').insert(data);
		return { id: IDs[0] };
	},

	updateImage: async (id, data) => {
		const count = await db('images')
			.where({ id })
			.update(data);

		return count;
	},

	deleteImage: async (id) => {
		const count = await db('images')
			.where({ id })
			.del();

		return count;
	}
};
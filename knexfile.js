const localPG = {
  host: 'localhost',
  database: process.env.DB_NAME,
  user: process.env.DB_USER,
  password: process.env.DB_PASS
}

const dbConnection = process.env.DATABASE_URL || localPg;

module.exports = {
	development: {
		client: 'sqlite3',
		connection: {
			filename: './database/inventory.sqlite3'
		},
		useNullAsDefault: true,
		migrations: {
			directory: './database/migrations'
		},
		seeds: {
			directory: './database/seeds'
		}
  },
  testing: {
    client: 'sqlite3',
    connection: {
      filename: './database/inventory.sqlite3',
    },
    useNullAsDefault: true,
    migrations: {
      directory: './database/migrations',
    },
    seeds: {
      directory: './database/seeds',
    },
  },
  production: {
    client: 'pg',
    connection: dbConnection,
    pool: {
      min: 2,
      max: 10
    }
    migrations: {
      directory: './database/migrations',
    },
    seeds: {
      directory: './database/seeds',
    },
    useNullAsDefault: true
  }
};
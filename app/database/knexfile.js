// Update with your config settings.

module.exports = {

  development: {
      client: 'mysql',
      connection: {
        database: 'storm',
        user:     'tamnguyen',
        password: '05021988'
      },
      pool: {
        min: 2,
        max: 10
      },
      migrations: {
        tableName: 'migrations'
      }
  },

  staging: {
      client: 'mysql',
      connection: {
        host: '104.154.244.111',
        database: 'icestore',
        user:     'root',
        password: '6yZkk0@e'
      },
      pool: {
        min: 2,
        max: 10
      },
      migrations: {
        tableName: 'migrations'
      }
  },

  production: {
      client: 'mysql',
      connection: {
        database: 'storm',
        user:     'tamnguyen',
        password: '05021988'
      },
      pool: {
        min: 2,
        max: 10
      },
      migrations: {
        tableName: 'migrations'
      }
  }

};

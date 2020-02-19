const env = process.env.NODE_ENV || "development";

const twitter = {
  consumer_key: 'wGbATRjTXwtxhfjjs3TTfSSNz',
  consumer_secret: '1qIh08iAUIf3f0o9lUctZY9xUGCz0zj00RPHPnxFQARF2lTDph',
  access_token: '759962762218962944-CkKCvAWQ9gOOao7b16lY4fyNHVBnSh8',
  access_token_secret: 'DudaLUjjjDwO7DnYrUrdd4xE6xfI7awCbN33pPdsGhx8S'
};

const envConfigs = {
  "development": {
    "username": "root",
    "password": "sasha1988",
    "database": "recycle_DB",
    "host": "127.0.0.1",
    "port": 3306,
    "dialect": "mysql"
  },
  "test": {
    "username": "root",
    "password": null,
    "database": "database_test",
    "host": "127.0.0.1",
    "dialect": "mysql"
  },
  "production": {
    "dialect": "mysql",
    "use_env_variable":"JAWSDB_URL"
  }
}

module.exports = {
  twitter,
  ...envConfigs[env]
};
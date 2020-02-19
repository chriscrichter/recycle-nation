const env = process.env.NODE_ENV || "development";

const twitter = {
  consumer_key: 'wGbATRjTXwtxhfjjs3TTfSSNz',
  consumer_secret: '1qIh08iAUIf3f0o9lUctZY9xUGCz0zj00RPHPnxFQARF2lTDph',
  access_token: '759962762218962944-CkKCvAWQ9gOOao7b16lY4fyNHVBnSh8',
  access_token_secret: 'DudaLUjjjDwO7DnYrUrdd4xE6xfI7awCbN33pPdsGhx8S'
};

const envConfigs = {
  "development": {
    "username": "bm8ozsqt8ehomlw5",
    "password": "xr1wsmn48fb916jq",
    "database": "gajb8m09t9ub53b5",
    "host": "s3lkt7lynu0uthj8.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
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
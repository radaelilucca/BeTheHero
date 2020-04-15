"use strict";require("dotenv/config");

module.exports = {
  dialect: "postgres",
  host: process.env.DB_HOST,
  username: process.env.DB_USER,
  password: process.env.DB_PASS,
  port: "5432",
  database: process.env.DB_NAME,
  production: {
    use_env_variable: process.env.DB_URL,
  },
  define: {
    tiestamps: true,
    underscored: true,
    underscoredAll: true,
  },
};

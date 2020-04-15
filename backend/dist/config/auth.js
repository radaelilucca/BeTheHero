"use strict";Object.defineProperty(exports, "__esModule", {value: true});require('dotenv/config');

exports. default = {
  secret: process.env.APP_SECRET,
  expiresIn: '7d',
};

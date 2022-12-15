const express = require('express');
const middleware = require('../config/middleware');
const router = require('../config/router');
const morgan = require('morgan');
const app = express();

app.use(morgan('tiny'));
middleware.init(app);
router.init(app);

app.set('port', process.env.PORT || 4000);

module.exports = app;

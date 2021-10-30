var history = require('connect-history-api-fallback');
const express = require('express');
const serveStatic = require("serve-static")
const path = require('path');
const port = process.env.PORT || 3000;
app = express();
app.use(serveStatic(__dirname + "/dist"));
app.use(history());
app.listen(port);

const express = require('express')
const app = express();
require('dotenv').config();
const bodyParser = require('body-parser');
const cors  =  require('cors');
const { todoRouter } = require('./src/routers/todo.routes');
const { loginRouter } = require('./src/routers/login.routes');

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//router
todoRouter(app);
loginRouter(app);

app.listen(process.env.PORT, () => console.log(`Server running on port ${process.env.PORT}`))

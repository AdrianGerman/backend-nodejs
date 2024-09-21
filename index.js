const express = require('express');
const cors = require('cors');
const routerApi = require('./routes/index');
const { checkApiKey } = require('./middlewares/auth.handler');
const app = express();
const port = process.env.PORT || 3000;

const {
  logErrors,
  errorHandler,
  boomErrorHandler,
  ormErrorHandler,
} = require('./middlewares/error.handler');

app.use(express.json());

const whitelist = ['http://localhost:8080'];
const options = {
  origin: (origin, callback) => {
    if (whitelist.includes(origin) || !origin) {
      callback(null, true);
    } else {
      callback(new Error('hoho this api does not use for you'));
    }
  },
};
app.use(cors(options));

require('./utils/auth/index');

app.get('/', (req, res) => {
  res.send('Hola desde mi server en express');
});

app.get('/nueva-ruta', checkApiKey, (req, res) => {
  res.send('Hola, soy una nueva ruta');
});

routerApi(app);

app.use(logErrors);
app.use(ormErrorHandler);
app.use(boomErrorHandler);
app.use(errorHandler);

app.listen(port, () => {
  console.log('Mi port ' + port);
});

const express = require('express');
// const cors = require('cors');
const app = express();

// app.use(cors());
app.use(express.json());
// app.use('/', express.static(__dirname + '/web'));
// app.use('/admin', express.static(__dirname + '/admin'));
app.use('/uploads', express.static(__dirname + '/uploads'));

require('./plugins/db')(app);
require('./routes/admin')(app);
require('./routes/web')(app);

app.listen(3000, () => {
  console.log('http://localhost:3000');
});
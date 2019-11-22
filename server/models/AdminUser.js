const mongoose = require('mongoose');
const bcryptjs = require('bcryptjs');

const schema = new mongoose.Schema({
  username: {
    type: String
  },
  password: {
    type: String,
    select: false,
    set(val) {
      return bcryptjs.hashSync(val, 10);
    }
  }
});

module.exports = mongoose.model('AdminUser', schema)


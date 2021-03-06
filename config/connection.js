const mongoose = require('mongoose');

function connect() {
  //Cluster Cloud URL
  // const url ='mongodb+srv://devUser:devPass@chatbotnode-hzyvt.mongodb.net/namma?retryWrites=true&w=majority';
  //Local Machine DB
  const url = 'mongodb://localhost:27017/namma';
  mongoose.connect(
    url,
    { useNewUrlParser: true, useUnifiedTopology: true },
    err => {
      if (!err) {
        console.log('Mongoose Connected Successfully');
      } else {
        console.log('Connection Error : ', err);
      }
    }
  );
}
module.exports = connect;

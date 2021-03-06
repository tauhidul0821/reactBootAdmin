const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const passport = require('passport');
const cors = require('cors');
const users = require('./api/routes/users');
const students = require('./api/routes/students');
const cookieParser = require('cookie-parser');
const session = require('express-session');
const multer = require('multer');
const path = require('path');

const app = express();
// Middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());
app.use(cookieParser());
app.use(session({ secret: 'secret', saveUninitialized: true, resave: true }));

//DB config
const db = require('./config/keys').mongo.mongoURI;

//connet to MongoDB
mongoose
  .connect(db, {
    useNewUrlParser: true,
    useFindAndModify: false,
    useUnifiedTopology: true
  })
  .then(() => console.log('mongodb connected'))
  .catch(err => console.log(err));
//mongoose.set('useFindAndModify', false);

// file upload middle ware
const storage = multer.diskStorage({
  destination: './public/uploads/',
  filename: (req, file, cb) => {
    cb(
      null,
      file.fieldname + '-' + Date.now() + path.extname(file.originalname)
    );
  }
});

const upload = multer({
  storage: storage
}).single('photo');

//

app.use('/api/users', users);
app.use('/api/students', students);

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Server runing on port ${port}`));

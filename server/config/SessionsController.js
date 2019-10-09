module.exports = {
  /*
  setSession: async (req, res, next) => {
    try {
      req.session.favColor = 'Red';
      //res.send('setting favourite color ... !');
      // Set expires
      const hour = 5000;
      req.session.cookie.expires = new Date(Date.now() + hour);
      const limitedTime = (req.session.cookie.maxAge = hour);

      if (req.session.views) {
        req.session.views++;
        res.setHeader('Content-Type', 'text/html');
        res.write('<p>views: ' + req.session.views + ' Time</p>');
        res.write('<p>expires in: ' + limitedTime / 1000 + ' second</p>');
        res.end();
        ///return done(req, res);
        //done();
      } else {
        req.session.views = 1;
        res.write('welcome to the session demo. refresh!');
        //return done(req, res);
      }
    } catch (err) {
      next(err);
    }
  },
  getSession: async (req, res, next) => {
    try {
      // res.send(
      //   'Your favourite color ... !' +
      //     (req.session.favColor == undefined
      //       ? 'NOT FOUND'
      //       : req.session.favColor)
      // );
      return done(req, res);
    } catch (err) {
      next(err);
    }
  }*/
  setSession: async (req, res, next, done) => {
    req.session.favColor = 'Red';
    //res.send('setting favourite color ... !');
    // Set expires
    const hour = 5000;
    req.session.cookie.expires = new Date(Date.now() + hour);
    const limitedTime = (req.session.cookie.maxAge = hour);

    if (req.session.views) {
      req.session.views++;
      //res.setHeader('Content-Type', 'text/html');
      //res.write('<p>views: ' + req.session.views + ' Time</p>');
      //res.write('<p>expires in: ' + limitedTime / 1000 + 's</p>');
      //res.end();
      return done(req, res, next);
    } else {
      req.session.views = 1;
      //res.end('welcome to the session demo. refresh!')
      return done(req, res, next);
    }
  },
  getSession: async (req, res, next, done) => {
    try {
      res.send(
        'Your favourite color ... !' +
          (req.session.favColor == undefined
            ? 'NOT FOUND'
            : req.session.favColor)
      );
    } catch (err) {
      next(err);
    }
  }
};

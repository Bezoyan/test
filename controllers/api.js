const UsersApi = require('./../components/users/api');


class ApiV1 {
    initialize(app) {
      app.use('/api/users', UsersApi);

      app.get('/', (req, res) => {
        res.send('works');
      });
    }
}


module.exports = new ApiV1();

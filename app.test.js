const app = require('./server');
const supertest = require('supertest');
const request = supertest(app);

it('gets the test endpoint', done => {
  request.get('/test')
    .expect(200)
    .then(response => {
      expect(response.body.message).toBe('pass!');
      done();
    })
    .catch(error => {
      done(error);
    });
});

const chai = require('chai');
const chaiHttp = require('chai-http');
const app = require('../app');

chai.use(chaiHttp);
const { expect } = chai;

describe('Express App', () => {
  it('should return a list of gratitude notes', (done) => {
    chai.request(app)
      .get('/')
      .end((err, res) => {
        expect(res).to.have.status(200);
        expect(res).to.be.html;
        expect(res.text).to.include('Gratitude Notes');
        done();
      });
  });

  it('should add a new gratitude note', (done) => {
    chai.request(app)
      .post('/add')
      .send({ note: 'New Gratitude Note' })
      .end((err, res) => {
        expect(res).to.redirectTo('/');
        done();
      });
  });

  it('should edit an existing gratitude note', (done) => {
    chai.request(app)
      .post('/edit/1630240211058')
      .send({ note: 'Updated Gratitude Note' })
      .end((err, res) => {
        expect(res).to.redirectTo('/');
        done();
      });
  });

  it('should delete an existing gratitude note', (done) => {
    chai.request(app)
      .post('/delete/1630240211058')
      .end((err, res) => {
        expect(res).to.redirectTo('/');
        done();
      });
  });
});

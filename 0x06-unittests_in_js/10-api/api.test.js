const chai = require('chai');
const expect = chai.expect;
const request = require('request');

describe('test the API', () => {
  it('test the API with localost:7865', (done) => {
    request('http://localhost:7865', 'GET', (er, rs, bd) => {
      if (er) throw er;
      expect(rs.statusCode).to.equal(200);
      expect(bd).to.equal('Welcome to the payment system');
      done();
    });
  });

  it('test the API with cart/3', (done) => {
    request('http://localhost:7865/cart/3', 'GET', (er, rs, bd) => {
      if (er) throw er;
      expect(rs.statusCode).to.equal(200);
      expect(bd).to.equal('Payment methods for cart 3');
      done();
    });
  });

  describe('GET /available_payments', () => {
    it('should return the correct payment methods', (done) => {
      request('http://localhost:7865/available_payments', 'GET', (er, rs, bd) => {
        if (er) throw er;
        expect(rs.statusCode).to.equal(200);
        expect(JSON.parse(bd)).to.deep.equal({
          payment_methods: {
            credit_cards: true,
            paypal: false
          }
        });
        done();
      });
    });
  });

  describe('POST /login', () => {
    it('should return the welcome message with the provided username', (done) => {
      const username = 'Betty';
      request.post(
        {
          url: 'http://localhost:7865/login',
          body: { userName: username },
          json: true
        },
        (er, rs, bd) => {
          if (er) throw er;
          expect(rs.statusCode).to.equal(200);
          expect(bd).to.equal(`Welcome ${username}`);
          done();
        }
      );
    });
  });
});

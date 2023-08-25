const request = require("request");
const { expect } = require("chai");

describe("Cart page", function () {
    it("should return correct status code when :id is a number", function (done) {
        request.get("http://localhost:7865/cart/12", (error, response, body) => {
            expect(response.statusCode).to.equal(200);
            done();
        });
    });

    it("should return correct status code when :id is NOT a number (=> 404)", function (done) {
        request.get("http://localhost:7865/cart/hello", (error, response, body) => {
            expect(response.statusCode).to.equal(404);
            done();
        });
    });

});

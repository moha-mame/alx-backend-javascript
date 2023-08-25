const sinon = require("sinon");
const Utils = require("./utils");
const sendPaymentRequestToApi = require("./4-payment");

describe("sendPaymentRequestToApi function", function () {
    it("should correctly call Utils.calculateNumber with SUM", function () {
        const calculateNumberStub = sinon.stub(Utils, "calculateNumber").returns(10);
        const consoleSpy = sinon.spy(console, "log");

        sendPaymentRequestToApi(100, 20);

        sinon.assert.calledOnceWithExactly(calculateNumberStub, "SUM", 100, 20);
        sinon.assert.calledOnceWithExactly(consoleSpy, "The total is: 10");

        calculateNumberStub.restore();
        consoleSpy.restore();
    });
});

let expect = require("chai").expect;
let request = require("request");

describe("Status", function () {
  describe("API response", function () {
    it("status", function (done) {
      request(
        "http://localhost:3000/search",
        function (error, response, body, data) {
          expect(response).to.equal(data);
          done();
        }
      );
    });
  });
});

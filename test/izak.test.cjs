// Write a test function that starts the express server and test the api endpoint called izak using mocha and chai.

const chai = require("chai");
const chaiHttp = require("chai-http");
const app = require("../server.cjs");
const should = chai.should();

chai.use(chaiHttp);

describe("izak", () => {
    describe("/GET izak", () => {
        it("it should GET izak", (done) => {
        chai
            .request(app)
            .get("/izak")
            .end((err, res) => {
            res.should.have.status(200);
            res.body.should.be.a("object");
            done();
            });
        });
    });
    }
);

// Path: test/izak.test.js
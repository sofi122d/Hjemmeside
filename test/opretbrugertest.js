const {request, expect} = require("chai");
const chai = require("chai");
const chaiHttp = require("chai-http");
const app = require("../index");

chai.use(chaiHttp);
describe ('opretbruger', () => {
    describe("POST brugere/create", () => {
        it("opret ny bruger", (done) => {
            chai
            .request(app)
            .post("/brugere/create")
            .send({email: "opretbruger@gmail.com", password: "opretbruger"})
            .end((error, res) => {
                expect(res.status).to.equal(200);
                done();
            })
        })
    })
});
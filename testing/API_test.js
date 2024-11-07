const request = require('supertest')
const { expect } = require('chai')
const app = require('../src_API/app')


describe('API Testing', () => {
    it('Should return all items', (done) => {
        request(app)
            .get('/api/items')
            .end((err, res) => {
                expect(res.status).to.equal(200)
                expect(res.body).to.be.an('array')
                expect(res.body.length).to.be.at.least(1)
                done()
            })
    })
})
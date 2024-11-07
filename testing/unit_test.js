const { expect } = require('chai')
const { JSDOM } = require('jsdom')
const fs = require('fs')
const path = require('path')

describe('HTML Unit Testing', function() {

    let dom, document

    before(async function() {
        const html = fs.readFileSync(path.resolve(__dirname, '../index.html'), 'UTF-8')
        dom = new JSDOM(html)
        document = dom.window.document
    })

    it('should have a title', function() {
        const title = document.querySelector('title')
        expect(title.textContent).to.equal('Document')
    })

    it('should have three links in navbar', function() {
        const navlinks = document.querySelectorAll('nav ul li a')
        expect(navlinks).to.have.lengthOf(3)
    })
})
const { expect } = require('chai')
const { JSDOM } = require('jsdom')
const fs = require('fs')
const path = require('path')

describe('HTML Integration Testing', function() {
    let dom, document

    before(async function() {
        const html = fs.readFileSync(path.resolve(__dirname, '../index.html'), 'UTF-8')
        dom = new JSDOM(html)
        document = dom.window.document
    })

    it('Should check section with id hobbies is exist and had three list of hobbies', function() {
        const section = document.querySelector('#hobbies')
        expect(section).to.exist

        const h2 = document.querySelector('#hobbies h2')
        expect(h2.textContent).to.equal('Passatempos')
    })
})
const expect = require('expect')
const { generateMessage } = require('./message')

describe('generateMessage', () => {
    it ('should generate Message object', () => {
        const from = 'Jen'
        const text = 'Some message'
        const message = generateMessage(from, text)
        expect(message.createdAt).toBeA('number')
        expect(message).toInclude({ from, text })
    })
})
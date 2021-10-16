const index = require("./index")
// @ponicode
describe("index.handleTurn", () => {
    test("0", () => {
        let callFunction = () => {
            index.handleTurn(100)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let callFunction = () => {
            index.handleTurn(-100)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let callFunction = () => {
            index.handleTurn(-5.48)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("3", () => {
        let callFunction = () => {
            index.handleTurn(1)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("4", () => {
        let callFunction = () => {
            index.handleTurn(0)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("5", () => {
        let callFunction = () => {
            index.handleTurn(Infinity)
        }
    
        expect(callFunction).not.toThrow()
    })
})

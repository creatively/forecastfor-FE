import * as RandomKey from "../RandomKey"
// @ponicode
describe("When using the Random Key function", () => {
    const validate = (result: string) => result.length > 4

    test("it should return a string of at least 5 characters", () => {
        let result: string = RandomKey.default()
        expect(validate(result)).toBeTruthy()
    })
})

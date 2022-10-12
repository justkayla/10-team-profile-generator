const Engineer = require('../lib/engineer');

// Positive test
describe("Engineer", () => {
    describe("github", () => {
        it("should return the github input", () => {
            // Arrange: set up the needs of the test
            const emp = new Engineer("name", "id", "email", "github");
            // Act: actually run code being tested
            const result = emp.github
            // Assert: expectation for what should happen
            expect(result).toEqual("github")
        })
    })
})

// Is there a need for a negative or exception test in this case?
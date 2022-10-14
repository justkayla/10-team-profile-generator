const Intern = require('../lib/intern');

// Positive test
describe("Intern", () => {
    describe("getSchool", () => {
        it("should return the school input", () => {
            // Arrange: set up the needs of the test
            const emp = new Intern("name", "id", "email", "school");
            // Act: actually run code being tested
            const result = emp.getSchool()
            // Assert: expectation for what should happen
            expect(result).toEqual("school")
        })
    })
})

// Is there a need for a negative or exception test in this case?
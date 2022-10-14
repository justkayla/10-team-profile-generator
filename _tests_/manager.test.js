const Manager = require('../lib/manager');

// Positive test
describe("Manager", () => {
    describe("getOfficeNum", () => {
        it("should return the officenum input", () => {
            // Arrange: set up the needs of the test
            const emp = new Manager("name", "id", "email", "officenum");
            // Act: actually run code being tested
            const result = emp.getOfficeNum()
            // Assert: expectation for what should happen
            expect(result).toEqual("officenum")
        })
    })
})

// Is there a need for a negative or exception test in this case?
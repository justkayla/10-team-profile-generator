const Employee = require('../lib/employee');

// Positive test
describe("Employee", () => {
    describe("getName", () => {
        it("should return the name input", () => {
            // Arrange: set up the needs of the test
            const emp = new Employee("name", "id", "email");
            // Act: actually run code being tested
            const result = emp.getName()
            // Assert: expectation for what should happen
            expect(result).toEqual("name")
        })
    })
})

// Positive test
describe("Employee", () => {
    describe("getId", () => {
        it("should return the id input", () => {
            // Arrange: set up the needs of the test
            const emp = new Employee("name", "id", "email");
            // Act: actually run code being tested
            const result = emp.getId()
            // Assert: expectation for what should happen
            expect(result).toEqual("id")
        })
    })
})

// Positive test
describe("Employee", () => {
    describe("getEmail", () => {
        it("should return the email input", () => {
            // Arrange: set up the needs of the test
            const emp = new Employee("name", "id", "email");
            // Act: actually run code being tested
            const result = emp.getEmail()
            // Assert: expectation for what should happen
            expect(result).toEqual("email")
        })
    })
})

// Is there a need for a negative or exception test in this case?
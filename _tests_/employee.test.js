const Employee = require('../lib/employee');

// Positive test
describe("Employee", () => {
    describe("name", () => {
        it("should return the name input", () => {
            // Arrange: set up the needs of the test
            const emp = new Employee("name", "id", "email");
            // Act: actually run code being tested
            const result = emp.name
            // Assert: expectation for what should happen
            expect(result).toEqual("name")
        })
    })
})

// Positive test
describe("Employee", () => {
    describe("id", () => {
        it("should return the id input", () => {
            // Arrange: set up the needs of the test
            const emp = new Employee("name", "id", "email");
            // Act: actually run code being tested
            const result = emp.id
            // Assert: expectation for what should happen
            expect(result).toEqual("id")
        })
    })
})

// Positive test
describe("Employee", () => {
    describe("email", () => {
        it("should return the email input", () => {
            // Arrange: set up the needs of the test
            const emp = new Employee("name", "id", "email");
            // Act: actually run code being tested
            const result = emp.email
            // Assert: expectation for what should happen
            expect(result).toEqual("email")
        })
    })
})

// Is there a need for a negative or exception test in this case?
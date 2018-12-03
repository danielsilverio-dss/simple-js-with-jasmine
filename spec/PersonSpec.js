describe("Person should get older", function(){

    var person;

    beforeEach(function () {
        person = Person(20);
    })

    it("Should increase age by one", function () {
        person.getOlder();
        expect(person.getAge()).toEqual(21);
    })

    it("Should increase age by three", function () {
        person.getOlder();
        person.getOlder();
        person.getOlder();
        expect(person.getAge()).toEqual(23);
    })

});

describe("Person can't have a negative age", function () {
    
    it("Should throw error on trying to create a person with a negative age", function () {
        expect( function(){ new Person(-1) } ).toThrow(new Error("Invalid age!"))
    })

    it("Should not throw error on trying to create a person with a negative age", function () {
        expect( function(){ new Person(1) } ).not.toThrow(new Error("Invalid age!"))
    })

})
// Import class constructors
const Employee = require("../lib/Employee");
const Intern = require("../lib/Intern");


describe("Intern", () => {
  
  
  describe("Intern object instantiation", () => {
    it("Creates an object with name, id, email, and school properties", () => {
      const intern = new Intern("intern1", 1, "intern1@gmail.com", "University of Adelaide");

      expect(intern).toBeInstanceOf(Intern);
      expect(intern.name).toEqual("intern1");
      expect(intern.id).toEqual(1);
      expect(intern.email).toEqual("intern1@gmail.com");
      expect(intern.school).toEqual("University of Adelaide");
    });
  });

  
  describe("getName", () => {
    it("Should return the object's name property", () => {
      const intern = new Intern("intern1", 1, "intern1@gmail.com", "University of Adelaide");

      expect(intern.getName()).toEqual("intern1");
    });
  });

 
  describe("getId", () => {
    it("Should return the object's id property", () => {
      const intern = new Intern("intern1", 1, "intern1@gmail.com", "University of Adelaide");

      expect(intern.getID()).toEqual(1);
    });
  });

  
  describe("getEmail", () => {
    it("Should return the object's email property", () => {
      const intern = new Intern("intern1", 1, "intern1@gmail.com", "University of Adelaide");

      expect(intern.getEmail()).toEqual("intern1@gmail.com");
    });
  });

  describe("getSchool", () => {
    it("Should return the object's school property", () => {
      const intern = new Intern("intern1", 1, "intern1@gmail.com", "University of Adelaide");

      expect(intern.getSchool()).toEqual("University of Adelaide");
    });
  });

  
  describe("getRole", () => {
    it("Should return the string 'Intern", () => {
      const intern = new Intern("intern1", 1, "intern1@gmail.com", "University of Adelaide");

      expect(intern.getRole()).toEqual("Intern");
    });
  });
});

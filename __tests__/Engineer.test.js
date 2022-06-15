// Import class constructors
const Employee = require("../lib/Employee");
const Engineer = require("../lib/Engineer");


describe("Engineer", () => {
  
  
  describe("Engineer object instantiation", () => {
    it("Creates an object with name, id, email, and github properties", () => {
      const engineer = new Engineer("engineer1", 1, "engineer1@gmail.com", "engineer1git");

      expect(engineer).toBeInstanceOf(Engineer);
      expect(engineer.name).toEqual("engineer1");
      expect(engineer.id).toEqual(1);
      expect(engineer.email).toEqual("engineer1@gmail.com");
      expect(engineer.github).toEqual("engineer1git");
    });
  });

  
  describe("getName", () => {
    it("Should return the object's name property", () => {
      const engineer = new Engineer("engineer1", 1, "engineer1@gmail.com", "engineer1git");

      expect(engineer.getName()).toEqual("engineer1");
    });
  });

  
  describe("getId", () => {
    it("Should return the object's id property", () => {
      const engineer = new Engineer("engineer1", 1, "engineer1@gmail.com", "engineer1");

      expect(engineer.getID()).toEqual(1);
    });
  });

  
  describe("getEmail", () => {
    it("Should return the object's email property", () => {
      const engineer = new Engineer("engineer1", 1, "engineer1@gmail.com", "engineer1git");

      expect(engineer.getEmail()).toEqual("engineer1@gmail.com");
    });
  });

 
  describe("getGithub", () => {
    it("Should return the object's github property", () => {
      const engineer = new Engineer("engineer1", 1, "engineer1@gmail.com", "engineer1git");

      expect(engineer.getGithub()).toEqual("engineer1git");
    });
  });

  
  describe("getRole", () => {
    it("Should return the string 'Engineer", () => {
      const engineer = new Engineer("engineer1", 1, "engineer1@gmail.com", "engineer1git");

      expect(engineer.getRole()).toEqual("Engineer");
    });
  });
});
{
  // polymorphism -> means recreate same method of classes using same structure
  class Person {
    getSleep() {
      console.log("I am sleeping 8 hours per day");
    }
  }

  class Student extends Person {
    getSleep() {
      console.log("I am sleeping 7 hours per day");
    }
  }

  class Developer extends Person {
    getSleep(): void {
      console.log("I am sleeping 6 hours per day");
    }
  }
}

{
  class Person {
    constructor(
      public name: string,
      public age: number,
      private contactNo: string
    ) {}

    getPerson() {
      return { name: this.name, age: this.age, contactNo: this.contactNo };
    }
  }

  const rakib = new Person("Rakib", 22, "0157");
  const person = rakib.getPerson();
  console.log(person);
}

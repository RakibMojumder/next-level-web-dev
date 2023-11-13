{
  class Parent {
    constructor(
      public name: string,
      public age: number,
      public address: string
    ) {}

    getName() {
      console.log(this.name);
    }
  }

  class Child extends Parent {
    constructor(
      public name: string,
      public age: number,
      public address: string
    ) {
      super(name, age, address);
    }
  }

  const Baba = new Parent("Abdur Razzak", 23, "Hajiganj");
  const chele = new Child("Sakib", 1, "Dhaka");
  chele.getName();
}

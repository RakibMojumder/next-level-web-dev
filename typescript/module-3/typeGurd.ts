{
  // typeof => type guard
  type AlphaNumeric = number | string;
  const add = (a: AlphaNumeric, b: AlphaNumeric): AlphaNumeric => {
    if (typeof a === "number" && typeof b === "number") {
      return a + b;
    } else {
      return a.toString() + b.toString();
    }
  };

  // in => type guard

  interface User {
    name: string;
  }

  interface AdminUser {
    name: string;
    role: "Admin";
  }

  const getUser = (user: User | AdminUser) => {
    if ("role" in user) {
      return user.role;
    } else {
      return user.name;
    }
  };

  // instanceof guard

  class Person {
    name: string;
    age: number;

    constructor(name: string, age: number) {
      this.name = name;
      this.age = age;
    }

    getPersonName() {
      return `The person name is ${this.name}`;
    }
  }

  class Teacher extends Person {
    profession: string;
    constructor(name: string, age: number, profession: string) {
      super(name, age);
      this.profession = profession;
    }

    getSalary() {
      return `The salary is 45000`;
    }
  }

  class Student extends Person {
    profession: string;
    constructor(name: string, age: number, profession: string) {
      super(name, age);
      this.profession = profession;
    }

    getFee() {
      return `The fee is 4500`;
    }
  }

  const student = new Student("Abdur Rahim", 12, "student");
  const teacher = new Teacher("Arif Imam", 34, "Teacher");

  const isStudent = (person: Person): person is Student => {
    return person instanceof Student;
  };

  const isTeacher = (person: Person): person is Teacher => {
    return person instanceof Teacher;
  };

  const getPerson = (person: Person) => {
    if (isStudent(person)) {
      person.getFee();
    } else if (isTeacher(person)) {
      person.getSalary();
    } else {
      return `This is unknown person`;
    }
  };
}

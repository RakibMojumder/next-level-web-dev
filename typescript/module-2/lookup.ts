{
  // lookup types
  type Person = {
    name: string;
    age: number;
  };

  type Name = Person["name"]; // lookup type
  type age = Person["age"]; // lookup type
}

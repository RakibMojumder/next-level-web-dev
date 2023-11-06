{
  interface smartWatch {
    brand: string;
    price: number;
  }

  interface extendedSmartWatch extends smartWatch {
    releaseYear: number;
  }

  interface Developer<T> {
    name: string;
    computer: {
      brand: string;
      price: number;
    };
    smartWatch: T;
  }

  const developer: Developer<extendedSmartWatch> = {
    name: "Mr. X",
    computer: {
      brand: "Dell",
      price: 23402,
    },
    smartWatch: {
      brand: "Nexus",
      price: 20000,
      releaseYear: 2021,
    },
  };
}

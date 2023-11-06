{
  // type assertion / type narrowing = means developer explicitly define the type

  const kgToGram = (value: string | number): string | number | undefined => {
    if (typeof value === "string") {
      return `Converted value is ${parseFloat(value) * 1000}`;
    }

    if (typeof value === "number") {
      return value * 1000;
    }
  };

  const result = kgToGram(1000); // without declaring type assertion
  const result1 = kgToGram(1000) as number; // with declare type assertion

  const result3 = kgToGram("500");
  const result4 = kgToGram("500") as string;
}

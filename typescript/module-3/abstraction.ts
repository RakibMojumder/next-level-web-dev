{
  // abstraction = assume something. Likes guess whole stroy based on listening or reading a theme of stroy.
  // we can do abstraction using 2 method. 1 -> interface    2 -> abstraction

  // abstraction using interface
  interface Vehicle {
    startEngine(): void;
    stopEngine(): void;
    move(): void;
  }

  class Car implements Vehicle {
    startEngine(): void {
      console.log("Engine start");
    }

    stopEngine(): void {
      console.log("Engine stop");
    }

    move(): void {
      console.log("Engine moving");
    }
  }

  // abstraction using abstract
  abstract class Machine {
    abstract startEngine(): void;
    abstract stopEngine(): void;
  }

  class Machine1 extends Machine {
    startEngine(): void {
      console.log("Engine started");
    }

    stopEngine(): void {
      console.log("Engine stop");
    }
  }
}

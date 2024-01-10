function ClassDecorator(constructor: any) {
  console.log("Class Decorator ---------------");
  console.log(constructor);
}

@ClassDecorator
class Decorators {
  phoneName: string;
  constructor(p: string) {
    this.phoneName = p;
  }
}

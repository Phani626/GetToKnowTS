function FunctionDecorator(
  target: any,
  name: string,
  descriptor: PropertyDescriptor
) {
  console.log("Function Decorator ---------------");
  console.log(target);
  console.log(name);
  console.log(descriptor);
}

class DecoratorsFn {
  private _product: string;

  constructor(p: string) {
    this._product = p;
  }

  @FunctionDecorator
  printProduct() {
    console.log("The Product name is : ", this._product);
  }
}

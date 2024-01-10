function AccessorDecorator(
  target: any,
  name: string | symbol,
  descriptor: PropertyDescriptor
) {
  console.log("Accessor Decorator ----------------");
  console.log(target);
  console.log(name);
  console.log(descriptor);
}

class DecoratorsAc {
  private _product: string;

  constructor(p: string) {
    this._product = p;
  }

  @AccessorDecorator
  set setProduct(val: string) {
    this._product = val;
  }

  @AccessorDecorator
  get getProduct() {
    return this._product;
  }

//   get setProduct() {
//     return this._product;
//   }
}

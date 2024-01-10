function PropertyDecorator(target: any, propertyName: string | symbol) {
  console.log( "Property Decorator -----------------");
  console.log(target);
  console.log(propertyName);
}

class DecoratorPro {
  @PropertyDecorator
  private _title: string;
  @PropertyDecorator
  private _author: string;
  @PropertyDecorator
  private _price: number;

  constructor(t: string, a: string, p: number) {
    this._author = a;
    this._price = p;
    this._title = t;
  }
}

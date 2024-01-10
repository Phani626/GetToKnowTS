function ArgumentsDecorator(
  target: any,
  propertyName: string | symbol,
  position: number
) {
  console.log("Arguments Decorator -----------------");
  console.log(target);
  console.log(propertyName);
  console.log(position);
}

class DecoratorArgs {
  private _title: string;
  private _author: string;
  private _price: number;

  constructor(t: string, a: string, p: number) {
    this._author = a;
    this._price = p;
    this._title = t;
  }

  printBookDetails(
    @ArgumentsDecorator bookName: string,
    @ArgumentsDecorator publishedDate: Date
  ) {
    console.log("The Book name is: ", bookName);
    console.log("Published On: ", publishedDate);
  }
}



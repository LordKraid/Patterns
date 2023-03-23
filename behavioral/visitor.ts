interface Phone {
  accept(visitor: PhoneVisitor): void;
}

class AndroidPhone implements Phone {
  constructor(public model: string, public price: number) {}

  accept(visitor: PhoneVisitor) {
    visitor.visitAndroidPhone(this);
  }
}

class iPhone implements Phone {
  constructor(public model: string, public price: number) {}

  accept(visitor: PhoneVisitor) {
    visitor.visitiPhone(this);
  }
}

interface PhoneVisitor {
  visitAndroidPhone(androidPhone: AndroidPhone): void;
  visitiPhone(iPhone: iPhone): void;
}

class PhonePriceVisitor implements PhoneVisitor {
  visitAndroidPhone(androidPhone: AndroidPhone) {
    console.log(`Price of ${androidPhone.model} is ${androidPhone.price}`);
  }

  visitiPhone(iPhone: iPhone) {
    console.log(`Price of ${iPhone.model} is ${iPhone.price}`);
  }
}

const phones: Phone[] = [
  new AndroidPhone("Samsung Galaxy S21", 800),
  new iPhone("iPhone 13", 1000),
  new iPhone("iPhone 12", 700),
  new AndroidPhone("OnePlus 9 Pro", 900)
];

const priceVisitor = new PhonePriceVisitor();

phones.forEach(phone => phone.accept(priceVisitor));
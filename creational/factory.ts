class Phone {
    model: string;
    os: string;
  
    constructor(model: string, os: string) {
      this.model = model;
      this.os = os;
    }
  
    getInfo(): void {
      console.log(`Model: ${this.model}, os: ${this.os}`);
    }
  }
  
  class ApplePhone extends Phone {
    constructor(name: string) {
      super(name, 'iOS');
    }
  }
  
  class XiaomiPhone extends Phone {
    constructor(name: string) {
      super(name, 'Android');
    }
  }
  
  class PhoneFactory {
    create(phone: string, name: string): Phone | undefined {
      if (phone === 'apple') {
        return new ApplePhone(name);
      } else if (phone === 'xiaomi') {
        return new XiaomiPhone(name);
      } else {
        console.log('Invalid phone brand!');
        return undefined;
      }
    }
  }
  
  const phoneFactory = new PhoneFactory();
  
  const iPhone12 = phoneFactory.create('apple', 'iPhone12');
  const xiaomiRedmi12 = phoneFactory.create('xiaomi', 'Redmi12');
  
  if (iPhone12) {
    iPhone12.getInfo();
  }
  
  if (xiaomiRedmi12) {
    xiaomiRedmi12.getInfo();
  }
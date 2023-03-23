interface CallStrategy {
    call(number: string): string;
  }
  
  class Phone {
    model: string;
    brand: string;
    price: number;
    callStrategy: CallStrategy | null;
  
    constructor(model: string, brand: string, price: number) {
      this.model = model;
      this.brand = brand;
      this.price = price;
      this.callStrategy = null;
    }
    
    setCallStrategy(callStrategy: CallStrategy) {
      this.callStrategy = callStrategy;
    }
    
    call(number: string) {
      if (!this.callStrategy) {
        throw new Error('Call strategy not set.');
      }
      return this.callStrategy.call(number);
    }
  }
  
  class InternationalCall implements CallStrategy {
    call(number: string) {
      return `Calling ${number} from ${this.brand} ${this.model} at international rate.`;
    }
  }
  
  class LocalCall implements CallStrategy {
    call(number: string) {
      return `Calling ${number} from ${this.brand} ${this.model} at local rate.`;
    }
  }
  
  // Пример использования:
  
  const iPhone = new Phone('iPhone 13', 'Apple', 999);
  
  const internationalCall = new InternationalCall();
  const localCall = new LocalCall();
  
  iPhone.setCallStrategy(internationalCall);
  console.log(iPhone.call('+1234567890')); // Вывод: "Calling +1234567890 from Apple iPhone 13 at international rate."
  
  iPhone.setCallStrategy(localCall);
  console.log(iPhone.call('123-456-7890')); // Вывод: "Calling 123-456-7890 from Apple iPhone 13 at local rate."
  
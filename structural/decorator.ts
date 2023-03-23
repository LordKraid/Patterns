class Phone {
  brand: string;
  model: string;
  status: string;

  constructor(brand: string, model: string) {
    this.brand = brand;
    this.model = model;
    this.status = 'off';
  }
  
  turnOn(): void {
    this.status = 'on';
    console.log(`${this.brand} ${this.model} is turned on.`);
  }
  
  turnOff(): void {
    this.status = 'off';
    console.log(`${this.brand} ${this.model} is turned off.`);
  }
  
  call(number: string): void {
    console.log(`Calling ${number} from ${this.brand} ${this.model}.`);
  }
}

function checkStatus(phone: Phone): Phone {
  const callFn = phone.call.bind(phone);

  phone.call = function(number: string): void {
      if (this.status === 'off') {
          console.log(`${this.brand} ${this.model} is turned off. Cannot make a call.`);
      } 
      else {
          callFn(number);
      }
  }

  return phone;
}

const phone: Phone = new Phone('Apple', 'iPhone 13');
checkStatus(phone);

phone.call('123-456-7890');
phone.turnOn();
phone.call('123-456-7890');

class Phone {
  name: string;
  price: number;

  constructor(name: string, price: number) {
    this.name = name;
    this.price = price;
  }

  displayPrice(): void {
    console.log(`${this.name} - $${this.price}`);
  }
}

class PhoneDisplayCommand {
  phone: Phone;

  constructor(phone: Phone) {
    this.phone = phone;
  }

  execute(): void {
    this.phone.displayPrice();
  }
}

class PhoneDisplayInvoker {
  commands: PhoneDisplayCommand[];

  constructor() {
    this.commands = [];
  }

  addCommand(command: PhoneDisplayCommand): void {
    this.commands.push(command);
  }

  executeCommands(): void {
    this.commands.forEach(command => command.execute());
  }
}

const iPhone = new Phone('iPhone 13 Pro', 999);
const samsung = new Phone('Samsung Galaxy S21', 799);
const googlePixel = new Phone('Google Pixel 6', 599);

const iPhoneCommand = new PhoneDisplayCommand(iPhone);
const samsungCommand = new PhoneDisplayCommand(samsung);
const googlePixelCommand = new PhoneDisplayCommand(googlePixel);

const displayInvoker = new PhoneDisplayInvoker();

displayInvoker.addCommand(iPhoneCommand);
displayInvoker.addCommand(samsungCommand);
displayInvoker.addCommand(googlePixelCommand);

displayInvoker.executeCommands();

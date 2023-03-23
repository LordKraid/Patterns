interface OperatingSystem {
  call(number: string): void;
  sendMessage(number: string, message: string): void;
}

class Phone {
  model: string;
  os: OperatingSystem;

  constructor(model: string, os: OperatingSystem) {
    this.model = model;
    this.os = os;
  }

  call(number: string) {
    this.os.call(number);
  }

  sendMessage(number: string, message: string) {
    this.os.sendMessage(number, message);
  }
}

class Android implements OperatingSystem {
  call(number: string) {
    console.log(`Вызываем номер ${number} на Android`);
  }

  sendMessage(number: string, message: string) {
    console.log(`Отправляем сообщение "${message}" на номер ${number} через Android`);
  }
}

class IOS implements OperatingSystem {
  call(number: string) {
    console.log(`Вызываем номер ${number} на iOS`);
  }

  sendMessage(number: string, message: string) {
    console.log(`Отправляем сообщение "${message}" на номер ${number} через iOS`);
  }
}

const androidPhone = new Phone('Xiaomi', new Android());
androidPhone.call('123-45-67');
androidPhone.sendMessage('123-45-67', 'Привет, как дела?');

const iosPhone = new Phone('iPhone', new IOS());
iosPhone.call('123-45-67');
iosPhone.sendMessage('123-45-67', 'Привет, как дела?');

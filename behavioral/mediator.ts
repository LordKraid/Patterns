class Phone {
  mediator: Mediator;

  constructor(mediator: Mediator) {
    this.mediator = mediator;
  }

  send(message: string, to: Phone) {
    console.log(`Сообщение "${message}" отправлено`);
    this.mediator.notify(this, message, to);
  }

  receive(message: string, from: Phone) {
    console.log(`Сообщение "${message}" получено`);
  }
}

class Mediator {
  phones: Phone[];

  constructor() {
    this.phones = [];
  }

  addPhone(phone: Phone) {
    this.phones.push(phone);
  }

  notify(sender: Phone, message: string, to: Phone) {
    this.phones.forEach((phone) => {
      if (phone !== sender && phone instanceof Phone) {
        phone.receive(message, sender);
      }
    });
  }
}

const mediator = new Mediator();

const phone1 = new Phone(mediator);
const phone2 = new Phone(mediator);

mediator.addPhone(phone1);
mediator.addPhone(phone2);

phone1.send("Привет", phone2);
phone2.send("Как дела?", phone1);

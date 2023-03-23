interface Contact {
    name: string;
    number: string;
  }
  
  interface Message {
    to: string;
    text: string;
  }
  
  class Phone {
    private contacts: Contact[];
    private messages: Message[];
  
    constructor() {
      this.contacts = [];
      this.messages = [];
    }
  
    addContact(name: string, number: string): void {
      this.contacts.push({ name, number });
      console.log("Котнакт успешно добавлен!");
    }
  
    sendMessage(number: string, text: string): void {
      const contact = this.contacts.find((contact) => contact.number === number);
      if (!contact) {
        console.log("Контакт не найден");
      }
      this.messages.push({ to: contact.name, text });
      console.log("Сообщение успешно отправленно!");
    }
  
    getMessages(): Message[] {
      return this.messages;
    }
  }
  
  class PhoneProxy {
    private phone: Phone;
  
    constructor(phone: Phone) {
      this.phone = phone;
    }
  
    addContact(name: string, number: string, isAdmin: boolean): void {
      if (isAdmin) {
        this.phone.addContact(name, number);
      } else {
        console.log("Недостаточно прав для добавления контакта");
      }
    }
  
    sendMessage(number: string, text: string, isLoggedIn: boolean): void {
      if (isLoggedIn) {
        this.phone.sendMessage(number, text);
      } else {
        console.log("Необходимо войти в систему для отправки сообщения");
      }
    }
  
    getMessages(isAdmin: boolean): Message[] | void {
      if (isAdmin) {
        return this.phone.getMessages();
      } else {
        console.log("Недостаточно прав для получения списка сообщений");
      }
    }
  }
  
  const phone = new Phone();
  const phoneProxy = new PhoneProxy(phone);
  
  phoneProxy.addContact("Alice", "+123456789", true);
  phoneProxy.sendMessage("+123456789", "Привет, Алиса!", true);
  console.log(phoneProxy.getMessages(true));
  
  console.log("");
  
  phoneProxy.addContact("Bob", "+987654321", false);
  phoneProxy.sendMessage("+987654321", "Привет, Боб!", false);
  phoneProxy.getMessages(false);
  
class Phone {
    model: string;
    color: string;
    memory: string;
  
    constructor(model: string, color: string, memory: string) {
      this.model = model;
      this.color = color;
      this.memory = memory;
    }
  
    saveState(): PhoneMemento {
      return new PhoneMemento(this.model, this.color, this.memory);
    }
  
    restoreState(memento: PhoneMemento) {
      this.model = memento.model;
      this.color = memento.color;
      this.memory = memento.memory;
    }
  }
  
  class PhoneMemento {
    model: string;
    color: string;
    memory: string;
  
    constructor(model: string, color: string, memory: string) {
      this.model = model;
      this.color = color;
      this.memory = memory;
    }
  }
  
  const phone = new Phone("iPhone", "black", "64 GB");
  console.log(phone);
  
  const phoneMemento = phone.saveState();
  
  phone.model = "Samsung";
  phone.color = "white";
  phone.memory = "128 GB";
  console.log(phone);
  
  phone.restoreState(phoneMemento);
  console.log(phone);
  
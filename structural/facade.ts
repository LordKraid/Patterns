class Phone {
    powerOn: boolean;
    currentApp: string | null;
    currentCall: string | null;
  
    constructor() {
      this.powerOn = false;
      this.currentApp = null;
      this.currentCall = null;
    }
  
    turnOn(): void {
      this.powerOn = true;
      console.log("Phone turned on.");
    }
  
    turnOff(): void {
      this.powerOn = false;
      console.log("Phone turned off.");
    }
  
    makeCall(number: string): void {
      if (this.powerOn) {
        this.currentCall = number;
        console.log("Calling", number);
      } else {
        console.log("Phone is off.");
      }
    }
  
    sendMessage(number: string, message: string): void {
      if (this.powerOn) {
        console.log("Sending message to", number, ":", message);
      } else {
        console.log("Phone is off.");
      }
    }
  
    openApp(appName: string): void {
      if (this.powerOn) {
        this.currentApp = appName;
        console.log("Opened", appName, "app.");
      } else {
        console.log("Phone is off.");
      }
    }
  }
  
  class PhoneFacade {
    phone: Phone;
  
    constructor(phone: Phone) {
      this.phone = phone;
    }
  
    turnOn(): void {
      this.phone.turnOn();
      console.log("Welcome to your phone!");
    }
  
    turnOff(): void {
      this.phone.turnOff();
    }
  
    makeCall(number: string): void {
      this.phone.makeCall(number);
    }
  
    sendMessage(number: string, message: string): void {
      this.phone.sendMessage(number, message);
    }
  
    openApp(appName: string): void {
      this.phone.openApp(appName);
    }
  }
  
const phone = new Phone();
const phoneFacade = new PhoneFacade(phone);

phoneFacade.turnOn();
phoneFacade.makeCall("123-456-7890");
phoneFacade.sendMessage("123-456-7890", "Привет! Как дела?");
phoneFacade.openApp("Камера");
phoneFacade.turnOff();
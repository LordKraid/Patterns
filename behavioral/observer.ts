interface Observer {
    update(): void;
  }
  
  interface Subject {
    registerObserver(o: Observer): void;
    removeObserver(o: Observer): void;
    notifyObservers(): void;
  }
  
  class Phone implements Subject {
    private observers: Observer[] = [];
    private battery: number = 100;
    
    registerObserver(o: Observer): void {
      this.observers.push(o);
    }
    
    removeObserver(o: Observer): void {
      const observerIndex = this.observers.indexOf(o);
      if (observerIndex !== -1) {
        this.observers.splice(observerIndex, 1);
      }
    }
    
    notifyObservers(): void {
      this.observers.forEach(observer => observer.update());
    }
    
    getBattery(): number {
      return this.battery;
    }
    
    setBattery(battery: number): void {
      this.battery = battery;
      this.notifyObservers();
    }
  }
  
  class BatteryIndicator implements Observer {
    private phone: Phone;
    
    constructor(phone: Phone) {
      this.phone = phone;
      this.phone.registerObserver(this);
    }
    
    update(): void {
      const battery = this.phone.getBattery();
      console.log(`Battery is now at ${battery}%`);
    }
  }
  
  class LowBatteryAlert implements Observer {
    private phone: Phone;
    
    constructor(phone: Phone) {
      this.phone = phone;
      this.phone.registerObserver(this);
    }
    
    update(): void {
      const battery = this.phone.getBattery();
      if (battery < 10) {
        console.log('Low battery alert!');
      }
    }
  }
  
  const phone = new Phone();
  const batteryIndicator = new BatteryIndicator(phone);
  const lowBatteryAlert = new LowBatteryAlert(phone);
  
  phone.setBattery(80);
  phone.setBattery(5);
  
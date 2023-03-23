abstract class Phone {
    name: string;
    price: number;
  
    constructor(name: string, price: number) {
      this.name = name;
      this.price = price;
    }
  
    displayInfo(): void {
      console.log(`Name: ${this.name}`);
      console.log(`Price: ${this.price}`);
      this.addFeatures();
      console.log('');
    }
  
    abstract addFeatures(): void;
  }
  
  class AndroidPhone extends Phone {
    addFeatures(): void {
      console.log('Operating system: Android');
      console.log('App store: Google Play');
    }
  }
  
  class iPhone extends Phone {
    addFeatures(): void {
      console.log('Operating system: iOS');
      console.log('App store: App Store');
    }
  }
  
  const galaxy = new AndroidPhone('Galaxy S21', 1000);
  galaxy.displayInfo();
  
  const iphoneX = new iPhone('iPhone X', 1200);
  iphoneX.displayInfo();
  
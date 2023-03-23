interface PhoneState {
    call(): void;
    text(): void;
  }
  
  class LockedPhoneState implements PhoneState {
    call(): void {
      console.log("Cannot make a call - phone is locked");
    }
    text(): void {
      console.log("Cannot send a text - phone is locked");
    }
  }
  
  class UnlockedPhoneState implements PhoneState {
    call(): void {
      console.log("Dialing...");
    }
    text(): void {
      console.log("Sending a text...");
    }
  }
  
  class Phone {
    private state: PhoneState;
    constructor() {
      this.state = new LockedPhoneState();
    }
    public lock(): void {
      console.log("Phone is locked");
      this.state = new LockedPhoneState();
    }
    public unlock(): void {
      console.log("Phone is unlocked");
      this.state = new UnlockedPhoneState();
    }
    public call(): void {
      this.state.call();
    }
    public text(): void {
      this.state.text();
    }
  }
  
  const phone = new Phone();
  phone.call(); // Cannot make a call - phone is locked
  phone.text(); // Cannot send a text - phone is locked
  phone.unlock(); // Phone is unlocked
  phone.call(); // Dialing...
  phone.text(); // Sending a text...
  phone.lock(); // Phone is locked
  phone.call(); // Cannot make a call - phone is locked
  phone.text(); // Cannot send a text - phone is locked
  
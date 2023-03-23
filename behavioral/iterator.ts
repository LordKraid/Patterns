class PhoneCollection {
  private phones: string[];

  constructor() {
    this.phones = [];
  }

  public addPhone(phone: string): void {
    this.phones.push(phone);
  }

  public removePhone(phone: string): void {
    const phoneIndex = this.phones.indexOf(phone);
    if (phoneIndex >= 0) {
      this.phones.splice(phoneIndex, 1);
    }
  }

  public createIterator(): PhoneIterator {
    return new PhoneIterator(this.phones);
  }
}

class PhoneIterator {
  private phones: string[];
  private currentIndex: number;

  constructor(phones: string[]) {
    this.phones = phones;
    this.currentIndex = 0;
  }

  public hasNext(): boolean {
    return this.currentIndex < this.phones.length;
  }

  public next(): string {
    const phone = this.phones[this.currentIndex];
    this.currentIndex++;
    return phone;
  }
}

const phoneCollection = new PhoneCollection();

phoneCollection.addPhone("iPhone");
phoneCollection.addPhone("Samsung");
phoneCollection.addPhone("Oppo");
phoneCollection.addPhone("Xiaomi");

const phoneIterator = phoneCollection.createIterator();

while (phoneIterator.hasNext()) {
  console.log(phoneIterator.next());
}

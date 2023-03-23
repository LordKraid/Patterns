class Phone {
  private model: string;
  private manufacturer: string;

  constructor(model: string, manufacturer: string) {
    this.model = model;
    this.manufacturer = manufacturer;
  }

  getModel(): string {
    return this.model;
  }

  getManufacturer(): string {
    return this.manufacturer;
  }
}

class PhoneAdapter {
  private phone: Phone;

  constructor(phone: Phone) {
    this.phone = phone;
  }

  getName(): string {
    return this.phone.getModel();
  }

  getBrand(): string {
    return this.phone.getManufacturer();
  }
}

const phone: Phone = new Phone('iPhone', 'Apple');
const phoneAdapter: PhoneAdapter = new PhoneAdapter(phone);

console.log(phoneAdapter.getName());
console.log(phoneAdapter.getBrand());

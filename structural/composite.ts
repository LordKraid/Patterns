class PhoneComponent {
    name: string;
    price: number;

    constructor(name: string, price: number) {
        this.name = name;
        this.price = price;
    }

    getPrice(): number {
        return this.price;
    }

    getName(): string {
        return this.name;
    }
}

class PhoneModel {
    name: string;
    components: PhoneComponent[];

    constructor(name: string) {
        this.name = name;
        this.components = [];
    }

    add(component: PhoneComponent): void {
        this.components.push(component);
    }

    remove(component: PhoneComponent): void {
        const componentIndex = this.components.indexOf(component);
        this.components.splice(componentIndex, 1);
    }

    getPrice(): number {
        let totalPrice = 0;
        for (let component of this.components) {
            totalPrice += component.getPrice();
        }
        return totalPrice;
    }

    getModelName(): string {
        return this.name;
    }
}

class PhoneCompany {
    name: string;
    models: PhoneModel[];

    constructor(name: string) {
        this.name = name;
        this.models = [];
    }

    add(model: PhoneModel): void {
        this.models.push(model);
    }

    remove(model: PhoneModel): void {
        const modelIndex = this.models.indexOf(model);
        this.models.splice(modelIndex, 1);
    }

    getPrice(): number {
        let totalPrice = 0;
        for (let model of this.models) {
            totalPrice += model.getPrice();
        }
        return totalPrice;
    }

    getCompanyName(): string {
        return this.name;
    }
}

const screen = new PhoneComponent("Screen", 100);
const battery = new PhoneComponent("Battery", 50);
const camera = new PhoneComponent("Camera", 80);
const cpu = new PhoneComponent("CPU", 120);
const ram = new PhoneComponent("RAM", 70);

const iphoneX = new PhoneModel("iPhone X");
iphoneX.add(screen);
iphoneX.add(battery);
iphoneX.add(camera);
iphoneX.add(cpu);
iphoneX.add(ram);

const samsungS20 = new PhoneModel("Samsung S20");
samsungS20.add(screen);
samsungS20.add(battery);
samsungS20.add(camera);
samsungS20.add(cpu);
samsungS20.add(ram);

const apple = new PhoneCompany("Apple");
apple.add(iphoneX);

const samsung = new PhoneCompany("Samsung");
samsung.add(samsungS20);

console.log(iphoneX.getModelName() + " price: $" + iphoneX.getPrice());
console.log(samsungS20.getModelName() + " price: $" + samsungS20.getPrice());

console.log(apple.getCompanyName() + " price: $" + apple.getPrice());
console.log(samsung.getCompanyName() + " price: $" + samsung.getPrice());

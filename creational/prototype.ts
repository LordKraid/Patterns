class PhonePrototype {
    model: string;
    os: string;
    color: string;

    constructor(model: string, os: string, color: string) {
        this.model = model;
        this.os = os;
        this.color = color;
    }

    getInfo(): void {
        console.log(`Model: ${this.model}, os: ${this.os}, color: ${this.color}`);
    }

    clone(): PhonePrototype {
        return Object.create(this);
    }
}

const iPhone12: PhonePrototype = new PhonePrototype('iPhone12', 'iOS', 'red');
iPhone12.getInfo();

const iPhone13: PhonePrototype = iPhone12.clone();
iPhone13.model = 'iPhone13';
iPhone13.getInfo();

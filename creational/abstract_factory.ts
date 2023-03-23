abstract class Phone {
    public abstract getBrand(): string;
    public abstract getModel(): string;
    public abstract getOS(): string;
}

abstract class PhoneFactory {
    public abstract createPhone(): Phone;
}

class SamsungPhone extends Phone {
    public getBrand(): string {
    return 'Samsung';
    }

    public getModel(): string {
    return 'Galaxy S21';
    }

    public getOS(): string {
    return 'Android 11';
    }
}

class ApplePhone extends Phone {
    public getBrand(): string {
    return 'Apple';
    }

    public getModel(): string {
    return 'iPhone 12';
    }

    public getOS(): string {
    return 'iOS 14';
    }
}

class SamsungFactory extends PhoneFactory {
    public createPhone(): Phone {
    return new SamsungPhone();
    }
}

class AppleFactory extends PhoneFactory {
    public createPhone(): Phone {
    return new ApplePhone();
    }
}

const samsungFactory: PhoneFactory = new SamsungFactory();
const appleFactory: PhoneFactory = new AppleFactory();

const samsungPhone: Phone = samsungFactory.createPhone();
console.log(samsungPhone.getBrand());
console.log(samsungPhone.getModel());
console.log(samsungPhone.getOS());

const applePhone: Phone = appleFactory.createPhone();
console.log(applePhone.getBrand());
console.log(applePhone.getModel());
console.log(applePhone.getOS());
var Phone = /** @class */ (function () {
    function Phone() {
        this.contacts = [];
        this.messages = [];
    }
    Phone.prototype.addContact = function (name, number) {
        this.contacts.push({ name: name, number: number });
        console.log("Котнакт успешно добавлен!");
    };
    Phone.prototype.sendMessage = function (number, text) {
        var contact = this.contacts.find(function (contact) { return contact.number === number; });
        if (!contact) {
            console.log("Контакт не найден");
        }
        this.messages.push({ to: contact.name, text: text });
        console.log("Сообщение успешно отправленно!");
    };
    Phone.prototype.getMessages = function () {
        return this.messages;
    };
    return Phone;
}());
var PhoneProxy = /** @class */ (function () {
    function PhoneProxy(phone) {
        this.phone = phone;
    }
    PhoneProxy.prototype.addContact = function (name, number, isAdmin) {
        if (isAdmin) {
            this.phone.addContact(name, number);
        }
        else {
            console.log("Недостаточно прав для добавления контакта");
        }
    };
    PhoneProxy.prototype.sendMessage = function (number, text, isLoggedIn) {
        if (isLoggedIn) {
            this.phone.sendMessage(number, text);
        }
        else {
            console.log("Необходимо войти в систему для отправки сообщения");
        }
    };
    PhoneProxy.prototype.getMessages = function (isAdmin) {
        if (isAdmin) {
            return this.phone.getMessages();
        }
        else {
            console.log("Недостаточно прав для получения списка сообщений");
        }
    };
    return PhoneProxy;
}());
var phone = new Phone();
var phoneProxy = new PhoneProxy(phone);
phoneProxy.addContact("Alice", "+123456789", true);
phoneProxy.sendMessage("+123456789", "Привет, Алиса!", true);
console.log(phoneProxy.getMessages(true));
console.log("");
phoneProxy.addContact("Bob", "+987654321", false);
phoneProxy.sendMessage("+987654321", "Привет, Боб!", false);
phoneProxy.getMessages(false);

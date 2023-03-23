interface Order {
  package: boolean;
  box?: string;
  payment?: number;
}

class OrderBuilder {
  private order: Order;

  constructor() {
    this.order = {};
  }

  public addPackage(): this {
    this.order.package = true;
    return this;
  }

  public addBox(type: string): this {
    this.order.box = type;
    return this;
  }

  public addPayment(count: number): this {
    this.order.payment = count;
    return this;
  }

  public build(): Order {
    return this.order;
  }
}

const order: Order = new OrderBuilder()
  .addPackage()
  .addBox('large')
  .addPayment(2500)
  .build();

console.log(order);

class Flyweight {
  private resources: {[key: string]: string} = {};

  public getResource(key: string): string {
    if (this.resources[key]) {
      return this.resources[key];
    } else {
      this.resources[key] = "some resource";
      return this.resources[key];
    }
  }

  public getResourcesCount(): number {
    let count = 0;
    for (const key in this.resources) {
      if (this.resources.hasOwnProperty(key)) {
        count++;
      }
    }
    return count;
  }
}

const flyweight = new Flyweight();

console.log(flyweight.getResource("key1"));
console.log(flyweight.getResource("key1"));
console.log(flyweight.getResourcesCount());

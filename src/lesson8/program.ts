interface ServiceCollectionInterface {
  addSingleton(): void
  addTransient(): void
}


class ServiceCollection implements ServiceCollectionInterface {
  addSingleton(): void {}
  addTransient(): void {}
}

class ServiceProvide {
}


class Program {

  constructor() {
    this.startUp()
  }

  private startUp(): void {
    // start up code
    const serviceCollection = new ServiceCollection()
  }
}


const p = new Program()
// p.startUp()


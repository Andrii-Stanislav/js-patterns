class Employee {
  constructor(name, salary) {
    this.name = name
    this.salary = salary
  }

  responsibilities() {}

  work() {
    return `${this.name} виконує ${this.responsibilities()}`
  }

  getPaid() {
    return `${this.name} отримує ЗП ${this.salary}`
  }
}

class Developer extends Employee {
  constructor(name, salary) {
    super(name, salary)
  }

  responsibilities() {
    return 'процес створення програм'
  }
}

class Tester extends Employee {
  constructor(name, salary) {
    super(name, salary)
  }

  responsibilities() {
    return 'процес тестування'
  }
}

const dev = new Developer('Андрій', 100000)
console.log(dev.getPaid())
console.log(dev.work())

const tester = new Tester('Оксана', 90000)
console.log(tester.getPaid())
console.log(tester.work())

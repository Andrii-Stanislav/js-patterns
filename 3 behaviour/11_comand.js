class MyMath {
  constructor(initialValue = 0) {
    this.num = initialValue
  }

  square() {
    return this.num ** 2
  }

  cube() {
    return this.num ** 3
  }
}

class Command {
  constructor(subject) {
    this.subject = subject
    this.commandsExecuted = []
  }

  execute(command) {
    if (this.subject[command]) {
      this.commandsExecuted.push(command)
      return this.subject[command]()
    }
    return 'command not found'
  }
}

const x = new Command(new MyMath(2))

console.log(x.execute('square'))
console.log(x.execute('cube'))
console.log(x.execute('qweqwe'))

console.log(x.commandsExecuted)

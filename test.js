class NewArr extends Array {
  constructor(arrLength) {
    super(arrLength).fill(1)
  }

  elToString() {
    this.splice(0, this.length, ...this.map((el) => el.toString()))
    return this
  }
}

const newArr = new NewArr(2)
console.log('newArr: ', newArr)
newArr.elToString()
console.log('newArr: ', newArr)
console.log('newArr: ', newArr)

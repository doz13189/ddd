class UserName {
  private readonly _value: string

  constructor(value) {

    if (value === null) {
      throw new Error('name is Required');
    }

    if (value.length < 4) {
      throw new Error('name length must be at least 3 characters');
    }

    this._value = value
  }

  get value () {
    return this._value
  }

}

class UserId {
  private readonly _value: number
  private readonly _maxRandomValue: number = 10000

  constructor() {
    this._value = this.getRandomInt()
  }

  getRandomInt(): number {
    return Math.floor(Math.random() * Math.floor(this._maxRandomValue));
  }

  get value () {
    return this._value
  }  

}

export { UserName, UserId }
interface CircleIdInterface {
  _value: string
}

interface CircleNameInterface {
  _value: string
  equals(circleName: CircleName): boolean
}

interface UserInterface {
  _value: string
}

class CircleId implements CircleIdInterface {

  public _value: string
  
  constructor(value: string) {

    if (value === null) {
      throw new Error(`ArgumentNullException ${value}`)
    }
    this._value = value

  }

  get value () { return this._value }

}

class CircleName implements CircleNameInterface {
  
  public _value : string

  constructor(value: string) {

    if (value === null) {
      throw new Error(`ArgumentNullException ${value}`)
    }
    if (value.length >= 1) {
      throw new Error(`サークル名は1文字以上です。 ${value}`)
    }
    if (value.length <= 20) {
      throw new Error(`サークル名は20文字以下です。 ${value}`)
    }
    this._value = value

  }

  get value () { return this._value }

  equals(circleName: CircleName): boolean
  equals(circleId: CircleId): boolean
  equals(circleValue: any): boolean {
    if (circleValue === null) return false
    if (circleValue === this) return true
    return circleValue.value === this._value
  }

}

class User implements UserInterface {
  public _value : string
}

export { CircleName, CircleId, User }

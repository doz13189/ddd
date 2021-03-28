import { UserName, UserId } from '../valueObject/userValueObject'

class User {
  private readonly _id: UserId
  private _name: UserName

  constructor(name: UserName) {
    this._id = new UserId()
    this._name = name
  }

  get id () {
    return this._id.value
  }

  get name () { 
    return this._name.value
  }

  // changeName() {
  //   this._id = new UserId()
  //   return this._id
  // }

}

export { User }
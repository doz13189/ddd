import { CircleName, CircleId, User } from './valueObject'


interface CircleInterface {

}


class Circle implements CircleInterface {

  public _circleName: CircleName
  public _circleId: CircleId
  public _owner: User
  public _members: Array<User>

  constructor(
    circleName: CircleName,
    circleId: CircleId,
    owner: User,
    members: Array<User>
  ) {

    this._circleName = circleName
    this._circleId = circleId
    this._owner = owner
    this._members = members

  }

  get circleName () { return this._circleName }
  get circleId () { return this._circleId }
  get owner () { return this._owner }
  get members () { return this._members }

  set circleName (circleName) { this._circleName = circleName }
  set circleId (circleId) { this._circleId = circleId }
  set owner (owner) { this._owner = owner }
  set members (members) { this._members = members }

}

export { Circle }

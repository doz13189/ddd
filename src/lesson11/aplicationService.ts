import { Circle } from './entity'
import { CircleRepository, UserRepository } from './repository'
import { CircleFactory } from './factory'
import { CircleName, CircleId, User } from './valueObject'


interface CircleCommandInterface {

}

interface CircleAplicationServiceInterface {
  create(CircleCommand): void
}


class CircleCommand implements CircleCommandInterface {

  public _userId: string
  public _userName: string

  constructor(userId: string, userName: string) {

    this._userId = userId
    this._userName = userName

  }

  get userId () { return this._userId }
  get userName () { return this._userName }

}

class UserId {
  private _userId: string
  constructor(userId: string) { this._userId = userId }

}

class CircleAplicationService implements CircleAplicationServiceInterface {

  private _circle: Circle
  private _circleRepository: CircleRepository
  private _userRepository: UserRepository
  private _circleFactory: CircleFactory

  public _userId: string
  constructor(circle: Circle, circleRepository: CircleRepository, userRepository: UserRepository, circleFactory: CircleFactory) {

    this._circle = circle
    this._circleRepository = circleRepository
    this._userRepository = userRepository
    this._circleFactory = circleFactory

  }

  create(command: CircleCommand): void {
    const ownerId = new UserId(command.userId)
    this._userRepository(ownerId)

  }

}



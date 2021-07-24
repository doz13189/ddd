import { Circle } from './entity'
import { CircleRepository } from './repository'
import { CircleId } from './valueObject'


interface CircleServiceInterface {
  exists(circle: Circle): boolean
}

class CircleService implements CircleServiceInterface {
  private _circleRepository: CircleRepository

  constructor (circleRepository: CircleRepository) {
    this._circleRepository = circleRepository
  }

  exists(circle: Circle): boolean {
    const deplicated = this._circleRepository.find(new CircleId('a'))
    return Boolean(deplicated)
  }
}


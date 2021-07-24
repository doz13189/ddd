import { Circle } from './entity'
import { CircleName, CircleId, User } from './valueObject'


interface CircleFactoryInterface {
  create(circleName: CircleName, owner: User): Circle
}

class CircleFactory implements CircleFactoryInterface {

  create(circleName: CircleName, owner: User): Circle {
    return new Circle(circleName, new CircleId('a'), owner, Array(owner))
  }

}

export { CircleFactory }

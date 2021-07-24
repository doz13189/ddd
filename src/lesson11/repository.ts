import { Circle } from './entity'
import { CircleName, CircleId } from './valueObject'



interface CircleRepositoryInterface {
  save(circle: Circle): void
  find(circleId: CircleId): Circle
  find(circleName: CircleName): Circle
}

class CircleRepository implements CircleRepositoryInterface {
  save(circle: Circle): void {

  }

  find(circleId: CircleId): Circle
  find(circleName: CircleName): Circle
  find(circleValue: any) : Circle {
    return circleValue
  }
}

interface UserRepositoryInterface {
  save(circle: Circle): void
  find(circleId: CircleId): Circle
  find(circleName: CircleName): Circle
}

class UserRepository implements UserRepositoryInterface {
  save(circle: Circle): void {

  }

  find(circleId: CircleId): Circle
  find(circleName: CircleName): Circle
  find(circleValue: any) : Circle {
    return circleValue
  }
}


export { CircleRepository, UserRepository }
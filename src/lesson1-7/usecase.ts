import { User } from './entity/userEntity'
import { UserName, UserId } from './valueObject/userValueObject'
import { UserService } from './domainService/userService'
import { userData } from './data/userData'

class Program {

  constructor() {}

  createUser(userName: string): void {

    const user = new User(
      new UserName(userName)
    )

    const userService = new UserService()
    if (userService.exists(user)) {
      throw new Error('this user is aleady exists')
    }

    userData.push({
      id: user.id,
      name: user.name
    })

  }
}

// 基本的な使い方
const beal = new User(new UserName('beal'))
console.log(beal.name)
console.log(beal.id)

// UserName は値オブジェクトであり、値は不変である
// そのため、以下のような値を変更することは許されない
let lopez = new UserName('lopez')
// lopez.value = 'robin'

// UserName は値オブジェクトであり、交換が可能である
// そのため、値を変更する場合は交換によって変更する必要がある
lopez = new UserName('robin')


const program =  new Program()
program.createUser('hachimura')


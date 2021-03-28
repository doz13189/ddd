import { User } from '../entity/userEntity'
import { userData } from '../data/userData'

class UserService {

  constructor() {}

  exists (user: User): boolean {
    const deplicateUser = userData.filter(v => v.id === user.id )
    // const deplicateUser = userData.filter(v => v.id === 3 )
    if (deplicateUser.length === 0) {
      return false
    } else {
      return true
    }

  }

}

export { UserService }

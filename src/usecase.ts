
class UserName {
  public value: string

  constructor(value) {

    if (value === null) {
      throw new Error('name is Required');
    }

    if (value.length < 4) {
      throw new Error('name length must be at least 3 characters');
    }

    this.value = value
  }

}


class UserId {
  public value: string

  constructor(value) {

    if (value === null) {
      throw new Error('id is Required');
    }

    this.value = value
  }

}


class User {
  public name: UserName
  public id: UserId

  constructor(name: UserName) {
    this.name = name
    this.id = new UserId(1)
  }

  get _name () { 
    return this.name
  }

  get _id () { 
    return this.id
  }
}

class UserService {

  constructor() {}

  exists (user: User): boolean {
    // return true
    return false
  }

}

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

    console.log('user is created !!')
    
  }
}

const beal = new User(new UserName('beal'))
console.log(beal.name)
console.log(beal.id)

// const ja = new User('ja')
// console.log(ja.name)
// console.log(ja.id)

// const userError = new User(null)
// console.log(userError.name)
// console.log(userError.id)


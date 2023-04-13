class Name {
  firstName: string
  lastName: string
  constructor(firstName: string, lastName: string) {
    this.firstName = firstName
    this.lastName = lastName
  }
  // 设置存取器
  // 读取器：用来读取数据
  get fullName() {
    return this.firstName + '-' + this.lastName
  }
}

const n = new Name()

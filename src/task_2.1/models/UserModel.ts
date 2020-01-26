class UserModel {
  public id: string;
  public login: string;
  public password: string;
  public age: number;
  public isDeleted: boolean;

  constructor(id: string, login: string,  password: string, age: number) {
    this.id = id;
    this.login = login;
    this.password = password;
    this.age = age;
    this.isDeleted = false;
  }
}

export default UserModel;
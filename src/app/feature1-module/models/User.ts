export class User {
  public id: number;
  public firstName: string;
  public lastName: string;
  public avatar: string;

  constructor(id?: number, firstName?: string, lastName?: string, avatar?: string) {
    this.id = id;
    this.firstName = firstName;
    this.lastName = lastName;
    this.avatar = avatar;
  }


}

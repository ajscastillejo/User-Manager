export class User {
  public id: number;
  public first_name: string;
  public last_name: string;
  public avatar: string;

  constructor(id?: number, firstName?: string, lastName?: string, avatar?: string) {
    this.id = id;
    this.first_name = firstName;
    this.last_name = lastName;
    this.avatar = avatar;
  }


}

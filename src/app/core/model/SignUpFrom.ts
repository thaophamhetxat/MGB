export class SingUpFrom {
  private firstName!: string;
  private username!: string;
  private email!: string;
  private password!: string;
  private avatar!: string;
  private roles!: string[];

  constructor(username: string, password: string, email: string, firstName: string) {
    this.username = username;
    this.password = password;
    this.email = email;
    this.firstName = firstName;
    this.roles = ['user']
  }
}

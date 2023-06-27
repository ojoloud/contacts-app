
class User {
    private _firstName: String;
    public get firstName(): String {
        return this._firstName;
    }
    public set firstName(value: String) {
        this._firstName = value;
    }
    private _lastName: String;
    public get lastName(): String {
        return this._lastName;
    }
    public set lastName(value: String) {
        this._lastName = value;
    }
    private _email: String;
    public get email(): String {
        return this._email;
    }
    public set email(value: String) {
        this._email = value;
    }
    private _password: String;
    public get password(): String {
        return this._password;
    }
    public set password(value: String) {
        this._password = value;
    }

    public setFirstName(firstName: String) {
        this.firstName = firstName;
    }
    public setLastName(lastName: String) {
        this.lastName = lastName;
    }
   constructor(firstName: String, lastName: String, email: String, password: String){
    this._firstName = firstName
    this._lastName = lastName
    this._email = email
    this._password = password
   }
}
export default User;
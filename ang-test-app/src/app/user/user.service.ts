import {User} from "./user.model";
import {BehaviorSubject} from "rxjs";

export class UserService {
  aktutellerUser = new BehaviorSubject<User>(undefined);
  public alleUser : User[] = [];


  constructor() {
    for (let i=0;i<100;i++){
      this.alleUser.push(new User(i,'user '+i));
    }
  }

  UserById(userId: number) {
    return this.alleUser[userId];

  }

  speichern(id: number, name: string) {
    this.alleUser[id].name=name
  }
}

import { Injectable } from '@angular/core';
import { User } from '../models/user.model';

@Injectable()
export class UserService {
  user: User;

  constructor() {
    this.user = new User("Alice", 500, 0);
  }

  getUser(): User {
    return this.user;
  }

  setUser(u: User) {
    this.user = u;
  }

  updateCoins(n: number) {
    this.user.coins += n;
  }

  updateScore(n: number) {
    this.user.score += n;
  }

}

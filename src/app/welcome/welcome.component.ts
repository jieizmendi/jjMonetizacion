import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {User} from '../models/user.model';
import {UserService} from '../services/user.service';
import {GameService} from '../services/game.service';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {

  user: User;// = new User("Alice", 500);

  constructor(
    private userService: UserService,
    private router: Router,
    private gameService:GameService
  ) { 
    this.user = this.userService.getUser();
  }

  ngOnInit() {
    this.gameService.reset();
  }

  onFree(){
    this.userService.setUser(this.user);
    this.router.navigate(['quiz']);
  }

  onBuy(){
    this.userService.setUser(this.user);
    this.userService.updateCoins(-500);
    this.gameService.goFull();
    this.router.navigate(['quiz']);
  }

  onFreemium(){
    this.userService.setUser(this.user);
    this.gameService.goFreemium();
    this.router.navigate(['quiz']);
  }
}

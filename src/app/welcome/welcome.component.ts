import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {User} from '../models/user.model';
import {UserService} from '../services/user.service';

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
  ) { 
    this.user = this.userService.getUser();
  }

  ngOnInit() {
    
  }

  onSubmit() { 
    this.userService.setUser(this.user);
    this.router.navigate(['quiz']);
  }

}

import { Component, OnInit } from '@angular/core';

import {User} from '../../models/user.model';
import {UserService} from '../../services/user.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  user: User;

  constructor(private userService:UserService) {
    this.user = this.userService.getUser();
   }

  ngOnInit() {
  }

}

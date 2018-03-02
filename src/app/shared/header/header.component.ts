import { Component, OnInit } from '@angular/core';

import {User} from '../../models/user.model';
import {Game} from '../../models/game.model';
import {UserService} from '../../services/user.service';
import {GameService} from '../../services/game.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  user: User;
  game: Game;
  constructor(private userService:UserService, private gameService:GameService) {
    this.user = this.userService.getUser();
    this.game = this.gameService.getGame();
   }

  ngOnInit() {
  }

}

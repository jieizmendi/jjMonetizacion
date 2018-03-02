import { Component, OnInit, Input } from '@angular/core';

import { Question } from '../../models/question.model';
import { User } from '../../models/user.model';
import { Game } from '../../models/game.model';

import { UserService } from '../../services/user.service';
import { GameService } from '../../services/game.service';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css']
})
export class QuestionComponent implements OnInit {
  @Input() question: Question;
  user: User;
  game: Game;
  answers: string[];
  answer: string;

  tipEnable: boolean = false;
  skipEnable: boolean = false;

  constructor(private userService: UserService, private gameService: GameService) {
    this.user = this.userService.getUser();
    this.game = this.gameService.getGame();
  }

  ngOnInit() {
    this.answers = shuffle(this.question.answers);
    this.updateView();
  }

  updateView() {
    if (this.user.coins - this.game.priceSkip >= 0)
      this.skipEnable = true;
    if (this.user.coins - this.game.priceTip >= 0)
      this.tipEnable = true;
    if(this.game.full)
    {
      this.tipEnable = true;
      this.skipEnable = true;
    }
  }

  onGo() {

  }

  onSkip() {

  }

  onTip() {

  }

}

function shuffle(a) {
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { MatSnackBar } from '@angular/material';
import { Question } from '../../models/question.model';
import { User } from '../../models/user.model';
import { Game } from '../../models/game.model';

import { UserService } from '../../services/user.service';
import { GameService } from '../../services/game.service';

class Answ {
  text: string;
  correct: boolean;
  disabled: boolean;
};

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css']
})
export class QuestionComponent implements OnInit {
  question: Question;
  @Input() set questionn(value: Question) {
    this.question = value;
    this.ngOnInit();
  };
  user: User;
  game: Game;
  answers: Answ[];
  @Output() next = new EventEmitter<any>();

  tipEnable: boolean = false;
  tipEnableFreemium: boolean = false;
  tipUsed: boolean = false;
  skipEnable: boolean = false;

  constructor(private userService: UserService, private gameService: GameService, public snackBar: MatSnackBar) {
    this.user = this.userService.getUser();
    this.game = this.gameService.getGame();
  }

  ngOnInit() {
    this.answers = [
      { text: this.question.answers[0], correct: true, disabled: false },
      { text: this.question.answers[1], correct: false, disabled: false },
      { text: this.question.answers[2], correct: false, disabled: false },
      { text: this.question.answers[3], correct: false, disabled: false }
    ];
    this.answers = shuffle(this.answers);
    this.tipEnable = false;
    this.tipEnableFreemium = false;
    this.tipUsed = false;
    this.skipEnable = false;
    this.updateView();
  }

  updateView() {
    if (this.user.coins - this.game.priceSkip >= 0)
      this.skipEnable = true;
    else
      this.skipEnable = false;
    if (this.user.coins - this.game.priceTip >= 0)
      this.tipEnable = true;
    else
      this.tipEnable = false;
    if (this.game.full) {
      this.tipEnable = true;
      this.skipEnable = true;
    }
    if (this.tipUsed) this.tipEnable = false;
    if (this.game.freemium && (this.user.score - this.game.priceTipFree >= 0))
      this.tipEnableFreemium = true;
    else
      this.tipEnableFreemium = false;
  }

  onGo(n: number) {
    if (!this.answers[n].correct) {
      this.userService.updateScore(0);
      this.nextQuestion(false);
    }
    else if (this.tipUsed) {
      this.userService.updateScore(1);
      this.nextQuestion(true);
    }
    else {
      this.userService.updateScore(2);
      this.nextQuestion(true);
    }
  }
  nextQuestion(e: boolean) {
    if (e) {
      this.openSnackBar("Bien!!!!", "cerrar");
    } else {
      this.openSnackBar(":( !", "cerrar");
    }
    setTimeout(() => { this.next.emit(e); }, 1000);
    
  }

  onSkip() {
    this.userService.updateCoins(-this.game.priceSkip);
    this.userService.updateScore(1);
    //go next
  }

  onTip() {
    this.userService.updateCoins(-this.game.priceTip);
    this.tipEnableFreemium = true;
    let c = 0;
    while (c < 2) {
      let i = randomInt(0, 3);
      if (!this.answers[i].correct && !this.answers[i].disabled) {
        this.answers[i].disabled = true;
        c++;
      }
    }
    this.updateView();
  }

  onTipFree() {
    this.userService.updateScore(-this.game.priceTipFree);
    this.tipUsed = true;
    let c = 0;
    while (c < 2) {
      let i = randomInt(0, 3);
      if (!this.answers[i].correct && !this.answers[i].disabled) {
        this.answers[i].disabled = true;
        c++;
      }
    }
    this.updateView();
  }

  openSnackBar(message: string, action: string) {
    this.snackBar.open(message, action, {
      duration: 1000,
    });
  }

}

function shuffle(a) {
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

function randomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
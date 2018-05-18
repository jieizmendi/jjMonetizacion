import { Component, OnInit, Input } from '@angular/core';
import { User } from '../../models/user.model';
import { UserService } from '../../services/user.service';
import { Question } from '../../models/question.model';
import { QuestionService } from '../../services/question.service';
import { MatDialog } from '@angular/material';
import { PublicityComponent } from '../publicity/publicity.component';
import { Game } from '../../models/game.model';
import { GameService } from '../../services/game.service';

interface qshow {
  name: number;
  color: string;
  selected: string;
}


@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css']
})
export class QuizComponent implements OnInit {
  qs: qshow[];
  user: User;
  game: Game;
  selectedQuestion: Question;
  index: number;
  endGame: boolean = false;

  constructor(
    private userService: UserService,
    private questionService: QuestionService,
    public dialog: MatDialog,
    private gameService: GameService
  ) {
    this.user = this.userService.getUser();
    this.game = this.gameService.getGame();
    this.index = 1;
    this.selectedQuestion = this.questionService.getQuestion(0);

    this.qs = new Array<qshow>();
    for (let i = 0; i < this.questionService.getQuantity(); i++)
      this.qs.push({ name: i + 1, color: 'asd', selected: 'false' });
  }

  ngOnInit() {
  }

  next(event) {
    if (!event)
      this.qs[this.index - 1].color = "warn";
      else 
      this.qs[this.index - 1].color = "primary";
    this.qs[this.index - 1].selected = "true";
    this.user.answers[this.index - 1] = event;
    if (this.index == this.questionService.getQuantity()) {
      this.endGame = true;
      return;
    }
    if (this.game.publicity)
      this.openDialog();
    this.selectedQuestion = this.questionService.getQuestion(this.index);
    this.index++;
  }

  openDialog(): void {
    //let dialogRef = this.dialog.open(PublicityComponent, {
    //  width: '250px',
    //  data: {}
    //});
    let dialogRef = this.dialog.open(PublicityComponent, {disableClose: true});

    dialogRef.afterClosed().subscribe(result => {
    });
  }

}

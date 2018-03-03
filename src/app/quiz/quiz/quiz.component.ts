import { Component, OnInit, Input } from '@angular/core';
import { User } from '../../models/user.model';
import { UserService } from '../../services/user.service';
import { Question } from '../../models/question.model';
import { QuestionService } from '../../services/question.service';
import { MatDialog } from '@angular/material';
import { PublicityComponent } from '../publicity/publicity.component';
import { Game } from '../../models/game.model';
import { GameService } from '../../services/game.service';
@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css']
})
export class QuizComponent implements OnInit {
  user: User;
  game: Game;
  selectedQuestion: Question;
  index: number;

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
  }

  ngOnInit() {
  }

  next($event) {
    if (this.game.publicity)
      this.openDialog();
    this.selectedQuestion = this.questionService.getQuestion(this.index);
    this.index++;
    if (this.index == this.questionService.getQuantity()) {
      //do end
    }
  }

  openDialog(): void {
    let dialogRef = this.dialog.open(PublicityComponent, {
      width: '250px',
      data: {}
    });

    dialogRef.afterClosed().subscribe(result => {
    });
  }

}

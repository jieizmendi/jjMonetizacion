import { Component, OnInit } from '@angular/core';

import { User } from '../../models/user.model';
import { UserService } from '../../services/user.service';
import { Question } from '../../models/question.model';
import { QuestionService } from '../../services/question.service';

class qq {
  q: string;
  a: string;
  ok: boolean;
}

@Component({
  selector: 'app-congratulations',
  templateUrl: './congratulations.component.html',
  styleUrls: ['./congratulations.component.css']
})
export class CongratulationsComponent implements OnInit {
  percentage: number;
  user: User;
  questions: Question[];
  public qqq: qq[];

  constructor(
    private userService: UserService,
    private questionService: QuestionService
  ) {
    this.user = this.userService.getUser();
    this.questions = this.questionService.getQuestions();
    this.qqq = new Array<qq>(this.questionService.getQuantity());
    //this.qqq = new qq[this.questionService.getQuantity()];
  }

  ngOnInit() {
    this.percentage = 0;
    for (let i = 0; i < this.questionService.getQuantity(); i++) {
      this.qqq[i] = { q: this.questions[i].question, a: this.questions[i].answers[0], ok: this.user.answers[i] };
      if (this.qqq[i].ok) this.percentage++;
    }
    this.percentage /= this.questionService.getQuantity();
    this.percentage *= 100;
  }

}

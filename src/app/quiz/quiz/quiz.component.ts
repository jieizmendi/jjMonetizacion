import { Component, OnInit, Input } from '@angular/core';
import { User } from '../../models/user.model';
import { UserService } from '../../services/user.service';
import { Question } from '../../models/question.model';
import { QuestionService } from '../../services/question.service';
@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css']
})
export class QuizComponent implements OnInit {
  user: User;
  selectedQuestion: Question;
  index: number;

  constructor(private userService: UserService, private questionService: QuestionService) {
    this.user = this.userService.getUser();
    this.index = 1;
    this.selectedQuestion = this.questionService.getQuestion(0);
  }

  ngOnInit() {
  }

  next($event) {
    this.selectedQuestion = this.questionService.getQuestion(this.index);
    this.index++;
    if(this.index == this.questionService.getQuantity()){
      //do end
    }
  }

}

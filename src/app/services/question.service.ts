import { Injectable } from '@angular/core';

import { Question, QUESTIONS } from '../models/question.model';

@Injectable()
export class QuestionService {
  
  constructor() { }

  getQuestion(id: number): Question {
    return QUESTIONS[id];
  }
  getQuestions(): Question[] {
    return QUESTIONS;
  }
  getQuantity():number{
    return QUESTIONS.length;
  }

}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QuizComponent } from './quiz/quiz.component';
import { HttpClientModule } from '@angular/common/http';
import { MaterialModule } from '../shared/material.module';
import { QuizRouting } from './quiz-routing.module';
import { QuestionComponent } from './question/question.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PublicityComponent } from './publicity/publicity.component';
import { CongratulationsComponent } from './congratulations/congratulations.component';
@NgModule({
  imports: [
    CommonModule,
    QuizRouting,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [QuizComponent, QuestionComponent, PublicityComponent, CongratulationsComponent],
  entryComponents: [PublicityComponent]
})
export class QuizModule { }

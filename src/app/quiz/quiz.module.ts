import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QuizComponent } from './quiz/quiz.component';
import { HttpClientModule } from '@angular/common/http';
import { MaterialModule } from '../shared/material.module';
import { QuizRouting } from './quiz-routing.module';
import { QuestionComponent } from './question/question.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PublicityComponent } from './publicity/publicity.component';
import { QuestionResultComponent } from './questionResult/questionResult.component';
import { CongratulationsComponent } from './congratulations/congratulations.component';
@NgModule({
  imports: [
    CommonModule,
    QuizRouting,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [QuizComponent, QuestionComponent, PublicityComponent,QuestionResultComponent, CongratulationsComponent],
  entryComponents: [PublicityComponent,QuestionResultComponent]
})
export class QuizModule { }

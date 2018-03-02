import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';

import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { MaterialModule } from './shared/material.module';
import { WelcomeComponent } from './welcome/welcome.component';

import { QuizModule } from './quiz/quiz.module';

import { UserService } from './services/user.service';
import { QuestionService } from './services/question.service';
import { GameService } from './services/game.service';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { query } from '@angular/animations/src/animation_metadata';

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AppRoutingModule,
    MaterialModule,
    QuizModule,
    FormsModule, ReactiveFormsModule
  ],
  providers: [UserService, QuestionService, GameService],
  bootstrap: [AppComponent]
})
export class AppModule { }

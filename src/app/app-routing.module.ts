import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { WelcomeComponent } from './welcome/welcome.component';
import { QuizComponent } from './quiz/quiz/quiz.component';

//CommonModule,RouterModule.forRoot(routes,{useHash:true})

const routes: Routes = [
    {
        path: '',
        component: WelcomeComponent
    },
    {
        path: 'quiz',
        component: QuizComponent
    },
    {
        path: '**',
        component: WelcomeComponent
    }
];

@NgModule({
    imports: [CommonModule, RouterModule.forRoot(routes,{useHash:true})],
    exports: [RouterModule]
})
export class AppRoutingModule { }
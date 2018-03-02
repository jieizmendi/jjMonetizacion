import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WelcomeComponent } from './welcome/welcome.component';
import { QuizComponent } from './quiz/quiz/quiz.component';

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
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
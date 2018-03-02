export class Question {
    constructor(public question: string, public answers: string[]) { }
}

export const QUESTIONS: Question[] = [
    new Question("Pregunta 1", ["Correcta","Incorrecta","Incorrecta","Incorrecta"]),
    new Question("Pregunta 2", ["Correcta","Incorrecta","Incorrecta","Incorrecta"]),
    new Question("Pregunta 3", ["Correcta","Incorrecta","Incorrecta","Incorrecta"]),
];
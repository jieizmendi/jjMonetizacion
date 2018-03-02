export class Question {
    constructor(public question: string, public answers: string[]) { }
}

export const QUESTIONS: Question[] = [
    new Question("Pregunta 1", ["Correcta1", "aaaaaaa1", "aaaaaaa2", "aaaaaaa3"]),
    new Question("Pregunta 2", ["Correcta2", "bbbbbbb1", "bbbbbbb2", "bbbbbbb3"]),
    new Question("Pregunta 3", ["Correct3", "ccccccc1", "ccccccc2", "ccccccc3"]),
];
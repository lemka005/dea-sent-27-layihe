export class Question {
    public id: number;
    public question: string;
    public answers: Answer[] = [];
    public studentAnswer: string;

}

export class Answer {

    constructor(public answer: string,
        public correct: boolean) {
        

    }
}
import { Injectable } from '@angular/core';
import { Question, Answer } from '../model/question';

@Injectable({
  providedIn: 'root'
})
export class QuestionService {
  questions: Question[] = [];
  constructor() {

    let q1: Question = new Question();
    q1.question = 'ingilis idlinde nece herf var?';
    q1.id = 1;
    q1.studentAnswer = '';
    q1.answers.push(new Answer('25', false),
      new Answer('26', true), new Answer('27', false));


      let q2: Question = new Question();
    q2.question = 'ingilis idlinde nece ses var?';
    q2.id = 2;
    q2.studentAnswer = '';
    q2.answers.push(new Answer('42', false),
      new Answer('43', false), new Answer('44', true));




      this.questions.push(q1,q2);

  }
}

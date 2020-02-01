import { Component, OnInit } from '@angular/core';
import { Question } from 'src/app/model/question';
import { QuestionService } from 'src/app/service/question.service';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css']
})
export class QuizComponent implements OnInit {
  questions: Question[] = [];

  constructor(private questionService:QuestionService) { }

  ngOnInit() {
this.questions=this.questionService.questions.slice();
  }

  onSeeResults(){
    let totalPoint:number=0;

    for (let index = 0; index < this.questions.length; index++) {
      const q = this.questions[index];
    
      for (let index2 = 0; index2 < q.answers.length; index2++) {
        const a = q.answers[index2];
        if(a.correct && a.answer==q.studentAnswer){
          totalPoint++; break;
        }
        
      }
    }

    alert('neticen = '+totalPoint);

  }
}

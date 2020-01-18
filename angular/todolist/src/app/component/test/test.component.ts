import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

  questions: string[] = [
    "  angular proqram yazmaq ucun hansi proqrami qururuq?",
    "angular cli-i qurmaq ucun hansi komandani yaziriq?",
    "angular-da yeni proyekti nece yaradiriq?",
    "angular proyekti hansi proqram vasitesile redakte edirik?",
    "angular proqrami run etmek ucun ne edirik?",
    "run olmus angular proqrami nece ise saliriq?",
    "string interpolation nedir?",
    "2 way data binding nedir?",
    "ngModel nedir?",
    "*ngIf ne ucundur?",
    "dovrun sintaksisi necedir?",
    "dovrun daxilinde olan saygacin sintaksisi necedir?",
    "angular proyekte bootstrap qurmaq ucun hansi addimlari edirik?",
    "angular-da komponent nedir ve ne ucun istifade olunur?",
    "angular-da komponentlerin istifade qaydalarini goster",
    "komponent selector nedir?",
    "ngModel - i istifade etmek ucun hansi modulu ve nece import etmek lazimdir?",
    "angular-da komponent-de nece eded css qosmaq olar?",
    "styles.css fayli ne ucundur?",
    "ngStyle propertisinin sintaksisi necedir?"
  ];

  students:string[]=[
    "Ləman","Vaqif","Zəhranur","Fərid","Tofiq","Şahin","İsmayıl"
  ];

  studentQuestions:StudentQuestion[]=[];
  constructor() { }

  ngOnInit() {
   

  }
  shuffleQuestions() {
    this.studentQuestions=[];
    for (let index = 0; index < this.students.length; index++) {
     let studentQuestion:StudentQuestion=new StudentQuestion();
     studentQuestion.student=this.students[index];
     let a=Math.random()*20;
     console.log(a);
     a=Number.parseInt(a.toFixed(0));
      studentQuestion.question=this.questions[a];
     this.studentQuestions.push(studentQuestion);
    }
    this.studentQuestionsOrginal=this.studentQuestions.slice();
  }

  search:string='';
  studentQuestionsOrginal:StudentQuestion[]=[];
  searchMethod(){
  let studentQuestions:StudentQuestion[]=[];
  this.studentQuestions=this.studentQuestionsOrginal.slice();
  for (let index = 0; index < this.studentQuestions.length; index++) {
    const element = this.studentQuestions[index];
    if(element.student.startsWith(this.search)){
      studentQuestions.push(element);
    }
    
  }

  this.studentQuestions=studentQuestions;

  }
}


export class StudentQuestion{
  public student:string;
  public question:string;

}
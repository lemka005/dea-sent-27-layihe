import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

  questions: string[] = [
    "What is angular?",

    "Versions of angular?",

    "Angular by google?",

    "Javascript frameworks?",

    "Why we should learn angular?",
    "How to develop angular applications?",

    "Angular development environment?",

    "Install Node JS for angular?",

    "What is npm?",

    "Install angular cli?",

    "What is cli?",

    "Create brand new angular project?",

    "Run angular application?",

    "Run angular application in different port address?",

    "Edit angular application with IDE?",

    "Install Visual Studio Code for editing angular applications",

    "Angular uses typescript instead of javascript",

    "What is typescript",

    "What is difference between typescript and javascript?",

    "Typescript basics",

    "Create arrays in typescript",

    "Typescript is strong typed",

    "let and const in typescript",

    "Using classes in typescript ",
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

  students: string[] = [
    "Ləman", "Zəhranur", "Fərid", "Tofiq", "Şahin", "İsmayıl"
  ];

  studentQuestions: StudentQuestion[] = [];
  constructor() { }

  ngOnInit() {


  }
  shuffleQuestions() {
    this.studentQuestions = [];
    let telebeSayi: number = this.students.length; // 6

    let umumiSualSayi: number = this.questions.length; // 44

    let verilenSualSayi: number = 0;


    let index: number = 0;

    while (verilenSualSayi < telebeSayi) {


      let studentQuestion: StudentQuestion = new StudentQuestion();

      studentQuestion.student = this.students[index];

      let rand=Math.random();// minimum 0, maksimum 0.9999999999999
      if(rand>0.94){  
rand=0.94;
      } 
      let a =  rand* umumiSualSayi;

      a = Number.parseInt(a.toFixed(0));  //  

      let question: string = this.questions[a];
      let buVarmi: boolean = false;
      for (let index = 0; index < this.studentQuestions.length; index++) {
        const e = this.studentQuestions[index];
        if (e.question == question) {
          buVarmi = true; break;
        }

      }

      if (buVarmi || !question.endsWith("?")) {
        console.log("continue");
        continue;
        
      } else {
        studentQuestion.question = question;
        verilenSualSayi++;
        index++;
      }

      this.studentQuestions.push(studentQuestion);


    }


    this.studentQuestionsOrginal = this.studentQuestions.slice();
  }

  search: string = '';
  studentQuestionsOrginal: StudentQuestion[] = [];
  searchMethod() {
    let studentQuestions: StudentQuestion[] = [];
    this.studentQuestions = this.studentQuestionsOrginal.slice();
    for (let index = 0; index < this.studentQuestions.length; index++) {
      const element = this.studentQuestions[index];
      let awesome='';
      awesome+= element.student+element.question;
      if (awesome.includes(this.search)) {
        studentQuestions.push(element);
      }

    }

    this.studentQuestions = studentQuestions;

  }
}


export class StudentQuestion {
  public student: string;
  public question: string;

}
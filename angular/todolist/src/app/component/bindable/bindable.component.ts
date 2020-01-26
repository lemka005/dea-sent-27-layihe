import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bindable',
  templateUrl: './bindable.component.html',
  styleUrls: ['./bindable.component.css']
})
export class BindableComponent implements OnInit {
name:string='Əli';
  constructor() { }

  ngOnInit() {
  }
  sayHello(){
    alert('Hello : '+this.name);
  }
}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent   {
 
 menu:string='menu1';
 
onButtonPressed(){
  
   this.menu='Angular';
}
}

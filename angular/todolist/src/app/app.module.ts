import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { TestComponent } from './component/test/test.component';
import { TodolistComponent } from './component/todolist/todolist.component';
import { ClassTestComponent } from './component/class-test/class-test.component';
import { DatePipe } from '@angular/common';
import { BindableComponent } from './component/bindable/bindable.component';
import { QuizComponent } from './component/quiz/quiz.component';
import { MenuComponent } from './component/menu/menu.component';
import { LoginComponent } from './component/login/login.component';
import { LogoutComponent } from './component/logout/logout.component';
 
@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    TodolistComponent,
    ClassTestComponent,
    BindableComponent,
    QuizComponent,
    MenuComponent,
    LoginComponent,
    LogoutComponent 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [ DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }

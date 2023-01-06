import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <app-test  (childEvent)="message=$event" [parentData]="name1"></app-test>
  <input [(ngModel)]="name" type="text">
  {{name}}
  
  <h1>{{message}}</h1>
  
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'twowaybinding';
  //ngModel Directive for two way binding
  public name="";
  public name1="vishwas";
  public message="";
  
}

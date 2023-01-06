import { Component, OnInit,Input,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-test',
  template: `
  
  <h2 *ngIf="true">Codevolution</h2>
  
  <h2 *ngIf="displayname">Codevolution</h2>
  
  <h2 *ngIf="displayname ; else elseBlock">Codevolution</h2>
  <ng-template #elseBlock>
  <h2>Name is hidden</h2>
  </ng-template>

  <div *ngIf="showname; then thenBlock; else elseBlock"></div>
  <ng-template #thenBlock>
  <h2>show volution</h2>
  </ng-template>
  <ng-template #elseBlock>
  <h2>Name is hidden</h2>
  </ng-template>
  
  
  <div [ngSwitch]="color">
  <div *ngSwitchCase="'red'">You picked red color</div>
  <div *ngSwitchCase="'blue'">You picked blue color</div>
  <div  *ngSwitchCase="'green'">You picked green color</div>
  </div>
  
  <div *ngFor="let color of colors">
  <h2>{{color}}</h2>
  </div>
  
  sending data from parent to child
  <h2>{{"Hello "+name}}</h2>
  
  <button (click)="fireEvent()">Send</button>
  
  <h2>Pipes</h2>
  <h2>{{name1}}</h2>
  <h2>{{name1|lowercase}}</h2>
  <h2>{{name1|uppercase}}</h2>
  <h2>{{message|titlecase}}</h2>
  <h2>{{name1|slice:3}}</h2>
  <h2>{{name1|slice:3:5}}</h2>
  <h2>{{person|json}}</h2>
  <h2>{{5.678|number:'1.2-3'}}</h2>
  <h2>{{5.678|number:'3.4-5'}}</h2>
  <h2>{{5.678|number:'3.1-2'}}</h2>
  <h2>{{0.25|percent}}</h2>
  <h2>{{0.25|currency}}</h2>
  <h2>{{0.25|currency:'EUR'}}</h2>
  
  <h2>{{date}}</h2>
  <h2>{{date|date:'short'}}</h2>
  <h2>{{date|date:'shortDate'}}</h2>
  <h2>{{date|date:'shortTime'}}</h2>
  `,
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {
//ngIf
displayname=false;
showname=true;

//ngSwitch
public color="blue";

//ngFor
public colors=["red","blue","green","yellow"];

//pipes
public name1="pratiksha";
public message="welcome to codevolution";
public person={
"firstname":"john",
"lastname":"doe",
}

public date=new Date();



  constructor() { }
  
  // we send parendata throgh input (name1) sending data from parent to child
  @Input("parentData") public name:any;
  
  //sending data from child to parent
  @Output() public childEvent=new EventEmitter();

  ngOnInit(): void {
  }
  
  fireEvent(){
  this.childEvent.emit('hey codevolution');
  }

}

import { Component ,Output ,EventEmitter, Input} from '@angular/core';

@Component({
    selector: 'welcome-child',
    templateUrl: './child.component.html'
  })


export class ChildComponent{

  @Input()
  uname:string;


  @Output()
  notify:EventEmitter<string> = new EventEmitter<string>();

  passdata(){
    this.notify.emit("this message is coming from child component");
  }
}

